// BankMock Pro - Exam State & Simulator Engine
// Manages real-time question palette transitions, section routing, and response recording

import { TimerManager } from './timerManager.js';
import { QuestionLibraryEngine } from './questionLibraryEngine.js';

export class ExamEngine {
  constructor(examConfig, levelKey, mockNumber = 1, onStateChange = () => {}, onSectionComplete = () => {}, onTestComplete = () => {}) {
    this.examConfig = examConfig;
    this.levelKey = levelKey;
    this.mockNumber = mockNumber;
    this.levelConfig = examConfig.levels[levelKey];
    this.onStateChange = onStateChange;
    this.onSectionComplete = onSectionComplete;
    this.onTestComplete = onTestComplete;

    this.currentSectionIndex = 0;
    this.currentQuestionIndex = 0;
    this.userResponses = {}; // key: uniqueId -> { selectedOption, status, timeSpentSeconds }
    this.timeSpentPerSection = {}; // key: sectionId -> seconds

    this.isTestFinished = false;
    this.timerManager = null;

    this.initializeQuestions();
    this.initializeResponses();
    this.setupTimer();
  }

  initializeQuestions() {
    // Generate thousands-scale unique mock test questions using QuestionLibraryEngine
    const sectionsWithQuestions = QuestionLibraryEngine.generateQuestionsForMock(
      this.examConfig,
      this.levelKey,
      this.mockNumber
    );

    this.levelConfig.sections = sectionsWithQuestions;

    this.levelConfig.sections.forEach((section) => {
      this.timeSpentPerSection[section.id] = 0;
    });
  }

  initializeResponses() {
    this.levelConfig.sections.forEach((section) => {
      section.questions.forEach((q) => {
        this.userResponses[q.uniqueId] = {
          selectedOption: null,
          status: 1, // 1: Not Visited
          isBookmarked: false,
          timeSpent: 0
        };
      });
    });

    // Mark the very first question as 2 (Not Answered)
    const firstQ = this.getCurrentQuestion();
    if (firstQ) {
      this.userResponses[firstQ.uniqueId].status = 2;
    }
  }

  setupTimer() {
    const isSectional = this.levelConfig.hasSectionalTiming;
    const duration = isSectional
      ? this.getCurrentSection().durationMinutes
      : this.levelConfig.totalDurationMinutes;

    this.timerManager = new TimerManager({
      durationMinutes: duration,
      onTick: (formattedTime, remainingSec) => {
        const secId = this.getCurrentSection().id;
        this.timeSpentPerSection[secId] = (this.timeSpentPerSection[secId] || 0) + 1;
        this.onStateChange({ type: 'TICK', formattedTime, remainingSec });
      },
      onWarning: (mins) => {
        this.onStateChange({ type: 'TIMER_WARNING', minutes: mins });
      },
      onExpire: () => {
        this.handleTimerExpiry();
      }
    });
  }

  start() {
    this.timerManager.start();
    this.notifyState();
  }

  handleTimerExpiry() {
    if (this.levelConfig.hasSectionalTiming) {
      if (this.currentSectionIndex < this.levelConfig.sections.length - 1) {
        // Auto-advance to next section
        this.onSectionComplete(this.getCurrentSection());
        this.currentSectionIndex++;
        this.currentQuestionIndex = 0;
        const nextSection = this.getCurrentSection();
        this.timerManager.reset(nextSection.durationMinutes);
        this.timerManager.start();
        const currentQ = this.getCurrentQuestion();
        if (currentQ && this.userResponses[currentQ.uniqueId].status === 1) {
          this.userResponses[currentQ.uniqueId].status = 2;
        }
        this.notifyState({ type: 'SECTION_AUTO_ADVANCED', section: nextSection });
      } else {
        // All sections completed
        this.finishTest();
      }
    } else {
      // Composite timer ended
      this.finishTest();
    }
  }

  getCurrentSection() {
    return this.levelConfig.sections[this.currentSectionIndex];
  }

  getCurrentQuestion() {
    const currentSec = this.getCurrentSection();
    return currentSec && currentSec.questions ? currentSec.questions[this.currentQuestionIndex] : null;
  }

  selectOption(optionIndex) {
    const q = this.getCurrentQuestion();
    if (!q) return;
    this.userResponses[q.uniqueId].selectedOption = optionIndex;
    this.notifyState({ type: 'OPTION_SELECTED' });
  }

  clearResponse() {
    const q = this.getCurrentQuestion();
    if (!q) return;
    this.userResponses[q.uniqueId].selectedOption = null;
    this.userResponses[q.uniqueId].status = 2; // back to Not Answered
    this.notifyState({ type: 'RESPONSE_CLEARED' });
  }

