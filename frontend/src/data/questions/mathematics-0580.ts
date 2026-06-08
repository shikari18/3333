import { TopicQuestion } from "@/types/content";

export const mathsQuestions: TopicQuestion[] = [
  // ─── obj-1-1: Integers, Fractions, Decimals, Percentages ─────────────────
  {
    id: "maths-1-1-e", subjectId: "mathematics-0580", objectiveId: "obj-1-1",
    difficulty: "Easy", marks: 2,
    question: "Express 0.35 as (a) a fraction in its simplest form and (b) a percentage.",
    workedSolution: {
      steps: ["(a) 0.35 = 35/100 = 7/20", "(b) 0.35 × 100 = 35%"],
      markSchemePoints: ["(a) 7/20 (1)", "(b) 35% (1)"],
      examTip: "Decimal → fraction: write over 100 (or 1000 etc.), then simplify. Decimal → percentage: multiply by 100.",
    },
  },
  {
    id: "maths-1-1-m", subjectId: "mathematics-0580", objectiveId: "obj-1-1",
    difficulty: "Medium", marks: 3,
    question: "A jacket costs $120 reduced by 15% in a sale. Find the sale price. If the shopkeeper paid $80, calculate the percentage profit on the sale price.",
    workedSolution: {
      steps: ["Sale price = 120 × 0.85 = $102", "Profit = 102 − 80 = $22", "% profit = (22/80) × 100 = 27.5%"],
      markSchemePoints: ["Sale price = $102 (1)", "Profit = $22 (1)", "% profit = 27.5% (1)"],
      examTip: "Percentage profit is ALWAYS calculated on the cost price, not selling price. This catches out many students.",
    },
  },
  {
    id: "maths-1-1-h", subjectId: "mathematics-0580", objectiveId: "obj-1-1",
    difficulty: "Hard", marks: 4,
    question: "After a 20% increase, a phone costs $540. Find the original price. Then find the price after a further 10% decrease from $540.",
    workedSolution: {
      steps: ["Original = 540 ÷ 1.20 = $450", "10% decrease: 540 × 0.90 = $486"],
      markSchemePoints: ["Method: divide by 1.20 (1)", "$450 (1)", "540 × 0.90 (1)", "$486 (1)"],
      examTip: "Reverse percentage: DIVIDE by the multiplier. After 20% increase, divide by 1.20 — do NOT subtract 20% from $540 (gives wrong answer $432).",
    },
  },

  // ─── obj-1-2: Indices and Standard Form ──────────────────────────────────
  {
    id: "maths-1-2-e", subjectId: "mathematics-0580", objectiveId: "obj-1-2",
    difficulty: "Easy", marks: 2,
    question: "Write in standard form: (a) 47 500 and (b) 0.000362.",
    workedSolution: {
      steps: ["(a) 4.75 × 10⁴", "(b) 3.62 × 10⁻⁴"],
      markSchemePoints: ["(a) 4.75 × 10⁴ (1)", "(b) 3.62 × 10⁻⁴ (1)"],
      examTip: "Standard form: a × 10ⁿ where 1 ≤ a < 10. Large numbers → positive n. Small numbers (<1) → negative n.",
    },
  },
  {
    id: "maths-1-2-m", subjectId: "mathematics-0580", objectiveId: "obj-1-2",
    difficulty: "Medium", marks: 3,
    question: "Calculate (2.4 × 10⁵) × (3.0 × 10⁻²) and (6.0 × 10⁸) ÷ (1.5 × 10³). Give both answers in standard form.",
    workedSolution: {
      steps: ["(2.4 × 3.0) × 10^(5−2) = 7.2 × 10³", "(6.0 ÷ 1.5) × 10^(8−3) = 4.0 × 10⁵"],
      markSchemePoints: ["7.2 × 10³ (1)", "4.0 × 10⁵ (1)", "Both in correct standard form (1)"],
      examTip: "Multiply: multiply numbers, ADD powers. Divide: divide numbers, SUBTRACT powers. Then check 1 ≤ coefficient < 10.",
    },
  },
  {
    id: "maths-1-2-h", subjectId: "mathematics-0580", objectiveId: "obj-1-2",
    difficulty: "Hard", marks: 4,
    question: "Simplify: (a) (3x²y³)² ÷ (9x³y) and (b) 16^(3/4).",
    workedSolution: {
      steps: ["(a) (9x⁴y⁶) ÷ (9x³y) = xy⁵", "(b) ⁴√16 = 2; 2³ = 8"],
      markSchemePoints: ["(a) Squaring: 9x⁴y⁶ (1)", "(a) xy⁵ (1)", "(b) ⁴√16 = 2 (1)", "(b) 8 (1)"],
      examTip: "Fractional index: a^(m/n) = (ⁿ√a)^m. Do root FIRST (simpler numbers), then power.",
    },
  },

  // ─── obj-2-1: Algebraic Manipulation ─────────────────────────────────────
  {
    id: "maths-2-1-e", subjectId: "mathematics-0580", objectiveId: "obj-2-1",
    difficulty: "Easy", marks: 2,
    question: "Expand and simplify: (a) 3(2x − 5) + 2(x + 4) and (b) (x + 3)(x − 2).",
    workedSolution: {
      steps: ["(a) 6x − 15 + 2x + 8 = 8x − 7", "(b) x² − 2x + 3x − 6 = x² + x − 6"],
      markSchemePoints: ["(a) 8x − 7 (1)", "(b) x² + x − 6 (1)"],
      examTip: "For expanding brackets: multiply every term inside by the term outside. For (x+a)(x+b): use FOIL — First, Outer, Inner, Last.",
    },
  },
  {
    id: "maths-2-1-m", subjectId: "mathematics-0580", objectiveId: "obj-2-1",
    difficulty: "Medium", marks: 4,
    question: "Factorise fully: (a) 6x² − 9xy and (b) x² − x − 12.",
    workedSolution: {
      steps: ["(a) HCF = 3x: 3x(2x − 3y)", "(b) Find two numbers multiplying to −12 and adding to −1: −4 and +3. So (x − 4)(x + 3)."],
      markSchemePoints: ["(a) 3x(2x − 3y) (1)", "(b) Correct pair found: −4 and +3 (1)", "(b) (x − 4)(x + 3) (1)", "Check by expanding (1 implicit)"],
      examTip: "For quadratic factorisation: find two numbers that multiply to the constant term and add to the x coefficient. Then write (x + p)(x + q).",
    },
  },
  {
    id: "maths-2-1-h", subjectId: "mathematics-0580", objectiveId: "obj-2-1",
    difficulty: "Hard", marks: 5,
    question: "Simplify the algebraic fraction: (x² − 9) / (x² + x − 6).",
    workedSolution: {
      steps: [
        "Numerator: x² − 9 = (x − 3)(x + 3) [difference of two squares]",
        "Denominator: x² + x − 6 = (x + 3)(x − 2) [find factors: +3 and −2]",
        "Fraction = (x − 3)(x + 3) / [(x + 3)(x − 2)]",
        "Cancel (x + 3): = (x − 3) / (x − 2)",
      ],
      markSchemePoints: [
        "Numerator factorised: (x−3)(x+3) (1)",
        "Denominator factorised: (x+3)(x−2) (1)",
        "Cancel (x+3) (1)",
        "Answer: (x−3)/(x−2) (1)",
        "Valid for x ≠ −3 (1)",
      ],
      examTip: "Always factorise both top and bottom fully before cancelling. You can only cancel FACTORS, not terms. Difference of two squares: a²−b² = (a+b)(a−b).",
    },
  },

  // ─── obj-2-2: Equations and Inequalities ──────────────────────────────────
  {
    id: "maths-2-2-e", subjectId: "mathematics-0580", objectiveId: "obj-2-2",
    difficulty: "Easy", marks: 2,
    question: "Solve: (a) 3x + 7 = 19 and (b) 2(x − 3) = 8.",
    workedSolution: {
      steps: ["(a) 3x = 12 → x = 4", "(b) x − 3 = 4 → x = 7"],
      markSchemePoints: ["(a) x = 4 (1)", "(b) x = 7 (1)"],
      examTip: "Show all steps. In an exam, even if the answer is wrong you can get method marks if your working is clear.",
    },
  },
  {
    id: "maths-2-2-m", subjectId: "mathematics-0580", objectiveId: "obj-2-2",
    difficulty: "Medium", marks: 4,
    question: "Solve simultaneously: 3x + 2y = 16 and x − y = 2.",
    workedSolution: {
      steps: [
        "From x − y = 2: x = y + 2.",
        "Substitute into 3x + 2y = 16: 3(y + 2) + 2y = 16 → 3y + 6 + 2y = 16 → 5y = 10 → y = 2.",
        "x = y + 2 = 4.",
        "Check: 3(4) + 2(2) = 12 + 4 = 16 ✓; 4 − 2 = 2 ✓",
      ],
      markSchemePoints: ["Correct substitution or elimination method (1)", "y = 2 (1)", "x = 4 (1)", "Check substituted back (1)"],
      examTip: "Always substitute your answers back in to check. Elimination: multiply equations to make coefficients equal, then add or subtract.",
    },
  },
  {
    id: "maths-2-2-h", subjectId: "mathematics-0580", objectiveId: "obj-2-2",
    difficulty: "Hard", marks: 5,
    question: "Solve the quadratic equation 2x² − 5x − 3 = 0 using the quadratic formula. Give answers correct to 2 decimal places.",
    workedSolution: {
      steps: [
        "a = 2, b = −5, c = −3.",
        "x = [5 ± √(25 + 24)] / 4 = [5 ± √49] / 4 = [5 ± 7] / 4",
        "x = (5 + 7)/4 = 3 or x = (5 − 7)/4 = −0.5",
        "x = 3.00 or x = −0.50",
      ],
      markSchemePoints: [
        "Correct substitution into formula (1)",
        "Discriminant: √(25+24) = √49 = 7 (1)",
        "x = 12/4 = 3 (1)",
        "x = −2/4 = −0.5 (1)",
        "Both answers to 2 d.p. (1)",
      ],
      examTip: "Write the formula first, then substitute. Check discriminant ≥ 0 (if negative, no real solutions). Factorise first if possible — formula as backup.",
    },
  },

  // ─── obj-2-3: Linear Programming ─────────────────────────────────────────
  {
    id: "maths-2-3-e", subjectId: "mathematics-0580", objectiveId: "obj-2-3",
    difficulty: "Easy", marks: 2,
    question: "Write the inequalities that describe the region where x ≥ 2, y ≥ 1, and x + y ≤ 8. State which inequality defines the upper bound.",
    workedSolution: {
      steps: ["The three constraints are: x ≥ 2, y ≥ 1, and x + y ≤ 8.", "x + y ≤ 8 defines the upper bound — it limits how large x and y can be together."],
      markSchemePoints: ["Three inequalities correctly identified (1)", "x + y ≤ 8 as upper bound with reason (1)"],
      examTip: "In linear programming, the feasible region satisfies ALL constraints simultaneously. Test a point (e.g. x=3, y=3) to check which side of each line to shade.",
    },
  },
  {
    id: "maths-2-3-m", subjectId: "mathematics-0580", objectiveId: "obj-2-3",
    difficulty: "Medium", marks: 4,
    question: "On a graph, the feasible region is bounded by x ≥ 0, y ≥ 0, x + 2y ≤ 10, and 2x + y ≤ 8. Find all vertices of the feasible region.",
    workedSolution: {
      steps: [
        "Vertices are at intersections of boundary lines.",
        "Origin (0, 0): satisfies all constraints.",
        "x-axis with 2x + y = 8: y = 0 → x = 4. Vertex (4, 0).",
        "y-axis with x + 2y = 10: x = 0 → y = 5. Vertex (0, 5).",
        "Intersection of x + 2y = 10 and 2x + y = 8: multiply first by 2: 2x + 4y = 20. Subtract: 3y = 12 → y = 4, x = 2. Vertex (2, 4).",
      ],
      markSchemePoints: ["(0,0) (1)", "(4,0) (1)", "(0,5) (1)", "(2,4) correctly found (1)"],
      examTip: "The optimal solution to a linear programming problem always occurs at a vertex of the feasible region. Find all vertices, then evaluate the objective function at each.",
    },
  },
  {
    id: "maths-2-3-h", subjectId: "mathematics-0580", objectiveId: "obj-2-3",
    difficulty: "Hard", marks: 5,
    question: "A factory makes two products A and B. Each unit of A requires 2 hours of machine time and 1 hour of labour; each unit of B requires 1 hour of machine time and 3 hours of labour. Available: 12 machine hours and 15 labour hours. Profit: $5 per A, $4 per B. Formulate as a linear programming problem and find the maximum profit.",
    workedSolution: {
      steps: [
        "Let x = units of A, y = units of B. Constraints: 2x + y ≤ 12 (machine), x + 3y ≤ 15 (labour), x ≥ 0, y ≥ 0.",
        "Objective: maximise P = 5x + 4y.",
        "Find vertices: (0,0); (6,0) from 2x+y=12,y=0; (0,5) from x+3y=15,x=0; intersection: 2x+y=12 and x+3y=15 → 6x+3y=36, subtract: 5x=21 → x=4.2, y=3.6.",
        "Evaluate P at vertices: (0,0)→0; (6,0)→30; (0,5)→20; (4.2,3.6)→5(4.2)+4(3.6)=21+14.4=35.4.",
        "Maximum profit = $35.40 at x=4.2, y=3.6. (If integers required: check (4,3): P=20+12=32; (5,2): 10+8=18... (4,4): 2(4)+4=12✓, 4+12=16>15✗. So integer solution at (4,3): P=$32.)",
      ],
      markSchemePoints: [
        "Constraints correctly formulated (1)",
        "Objective function stated (1)",
        "Vertices found correctly (1)",
        "P evaluated at each vertex (1)",
        "Maximum identified with correct value (1)",
      ],
      examTip: "Always state constraints, objective function, and check ALL vertices. If integers required, test nearby integer points — the LP vertex may not be integer-valued.",
    },
  },

  // ─── obj-3-1: Cartesian Coordinates ──────────────────────────────────────
  {
    id: "maths-3-1-e", subjectId: "mathematics-0580", objectiveId: "obj-3-1",
    difficulty: "Easy", marks: 3,
    question: "Points A(2, 5) and B(8, 1). Find (a) the midpoint of AB and (b) the length of AB.",
    workedSolution: {
      steps: ["(a) Midpoint = ((2+8)/2, (5+1)/2) = (5, 3)", "(b) AB = √[(8−2)² + (1−5)²] = √[36+16] = √52 = 2√13 ≈ 7.21"],
      markSchemePoints: ["(a) (5, 3) (1)", "(b) √52 or 2√13 or 7.21 (1)", "Method shown (1)"],
      examTip: "Midpoint: average the x's, average the y's. Distance: Pythagoras — square the differences, add, square root.",
    },
  },
  {
    id: "maths-3-1-m", subjectId: "mathematics-0580", objectiveId: "obj-3-1",
    difficulty: "Medium", marks: 4,
    question: "A(1, 3), B(5, 7), C(9, 3) form a triangle. (a) Find the gradient of AB. (b) Show that AB is perpendicular to BC by finding the gradient of BC.",
    workedSolution: {
      steps: [
        "(a) Gradient AB = (7−3)/(5−1) = 4/4 = 1",
        "(b) Gradient BC = (3−7)/(9−5) = −4/4 = −1",
        "Product of gradients = 1 × (−1) = −1. Since the product = −1, AB ⊥ BC. ✓",
      ],
      markSchemePoints: ["Gradient AB = 1 (1)", "Gradient BC = −1 (1)", "Product = −1 stated (1)", "Conclusion: AB ⊥ BC (1)"],
      examTip: "Perpendicular lines: product of gradients = −1. So if one gradient is m, the perpendicular is −1/m (negative reciprocal).",
    },
  },
  {
    id: "maths-3-1-h", subjectId: "mathematics-0580", objectiveId: "obj-3-1",
    difficulty: "Hard", marks: 5,
    question: "The point P divides the line segment AB in the ratio 2:3, where A = (1, 2) and B = (11, 12). Find the coordinates of P. Then find the equation of the line perpendicular to AB passing through P.",
    workedSolution: {
      steps: [
        "P divides AB in ratio 2:3: P = A + (2/5)(B−A) = (1 + 2/5×10, 2 + 2/5×10) = (1+4, 2+4) = (5, 6).",
        "Gradient of AB = (12−2)/(11−1) = 10/10 = 1.",
        "Perpendicular gradient = −1.",
        "Line through P(5,6) with gradient −1: y − 6 = −1(x − 5) → y = −x + 11.",
      ],
      markSchemePoints: [
        "P = (5, 6) (1)",
        "Gradient AB = 1 (1)",
        "Perpendicular gradient = −1 (1)",
        "Equation: y = −x + 11 (1)",
        "Method for section formula shown (1)",
      ],
      examTip: "Section formula for ratio m:n: P = (mx₂ + nx₁)/(m+n), (my₂ + ny₁)/(m+n). Or use vectors: P = A + [m/(m+n)] × (B−A).",
    },
  },

  // ─── obj-3-2: Straight Line Graphs ───────────────────────────────────────
  {
    id: "maths-3-2-e", subjectId: "mathematics-0580", objectiveId: "obj-3-2",
    difficulty: "Easy", marks: 2,
    question: "For the line y = 3x − 4, state (a) the gradient and (b) the y-intercept.",
    workedSolution: {
      steps: ["y = mx + c form: m = 3 (gradient), c = −4 (y-intercept)"],
      markSchemePoints: ["Gradient = 3 (1)", "y-intercept = −4 (1)"],
      examTip: "y = mx + c: m is always the coefficient of x; c is the constant. If the line is ax + by = c, rearrange to y = mx + c first.",
    },
  },
  {
    id: "maths-3-2-m", subjectId: "mathematics-0580", objectiveId: "obj-3-2",
    difficulty: "Medium", marks: 4,
    question: "Find the equation of the straight line passing through (2, 5) and (6, 13). Write your answer in the form y = mx + c.",
    workedSolution: {
      steps: [
        "Gradient m = (13−5)/(6−2) = 8/4 = 2.",
        "Using y − y₁ = m(x − x₁): y − 5 = 2(x − 2) → y = 2x + 1.",
      ],
      markSchemePoints: ["m = 2 (1)", "Correct method for c (1)", "y = 2x + 1 (1)", "Fully simplified (1)"],
      examTip: "Method: (1) find gradient using (y₂−y₁)/(x₂−x₁), (2) substitute a point into y = mx + c to find c. Always verify with the second point.",
    },
  },
  {
    id: "maths-3-2-h", subjectId: "mathematics-0580", objectiveId: "obj-3-2",
    difficulty: "Hard", marks: 5,
    question: "Line L₁ has equation 2y = 3x − 4. Line L₂ passes through (0, 5) and is parallel to L₁. Line L₃ passes through (2, 1) and is perpendicular to L₁. Find equations of L₂ and L₃.",
    workedSolution: {
      steps: [
        "L₁: y = 3x/2 − 2 → gradient = 3/2.",
        "L₂ parallel to L₁: same gradient 3/2; passes through (0, 5): y = 3x/2 + 5.",
        "L₃ perpendicular to L₁: gradient = −1/(3/2) = −2/3; passes through (2, 1): y − 1 = −2/3(x − 2) → y = −2x/3 + 4/3 + 1 = −2x/3 + 7/3.",
      ],
      markSchemePoints: [
        "L₁ gradient = 3/2 (1)",
        "L₂: y = 3x/2 + 5 (1)",
        "Perpendicular gradient = −2/3 (1)",
        "L₃ equation: y = −2x/3 + 7/3 (1)",
        "Both equations in correct form (1)",
      ],
      examTip: "Parallel: same gradient. Perpendicular: negative reciprocal gradient. Always rearrange to y = mx + c to find gradient before anything else.",
    },
  },

  // ─── obj-4-1: Geometrical Terms and Shapes ────────────────────────────────
  {
    id: "maths-4-1-e", subjectId: "mathematics-0580", objectiveId: "obj-4-1",
    difficulty: "Easy", marks: 2,
    question: "State the sum of interior angles of (a) a triangle and (b) a hexagon.",
    workedSolution: {
      steps: ["(a) Triangle: 180°", "(b) Hexagon: (6−2) × 180° = 4 × 180° = 720°"],
      markSchemePoints: ["(a) 180° (1)", "(b) 720° (1)"],
      examTip: "Formula: sum of interior angles of an n-sided polygon = (n−2) × 180°. For a hexagon n=6: (6−2)×180 = 720°.",
    },
  },
  {
    id: "maths-4-1-m", subjectId: "mathematics-0580", objectiveId: "obj-4-1",
    difficulty: "Medium", marks: 4,
    question: "Calculate the value of x in a regular 9-sided polygon (nonagon). Find: (a) each interior angle and (b) each exterior angle.",
    workedSolution: {
      steps: [
        "(a) Sum of interior angles = (9−2) × 180° = 7 × 180° = 1260°. Each interior angle = 1260°/9 = 140°.",
        "(b) Exterior angle = 180° − 140° = 40°. (Or: 360°/9 = 40°.)",
      ],
      markSchemePoints: ["Sum = 1260° (1)", "(a) Interior angle = 140° (1)", "(b) Exterior angle = 40° (1)", "Method shown (1)"],
      examTip: "Exterior angles of any polygon always sum to 360°. Each exterior angle of a regular n-gon = 360°/n.",
    },
  },
  {
    id: "maths-4-1-h", subjectId: "mathematics-0580", objectiveId: "obj-4-1",
    difficulty: "Hard", marks: 5,
    question: "Prove that the angle in a semicircle is always 90°. Use the theorem that the angle at the centre is twice the angle at the circumference.",
    workedSolution: {
      steps: [
        "Let O be the centre of a circle and AB be a diameter. Let C be any point on the circumference.",
        "The angle subtended by AB at the centre = 180° (AB is a straight line through O — a semicircle).",
        "By the theorem: angle at centre = 2 × angle at circumference.",
        "Therefore: angle ACB = 180°/2 = 90°.",
        "Since C is any point on the semicircle, the angle in a semicircle is always 90°. QED.",
      ],
      markSchemePoints: [
        "AB is a diameter → angle at centre = 180° (1)",
        "Angle at centre = 2 × angle at circumference stated (1)",
        "Angle ACB = 180°/2 = 90° (1)",
        "Conclusion stated for any point C (1)",
        "Proof complete and logical (1)",
      ],
      examTip: "For any circle theorem proof: start with what you know (the theorem being applied), apply it, and state the conclusion clearly. Always reference the theorem by name.",
    },
  },

  // ─── obj-4-2: Angle Properties ───────────────────────────────────────────
  {
    id: "maths-4-2-e", subjectId: "mathematics-0580", objectiveId: "obj-4-2",
    difficulty: "Easy", marks: 3,
    question: "Two parallel lines are cut by a transversal. State the relationship between: (a) alternate angles and (b) co-interior angles.",
    workedSolution: {
      steps: ["(a) Alternate angles are equal ('Z angles').", "(b) Co-interior angles (same-side interior angles) are supplementary — they add up to 180° ('C angles')."],
      markSchemePoints: ["(a) Alternate angles equal (1)", "(b) Co-interior angles add to 180° (1)", "Reason: parallel lines (1)"],
      examTip: "Also remember: corresponding angles are equal ('F angles'). For all three, you MUST state the lines are parallel as the reason.",
    },
  },
  {
    id: "maths-4-2-m", subjectId: "mathematics-0580", objectiveId: "obj-4-2",
    difficulty: "Medium", marks: 4,
    question: "In a circle, an inscribed angle subtends an arc of 80°. Find: (a) the central angle subtending the same arc, (b) the inscribed angle subtending the same arc from the opposite side.",
    workedSolution: {
      steps: [
        "(a) Central angle = 2 × inscribed angle = 2 × 80° = 160°.",
        "(b) From the opposite side, the arc seen is 360° − 80° = 280°... Wait — the arc itself is 80°. The inscribed angle subtending the major arc (the reflex one): central angle for major arc = 360° − 160° = 200°, inscribed angle = 200°/2 = 100°.",
        "Alternatively: angles in the same segment are equal = 80°. Angles in opposite segments: 80° + opp = 180° → opp = 100°.",
      ],
      markSchemePoints: ["(a) 160° (1)", "Method: central = 2 × inscribed (1)", "(b) Opposite segment angle = 100° (1)", "Cyclic quadrilateral / opposite angles = 180° method (1)"],
      examTip: "Circle theorem summary: angle at centre = 2 × angle at circumference (same arc); angles in same segment equal; opposite angles in cyclic quadrilateral = 180°.",
    },
  },
  {
    id: "maths-4-2-h", subjectId: "mathematics-0580", objectiveId: "obj-4-2",
    difficulty: "Hard", marks: 6,
    question: "ABCD is a cyclic quadrilateral. Angle A = (3x + 10)° and angle C = (x + 30)°. Angle B = (2y − 5)° and angle D = (y + 20)°. Find x, y, and all four angles.",
    workedSolution: {
      steps: [
        "Opposite angles in a cyclic quadrilateral sum to 180°.",
        "A + C = 180°: (3x+10) + (x+30) = 180 → 4x + 40 = 180 → 4x = 140 → x = 35.",
        "A = 3(35)+10 = 115°; C = 35+30 = 65°. Check: 115+65=180 ✓.",
        "B + D = 180°: (2y−5) + (y+20) = 180 → 3y + 15 = 180 → 3y = 165 → y = 55.",
        "B = 2(55)−5 = 105°; D = 55+20 = 75°. Check: 105+75=180 ✓.",
      ],
      markSchemePoints: [
        "Opposite angles = 180° used (1)",
        "x = 35 (1)", "A = 115°, C = 65° (1)",
        "y = 55 (1)", "B = 105°, D = 75° (1)",
        "Both checks verified (1)",
      ],
      examTip: "Cyclic quadrilateral: opposite angles are supplementary (sum to 180°). Write equations for both pairs and solve simultaneously.",
    },
  },

  // ─── obj-5-1: 2D Shapes ───────────────────────────────────────────────────
  {
    id: "maths-5-1-e", subjectId: "mathematics-0580", objectiveId: "obj-5-1",
    difficulty: "Easy", marks: 2,
    question: "Calculate the area and perimeter of a circle with radius 7 cm. (Use π = 3.142.)",
    workedSolution: {
      steps: ["Area = πr² = 3.142 × 49 = 153.96 ≈ 154.0 cm²", "Circumference = 2πr = 2 × 3.142 × 7 = 43.99 ≈ 44.0 cm"],
      markSchemePoints: ["Area = 154 cm² (accept 153.9–154.1) (1)", "Circumference = 44.0 cm (1)"],
      examTip: "Area = πr². Circumference = 2πr = πd. Use the value of π given in the question — either 3.142 or the π button on your calculator.",
    },
  },
  {
    id: "maths-5-1-m", subjectId: "mathematics-0580", objectiveId: "obj-5-1",
    difficulty: "Medium", marks: 4,
    question: "A sector of a circle has radius 12 cm and angle 135°. Calculate (a) its arc length and (b) its area. (Leave answers in terms of π.)",
    workedSolution: {
      steps: [
        "(a) Arc length = (135/360) × 2πr = (3/8) × 24π = 9π cm",
        "(b) Area = (135/360) × πr² = (3/8) × 144π = 54π cm²",
      ],
      markSchemePoints: ["(a) Method: (θ/360) × 2πr (1)", "(a) 9π cm (1)", "(b) Method: (θ/360) × πr² (1)", "(b) 54π cm² (1)"],
      examTip: "Sector formulas: arc = (θ/360) × 2πr; area = (θ/360) × πr². Simplify the fraction first — 135/360 = 3/8.",
    },
  },
  {
    id: "maths-5-1-h", subjectId: "mathematics-0580", objectiveId: "obj-5-1",
    difficulty: "Hard", marks: 5,
    question: "A running track consists of two semicircles of radius 36 m and two straight sections of 100 m each. Calculate the total area enclosed by the track.",
    workedSolution: {
      steps: [
        "Two semicircles = one full circle of radius 36 m. Area of circle = π × 36² = 1296π m².",
        "Two straight sections + width form a rectangle: length 100 m × width 72 m (= 2 × 36 m diameter). Area = 100 × 72 = 7200 m².",
        "Total area = 1296π + 7200 ≈ 4071.5 + 7200 = 11 271.5 m².",
      ],
      markSchemePoints: [
        "Two semicircles = full circle (1)",
        "Circle area = 1296π m² (1)",
        "Rectangle = 100 × 72 = 7200 m² (1)",
        "Total = 1296π + 7200 (1)",
        "≈ 11 271 m² (1)",
      ],
      examTip: "Compound area: break into simple shapes. Two semicircles = one circle. The rectangle width = diameter of the semicircles = 2r.",
    },
  },

  // ─── obj-5-2: 3D Shapes ───────────────────────────────────────────────────
  {
    id: "maths-5-2-e", subjectId: "mathematics-0580", objectiveId: "obj-5-2",
    difficulty: "Easy", marks: 2,
    question: "Calculate the volume of a cylinder with radius 5 cm and height 12 cm. (Leave in terms of π.)",
    workedSolution: {
      steps: ["V = πr²h = π × 25 × 12 = 300π cm³"],
      markSchemePoints: ["V = πr²h used (1)", "300π cm³ (1)"],
      examTip: "Volume of cylinder = πr²h. Volume of cone = ⅓πr²h. Volume of sphere = 4/3πr³. Learn all three.",
    },
  },
  {
    id: "maths-5-2-m", subjectId: "mathematics-0580", objectiveId: "obj-5-2",
    difficulty: "Medium", marks: 4,
    question: "A solid metal cylinder (radius 4 cm, height 9 cm) is melted and recast as a sphere. Calculate the radius of the sphere.",
    workedSolution: {
      steps: [
        "Volume of cylinder = πr²h = π × 16 × 9 = 144π cm³.",
        "Volume of sphere = 4/3πR³ = 144π → R³ = 144 × 3/4 = 108.",
        "R = ∛108 = ∛(4 × 27) = 3∛4 ≈ 4.76 cm.",
      ],
      markSchemePoints: [
        "Volume cylinder = 144π (1)",
        "4/3πR³ = 144π → R³ = 108 (1)",
        "R = ∛108 (1)",
        "R ≈ 4.76 cm (1)",
      ],
      examTip: "Melting/recasting: volumes are equal. Set V_cylinder = V_sphere and solve for the unknown dimension.",
    },
  },
  {
    id: "maths-5-2-h", subjectId: "mathematics-0580", objectiveId: "obj-5-2",
    difficulty: "Hard", marks: 5,
    question: "A frustum is made by removing a small cone (radius 3 cm, height 4 cm) from a large cone (radius 9 cm, height 12 cm). Calculate the volume of the frustum.",
    workedSolution: {
      steps: [
        "Volume of large cone = ⅓πR²H = ⅓π × 81 × 12 = 324π cm³.",
        "Volume of small cone = ⅓πr²h = ⅓π × 9 × 4 = 12π cm³.",
        "Volume of frustum = 324π − 12π = 312π ≈ 980.2 cm³.",
      ],
      markSchemePoints: [
        "Large cone volume = 324π (1)",
        "Small cone volume = 12π (1)",
        "Subtraction method (1)",
        "312π (1)",
        "≈ 980 cm³ (1)",
      ],
      examTip: "Frustum = large cone − small cone. Use the formula for each separately and subtract. Check the small cone dimensions are consistent with the large (similar triangles).",
    },
  },

  // ─── obj-6-1: Trigonometric Ratios ───────────────────────────────────────
  {
    id: "maths-6-1-e", subjectId: "mathematics-0580", objectiveId: "obj-6-1",
    difficulty: "Easy", marks: 2,
    question: "In a right-angled triangle, the opposite side = 5 cm and hypotenuse = 13 cm. Find the angle θ.",
    workedSolution: {
      steps: ["sin θ = opposite/hypotenuse = 5/13", "θ = sin⁻¹(5/13) = 22.6°"],
      markSchemePoints: ["sin θ = 5/13 (1)", "θ = 22.6° (1)"],
      examTip: "SOH CAH TOA: Sin = Opp/Hyp, Cos = Adj/Hyp, Tan = Opp/Adj. Identify the sides relative to the angle you're working with.",
    },
  },
  {
    id: "maths-6-1-m", subjectId: "mathematics-0580", objectiveId: "obj-6-1",
    difficulty: "Medium", marks: 4,
    question: "A 6 m ladder leans against a wall. The base of the ladder is 2.5 m from the wall. Calculate (a) the angle the ladder makes with the ground and (b) how high up the wall the ladder reaches.",
    workedSolution: {
      steps: [
        "(a) cos θ = adjacent/hypotenuse = 2.5/6 → θ = cos⁻¹(2.5/6) = 65.4°",
        "(b) Height = √(6² − 2.5²) = √(36 − 6.25) = √29.75 ≈ 5.45 m. Or: sin(65.4°) × 6 ≈ 5.45 m.",
      ],
      markSchemePoints: ["(a) cos θ = 2.5/6 (1)", "(a) θ = 65.4° (1)", "(b) h = √29.75 (1)", "(b) 5.45 m (1)"],
      examTip: "Always draw a diagram first. Label hypotenuse, opposite, adjacent relative to the angle. Then pick the correct trig ratio.",
    },
  },
  {
    id: "maths-6-1-h", subjectId: "mathematics-0580", objectiveId: "obj-6-1",
    difficulty: "Hard", marks: 5,
    question: "From a point 50 m from the base of a building, the angle of elevation to the top is 62°. From the same point, the angle of elevation to a flag on the roof is 65°. Calculate the height of the flag above the roof.",
    workedSolution: {
      steps: [
        "Height of building top: h₁ = 50 × tan 62° = 50 × 1.8807 = 94.04 m.",
        "Height of flag: h₂ = 50 × tan 65° = 50 × 2.1445 = 107.22 m.",
        "Height of flag above roof = h₂ − h₁ = 107.22 − 94.04 = 13.18 m ≈ 13.2 m.",
      ],
      markSchemePoints: [
        "h₁ = 50 tan 62° (1)",
        "h₁ ≈ 94.0 m (1)",
        "h₂ = 50 tan 65° (1)",
        "h₂ ≈ 107.2 m (1)",
        "Flag height = 107.2 − 94.0 = 13.2 m (1)",
      ],
      examTip: "Angle of elevation questions: always draw the right-angled triangle with the horizontal base. tan = opposite/adjacent is usually the right ratio when you have horizontal distance.",
    },
  },

  // ─── obj-6-2: Applications (Sine/Cosine Rule) ────────────────────────────
  {
    id: "maths-6-2-e", subjectId: "mathematics-0580", objectiveId: "obj-6-2",
    difficulty: "Easy", marks: 2,
    question: "State the sine rule and state when it is used.",
    workedSolution: {
      steps: ["Sine rule: a/sin A = b/sin B = c/sin C", "Used in non-right-angled triangles when you know: (i) two angles and one side, or (ii) two sides and an angle opposite one of them."],
      markSchemePoints: ["Sine rule correctly stated (1)", "Correct condition for use (1)"],
      examTip: "Sine rule: use when angle-side pair is known. Cosine rule: use when three sides or two sides + included angle are known.",
    },
  },
  {
    id: "maths-6-2-m", subjectId: "mathematics-0580", objectiveId: "obj-6-2",
    difficulty: "Medium", marks: 4,
    question: "In triangle PQR: PQ = 8 cm, PR = 11 cm, angle P = 47°. Use the cosine rule to find QR.",
    workedSolution: {
      steps: [
        "Cosine rule: a² = b² + c² − 2bc cos A.",
        "QR² = PQ² + PR² − 2(PQ)(PR) cos P = 64 + 121 − 2(8)(11) cos 47°",
        "= 185 − 176 × 0.6820 = 185 − 120.0 = 65.0",
        "QR = √65.0 ≈ 8.06 cm",
      ],
      markSchemePoints: [
        "Cosine rule formula (1)",
        "Correct substitution (1)",
        "QR² ≈ 65.0 (1)",
        "QR ≈ 8.06 cm (1)",
      ],
      examTip: "Cosine rule: use when you know SAS (two sides + included angle) to find the third side, or SSS (three sides) to find an angle.",
    },
  },
  {
    id: "maths-6-2-h", subjectId: "mathematics-0580", objectiveId: "obj-6-2",
    difficulty: "Hard", marks: 5,
    question: "A boat travels 12 km on a bearing of 040° then 9 km on a bearing of 160°. Calculate the direct distance back to the starting point and the bearing of the return journey.",
    workedSolution: {
      steps: [
        "The angle between the two legs at the turning point: bearing 040° then 160° → change of direction = 160° − 040° = 120°. Interior angle at turn = 180° − 120° = 60°. Actually the angle BETWEEN the two travel directions = 160° − 40° = 120°. The angle inside the triangle at the turning point = 180° − 120° = 60°.",
        "Using cosine rule: d² = 12² + 9² − 2(12)(9)cos(60°) ... wait, the angle at the vertex is 180° − (160°−40°) for the triangle. Bearing change = 120° → angle between the two legs = 180° − 120° = 60°.",
        "Actually: interior angle between the two paths = 180° − (160° − 40°) doesn't simplify directly. Let's use the fact: angle at B = 180° − (160° − 40°) = 180° − 120° = 60°.",
        "d² = 12² + 9² − 2(12)(9)cos(120°) = 144 + 81 − 216(−0.5) = 225 + 108 = 333. d = √333 ≈ 18.2 km.",
        "For bearing: use sine rule to find angle at start, then convert to bearing.",
      ],
      markSchemePoints: [
        "Angle at B = 120° (between legs, exterior) or 60° identified correctly with correct formula (1)",
        "d² = 144 + 81 − 216 cos(120°) (or equivalent) (1)",
        "d² = 333 (1)",
        "d ≈ 18.2 km (1)",
        "Bearing method (sine rule / geometry) attempted (1)",
      ],
      examTip: "Bearings + sine/cosine rule: draw the diagram carefully. The angle between the two journey legs requires working from the bearing change. d² = a² + b² − 2ab cosC where C is the angle between the two sides AT the turning point.",
    },
  },
];
