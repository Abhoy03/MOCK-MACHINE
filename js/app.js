// Mock Machine - Master Application Controller & Router
import { EXAM_CONFIGS } from './data/examConfigs.js';
import { ExamEngine } from './core/examEngine.js';
import { ScoringEngine } from './core/scoringEngine.js';
import { QuestionLibraryEngine } from './core/questionLibraryEngine.js';
import { ProfileEngine } from './core/profileEngine.js';
import { ExamSelectionUI } from './ui/examSelectionUI.js';
import { ExamSimulatorUI } from './ui/examSimulatorUI.js';
import { ResultAnalyticsUI } from './ui/resultAnalyticsUI.js';
import { ProfileAnalyticsUI } from './ui/profileAnalyticsUI.js';
import { SubjectiveUI } from './ui/subjectiveUI.js';
import { EnglishLabUI } from './ui/englishLabUI.js';

class App {
  constructor() {
    this.currentView = 'portal'; // 'portal' | 'simulator' | 'analytics' | 'profile' | 'subjective' | 'english'
    this.activeExamEngine = null;
    this.activeSimulatorUI = null;
    this.activeAnalyticsUI = null;
    this.activeProfileUI = null;
    this.activeSubjectiveUI = null;
    this.activeEnglishLabUI = null;
    this.currentExamId = null;
    this.currentLevelKey = 'pre';
    this.currentMockNumber = 1;
  }

  init() {
    this.setupThemeToggle();
    this.setupNavigation();
    this.updateNavProfileBadge();
    this.initPortalView();
  }

  setupThemeToggle() {
    const themeBtn = document.getElementById('btnThemeToggle');
    const mobileThemeBtn = document.getElementById('btnMobileThemeToggle');

    const toggleTheme = () => {
      document.body.classList.toggle('light-theme');
      const isLight = document.body.classList.contains('light-theme');
      if (themeBtn) themeBtn.textContent = isLight ? '🌙' : '☀️';
      if (mobileThemeBtn) mobileThemeBtn.textContent = isLight ? '🌙' : '☀️';
    };

    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
    if (mobileThemeBtn) mobileThemeBtn.addEventListener('click', toggleTheme);
  }

  updateNavProfileBadge() {
    const stats = ProfileEngine.getProfileStats();
    const lvlText = document.getElementById('sidebarLvlText');
    if (lvlText) {
      lvlText.textContent = `LVL ${stats.level} ${stats.rankTitle}`;
    }
  }

