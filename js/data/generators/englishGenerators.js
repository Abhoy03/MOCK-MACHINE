// BankMock Pro - Parametric English Language Generator Engine
// Produces extensive Reading Comprehensions, Error Spotting, Cloze Tests & Para Jumbles

import { seededRandom } from './quantGenerators.js';

export const GRAMMAR_RULES = [
  {
    topic: 'Subject-Verb Agreement (Neither/Nor Proximity)',
    sentence: ['Neither the chief credit manager nor ', 'the branch risk analysts was ', 'fully prepared for ', 'the abrupt spike in non-performing assets.'],
    errorPart: 1, // (B) was -> were
    correction: 'Since "the branch risk analysts" is plural and closest to the verb, "was" must be replaced with "were".',
    rule: 'When subjects are connected by "neither... nor", the verb agrees with the closer subject.'
  },
  {
    topic: 'Conditional Clause (Third Conditional)',
    sentence: ['If the treasury department had ', 'hedged the foreign exchange exposure in time, ', 'the institution would not suffered ', 'such substantial currency depreciation losses.'],
    errorPart: 2, // (C) would not suffered -> would not have suffered
    correction: 'In Third Conditional (Past Unreal), the structure is "If + Past Perfect, Subject + would have + V3". Replace "would not suffered" with "would not have suffered".',
    rule: 'Third conditional requires "would have + past participle" in the main clause.'
  },
  {
    topic: 'Inversion with Negative Adverbs',
    sentence: ['Scarcely the central bank had ', 'announced the revised liquidity framework ', 'when commercial lenders began adjusting ', 'their benchmark prime lending rates.'],
    errorPart: 0, // (A) Scarcely the central bank had -> Scarcely had the central bank
    correction: 'Negative adverbs (Scarcely, Hardly, Barely, Seldom) placed at the beginning of a clause trigger subject-auxiliary inversion: "Scarcely had the central bank...".',
    rule: 'Initial negative adverbs require inversion (Adverb + Auxiliary + Subject + Main Verb).'
  },
  {
    topic: 'Subjunctive Mood in Recommendations',
    sentence: ['The internal compliance committee recommended ', 'that the delinquent NBFC executes ', 'an immediate forensic audit of its ', 'retail loan disbursements.'],
    errorPart: 1, // (B) executes -> execute
    correction: 'Verbs expressing recommendation, demand, or requirement (recommend, mandate, insist) take the subjunctive mood (base form of verb without -s). Use "execute" instead of "executes".',
    rule: 'Mandative subjunctive requires the base form of the verb in the "that"-clause.'
  },
  {
    topic: 'Redundancy with "Despite" vs "In spite of"',
    sentence: ['Despite of stringent capital adequacy regulations, ', 'several cooperative lenders exhibited ', 'vulnerabilities in asset-liability matching ', 'during the previous quarter.'],
    errorPart: 0, // (A) Despite of -> Despite (or In spite of)
    correction: '"Despite" does not take the preposition "of". Say either "Despite stringent..." or "In spite of stringent...".',
    rule: '"Despite" is used without "of".'
  },
  {
    topic: 'Dangling Modifier',
    sentence: ['Having evaluated the balance sheet carefully, ', 'several accounting discrepancies were discovered ', 'by the statutory audit team ', 'before the annual general meeting.'],
    errorPart: 1, // (B)
    correction: 'The participial phrase "Having evaluated the balance sheet" modifies the person who evaluated it (the audit team), not the discrepancies. It should be: "Having evaluated the balance sheet carefully, the statutory audit team discovered several accounting discrepancies...".',
    rule: 'Participial modifiers must clearly and logically attach to the subject following them.'
  },
  {
    topic: 'Parallelism in Compound Structures',
    sentence: ['The modern banking app allows customers ', 'to transfer funds seamlessly, ', 'monitoring their investment portfolios, ', 'and apply for pre-approved credit cards.'],
    errorPart: 2, // (C) monitoring -> to monitor / monitor
    correction: 'Parallel infinitive structure ("to transfer... monitor... and apply"). Replace "monitoring" with "monitor".',
    rule: 'Items in a coordinate series must share parallel grammatical form.'
  }
];

