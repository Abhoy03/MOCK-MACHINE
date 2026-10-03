// Mock Machine - Subjective & Descriptive Papers UI Module
import { SUBJECTIVE_EXAM_CONFIGS } from '../data/subjectiveConfigs.js';
import { SubjectiveGenerators } from '../data/generators/subjectiveGenerators.js';
import { SubjectiveEvaluatorEngine } from '../core/subjectiveEvaluatorEngine.js';
import { ProfileEngine } from '../core/profileEngine.js';

export class SubjectiveUI {
  constructor(onHome = () => {}) {
    this.onHome = onHome;
    this.viewMode = 'grid'; // 'grid' | 'paper'
    this.selectedExamId = null;
    this.currentPaper = null;
    this.selectedFile = null;
  }

  render() {
    const hero = document.querySelector('.subjective-hero');
    const grid = document.getElementById('subjectiveExamsGrid');
    const workspace = document.getElementById('subjectivePaperWorkspace');
    const backHomeBtn = document.getElementById('btnSubjectiveBackHome');

    if (this.viewMode === 'grid') {
      if (hero) hero.style.display = 'block';
      if (grid) grid.style.display = 'grid';
      if (workspace) workspace.style.display = 'none';
      if (backHomeBtn) backHomeBtn.style.display = 'inline-flex';
      this.renderExamCards();
    } else {
      if (hero) hero.style.display = 'none';
      if (grid) grid.style.display = 'none';
      if (workspace) workspace.style.display = 'block';
      if (backHomeBtn) backHomeBtn.style.display = 'none';
      this.renderQuestionPaperPage();
    }
  }