  setupNavigation() {
    const mainSidebar = document.getElementById('mainSidebar');
    const sidebarBackdrop = document.getElementById('sidebarBackdrop');

    const closeMobileSidebar = () => {
      if (mainSidebar) mainSidebar.classList.remove('open');
      if (sidebarBackdrop) sidebarBackdrop.classList.remove('active');
    };

    const toggleMobileSidebar = () => {
      if (mainSidebar) {
        mainSidebar.classList.toggle('open');
        const isOpen = mainSidebar.classList.contains('open');
        if (sidebarBackdrop) sidebarBackdrop.classList.toggle('active', isOpen);
      }
    };

    document.getElementById('btnMobileMenuToggle')?.addEventListener('click', toggleMobileSidebar);
    sidebarBackdrop?.addEventListener('click', closeMobileSidebar);

    const confirmExitIfSimulator = (targetAction) => {
      closeMobileSidebar();
      if (this.currentView === 'simulator') {
        if (confirm('An examination is currently in progress. Exit the exam and leave? Current test progress will be lost.')) {
          if (this.activeExamEngine?.timerManager) {
            this.activeExamEngine.timerManager.stop();
          }
          targetAction();
        }
      } else {
        targetAction();
      }
    };

    // Home navigation
    const goHome = () => confirmExitIfSimulator(() => this.initPortalView());
    document.getElementById('brandLogoLink')?.addEventListener('click', (e) => { e.preventDefault(); goHome(); });
    document.getElementById('mobileBrandHome')?.addEventListener('click', (e) => { e.preventDefault(); goHome(); });
    document.getElementById('sidebarNavHome')?.addEventListener('click', (e) => { e.preventDefault(); goHome(); });

    // Subjective Descriptive navigation
    document.getElementById('sidebarNavSubjective')?.addEventListener('click', (e) => {
      e.preventDefault();
      confirmExitIfSimulator(() => this.initSubjectiveView());
    });

    // English Master Lab navigation
    document.getElementById('sidebarNavEnglish')?.addEventListener('click', (e) => {
      e.preventDefault();
      confirmExitIfSimulator(() => this.initEnglishLabView());
    });

    // Profile navigation
    const goProfile = () => confirmExitIfSimulator(() => this.initProfileView());
    document.getElementById('sidebarNavProfile')?.addEventListener('click', (e) => { e.preventDefault(); goProfile(); });
    document.getElementById('sidebarProfileCard')?.addEventListener('click', (e) => { e.preventDefault(); goProfile(); });

    // Back to Home buttons from sub-views
    document.getElementById('btnEngBackHome')?.addEventListener('click', () => this.initPortalView());
    document.getElementById('btnSubjectiveBackHome')?.addEventListener('click', () => this.initPortalView());
    document.getElementById('btnProfileBackHome')?.addEventListener('click', () => this.initPortalView());

    // Modals
    document.getElementById('btnModalClose')?.addEventListener('click', () => {
      document.getElementById('examSummaryModal')?.classList.remove('active');
    });

    document.getElementById('btnQPModalClose')?.addEventListener('click', () => {
      document.getElementById('simQPModal')?.classList.remove('active');
    });

    document.getElementById('btnInstructionsModalClose')?.addEventListener('click', () => {
      document.getElementById('simInstructionsModal')?.classList.remove('active');
    });
  }

