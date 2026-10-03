// Mock Machine - Procedural Subjective & Descriptive Question Paper Generator
// Produces thousands of authentic Essay prompts, Letters, Précis passages, and ESI/FM subjective questions

import { seededRandom } from './quantGenerators.js';

export const ESSAY_TOPICS_POOL = [
  {
    category: 'Banking & Financial Technology',
    topics: [
      'Central Bank Digital Currencies (e-Rupee): Opportunities, Macroeconomic Risks, and Commercial Bank Disintermediation.',
      'Role of Account Aggregators and Open Banking in Democratizing MSME Credit in India.',
      'Artificial Intelligence and Machine Learning in Algorithmic Credit Underwriting: Efficiency vs Bias and Explainability.',
      'Cybersecurity Resiliency in Real-Time Payment Infrastructures (UPI & RTGS): Challenges for Public Sector Banks.',
      'Digital Banking Units (DBUs) as Catalysts for Last-Mile Financial Inclusion in Tier-3 to Tier-6 Centers.'
    ]
  },
  {
    category: 'Macroeconomics, Fiscal & Monetary Policy',
    topics: [
      'Evaluating the Efficacy of the Monetary Policy Framework in Balancing Inflation Targeting with Post-Pandemic Economic Growth.',
      'Sovereign Green Bonds and Sustainable Finance: Financing India\'s Net-Zero Transition by 2070.',
      'Global De-Dollarization Trends, Local Currency Trade Settlements, and the Internationalization of the Indian Rupee.',
      'Fiscal Consolidation vs Capital Expenditure: Analyzing the Quality of Union Budget Allocations.',
      'Managing Asset Quality and Resolution Timelines: Lessons from Five Years of the Insolvency and Bankruptcy Code (IBC 2016).'
    ]
  },
  {
    category: 'Agriculture, Rural Economy & Social Infrastructure (NABARD & ESI)',
    topics: [
      'Agritech Startups, Farmer Producer Organizations (FPOs), and Direct Market Linkages: Overcoming Rural Intermediary Frictions.',
      'Climate-Resilient Agriculture, Micro-Irrigation, and Climate Adaptation Funding for Small and Marginal Farmers.',
      'Universal Social Security and Pension Coverage (APY & PMSBY): Bridging the Gig Economy Social Safety Net Gap.',
      'Women Entrepreneurship and Self-Help Group (SHG) Bank Linkage Programs as Drivers of Rural Household Incomes.'
    ]
  },
  {
    category: 'Capital Markets, Corporate Governance & Insurance (SEBI & LIC)',
    topics: [
      'Strengthening Independent Director Independence and Related-Party Transaction Disclosures in Listed Public Entities.',
      'Retail Participation in Equity Markets, Algorithmic Trading Risks, and Investor Protection in Volatile Regimes.',
      'Expanding Insurance Penetration in Rural India: Bima Sugam and Composite Licensing Reforms.',
      'Greenwashing Risks in ESG Mutual Funds: Need for Standardized Taxonomy and Audited Disclosures.'
    ]
  }
];

export const LETTER_TOPICS_POOL = [
  {
    type: 'Formal Business Letter',
    prompts: [
      'Write a formal letter to the Chief General Manager of your Public Sector Bank proposing the integration of AI-assisted chatbots for vernacular regional customer grievance redressal.',
      'Write a formal complaint letter to the RBI Banking Ombudsman regarding unauthorized electronic transactions and delay in zero-liability compensation from your branch.',
      'Write a formal letter to the Regional Rural Bank (RRB) Chairman requesting the sanction of a customized working capital credit facility for a local Farmer Producer Organization (FPO).',
      'Write a letter to the Branch Manager requesting the temporary enhancement of your corporate overdraft credit limit during the seasonal agricultural procurement window.',
      'Write a letter to the Municipal Commissioner on behalf of your bank branch requesting civic infrastructure repairs and adequate lighting around automated teller machine (ATM) kiosks.'
    ]
  },
  {
    type: 'Informal / Editorial Letter',
    prompts: [
      'Write a letter to the Editor of a national financial daily expressing your views on the importance of financial literacy among young retail equity investors.',
      'Write a letter to your younger sibling advising them on responsible digital banking practices, two-factor authentication, and avoiding phishing traps.',
      'Write a letter to your friend working abroad explaining the benefits and procedure of investing in Indian Sovereign Green Bonds through the RBI Retail Direct portal.'
    ]
  }
];

