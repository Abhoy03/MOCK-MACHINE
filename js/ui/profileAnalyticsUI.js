// Mock Machine - Profile & Lifetime Analytics Dashboard UI Module
import { ProfileEngine } from '../core/profileEngine.js';

export class ProfileAnalyticsUI {
  constructor(onHome = () => {}, onReattemptExam = () => {}) {
    this.onHome = onHome;
    this.onReattemptExam = onReattemptExam;
  }

  render() {
    const stats = ProfileEngine.getProfileStats();
    this.renderHeroCard(stats);
    this.renderStatsGrid(stats);
    this.renderSkillsAndGraph(stats);
    this.renderAchievements(stats);
    this.renderHistoryTable(stats);
    this.attachEventListeners();
  }

  renderHeroCard(stats) {
    const heroEl = document.getElementById('profileHeroBox');
    if (!heroEl) return;

    heroEl.innerHTML = `
      <div class="gamer-hero-card">
        <div class="gamer-header-layout">
          <div class="gamer-identity">
            <div class="gamer-avatar-box">
              <span>👑</span>
              <div class="gamer-level-pill">LVL ${stats.level}</div>
            </div>

            <div class="gamer-info">
              <h2>
                <span>Abhoy Paul</span>
                <span class="gamer-title-badge">${stats.levelTitle}</span>
              </h2>
              <p class="gamer-subtext">
                ${stats.totalAttempts} Mock Tests Completed &bull; Total ${stats.totalQuestionsSolved} Questions Solved &bull; ${stats.qualifiedRate}% Cutoff Win Rate
              </p>
            </div>
          </div>

          <div style="text-align: right;">
            <div style="font-size: 0.8rem; color: #94a3b8; text-transform: uppercase; font-weight: 700;">Aspirant Rank Score</div>
            <div style="font-family: var(--font-display); font-size: 2.2rem; font-weight: 800; color: #38bdf8;">
              ${(stats.totalXP || 0).toLocaleString()} <span style="font-size: 1rem; color: #a855f7;">XP</span>
            </div>
          </div>
        </div>

        <div class="xp-bar-wrapper">
          <div class="xp-label-row">
            <span style="color: #93c5fd;">⚡ Level ${stats.level} Progress</span>
            <span style="color: #f472b6;">${stats.currentXP} / ${stats.nextLevelXP} XP (${stats.xpProgressPercent}%)</span>
          </div>
          <div class="xp-bar-track">
            <div class="xp-bar-fill" style="width: ${stats.xpProgressPercent}%;"></div>
          </div>
        </div>
      </div>
    `;
  }

  renderStatsGrid(stats) {
    const gridEl = document.getElementById('profileLifetimeGrid');
    if (!gridEl) return;

    gridEl.innerHTML = `
      <div class="stat-tile">
        <div class="stat-tile-icon">🎯</div>
        <div class="stat-tile-label">Average Score</div>
        <div class="stat-tile-val" style="color: #38bdf8;">${stats.avgScore}</div>
      </div>

      <div class="stat-tile">
        <div class="stat-tile-icon">⚡</div>
        <div class="stat-tile-label">Average Accuracy</div>
        <div class="stat-tile-val" style="color: #34d399;">${stats.avgAccuracy}%</div>
      </div>

      <div class="stat-tile">
        <div class="stat-tile-icon">🏆</div>
        <div class="stat-tile-label">Cutoff Clearance</div>
        <div class="stat-tile-val" style="color: #fbbf24;">${stats.qualifiedRate}%</div>
      </div>

      <div class="stat-tile">
        <div class="stat-tile-icon">🔥</div>
        <div class="stat-tile-label">Personal Best</div>
        <div class="stat-tile-val" style="color: #ec4899;">${stats.bestScore}</div>
      </div>

      <div class="stat-tile">
        <div class="stat-tile-icon">⏳</div>
        <div class="stat-tile-label">Time Invested</div>
        <div class="stat-tile-val" style="color: #a78bfa;">${stats.totalTimeMinutes}m</div>
      </div>
    `;
  }

