// BankMock Pro - Post-Exam Result & Analytics Dashboard UI Module

export class ResultAnalyticsUI {
  constructor(resultData, examEngine, onReattempt = () => {}, onHome = () => {}) {
    this.result = resultData;
    this.engine = examEngine;
    this.onReattempt = onReattempt;
    this.onHome = onHome;
    this.currentFilter = 'all'; // 'all', 'correct', 'incorrect', 'unattempted'
  }

  render() {
    this.renderHeroScorecard();
    this.renderSectionCards();
    this.renderSolutions();
    this.attachEventListeners();

    const reattemptBtn = document.getElementById('btnAnalyticsReattempt');
    if (reattemptBtn) {
      const nextNum = (this.result.mockNumber || 1) + 1;
      reattemptBtn.innerHTML = `<span>🚀 Attempt Next Fresh Mock Test (Mock #${nextNum})</span>`;
    }
  }

  renderHeroScorecard() {
    const res = this.result;
    const isQual = res.isQualified;

    const heroEl = document.getElementById('analyticsHero');
    if (!heroEl) return;

    heroEl.innerHTML = `
      <div class="result-hero-top">
        <div class="exam-completed-meta">
          <h2>${res.examTitle} - ${res.levelName} (Mock Test #${res.mockNumber || 1})</h2>
          <p>Mock Test Attempt Completed &bull; Evaluated under official marking scheme &bull; 20-Mock Zero Repetition Pool</p>
        </div>
        <div>
          <span class="status-badge-lg ${isQual ? 'qualified' : 'not-qualified'}">
            ${isQual ? '🎉 QUALIFIED (Above Cutoff)' : '⚠️ NEED IMPROVEMENT (Below Cutoff)'}
          </span>
        </div>
      </div>

      <div class="metrics-summary-grid">
        <div class="metric-card">
          <div class="metric-icon">🎯</div>
          <div class="metric-label">Total Score</div>
          <div class="metric-val" style="color: #38bdf8;">${res.totalScore}</div>
          <div class="metric-sub">Out of ${res.totalMaxMarks} (Cutoff: ${res.cutoff})</div>
        </div>

        <div class="metric-card">
          <div class="metric-icon">⚡</div>
          <div class="metric-label">Accuracy</div>
          <div class="metric-val" style="color: #34d399;">${res.accuracy}%</div>
          <div class="metric-sub">${res.correct} Correct / ${res.attempted} Attempted</div>
        </div>

        <div class="metric-card">
          <div class="metric-icon">📈</div>
          <div class="metric-label">Percentile</div>
          <div class="metric-val" style="color: #c084fc;">${res.percentile}%</div>
          <div class="metric-sub">Across 1.5 Lakh Candidates</div>
        </div>

        <div class="metric-card">
          <div class="metric-icon">🏆</div>
          <div class="metric-label">Simulated AIR</div>
          <div class="metric-val" style="color: #fbbf24;">#${res.estimatedRank.toLocaleString()}</div>
          <div class="metric-sub">All India Ranking</div>
        </div>

        <div class="metric-card">
          <div class="metric-icon">📝</div>
          <div class="metric-label">Attempt Rate</div>
          <div class="metric-val" style="color: #60a5fa;">${Math.round((res.attempted / res.totalQuestions) * 100)}%</div>
          <div class="metric-sub">${res.attempted} / ${res.totalQuestions} Questions</div>
        </div>
      </div>
    `;
  }

  renderSectionCards() {
    const container = document.getElementById('analyticsSectionCards');
    if (!container) return;

    container.innerHTML = this.result.sectionResults.map(sec => {
      const formatTime = (secs) => {
        const m = Math.floor(secs / 60);
        const s = secs % 60;
        return `${m}m ${s}s`;
      };

      return `
        <div class="sec-analytics-card">
          <div class="sec-card-header">
            <h4>${sec.sectionName}</h4>
            <span class="sec-score-pill">${sec.score} / ${sec.maxMarks} Marks</span>
          </div>

          <div class="sec-stats-row">
            <div class="stat-box green">
              <div class="s-num">${sec.correct}</div>
              <div class="s-txt">Correct</div>
            </div>
            <div class="stat-box red">
              <div class="s-num">${sec.incorrect}</div>
              <div class="s-txt">Wrong</div>
            </div>
            <div class="stat-box gray">
              <div class="s-num">${sec.unattempted}</div>
              <div class="s-txt">Left</div>
            </div>
            <div class="stat-box blue">
              <div class="s-num">${formatTime(sec.timeSpentSeconds)}</div>
              <div class="s-txt">Time</div>
            </div>
          </div>

          <div class="acc-progress-container">
            <div class="acc-label-wrap">
              <span>Section Accuracy</span>
              <strong style="color: #34d399;">${sec.accuracy}%</strong>
            </div>
            <div class="acc-bar-bg">
              <div class="acc-bar-fill" style="width: ${sec.accuracy}%;"></div>
            </div>
          </div>
          
          <div style="margin-top: 0.85rem; font-size: 0.78rem; display: flex; justify-content: space-between; color: var(--text-muted);">
            <span>Sectional Cutoff: <strong>${sec.cutoff}</strong></span>
            <span style="color: ${sec.isCutoffCleared ? '#34d399' : '#f87171'}; font-weight: 700;">
              ${sec.isCutoffCleared ? '✅ Cutoff Cleared' : '❌ Missed Cutoff'}
            </span>
          </div>
        </div>
      `;
    }).join('');
  }

