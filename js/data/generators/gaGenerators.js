// BankMock Pro - General Awareness & Specialist Regulatory Generator Engine
// Deep question pool covering Banking, Monetary Policy, SEBI Paper 2, and Computer Knowledge

export const BANKING_GA_ITEMS = [
  {
    topic: 'Monetary Policy & Standing Facilities',
    q: 'Under the liquidity management framework of the Reserve Bank of India, what is the non-collateralized standing facility that absorbs surplus liquidity from commercial banks at 25 bps below the Repo Rate called?',
    options: ['Marginal Standing Facility (MSF)', 'Standing Deposit Facility (SDF)', 'Variable Rate Reverse Repo (VRRR)', 'Liquidity Adjustment Facility (LAF)', 'Market Stabilization Scheme (MSS)'],
    correct: 1,
    exp: 'The Standing Deposit Facility (SDF) introduced in April 2022 allows banks to park surplus funds with the RBI without the RBI needing collateral securities.'
  },
  {
    topic: 'Priority Sector Lending (PSL)',
    q: 'As per RBI guidelines, what is the mandatory overall Priority Sector Lending (PSL) target for Domestic Commercial Banks, expressed as a percentage of Adjusted Net Bank Credit (ANBC)?',
    options: ['30%', '40%', '75%', '60%', '50%'],
    correct: 1,
    exp: 'For Domestic Scheduled Commercial Banks and Foreign Banks with >=20 branches, the overall PSL target is 40% of ANBC.'
  },
  {
    topic: 'Basel III Capital Regulations',
    q: 'Under RBI Basel III regulatory norms, what is the minimum Capital to Risk-Weighted Assets Ratio (CRAR) that Indian Scheduled Commercial Banks are required to maintain on an ongoing basis (excluding CCB)?',
    options: ['8.0%', '9.0%', '10.5%', '11.5%', '12.0%'],
    correct: 1,
    exp: 'While the Basel Committee global minimum is 8.0%, the RBI strictly mandates a minimum CRAR of 9.0% for Indian commercial banks.'
  },
  {
    topic: 'Government Financial Inclusion Schemes',
    q: 'Under the Pradhan Mantri Suraksha Bima Yojana (PMSBY), what is the annual premium payable by an eligible subscriber for accidental death and full disability coverage of ₹2 Lakh?',
    options: ['₹12 per annum', '₹20 per annum', '₹436 per annum', '₹330 per annum', '₹100 per annum'],
    correct: 1,
    exp: 'The PMSBY annual premium was revised from ₹12 to ₹20 per annum effective June 1, 2022.'
  },
  {
    topic: 'Corporate Insolvency (IBC 2016)',
    q: 'Under the Insolvency and Bankruptcy Code (IBC) 2016, what is the outer statutory timeline for the completion of the Corporate Insolvency Resolution Process (CIRP), including all legal extensions?',
    options: ['180 days', '270 days', '330 days', '365 days', '240 days'],
    correct: 2,
    exp: 'Section 12 of IBC mandates an outer cap of 330 days for CIRP, inclusive of litigation periods.'
  },
  {
    topic: 'Negotiable Instruments Act 1881',
    q: 'Under Section 138 of the Negotiable Instruments Act, 1881, dishonour of a cheque for insufficiency of funds in the account attracts imprisonment for a term which may extend to how many years?',
    options: ['6 months', '1 year', '2 years', '3 years', '5 years'],
    correct: 2,
    exp: 'Section 138 provides for imprisonment for a term up to 2 years, or a fine up to twice the amount of the cheque, or both.'
  },
  {
    topic: 'Prompt Corrective Action (PCA) Framework',
    q: 'Which of the following three financial parameters serve as the primary monitoring triggers under RBI\'s revised Prompt Corrective Action (PCA) framework for commercial banks?',
    options: ['CRAR, Net NPA Ratio, and Leverage Ratio', 'Total Deposits, Number of Branches, and Return on Assets', 'Statutory Liquidity Ratio, Cash Reserve Ratio, and CASA', 'Gross Advances, Net Interest Margin, and Tier-2 Capital', 'Current Ratio, Quick Ratio, and Debt-to-Equity Ratio'],
    correct: 0,
    exp: 'RBI\'s revised PCA framework monitors three key metrics: Capital (CRAR/CET-1), Asset Quality (Net NPA Ratio), and Leverage (Tier-1 Leverage Ratio).'
  },
  {
    topic: 'Foreign Exchange Management Act (FEMA 1999)',
    q: 'Under the Liberalised Remittance Scheme (LRS) of the RBI, all resident individuals are allowed to freely remit up to what maximum amount per financial year for permissible current and capital account transactions?',
    options: ['USD 100,000', 'USD 250,000', 'USD 500,000', 'USD 1,000,000', 'USD 50,000'],
    correct: 1,
    exp: 'Under LRS, resident individuals can remit up to USD 250,000 per financial year (April-March).'
  }
];

