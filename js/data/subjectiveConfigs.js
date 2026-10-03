// Mock Machine - Subjective & Descriptive Exam Paper Configurations
// Authentic structure for Indian Banking & Regulatory Mains Descriptive Tests

export const SUBJECTIVE_EXAM_CONFIGS = {
  'sbi-po-desc': {
    id: 'sbi-po-desc',
    examTitle: 'SBI PO Mains - Descriptive Paper',
    shortName: 'SBI PO Descriptive',
    category: 'sbi',
    tier: 'Tier 2 (SBI)',
    icon: '🔵',
    totalDurationMinutes: 30,
    totalMarks: 50,
    cutoffEstimate: 20.0, // Official ~40% cutoff
    questionsStructure: [
      { id: 'letter', type: 'Letter', title: 'Letter Writing (Formal / Informal)', marks: 20, wordLimit: '150 words', timeMinutes: 12 },
      { id: 'essay', type: 'Essay', title: 'Essay Writing (Banking, Tech, Economy)', marks: 30, wordLimit: '250 words', timeMinutes: 18 }
    ],
    instructions: 'Write one Letter (150 words) and one Essay (250 words) out of the choices provided. Evaluated on Content Relevance, Formal Tone, Cohesion, Vocabulary, and Grammatical Precision.'
  },

  'ibps-po-desc': {
    id: 'ibps-po-desc',
    examTitle: 'IBPS PO Mains - English Language (Descriptive)',
    shortName: 'IBPS PO Descriptive',
    category: 'ibps',
    tier: 'Tier 3 (IBPS)',
    icon: '🏛️',
    totalDurationMinutes: 30,
    totalMarks: 25,
    cutoffEstimate: 10.0, // Official ~40% cutoff
    questionsStructure: [
      { id: 'letter', type: 'Letter', title: 'Letter Writing', marks: 10, wordLimit: '150 words', timeMinutes: 12 },
      { id: 'essay', type: 'Essay', title: 'Essay Writing', marks: 15, wordLimit: '250 words', timeMinutes: 18 }
    ],
    instructions: 'Contains 1 Letter Writing (10 Marks) and 1 Essay Writing (15 Marks). Adhere strictly to the word limits.'
  },

  'rbi-grade-b-desc-eng': {
    id: 'rbi-grade-b-desc-eng',
    examTitle: 'RBI Grade B Phase-II - Paper 1: English (Writing Skills)',
    shortName: 'RBI Gr B English (Descriptive)',
    category: 'regulatory',
    tier: 'Tier 1 (Apex)',
    icon: '👑',
    totalDurationMinutes: 90,
    totalMarks: 100,
    cutoffEstimate: 60.0,
    questionsStructure: [
      { id: 'essay', type: 'Essay', title: 'Essay on Macroeconomic / Social Topic', marks: 40, wordLimit: '400 words', timeMinutes: 35 },
      { id: 'precis', type: 'Precis', title: 'Précis Writing with Suitable Title', marks: 30, wordLimit: '170 words (1/3rd of 500-word passage)', timeMinutes: 30 },
      { id: 'rc_desc', type: 'ReadingComp', title: 'Descriptive Reading Comprehension (5 Analytical Questions)', marks: 30, wordLimit: '50-60 words per answer', timeMinutes: 25 }
    ],
    instructions: 'RBI Grade B Phase II English Writing Skills is highly competitive. Focus on structured analytical arguments, policy depth, and concise precis formulation.'
  },

  'rbi-grade-b-desc-esi': {
    id: 'rbi-grade-b-desc-esi',
    examTitle: 'RBI Grade B Phase-II - Paper 2: Economic & Social Issues (ESI Descriptive)',
    shortName: 'RBI Gr B ESI (Descriptive)',
    category: 'regulatory',
    tier: 'Tier 1 (Apex)',
    icon: '📊',
    totalDurationMinutes: 90,
    totalMarks: 50,
    cutoffEstimate: 28.0,
    questionsStructure: [
      { id: 'esi_15_1', type: 'Subjective15', title: 'Question 1 (15 Marks - Analytical Macroeconomic Policy)', marks: 15, wordLimit: '600 words', timeMinutes: 25 },
      { id: 'esi_15_2', type: 'Subjective15', title: 'Question 2 (15 Marks - Sustainable Growth & Climate Finance)', marks: 15, wordLimit: '600 words', timeMinutes: 25 },
      { id: 'esi_10_1', type: 'Subjective10', title: 'Question 3 (10 Marks - Social Welfare & Demographics)', marks: 10, wordLimit: '400 words', timeMinutes: 20 },
      { id: 'esi_10_2', type: 'Subjective10', title: 'Question 4 (10 Marks - Inflation & Monetary Transmission)', marks: 10, wordLimit: '400 words', timeMinutes: 20 }
    ],
    instructions: 'Answer 4 questions (Two 15-markers of 600 words each, and Two 10-markers of 400 words each). Total marks = 50.'
  },

  'rbi-grade-b-desc-fm': {
    id: 'rbi-grade-b-desc-fm',
    examTitle: 'RBI Grade B Phase-II - Paper 3: Finance and Management (FM Descriptive)',
    shortName: 'RBI Gr B FM (Descriptive)',
    category: 'regulatory',
    tier: 'Tier 1 (Apex)',
    icon: '⚖️',
    totalDurationMinutes: 90,
    totalMarks: 50,
    cutoffEstimate: 30.0,
    questionsStructure: [
      { id: 'fm_15_1', type: 'Subjective15', title: 'Question 1 (15 Marks - Financial System & Regulatory Architecture)', marks: 15, wordLimit: '600 words', timeMinutes: 25 },
      { id: 'fm_15_2', type: 'Subjective15', title: 'Question 2 (15 Marks - Corporate Governance & Ethics)', marks: 15, wordLimit: '600 words', timeMinutes: 25 },
      { id: 'fm_10_1', type: 'Subjective10', title: 'Question 3 (10 Marks - Management Leadership Theories)', marks: 10, wordLimit: '400 words', timeMinutes: 20 },
      { id: 'fm_10_2', type: 'Subjective10', title: 'Question 4 (10 Marks - Financial Market Instruments & Fintech)', marks: 10, wordLimit: '400 words', timeMinutes: 20 }
    ],
    instructions: 'Answer 4 questions (Two 15-markers of 600 words each, and Two 10-markers of 400 words each). Total marks = 50.'
  },

  'sebi-grade-a-desc-eng': {
    id: 'sebi-grade-a-desc-eng',
    examTitle: 'SEBI Grade A Phase-II - Paper 1: English (Writing Skills)',
    shortName: 'SEBI Gr A English (Descriptive)',
    category: 'regulatory',
    tier: 'Tier 1 (Apex)',
    icon: '📈',
    totalDurationMinutes: 60,
    totalMarks: 100,
    cutoffEstimate: 65.0,
    questionsStructure: [
      { id: 'essay', type: 'Essay', title: 'Essay (Capital Markets / Technology / Economy)', marks: 30, wordLimit: '300 words', timeMinutes: 25 },
      { id: 'precis', type: 'Precis', title: 'Précis Writing', marks: 30, wordLimit: '150 words', timeMinutes: 20 },
      { id: 'rc_desc', type: 'ReadingComp', title: 'Reading Comprehension (Questions based on Passage)', marks: 40, wordLimit: '50-80 words per answer', timeMinutes: 15 }
    ],
    instructions: 'Evaluates ability to communicate financial and administrative ideas effectively under tight time constraints.'
  },

  'nabard-grade-a-desc': {
    id: 'nabard-grade-a-desc',
    examTitle: 'NABARD Grade A Phase-II - General English (Descriptive)',
    shortName: 'NABARD Gr A English (Descriptive)',
    category: 'regulatory',
    tier: 'Tier 1 (Apex)',
    icon: '🌱',
    totalDurationMinutes: 90,
    totalMarks: 100,
    cutoffEstimate: 58.0,
    questionsStructure: [
      { id: 'essay', type: 'Essay', title: 'Essay (Agriculture, Rural Economy, Rural Credit)', marks: 40, wordLimit: '400 words', timeMinutes: 35 },
      { id: 'precis', type: 'Precis', title: 'Précis Writing', marks: 20, wordLimit: '150 words', timeMinutes: 20 },
      { id: 'letter', type: 'Letter', title: 'Letter / Business Report Writing', marks: 20, wordLimit: '180 words', timeMinutes: 20 },
      { id: 'rc_desc', type: 'ReadingComp', title: 'Reading Comprehension Answers', marks: 20, wordLimit: '40-50 words per answer', timeMinutes: 15 }
    ],
    instructions: 'Comprehensive descriptive paper emphasizing rural development, priority sector lending, and official communication.'
  },

  'lic-aao-desc': {
    id: 'lic-aao-desc',
    examTitle: 'LIC AAO Mains - Descriptive English Test',
    shortName: 'LIC AAO Descriptive',
    category: 'insurance',
    tier: 'Tier 1 (Insurance)',
    icon: '🛡️',
    totalDurationMinutes: 30,
    totalMarks: 25,
    cutoffEstimate: 10.0, // Qualifying (9/25 for SC/ST, 10/25 for Gen/OBC)
    questionsStructure: [
      { id: 'letter', type: 'Letter', title: 'Letter Writing (Insurance / Customer Service)', marks: 10, wordLimit: '150 words', timeMinutes: 12 },
      { id: 'essay', type: 'Essay', title: 'Essay Writing (Insurance, Social Security, Risk)', marks: 15, wordLimit: '250 words', timeMinutes: 18 }
    ],
    instructions: 'Descriptive test is qualifying in nature. Minimum 10 marks required out of 25 for General category.'
  }
};