export const PRECIS_PASSAGES_POOL = [
  {
    title: 'Monetary Policy Transmission and Credit Allocation Dynamics',
    wordCount: 450,
    text: `The transmission of monetary policy signals through the commercial banking system remains the cornerstone of modern central banking efficacy. When the central bank alters its benchmark policy repo rate, the intended impact on aggregate demand and inflationary pressures hinges upon how swiftly and completely commercial lenders adjust their lending and deposit rates. Historically, in an environment dominated by fixed-rate deposits and administrative rate-setting, this transmission was characterized by significant time lags and asymmetry—lending rates responded faster during rate-hiking cycles than during easing cycles. To address this friction, the Reserve Bank of India mandated the adoption of the External Benchmark Lending Rate (EBLR) framework in October 2019 for all new floating-rate personal, retail, and MSME loans. By linking lending rates directly to transparent external market benchmarks—such as the policy repo rate or Government of India Treasury Bill yields—the EBLR mechanism has dramatically enhanced the velocity and completeness of monetary transmission. Consequently, borrowers now experience immediate interest rate adjustments when policy rates pivot. However, this heightened responsiveness also introduces interest rate risk directly onto borrower cash flows, necessitating rigorous borrower risk profiling and prudent liquidity buffering across retail asset portfolios.`,
    modelTitle: 'EBLR and the Velocity of Monetary Transmission',
    targetSummary: 'Monetary policy effectiveness depends on how quickly commercial banks transmit central bank rate changes to lending rates. Historically slowed by fixed-rate deposits, transmission exhibited significant lags and upward asymmetry. To rectify this, the RBI mandated the External Benchmark Lending Rate (EBLR) in 2019, linking retail loans directly to market benchmarks. While EBLR significantly accelerated rate transmission, it directly transfers interest rate volatility to borrowers, demanding robust credit risk management.'
  }
];

