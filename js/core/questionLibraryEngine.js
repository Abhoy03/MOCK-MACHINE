// Mock Machine - Question Library Engine with 4-Tier Difficulty & Exam Level Alignment
// Strictly obeys: Tier 1 (RBI/SEBI/NABARD/LIC) -> Tier 2 (SBI) -> Tier 3 (IBPS) -> Tier 4 (RRB)
// Enforces Clerk Prelims = Lengthy Calculations & All Mains = Heavy Conceptual

import { QuantGenerators } from '../data/generators/quantGenerators.js';
import { ReasoningGenerators } from '../data/generators/reasoningGenerators.js';
import { EnglishGenerators } from '../data/generators/englishGenerators.js';
import { GAGenerators } from '../data/generators/gaGenerators.js';

export class QuestionLibraryEngine {
  static getStorageKey(examId, levelKey) {
    return `bankmock_attempts_${examId}_${levelKey}`;
  }

  static getAttemptHistory(examId, levelKey) {
    try {
      const data = localStorage.getItem(QuestionLibraryEngine.getStorageKey(examId, levelKey));
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  static getNextMockNumber(examId, levelKey) {
    const history = QuestionLibraryEngine.getAttemptHistory(examId, levelKey);
    return history.length + 1;
  }

  static recordAttempt(examId, levelKey, mockNumber, scoreSummary) {
    try {
      const history = QuestionLibraryEngine.getAttemptHistory(examId, levelKey);
      history.push({
        mockNumber,
        date: new Date().toISOString(),
        score: scoreSummary.totalScore,
        maxMarks: scoreSummary.totalMaxMarks,
        accuracy: scoreSummary.accuracy,
        percentile: scoreSummary.percentile,
        isQualified: scoreSummary.isQualified
      });
      localStorage.setItem(QuestionLibraryEngine.getStorageKey(examId, levelKey), JSON.stringify(history));
    } catch (e) {
      console.warn('Failed to save attempt to localStorage', e);
    }
  }

  // Generate complete questions set for a specific mock test number
  static generateQuestionsForMock(examConfig, levelKey, mockNumber = 1) {
    const levelConfig = examConfig.levels[levelKey];
    if (!levelConfig) return [];

    const cycleIndex = Math.floor((mockNumber - 1) / 20);
    const mockWithinCycle = ((mockNumber - 1) % 20) + 1;

    let baseHash = 0;
    const str = `${examConfig.id}_${levelKey}`;
    for (let i = 0; i < str.length; i++) {
      baseHash = ((baseHash << 5) - baseHash) + str.charCodeAt(i);
      baseHash |= 0;
    }
    baseHash = Math.abs(baseHash);

    const shouldInjectRepetitiveFromMock1 = (cycleIndex >= 1 && mockWithinCycle === 1);

    const isClerkPre = (examConfig.isClerk && levelKey === 'pre');
    const isMains = (levelKey === 'mains');
    const isApexTier = (examConfig.tier === 1);

    const fullSections = levelConfig.sections.map((section, secIdx) => {
      const sectionQuestions = [];
      const qCount = section.questionCount;
      const code = section.subjectCode || 'REAS';

      for (let i = 0; i < qCount; i++) {
        let qSeed = baseHash + (cycleIndex * 50000) + (mockWithinCycle * 2000) + (secIdx * 500) + i;

        if (shouldInjectRepetitiveFromMock1 && i === 0 && secIdx <= 1) {
          qSeed = baseHash + (0 * 50000) + (1 * 2000) + (secIdx * 500) + i;
        }

        const generatedQ = QuestionLibraryEngine.generateSingleQuestion(
          code,
          qSeed,
          i,
          section,
          { isClerkPre, isMains, isApexTier, examConfig }
        );

        sectionQuestions.push({
          ...generatedQ,
          uniqueId: `${examConfig.id}_${levelKey}_m${mockNumber}_s${secIdx}_q${i + 1}`,
          questionNumber: i + 1,
          isRepetitiveReview: (shouldInjectRepetitiveFromMock1 && i === 0 && secIdx <= 1)
        });
      }

      return {
        ...section,
        questions: sectionQuestions
      };
    });

    return fullSections;
  }

  // Router to specific subject generators with hierarchy awareness
  static generateSingleQuestion(subjectCode, seed, index, sectionMeta, context = {}) {
    const { isClerkPre, isMains, isApexTier } = context;

    // Quantitative Aptitude
    if (subjectCode.includes('QA') || subjectCode.includes('DA')) {
      if (isClerkPre) {
        // Calculation lengthy
        return QuantGenerators.generateClerkLengthyCalculation(seed, index);
      }
      if (isMains || isApexTier) {
        // Heavy conceptual caselet or data analysis
        const type = index % 3;
        if (type === 0) return QuantGenerators.generateMainsHeavyConceptual(seed, index);
        if (type === 1) return QuantGenerators.generateDataInterpretationSet(seed, index);
        return QuantGenerators.generateQuadratic(seed, index);
      }
      // Standard PO Prelims
      const type = index % 4;
      if (type === 0) return QuantGenerators.generateQuadratic(seed, index);
      if (type === 1) return QuantGenerators.generateNumberSeries(seed, index);
      if (type === 2) return QuantGenerators.generateArithmeticProblem(seed, index);
      return QuantGenerators.generateDataInterpretationSet(seed, index);
    }
    
    // Reasoning Ability
    if (subjectCode.includes('REAS')) {
      if (isMains || isApexTier) {
        const type = index % 3;
        if (type === 0) return ReasoningGenerators.generateCriticalReasoning(seed, index);
        if (type === 1) return ReasoningGenerators.generateMainsComplexPuzzle(seed, index);
        return ReasoningGenerators.generateSyllogism(seed, index);
      }
      if (isClerkPre) {
        const type = index % 3;
        if (type === 0) return ReasoningGenerators.generateClerkFastPuzzle(seed, index);
        if (type === 1) return ReasoningGenerators.generateInequality(seed, index);
        return ReasoningGenerators.generateSyllogism(seed, index);
      }
      // PO Prelims
      const type = index % 4;
      if (type === 0) return ReasoningGenerators.generateSyllogism(seed, index);
      if (type === 1) return ReasoningGenerators.generateInequality(seed, index);
      if (type === 2) return ReasoningGenerators.generateDirectionSense(seed, index);
      return ReasoningGenerators.generatePuzzle(seed, index);
    }

    // English Language
    if (subjectCode.includes('ENG')) {
      const type = index % 2;
      if (type === 0) return EnglishGenerators.generateErrorSpotting(seed, index);
      return EnglishGenerators.generateReadingComprehension(seed, index);
    }

    // SEBI Specialist Paper 2
    if (subjectCode.includes('SEBI')) {
      return GAGenerators.generateSEBIPaper2Question(seed, index);
    }

    // General, Banking, ESI, FM
    return GAGenerators.generateGAQuestion(seed, index);
  }
}
