// BankMock Pro - Authentic Banking Scoring Engine
// Calculates exact scores with negative marking, accuracy, percentile, sectional cutoffs

export class ScoringEngine {
  static evaluateTest(examConfig, levelConfig, userResponses, timeSpentPerSection = {}) {
    let totalScore = 0;
    let totalMaxMarks = 0;
    let totalAttempted = 0;
    let totalCorrect = 0;
    let totalIncorrect = 0;
    let totalUnattempted = 0;

    const sectionResults = [];
    const topicBreakdown = {};

    levelConfig.sections.forEach((section) => {
      let sectionScore = 0;
      let sectionAttempted = 0;
      let sectionCorrect = 0;
      let sectionIncorrect = 0;
      let sectionUnattempted = 0;
      let sectionMaxMarks = section.marks;

      const questions = section.questions || [];

      questions.forEach((q) => {
        const resp = userResponses[q.uniqueId];
        const topic = q.topic || 'General Aptitude';

        if (!topicBreakdown[topic]) {
          topicBreakdown[topic] = { total: 0, correct: 0, incorrect: 0, attempted: 0, marks: 0 };
        }
        topicBreakdown[topic].total++;

        // Status code: 3=Answered, 5=Answered & Marked for Review (Both count for evaluation in TCS iON)
        const isEvaluated = resp && (resp.status === 3 || resp.status === 5) && resp.selectedOption !== null && resp.selectedOption !== undefined;

        if (isEvaluated) {
          sectionAttempted++;
          totalAttempted++;
          topicBreakdown[topic].attempted++;

          const isCorrect = parseInt(resp.selectedOption, 10) === parseInt(q.correctOption, 10);

          if (isCorrect) {
            const marksEarned = Number(q.marks || 1.0);
            sectionScore += marksEarned;
            totalScore += marksEarned;
            sectionCorrect++;
            totalCorrect++;
            topicBreakdown[topic].correct++;
            topicBreakdown[topic].marks += marksEarned;
            resp.isCorrect = true;
            resp.scoreDelta = marksEarned;
          } else {
            const penalty = Number(q.negativeMarks || (section.negativeMark || 0.25));
            sectionScore -= penalty;
            totalScore -= penalty;
            sectionIncorrect++;
            totalIncorrect++;
            topicBreakdown[topic].incorrect++;
            topicBreakdown[topic].marks -= penalty;
            resp.isCorrect = false;
            resp.scoreDelta = -penalty;
          }
        } else {
          sectionUnattempted++;
          totalUnattempted++;
          if (resp) {
            resp.isCorrect = null;
            resp.scoreDelta = 0;
          }
        }
      });

      totalMaxMarks += sectionMaxMarks;

      const sectionAccuracy = sectionAttempted > 0 ? (sectionCorrect / sectionAttempted) * 100 : 0;
      const sectionCutoff = sectionMaxMarks * 0.35; // Standard banking sectional cutoff benchmark ~35%

      sectionResults.push({
        sectionId: section.id,
        sectionName: section.name,
        totalQuestions: questions.length,
        attempted: sectionAttempted,
        correct: sectionCorrect,
        incorrect: sectionIncorrect,
        unattempted: sectionUnattempted,
        maxMarks: sectionMaxMarks,
        score: Math.max(0, Number(sectionScore.toFixed(2))),
        rawScore: Number(sectionScore.toFixed(2)),
        accuracy: Number(sectionAccuracy.toFixed(1)),
        cutoff: Number(sectionCutoff.toFixed(1)),
        isCutoffCleared: sectionScore >= sectionCutoff,
        timeSpentSeconds: timeSpentPerSection[section.id] || 0
      });
    });

    const netScore = Math.max(0, Number(totalScore.toFixed(2)));
    const overallAccuracy = totalAttempted > 0 ? (totalCorrect / totalAttempted) * 100 : 0;
    const overallPercentage = totalMaxMarks > 0 ? (netScore / totalMaxMarks) * 100 : 0;

    // Percentile Simulation based on standard Gaussian normal distribution for banking aspirants
    const percentile = ScoringEngine.estimatePercentile(netScore, totalMaxMarks, levelConfig.cutoffGeneralEstimate || (totalMaxMarks * 0.55));
    const estimatedRank = Math.max(1, Math.round(150000 * (1 - (percentile / 100))));

    // Weak & Strong topics identification
    const strengths = [];
    const weaknesses = [];

    Object.entries(topicBreakdown).forEach(([topic, data]) => {
      const acc = data.attempted > 0 ? (data.correct / data.attempted) * 100 : 0;
      if (data.attempted >= 2) {
        if (acc >= 75) strengths.push({ topic, accuracy: Math.round(acc), count: data.attempted });
        else if (acc < 50) weaknesses.push({ topic, accuracy: Math.round(acc), count: data.attempted });
      }
    });

    return {
      examId: examConfig.id,
      examTitle: examConfig.title,
      levelName: levelConfig.name,
      totalMaxMarks,
      totalScore: netScore,
      rawTotalScore: Number(totalScore.toFixed(2)),
      totalQuestions: levelConfig.totalQuestions,
      attempted: totalAttempted,
      correct: totalCorrect,
      incorrect: totalIncorrect,
      unattempted: totalUnattempted,
      accuracy: Number(overallAccuracy.toFixed(1)),
      percentage: Number(overallPercentage.toFixed(1)),
      percentile: Number(percentile.toFixed(1)),
      estimatedRank,
      cutoff: levelConfig.cutoffGeneralEstimate || (totalMaxMarks * 0.55),
      isQualified: netScore >= (levelConfig.cutoffGeneralEstimate || (totalMaxMarks * 0.55)),
      sectionResults,
      strengths,
      weaknesses,
      timestamp: new Date().toISOString()
    };
  }

  static estimatePercentile(score, maxMarks, expectedCutoff) {
    if (maxMarks <= 0) return 0;
    const ratio = score / maxMarks;
    const cutoffRatio = expectedCutoff / maxMarks;

    // S-curve sigmoid estimate centered near cutoff
    const z = (ratio - cutoffRatio) * 6;
    let percentile = 1 / (1 + Math.exp(-z)) * 100;

    if (score >= maxMarks * 0.9) percentile = 99.9;
    else if (score <= 0) percentile = 1.0;

    return Math.min(99.9, Math.max(1.0, percentile));
  }
}