  renderSkillsAndGraph(stats) {
    // 1. Skill Proficiencies
    const skillsContainer = document.getElementById('profileSkillsList');
    if (skillsContainer) {
      const s = stats.skills;
      skillsContainer.innerHTML = `
        <div class="skill-bar-item">
          <div class="skill-info">
            <span>Quantitative Aptitude & DI</span>
            <strong style="color: #60a5fa;">${s.quant}%</strong>
          </div>
          <div class="skill-track"><div class="skill-fill quant" style="width: ${s.quant}%;"></div></div>
        </div>

        <div class="skill-bar-item">
          <div class="skill-info">
            <span>Reasoning Ability & Puzzles</span>
            <strong style="color: #c084fc;">${s.reasoning}%</strong>
          </div>
          <div class="skill-track"><div class="skill-fill reason" style="width: ${s.reasoning}%;"></div></div>
        </div>

        <div class="skill-bar-item">
          <div class="skill-info">
            <span>English Language</span>
            <strong style="color: #67e8f9;">${s.english}%</strong>
          </div>
          <div class="skill-track"><div class="skill-fill eng" style="width: ${s.english}%;"></div></div>
        </div>

        <div class="skill-bar-item">
          <div class="skill-info">
            <span>General & Banking Awareness</span>
            <strong style="color: #fde68a;">${s.ga}%</strong>
          </div>
          <div class="skill-track"><div class="skill-fill ga" style="width: ${s.ga}%;"></div></div>
        </div>

        <div class="skill-bar-item">
          <div class="skill-info">
            <span>Speed & Time Management</span>
            <strong style="color: #34d399;">${s.speed}%</strong>
          </div>
          <div class="skill-track"><div class="skill-fill speed" style="width: ${s.speed}%;"></div></div>
        </div>

        <div class="skill-bar-item">
          <div class="skill-info">
            <span>Accuracy & Precision</span>
            <strong style="color: #f472b6;">${s.accuracy}%</strong>
          </div>
          <div class="skill-track"><div class="skill-fill acc" style="width: ${s.accuracy}%;"></div></div>
        </div>
      `;
    }

    // 2. Score Trend SVG Line Chart
    const trendContainer = document.getElementById('profileTrendGraph');
    if (trendContainer) {
      const trend = stats.scoreTrend || [];

      if (trend.length === 0) {
        trendContainer.innerHTML = `
          <div style="text-align: center; color: var(--text-muted); font-size: 0.9rem;">
            📊 Attempt your first mock test to unlock score progression graphs!
          </div>
        `;
      } else {
        const svgWidth = 500;
        const svgHeight = 200;
        const padding = 35;

        const maxVal = Math.max(...trend.map(t => t.score), 50);
        const minVal = 0;

        const pts = trend.map((t, idx) => {
          const x = padding + (idx / Math.max(1, trend.length - 1)) * (svgWidth - padding * 2);
          const y = svgHeight - padding - (t.score / maxVal) * (svgHeight - padding * 2);
          return { x, y, score: t.score, title: t.title };
        });

        const pathD = pts.reduce((acc, pt, i) => `${acc} ${i === 0 ? 'M' : 'L'} ${pt.x} ${pt.y}`, '');

        trendContainer.innerHTML = `
          <svg viewBox="0 0 ${svgWidth} ${svgHeight}" style="width: 100%; height: 100%; overflow: visible;">
            <defs>
              <linearGradient id="gradScore" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.5"/>
                <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.0"/>
              </linearGradient>
            </defs>

            <!-- Grid Lines -->
            <line x1="${padding}" y1="${padding}" x2="${svgWidth - padding}" y2="${padding}" stroke="rgba(255,255,255,0.08)" stroke-dasharray="4"/>
            <line x1="${padding}" y1="${(svgHeight)/2}" x2="${svgWidth - padding}" y2="${(svgHeight)/2}" stroke="rgba(255,255,255,0.08)" stroke-dasharray="4"/>
            <line x1="${padding}" y1="${svgHeight - padding}" x2="${svgWidth - padding}" y2="${svgHeight - padding}" stroke="rgba(255,255,255,0.15)"/>

            <!-- Fill Area -->
            <path d="${pathD} L ${pts[pts.length - 1].x} ${svgHeight - padding} L ${pts[0].x} ${svgHeight - padding} Z" fill="url(#gradScore)" />

            <!-- Curve Line -->
            <path d="${pathD}" fill="none" stroke="#38bdf8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>

            <!-- Points -->
            ${pts.map((pt, i) => `
              <circle cx="${pt.x}" cy="${pt.y}" r="5" fill="#3b82f6" stroke="#ffffff" stroke-width="2">
                <title>${pt.title}: ${pt.score} Marks</title>
              </circle>
              <text x="${pt.x}" y="${pt.y - 10}" fill="#38bdf8" font-size="11" font-weight="700" text-anchor="middle">${pt.score}</text>
              <text x="${pt.x}" y="${svgHeight - 12}" fill="#94a3b8" font-size="10" text-anchor="middle">T${i + 1}</text>
            `).join('')}
          </svg>
        `;
      }
    }
  }

