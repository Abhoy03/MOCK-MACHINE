// Mock Machine - Parametric Reasoning Ability Generator Engine
// Supports 4-Tier Hierarchy: Apex Regulatory, SBI PO, IBPS, and Clerk Pre/Mains

import { seededRandom } from './quantGenerators.js';

export class ReasoningGenerators {
  // 1. Mains & Regulatory: Heavy Conceptual Critical Reasoning
  static generateCriticalReasoning(seed, index) {
    const scenarios = [
      {
        theme: 'Monetary Tightening & Inflation Expectations',
        statement: 'The central bank increased the policy repo rate by 75 basis points following three consecutive quarters of retail inflation exceeding the 6% upper tolerance ceiling. The governor stated that anchored inflation expectations are a prerequisite for sustained long-term capital investments.',
        question: 'Which of the following, if true, most strongly STRENGTHENS the governor’s policy action?',
        options: [
          'High domestic inflation leads to currency depreciation, increasing the landed cost of crucial industrial energy imports and further exacerbating price instability.',
          'Small enterprises heavily depend on floating-rate working capital loans that become costlier when repo rates hike.',
          'Agricultural output for the upcoming monsoon is projected to reach an all-time record harvest.',
          'International commodity prices dropped by 12% in the preceding week.',
          'Consumer discretionary spending tends to decline immediately following rate hikes.'
        ],
        correct: 0,
        exp: 'Option 1 directly strengthens the premise that unchecked inflation harms the broader economic equilibrium by depreciating currency and fueling import inflation.'
      },
      {
        theme: 'Non-Performing Assets (NPA) Resolution',
        statement: 'A public sector lender initiated insolvency proceedings against a major infrastructure conglomerate under the IBC 2016 after the borrower defaulted on structured bond repayments for six consecutive months.',
        question: 'Which of the following is an underlying ASSUMPTION behind initiating the CIRP process under IBC?',
        options: [
          'The resolution framework under the IBC will yield a higher recovery value for creditors than protracted piecemeal litigation.',
          'The corporate debtor has zero tangible assets remaining on its balance sheet.',
          'Commercial courts will immediately dismiss all liquidation petitions.',
          'All unsecured creditors will voluntarily waive their entire principal claim.',
          'The infrastructure assets will immediately be nationalized by the union government.'
        ],
        correct: 0,
        exp: 'The core assumption of initiating CIRP under IBC is that a time-bound resolution provides superior asset recovery value compared to prolonged litigation.'
      }
    ];

    const cr = scenarios[index % scenarios.length];

    return {
      id: `reas_mains_cr_${seed}_${index}`,
      topic: 'Critical Reasoning (Mains Heavy Conceptual)',
      difficulty: 'Heavy Conceptual (Mains)',
      text: `<div class="passage-box">
        <strong>Statement:</strong><br>
        ${cr.statement}
      </div>
      <p class="question-text"><strong>Question:</strong> ${cr.question}</p>`,
      options: cr.options,
      correctOption: cr.correct,
      marks: 1.5,
      negativeMarks: 0.375,
      explanation: `<strong>Critical Reasoning Analysis:</strong><br>${cr.exp}`
    };
  }

  // 2. Mains & Apex: Multi-Variable Parallel Row / Complex Puzzle
  static generateMainsComplexPuzzle(seed, index) {
    return {
      id: `reas_mains_puz_${seed}_${index}`,
      topic: 'Multi-Variable Seating Arrangement (Facing In/Out + Attributes)',
      difficulty: 'Heavy Conceptual (Mains)',
      text: `<div class="passage-box">
        <strong>Directions:</strong> Eight persons—P, Q, R, S, T, U, V, and W—are sitting around a circular table. Some are facing the center while others are facing outside. Each person works in a different department (Risk, Forex, Treasury, IT, Audit, Credit, Retail, HR).<br>
        • P sits third to the right of the one from Treasury, and both face the same direction.<br>
        • The person from IT sits second to the left of P.<br>
        • Q and R face opposite directions to each other.<br>
        • Only two persons sit between the one from Credit and V.<br>
        • The person from Forex sits immediate left of S.<br>
        • W faces outside and sits opposite the person from Risk.
      </div>
      <p class="question-text"><strong>Question:</strong> Which department does the person sitting second to the right of V belong to?</p>`,
      options: [
        'Treasury',
        'Credit',
        'Forex',
        'Audit',
        'HR'
      ],
      correctOption: 0, // Treasury
      marks: 2.0,
      negativeMarks: 0.50,
      explanation: `<strong>Analytical Derivation:</strong><br>
      Following the inward/outward orientation cues and departmental cross-matching, V is placed adjacent to Audit and opposite HR. The person 2nd to the right of V (facing inward) is placed in <strong>Treasury</strong>.`
    };
  }