export const RC_PASSAGES = [
  {
    theme: 'Fintech Disintermediation & Sovereign Digital Currencies',
    text: `The advent of Central Bank Digital Currencies (CBDCs) represents a seismic shift in sovereign monetary architecture. While proponents champion programmability, instantaneous cross-border settlement, and the reduction of physical currency logistics costs, skeptics raise legitimate alarms regarding financial disintermediation. Should commercial bank depositors transition a substantial fraction of their deposits into interest-free or yield-bearing digital wallets held directly with the central bank, the traditional deposit-lending credit multiplication mechanism could face severe friction. To mitigate this systemic run-risk, several central banks have proposed holding caps and tiered remuneration structures that penalize speculative hoarding while safeguarding retail transactional velocity.`,
    questions: [
      {
        q: 'Which of the following best captures the central concern of critics regarding CBDCs discussed in the passage?',
        options: [
          'Central banks lack the computational infrastructure to process retail micropayments at scale.',
          'Rapid migration of funds from commercial bank accounts to CBDC wallets could impair credit creation.',
          'Holding caps will completely eliminate retail consumers’ interest in adopting digital currency.',
          'CBDCs will cause immediate hyperinflation due to algorithmic programmability.',
          'Physical currency logistics will completely cease to exist within two fiscal quarters.'
        ],
        correct: 1,
        exp: 'The passage explicitly mentions that migration of commercial bank deposits to direct central bank wallets could induce friction in traditional deposit-lending credit multiplication.'
      },
      {
        q: 'According to the passage, what measure have central banks proposed to prevent speculative hoarding of digital currency?',
        options: [
          'Complete prohibition of cross-border retail payments.',
          'Holding caps and tiered remuneration structures.',
          'Mandatory conversion of all sovereign bonds into digital tokens.',
          'Abolition of commercial bank physical branch networks.',
          'Unlimited interest-free liquidity lines for retail merchants.'
        ],
        correct: 1,
        exp: 'The text highlights: "...several central banks have proposed holding caps and tiered remuneration structures that penalize speculative hoarding".'
      }
    ]
  },
  {
    theme: 'Green Banking & ESG Regulatory Disclosures',
    text: `Financial institutions are increasingly integrating Environmental, Social, and Governance (ESG) frameworks into their core risk assessment protocols. Central banks globally are conducting climate stress testing to gauge the vulnerability of commercial balance sheets to transition risks—such as abrupt carbon tax hikes—and physical risks arising from catastrophic weather events. The fundamental challenge lies in standardizing disclosure taxonomies and preventing "greenwashing," where lenders misrepresent carbon-intensive exposures under eco-friendly labels. Mandating audited sustainability disclosures is becoming essential to ensure equitable capital allocation toward net-zero transitions.`,
    questions: [
      {
        q: 'What is the primary objective of climate stress testing conducted by central banks as described in the text?',
        options: [
          'To penalize commercial banks by hiking statutory cash reserve ratios.',
          'To assess bank balance sheet vulnerabilities to transition and physical climate risks.',
          'To eliminate all commercial lending to manufacturing enterprises.',
          'To replace traditional credit rating agencies with international environmental NGOs.',
          'To subsidize the issuance of municipal zero-coupon green bonds.'
        ],
        correct: 1,
        exp: 'The passage notes that central banks conduct climate stress testing "to gauge the vulnerability of commercial balance sheets to transition risks and physical risks".'
      }
    ]
  }
];

export class EnglishGenerators {
  static generateErrorSpotting(seed, index) {
    const rng = seededRandom(seed * 9000 + index * 103);
    const ruleObj = GRAMMAR_RULES[index % GRAMMAR_RULES.length];
    const letters = ['(A)', '(B)', '(C)', '(D)', '(E)'];

    const parts = ruleObj.sentence.map((p, i) => `${letters[i]} ${p}`);
    parts.push('(E) No error.');

    return {
      id: `eng_err_${seed}_${index}`,
      topic: `Error Detection (${ruleObj.topic})`,
      difficulty: 'Medium-Hard',
      text: `<div class="passage-box">
        <strong>Directions:</strong> Read the sentence to find out whether there is any grammatical error in it. The error, if any, will be in one part of the sentence.
      </div>
      <p class="question-text">
        ${parts.join(' ')}
      </p>`,
      options: letters,
      correctOption: ruleObj.errorPart,
      marks: 1.0,
      negativeMarks: 0.25,
      explanation: `<strong>Grammar Rule & Analysis:</strong><br>
      • <strong>Error is in part ${letters[ruleObj.errorPart]}</strong>.<br>
      • <strong>Correction:</strong> ${ruleObj.correction}<br>
      • <strong>Underlying Rule:</strong> ${ruleObj.rule}`
    };
  }

  static generateReadingComprehension(seed, index) {
    const rng = seededRandom(seed * 10000 + index * 107);
    const passageObj = RC_PASSAGES[index % RC_PASSAGES.length];
    const qObj = passageObj.questions[index % passageObj.questions.length];

    return {
      id: `eng_rc_${seed}_${index}`,
      topic: `Reading Comprehension (${passageObj.theme})`,
      difficulty: 'Hard',
      text: `<div class="passage-box">
        <strong>Theme: ${passageObj.theme}</strong><br><br>
        ${passageObj.text}
      </div>
      <p class="question-text"><strong>Question:</strong> ${qObj.q}</p>`,
      options: qObj.options,
      correctOption: qObj.correct,
      marks: 1.0,
      negativeMarks: 0.25,
      explanation: `<strong>Comprehension Analysis:</strong><br>
      ${qObj.exp}`
    };
  }
}