  renderSolutions() {
    const container = document.getElementById('analyticsSolutionsList');
    if (!container) return;

    const allQuestions = [];
    this.engine.levelConfig.sections.forEach((sec, sIdx) => {
      sec.questions.forEach((q, qIdx) => {
        const resp = this.engine.userResponses[q.uniqueId];
        allQuestions.push({
          sectionName: sec.name,
          question: q,
          userResp: resp,
          index: allQuestions.length + 1
        });
      });
    });

    const filtered = allQuestions.filter(item => {
      const resp = item.userResp;
      const isEvaluated = resp && (resp.status === 3 || resp.status === 5) && resp.selectedOption !== null && resp.selectedOption !== undefined;
      
      if (this.currentFilter === 'correct') {
        return isEvaluated && parseInt(resp.selectedOption, 10) === parseInt(item.question.correctOption, 10);
      }
      if (this.currentFilter === 'incorrect') {
        return isEvaluated && parseInt(resp.selectedOption, 10) !== parseInt(item.question.correctOption, 10);
      }
      if (this.currentFilter === 'unattempted') {
        return !isEvaluated;
      }
      return true; // 'all'
    });

    if (filtered.length === 0) {
      container.innerHTML = `<div style="text-align: center; padding: 3rem; color: var(--text-muted);">No questions match the selected filter.</div>`;
      return;
    }

    container.innerHTML = filtered.map(item => {
      const q = item.question;
      const resp = item.userResp;
      const isEvaluated = resp && (resp.status === 3 || resp.status === 5) && resp.selectedOption !== null && resp.selectedOption !== undefined;
      const userChoice = isEvaluated ? parseInt(resp.selectedOption, 10) : null;
      const isCorrect = isEvaluated && userChoice === parseInt(q.correctOption, 10);

      let statusTagHtml = '';
      if (!isEvaluated) {
        statusTagHtml = `<span class="sol-status-tag unattempted">⚪ Unattempted</span>`;
      } else if (isCorrect) {
        statusTagHtml = `<span class="sol-status-tag correct">✅ Correct (+${q.marks})</span>`;
      } else {
        statusTagHtml = `<span class="sol-status-tag incorrect">❌ Incorrect (-${q.negativeMarks})</span>`;
      }

      const optionLetters = ['(A)', '(B)', '(C)', '(D)', '(E)'];

      return `
        <div class="sol-card">
          <div class="sol-card-header">
            <div class="sol-q-title">
              <span>Q${item.index}. [${item.sectionName}] - ${q.topic || 'General Aptitude'}</span>
            </div>
            <div>${statusTagHtml}</div>
          </div>

          <div class="sol-body">
            ${q.text}
          </div>

          <div class="sol-options-grid">
            ${q.options.map((opt, oIdx) => {
              const isCorrectOpt = oIdx === parseInt(q.correctOption, 10);
              const isUserPickedWrong = userChoice === oIdx && !isCorrectOpt;

              let rowClass = '';
              let badgeSuffix = '';

              if (isCorrectOpt) {
                rowClass = 'is-correct-answer';
                badgeSuffix = '<span style="margin-left: auto; font-size: 0.75rem; color: #34d399; font-weight: 700;">✓ Correct Answer</span>';
              } else if (isUserPickedWrong) {
                rowClass = 'is-user-incorrect';
                badgeSuffix = '<span style="margin-left: auto; font-size: 0.75rem; color: #f87171; font-weight: 700;">✗ Your Answer</span>';
              }

              return `
                <div class="sol-option-row ${rowClass}">
                  <span style="font-weight: 700; min-width: 28px;">${optionLetters[oIdx]}</span>
                  <span>${opt}</span>
                  ${badgeSuffix}
                </div>
              `;
            }).join('')}
          </div>

          <div class="explanation-container">
            <strong style="color: #60a5fa; display: block; margin-bottom: 0.5rem;">💡 Detailed Pedagogical Solution & Analysis:</strong>
            ${q.explanation}
          </div>
        </div>
      `;
    }).join('');
  }

  attachEventListeners() {
    // Filter pill triggers
    document.querySelectorAll('.filter-pill-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-pill-btn').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.currentFilter = e.currentTarget.getAttribute('data-filter');
        this.renderSolutions();
      });
    });

    // Re-attempt button
    document.getElementById('btnAnalyticsReattempt')?.addEventListener('click', () => {
      this.onReattempt();
    });

    // Home / Explore more exams button
    document.getElementById('btnAnalyticsHome')?.addEventListener('click', () => {
      this.onHome();
    });
  }
}
