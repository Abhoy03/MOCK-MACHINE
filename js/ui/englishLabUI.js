// Mock Machine - English Master Lab UI Module
// Integrates 16-Domain Essay Generator + PDF Answer Sheet Evaluator + AI Speaking Coach

import { EnglishLabDomains } from '../data/englishLabDomains.js';
import { SubjectiveEvaluatorEngine } from '../core/subjectiveEvaluatorEngine.js';
import { SpeakingBotEngine } from '../core/speakingBotEngine.js';
import { ProfileEngine } from '../core/profileEngine.js';

export class EnglishLabUI {
  constructor(onHome = () => {}) {
    this.onHome = onHome;
    this.currentSubTab = 'essay'; // 'essay' | 'speaking'
    this.essayStep = 'domains'; // 'domains' | 'topic'
    this.selectedDomainId = null;
    this.currentTopic = null;
    this.selectedPdfFile = null;
    this.showUploadSection = false;
    this.speakingEngine = null;
  }

  render() {
    this.renderSubTabButtons();
    if (this.currentSubTab === 'essay') {
      this.renderEssaySection();
    } else {
      this.renderSpeakingSection();
    }
  }

  renderSubTabButtons() {
    const container = document.getElementById('engLabSubNav');
    if (!container) return;

    container.innerHTML = `
      <div class="eng-mode-switcher">
        <button class="btn-mode-tab ${this.currentSubTab === 'essay' ? 'active' : ''}" data-eng-tab="essay">
          <span>✍️ 16-Domain Essay Writing & PDF Evaluation</span>
        </button>
        <button class="btn-mode-tab ${this.currentSubTab === 'speaking' ? 'active' : ''}" data-eng-tab="speaking">
          <span>🗣️ Interactive AI English Speaking Coach</span>
        </button>
      </div>
    `;

    container.querySelectorAll('.btn-mode-tab').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.currentSubTab = e.currentTarget.getAttribute('data-eng-tab');
        this.render();
      });
    });
  }

  // -------------------------------------------------------------
  // Option 1: 16-Domain Essay Writing Flow
  // -------------------------------------------------------------
  renderEssaySection() {
    const container = document.getElementById('engLabContent');
    if (!container) return;

    if (this.essayStep === 'domains') {
      this.renderDomainSelectionGrid(container);
    } else {
      this.renderTopicAndInstructionsWindow(container);
    }
  }

  renderDomainSelectionGrid(container) {
    const domains = EnglishLabDomains.getAllDomains();

    container.innerHTML = `
      <div style="margin-bottom: 2rem;">
        <h3 style="font-family: var(--font-display); font-size: 1.4rem; margin-bottom: 0.5rem;">
          🎯 Step 1: Choose an Essay Domain (16 Specialized Domains)
        </h3>
        <p style="color: var(--text-muted); font-size: 0.9rem;">
          Click any domain to directly generate an authentic real-exam essay topic, instructions, and PDF answer submission window.
        </p>
      </div>

      <div class="domains-grid">
        ${domains.map(d => `
          <div class="domain-card" data-domain-id="${d.id}">
            <div>
              <div class="domain-card-top">
                <span class="domain-icon">${d.icon}</span>
                <span class="domain-name">${d.name}</span>
              </div>
              <p class="domain-desc">${d.desc}</p>
            </div>
            <div style="margin-top: 0.85rem; font-size: 0.8rem; color: #38bdf8; font-weight: 700; display: flex; align-items: center; gap: 0.35rem;">
              <span>Open Domain Topics</span> <span>&rarr;</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    // When domain card is clicked -> DIRECT REDIRECTION TO TOPIC & INSTRUCTION WINDOW
    container.querySelectorAll('.domain-card').forEach(card => {
      card.onclick = () => {
        const domainId = card.getAttribute('data-domain-id');
        this.selectedDomainId = domainId;
        this.generateFreshTopic();
        this.essayStep = 'topic';
        this.renderEssaySection();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    });
  }

  generateFreshTopic() {
    if (!this.selectedDomainId) this.selectedDomainId = 'banking_finance';
    this.currentTopic = EnglishLabDomains.getRandomTopicForDomain(this.selectedDomainId, Math.floor(Math.random() * 100000));
    this.selectedPdfFile = null;
  }

  renderTopicAndInstructionsWindow(container) {
    if (!this.currentTopic) {
      this.generateFreshTopic();
    }
    const t = this.currentTopic;

    container.innerHTML = `
      <!-- Top Navigation & Domain Toolbar -->
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem;">
        <button id="btnBackToDomains" class="btn-back-domains">
          <span>&larr; Back to 16 Domains</span>
        </button>

        <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
          <span class="badge-tag prestigious" style="font-size: 0.85rem;">Domain: ${t.domainIcon} ${t.domainName}</span>
          <span class="badge-tag trending" style="font-size: 0.85rem;">Word Limit: ${t.wordLimit}</span>
          <span class="badge-tag" style="background: rgba(168, 85, 247, 0.2); color: #c084fc; font-size: 0.85rem;">Max Marks: 30</span>
        </div>
      </div>

      <!-- Main Topic & PDF Upload Window Sheet -->
      <div class="topic-viewer-sheet">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.25rem; border-bottom: 1px solid var(--border-subtle); padding-bottom: 1rem;">
          <div>
            <span style="font-size: 0.85rem; color: #38bdf8; text-transform: uppercase; font-weight: 800; letter-spacing: 0.5px;">
              Assigned Essay Topic:
            </span>
          </div>

          <button id="btnGetNewTopic" class="btn-regen-topic">
            <span>🔄</span> <span>Generate Another Topic</span>
          </button>
        </div>

        <!-- 1. Topic Name -->
        <div style="margin-bottom: 1.75rem;">
          <h2 style="font-family: var(--font-display); font-size: 1.65rem; font-weight: 800; color: #60a5fa; line-height: 1.4;">
            "${t.topic}"
          </h2>
        </div>

        <!-- 2. Structured Instructions & Guidelines -->
        <div class="instruction-note" style="margin-bottom: 2rem; padding: 1.5rem; background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(59, 130, 246, 0.3);">
          <h4 style="font-size: 1.05rem; font-weight: 700; color: #93c5fd; margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>📋</span> <span>Topic Instructions & Evaluation Rubric:</span>
          </h4>
          <ul style="padding-left: 1.35rem; display: flex; flex-direction: column; gap: 0.5rem; color: #cbd5e1; font-size: 0.92rem;">
            ${t.guidelines.map(g => `<li>${g}</li>`).join('')}
            <li><strong>Structure:</strong> Write with structured paragraphs (Introduction, Core Analysis with Data/Schemes, and Forward-looking Conclusion).</li>
            <li><strong>Submission:</strong> Upload your handwritten answer pages in PDF format below for automated standard evaluation.</li>
          </ul>
        </div>

        <!-- 3. Direct PDF Upload Section -->
        <div id="pdfUploadWorkspace" style="padding-top: 1.5rem; border-top: 1px solid var(--border-subtle);">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
            <h3 style="font-family: var(--font-display); font-size: 1.25rem; color: #38bdf8; display: flex; align-items: center; gap: 0.5rem;">
              <span>📤</span> <span>Upload Answer Sheet (PDF Format)</span>
            </h3>
            <span style="font-size: 0.8rem; color: var(--text-muted);">Multi-page handwritten scanned PDFs supported</span>
          </div>

          <div id="engEssayDropzone" class="pdf-upload-dropzone" style="padding: 2.25rem 1.5rem;">
            <div class="dropzone-icon" style="font-size: 3rem;">📄</div>
            <h4 id="engDropTitle" style="font-size: 1.1rem; margin-bottom: 0.25rem;">Drop Answer PDF here or Click to Browse</h4>
            <p style="color: var(--text-muted); font-size: 0.85rem;">Attach your scanned answer sheet pages saved as PDF</p>
            <input type="file" id="engPdfInput" accept="application/pdf,text/plain" style="display: none;" />
            <button type="button" id="btnBrowseEngPdf" class="btn-choose-pdf" style="margin-top: 1rem;">
              <span>📁 Select PDF File</span>
            </button>
            <div id="engSelectedFileName" style="margin-top: 0.85rem; color: #34d399; font-weight: 700; font-size: 0.92rem;"></div>
          </div>

          <div style="margin-top: 1.25rem;">
            <label style="font-size: 0.85rem; color: var(--text-muted); display: block; margin-bottom: 0.4rem; font-weight: 600;">
              Or Type Answer Directly (Optional):
            </label>
            <textarea id="engDirectText" rows="5" placeholder="Type your essay directly here if not uploading a PDF file..." style="width: 100%; background: var(--bg-surface); color: #fff; border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 0.9rem; font-size: 0.92rem; resize: vertical; line-height: 1.6;"></textarea>
          </div>

          <button id="btnSubmitDomainEssay" class="btn-start-test" style="margin-top: 1.5rem; padding: 1rem 2.5rem; font-size: 1.05rem;">
            <span>🚀 Evaluate My Essay (Official Standards)</span>
          </button>

          <!-- Evaluation Spinner & Result -->
          <div id="engEvalLoading" class="eval-loading-box">
            <div class="spinner-purple"></div>
            <h4 style="font-size: 1.2rem; margin-bottom: 0.35rem;">Evaluating Essay Structure, Arguments & Grammar...</h4>
            <p style="color: var(--text-muted); font-size: 0.85rem;">Checking content relevance &bull; Grading against official banking rubrics...</p>
          </div>

          <div id="engEvalResultBox"></div>
        </div>
      </div>
    `;

    // Back to Domains event
    const backBtn = document.getElementById('btnBackToDomains');
    if (backBtn) {
      backBtn.onclick = () => {
        this.essayStep = 'domains';
        this.renderEssaySection();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    }

    // Generate another topic
    const regenBtn = document.getElementById('btnGetNewTopic');
    if (regenBtn) {
      regenBtn.onclick = () => {
        this.generateFreshTopic();
        this.renderEssaySection();
      };
    }

    // PDF Dropzone & file input
    const fileInput = document.getElementById('engPdfInput');
    const browseBtn = document.getElementById('btnBrowseEngPdf');
    const nameDisplay = document.getElementById('engSelectedFileName');
    const dropzone = document.getElementById('engEssayDropzone');

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
          this.selectedPdfFile = e.target.files[0];
          if (nameDisplay) nameDisplay.textContent = `✅ Attached PDF: ${this.selectedPdfFile.name}`;
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
          this.selectedPdfFile = e.dataTransfer.files[0];
          if (nameDisplay) nameDisplay.textContent = `✅ Attached PDF: ${this.selectedPdfFile.name}`;
        }
      };
    }

    const submitBtn = document.getElementById('btnSubmitDomainEssay');
    if (submitBtn) {
      submitBtn.onclick = () => {
        this.evaluateDomainEssay();
      };
    }
  }

  async evaluateDomainEssay() {
    const textInput = document.getElementById('engDirectText')?.value || '';
    if (!this.selectedPdfFile && !textInput.trim()) {
      alert('Please upload your written essay PDF or type your response before submitting.');
      return;
    }

    const loader = document.getElementById('engEvalLoading');
    const resultBox = document.getElementById('engEvalResultBox');
    if (loader) loader.classList.add('active');
    if (resultBox) resultBox.innerHTML = '';

    setTimeout(async () => {
      const mockExamConfig = {
        id: `essay_${this.selectedDomainId}`,
        examTitle: `English Essay Writing (${this.currentTopic.domainName})`,
        shortName: 'Essay Writing Lab',
        tier: 'Tier 1 / Tier 2',
        totalMarks: 30,
        cutoffEstimate: 15.0,
        questionsStructure: [
          { id: 'essay', type: 'Essay', title: `Essay on ${this.currentTopic.topic}`, marks: 30, wordLimit: this.currentTopic.wordLimit }
        ]
      };

      const qPaper = {
        mockNumber: Math.floor(Math.random() * 50) + 1,
        essay: { topic: this.currentTopic.topic }
      };

      const evaluation = await SubjectiveEvaluatorEngine.evaluateSubmission(
        mockExamConfig,
        qPaper,
        this.selectedPdfFile,
        textInput
      );

      if (loader) loader.classList.remove('active');

      // Record in ProfileEngine
      ProfileEngine.recordGlobalAttempt({
        examTitle: `English Essay: ${this.currentTopic.domainName}`,
        examShort: 'Essay Lab',
        levelName: 'Descriptive Lab',
        mockNumber: qPaper.mockNumber,
        totalScore: evaluation.totalScore,
        totalMaxMarks: 30,
        accuracy: evaluation.percentage,
        percentile: evaluation.percentile,
        isQualified: evaluation.isQualified,
        timestamp: new Date().toISOString()
      });

      this.renderEssayReport(evaluation);
    }, 1800);
  }

  renderEssayReport(res) {
    const resultBox = document.getElementById('engEvalResultBox');
    if (!resultBox) return;

    const q = res.evaluatedQuestions[0];

    resultBox.innerHTML = `
      <div class="subjective-eval-report" style="margin-top: 2.5rem;">
        <div class="eval-score-header">
          <div>
            <h3 style="font-family: var(--font-display); font-size: 1.5rem; font-weight: 800;">Official Essay Evaluation Scorecard</h3>
            <p style="color: var(--text-muted); font-size: 0.85rem;">Word Count Analyzed: <strong>${res.totalWordsAnalyzed} Words</strong> &bull; Cutoff Benchmark: 15.0 Marks</p>
          </div>
          <div>
            <span class="status-badge-lg ${res.isQualified ? 'qualified' : 'not-qualified'}">
              ${res.isQualified ? '🎉 QUALIFIED' : '⚠️ BELOW BENCHMARK'}
            </span>
          </div>
        </div>

        <div class="metrics-summary-grid" style="margin-bottom: 1.5rem;">
          <div class="metric-card">
            <div class="metric-label">Score Awarded</div>
            <div class="metric-val" style="color: #38bdf8;">${res.totalScore} / 30</div>
          </div>
          <div class="metric-card">
            <div class="metric-label">Percentage</div>
            <div class="metric-val" style="color: #34d399;">${res.percentage}%</div>
          </div>
          <div class="metric-card">
            <div class="metric-label">Percentile</div>
            <div class="metric-val" style="color: #c084fc;">${res.percentile}%</div>
          </div>
        </div>

        <div class="instruction-note" style="margin-bottom: 1.5rem;">
          ${res.overallExaminerRemark}
        </div>

        <div class="eval-feedback-item">
          <div class="eval-rubric-row"><span class="eval-rubric-label">Structure & Flow:</span><span style="color: #cbd5e1;">${q.feedback.formatRating}</span></div>
          <div class="eval-rubric-row"><span class="eval-rubric-label">Content Relevance:</span><span style="color: #cbd5e1;">${q.feedback.contentDepth}</span></div>
          <div class="eval-rubric-row"><span class="eval-rubric-label">Grammar & Cohesion:</span><span style="color: #cbd5e1;">${q.feedback.grammarAndVocab}</span></div>
          <div class="eval-rubric-row" style="margin-top: 0.5rem; padding-top: 0.5rem; border-top: 1px solid var(--border-subtle);"><span class="eval-rubric-label" style="color: #fde68a;">💡 Recommendation:</span><span style="color: #fde68a;">${q.feedback.examinerNotes}</span></div>
        </div>
      </div>
    `;

    resultBox.scrollIntoView({ behavior: 'smooth' });
  }

  // -------------------------------------------------------------
  // Option 2: Speaking Bot Section (Stop, Restart, Voice Selection)
  // -------------------------------------------------------------
  renderSpeakingSection() {
    const container = document.getElementById('engLabContent');
    if (!container) return;

    container.innerHTML = `
      <div style="margin-bottom: 1.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
        <div>
          <h3 style="font-family: var(--font-display); font-size: 1.4rem; margin-bottom: 0.35rem;">🗣️ Interactive AI English Speaking Coach</h3>
          <p style="color: var(--text-muted); font-size: 0.85rem;">Practice speaking into your microphone. The AI coach converses with you and corrects grammar mistakes in real-time.</p>
        </div>

        <!-- Integrated Voice & Session Toolbar -->
        <div class="speaking-toolbar-container">
          <!-- Mode Selector Pill Group -->
          <div class="speaking-mode-group">
            <button class="btn-speaking-mode active" id="btnModeInterview">
              <span>🎙️</span> <span>Interview</span>
            </button>
            <button class="btn-speaking-mode" id="btnModeGD">
              <span>💬</span> <span>GD</span>
            </button>
            <button class="btn-speaking-mode" id="btnModeCasual">
              <span>☕</span> <span>Free Talk</span>
            </button>
          </div>

          <!-- Action Controls & Single-Word Voice Dropdown -->
          <div class="speaking-action-group">
            <!-- Custom Theme Voice Dropdown -->
            <div class="voice-selector-wrapper" title="Select Voice (Single Word Name)">
              <span class="voice-icon">🗣️</span>
              <select id="speakingVoiceSelect" class="custom-voice-select">
                <option value="">Voice</option>
              </select>
            </div>

            <!-- Stop Speaking Button -->
            <button id="btnStopSpeaking" class="btn-speaking-action btn-stop-speech" title="Stop Bot Speech Immediately">
              <span>⏹️</span> <span>Stop</span>
            </button>

            <!-- Restart Conversation Button -->
            <button id="btnRestartChat" class="btn-speaking-action btn-restart-speech" title="Restart Conversation">
              <span>🔄</span> <span>Restart</span>
            </button>
          </div>
        </div>
      </div>

      <div class="speaking-chat-workspace">
        <div id="speakingChatScroll" class="chat-messages-scroll"></div>

        <div id="speakingStatusNotice" style="font-size: 0.82rem; color: #94a3b8; text-align: center; margin-bottom: 0.5rem; font-weight: 600;">
          Click the blue microphone to speak or type in the box.
        </div>

        <div class="speaking-controls-bar">
          <button id="btnToggleMic" class="btn-mic-pulse" title="Click to Speak">
            <span>🎙️</span>
          </button>
          <input type="text" id="speakingTextInput" class="speaking-text-input" placeholder="Speak into your mic or type your response here..." />
          <button id="btnSendSpeakingText" class="btn-send-chat">Send</button>
        </div>
      </div>
    `;

    this.initSpeakingBot();
  }

  initSpeakingBot(mode = 'interview') {
    const scrollArea = document.getElementById('speakingChatScroll');
    const statusNotice = document.getElementById('speakingStatusNotice');
    const stopBtn = document.getElementById('btnStopSpeaking');

    this.speakingEngine = new SpeakingBotEngine(
      (msg) => {
        this.appendChatMessage(msg);
      },
      (status) => {
        const micBtn = document.getElementById('btnToggleMic');
        if (micBtn) {
          if (status.isListening) micBtn.classList.add('listening');
          else micBtn.classList.remove('listening');
        }
        if (stopBtn) {
          if (status.isSpeaking) stopBtn.classList.add('active-speaking');
          else stopBtn.classList.remove('active-speaking');
        }
        if (statusNotice) statusNotice.textContent = status.msg;
      }
    );

    // Populate voices
    this.populateVoiceDropdown();
    if (window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = () => this.populateVoiceDropdown();
    }

    this.speakingEngine.startSession(mode);

    // Stop speaking button event
    stopBtn?.addEventListener('click', () => {
      this.speakingEngine.stopSpeaking();
    });

    // Restart button event
    document.getElementById('btnRestartChat')?.addEventListener('click', () => {
      if (scrollArea) scrollArea.innerHTML = '';
      this.speakingEngine.restartSession();
    });

    // Voice change dropdown event
    const voiceSelect = document.getElementById('speakingVoiceSelect');
    voiceSelect?.addEventListener('change', (e) => {
      const selectedURI = e.target.value;
      this.speakingEngine.setSelectedVoice(selectedURI);
    });

    // Microphone toggle
    document.getElementById('btnToggleMic')?.addEventListener('click', () => {
      if (this.speakingEngine.isListening) {
        this.speakingEngine.stopListening();
      } else {
        this.speakingEngine.startListening();
      }
    });

    // Send text message
    const sendMsg = () => {
      const input = document.getElementById('speakingTextInput');
      if (input && input.value.trim()) {
        const text = input.value.trim();
        input.value = '';
        this.speakingEngine.handleUserMessage(text);
      }
    };

    document.getElementById('btnSendSpeakingText')?.addEventListener('click', sendMsg);
    document.getElementById('speakingTextInput')?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') sendMsg();
    });

    // Mode switchers with integrated active classes
    const setActiveModeBtn = (activeId) => {
      ['btnModeInterview', 'btnModeGD', 'btnModeCasual'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
          btn.classList.toggle('active', id === activeId);
        }
      });
    };

    document.getElementById('btnModeInterview')?.addEventListener('click', () => {
      setActiveModeBtn('btnModeInterview');
      if (scrollArea) scrollArea.innerHTML = '';
      this.speakingEngine.startSession('interview');
    });

    document.getElementById('btnModeGD')?.addEventListener('click', () => {
      setActiveModeBtn('btnModeGD');
      if (scrollArea) scrollArea.innerHTML = '';
      this.speakingEngine.startSession('gd');
    });

    document.getElementById('btnModeCasual')?.addEventListener('click', () => {
      setActiveModeBtn('btnModeCasual');
      if (scrollArea) scrollArea.innerHTML = '';
      this.speakingEngine.startSession('casual');
    });
  }

  formatSingleWordVoice(fullName) {
    if (!fullName) return 'Voice';
    let cleaned = fullName
      .replace(/^Microsoft\s+/i, '')
      .replace(/^Google\s+/i, '')
      .replace(/^Apple\s+/i, '')
      .replace(/\s*Desktop\s*/gi, '')
      .replace(/\s*Online\s*/gi, '')
      .replace(/\s*\(Natural\)\s*/gi, '')
      .replace(/\s*-\s*English.*$/i, '')
      .replace(/\s*\(.*?\)/g, '')
      .trim();

    const tokens = cleaned.split(/[\s\-_]+/).filter(Boolean);
    if (tokens.length > 0) {
      let word = tokens[0];
      if (/^en/i.test(word) && tokens.length > 1) {
        word = tokens[1];
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    return 'Voice';
  }

  populateVoiceDropdown() {
    const select = document.getElementById('speakingVoiceSelect');
    if (!select || !this.speakingEngine) return;

    const voices = this.speakingEngine.getAvailableVoices();
    if (!voices || voices.length === 0) return;

    const currentVal = select.value;
    const seenNames = new Map();

    select.innerHTML = voices.map((v) => {
      let singleWord = this.formatSingleWordVoice(v.name);
      // Ensure unique label if multiple voices have the same name (e.g. David, David 2)
      let count = seenNames.get(singleWord) || 0;
      seenNames.set(singleWord, count + 1);
      const label = count === 0 ? singleWord : `${singleWord} ${count + 1}`;

      return `
        <option value="${v.voiceURI}" ${v.voiceURI === currentVal ? 'selected' : ''}>
          ${label}
        </option>
      `;
    }).join('');
  }

  appendChatMessage(msg) {
    const scrollArea = document.getElementById('speakingChatScroll');
    if (!scrollArea) return;

    const wrap = document.createElement('div');
    wrap.className = `chat-bubble-wrap ${msg.sender}`;

    let correctionsHtml = '';
    if (msg.corrections && msg.corrections.mistakes && msg.corrections.mistakes.length > 0) {
      correctionsHtml = `
        <div class="grammar-correction-box">
          <strong>💡 Real-Time Grammar Correction:</strong>
          <ul style="padding-left: 1.1rem; margin-top: 0.25rem;">
            ${msg.corrections.mistakes.map(m => `
              <li>Instead of <strike style="color: #f87171;">"${m.found}"</strike>, use <strong style="color: #34d399;">"${m.correct}"</strong> &bull; <em>${m.reason}</em></li>
            `).join('')}
          </ul>
        </div>
      `;
    }

    let feedbackTipHtml = '';
    if (msg.corrections && msg.corrections.feedbackTip) {
      feedbackTipHtml = `<div style="font-size: 0.75rem; color: #94a3b8; margin-top: 0.35rem;">${msg.corrections.feedbackTip}</div>`;
    }

    wrap.innerHTML = `
      <div style="font-size: 0.72rem; color: var(--text-dim); margin-bottom: 0.25rem; display: flex; justify-content: space-between;">
        <span>${msg.sender === 'bot' ? '🤖 AI Speaking Coach' : '👤 You'}</span>
        <span>${msg.timestamp}</span>
      </div>
      <div class="chat-bubble">
        ${msg.text}
      </div>
      ${correctionsHtml}
      ${feedbackTipHtml}
    `;

    scrollArea.appendChild(wrap);
    scrollArea.scrollTop = scrollArea.scrollHeight;
  }
}