  renderAchievements(stats) {
    const container = document.getElementById('profileAchievementsGrid');
    if (!container) return;

    container.innerHTML = stats.achievements.map(ach => `
      <div class="achievement-card ${ach.unlocked ? 'unlocked' : 'locked'}">
        <div class="ach-icon">${ach.icon}</div>
        <div class="ach-title">${ach.title}</div>
        <div class="ach-desc">${ach.desc}</div>
        <div class="ach-status-badge">
          ${ach.unlocked ? '✨ UNLOCKED' : `🔒 Locked (${ach.progress})`}
        </div>
      </div>
    `).join('');
  }

  renderHistoryTable(stats) {
    const tbody = document.getElementById('profileHistoryTableBody');
    if (!tbody) return;

    const logs = stats.recentLogs || [];
    if (logs.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align: center; padding: 2.5rem; color: var(--text-muted);">
            No mock tests attempted yet. Choose any exam to begin building your stats!
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = logs.map((log, idx) => {
      const dateStr = new Date(log.timestamp || log.date).toLocaleDateString('en-IN', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });

      return `
        <tr>
          <td><strong>#${logs.length - idx}</strong></td>
          <td>
            <strong>${log.examTitle}</strong>
            <span style="display: block; font-size: 0.75rem; color: var(--text-dim);">${log.levelName}</span>
          </td>
          <td><span style="font-weight: 700; color: #93c5fd;">Mock #${log.mockNumber || 1}</span></td>
          <td style="font-family: var(--font-mono); font-weight: 700; color: #38bdf8;">${log.totalScore} / ${log.totalMaxMarks}</td>
          <td style="color: #34d399; font-weight: 600;">${log.accuracy}%</td>
          <td><span style="color: #c084fc; font-weight: 700;">${log.percentile}%</span></td>
          <td>
            <span class="status-badge-lg ${log.isQualified ? 'qualified' : 'not-qualified'}" style="padding: 0.2rem 0.65rem; font-size: 0.75rem;">
              ${log.isQualified ? 'QUALIFIED' : 'BELOW CUTOFF'}
            </span>
          </td>
        </tr>
      `;
    }).join('');
  }

  attachEventListeners() {
    // Reset All Data button
    document.getElementById('btnResetProfileData')?.addEventListener('click', () => {
      const confirmFirst = confirm('⚠️ DANGER: Are you sure you want to reset your entire profile and delete all mock test records?');
      if (confirmFirst) {
        const confirmSecond = confirm('This action is irreversible. All XP, Levels, Badges, and attempt history will be permanently wiped. Proceed?');
        if (confirmSecond) {
          const success = ProfileEngine.resetAllData();
          if (success) {
            alert('Your profile and all mock records have been completely reset to a clean state.');
            this.render();
          }
        }
      }
    });

    document.getElementById('btnProfileBackHome')?.addEventListener('click', () => {
      this.onHome();
    });
  }
}