  switchView(viewName) {
    this.currentView = viewName;
    const portalView = document.getElementById('portalView');
    const simulatorView = document.getElementById('simulatorView');
    const analyticsView = document.getElementById('analyticsView');
    const profileView = document.getElementById('profileView');
    const subjectiveView = document.getElementById('subjectiveView');
    const englishLabView = document.getElementById('englishLabView');
    const mainSidebar = document.getElementById('mainSidebar');
    const mainViewport = document.getElementById('mainViewport');
    const mobileTopbar = document.getElementById('mobileTopbar');

    if (portalView) portalView.style.display = viewName === 'portal' ? 'block' : 'none';
    if (analyticsView) analyticsView.style.display = viewName === 'analytics' ? 'block' : 'none';
    if (profileView) profileView.style.display = viewName === 'profile' ? 'block' : 'none';
    if (subjectiveView) subjectiveView.style.display = viewName === 'subjective' ? 'block' : 'none';
    if (englishLabView) englishLabView.style.display = viewName === 'english' ? 'block' : 'none';

    // Update active state on sidebar items
    const navHome = document.getElementById('sidebarNavHome');
    const navSubjective = document.getElementById('sidebarNavSubjective');
    const navEnglish = document.getElementById('sidebarNavEnglish');
    const navProfile = document.getElementById('sidebarNavProfile');

    navHome?.classList.toggle('active', viewName === 'portal');
    navSubjective?.classList.toggle('active', viewName === 'subjective');
    navEnglish?.classList.toggle('active', viewName === 'english');
    navProfile?.classList.toggle('active', viewName === 'profile');

    // Simulator full-screen mode handling
    if (simulatorView) {
      if (viewName === 'simulator') {
        simulatorView.classList.add('active');
        if (mainSidebar) mainSidebar.classList.add('hidden');
        if (mainViewport) mainViewport.classList.add('full-width');
        if (mobileTopbar) mobileTopbar.style.display = 'none';
      } else {
        simulatorView.classList.remove('active');
        if (mainSidebar) mainSidebar.classList.remove('hidden');
        if (mainViewport) mainViewport.classList.remove('full-width');
        if (mobileTopbar) mobileTopbar.style.display = '';
      }
    }

    this.updateNavProfileBadge();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  initPortalView() {
    this.switchView('portal');
    const portalUI = new ExamSelectionUI((examId, levelKey, mockNumber) => {
      this.startExamSession(examId, levelKey, mockNumber);
    });

    portalUI.renderCategories('categoryFilter');
    portalUI.renderExamCards('examsGrid');
  }

  initSubjectiveView() {
    this.switchView('subjective');
    if (!this.activeSubjectiveUI) {
      this.activeSubjectiveUI = new SubjectiveUI(() => this.initPortalView());
    }
    this.activeSubjectiveUI.render();
  }

  initEnglishLabView() {
    this.switchView('english');
    if (!this.activeEnglishLabUI) {
      this.activeEnglishLabUI = new EnglishLabUI(() => this.initPortalView());
    }
    this.activeEnglishLabUI.render();
  }

  initProfileView() {
    this.switchView('profile');
    if (!this.activeProfileUI) {
      this.activeProfileUI = new ProfileAnalyticsUI(
        () => this.initPortalView(),
        (examId, levelKey, mockNum) => this.startExamSession(examId, levelKey, mockNum)
      );
    }
    this.activeProfileUI.render();
  }

  startExamSession(examId, levelKey, mockNumber = 1) {
    this.currentExamId = examId;
    this.currentLevelKey = levelKey;
    this.currentMockNumber = mockNumber;
    const examConfig = EXAM_CONFIGS[examId];

    if (!examConfig || !examConfig.levels[levelKey]) {
      alert('Selected exam configuration not found.');
      return;
    }

    // Initialize state engine with exact mock test number from vast question library
    this.activeExamEngine = new ExamEngine(
      examConfig,
      levelKey,
      mockNumber,
      (state) => {
        // State update callback
        if (state.type === 'TICK') {
          this.activeSimulatorUI?.updateTimerDisplay(state.formattedTime, state.remainingSec);
        } else if (state.type === 'SECTION_AUTO_ADVANCED') {
          this.activeSimulatorUI?.showToast(`Time expired! Auto-advanced to section: ${state.section.name}`, 'warning');
          this.activeSimulatorUI?.renderSubjectTabs();
          this.activeSimulatorUI?.renderQuestionAndPalette();
        } else if (state.type === 'TIMER_WARNING') {
          this.activeSimulatorUI?.showToast(`⚠️ Attention: ${state.minutes} minute(s) remaining in this section!`, 'warning');
        }
      },
      (completedSection) => {
        // Section completed
      },
      (finalData) => {
        // Test submitted / finished
        this.processExamSubmission(finalData);
      }
    );

    // Initialize Simulator UI
    this.activeSimulatorUI = new ExamSimulatorUI(
      this.activeExamEngine,
      () => {
        this.activeExamEngine.finishTest();
      },
      () => {
        this.switchView('portal');
      }
    );

    this.switchView('simulator');
    this.activeSimulatorUI.init();
    this.activeExamEngine.start();
  }

  processExamSubmission(finalData) {
    const examConfig = EXAM_CONFIGS[this.currentExamId];
    const levelConfig = examConfig.levels[this.currentLevelKey];

    const evaluation = ScoringEngine.evaluateTest(
      examConfig,
      levelConfig,
      finalData.userResponses,
      finalData.timeSpentPerSection
    );

    evaluation.mockNumber = this.currentMockNumber;
    evaluation.examShort = examConfig.shortName;

    // 1. Record attempt into per-exam history
    QuestionLibraryEngine.recordAttempt(
      this.currentExamId,
      this.currentLevelKey,
      this.currentMockNumber,
      evaluation
    );

    // 2. Record global attempt into ProfileEngine lifetime log
    ProfileEngine.recordGlobalAttempt(evaluation);

    this.updateNavProfileBadge();

    this.activeAnalyticsUI = new ResultAnalyticsUI(
      evaluation,
      this.activeExamEngine,
      () => {
        // Re-attempt or advance to next fresh mock
        this.startExamSession(this.currentExamId, this.currentLevelKey, this.currentMockNumber + 1);
      },
      () => {
        // Go back to home portal
        this.initPortalView();
      }
    );

    this.switchView('analytics');
    this.activeAnalyticsUI.render();
  }
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.init();
});