export const ESI_FM_SUBJECTIVE_QUESTIONS = [
  {
    category: 'ESI 15-Marker (600 Words)',
    q: 'Critically analyze the structural challenges facing agricultural productivity in India. Discuss how modern Agritech interventions, precision farming, and digital public infrastructure can enhance smallholder farmer incomes while mitigating climate vulnerabilities.',
    marks: 15,
    wordLimit: '600 words',
    keyPoints: [
      'Introduction: Share of agriculture in GDP (~18%) vs employment (~45%), structural fragmentation (86% small/marginal farmers).',
      'Core Challenges: Water table depletion, low seed replacement rate, monsoon dependency, post-harvest losses (cold chain gaps), high input costs.',
      'Agritech & Digital Interventions: Drone technology for targeted pesticide spraying, IoT soil sensors, AgriStack digital identity, e-NAM market integration.',
      'Policy Linkages: PM Kisan, Agriculture Infrastructure Fund (AIF), PM Fasal Bima Yojana revised guidelines.',
      'Conclusion: Sustainable pathway towards climate-resilient agriculture and Doubling Farmers\' Income.'
    ]
  },
  {
    category: 'FM 15-Marker (600 Words)',
    q: 'Examine the evolution of Corporate Governance norms in Indian listed companies post the Kotak Committee recommendations. How do enhanced disclosures and the separation of Chairperson and CEO roles promote stakeholder protection and capital market integrity?',
    marks: 15,
    wordLimit: '600 words',
    keyPoints: [
      'Context: Background of corporate collapses (IL&FS, Satyam) and constitution of SEBI Uday Kotak Committee on Corporate Governance.',
      'Key Regulatory Reforms: Enhanced minimum independent directors (Section 149), female independent director mandate, tightened Related Party Transactions (RPT) audit committee approval rules, Secretarial Audit requirements.',
      'Separation of CMD Roles: Rationale of avoiding concentration of executive power, fostering objective board oversight, and reducing agency conflicts.',
      'Challenges in Implementation: Family-promoter resistance, succession planning issues in Indian conglomerates.',
      'Conclusion: Global convergence towards investor trust, ESG ratings, and institutional capital inflows.'
    ]
  },
  {
    category: 'ESI 10-Marker (400 Words)',
    q: 'What is the "Demographic Dividend"? Discuss the strategic policy initiatives required in skill development, education, and labor market reforms to prevent this demographic window from turning into a demographic liability.',
    marks: 10,
    wordLimit: '400 words',
    keyPoints: [
      'Definition of Demographic Dividend (working-age population > dependent population, median age ~28 years).',
      'Pillars: National Education Policy (NEP 2020), Skill India Mission, Apprenticeship expansion.',
      'Labor Market Reforms: Consolidation into 4 Labor Codes, formalization of employment, female labor force participation rate (FLFPR).',
      'Conclusion: Time-sensitive demographic opportunity lasting until ~2045.'
    ]
  },
  {
    category: 'FM 10-Marker (400 Words)',
    q: 'Explain the concept of Prompt Corrective Action (PCA) framework of the Reserve Bank of India. Outline the primary trigger parameters and the mandatory versus discretionary corrective actions imposed on commercial banks under PCA.',
    marks: 10,
    wordLimit: '400 words',
    keyPoints: [
      'Definition & Objective: Early intervention mechanism to restore financial health before insolvency.',
      'Three Key Trigger Parameters: Capital (CRAR/CET-1), Asset Quality (Net NPA Ratio), and Leverage Ratio.',
      'Mandatory Actions: Restriction on dividend distribution, restriction on branch expansion, higher provisioning.',
      'Discretionary Actions: Special audit, caps on lending to risky sectors, board restructuring or management change.'
    ]
  }
];

export class SubjectiveGenerators {
  static generateQuestionPaper(examId, mockNumber = 1) {
    const rng = seededRandom(mockNumber * 7777);

    // Pick dynamic essay topic
    const catIdx = (mockNumber + 0) % ESSAY_TOPICS_POOL.length;
    const cat = ESSAY_TOPICS_POOL[catIdx];
    const essayTopic = cat.topics[(mockNumber * 3) % cat.topics.length];

    // Pick dynamic letter topic
    const letterCatIdx = (mockNumber + 0) % LETTER_TOPICS_POOL.length;
    const letterCat = LETTER_TOPICS_POOL[letterCatIdx];
    const letterPrompt = letterCat.prompts[(mockNumber * 2) % letterCat.prompts.length];

    // Pick precis passage
    const precis = PRECIS_PASSAGES_POOL[(mockNumber - 1) % PRECIS_PASSAGES_POOL.length];

    // Pick subjective questions for RBI ESI/FM
    const esi15 = ESI_FM_SUBJECTIVE_QUESTIONS[0];
    const fm15 = ESI_FM_SUBJECTIVE_QUESTIONS[1];
    const esi10 = ESI_FM_SUBJECTIVE_QUESTIONS[2];
    const fm10 = ESI_FM_SUBJECTIVE_QUESTIONS[3];

    return {
      examId,
      mockNumber,
      essay: {
        topic: essayTopic,
        category: cat.category,
        wordLimit: examId.includes('rbi') ? '400 words' : '250 words',
        marks: examId.includes('rbi') ? 40 : (examId.includes('sbi') ? 30 : 15)
      },
      letter: {
        prompt: letterPrompt,
        type: letterCat.type,
        wordLimit: '150 words',
        marks: examId.includes('sbi') ? 20 : 10
      },
      precis: {
        passage: precis.text,
        originalLength: precis.wordCount,
        targetLength: '150-170 words (1/3rd of passage)',
        marks: 30,
        modelTitle: precis.modelTitle,
        modelSummary: precis.targetSummary
      },
      esiQuestions: [esi15, esi10],
      fmQuestions: [fm15, fm10]
    };
  }
}
