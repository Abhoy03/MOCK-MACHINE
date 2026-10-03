// Mock Machine - Exam Configurations & Pattern Database
// Strictly aligned with Indian Banking & Regulatory Exam Hierarchy & Official Cutoff Benchmarks

export const EXAM_CATEGORIES = [
  { id: 'all', name: 'All Exams', icon: '🏛️' },
  { id: 'regulatory', name: 'Regulatory (RBI / SEBI / NABARD - Tier 1)', icon: '⚖️' },
  { id: 'insurance', name: 'Insurance (LIC AAO - Tier 1)', icon: '🛡️' },
  { id: 'sbi', name: 'State Bank of India (Tier 2)', icon: '🔵' },
  { id: 'ibps', name: 'IBPS Nationalized (Tier 3)', icon: '🏢' },
  { id: 'rrb', name: 'IBPS RRB (Regional Rural - Tier 4)', icon: '🌾' }
];

export const EXAM_CONFIGS = {
  // ==========================================
  // TIER 1: REGULATORY & APEX EXAMS (MOST DIFFICULT)
  // ==========================================
  
  // 1. RBI GRADE B (Apex Difficulty)
  'rbi-grade-b': {
    id: 'rbi-grade-b',
    category: 'regulatory',
    tier: 1,
    tierCode: 'tier1_regulatory',
    title: 'RBI Grade B (Officers in Gr B - DR)',
    shortName: 'RBI Grade B',
    badge: 'Apex Elite',
    icon: '👑',
    description: 'The hardest banking & regulatory exam in India. Features CAT-level Quant/Reasoning, 80-mark GA, and low cutoff threshold.',
    levels: {
      pre: {
        name: 'Phase-I (Prelims - Apex Level)',
        totalDurationMinutes: 120,
        totalQuestions: 200,
        totalMarks: 200,
        negativeMarkingRatio: 0.25,
        hasSectionalTiming: true,
        difficultyLevel: 'Apex Hard',
        sections: [
          { id: 'ga_rbi', name: 'General Awareness', questionCount: 80, marks: 80, durationMinutes: 25, negativeMark: 0.25, subjectCode: 'GA_RBI' },
          { id: 'reason_rbi', name: 'Reasoning Ability (Apex)', questionCount: 60, marks: 60, durationMinutes: 45, negativeMark: 0.25, subjectCode: 'REAS_MAINS' },
          { id: 'eng_rbi', name: 'English Language', questionCount: 30, marks: 30, durationMinutes: 25, negativeMark: 0.25, subjectCode: 'ENG_MAINS' },
          { id: 'quant_rbi', name: 'Quantitative Aptitude (CAT Level)', questionCount: 30, marks: 30, durationMinutes: 25, negativeMark: 0.25, subjectCode: 'QA_MAINS' }
        ],
        cutoffGeneralEstimate: 66.75, // Official ~33.4% cutoff due to extreme difficulty
        instructions: 'RBI Grade B Phase 1 has extreme negative marking impact and strict sectional timings. General Awareness accounts for 80 marks.'
      },
      mains: {
        name: 'Phase-II (ESI & FM Objective)',
        totalDurationMinutes: 90,
        totalQuestions: 60,
        totalMarks: 100,
        negativeMarkingRatio: 0.25,
        hasSectionalTiming: false,
        difficultyLevel: 'Heavy Conceptual',
        sections: [
          { id: 'esi', name: 'Economic & Social Issues (ESI)', questionCount: 30, marks: 50, durationMinutes: 45, negativeMark: 0.416, subjectCode: 'ESI' },
          { id: 'fm', name: 'Finance & Management (FM)', questionCount: 30, marks: 50, durationMinutes: 45, negativeMark: 0.416, subjectCode: 'FM' }
        ],
        cutoffGeneralEstimate: 62.0,
        instructions: 'Phase II evaluates deep macroeconomic paradigms, financial ratios, union budget allocations, and behavioral management frameworks.'
      }
    }
  },

  // 2. SEBI GRADE A (Most Difficult Specialist)
  'sebi-grade-a': {
    id: 'sebi-grade-a',
    category: 'regulatory',
    tier: 1,
    tierCode: 'tier1_regulatory',
    title: 'SEBI Grade A (Assistant Manager - General)',
    shortName: 'SEBI Grade A',
    badge: 'Prestigious',
    icon: '📈',
    description: 'Securities and Exchange Board of India officer exam. Advanced Paper 2 covering Companies Act, Costing, Accounts, and Capital Markets.',
    levels: {
      pre: {
        name: 'Phase-I (Paper 1 & Paper 2)',
        totalDurationMinutes: 100,
        totalQuestions: 130,
        totalMarks: 200,
        negativeMarkingRatio: 0.25,
        hasSectionalTiming: true,
        difficultyLevel: 'Apex Hard',
        sections: [
          { id: 'sebi_p1', name: 'Paper 1: GA, English, Quant & Reasoning', questionCount: 80, marks: 100, durationMinutes: 60, negativeMark: 0.3125, subjectCode: 'SEBI_P1' },
          { id: 'sebi_p2', name: 'Paper 2: Commerce, Accounts, Costing, Law, Mgmt, Eco', questionCount: 50, marks: 100, durationMinutes: 40, negativeMark: 0.50, subjectCode: 'SEBI_P2' }
        ],
        cutoffGeneralEstimate: 80.0, // 40% aggregate qualifying cutoff
        instructions: 'Mandatory qualifying cutoffs: 30% in Paper 1, 40% in Paper 2, and 40% overall aggregate.'
      },
      mains: {
        name: 'Phase-II (Paper 2 Specialist Objective)',
        totalDurationMinutes: 40,
        totalQuestions: 50,
        totalMarks: 100,
        negativeMarkingRatio: 0.25,
        hasSectionalTiming: false,
        difficultyLevel: 'Heavy Conceptual',
        sections: [
          { id: 'sebi_mains_p2', name: 'Paper 2: Advanced Corporate Law, Securities & Costing', questionCount: 50, marks: 100, durationMinutes: 40, negativeMark: 0.50, subjectCode: 'SEBI_P2' }
        ],
        cutoffGeneralEstimate: 68.0,
        instructions: 'Phase II Paper 2 is extremely competitive. Focuses on Section-level Companies Act 2013 provisions, LODR, and standard costing variances.'
      }
    }
  },

  // 3. SEBI GRADE B (Managerial Level)
  'sebi-grade-b': {
    id: 'sebi-grade-b',
    category: 'regulatory',
    tier: 1,
    tierCode: 'tier1_regulatory',
    title: 'SEBI Grade B (Manager)',
    shortName: 'SEBI Grade B',
    icon: '📊',
    description: 'Mid-management recruitment at SEBI requiring deep securities market expertise, derivative valuation, and corporate law.',
    levels: {
      pre: {
        name: 'Phase-I (Prelims)',
        totalDurationMinutes: 100,
        totalQuestions: 130,
        totalMarks: 200,
        negativeMarkingRatio: 0.25,
        hasSectionalTiming: true,
        difficultyLevel: 'Apex Hard',
        sections: [
          { id: 'sebi_b_p1', name: 'Paper 1: Aptitude & Financial Awareness', questionCount: 80, marks: 100, durationMinutes: 60, negativeMark: 0.3125, subjectCode: 'SEBI_P1' },
          { id: 'sebi_b_p2', name: 'Paper 2: Capital Markets & Economics', questionCount: 50, marks: 100, durationMinutes: 40, negativeMark: 0.50, subjectCode: 'SEBI_P2' }
        ],
        cutoffGeneralEstimate: 85.0,
        instructions: 'Evaluating advanced market microstructure, takeover regulations, and macroeconomic balance.'
      },
      mains: {
        name: 'Phase-II (Mains Objective)',
        totalDurationMinutes: 60,
        totalQuestions: 50,
        totalMarks: 100,
        negativeMarkingRatio: 0.25,
        hasSectionalTiming: false,
        difficultyLevel: 'Heavy Conceptual',
        sections: [
          { id: 'sebi_b_mains', name: 'Advanced Securities Market Regulation & Corporate Law', questionCount: 50, marks: 100, durationMinutes: 60, negativeMark: 0.50, subjectCode: 'SEBI_P2' }
        ],
        cutoffGeneralEstimate: 70.0,
        instructions: 'Managerial questions on mutual fund regulations, corporate insolvency, and managerial accounting.'
      }
    }
  },

  // 4. RBI GRADE A (Assistant Manager)
  'rbi-grade-a': {
    id: 'rbi-grade-a',
    category: 'regulatory',
    tier: 1,
    tierCode: 'tier1_regulatory',
    title: 'RBI Grade A (Assistant Manager)',
    shortName: 'RBI Grade A',
    icon: '🏛️',
    description: 'Reserve Bank of India Assistant Managerial cadre exam with high conceptual standard and low qualifying cutoff.',
    levels: {
      pre: {
        name: 'Phase-I (Prelims)',
        totalDurationMinutes: 120,
        totalQuestions: 150,
        totalMarks: 150,
        negativeMarkingRatio: 0.25,
        hasSectionalTiming: true,
        difficultyLevel: 'Apex Hard',
        sections: [
          { id: 'reason', name: 'Reasoning Ability', questionCount: 50, marks: 50, durationMinutes: 40, negativeMark: 0.25, subjectCode: 'REAS_MAINS' },
          { id: 'eng', name: 'English Language', questionCount: 50, marks: 50, durationMinutes: 40, negativeMark: 0.25, subjectCode: 'ENG_MAINS' },
          { id: 'ga_rbi', name: 'General Awareness & Banking', questionCount: 50, marks: 50, durationMinutes: 40, negativeMark: 0.25, subjectCode: 'GA_RBI' }
        ],
        cutoffGeneralEstimate: 63.5,
        instructions: 'Phase I objective paper for RBI Grade A Assistant Manager posts.'
      },
      mains: {
        name: 'Phase-II (Mains Objective)',
        totalDurationMinutes: 90,
        totalQuestions: 100,
        totalMarks: 100,
        negativeMarkingRatio: 0.25,
        hasSectionalTiming: false,
        difficultyLevel: 'Heavy Conceptual',
        sections: [
          { id: 'prof_knowledge', name: 'Professional Knowledge & Financial Systems', questionCount: 100, marks: 100, durationMinutes: 90, negativeMark: 0.25, subjectCode: 'PK' }
        ],
        cutoffGeneralEstimate: 58.0,
        instructions: 'Professional knowledge exam assessing central banking standards and administrative regulations.'
      }
    }
  },

  // 5. NABARD GRADE A
  'nabard-grade-a': {
    id: 'nabard-grade-a',
    category: 'regulatory',
    tier: 1,
    tierCode: 'tier1_regulatory',
    title: 'NABARD Grade A (Assistant Manager - RDBS)',
    shortName: 'NABARD Grade A',
    icon: '🌱',
    description: 'National Bank for Agriculture and Rural Development. Features Agriculture & Rural Development (ARD) and ESI sections.',
    levels: {
      pre: {
        name: 'Phase-I (Prelims Composite - 8 Sections)',
        totalDurationMinutes: 120,
        totalQuestions: 200,
        totalMarks: 200,
        negativeMarkingRatio: 0.25,
        hasSectionalTiming: false,
        difficultyLevel: 'Apex Hard',
        sections: [
          { id: 'reason', name: 'Reasoning Ability (Qualifying)', questionCount: 20, marks: 20, durationMinutes: 120, negativeMark: 0.25, subjectCode: 'REAS' },
          { id: 'eng', name: 'English Language (Qualifying)', questionCount: 30, marks: 30, durationMinutes: 120, negativeMark: 0.25, subjectCode: 'ENG' },
          { id: 'computer', name: 'Computer Knowledge (Qualifying)', questionCount: 20, marks: 20, durationMinutes: 120, negativeMark: 0.25, subjectCode: 'COMP' },
          { id: 'quant', name: 'Quantitative Aptitude (Qualifying)', questionCount: 20, marks: 20, durationMinutes: 120, negativeMark: 0.25, subjectCode: 'QA' },
          { id: 'decision', name: 'Decision Making (Qualifying)', questionCount: 10, marks: 10, durationMinutes: 120, negativeMark: 0.25, subjectCode: 'DM' },
          { id: 'ga', name: 'General Awareness (Merit)', questionCount: 20, marks: 20, durationMinutes: 120, negativeMark: 0.25, subjectCode: 'GA' },
          { id: 'esi', name: 'Economic & Social Issues (Merit)', questionCount: 40, marks: 40, durationMinutes: 120, negativeMark: 0.25, subjectCode: 'ESI' },
          { id: 'ard', name: 'Agriculture & Rural Development (Merit)', questionCount: 40, marks: 40, durationMinutes: 120, negativeMark: 0.25, subjectCode: 'ARD' }
        ],
        cutoffGeneralEstimate: 46.5, // Merit cutoff based on GA + ESI + ARD (100 marks)
        instructions: 'NABARD Phase 1 Merit score is determined strictly from GA + ESI + ARD (100 Marks). The other 5 sections are qualifying.'
      },
      mains: {
        name: 'Phase-II (ESI & ARD Objective)',
        totalDurationMinutes: 90,
        totalQuestions: 30,
        totalMarks: 50,
        negativeMarkingRatio: 0.25,
        hasSectionalTiming: false,
        difficultyLevel: 'Heavy Conceptual',
        sections: [
          { id: 'nabard_mains_esi_ard', name: 'ESI & Agriculture and Rural Development', questionCount: 30, marks: 50, durationMinutes: 90, negativeMark: 0.416, subjectCode: 'ARD' }
        ],
        cutoffGeneralEstimate: 36.0,
        instructions: 'Phase II specialized objective paper covering Indian agricultural schemes, rural economy, soil types, and credit linkages.'
      }
    }
  },

  // 6. LIC AAO (Insurance Tier 1)
  'lic-aao': {
    id: 'lic-aao',
    category: 'insurance',
    tier: 1,
    tierCode: 'tier1_regulatory',
    title: 'LIC AAO (Assistant Administrative Officer)',
    shortName: 'LIC AAO',
    icon: '🛡️',
    description: 'Life Insurance Corporation of India AAO Generalist exam. English is qualifying in Prelims; Ranking calculated out of 70 Marks.',
    levels: {
      pre: {
        name: 'Prelims (Phase-I)',
        totalDurationMinutes: 60,
        totalQuestions: 100,
        totalMarks: 70, // English marks not counted for ranking!
        negativeMarkingRatio: 0.25,
        hasSectionalTiming: true,
        difficultyLevel: 'Apex Hard',
        sections: [
          { id: 'reason', name: 'Reasoning Ability', questionCount: 35, marks: 35, durationMinutes: 20, negativeMark: 0.25, subjectCode: 'REAS_MAINS' },
          { id: 'quant', name: 'Quantitative Aptitude', questionCount: 35, marks: 35, durationMinutes: 20, negativeMark: 0.25, subjectCode: 'QA_MAINS' },
          { id: 'eng_qual', name: 'English Language (Qualifying Only)', questionCount: 30, marks: 30, durationMinutes: 20, negativeMark: 0.25, subjectCode: 'ENG' }
        ],
        cutoffGeneralEstimate: 53.0, // Out of 70 ranking marks
        instructions: 'English section is only qualifying in nature. Marks obtained in English will not be counted for ranking (Total Ranking Marks = 70).'
      },
      mains: {
        name: 'Mains (Phase-II Weighted Marking)',
        totalDurationMinutes: 120,
        totalQuestions: 120,
        totalMarks: 300,
        negativeMarkingRatio: 0.25,
        hasSectionalTiming: true,
        difficultyLevel: 'Heavy Conceptual',
        sections: [
          { id: 'reason_lic', name: 'Reasoning Ability (3 Marks/Q)', questionCount: 30, marks: 90, durationMinutes: 40, negativeMark: 0.75, subjectCode: 'REAS_MAINS' },
          { id: 'ga_lic', name: 'General Knowledge & Current Affairs', questionCount: 30, marks: 60, durationMinutes: 20, negativeMark: 0.50, subjectCode: 'GA' },
          { id: 'data_lic', name: 'Data Analysis & Interpretation (3 Marks/Q)', questionCount: 30, marks: 90, durationMinutes: 40, negativeMark: 0.75, subjectCode: 'DA' },
          { id: 'ins_lic', name: 'Insurance & Financial Market Awareness', questionCount: 30, marks: 60, durationMinutes: 20, negativeMark: 0.50, subjectCode: 'INS' }
        ],
        cutoffGeneralEstimate: 202.0,
        instructions: 'Mains features weighted marking: Reasoning & Data Analysis are 3 marks each, Insurance & GA are 2 marks each.'
      }
    }
  },

  // ==========================================
  // TIER 2: STATE BANK OF INDIA (HIGH ANALYTICAL RIGOR)
  // ==========================================

  // 7. SBI PO
  'sbi-po': {
    id: 'sbi-po',
    category: 'sbi',
    tier: 2,
    tierCode: 'tier2_sbi',
    title: 'SBI PO (Probationary Officer)',
    shortName: 'SBI PO',
    badge: 'Popular',
    icon: '🔵',
    description: 'Premier banking recruitment for State Bank of India. Known for high difficulty puzzles, complex caselets, and tricky sectional timing.',
    levels: {
      pre: {
        name: 'Prelims (Phase-I)',
        totalDurationMinutes: 60,
        totalQuestions: 100,
        totalMarks: 100,
        negativeMarkingRatio: 0.25,
        hasSectionalTiming: true,
        difficultyLevel: 'Hard Analytical',
        sections: [
          { id: 'eng', name: 'English Language', questionCount: 30, marks: 30, durationMinutes: 20, negativeMark: 0.25, subjectCode: 'ENG' },
          { id: 'quant', name: 'Quantitative Aptitude', questionCount: 35, marks: 35, durationMinutes: 20, negativeMark: 0.25, subjectCode: 'QA_PO' },
          { id: 'reason', name: 'Reasoning Ability', questionCount: 35, marks: 35, durationMinutes: 20, negativeMark: 0.25, subjectCode: 'REAS_PO' }
        ],
        cutoffGeneralEstimate: 58.5,
        instructions: 'SBI PO Prelims features 3 sections with strict 20-minute sectional timing each.'
      },
      mains: {
        name: 'Mains (Phase-II Objective)',
        totalDurationMinutes: 180,
        totalQuestions: 155,
        totalMarks: 200,
        negativeMarkingRatio: 0.25,
        hasSectionalTiming: true,
        difficultyLevel: 'Heavy Conceptual',
        sections: [
          { id: 'reason_comp', name: 'Reasoning & Computer Aptitude', questionCount: 40, marks: 50, durationMinutes: 50, negativeMark: 0.3125, subjectCode: 'REAS_MAINS' },
          { id: 'data_analysis', name: 'Data Analysis & Interpretation', questionCount: 30, marks: 50, durationMinutes: 45, negativeMark: 0.416, subjectCode: 'DA' },
          { id: 'ga_bank', name: 'General/Economy/Banking Awareness', questionCount: 50, marks: 60, durationMinutes: 45, negativeMark: 0.3, subjectCode: 'GA' },
          { id: 'eng_mains', name: 'English Language (Mains)', questionCount: 35, marks: 40, durationMinutes: 40, negativeMark: 0.285, subjectCode: 'ENG_MAINS' }
        ],
        cutoffGeneralEstimate: 82.5,
        instructions: 'SBI PO Mains is an advanced test of analytical rigor, multi-concept DI, high-level reasoning, and in-depth current financial affairs.'
      }
    }
  },

  // 8. SBI CLERK
  'sbi-clerk': {
    id: 'sbi-clerk',
    category: 'sbi',
    tier: 2,
    tierCode: 'tier2_sbi',
    isClerk: true,
    title: 'SBI Clerk (Junior Associate)',
    shortName: 'SBI Clerk',
    icon: '💼',
    description: 'Junior Associate recruitment across SBI branches. Prelims features straightforward concepts with LENGTHY calculations and a high cutoff.',
    levels: {
      pre: {
        name: 'Prelims (Lengthy Calculations)',
        totalDurationMinutes: 60,
        totalQuestions: 100,
        totalMarks: 100,
        negativeMarkingRatio: 0.25,
        hasSectionalTiming: true,
        difficultyLevel: 'Calculation Lengthy',
        sections: [
          { id: 'eng', name: 'English Language', questionCount: 30, marks: 30, durationMinutes: 20, negativeMark: 0.25, subjectCode: 'ENG_CLERK' },
          { id: 'quant', name: 'Numerical Ability (Lengthy Calculations)', questionCount: 35, marks: 35, durationMinutes: 20, negativeMark: 0.25, subjectCode: 'QA_CLERK_PRE' },
          { id: 'reason', name: 'Reasoning Ability', questionCount: 35, marks: 35, durationMinutes: 20, negativeMark: 0.25, subjectCode: 'REAS_CLERK_PRE' }
        ],
        cutoffGeneralEstimate: 74.5, // High cutoff benchmark
        instructions: 'SBI Clerk Prelims demands rapid speed, high accuracy, and lengthy multi-step arithmetic/simplification calculations.'
      },
      mains: {
        name: 'Mains (Phase-II Heavy Conceptual)',
        totalDurationMinutes: 160,
        totalQuestions: 190,
        totalMarks: 200,
        negativeMarkingRatio: 0.25,
        hasSectionalTiming: true,
        difficultyLevel: 'Heavy Conceptual',
        sections: [
          { id: 'ga_fin', name: 'General/Financial Awareness', questionCount: 50, marks: 50, durationMinutes: 35, negativeMark: 0.25, subjectCode: 'GA' },
          { id: 'eng_clerk', name: 'General English', questionCount: 40, marks: 40, durationMinutes: 35, negativeMark: 0.25, subjectCode: 'ENG_MAINS' },
          { id: 'quant_clerk', name: 'Quantitative Aptitude', questionCount: 50, marks: 50, durationMinutes: 45, negativeMark: 0.25, subjectCode: 'QA_MAINS' },
          { id: 'reason_comp_clerk', name: 'Reasoning Ability & Computer Aptitude', questionCount: 50, marks: 60, durationMinutes: 45, negativeMark: 0.3, subjectCode: 'REAS_MAINS' }
        ],
        cutoffGeneralEstimate: 82.0,
        instructions: 'SBI Clerk Mains features 190 questions with 160 minutes sectional allocation.'
      }
    }
  },

  // ==========================================
  // TIER 3: IBPS NATIONALIZED BANKS (STANDARD COMPETITIVE)
  // ==========================================

  // 9. IBPS PO
  'ibps-po': {
    id: 'ibps-po',
    category: 'ibps',
    tier: 3,
    tierCode: 'tier3_ibps',
    title: 'IBPS PO (Probationary Officer / MT)',
    shortName: 'IBPS PO',
    badge: 'Trending',
    icon: '🏛️',
    description: 'Common Recruitment Process for Probationary Officers in 11 participating public sector banks.',
    levels: {
      pre: {
        name: 'Prelims (CWE Pre)',
        totalDurationMinutes: 60,
        totalQuestions: 100,
        totalMarks: 100,
        negativeMarkingRatio: 0.25,
        hasSectionalTiming: true,
        difficultyLevel: 'Moderate-Hard',
        sections: [
          { id: 'eng', name: 'English Language', questionCount: 30, marks: 30, durationMinutes: 20, negativeMark: 0.25, subjectCode: 'ENG' },
          { id: 'quant', name: 'Quantitative Aptitude', questionCount: 35, marks: 35, durationMinutes: 20, negativeMark: 0.25, subjectCode: 'QA_PO' },
          { id: 'reason', name: 'Reasoning Ability', questionCount: 35, marks: 35, durationMinutes: 20, negativeMark: 0.25, subjectCode: 'REAS_PO' }
        ],
        cutoffGeneralEstimate: 54.0,
        instructions: 'Standard IBPS PO pattern with 20 minutes fixed timer per section. 0.25 marks penalty for wrong answers.'
      },
      mains: {
        name: 'Mains (CWE Mains Objective)',
        totalDurationMinutes: 180,
        totalQuestions: 155,
        totalMarks: 200,
        negativeMarkingRatio: 0.25,
        hasSectionalTiming: true,
        difficultyLevel: 'Heavy Conceptual',
        sections: [
          { id: 'reason_comp', name: 'Reasoning & Computer Aptitude', questionCount: 45, marks: 60, durationMinutes: 60, negativeMark: 0.33, subjectCode: 'REAS_MAINS' },
          { id: 'eng_mains', name: 'English Language', questionCount: 35, marks: 40, durationMinutes: 40, negativeMark: 0.285, subjectCode: 'ENG_MAINS' },
          { id: 'data_analysis', name: 'Data Analysis & Interpretation', questionCount: 35, marks: 60, durationMinutes: 45, negativeMark: 0.428, subjectCode: 'DA' },
          { id: 'ga_bank', name: 'General, Economy & Banking Awareness', questionCount: 40, marks: 40, durationMinutes: 35, negativeMark: 0.25, subjectCode: 'GA' }
        ],
        cutoffGeneralEstimate: 71.5,
        instructions: 'IBPS PO Mains tests high-difficulty analytical puzzles, caselet DIs, and comprehensive banking awareness.'
      }
    }
  },

  // 10. IBPS CLERK
  'ibps-clerk': {
    id: 'ibps-clerk',
    category: 'ibps',
    tier: 3,
    tierCode: 'tier3_ibps',
    isClerk: true,
    title: 'IBPS Clerk (Clerical Cadre)',
    shortName: 'IBPS Clerk',
    icon: '📑',
    description: 'Clerical recruitment across public sector banks. Prelims is easy conceptual with lengthy numerical steps and high state cutoffs.',
    levels: {
      pre: {
        name: 'Prelims (Lengthy Calculations)',
        totalDurationMinutes: 60,
        totalQuestions: 100,
        totalMarks: 100,
        negativeMarkingRatio: 0.25,
        hasSectionalTiming: true,
        difficultyLevel: 'Calculation Lengthy',
        sections: [
          { id: 'eng', name: 'English Language', questionCount: 30, marks: 30, durationMinutes: 20, negativeMark: 0.25, subjectCode: 'ENG_CLERK' },
          { id: 'quant', name: 'Numerical Ability (Lengthy Calculations)', questionCount: 35, marks: 35, durationMinutes: 20, negativeMark: 0.25, subjectCode: 'QA_CLERK_PRE' },
          { id: 'reason', name: 'Reasoning Ability', questionCount: 35, marks: 35, durationMinutes: 20, negativeMark: 0.25, subjectCode: 'REAS_CLERK_PRE' }
        ],
        cutoffGeneralEstimate: 78.5, // High cutoff benchmark
        instructions: 'High speed and precision test with 100 questions in 60 minutes. Lengthy arithmetic and calculations.'
      },
      mains: {
        name: 'Mains (Heavy Conceptual)',
        totalDurationMinutes: 160,
        totalQuestions: 190,
        totalMarks: 200,
        negativeMarkingRatio: 0.25,
        hasSectionalTiming: true,
        difficultyLevel: 'Heavy Conceptual',
        sections: [
          { id: 'ga_fin', name: 'General / Financial Awareness', questionCount: 50, marks: 50, durationMinutes: 35, negativeMark: 0.25, subjectCode: 'GA' },
          { id: 'eng_clerk', name: 'General English', questionCount: 40, marks: 40, durationMinutes: 35, negativeMark: 0.25, subjectCode: 'ENG_MAINS' },
          { id: 'reason_comp_clerk', name: 'Reasoning Ability & Computer Aptitude', questionCount: 50, marks: 60, durationMinutes: 45, negativeMark: 0.3, subjectCode: 'REAS_MAINS' },
          { id: 'quant_clerk', name: 'Quantitative Aptitude', questionCount: 50, marks: 50, durationMinutes: 45, negativeMark: 0.25, subjectCode: 'QA_MAINS' }
        ],
        cutoffGeneralEstimate: 83.5,
        instructions: '190 questions across 4 sections with sectional timing.'
      }
    }
  },

  // ==========================================
  // TIER 4: REGIONAL RURAL BANKS (IBPS RRB - SPEED & COMPOSITE)
  // ==========================================

  // 11. IBPS RRB PO
  'ibps-rrb-po': {
    id: 'ibps-rrb-po',
    category: 'rrb',
    tier: 4,
    tierCode: 'tier4_rrb',
    title: 'IBPS RRB PO (Officer Scale-I)',
    shortName: 'RRB PO',
    icon: '🌾',
    description: 'Regional Rural Banks Officer Scale-I entrance. Features 45 minutes composite time in Prelims without English!',
    levels: {
      pre: {
        name: 'Prelims (Composite Timing)',
        totalDurationMinutes: 45,
        totalQuestions: 80,
        totalMarks: 80,
        negativeMarkingRatio: 0.25,
        hasSectionalTiming: false,
        difficultyLevel: 'Speed Analytical',
        sections: [
          { id: 'reason', name: 'Reasoning Ability', questionCount: 40, marks: 40, durationMinutes: 45, negativeMark: 0.25, subjectCode: 'REAS_PO' },
          { id: 'quant', name: 'Quantitative Aptitude', questionCount: 40, marks: 40, durationMinutes: 45, negativeMark: 0.25, subjectCode: 'QA_PO' }
        ],
        cutoffGeneralEstimate: 57.0, // Out of 80
        instructions: 'RRB PO Prelims has NO English section! You have a COMPOSITE TIME of 45 minutes for 80 questions across Reasoning and Quant.'
      },
      mains: {
        name: 'Mains (Officer Scale-I)',
        totalDurationMinutes: 120,
        totalQuestions: 200,
        totalMarks: 200,
        negativeMarkingRatio: 0.25,
        hasSectionalTiming: false,
        difficultyLevel: 'Heavy Conceptual',
        sections: [
          { id: 'reason_rrb', name: 'Reasoning (Heavy Conceptual)', questionCount: 40, marks: 50, durationMinutes: 120, negativeMark: 0.3125, subjectCode: 'REAS_MAINS' },
          { id: 'computer_rrb', name: 'Computer Knowledge', questionCount: 40, marks: 20, durationMinutes: 120, negativeMark: 0.125, subjectCode: 'COMP' },
          { id: 'ga_rrb', name: 'General Awareness', questionCount: 40, marks: 40, durationMinutes: 120, negativeMark: 0.25, subjectCode: 'GA' },
          { id: 'eng_rrb', name: 'English Language', questionCount: 40, marks: 40, durationMinutes: 120, negativeMark: 0.25, subjectCode: 'ENG_MAINS' },
          { id: 'quant_rrb', name: 'Quantitative Aptitude (Heavy Conceptual)', questionCount: 40, marks: 50, durationMinutes: 120, negativeMark: 0.3125, subjectCode: 'QA_MAINS' }
        ],
        cutoffGeneralEstimate: 95.0,
        instructions: 'RRB PO Mains gives a composite time of 2 hours for 200 questions. Time management across sections is key!'
      }
    }
  },

  // 12. IBPS RRB CLERK
  'ibps-rrb-clerk': {
    id: 'ibps-rrb-clerk',
    category: 'rrb',
    tier: 4,
    tierCode: 'tier4_rrb',
    isClerk: true,
    title: 'IBPS RRB Clerk (Office Assistant)',
    shortName: 'RRB Clerk',
    icon: '🏡',
    description: 'Regional Rural Banks Office Assistant. Prelims is easy conceptual with LENGTHY calculations and a super-high cutoff (~76/80).',
    levels: {
      pre: {
        name: 'Prelims (Lengthy Calculations)',
        totalDurationMinutes: 45,
        totalQuestions: 80,
        totalMarks: 80,
        negativeMarkingRatio: 0.25,
        hasSectionalTiming: false,
        difficultyLevel: 'Calculation Lengthy',
        sections: [
          { id: 'reason', name: 'Reasoning Ability', questionCount: 40, marks: 40, durationMinutes: 45, negativeMark: 0.25, subjectCode: 'REAS_CLERK_PRE' },
          { id: 'quant', name: 'Numerical Ability (Lengthy Calculations)', questionCount: 40, marks: 40, durationMinutes: 45, negativeMark: 0.25, subjectCode: 'QA_CLERK_PRE' }
        ],
        cutoffGeneralEstimate: 76.5, // Extreme high cutoff benchmark out of 80
        instructions: 'Composite time of 45 minutes for 80 questions. Target 76+ attempts with 99% accuracy.'
      },
      mains: {
        name: 'Mains (Heavy Conceptual)',
        totalDurationMinutes: 120,
        totalQuestions: 200,
        totalMarks: 200,
        negativeMarkingRatio: 0.25,
        hasSectionalTiming: false,
        difficultyLevel: 'Heavy Conceptual',
        sections: [
          { id: 'reason_rrb', name: 'Reasoning', questionCount: 40, marks: 50, durationMinutes: 120, negativeMark: 0.3125, subjectCode: 'REAS_MAINS' },
          { id: 'computer_rrb', name: 'Computer Knowledge', questionCount: 40, marks: 20, durationMinutes: 120, negativeMark: 0.125, subjectCode: 'COMP' },
          { id: 'ga_rrb', name: 'General Awareness', questionCount: 40, marks: 40, durationMinutes: 120, negativeMark: 0.25, subjectCode: 'GA' },
          { id: 'eng_rrb', name: 'English Language', questionCount: 40, marks: 40, durationMinutes: 120, negativeMark: 0.25, subjectCode: 'ENG_MAINS' },
          { id: 'quant_rrb', name: 'Numerical Ability', questionCount: 40, marks: 50, durationMinutes: 120, negativeMark: 0.3125, subjectCode: 'QA_MAINS' }
        ],
        cutoffGeneralEstimate: 125.0,
        instructions: '200 questions in 120 minutes composite time. High scoring test.'
      }
    }
  }
};
