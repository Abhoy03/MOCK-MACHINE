// Mock Machine - Gaming-Style Aspirant Profile & Lifetime Analytics Engine
// Computes Level, XP, Skill Proficiencies, Badges, Score Trends, and Global Reset

export class ProfileEngine {
  static STORAGE_KEY_LOGS = 'mockmachine_all_attempts_log';
  static STORAGE_KEY_STATS = 'mockmachine_user_stats';

  static getAllAttemptLogs() {
    try {
      const data = localStorage.getItem(ProfileEngine.STORAGE_KEY_LOGS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  static recordGlobalAttempt(attemptRecord) {
    try {
      const logs = ProfileEngine.getAllAttemptLogs();
      logs.unshift(attemptRecord); // newest first
      localStorage.setItem(ProfileEngine.STORAGE_KEY_LOGS, JSON.stringify(logs));
    } catch (e) {
      console.warn('Failed to record global attempt', e);
    }
  }

  static getProfileStats() {
    const logs = ProfileEngine.getAllAttemptLogs();
    const totalAttempts = logs.length;

    if (totalAttempts === 0) {
      return {
        level: 1,
        levelTitle: 'Rookie Aspirant',
        currentXP: 0,
        nextLevelXP: 500,
        xpProgressPercent: 0,
        totalAttempts: 0,
        totalQuestionsSolved: 0,
        totalCorrect: 0,
        totalScoreSum: 0,
        avgScore: 0,
        avgAccuracy: 0,
        qualifiedRate: 0,
        totalTimeMinutes: 0,
        bestScore: 0,
        streak: 0,
        skills: {
          quant: 35,
          reasoning: 35,
          english: 35,
          ga: 35,
          speed: 40,
          accuracy: 40
        },
        achievements: ProfileEngine.computeAchievements([]),
        recentLogs: [],
        scoreTrend: []
      };
    }

    let totalQuestions = 0;
    let totalCorrect = 0;
    let totalScoreSum = 0;
    let qualifiedCount = 0;
    let totalTimeSec = 0;
    let bestScore = 0;
    let totalMaxMarks = 0;

    // Subject breakdown
    const subjectStats = {
      quant: { score: 0, max: 0, correct: 0, total: 0 },
      reason: { score: 0, max: 0, correct: 0, total: 0 },
      english: { score: 0, max: 0, correct: 0, total: 0 },
      ga: { score: 0, max: 0, correct: 0, total: 0 }
    };

    logs.forEach(log => {
      totalQuestions += (log.attempted || 0);
      totalCorrect += (log.correct || 0);
      totalScoreSum += (log.totalScore || 0);
      totalMaxMarks += (log.totalMaxMarks || 100);
      if (log.isQualified) qualifiedCount++;
      if ((log.totalScore || 0) > bestScore) bestScore = log.totalScore;

      // Calculate time spent
      if (log.sectionResults) {
        log.sectionResults.forEach(sec => {
          totalTimeSec += (sec.timeSpentSeconds || 0);
          const name = (sec.sectionName || '').toLowerCase();
          if (name.includes('quant') || name.includes('numerical') || name.includes('data')) {
            subjectStats.quant.score += sec.score || 0;
            subjectStats.quant.max += sec.maxMarks || 1;
            subjectStats.quant.correct += sec.correct || 0;
            subjectStats.quant.total += sec.attempted || 0;
          } else if (name.includes('reason')) {
            subjectStats.reason.score += sec.score || 0;
            subjectStats.reason.max += sec.maxMarks || 1;
            subjectStats.reason.correct += sec.correct || 0;
            subjectStats.reason.total += sec.attempted || 0;
          } else if (name.includes('english')) {
            subjectStats.english.score += sec.score || 0;
            subjectStats.english.max += sec.maxMarks || 1;
            subjectStats.english.correct += sec.correct || 0;
            subjectStats.english.total += sec.attempted || 0;
          } else if (name.includes('general') || name.includes('awareness') || name.includes('financial') || name.includes('paper 2')) {
            subjectStats.ga.score += sec.score || 0;
            subjectStats.ga.max += sec.maxMarks || 1;
            subjectStats.ga.correct += sec.correct || 0;
            subjectStats.ga.total += sec.attempted || 0;
          }
        });
      }
    });

    const avgScore = Number((totalScoreSum / totalAttempts).toFixed(1));
    const avgAccuracy = totalQuestions > 0 ? Number(((totalCorrect / totalQuestions) * 100).toFixed(1)) : 0;
    const qualifiedRate = Number(((qualifiedCount / totalAttempts) * 100).toFixed(1));
    const totalTimeMinutes = Math.round(totalTimeSec / 60);

    // XP calculation: 100 XP per test + 5 XP per correct answer + 250 XP for qualifying + 50 XP if accuracy > 80%
    let totalXP = 0;
    logs.forEach(log => {
      totalXP += 100;
      totalXP += (log.correct || 0) * 5;
      if (log.isQualified) totalXP += 250;
      if (log.accuracy >= 80) totalXP += 100;
    });

    // Level progression
    const level = Math.floor(totalXP / 600) + 1;
    const currentLevelBaseXP = (level - 1) * 600;
    const currentXP = totalXP - currentLevelBaseXP;
    const nextLevelXP = 600;
    const xpProgressPercent = Math.min(100, Math.round((currentXP / nextLevelXP) * 100));

    // Titles
    const titles = [
      'Rookie Aspirant',
      'Test Warrior',
      'Speed Prodigy',
      'Bank Mastermind',
      'Sectional Conqueror',
      'Apex Candidate',
      'SBI / RBI Grade B Legend',
      'Grandmaster Governor'
    ];
    const levelTitle = titles[Math.min(titles.length - 1, Math.floor((level - 1) / 2))];

    // Compute skills (0 to 100)
    const calcSkill = (stat, fallback = 50) => {
      if (stat.total > 0) {
        return Math.min(99, Math.max(25, Math.round((stat.correct / stat.total) * 100)));
      }
      return fallback;
    };

    const skills = {
      quant: calcSkill(subjectStats.quant, 60),
      reasoning: calcSkill(subjectStats.reason, 65),
      english: calcSkill(subjectStats.english, 58),
      ga: calcSkill(subjectStats.ga, 55),
      speed: Math.min(99, Math.max(30, Math.round(avgAccuracy * 0.95))),
      accuracy: Math.min(99, Math.max(20, Math.round(avgAccuracy)))
    };

    // Score trend (last 10 tests, chronologically)
    const scoreTrend = logs.slice(0, 10).reverse().map((log, idx) => ({
      index: idx + 1,
      title: `${log.examShort || log.examTitle} (M#${log.mockNumber || 1})`,
      score: log.totalScore,
      accuracy: log.accuracy,
      maxMarks: log.totalMaxMarks
    }));

    return {
      level,
      levelTitle,
      totalXP,
      currentXP,
      nextLevelXP,
      xpProgressPercent,
      totalAttempts,
      totalQuestionsSolved: totalQuestions,
      totalCorrect,
      totalScoreSum: Number(totalScoreSum.toFixed(1)),
      avgScore,
      avgAccuracy,
      qualifiedRate,
      totalTimeMinutes,
      bestScore,
      skills,
      achievements: ProfileEngine.computeAchievements(logs),
      recentLogs: logs.slice(0, 15),
      scoreTrend
    };
  }

  static computeAchievements(logs) {
    const total = logs.length;
    const qualified = logs.filter(l => l.isQualified).length;
    const highAccuracy = logs.filter(l => l.accuracy >= 90).length;
    const highScores = logs.filter(l => l.totalScore >= 70).length;

    return [
      {
        id: 'first_blood',
        icon: '⚔️',
        title: 'First Mock Test',
        desc: 'Completed your first mock test on Mock Machine.',
        unlocked: total >= 1,
        progress: `${Math.min(1, total)}/1`
      },
      {
        id: 'marksman',
        icon: '🎯',
        title: 'Bullseye Accuracy',
        desc: 'Achieved 90%+ accuracy in any mock test.',
        unlocked: highAccuracy >= 1,
        progress: `${Math.min(1, highAccuracy)}/1`
      },
      {
        id: 'qualifier',
        icon: '🏆',
        title: 'Cutoff Crusher',
        desc: 'Cleared the official cutoffs in 3 different mock tests.',
        unlocked: qualified >= 3,
        progress: `${Math.min(3, qualified)}/3`
      },
      {
        id: 'grindmaster',
        icon: '🔥',
        title: 'Iron Aspirant',
        desc: 'Attempted 10 complete mock tests.',
        unlocked: total >= 10,
        progress: `${Math.min(10, total)}/10`
      },
      {
        id: 'apex_scorer',
        icon: '👑',
        title: 'Century Marksman',
        desc: 'Scored 70+ marks in a full-length mock test.',
        unlocked: highScores >= 1,
        progress: `${Math.min(1, highScores)}/1`
      }
    ];
  }

  static resetAllData() {
    try {
      // Remove all attempt logs and keys matching bankmock / mockmachine
      const keysToRemove = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && (key.startsWith('bankmock_') || key.startsWith('mockmachine_'))) {
          keysToRemove.push(key);
        }
      }
      keysToRemove.forEach(k => localStorage.removeItem(k));
      return true;
    } catch (e) {
      console.error('Error resetting profile data', e);
      return false;
    }
  }
}