export const SEBI_SPECIALIST_ITEMS = [
  {
    topic: 'Companies Act 2013 (Board Composition)',
    q: 'According to Section 149(4) of the Companies Act, 2013, every listed public company must have at least what fraction of its total number of directors as Independent Directors?',
    options: ['At least 1/2', 'At least 1/3', 'At least 2/3', 'At least 1/4', 'At least 2 directors'],
    correct: 1,
    exp: 'Section 149(4) mandates that at least one-third (1/3) of the total number of directors of a listed public company shall be independent directors.'
  },
  {
    topic: 'Cost & Management Accounting (Break-Even Analysis)',
    q: 'If a company has a Profit-Volume (P/V) ratio of 40% and its total fixed costs are ₹2,00,000, what is the Break-Even Sales value in rupees?',
    options: ['₹4,00,000', '₹5,00,000', '₹6,00,000', '₹8,00,000', '₹2,50,000'],
    correct: 1,
    exp: 'Break-Even Sales = Fixed Cost / (P/V ratio) = 2,00,000 / 0.40 = ₹5,00,000.'
  },
  {
    topic: 'Management & Motivation Theories',
    q: 'Which leadership model on the Blake-Mouton Managerial Grid represents high concern for people (9) combined with high concern for production (9)?',
    options: ['Country Club Management (1,9)', 'Impoverished Management (1,1)', 'Team Management (9,9)', 'Authority-Compliance (9,1)', 'Middle-of-the-Road (5,5)'],
    correct: 2,
    exp: 'On the Blake-Mouton Managerial Grid, (9,9) corresponds to Team Management (maximum concern for both people and production).'
  },
  {
    topic: 'Macroeconomics (Money Multiplier)',
    q: 'In monetary economics, what is the theoretical formula for the broad money multiplier (m) in terms of broad money supply (M3) and Reserve Money (M0 / High-Powered Money)?',
    options: ['m = M3 / M0', 'm = M0 / M3', 'm = M1 * M2', 'm = M3 - M0', 'm = M0 * CRR'],
    correct: 0,
    exp: 'The money multiplier is the ratio of broad money stock (M3) to reserve money (M0): m = M3 / M0.'
  }
];

export class GAGenerators {
  static generateGAQuestion(seed, index) {
    const item = BANKING_GA_ITEMS[index % BANKING_GA_ITEMS.length];
    return {
      id: `ga_bank_${seed}_${index}`,
      topic: item.topic,
      difficulty: 'Medium-Hard',
      text: `<p class="question-text"><strong>Question:</strong> ${item.q}</p>`,
      options: item.options,
      correctOption: item.correct,
      marks: 1.0,
      negativeMarks: 0.25,
      explanation: `<strong>Fact & Regulatory Context:</strong><br>${item.exp}`
    };
  }

  static generateSEBIPaper2Question(seed, index) {
    const item = SEBI_SPECIALIST_ITEMS[index % SEBI_SPECIALIST_ITEMS.length];
    return {
      id: `sebi_p2_${seed}_${index}`,
      topic: item.topic,
      difficulty: 'Hard',
      text: `<p class="question-text"><strong>Question:</strong> ${item.q}</p>`,
      options: item.options,
      correctOption: item.correct,
      marks: 2.0,
      negativeMarks: 0.50,
      explanation: `<strong>Regulatory / Accounting Breakdown:</strong><br>${item.exp}`
    };
  }
}
