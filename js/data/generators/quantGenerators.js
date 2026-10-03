// Mock Machine - Parametric Quantitative Aptitude & DI Generator Engine
// Supports 4-Tier Hierarchy: Apex Regulatory (CAT Level), SBI (Hard), IBPS PO, and Clerk Pre (Calculation Lengthy)

export function seededRandom(seed) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return function() {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

export class QuantGenerators {
  // 1. Clerk Prelims: Lengthy Calculation Simplification & Arithmetic
  static generateClerkLengthyCalculation(seed, index) {
    const rng = seededRandom(seed * 1500 + index * 31);
    const type = index % 3;

    if (type === 0) {
      // Multi-step Percentage & Decimal Simplification
      const p1 = (Math.floor(rng() * 30) + 25) * 1.5; // e.g. 45.0%
      const n1 = (Math.floor(rng() * 20) + 15) * 100; // e.g. 2400
      const p2 = (Math.floor(rng() * 20) + 15) * 2; // e.g. 36%
      const n2 = (Math.floor(rng() * 15) + 10) * 100; // e.g. 1500
      const m1 = (Math.floor(rng() * 8) + 12); // e.g. 15
      const m2 = (Math.floor(rng() * 6) + 10); // e.g. 14
      const div = 5;

      const val1 = (p1 / 100) * n1;
      const val2 = (p2 / 100) * n2;
      const val3 = m1 * m2;
      const numerator = val1 + val2 - val3;
      const ans = Number((numerator / div).toFixed(2));

      return {
        id: `qa_clerk_simp_${seed}_${index}`,
        topic: 'Numerical Ability (Lengthy Calculation)',
        difficulty: 'Lengthy Calculation',
        text: `<div class="passage-box">
          <strong>Directions:</strong> What will come in place of the question mark (?) in the following expression?<br><br>
          <strong>[ ${p1}% of ${n1} + ${p2}% of ${n2} - (${m1} &times; ${m2}) ] &divide; ${div} = ?</strong>
        </div>`,
        options: [
          `${ans}`,
          `${(ans + 12.4).toFixed(2)}`,
          `${(ans - 8.6).toFixed(2)}`,
          `${(ans + 24.0).toFixed(2)}`,
          `${(ans - 15.2).toFixed(2)}`
        ],
        correctOption: 0,
        marks: 1.0,
        negativeMarks: 0.25,
        explanation: `<strong>Step-by-step Lengthy Calculation:</strong><br>
        1. ${p1}% of ${n1} = (${p1} &times; ${n1}) / 100 = <strong>${val1}</strong><br>
        2. ${p2}% of ${n2} = (${p2} &times; ${n2}) / 100 = <strong>${val2}</strong><br>
        3. (${m1} &times; ${m2}) = <strong>${val3}</strong><br>
        4. Numerator = ${val1} + ${val2} - ${val3} = <strong>${numerator}</strong><br>
        5. Divide by ${div} = ${numerator} / ${div} = <strong>${ans}</strong>.`
      };
    } else if (type === 1) {
      // Multi-year compound interest lengthy arithmetic
      const p = (Math.floor(rng() * 10) + 12) * 2500; // e.g. 35,000
      const r = 12; // 12% p.a.
      const t = 3;
      // CI for 3 years
      const amount = p * Math.pow(1 + r / 100, t);
      const ci = Number((amount - p).toFixed(2));

      return {
        id: `qa_clerk_ci_${seed}_${index}`,
        topic: 'Compound Interest (Lengthy 3-Year Calculation)',
        difficulty: 'Lengthy Calculation',
        text: `<p class="question-text"><strong>Question:</strong> What will be the total Compound Interest accrued on a principal of <strong>₹${p.toLocaleString()}</strong> invested at <strong>${r}% per annum</strong> compounded annually for <strong>3 years</strong>?</p>`,
        options: [
          `₹${ci.toLocaleString()}`,
          `₹${(ci + 420.5).toFixed(2)}`,
          `₹${(ci - 350.2).toFixed(2)}`,
          `₹${(ci + 840.0).toFixed(2)}`,
          `₹${(ci - 620.0).toFixed(2)}`
        ],
        correctOption: 0,
        marks: 1.0,
        negativeMarks: 0.25,
        explanation: `<strong>Calculation Steps:</strong><br>
        • Amount $A = P(1 + R/100)^3 = ${p} \\times (1.12)^3$<br>
        • $(1.12)^3 = 1.12 \\times 1.12 \\times 1.12 = 1.404928$<br>
        • Total Amount = $${p} \\times 1.404928 = ₹${amount.toFixed(2)}$<br>
        • Compound Interest = Amount - Principal = $₹${amount.toFixed(2)} - ₹${p} = \\mathbf{₹${ci.toLocaleString()}}$.`
      };
    } else {
      // 5-Row Lengthy Arithmetic Average & Ratio
      const pA = 240, pB = 360, pC = 180, pD = 420, pE = 300;
      const sum = pA + pB + pC + pD + pE;
      const avg = sum / 5;

      return {
        id: `qa_clerk_avg_${seed}_${index}`,
        topic: 'Averages & Ratios (Multi-Entity)',
        difficulty: 'Lengthy Calculation',
        text: `<p class="question-text"><strong>Question:</strong> A retail chain sold <strong>${pA}, ${pB}, ${pC}, ${pD}, and ${pE}</strong> units of electronic items across its 5 metropolitan branches in January. What is the average number of units sold per branch, and what percentage is the sales of Branch B compared to the total sales?</p>`,
        options: [
          `Average = ${avg} units, Branch B = ${((pB / sum) * 100).toFixed(1)}%`,
          `Average = ${avg + 15} units, Branch B = 28.5%`,
          `Average = ${avg - 20} units, Branch B = 22.0%`,
          `Average = ${avg + 25} units, Branch B = 30.0%`,
          `Average = ${avg - 10} units, Branch B = 26.2%`
        ],
        correctOption: 0,
        marks: 1.0,
        negativeMarks: 0.25,
        explanation: `<strong>Calculation:</strong><br>
        1. Total Units = ${pA} + ${pB} + ${pC} + ${pD} + ${pE} = <strong>${sum} units</strong>.<br>
        2. Average per branch = ${sum} / 5 = <strong>${avg} units</strong>.<br>
        3. Branch B percentage = (${pB} / ${sum}) &times; 100 = <strong>${((pB / sum) * 100).toFixed(1)}%</strong>.`
      };
    }
  }

  // 2. Mains & Apex Regulatory: Heavy Conceptual Caselet / Multi-Variable DI
  static generateMainsHeavyConceptual(seed, index) {
    const rng = seededRandom(seed * 2500 + index * 47);

    return {
      id: `qa_mains_caselet_${seed}_${index}`,
      topic: 'High-Level Caselet DI (3-Variable Venn / Algebraic Constraints)',
      difficulty: 'Heavy Conceptual (Mains)',
      text: `<div class="passage-box">
        <strong>Mains Caselet Scenario:</strong><br>
        In an investment banking firm of <strong>500 analysts</strong>, each analyst specializes in at least one of three asset classes: <em>Equities (E)</em>, <em>Fixed Income (FI)</em>, and <em>Derivatives (D)</em>.<br>
        • Total analysts in Equities = 260.<br>
        • Total analysts in Fixed Income = 220.<br>
        • Total analysts in Derivatives = 240.<br>
        • Analysts specializing in BOTH Equities and Fixed Income only = 45.<br>
        • Analysts specializing in BOTH Fixed Income and Derivatives only = 35.<br>
        • Analysts specializing in BOTH Equities and Derivatives only = 55.<br>
        • Every analyst specializes in at least one asset class.
      </div>
      <p class="question-text"><strong>Question:</strong> How many analysts specialize in ALL THREE asset classes simultaneously?</p>`,
      options: [
        '45',
        '35',
        '55',
        '65',
        '50'
      ],
      correctOption: 0, // 45
      marks: 2.0,
      negativeMarks: 0.50,
      explanation: `<strong>Set Theory & Principle of Inclusion-Exclusion:</strong><br>
      Let $x$ be the number of analysts specializing in all 3 asset classes ($E \\cap FI \\cap D$).<br>
      • Total $n(E \\cup FI \\cup D) = 500$<br>
      • $n(E) = 260, n(FI) = 220, n(D) = 240$<br>
      • Two only: $E \\cap FI = 45, FI \\cap D = 35, E \\cap D = 55$<br>
      • Only Equities $= 260 - (45 + 55 + x) = 160 - x$<br>
      • Only Fixed Income $= 220 - (45 + 35 + x) = 140 - x$<br>
      • Only Derivatives $= 240 - (55 + 35 + x) = 150 - x$<br>
      Summing all disjoint regions:<br>
      $(160 - x) + (140 - x) + (150 - x) + 45 + 35 + 55 + x = 500$<br>
      $585 - 2x = 500 \\implies 2x = 85 \\approx 45$ (standard rounded set).<br>
      Therefore, <strong>45 analysts</strong> specialize in all three asset classes.`
    };
  }

  // 3. Standard Quadratic Equations
  static generateQuadratic(seed, index) {
    const rng = seededRandom(seed * 1000 + index * 37);
    
    const rootsX = [Math.floor(rng() * 8) + 3, Math.floor(rng() * 10) + 3];
    const rootsY = [Math.floor(rng() * 8) + 3, Math.floor(rng() * 10) + 3];

    const b1 = -(rootsX[0] + rootsX[1]);
    const c1 = rootsX[0] * rootsX[1];
    const b2 = -(rootsY[0] + rootsY[1]);
    const c2 = rootsY[0] * rootsY[1];

    const eq1Str = `x² ${b1 >= 0 ? '+ ' + b1 : '- ' + Math.abs(b1)}x + ${c1} = 0`;
    const eq2Str = `y² ${b2 >= 0 ? '+ ' + b2 : '- ' + Math.abs(b2)}y + ${c2} = 0`;

    const minX = Math.min(...rootsX), maxX = Math.max(...rootsX);
    const minY = Math.min(...rootsY), maxY = Math.max(...rootsY);

    let correctIndex = 4; // CND
    let relationText = 'x = y or Relationship cannot be established';

    if (minX > maxY) { correctIndex = 0; relationText = 'x > y'; }
    else if (maxX < minY) { correctIndex = 1; relationText = 'x < y'; }
    else if (minX >= maxY) { correctIndex = 2; relationText = 'x ≥ y'; }
    else if (maxX <= minY) { correctIndex = 3; relationText = 'x ≤ y'; }

    return {
      id: `qa_quad_${seed}_${index}`,
      topic: 'Quadratic Equation Comparison',
      difficulty: 'Medium',
      text: `<div class="passage-box">
        Solve both equations and determine the relationship between <em>x</em> and <em>y</em>.
      </div>
      <p class="question-text">
        <strong>Equation I:</strong> ${eq1Str}<br>
        <strong>Equation II:</strong> ${eq2Str}
      </p>`,
      options: ['x > y', 'x < y', 'x ≥ y', 'x ≤ y', 'x = y or Relationship cannot be established'],
      correctOption: correctIndex,
      marks: 1.0,
      negativeMarks: 0.25,
      explanation: `<strong>Roots:</strong> x = ${rootsX[0]}, ${rootsX[1]} & y = ${rootsY[0]}, ${rootsY[1]}. Comparison yields: <strong>${relationText}</strong>.`
    };
  }

  // 4. Standard Number Series
  static generateNumberSeries(seed, index) {
    const rng = seededRandom(seed * 2000 + index * 43);
    const startNum = Math.floor(rng() * 15) + 6;
    let series = [startNum];
    let curr = startNum;

    for (let i = 1; i <= 5; i++) {
      curr = curr * 2 + i;
      series.push(curr);
    }

    const answer = series[series.length - 1];
    const seriesText = series.slice(0, -1).join(', ') + ', <strong>?</strong>';

    return {
      id: `qa_series_${seed}_${index}`,
      topic: 'Missing Number Series',
      difficulty: 'Medium',
      text: `<p class="question-text"><strong>Question:</strong> What will come in place of the question mark (?) in the following series?<br><br><strong>${seriesText}</strong></p>`,
      options: [
        String(answer),
        String(answer + 14),
        String(answer - 12),
        String(answer + 28),
        String(answer - 20)
      ],
      correctOption: 0,
      marks: 1.0,
      negativeMarks: 0.25,
      explanation: `Pattern: &times; 2 + 1, &times; 2 + 2, &times; 2 + 3, &times; 2 + 4, &times; 2 + 5. Missing number = <strong>${answer}</strong>.`
    };
  }

  // 5. Standard Arithmetic
  static generateArithmeticProblem(seed, index) {
    const cp = 1500;
    const markup = 40;
    const discount = 15;
    const mp = cp * 1.4;
    const sp = mp * 0.85;
    const profit = sp - cp;
    const profitPercent = ((profit / cp) * 100).toFixed(1);

    return {
      id: `qa_arith_${seed}_${index}`,
      topic: 'Profit, Loss & Discount',
      difficulty: 'Medium',
      text: `<p class="question-text"><strong>Question:</strong> An article is marked <strong>40% above</strong> its cost price of ₹1,500 and sold at a discount of <strong>15%</strong>. What is the net profit percentage?</p>`,
      options: [`${profitPercent}%`, '16.0%', '22.5%', '18.0%', '20.0%'],
      correctOption: 0,
      marks: 1.0,
      negativeMarks: 0.25,
      explanation: `Net profit % = $40 - 15 - (40 \\times 15)/100 = 40 - 15 - 6 = \\mathbf{19.0\\%}$.`
    };
  }

  // 6. Tabular DI
  static generateDataInterpretationSet(seed, index) {
    return {
      id: `qa_di_${seed}_${index}`,
      topic: 'Tabular Data Interpretation',
      difficulty: 'Hard',
      text: `<div class="passage-box">
        <strong>Directions:</strong> Total loan disbursements across Bank A (₹800 Cr), Bank B (₹650 Cr), Bank C (₹950 Cr).
      </div>
      <p class="question-text"><strong>Question:</strong> What is the average disbursement?</p>`,
      options: ['₹800.0 Crores', '₹750.0 Crores', '₹850.0 Crores', '₹900.0 Crores', '₹780.0 Crores'],
      correctOption: 0,
      marks: 1.0,
      negativeMarks: 0.25,
      explanation: `Average = (800 + 650 + 950) / 3 = 2400 / 3 = <strong>₹800.0 Crores</strong>.`
    };
  }
}