  // 3. Clerk Prelims: Straightforward Fast Puzzles
  static generateClerkFastPuzzle(seed, index) {
    return {
      id: `reas_clerk_puz_${seed}_${index}`,
      topic: 'Single-Variable Box Puzzle (Clerk Prelims)',
      difficulty: 'Speed Conceptual',
      text: `<div class="passage-box">
        <strong>Directions:</strong> Six boxes—A, B, C, D, E, and F—are placed one above another in a stack.<br>
        • Box C is placed immediately above Box E.<br>
        • Only two boxes are placed between Box E and Box A.<br>
        • Box B is placed immediately below Box A.<br>
        • Box D is placed above Box F.<br>
        • Box F is not at the bottom of the stack.
      </div>
      <p class="question-text"><strong>Question:</strong> Which box is placed at the topmost position in the stack?</p>`,
      options: ['D', 'C', 'A', 'B', 'E'],
      correctOption: 0, // D
      marks: 1.0,
      negativeMarks: 0.25,
      explanation: `<strong>Stack Order (Top to Bottom):</strong><br>
      1. Box D<br>
      2. Box F<br>
      3. Box C<br>
      4. Box E<br>
      5. Box A<br>
      6. Box B<br>
      Therefore, <strong>Box D</strong> is at the top.`
    };
  }

  // 4. Syllogisms
  static generateSyllogism(seed, index) {
    return {
      id: `reas_syl_${seed}_${index}`,
      topic: 'Syllogisms (Only a few)',
      difficulty: 'Medium',
      text: `<div class="passage-box">
        <strong>Statements:</strong><br>
        • Only a few Loans are Deposits.<br>
        • All Deposits are Assets.<br>
        • No Asset is Liability.
      </div>
      <p class="question-text"><strong>Conclusions:</strong><br>
      I. Some Loans are not Liabilities.<br>
      II. All Assets being Loans is a possibility.<br>
      III. No Deposit is Liability.</p>`,
      options: [
        'Only I and II follow',
        'Only II and III follow',
        'Only I and III follow',
        'All I, II and III follow',
        'None follows'
      ],
      correctOption: 3,
      marks: 1.0,
      negativeMarks: 0.25,
      explanation: `<strong>Venn Analysis:</strong> All three conclusions (I, II, and III) follow validly from the given statements.`
    };
  }

  // 5. Inequalities
  static generateInequality(seed, index) {
    return {
      id: `reas_ineq_${seed}_${index}`,
      topic: 'Inequality Relations',
      difficulty: 'Easy-Medium',
      text: `<div class="passage-box">
        <strong>Statements:</strong> M &ge; N &gt; O = P; &nbsp; P &ge; Q &gt; R
      </div>
      <p class="question-text"><strong>Conclusions:</strong><br>I. M &gt; R<br>II. N &ge; Q</p>`,
      options: ['Only I is true', 'Only II is true', 'Both I and II are true', 'Neither I nor II is true', 'Either I or II is true'],
      correctOption: 0, // Only I (M > R is true; N > Q is true so N >= Q is false)
      marks: 1.0,
      negativeMarks: 0.25,
      explanation: `M &ge; N &gt; O = P &ge; Q &gt; R &rArr; M &gt; R is <strong>TRUE</strong>.`
    };
  }

  // 6. Direction Sense
  static generateDirectionSense(seed, index) {
    return {
      id: `reas_dir_${seed}_${index}`,
      topic: 'Direction & Distance',
      difficulty: 'Medium',
      text: `<p class="question-text"><strong>Question:</strong> A person walks 12m North, turns right and walks 5m East. What is the straight-line shortest distance from starting point?</p>`,
      options: ['13 meters', '17 meters', '15 meters', '11 meters', '14 meters'],
      correctOption: 0, // sqrt(12^2 + 5^2) = 13
      marks: 1.0,
      negativeMarks: 0.25,
      explanation: `$\\sqrt{12^2 + 5^2} = \\sqrt{144 + 25} = \\sqrt{169} = \\mathbf{13\\text{ meters}}$.`
    };
  }

  // 7. General Puzzle
  static generatePuzzle(seed, index) {
    return ReasoningGenerators.generateClerkFastPuzzle(seed, index);
  }
}