  saveAndNext() {
    const q = this.getCurrentQuestion();
    if (!q) return;
    const resp = this.userResponses[q.uniqueId];

    if (resp.selectedOption !== null && resp.selectedOption !== undefined) {
      resp.status = 3; // Answered
    } else {
      resp.status = 2; // Not Answered
    }

    this.advanceNextQuestion();
  }

  saveAndMarkForReview() {
    const q = this.getCurrentQuestion();
    if (!q) return;
    const resp = this.userResponses[q.uniqueId];

    if (resp.selectedOption !== null && resp.selectedOption !== undefined) {
      resp.status = 5; // Answered & Marked for Review
    } else {
      resp.status = 4; // Marked for Review
    }

    this.advanceNextQuestion();
  }

  markForReviewAndNext() {
    const q = this.getCurrentQuestion();
    if (!q) return;
    const resp = this.userResponses[q.uniqueId];

    if (resp.selectedOption !== null && resp.selectedOption !== undefined) {
      resp.status = 5; // Answered & Marked for Review
    } else {
      resp.status = 4; // Marked for Review (without answer)
    }

    this.advanceNextQuestion();
  }

  jumpToQuestion(sectionIndex, questionIndex) {
    if (this.levelConfig.hasSectionalTiming && sectionIndex !== this.currentSectionIndex) {
      return { allowed: false, message: 'Section switching is locked in this exam due to sectional timing.' };
    }

    this.currentSectionIndex = sectionIndex;
    this.currentQuestionIndex = questionIndex;

    const q = this.getCurrentQuestion();
    if (q && this.userResponses[q.uniqueId].status === 1) {
      this.userResponses[q.uniqueId].status = 2; // Visited but not answered yet
    }

    this.notifyState({ type: 'NAVIGATED' });
    return { allowed: true };
  }

  switchSection(sectionIndex) {
    if (this.levelConfig.hasSectionalTiming) {
      return { allowed: false, message: 'Cannot switch sections manually. Current section must expire or be submitted.' };
    }
    this.currentSectionIndex = sectionIndex;
    this.currentQuestionIndex = 0;
    const q = this.getCurrentQuestion();
    if (q && this.userResponses[q.uniqueId].status === 1) {
      this.userResponses[q.uniqueId].status = 2;
    }
    this.notifyState({ type: 'SECTION_SWITCHED' });
    return { allowed: true };
  }

  advanceNextQuestion() {
    const currentSec = this.getCurrentSection();
    if (this.currentQuestionIndex < currentSec.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      // Reached end of questions in this section
      if (!this.levelConfig.hasSectionalTiming && this.currentSectionIndex < this.levelConfig.sections.length - 1) {
        this.currentSectionIndex++;
        this.currentQuestionIndex = 0;
      }
    }

    const nextQ = this.getCurrentQuestion();
    if (nextQ && this.userResponses[nextQ.uniqueId].status === 1) {
      this.userResponses[nextQ.uniqueId].status = 2;
    }

    this.notifyState({ type: 'ADVANCED' });
  }

  getPaletteSummary(sectionIndex = null) {
    let notVisited = 0;
    let notAnswered = 0;
    let answered = 0;
    let markedForReview = 0;
    let ansAndMarked = 0;

    const sectionsToScan = sectionIndex !== null
      ? [this.levelConfig.sections[sectionIndex]]
      : this.levelConfig.sections;

    sectionsToScan.forEach((sec) => {
      sec.questions.forEach((q) => {
        const status = this.userResponses[q.uniqueId] ? this.userResponses[q.uniqueId].status : 1;
        if (status === 1) notVisited++;
        else if (status === 2) notAnswered++;
        else if (status === 3) answered++;
        else if (status === 4) markedForReview++;
        else if (status === 5) ansAndMarked++;
      });
    });

    return { notVisited, notAnswered, answered, markedForReview, ansAndMarked };
  }

  finishTest() {
    if (this.isTestFinished) return;
    this.isTestFinished = true;
    if (this.timerManager) this.timerManager.stop();
    this.onTestComplete({
      mockNumber: this.mockNumber,
      userResponses: this.userResponses,
      timeSpentPerSection: this.timeSpentPerSection
    });
  }

  notifyState(event = {}) {
    this.onStateChange({
      ...event,
      currentSection: this.getCurrentSection(),
      currentSectionIndex: this.currentSectionIndex,
      currentQuestion: this.getCurrentQuestion(),
      currentQuestionIndex: this.currentQuestionIndex,
      paletteSummary: this.getPaletteSummary(this.currentSectionIndex),
      allPaletteSummary: this.getPaletteSummary()
    });
  }
}
