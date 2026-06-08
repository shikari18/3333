import { TopicNote } from "@/types/content";

export const mathsTopicNotes: TopicNote[] = [
  {
    id: "maths-note-1-1", subjectId: "mathematics-0580", objectiveId: "obj-1-1",
    title: "Integers, Fractions, Decimals and Percentages",
    keyPoints: [
      "Multiplier method: increase by 15% → × 1.15; decrease by 20% → × 0.80",
      "Reverse percentage: divide by the multiplier (NOT subtract the percentage)",
      "Percentage profit/loss always calculated on COST PRICE",
      "Compound interest: A = P(1 + r/100)ⁿ",
    ],
    content: [
      {
        kind: "table", heading: "Key fraction–decimal–percentage equivalents",
        headers: ["Fraction", "Decimal", "Percentage"],
        rows: [
          ["1/2", "0.5", "50%"], ["1/4", "0.25", "25%"], ["3/4", "0.75", "75%"],
          ["1/5", "0.2", "20%"], ["1/8", "0.125", "12.5%"], ["1/3", "0.333…", "33.3%"],
          ["2/3", "0.667…", "66.7%"], ["1/10", "0.1", "10%"],
        ],
      },
      {
        kind: "bullets", heading: "Percentage calculations — multiplier method",
        bullets: [
          "Increase by 15%: × 1.15 | Decrease by 20%: × 0.80",
          "Reverse (find original after 30% increase): ÷ 1.30",
          "Reverse (find original after 25% decrease): ÷ 0.75",
          "Percentage change = (new − old) / old × 100",
          "Percentage profit = profit / cost price × 100",
          "Compound interest: A = P(1 + r/100)ⁿ (P = principal, r = rate %, n = years)",
        ],
      },
      { kind: "paragraph", heading: "Reverse percentages — the key trap", text: "If a price AFTER a 20% increase is $360 and you want the original: divide by 1.20 → $300. Do NOT subtract 20% of $360 ($72) from $360 = $288 — this is wrong because 20% of $360 ≠ 20% of the original $300. The error is computing the percentage of the wrong base value." },
    ],
    examTips: [
      "Compound interest vs simple interest: compound applies interest on accumulated total each year; simple always applies to the original principal.",
      "If asked for 'best buy': calculate cost per unit (e.g. pence per gram) for each option and compare.",
    ],
    commonMistakes: [
      "Reverse percentage: subtracting the percentage instead of dividing by the multiplier.",
      "Percentage profit calculated on selling price instead of cost price.",
      "Rounding mid-calculation — keep full calculator display until the final step.",
    ],
  },
  {
    id: "maths-note-1-2", subjectId: "mathematics-0580", objectiveId: "obj-1-2",
    title: "Indices and Standard Form",
    keyPoints: [
      "Index laws: aᵐ × aⁿ = aᵐ⁺ⁿ; aᵐ ÷ aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ",
      "a⁰ = 1 (any base ≠ 0); a⁻ⁿ = 1/aⁿ",
      "Standard form: a × 10ⁿ where 1 ≤ a < 10",
      "Fractional index: a^(m/n) = (ⁿ√a)^m — do root first, then power",
    ],
    content: [
      {
        kind: "table", heading: "Index laws summary with examples",
        headers: ["Rule", "Example", "Result"],
        rows: [
          ["aᵐ × aⁿ = aᵐ⁺ⁿ", "x³ × x⁵", "x⁸"],
          ["aᵐ ÷ aⁿ = aᵐ⁻ⁿ", "y⁷ ÷ y²", "y⁵"],
          ["(aᵐ)ⁿ = aᵐⁿ", "(z²)⁴", "z⁸"],
          ["a⁰ = 1", "7⁰, x⁰", "1"],
          ["a⁻ⁿ = 1/aⁿ", "3⁻², x⁻¹", "1/9; 1/x"],
          ["a^(1/n) = ⁿ√a", "27^(1/3), 16^(1/2)", "3; 4"],
          ["a^(m/n) = (ⁿ√a)^m", "8^(2/3), 32^(3/5)", "(∛8)²=4; (⁵√32)³=8"],
        ],
      },
      {
        kind: "bullets", heading: "Standard form operations",
        bullets: [
          "Multiply: multiply coefficients, ADD powers: (3×10⁴)×(2×10³) = 6×10⁷",
          "Divide: divide coefficients, SUBTRACT powers: (8×10⁶)÷(4×10²) = 2×10⁴",
          "Add/subtract: make powers equal first: 3×10⁴ + 2×10³ = 3×10⁴ + 0.2×10⁴ = 3.2×10⁴",
          "Always check final coefficient is between 1 and 10",
        ],
      },
    ],
    examTips: [
      "Fractional index: denominator = root (do first); numerator = power (do second). Smaller numbers first = easier arithmetic.",
      "Negative index ≠ negative number: 2⁻³ = 1/8 (positive), not −8.",
    ],
    commonMistakes: [
      "Adding powers when multiplying different bases: x³ × y² ≠ (xy)⁵. Index laws only work with the SAME base.",
      "x⁰ = 0 is wrong — x⁰ = 1 for any non-zero x.",
      "Standard form addition: (3×10²)+(2×10³) ≠ 5×10⁵. You must equalise powers first.",
    ],
  },
  {
    id: "maths-note-2-1", subjectId: "mathematics-0580", objectiveId: "obj-2-1",
    title: "Algebraic Manipulation",
    keyPoints: [
      "Expanding: multiply every term inside bracket by the term outside",
      "FOIL for two brackets: First, Outer, Inner, Last",
      "Factorising: find highest common factor, or two numbers that multiply/add to give quadratic",
      "Difference of two squares: a² − b² = (a+b)(a−b)",
    ],
    content: [
      {
        kind: "bullets", heading: "Factorising quadratics ax² + bx + c",
        bullets: [
          "When a = 1: find p and q such that p × q = c and p + q = b. Answer: (x+p)(x+q)",
          "When a ≠ 1: multiply a × c, find factors that add to b, split bx term, factorise by grouping",
          "Difference of two squares: x² − 9 = (x+3)(x−3) — always check for this first",
          "Perfect square: x² + 6x + 9 = (x+3)² — recognise when c = (b/2)²",
        ],
      },
      { kind: "paragraph", heading: "Algebraic fractions", text: "To simplify algebraic fractions: factorise the numerator and denominator fully, then cancel common factors. You can ONLY cancel factors (entire brackets), never individual terms. Example: (x²−4)/(x²+x−2) = (x+2)(x−2)/[(x+2)(x−1)] = (x−2)/(x−1). To add/subtract fractions: find the common denominator, rewrite each fraction, then add/subtract numerators." },
      {
        kind: "table", heading: "Common algebraic identities",
        headers: ["Identity", "Expanded form"],
        rows: [
          ["(a+b)² = ", "a² + 2ab + b²"],
          ["(a−b)² = ", "a² − 2ab + b²"],
          ["(a+b)(a−b) = ", "a² − b²"],
          ["(x+p)(x+q) = ", "x² + (p+q)x + pq"],
        ],
      },
    ],
    examTips: [
      "Always check for a common factor FIRST before attempting other factorisation methods.",
      "Difference of two squares: both terms must be perfect squares with a minus sign between them.",
      "In algebraic fraction questions, factorising both top and bottom is almost always the key step.",
    ],
    commonMistakes: [
      "(a+b)² ≠ a² + b² — the middle term 2ab is always there.",
      "Cancelling terms in a fraction: (x+3)/(x+5) — you CANNOT cancel the x's or the 3 and 5.",
      "Forgetting the negative sign when expanding: (x−3)² = x² − 6x + 9, not x² + 9.",
    ],
  },
  {
    id: "maths-note-2-2", subjectId: "mathematics-0580", objectiveId: "obj-2-2",
    title: "Equations and Inequalities",
    keyPoints: [
      "Linear equations: isolate the unknown by doing the same operation to both sides",
      "Quadratic: factorise, complete the square, or use quadratic formula",
      "Simultaneous equations: substitution or elimination method",
      "Inequalities: same rules as equations EXCEPT multiplying/dividing by a negative flips the sign",
    ],
    content: [
      {
        kind: "bullets", heading: "Solving quadratics — three methods",
        bullets: [
          "Factorisation: ax²+bx+c = 0 → (x+p)(x+q) = 0 → x = −p or x = −q. Fastest when it factors neatly.",
          "Quadratic formula: x = [−b ± √(b²−4ac)] / 2a. Always works; use when factorisation fails.",
          "Completing the square: x²+bx+c → (x + b/2)² − (b/2)² + c = 0. Required for vertex form and deriving the formula.",
          "Discriminant b²−4ac: >0 → 2 real roots; =0 → 1 repeated root; <0 → no real roots",
        ],
      },
      { kind: "paragraph", heading: "Simultaneous equations", text: "Two methods: Substitution — rearrange one equation for one variable, substitute into the other, solve. Elimination — multiply equations to make coefficients of one variable equal, then add or subtract to eliminate it. For non-linear simultaneous equations (one quadratic, one linear), always use substitution. Check answers by substituting back into BOTH original equations." },
      {
        kind: "bullets", heading: "Inequalities on a number line",
        bullets: [
          "x > 3: open circle at 3, arrow pointing right",
          "x ≤ 5: filled/closed circle at 5, arrow pointing left",
          "3 < x ≤ 7: open circle at 3, closed circle at 7, shaded between",
          "When multiplying or dividing by a negative number: REVERSE the inequality sign",
          "Example: −2x < 6 → x > −3 (sign flips when dividing by −2)",
        ],
      },
    ],
    examTips: [
      "Quadratic formula: write it out in full before substituting. Errors in formula substitution are very common.",
      "Simultaneous with one quadratic: express the linear equation in terms of one variable, substitute into the quadratic — gives a quadratic to solve.",
    ],
    commonMistakes: [
      "Forgetting ± in the quadratic formula — there are usually TWO solutions.",
      "Not flipping the inequality sign when multiplying/dividing by a negative number.",
      "Checking simultaneous equation solutions in only ONE equation — always check BOTH.",
    ],
  },
  {
    id: "maths-note-2-3", subjectId: "mathematics-0580", objectiveId: "obj-2-3",
    title: "Linear Programming",
    keyPoints: [
      "Formulate constraints as inequalities from word problem information",
      "Draw each boundary line; shade the unwanted region",
      "Feasible region satisfies ALL constraints simultaneously",
      "Optimal solution always occurs at a vertex of the feasible region",
    ],
    content: [
      {
        kind: "bullets", heading: "Steps to solve a linear programming problem",
        bullets: [
          "1. Define variables (let x = …, y = …)",
          "2. Write constraints as inequalities (including x ≥ 0, y ≥ 0 unless stated otherwise)",
          "3. Write the objective function (maximise or minimise P = ax + by)",
          "4. Draw boundary lines (treat inequalities as equations to plot)",
          "5. Shade unwanted regions OR identify the feasible region",
          "6. Find all vertices of the feasible region (solve pairs of boundary equations simultaneously)",
          "7. Evaluate the objective function at EVERY vertex",
          "8. Choose the vertex that gives the maximum (or minimum) value",
        ],
      },
      { kind: "paragraph", heading: "Testing which side to shade", text: "For each inequality, test the origin (0, 0) unless it lies on the boundary. If (0,0) satisfies the inequality (e.g. 0 + 0 ≤ 10 is true), shade the side NOT containing the origin (the unwanted region is the opposite side). If the problem uses 'shade the feasible region', shade the area that satisfies all constraints." },
    ],
    examTips: [
      "The objective function is always evaluated at vertices only — you never need to check interior points.",
      "If integer solutions are required, and the LP vertex gives a non-integer, test nearby integer points in the feasible region.",
    ],
    commonMistakes: [
      "Evaluating the objective function at a random point inside the region instead of at a vertex.",
      "Forgetting non-negativity constraints (x ≥ 0, y ≥ 0) — these are almost always needed.",
      "Shading the feasible region instead of the unwanted region (or vice versa) — read the question carefully.",
    ],
  },
  {
    id: "maths-note-3-1", subjectId: "mathematics-0580", objectiveId: "obj-3-1",
    title: "Cartesian Coordinates",
    keyPoints: [
      "Midpoint of AB = ((x₁+x₂)/2, (y₁+y₂)/2)",
      "Distance AB = √[(x₂−x₁)² + (y₂−y₁)²]",
      "Gradient = (y₂−y₁) / (x₂−x₁)",
      "Perpendicular gradients: m₁ × m₂ = −1",
    ],
    content: [
      {
        kind: "bullets", heading: "Key coordinate geometry formulas",
        bullets: [
          "Midpoint: M = ((x₁+x₂)/2, (y₁+y₂)/2) — average the x's and y's",
          "Distance: d = √[(Δx)² + (Δy)²] — Pythagorean theorem in the coordinate plane",
          "Gradient: m = (y₂−y₁)/(x₂−x₁) — rise over run",
          "Section formula (ratio m:n): P = ((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n))",
          "Perpendicular: if gradient of L₁ = m, then gradient of L₂ (perp.) = −1/m",
        ],
      },
      { kind: "paragraph", heading: "Proving properties using coordinates", text: "To prove a quadrilateral is a parallelogram: show opposite sides have equal gradients (parallel). To prove a right angle: show the product of gradients of two sides = −1. To prove sides are equal length: use distance formula. To prove a triangle is isosceles: show two sides have equal length. To find the area of a triangle with vertices: use the formula ½|x₁(y₂−y₃) + x₂(y₃−y₁) + x₃(y₁−y₂)|." },
    ],
    examTips: [
      "Always label coordinates clearly when writing them as subscripts to avoid confusion.",
      "If a question says 'show that' a shape has a property: use precise coordinate calculations, not just a diagram.",
    ],
    commonMistakes: [
      "Gradient formula: subtracting in wrong order (y₁−y₂)/(x₂−x₁) — must be consistent (top matches bottom numerically).",
      "Midpoint: averaging both x AND y — only averaging x gives the wrong point.",
    ],
  },
  {
    id: "maths-note-3-2", subjectId: "mathematics-0580", objectiveId: "obj-3-2",
    title: "Straight Line Graphs",
    keyPoints: [
      "y = mx + c: m = gradient, c = y-intercept",
      "Parallel lines have equal gradients",
      "Perpendicular lines: product of gradients = −1",
      "Equation through point (x₁,y₁) with gradient m: y − y₁ = m(x − x₁)",
    ],
    content: [
      {
        kind: "bullets", heading: "Finding the equation of a line",
        bullets: [
          "Given gradient m and y-intercept c: write y = mx + c directly",
          "Given gradient m and a point (x₁,y₁): use y − y₁ = m(x − x₁), rearrange to y = mx + c",
          "Given two points: find m = (y₂−y₁)/(x₂−x₁), then use point-slope form above",
          "Parallel to y=3x−2 through (1,5): same m=3, so y=3x+c; sub (1,5): 5=3+c, c=2; y=3x+2",
          "Perpendicular to y=3x−2: m = −1/3; use point-slope with given point",
        ],
      },
      { kind: "paragraph", heading: "Interpreting real-life graphs", text: "In distance-time graphs: gradient = speed. In cost vs quantity graphs: gradient = cost per unit; y-intercept = fixed cost. In temperature conversion graphs (°C vs °F): gradient = conversion factor (9/5), y-intercept = offset (+32). Always state the units of the gradient — this is what gives the gradient its meaning in context." },
      {
        kind: "table", heading: "Rearranging common line forms",
        headers: ["Form", "Example", "Gradient", "y-intercept"],
        rows: [
          ["y = mx + c", "y = 2x − 3", "2", "−3"],
          ["ax + by = c", "3x + 2y = 10", "−3/2", "5"],
          ["ax + by + c = 0", "2x − y + 4 = 0", "2", "4"],
        ],
      },
    ],
    examTips: [
      "Always rearrange to y = mx + c before reading off gradient and y-intercept.",
      "For a line through two points, verify the equation by substituting BOTH points back in.",
    ],
    commonMistakes: [
      "Reading gradient from ax + by = c without rearranging: gradient of 3x+2y=10 is NOT 3, it's −3/2.",
      "Thinking lines with the same c are parallel — they're not, unless m is also equal.",
    ],
  },
  {
    id: "maths-note-4-1", subjectId: "mathematics-0580", objectiveId: "obj-4-1",
    title: "Geometrical Terms and Shapes",
    keyPoints: [
      "Sum of interior angles of n-gon = (n−2) × 180°",
      "Sum of exterior angles of any polygon = 360°",
      "Circle theorems: angle in semicircle = 90°; angle at centre = 2× at circumference",
      "Congruent: same shape AND size; Similar: same shape, different size",
    ],
    content: [
      {
        kind: "table", heading: "Polygon angle sums",
        headers: ["Polygon", "Sides (n)", "Interior angle sum", "Each interior angle (regular)"],
        rows: [
          ["Triangle", "3", "180°", "60°"],
          ["Quadrilateral", "4", "360°", "90°"],
          ["Pentagon", "5", "540°", "108°"],
          ["Hexagon", "6", "720°", "120°"],
          ["Octagon", "8", "1080°", "135°"],
          ["Decagon", "10", "1440°", "144°"],
          ["n-gon", "n", "(n−2)×180°", "(n−2)×180°/n"],
        ],
      },
      {
        kind: "bullets", heading: "Circle theorems to memorise",
        bullets: [
          "Angle in a semicircle = 90° (angle subtended by diameter)",
          "Angle at centre = 2 × angle at circumference (same arc)",
          "Angles in the same segment are equal",
          "Opposite angles of a cyclic quadrilateral sum to 180°",
          "Tangent to a circle is perpendicular to the radius at the point of contact",
          "Two tangents from an external point are equal in length",
          "Alternate segment theorem: angle in alternate segment = angle between tangent and chord",
        ],
      },
    ],
    examTips: [
      "For proof questions, always state which theorem you are using by name, and show each step clearly.",
      "Exterior angle of a regular n-gon = 360°/n. To find n: n = 360° / exterior angle.",
    ],
    commonMistakes: [
      "Using the wrong formula: some students use (n−2)×180 for exterior angles — exterior angles always sum to 360°.",
      "In circle theorem proofs: not stating reasons — every angle calculation must have a theorem named.",
    ],
  },
  {
    id: "maths-note-4-2", subjectId: "mathematics-0580", objectiveId: "obj-4-2",
    title: "Angle Properties",
    keyPoints: [
      "Parallel lines: alternate angles equal (Z), corresponding angles equal (F), co-interior angles sum to 180° (C)",
      "Vertically opposite angles are equal",
      "Exterior angle of triangle = sum of two non-adjacent interior angles",
      "All circle theorems also apply (see 4.1)",
    ],
    content: [
      {
        kind: "table", heading: "Parallel line angle relationships",
        headers: ["Angle pair", "Relationship", "Position (shape)"],
        rows: [
          ["Alternate angles", "Equal", "Z-shape across transversal"],
          ["Corresponding angles", "Equal", "F-shape on same side of transversal"],
          ["Co-interior (same-side interior)", "Sum to 180°", "C-shape on same side"],
          ["Vertically opposite", "Equal", "X-shape at intersection"],
        ],
      },
      { kind: "paragraph", heading: "Bearings", text: "A bearing is an angle measured clockwise from North, written as a three-digit number (e.g. 045°, 270°). To find the bearing from B to A when you know the bearing from A to B: add or subtract 180°. For example, if bearing A to B = 070°, then bearing B to A = 070° + 180° = 250°. Bearings problems often involve the sine rule, cosine rule, or simple angle geometry with parallel N–S lines." },
    ],
    examTips: [
      "In angle problems: always state the reason for each step (e.g. 'alternate angles; AB parallel to CD'). Marks are awarded for reasons, not just answers.",
      "Bearing problems: always draw a North line at each point. The North lines are parallel, so you can use Z and F angle relationships between them.",
    ],
    commonMistakes: [
      "Not giving reasons in angle calculations — 'because parallel lines' alone is not enough; name the type (alternate, corresponding, co-interior).",
      "Bearings: forgetting to use 3 digits (045°, not 45°). Adding 180° to get the reverse bearing instead of checking if it exceeds 360°.",
    ],
  },
  {
    id: "maths-note-5-1", subjectId: "mathematics-0580", objectiveId: "obj-5-1",
    title: "Mensuration — 2D Shapes",
    keyPoints: [
      "Area formulas: triangle = ½bh; trapezium = ½(a+b)h; circle = πr²",
      "Perimeter/Circumference: circle C = 2πr = πd",
      "Arc length = (θ/360) × 2πr; Sector area = (θ/360) × πr²",
      "For compound shapes: split into simpler shapes, calculate each area separately",
    ],
    content: [
      {
        kind: "table", heading: "Area and perimeter formulas",
        headers: ["Shape", "Area", "Perimeter"],
        rows: [
          ["Rectangle", "l × w", "2(l+w)"],
          ["Triangle", "½ × base × height", "sum of sides"],
          ["Trapezium", "½(a+b) × h (a,b parallel sides)", "sum of sides"],
          ["Parallelogram", "base × perpendicular height", "2(a+b)"],
          ["Circle", "πr²", "2πr (circumference)"],
          ["Sector (angle θ°)", "(θ/360) × πr²", "(θ/360)×2πr + 2r (arc + 2 radii)"],
          ["Segment", "Sector area − triangle area", "arc + chord"],
        ],
      },
      { kind: "paragraph", heading: "Non-right-angled triangle area", text: "Area of a triangle with two sides a, b and included angle C: Area = ½ab sin C. This is used when the perpendicular height is not given or easily calculated. Always check: is the height perpendicular to the base? If not, use the ½ab sin C formula." },
    ],
    examTips: [
      "Sector perimeter: arc + TWO radii. Many students forget the two radii and just give the arc length.",
      "Segment = sector − triangle. Draw it out first to visualise.",
      "If the question says 'leave in terms of π', don't evaluate — write 54π cm², not 169.6 cm².",
    ],
    commonMistakes: [
      "Using diameter instead of radius in πr² — r is radius, NOT diameter.",
      "For trapezium: using a+b as the height instead of the perpendicular distance between parallel sides.",
      "Confusing sector (pie slice) with segment (chord + arc region).",
    ],
  },
  {
    id: "maths-note-5-2", subjectId: "mathematics-0580", objectiveId: "obj-5-2",
    title: "Mensuration — 3D Shapes",
    keyPoints: [
      "Volume of prism = cross-sectional area × length",
      "Volume of cylinder = πr²h; cone = ⅓πr²h; sphere = 4/3πr³",
      "Surface area: find each face separately, add together",
      "Similar shapes: if linear scale factor k, area scale factor = k², volume scale factor = k³",
    ],
    content: [
      {
        kind: "table", heading: "Volume and surface area formulas",
        headers: ["Shape", "Volume", "Surface area"],
        rows: [
          ["Cuboid (l×w×h)", "lwh", "2(lw+lh+wh)"],
          ["Cylinder (r,h)", "πr²h", "2πr² + 2πrh (curved + 2 circles)"],
          ["Cone (r,h,l=slant)", "⅓πr²h", "πrl + πr² (curved + base)"],
          ["Sphere (r)", "4/3πr³", "4πr²"],
          ["Pyramid (base area A, h)", "⅓Ah", "base area + lateral faces"],
        ],
      },
      { kind: "paragraph", heading: "Similar shapes — scale factors", text: "If two 3D shapes are similar with linear scale factor k (one dimension is k times the other): all lengths scale by k; all areas (including surface area) scale by k²; all volumes scale by k³. Example: if a small sphere has radius 3 cm and a large sphere has radius 6 cm, scale factor k = 2. Volume ratio = 2³ = 8 (large sphere has 8 times the volume of the small one)." },
    ],
    examTips: [
      "Frustum (cone with top removed): V_frustum = V_large − V_small. Identify the dimensions of each cone.",
      "Curved surface area of cylinder = 2πrh (imagine unrolling it into a rectangle: length = 2πr, width = h).",
      "For 'recasting' problems: set volumes equal and solve for the unknown dimension.",
    ],
    commonMistakes: [
      "Volume of cone: forgetting the ⅓ factor — cone = ⅓ × cylinder.",
      "Surface area of cylinder: forgetting the two circular ends (2πr²), or forgetting the curved surface (2πrh).",
      "Similar shapes: using k instead of k² for area or k³ for volume.",
    ],
  },
  {
    id: "maths-note-6-1", subjectId: "mathematics-0580", objectiveId: "obj-6-1",
    title: "Trigonometric Ratios",
    keyPoints: [
      "SOH CAH TOA: sin = opp/hyp; cos = adj/hyp; tan = opp/adj",
      "Angles of elevation (looking up) and depression (looking down) both from horizontal",
      "For inverse: θ = sin⁻¹(opp/hyp) etc.",
      "Only use SOH CAH TOA in RIGHT-ANGLED triangles",
    ],
    content: [
      {
        kind: "table", heading: "Trigonometric ratios and when to use each",
        headers: ["Ratio", "Formula", "Use when you have"],
        rows: [
          ["Sine (sin)", "sin θ = opp/hyp", "Opposite and hypotenuse"],
          ["Cosine (cos)", "cos θ = adj/hyp", "Adjacent and hypotenuse"],
          ["Tangent (tan)", "tan θ = opp/adj", "Opposite and adjacent"],
        ],
      },
      {
        kind: "bullets", heading: "Exact values to memorise",
        bullets: [
          "sin 0° = 0; sin 30° = 1/2; sin 45° = √2/2; sin 60° = √3/2; sin 90° = 1",
          "cos 0° = 1; cos 30° = √3/2; cos 45° = √2/2; cos 60° = 1/2; cos 90° = 0",
          "tan 0° = 0; tan 30° = 1/√3; tan 45° = 1; tan 60° = √3; tan 90° = undefined",
        ],
      },
      { kind: "paragraph", heading: "Angles of elevation and depression", text: "Angle of elevation: measured upward from the horizontal to the line of sight (looking up at a building, cliff, aeroplane). Angle of depression: measured downward from the horizontal (looking down from a cliff to a boat). Both are measured from the HORIZONTAL line. The angle of elevation from A to B = angle of depression from B to A (alternate angles with a horizontal line)." },
    ],
    examTips: [
      "Draw a diagram FIRST for every trigonometry question. Label the sides relative to the angle: opposite, adjacent, hypotenuse.",
      "Angles of elevation/depression: the horizontal line is the base of the right-angled triangle.",
      "Calculator: make sure it is in DEGREE mode, not radian mode.",
    ],
    commonMistakes: [
      "Labelling adjacent and opposite incorrectly — they depend on which angle you are working with.",
      "Using SOH CAH TOA in a non-right-angled triangle — must use sine rule or cosine rule instead.",
      "Calculator in radian mode — always check the mode at the start of an exam.",
    ],
  },
  {
    id: "maths-note-6-2", subjectId: "mathematics-0580", objectiveId: "obj-6-2",
    title: "Applications of Trigonometry",
    keyPoints: [
      "Sine rule: a/sin A = b/sin B = c/sin C — use when angle-side pair is known",
      "Cosine rule: a² = b² + c² − 2bc cos A — use with SAS or SSS",
      "Area of triangle = ½ab sin C",
      "3D problems: identify right-angled triangles in horizontal and vertical planes",
    ],
    content: [
      {
        kind: "table", heading: "Sine rule vs Cosine rule — when to use each",
        headers: ["Given", "Method", "Formula"],
        rows: [
          ["Two angles + one side (AAS/ASA)", "Sine rule (find side)", "a/sin A = b/sin B"],
          ["Two sides + angle opposite one (SSA)", "Sine rule (find angle)", "sin A/a = sin B/b"],
          ["Two sides + included angle (SAS)", "Cosine rule (find third side)", "a² = b²+c²−2bc cos A"],
          ["Three sides (SSS)", "Cosine rule (find any angle)", "cos A = (b²+c²−a²)/2bc"],
          ["Two sides + included angle (SAS)", "Area formula", "Area = ½ab sin C"],
        ],
      },
      { kind: "paragraph", heading: "3D trigonometry", text: "In 3D problems, identify a right-angled triangle in a plane (usually horizontal or vertical). Use Pythagoras to find horizontal distances, then construct a vertical right-angled triangle using the height. The angle of elevation/depression is in this vertical triangle. For the angle between a line and a plane: find the projection of the line onto the plane, then find the angle between the line and its projection in the right-angled triangle formed." },
    ],
    examTips: [
      "Ambiguous case (SSA): when you use the sine rule to find an angle, there may be two solutions (acute and obtuse). Check both against the context.",
      "Bearings with non-right triangles: use the cosine rule for finding distances, sine rule for angles. Always draw carefully.",
    ],
    commonMistakes: [
      "Confusing which form of cosine rule to use — to find a side use a²=b²+c²−2bc cosA; to find an angle rearrange to cos A = (b²+c²−a²)/2bc.",
      "Not checking for the ambiguous case in SSA sine rule problems.",
      "In 3D: trying to find the angle in 3D directly — always reduce to a 2D right-angled triangle first.",
    ],
  },
];