  renderExamCards() {
    const container = document.getElementById('subjectiveExamsGrid');
    if (!container) return;

    const exams = Object.values(SUBJECTIVE_EXAM_CONFIGS);

    container.innerHTML = exams.map(exam => `
      <div class="subjective-card" data-subj-id="${exam.id}">
        <div class="card-top">
          <div class="exam-icon">${exam.icon}</div>
          <span class="badge-tag prestigious">${exam.tier}</span>
        </div>

        <div class="card-body">
          <h3>${exam.examTitle}</h3>
          <p>${exam.instructions}</p>

          <div class="card-meta-chips">
            <span class="meta-chip">⏱️ ${exam.totalDurationMinutes} Mins</span>
            <span class="meta-chip">🎯 ${exam.totalMarks} Marks</span>
            <span class="meta-chip">📄 PDF Upload & OCR</span>
          </div>

          <div style="margin-top: 0.75rem; font-size: 0.8rem; color: var(--text-muted);">
            Structure: <strong>${exam.questionsStructure.map(q => q.title).join(' + ')}</strong>
          </div>
        </div>

        <button class="btn-open-paper" data-subj-id="${exam.id}">
          <span>📝 Open Question Paper & Upload Answers &rarr;</span>
        </button>
      </div>
    `).join('');

    container.querySelectorAll('.subjective-card').forEach(card => {
      card.onclick = () => {
        const id = card.getAttribute('data-subj-id');
        this.selectedExamId = id;
        this.generateFreshPaper();
        this.viewMode = 'paper';
        this.render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    });
  }

  generateFreshPaper() {
    if (!this.selectedExamId) this.selectedExamId = 'sbi-po-descriptive';
    this.currentPaper = SubjectiveGenerators.generateQuestionPaper(
      this.selectedExamId,
      Math.floor(Math.random() * 50) + 1
    );
    this.selectedFile = null;
  }

  renderQuestionPaperPage() {
    const exam = SUBJECTIVE_EXAM_CONFIGS[this.selectedExamId];
    if (!exam) return;

    if (!this.currentPaper) {
      this.generateFreshPaper();
    }

    const content = document.getElementById('subjectivePaperContent');
    const reportBox = document.getElementById('subjectiveEvalReportBox');
    if (reportBox) reportBox.innerHTML = '';

    const p = this.currentPaper;
    let paperQuestionsHtml = '';

    if (p.letter) {
      paperQuestionsHtml += `
        <div class="paper-q-box">
          <div class="paper-q-title-row">
            <h4 style="font-size: 1.1rem; color: #93c5fd; font-weight: 700;">Section A: Letter Writing (${p.letter.marks} Marks)</h4>
            <span class="paper-q-badge">Word Limit: ${p.letter.wordLimit}</span>
          </div>
          <p style="font-size: 0.95rem; color: #cbd5e1; line-height: 1.6;">
            <strong>Prompt:</strong> ${p.letter.prompt}
          </p>
        </div>
      `;
    }

    if (p.essay) {
      paperQuestionsHtml += `
        <div class="paper-q-box">
          <div class="paper-q-title-row">
            <h4 style="font-size: 1.1rem; color: #93c5fd; font-weight: 700;">Section B: Essay Writing (${p.essay.marks} Marks)</h4>
            <span class="paper-q-badge">Word Limit: ${p.essay.wordLimit}</span>
          </div>
          <p style="font-size: 0.95rem; color: #cbd5e1; line-height: 1.6;">
            <strong>Assigned Topic:</strong><br>
            <em style="color: #60a5fa; font-size: 1.1rem; display: block; margin-top: 0.4rem; font-weight: 700;">"${p.essay.topic}"</em>
          </p>
        </div>
      `;
    }

    if (p.precis && (this.selectedExamId.includes('rbi-grade-b-desc-eng') || this.selectedExamId.includes('sebi'))) {
      paperQuestionsHtml += `
        <div class="paper-q-box">
          <div class="paper-q-title-row">
            <h4 style="font-size: 1.1rem; color: #93c5fd; font-weight: 700;">Section C: Précis Writing (${p.precis.marks} Marks)</h4>
            <span class="paper-q-badge">Target Length: ${p.precis.targetLength}</span>
          </div>
          <p style="font-size: 0.88rem; color: #cbd5e1; line-height: 1.7; background: rgba(0,0,0,0.3); padding: 1.25rem; border-radius: 8px;">
            <strong>Passage:</strong><br>${p.precis.passage}
          </p>
        </div>
      `;
    }

    if (p.esiQuestions && this.selectedExamId.includes('esi')) {
      paperQuestionsHtml += p.esiQuestions.map((q, i) => `
        <div class="paper-q-box">
          <div class="paper-q-title-row">
            <h4 style="font-size: 1.1rem; color: #93c5fd; font-weight: 700;">ESI Subjective Question ${i + 1} (${q.marks} Marks)</h4>
            <span class="paper-q-badge">Word Limit: ${q.wordLimit}</span>
          </div>
          <p style="font-size: 0.95rem; color: #cbd5e1; line-height: 1.6;">${q.q}</p>
        </div>
      `).join('');
    }

    if (p.fmQuestions && this.selectedExamId.includes('fm')) {
      paperQuestionsHtml += p.fmQuestions.map((q, i) => `
        <div class="paper-q-box">
          <div class="paper-q-title-row">
            <h4 style="font-size: 1.1rem; color: #93c5fd; font-weight: 700;">FM Subjective Question ${i + 1} (${q.marks} Marks)</h4>
            <span class="paper-q-badge">Word Limit: ${q.wordLimit}</span>
          </div>
          <p style="font-size: 0.95rem; color: #cbd5e1; line-height: 1.6;">${q.q}</p>
        </div>
      `).join('');
    }

    if (content) {
      content.innerHTML = `
        <!-- Top Toolbar: Back, Reset Questions, Badges -->
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.75rem; border-bottom: 1px solid var(--border-subtle); padding-bottom: 1.25rem;">
          <button id="btnBackToPapersList" class="btn-back-papers">
            <span>&larr; Back to Descriptive Papers</span>
          </button>

          <div style="display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
            <span class="badge-tag prestigious">⏱️ ${exam.totalDurationMinutes} Mins</span>
            <span class="badge-tag trending">🎯 ${exam.totalMarks} Marks</span>
            <button id="btnResetPaperQuestions" class="btn-reset-paper-q">
              <span>🔄 Reset Questions</span>
            </button>
          </div>
        </div>

        <!-- Exam Header -->
        <div style="margin-bottom: 1.75rem;">
          <h2 style="font-family: var(--font-display); font-size: 1.65rem; font-weight: 800; color: #c084fc; line-height: 1.3;">
            ${exam.examTitle}
          </h2>
          <p style="color: var(--text-muted); font-size: 0.88rem; margin-top: 0.35rem;">
            Write your answers on paper, scan all pages into a single PDF, and upload below for automated evaluation.
          </p>
        </div>

        <!-- Question Sections -->
        ${paperQuestionsHtml}

        <!-- Direct Upload PDF Area -->
        <div style="margin-top: 2.25rem; padding-top: 1.75rem; border-top: 1px solid var(--border-subtle);">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
            <h3 style="font-family: var(--font-display); font-size: 1.3rem; color: #c084fc; display: flex; align-items: center; gap: 0.5rem;">
              <span>📤</span> <span>Upload Answer Sheet (PDF Format)</span>
            </h3>
            <span style="font-size: 0.8rem; color: var(--text-muted);">Multi-page handwritten scanned PDFs supported</span>
          </div>

          <div id="pdfDropzone" class="pdf-upload-dropzone" style="padding: 2.5rem 1.5rem;">
            <div class="dropzone-icon" style="font-size: 3rem;">📄</div>
            <h4 style="font-size: 1.1rem; margin-bottom: 0.35rem;" id="dropzoneTitle">Drop Answer Sheet PDF Here or Click Browse</h4>
            <p style="color: var(--text-muted); font-size: 0.85rem;">Attach your scanned answer sheet pages saved as PDF</p>
            <input type="file" id="pdfFileInput" accept="application/pdf,text/plain" style="display: none;" />
            <button type="button" id="btnBrowseFile" class="btn-choose-pdf" style="margin-top: 1rem;">
              <span>📁 Select PDF File</span>
            </button>
            <div id="selectedFileNameDisplay" style="margin-top: 0.85rem; color: #34d399; font-weight: 700; font-size: 0.92rem;"></div>
          </div>

          <div style="margin-top: 1.5rem;">
            <label style="font-size: 0.85rem; color: var(--text-muted); display: block; margin-bottom: 0.4rem; font-weight: 600;">
              Or Type / Paste Answers Directly (Optional):
            </label>
            <textarea id="directAnswerText" rows="6" placeholder="Type or paste your answers directly here if not uploading a PDF file..." style="width: 100%; background: var(--bg-surface); color: #fff; border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 0.9rem; font-size: 0.92rem; resize: vertical; line-height: 1.6;"></textarea>
          </div>

          <button id="btnSubmitSubjectivePaper" class="btn-start-test" style="margin-top: 1.75rem; padding: 1rem 2rem; font-size: 1.05rem;">
            <span>🚀 Submit & Evaluate Answer Sheet (Real Exam Standards)</span>
          </button>
        </div>
      `;

      this.attachWorkspaceListeners();
    }
  }

  attachWorkspaceListeners() {
    // Back to papers list
    const backBtn = document.getElementById('btnBackToPapersList');
    if (backBtn) {
      backBtn.onclick = () => {
        this.viewMode = 'grid';
        this.render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    }

    // Reset questions
    const resetBtn = document.getElementById('btnResetPaperQuestions');
    if (resetBtn) {
      resetBtn.onclick = () => {
        this.generateFreshPaper();
        this.render();
      };
    }

    // Dropzone and file input
    const dropzone = document.getElementById('pdfDropzone');
    const fileInput = document.getElementById('pdfFileInput');
    const browseBtn = document.getElementById('btnBrowseFile');
    const nameDisplay = document.getElementById('selectedFileNameDisplay');
    const dropTitle = document.getElementById('dropzoneTitle');

    if (browseBtn && fileInput) {
      browseBtn.onclick = (e) => {
        e.stopPropagation();
        fileInput.click();
      };
    }

    if (dropzone && fileInput) {
      dropzone.onclick = () => {
        fileInput.click();
      };
    }

    if (fileInput) {
      fileInput.onchange = (e) => {
        if (e.target.files && e.target.files[0]) {
          this.selectedFile = e.target.files[0];
          if (nameDisplay) nameDisplay.textContent = `✅ Attached PDF: ${this.selectedFile.name} (${Math.round(this.selectedFile.size / 1024)} KB)`;
          if (dropTitle) dropTitle.textContent = `Ready for Evaluation!`;
        }
      };
    }

    if (dropzone) {
      dropzone.ondragover = (e) => { e.preventDefault(); dropzone.classList.add('dragover'); };
      dropzone.ondragleave = () => dropzone.classList.remove('dragover');
      dropzone.ondrop = (e) => {
        e.preventDefault();
        dropzone.classList.remove('dragover');
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
          this.selectedFile = e.dataTransfer.files[0];
          if (nameDisplay) nameDisplay.textContent = `✅ Attached PDF: ${this.selectedFile.name} (${Math.round(this.selectedFile.size / 1024)} KB)`;
          if (dropTitle) dropTitle.textContent = `Ready for Evaluation!`;
        }
      };
    }

    const submitBtn = document.getElementById('btnSubmitSubjectivePaper');
    if (submitBtn) {
      submitBtn.onclick = () => {
        this.evaluateSubjectivePaper();
      };
    }
  }

  async evaluateSubjectivePaper() {
    const typedText = document.getElementById('directAnswerText')?.value || '';
    if (!this.selectedFile && !typedText.trim()) {
      alert('Please upload your answer sheet PDF or type your answer text before submitting.');
      return;
    }

    const evalLoading = document.getElementById('subjectiveEvalLoading');
    const reportBox = document.getElementById('subjectiveEvalReportBox');

    if (evalLoading) evalLoading.classList.add('active');
    if (reportBox) reportBox.innerHTML = '';

    evalLoading?.scrollIntoView({ behavior: 'smooth' });

    // Simulate multi-tier OCR and NLP evaluation
    setTimeout(async () => {
      const exam = SUBJECTIVE_EXAM_CONFIGS[this.selectedExamId];
      const evaluation = await SubjectiveEvaluatorEngine.evaluateSubmission(
        exam,
        this.currentPaper,
        this.selectedFile,
        typedText
      );

      if (evalLoading) evalLoading.classList.remove('active');

      // Record in ProfileEngine
      ProfileEngine.recordGlobalAttempt({
        examTitle: exam.examTitle,
        examShort: exam.shortName,
        levelName: 'Descriptive Paper',
        mockNumber: this.currentPaper.mockNumber,
        totalScore: evaluation.totalScore,
        totalMaxMarks: evaluation.totalMaxMarks,
        accuracy: evaluation.percentage,
        percentile: evaluation.percentile,
        isQualified: evaluation.isQualified,
        timestamp: new Date().toISOString()
      });

      this.renderEvaluationReport(evaluation);
    }, 2000);
  }

  renderEvaluationReport(res) {
    const container = document.getElementById('subjectiveEvalReportBox');
    if (!container) return;

    container.innerHTML = `
      <div class="subjective-eval-report">
        <div class="eval-score-header">
          <div>
            <h2 style="font-family: var(--font-display); font-size: 1.8rem; font-weight: 800;">Official Evaluation Scorecard</h2>
            <p style="color: var(--text-muted); font-size: 0.9rem;">
              Paper: <strong>${res.examTitle}</strong> &bull; File: <code>${res.fileName}</code> &bull; Analyzed ${res.totalWordsAnalyzed} Words
            </p>
          </div>
          <div>
            <span class="status-badge-lg ${res.isQualified ? 'qualified' : 'not-qualified'}">
              ${res.isQualified ? '🎉 QUALIFIED DESCRIPTIVE' : '⚠️ BELOW QUALIFYING CUTOFF'}
            </span>
          </div>
        </div>

        <div class="metrics-summary-grid" style="margin-bottom: 2rem;">
          <div class="metric-card">
            <div class="metric-icon">🎯</div>
            <div class="metric-label">Marks Awarded</div>
            <div class="metric-val" style="color: #38bdf8;">${res.totalScore}</div>
            <div class="metric-sub">Out of ${res.totalMaxMarks} (Cutoff: ${res.cutoff})</div>
          </div>

          <div class="metric-card">
            <div class="metric-icon">⚡</div>
            <div class="metric-label">Score Percentage</div>
            <div class="metric-val" style="color: #34d399;">${res.percentage}%</div>
            <div class="metric-sub">Real Exam Standard</div>
          </div>

          <div class="metric-card">
            <div class="metric-icon">📈</div>
            <div class="metric-label">Percentile</div>
            <div class="metric-val" style="color: #c084fc;">${res.percentile}%</div>
            <div class="metric-sub">Among Mains Candidates</div>
          </div>
        </div>

        <div class="instruction-note" style="margin-bottom: 2rem;">
          ${res.overallExaminerRemark}
        </div>

        <h3 style="font-family: var(--font-display); font-size: 1.3rem; margin-bottom: 1.25rem;">📝 Question-by-Question Examiner Annotations</h3>

        ${res.evaluatedQuestions.map((q, i) => `
          <div class="eval-feedback-item">
            <h4>
              <span>Q${i + 1}. ${q.title}</span>
              <span style="color: #34d399; font-weight: 800;">${q.awardedMarks} / ${q.maxMarks} Marks</span>
            </h4>

            <div class="eval-rubric-row">
              <span class="eval-rubric-label">Structure & Format:</span>
              <span style="color: #cbd5e1;">${q.feedback.formatRating}</span>
            </div>

            <div class="eval-rubric-row">
              <span class="eval-rubric-label">Content & Depth:</span>
              <span style="color: #cbd5e1;">${q.feedback.contentDepth}</span>
            </div>

            <div class="eval-rubric-row">
              <span class="eval-rubric-label">Grammar & Tone:</span>
              <span style="color: #cbd5e1;">${q.feedback.grammarAndVocab}</span>
            </div>

            <div class="eval-rubric-row" style="margin-top: 0.5rem; padding-top: 0.5rem; border-top: 1px solid var(--border-subtle);">
              <span class="eval-rubric-label" style="color: #fde68a;">💡 Key Improvement:</span>
              <span style="color: #fde68a;">${q.feedback.examinerNotes}</span>
            </div>
          </div>
        `).join('')}

        <div style="display: flex; justify-content: center; gap: 1rem; margin-top: 2rem;">
          <button id="btnTryAnotherSubjective" class="btn-start-test" style="width: auto; padding: 0.85rem 2rem;">
            <span>🔄 Attempt Another Subjective Paper</span>
          </button>
        </div>
      </div>
    `;

    document.getElementById('btnTryAnotherSubjective')?.addEventListener('click', () => {
      this.render();
      document.getElementById('subjectivePaperWorkspace').style.display = 'none';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    container.scrollIntoView({ behavior: 'smooth' });
  }

  attachEventListeners() {
    document.getElementById('btnSubjectiveBackHome')?.addEventListener('click', () => {
      this.onHome();
    });
  }
}
