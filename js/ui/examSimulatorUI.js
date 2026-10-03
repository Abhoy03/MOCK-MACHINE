// BankMock Pro - Authentic TCS iON Exam Simulator UI Module
import { TCS_ION_INSTRUCTIONS } from '../data/instructionsData.js';

export class ExamSimulatorUI {
  constructor(examEngine, onSubmitTest = () => {}, onExitTest = () => {}) {
    this.engine = examEngine;
    this.onSubmitTest = onSubmitTest;
    this.onExitTest = onExitTest;
    this.viewLanguage = 'English'; // English or Hindi
  }

  init() {
    this.renderHeader();
    this.renderSubjectTabs();
    this.renderQuestionAndPalette();
    this.attachEventListeners();
  }

  renderHeader() {
    const exam = this.engine.examConfig;
    const level = this.engine.levelConfig;

    const titleEl = document.getElementById('simExamTitle');
    if (titleEl) {
      titleEl.textContent = `${exam.shortName} - ${level.name} (Mock #${this.engine.mockNumber || 1})`;
    }

    const timerLabel = document.getElementById('simTimerLabel');
    if (timerLabel) {
      timerLabel.textContent = level.hasSectionalTiming ? 'Section Time Left:' : 'Total Time Left:';
    }
  }

  renderSubjectTabs() {
    const container = document.getElementById('simSubjectTabs');
    if (!container) return;

    const sections = this.engine.levelConfig.sections;
    const currentSecIdx = this.engine.currentSectionIndex;
    const isSectional = this.engine.levelConfig.hasSectionalTiming;

    container.innerHTML = sections.map((sec, idx) => {
      const isActive = idx === currentSecIdx;
      const isLocked = isSectional && !isActive;

      return `
        <button class="subject-tab-btn ${isActive ? 'active' : ''} ${isLocked ? 'locked' : ''}" 
                data-sec-idx="${idx}" 
                title="${isLocked ? 'Section switching is locked in this exam' : sec.name}">
          <span>${sec.name}</span>
          ${isLocked ? '<span style="font-size: 0.75rem; opacity: 0.7;">🔒</span>' : ''}
        </button>
      `;
    }).join('');

    container.querySelectorAll('.subject-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const secIdx = parseInt(e.currentTarget.getAttribute('data-sec-idx'), 10);
        const res = this.engine.switchSection(secIdx);
        if (!res.allowed) {
          this.showToast(res.message, 'warning');
        } else {
          this.renderSubjectTabs();
          this.renderQuestionAndPalette();
        }
      });
    });
  }

  renderQuestionAndPalette() {
    const currentQ = this.engine.getCurrentQuestion();
    const currentSec = this.engine.getCurrentSection();
    const qIndex = this.engine.currentQuestionIndex;

    if (!currentQ || !currentSec) return;

    // Render Question Header Details
    const qNumEl = document.getElementById('simQuestionNumber');
    if (qNumEl) qNumEl.textContent = `Question ${qIndex + 1}`;

    const qMarksEl = document.getElementById('simMarksTag');
    if (qMarksEl) qMarksEl.textContent = `Marks: +${currentQ.marks || 1.0}`;

    const qNegEl = document.getElementById('simNegTag');
    if (qNegEl) qNegEl.textContent = `Negative: -${currentQ.negativeMarks || 0.25}`;

    // Render Question Content
    const contentEl = document.getElementById('simQuestionBody');
    if (contentEl) {
      contentEl.innerHTML = `
        <div class="question-body-inner">
          ${currentQ.text}
          
          <div class="options-list">
            ${currentQ.options.map((opt, optIdx) => {
              const resp = this.engine.userResponses[currentQ.uniqueId];
              const isSelected = resp && resp.selectedOption === optIdx;
              const optionLetters = ['(A)', '(B)', '(C)', '(D)', '(E)'];

              return `
                <div class="option-item ${isSelected ? 'selected' : ''}" data-opt-idx="${optIdx}">
                  <input type="radio" name="opt_choice" class="option-radio" ${isSelected ? 'checked' : ''} />
                  <span class="option-label-index">${optionLetters[optIdx]}</span>
                  <div class="option-content">${opt}</div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;

      // Option selection handler
      contentEl.querySelectorAll('.option-item').forEach(item => {
        item.addEventListener('click', (e) => {
          const optIdx = parseInt(e.currentTarget.getAttribute('data-opt-idx'), 10);
          this.engine.selectOption(optIdx);
          this.renderQuestionAndPalette();
        });
      });
    }

    // Render Legend Summary Numbers
    const summary = this.engine.getPaletteSummary(this.engine.currentSectionIndex);
    const setElemText = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };
    setElemText('legendCountAnswered', summary.answered);
    setElemText('legendCountNotAnswered', summary.notAnswered);
    setElemText('legendCountNotVisited', summary.notVisited);
    setElemText('legendCountMarked', summary.markedForReview);
    setElemText('legendCountAnsMarked', summary.ansAndMarked);

    // Render Palette Grid
    const paletteGrid = document.getElementById('simPaletteGrid');
    if (paletteGrid) {
      paletteGrid.innerHTML = currentSec.questions.map((q, idx) => {
        const resp = this.engine.userResponses[q.uniqueId];
        const status = resp ? resp.status : 1;
        const isCurrent = idx === this.engine.currentQuestionIndex;

        let statusClass = 'not-visited';
        if (status === 2) statusClass = 'not-answered';
        else if (status === 3) statusClass = 'answered';
        else if (status === 4) statusClass = 'marked-review';
        else if (status === 5) statusClass = 'ans-marked-review';

        return `
          <button class="palette-btn palette-shape ${statusClass} ${isCurrent ? 'current' : ''}" 
                  data-q-idx="${idx}" 
                  title="Question ${idx + 1}">
            ${idx + 1}
          </button>
        `;
      }).join('');

      paletteGrid.querySelectorAll('.palette-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const qIdx = parseInt(e.currentTarget.getAttribute('data-q-idx'), 10);
          this.engine.jumpToQuestion(this.engine.currentSectionIndex, qIdx);
          this.renderQuestionAndPalette();
        });
      });
    }
  }

  attachEventListeners() {
    // Action: Save & Next
    document.getElementById('btnSimSaveNext')?.addEventListener('click', () => {
      this.engine.saveAndNext();
      this.renderQuestionAndPalette();
    });

    // Action: Clear Response
    document.getElementById('btnSimClearResponse')?.addEventListener('click', () => {
      this.engine.clearResponse();
      this.renderQuestionAndPalette();
    });

    // Action: Mark for Review & Next
    document.getElementById('btnSimMarkReviewNext')?.addEventListener('click', () => {
      this.engine.markForReviewAndNext();
      this.renderQuestionAndPalette();
    });

    // Action: Save & Mark for Review
    document.getElementById('btnSimSaveMarkReview')?.addEventListener('click', () => {
      this.engine.saveAndMarkForReview();
      this.renderQuestionAndPalette();
    });

    // Action: Submit Test
    document.getElementById('btnSimSubmitTest')?.addEventListener('click', () => {
      this.openSubmitConfirmModal();
    });

    // Action: Question Paper modal
    document.getElementById('btnSimQuestionPaper')?.addEventListener('click', () => {
      this.openQuestionPaperModal();
    });

    // Action: Instructions modal
    document.getElementById('btnSimInstructions')?.addEventListener('click', () => {
      this.openInstructionsModal();
    });
  }

  updateTimerDisplay(formattedTime, remainingSec) {
    const timerDigits = document.getElementById('simTimerDigits');
    const timerBox = document.getElementById('simTimerBox');
    if (timerDigits) timerDigits.textContent = formattedTime;

    if (timerBox) {
      if (remainingSec <= 300) {
        timerBox.classList.add('pulse-warning');
      } else {
        timerBox.classList.remove('pulse-warning');
      }
    }
  }

  openSubmitConfirmModal() {
    const modal = document.getElementById('simSubmitModal');
    const body = document.getElementById('simSubmitModalBody');
    if (!modal || !body) return;

    const summary = this.engine.getPaletteSummary();
    const currentSec = this.engine.getCurrentSection();
    const isSectional = this.engine.levelConfig.hasSectionalTiming;
    const isLastSection = this.engine.currentSectionIndex === this.engine.levelConfig.sections.length - 1;

    body.innerHTML = `
      <div style="font-size: 0.95rem; line-height: 1.6; color: var(--text-main);">
        <p style="margin-bottom: 1.25rem;">Are you sure you want to submit your examination?</p>
        
        <div class="table-responsive" style="margin-bottom: 1.5rem;">
          <table class="exam-data-table">
            <thead>
              <tr>
                <th>Section</th>
                <th>Total Qs</th>
                <th>Answered</th>
                <th>Not Answered</th>
                <th>Marked for Review</th>
                <th>Not Visited</th>
              </tr>
            </thead>
            <tbody>
              ${this.engine.levelConfig.sections.map((sec, idx) => {
                const s = this.engine.getPaletteSummary(idx);
                return `
                  <tr>
                    <td><strong>${sec.name}</strong></td>
                    <td>${sec.questions.length}</td>
                    <td style="color: #22c55e; font-weight: 700;">${s.answered + s.ansAndMarked}</td>
                    <td style="color: #ef4444; font-weight: 700;">${s.notAnswered}</td>
                    <td style="color: #8b5cf6; font-weight: 700;">${s.markedForReview}</td>
                    <td>${s.notVisited}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>

        <div style="display: flex; justify-content: flex-end; gap: 1rem;">
          <button id="btnCancelSubmit" class="btn-tcs btn-tcs-secondary" style="padding: 0.7rem 1.4rem;">
            Continue Test
          </button>
          <button id="btnConfirmFinalSubmit" class="btn-tcs btn-tcs-submit" style="padding: 0.7rem 1.4rem;">
            Yes, Submit Examination
          </button>
        </div>
      </div>
    `;

    document.getElementById('btnCancelSubmit').addEventListener('click', () => {
      modal.classList.remove('active');
    });

    document.getElementById('btnConfirmFinalSubmit').addEventListener('click', () => {
      modal.classList.remove('active');
      this.engine.finishTest();
    });

    modal.classList.add('active');
  }

  openQuestionPaperModal() {
    const modal = document.getElementById('simQPModal');
    const body = document.getElementById('simQPModalBody');
    if (!modal || !body) return;

    const currentSec = this.engine.getCurrentSection();
    body.innerHTML = `
      <div style="font-size: 0.9rem; max-height: 70vh; overflow-y: auto; padding-right: 0.5rem;">
        <h4 style="margin-bottom: 1rem; color: #3b82f6;">Section: ${currentSec.name} (${currentSec.questions.length} Questions)</h4>
        ${currentSec.questions.map((q, idx) => `
          <div style="padding: 1rem; margin-bottom: 1rem; background: rgba(0,0,0,0.2); border-radius: 8px; border: 1px solid var(--border-subtle);">
            <strong>Q${idx + 1}.</strong> ${q.text}
          </div>
        `).join('')}
      </div>
    `;

    modal.classList.add('active');
  }

  openInstructionsModal() {
    const modal = document.getElementById('simInstructionsModal');
    const body = document.getElementById('simInstructionsModalBody');
    if (!modal || !body) return;

    body.innerHTML = `
      <div style="font-size: 0.9rem; line-height: 1.7;">
        <h4 style="color: #3b82f6; margin-bottom: 0.75rem;">General Examination Instructions:</h4>
        <ul style="padding-left: 1.25rem; margin-bottom: 1.5rem;">
          ${TCS_ION_INSTRUCTIONS.general.map(inst => `<li>${inst}</li>`).join('')}
        </ul>

        <h4 style="color: #3b82f6; margin-bottom: 0.75rem;">Navigating to a Question:</h4>
        <ul style="padding-left: 1.25rem; margin-bottom: 1.5rem;">
          ${TCS_ION_INSTRUCTIONS.navigating.map(inst => `<li>${inst}</li>`).join('')}
        </ul>

        <h4 style="color: #3b82f6; margin-bottom: 0.75rem;">Answering a Question:</h4>
        <ul style="padding-left: 1.25rem; margin-bottom: 1.5rem;">
          ${TCS_ION_INSTRUCTIONS.answering.map(inst => `<li>${inst}</li>`).join('')}
        </ul>
      </div>
    `;

    modal.classList.add('active');
  }

  showToast(message, type = 'info') {
    const toast = document.getElementById('globalToast');
    if (!toast) return;
    toast.textContent = message;
    toast.className = `toast-notification show ${type}`;
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }
}
