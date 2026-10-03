// BankMock Pro - Exam Selection UI Module
import { EXAM_CATEGORIES, EXAM_CONFIGS } from '../data/examConfigs.js';
import { QuestionLibraryEngine } from '../core/questionLibraryEngine.js';

export class ExamSelectionUI {
  constructor(onStartExam = () => {}) {
    this.onStartExam = onStartExam;
    this.selectedCategory = 'all';
    this.selectedExamId = null;
    this.selectedLevelKey = 'pre';
    this.selectedMockNumber = 1;
  }

  renderCategories(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = EXAM_CATEGORIES.map(cat => `
      <button class="category-chip ${cat.id === this.selectedCategory ? 'active' : ''}" data-cat="${cat.id}">
        <span>${cat.icon}</span>
        <span>${cat.name}</span>
      </button>
    `).join('');

    container.querySelectorAll('.category-chip').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const catId = e.currentTarget.getAttribute('data-cat');
        this.selectedCategory = catId;
        this.renderCategories(containerId);
        this.renderExamCards('examsGrid');
      });
    });
  }

  renderExamCards(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const exams = Object.values(EXAM_CONFIGS).filter(exam => {
      if (this.selectedCategory === 'all') return true;
      return exam.category === this.selectedCategory;
    });

    container.innerHTML = exams.map(exam => {
      const preConfig = exam.levels.pre;
      const mainsConfig = exam.levels.mains;
      const badgeClass = exam.badge ? exam.badge.toLowerCase() : '';

      const preHistory = QuestionLibraryEngine.getAttemptHistory(exam.id, 'pre');
      const mainsHistory = QuestionLibraryEngine.getAttemptHistory(exam.id, 'mains');

      return `
        <div class="exam-card" data-exam-id="${exam.id}">
          <div class="card-top">
            <div class="exam-icon">${exam.icon}</div>
            ${exam.badge ? `<span class="badge-tag ${badgeClass}">${exam.badge}</span>` : ''}
          </div>
          
          <div class="card-body">
            <h3>${exam.title}</h3>
            <p>${exam.description}</p>
            
            <div class="card-meta-chips">
              <span class="meta-chip">⏱️ ${preConfig.totalDurationMinutes}m (Pre) / ${mainsConfig.totalDurationMinutes}m (Mains)</span>
              <span class="meta-chip">📝 ${preConfig.totalQuestions} Qs (Pre)</span>
              <span class="meta-chip">📚 2,000+ Unique Q Pool</span>
            </div>

            <div style="font-size: 0.78rem; color: var(--text-dim); margin-bottom: 1rem;">
              Attempts: <strong>${preHistory.length}</strong> (Pre) &bull; <strong>${mainsHistory.length}</strong> (Mains)
            </div>
          </div>

          <div class="card-actions">
            <button class="btn-level pre" data-exam="${exam.id}" data-level="pre">
              <span>⚡ Prelims (Phase-I)</span>
            </button>
            <button class="btn-level mains" data-exam="${exam.id}" data-level="mains">
              <span>🔥 Mains (Phase-II)</span>
            </button>
          </div>
        </div>
      `;
    }).join('');

    // Attach level click triggers
    container.querySelectorAll('.btn-level').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const examId = e.currentTarget.getAttribute('data-exam');
        const levelKey = e.currentTarget.getAttribute('data-level');
        this.openExamSummaryModal(examId, levelKey);
      });
    });
  }

  openExamSummaryModal(examId, levelKey) {
    const exam = EXAM_CONFIGS[examId];
    if (!exam) return;
    const level = exam.levels[levelKey];
    if (!level) return;

    this.selectedExamId = examId;
    this.selectedLevelKey = levelKey;
    this.selectedMockNumber = QuestionLibraryEngine.getNextMockNumber(examId, levelKey);

    const modalTitle = document.getElementById('modalExamTitle');
    const modalBody = document.getElementById('modalExamBody');
    const modalOverlay = document.getElementById('examSummaryModal');

    if (modalTitle) {
      modalTitle.textContent = `${exam.title} - ${level.name}`;
    }

    if (modalBody) {
      const sectionalTimingHtml = level.hasSectionalTiming
        ? `<span style="color: #60a5fa; font-weight: 600;">Yes (Fixed Sectional Timers)</span>`
        : `<span style="color: #34d399; font-weight: 600;">Composite (Freely Switch Sections)</span>`;

      modalBody.innerHTML = `
        <div class="level-modal-body">
          <div class="level-summary-card">
            <div class="summary-grid">
              <div class="summary-item">
                <div class="label">Total Questions</div>
                <div class="val">${level.totalQuestions}</div>
              </div>
              <div class="summary-item">
                <div class="label">Total Time</div>
                <div class="val">${level.totalDurationMinutes} Mins</div>
              </div>
              <div class="summary-item">
                <div class="label">Maximum Marks</div>
                <div class="val">${level.totalMarks}</div>
              </div>
            </div>
            <div style="margin-top: 1rem; font-size: 0.85rem; color: var(--text-muted); display: flex; flex-wrap: wrap; gap: 1rem;">
              <span><strong>Sectional Timing:</strong> ${sectionalTimingHtml}</span>
              <span><strong>Negative Marking:</strong> 1/4th (${level.negativeMarkingRatio * 100}%)</span>
            </div>
          </div>

          <div class="section-table-box">
            <h4 style="margin-bottom: 0.75rem; font-size: 0.95rem; font-weight: 700; color: #93c5fd;">
              Official Pattern & Section Breakdown:
            </h4>
            <div class="table-responsive">
              <table class="exam-data-table">
                <thead>
                  <tr>
                    <th>Section Name</th>
                    <th>Questions</th>
                    <th>Max Marks</th>
                    <th>Duration</th>
                    <th>Penalty</th>
                  </tr>
                </thead>
                <tbody>
                  ${level.sections.map(sec => `
                    <tr>
                      <td><strong>${sec.name}</strong></td>
                      <td>${sec.questionCount}</td>
                      <td>${sec.marks}</td>
                      <td>${sec.durationMinutes} mins</td>
                      <td>-${sec.negativeMark}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>

          <div class="instruction-note" style="border-radius: var(--radius-md);">
            🎯 <strong>Real Exam Standard Simulation:</strong> Strict sectional cutoffs, live TCS iON question palette, and negative marking applied in real-time.
          </div>

          <button id="btnLaunchSimulator" class="btn-start-test">
            <span>🚀 Start Real Mock Test</span>
          </button>
        </div>
      `;

      document.getElementById('btnLaunchSimulator').addEventListener('click', () => {
        this.closeModal();
        this.onStartExam(this.selectedExamId, this.selectedLevelKey, this.selectedMockNumber);
      });
    }

    if (modalOverlay) {
      modalOverlay.classList.add('active');
    }
  }

  closeModal() {
    const modalOverlay = document.getElementById('examSummaryModal');
    if (modalOverlay) modalOverlay.classList.remove('active');
  }
}
