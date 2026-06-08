import { TopicQuestion } from "@/types/content";

export const chemistryQuestions: TopicQuestion[] = [
  // ─── obj-1-1: States of Matter ───────────────────────────────────────────
  {
    id: "chem-1-1-e", subjectId: "chemistry-0620", objectiveId: "obj-1-1",
    difficulty: "Easy", marks: 3,
    question: "Describe the arrangement and movement of particles in a solid, a liquid, and a gas.",
    workedSolution: {
      steps: [
        "Solid: particles closely packed in a regular arrangement, vibrating about fixed positions.",
        "Liquid: particles close together but randomly arranged, able to move past each other.",
        "Gas: particles far apart, randomly arranged, moving rapidly and freely in all directions.",
      ],
      markSchemePoints: [
        "Solid: closely packed, regular arrangement, vibrate about fixed positions (1)",
        "Liquid: close together, random, can flow/move past each other (1)",
        "Gas: far apart, random arrangement, move rapidly and freely (1)",
      ],
      examTip: "For each state, address BOTH arrangement (close/far, regular/random) AND movement.",
    },
  },
  {
    id: "chem-1-1-m", subjectId: "chemistry-0620", objectiveId: "obj-1-1",
    difficulty: "Medium", marks: 4,
    question: "Explain what happens at the particle level when a solid is heated until it melts, then continues heating until it boils. Include energy changes.",
    workedSolution: {
      steps: [
        "Heating solid: particles gain kinetic energy, vibrate more vigorously.",
        "At melting point: enough energy to break forces holding particles in fixed positions; particles can now move past each other → liquid.",
        "Heating liquid: particles gain more kinetic energy.",
        "At boiling point: enough energy to completely overcome all attractive forces; particles escape into gas phase.",
        "During each state change, temperature stays constant — energy breaks bonds, not raises temperature (latent heat).",
      ],
      markSchemePoints: [
        "Particles gain kinetic energy on heating (1)",
        "At melting: forces between particles overcome / particles free to move past each other (1)",
        "At boiling: all forces completely overcome / particles escape as gas (1)",
        "Temperature constant during state change (latent heat) (1)",
      ],
      examTip: "A flat section on a heating curve = state change. Temperature is CONSTANT during melting and boiling.",
    },
  },
  {
    id: "chem-1-1-h", subjectId: "chemistry-0620", objectiveId: "obj-1-1",
    difficulty: "Hard", marks: 5,
    question: "A crystal of purple potassium manganate(VII) is placed in still water. After 30 minutes, the water is uniformly purple. Explain this. Predict and explain what would happen in hot water.",
    workedSolution: {
      steps: [
        "The KMnO₄ dissolves and MnO₄⁻ ions spread throughout the water by diffusion.",
        "All particles in a liquid are in constant random motion (kinetic theory).",
        "Particles move from high concentration (near crystal) to low concentration — down the gradient — until evenly distributed.",
        "Hot water: particles have greater kinetic energy → move faster → diffuse more rapidly → water turns purple faster.",
      ],
      markSchemePoints: [
        "Diffusion / ions spread from high to low concentration (1)",
        "Particles in constant random motion (1)",
        "Eventually uniform distribution (concentration gradient eliminated) (1)",
        "Hot water: particles have more kinetic energy / move faster (1)",
        "Hot water: diffusion faster / solution turns purple more quickly (1)",
      ],
      examTip: "Higher temperature → more kinetic energy → faster movement → faster diffusion. Always chain these steps.",
    },
  },

  // ─── obj-1-2: Kinetic Theory ──────────────────────────────────────────────
  {
    id: "chem-1-2-e", subjectId: "chemistry-0620", objectiveId: "obj-1-2",
    difficulty: "Easy", marks: 2,
    question: "State two pieces of evidence that support the kinetic theory of matter.",
    workedSolution: {
      steps: [
        "Diffusion — substances spread out spontaneously (particles must be moving).",
        "Brownian motion — smoke/pollen particles move randomly under a microscope (bombarded by invisible fast-moving molecules).",
      ],
      markSchemePoints: [
        "Diffusion — spontaneous spreading indicates random particle motion (1)",
        "Brownian motion — random movement of visible particles caused by invisible moving particles (1)",
      ],
      examTip: "These are the two classic pieces of evidence. Know both with a brief explanation of what each tells us.",
    },
  },
  {
    id: "chem-1-2-m", subjectId: "chemistry-0620", objectiveId: "obj-1-2",
    difficulty: "Medium", marks: 3,
    question: "Explain why gases exert pressure on the walls of their container, using the kinetic theory.",
    workedSolution: {
      steps: [
        "Gas particles move rapidly and randomly in all directions.",
        "Particles constantly collide with the walls of the container.",
        "Each collision exerts a tiny force on the wall; the total of all collisions per unit area creates pressure.",
      ],
      markSchemePoints: [
        "Gas particles move rapidly in all directions (1)",
        "Particles collide with container walls (1)",
        "Each collision exerts a force; many collisions → measurable pressure (1)",
      ],
      examTip: "Increase pressure: raise temperature (faster particles) or decrease volume (more frequent collisions).",
    },
  },
  {
    id: "chem-1-2-h", subjectId: "chemistry-0620", objectiveId: "obj-1-2",
    difficulty: "Hard", marks: 5,
    question: "A sealed gas syringe contains a fixed amount of gas. Explain, using kinetic theory, what happens to the gas pressure when (a) volume is halved at constant temperature and (b) temperature is doubled at constant volume.",
    workedSolution: {
      steps: [
        "(a) Halving volume: same number of particles in half the space → particles hit walls more frequently. Speed unchanged (same temperature) → pressure doubles (Boyle's Law).",
        "(b) Doubling temperature (in Kelvin): particles move faster, collide more frequently AND more forcefully. Volume unchanged → pressure doubles (Gay-Lussac's Law).",
      ],
      markSchemePoints: [
        "(a) Smaller volume → more frequent wall collisions (1)", "(a) Same temperature → same speed (1)",
        "(a) Pressure doubles (for halved volume) (1)",
        "(b) Higher temperature → particles move faster / more kinetic energy (1)",
        "(b) More frequent and forceful collisions → pressure doubles (1)",
      ],
      examTip: "For gas law questions always state: what changes (frequency/force of collisions) and what happens to pressure as a result.",
    },
  },

  // ─── obj-2-1: Measurement ─────────────────────────────────────────────────
  {
    id: "chem-2-1-e", subjectId: "chemistry-0620", objectiveId: "obj-2-1",
    difficulty: "Easy", marks: 2,
    question: "State the most appropriate apparatus to measure (a) the volume of a liquid accurately and (b) the mass of a solid.",
    workedSolution: {
      steps: [
        "(a) A burette or measuring cylinder; a burette is most accurate for small volumes.",
        "(b) A balance (top-pan balance or beam balance).",
      ],
      markSchemePoints: ["(a) Burette / pipette / measuring cylinder (1)", "(b) Balance (1)"],
      examTip: "Burette > pipette > measuring cylinder for accuracy. A burette reads from top down (0 at top).",
    },
  },
  {
    id: "chem-2-1-m", subjectId: "chemistry-0620", objectiveId: "obj-2-1",
    difficulty: "Medium", marks: 4,
    question: "A student measures the temperature of a reaction mixture every minute. Describe, with reasons, the correct technique for reading a thermometer accurately.",
    workedSolution: {
      steps: [
        "Ensure the thermometer bulb is fully submerged in the liquid (not touching the glass sides or bottom of the container).",
        "Wait for the reading to stabilise before reading.",
        "Read at eye level (perpendicular to the scale) to avoid parallax error.",
        "Record to the nearest 0.5°C (or the smallest graduation on the scale).",
      ],
      markSchemePoints: [
        "Bulb fully submerged in liquid (1)",
        "Wait for reading to stabilise (1)",
        "Read at eye level to avoid parallax error (1)",
        "Record to appropriate precision / nearest scale division (1)",
      ],
      examTip: "Parallax error is a key mark — always read gauges and scales at eye level, perpendicular to the scale.",
    },
  },
  {
    id: "chem-2-1-h", subjectId: "chemistry-0620", objectiveId: "obj-2-1",
    difficulty: "Hard", marks: 5,
    question: "A student uses a gas syringe to collect and measure the volume of gas produced in a reaction. Describe the experimental setup and explain two sources of error that could affect the accuracy of the results.",
    workedSolution: {
      steps: [
        "Setup: reaction flask sealed with a delivery tube connected to a gas syringe; reactants added and bung replaced quickly to avoid gas loss at start.",
        "Error 1 — gas loss at start: before the bung is replaced, some gas escapes. This makes the measured volume smaller than the true volume.",
        "Error 2 — temperature change: if the gas cools as it enters the syringe (or is measured at a different temperature), its volume will change (gas contracts when cooled). Measure at a consistent temperature.",
        "Error 3 (alternative) — gas syringe friction: the plunger may stick, making the syringe slow to respond, so some gas pressure builds up before the syringe moves, giving a lower initial reading.",
      ],
      markSchemePoints: [
        "Correct setup: sealed flask, delivery tube, gas syringe (1)",
        "Error 1 identified and explained (e.g. gas loss before bung replaced → volume too low) (1)",
        "How to reduce error 1 (e.g. replace bung quickly / use inverted syringe method) (1)",
        "Error 2 identified and explained (e.g. temperature change affects gas volume) (1)",
        "How to reduce error 2 (e.g. allow syringe to reach room temperature before reading) (1)",
      ],
      examTip: "For 'sources of error' questions: name the error, say how it affects the result (too high/too low), and suggest how to reduce it — 3 parts per error.",
    },
  },

  // ─── obj-2-2: Purification Methods ───────────────────────────────────────
  {
    id: "chem-2-2-e", subjectId: "chemistry-0620", objectiveId: "obj-2-2",
    difficulty: "Easy", marks: 3,
    question: "State the most suitable purification method for separating: (a) sand from water, (b) salt from salt water, (c) ink into its component colours.",
    workedSolution: {
      steps: [
        "(a) Sand from water — filtration (sand is an insoluble solid; water passes through filter paper).",
        "(b) Salt from salt water — evaporation/crystallisation (water is evaporated, leaving salt crystals).",
        "(c) Ink into colours — chromatography (different dyes travel different distances up the paper).",
      ],
      markSchemePoints: ["(a) Filtration (1)", "(b) Evaporation / crystallisation (1)", "(c) Chromatography (1)"],
      examTip: "Match the method to the mixture type: insoluble solid + liquid → filtration; soluble solid + liquid → evaporation/crystallisation; mixture of dissolved dyes → chromatography.",
    },
  },
  {
    id: "chem-2-2-m", subjectId: "chemistry-0620", objectiveId: "obj-2-2",
    difficulty: "Medium", marks: 4,
    question: "Describe how you would obtain a pure, dry sample of copper sulfate crystals from a solution of copper sulfate.",
    workedSolution: {
      steps: [
        "Heat the copper sulfate solution gently in an evaporating dish to evaporate some water and concentrate the solution.",
        "Stop heating when crystals just begin to appear on the surface (test with a glass rod).",
        "Allow the solution to cool — crystals of copper sulfate grow as the solution is saturated.",
        "Filter the crystals from the remaining solution using filter paper and funnel.",
        "Pat the crystals dry with filter paper (or leave to dry in a warm oven).",
      ],
      markSchemePoints: [
        "Heat/evaporate to concentrate the solution (1)",
        "Allow to cool — crystallisation occurs (1)",
        "Filter to separate crystals from solution (1)",
        "Pat or warm dry (not strong heat — would decompose crystals) (1)",
      ],
      examTip: "Don't say 'boil to dryness' for crystallisation — this would give an impure product and decompose the crystals. Gently concentrate, then cool.",
    },
  },
  {
    id: "chem-2-2-h", subjectId: "chemistry-0620", objectiveId: "obj-2-2",
    difficulty: "Hard", marks: 6,
    question: "Describe how fractional distillation separates a mixture of ethanol and water. Explain why this method is more effective than simple distillation for this mixture.",
    workedSolution: {
      steps: [
        "Fractional distillation: the mixture is heated in a flask fitted with a fractionating column packed with glass beads.",
        "Ethanol (boiling point 78°C) has a lower boiling point than water (100°C), so it vaporises first.",
        "The vapour rises up the fractionating column. The column provides a large surface area for repeated condensation and re-evaporation.",
        "The ethanol-rich vapour reaches the top of the column first and passes into the condenser where it cools and liquefies — collected as distillate.",
        "Water vapour condenses lower on the column and drips back into the flask.",
        "Why better than simple distillation: simple distillation only separates the vapour once. Fractional distillation gives many repeated separation steps along the column, giving much purer fractions.",
      ],
      markSchemePoints: [
        "Fractionating column provides multiple condensation/evaporation cycles (1)",
        "Ethanol has lower boiling point → vaporises first (1)",
        "Ethanol-rich vapour reaches top first / condensed and collected (1)",
        "Water condenses lower on column / returns to flask (1)",
        "Simple distillation: single separation — gives impure product (1)",
        "Fractional: multiple separations → much higher purity (1)",
      ],
      examTip: "The key advantage of fractional distillation is the fractionating column providing repeated separation — say this explicitly.",
    },
  },

  // ─── obj-3-1: Atomic Structure ────────────────────────────────────────────
  {
    id: "chem-3-1-e", subjectId: "chemistry-0620", objectiveId: "obj-3-1",
    difficulty: "Easy", marks: 3,
    question: "An atom of phosphorus has the symbol ³¹₁₅P. State the number of (a) protons, (b) neutrons, and (c) electrons in this atom.",
    workedSolution: {
      steps: [
        "The bottom number (15) = atomic number = number of protons.",
        "The top number (31) = mass number = protons + neutrons, so neutrons = 31 − 15 = 16.",
        "In a neutral atom, protons = electrons, so electrons = 15.",
      ],
      markSchemePoints: ["(a) Protons = 15 (1)", "(b) Neutrons = 31 − 15 = 16 (1)", "(c) Electrons = 15 (1)"],
      examTip: "Mass number = protons + neutrons. Atomic number = protons (= electrons in neutral atom). Always subtract to get neutrons.",
    },
  },
  {
    id: "chem-3-1-m", subjectId: "chemistry-0620", objectiveId: "obj-3-1",
    difficulty: "Medium", marks: 4,
    question: "Explain what is meant by isotopes. Chlorine has two isotopes: ³⁵Cl (75%) and ³⁷Cl (25%). Calculate the relative atomic mass of chlorine.",
    workedSolution: {
      steps: [
        "Isotopes: atoms of the same element with the same number of protons but different numbers of neutrons (different mass numbers).",
        "Relative atomic mass (Ar) = weighted average of mass numbers × abundance.",
        "Ar = (35 × 0.75) + (37 × 0.25) = 26.25 + 9.25 = 35.5",
      ],
      markSchemePoints: [
        "Isotopes: same proton number, different neutron/mass number (1)",
        "Correct formula: Ar = Σ(mass × abundance) (1)",
        "Calculation: (35 × 75 + 37 × 25) / 100 (1)",
        "Ar = 35.5 (1)",
      ],
      examTip: "Always use percentages as decimals (75% = 0.75) or divide by 100 at the end. The answer 35.5 should ring a bell — it's on the periodic table.",
    },
  },
  {
    id: "chem-3-1-h", subjectId: "chemistry-0620", objectiveId: "obj-3-1",
    difficulty: "Hard", marks: 5,
    question: "Describe the evidence from the alpha particle scattering experiment (Geiger-Marsden) that led Rutherford to propose the nuclear model of the atom. State what each piece of evidence tells us about atomic structure.",
    workedSolution: {
      steps: [
        "Most alpha particles passed straight through the gold foil → most of the atom is empty space.",
        "A small fraction were deflected slightly → the positive charge and mass are not uniformly distributed.",
        "A very small fraction (about 1 in 8000) bounced back (>90° deflection) → there is a tiny, dense, positively charged nucleus.",
        "The nucleus must be very small compared to the atom (most particles pass through without deflection).",
        "This disproved the plum pudding model (Thomson), which predicted slight deflections only — no large-angle scattering.",
      ],
      markSchemePoints: [
        "Most particles pass through → atom is mostly empty space (1)",
        "Small fraction slightly deflected → positive charge/mass not spread evenly (1)",
        "Very few bounce back → tiny, dense, positively charged nucleus (1)",
        "Nucleus is very small relative to atom size (1)",
        "Contradicts/disproves Thomson's plum pudding model (1)",
      ],
      examTip: "Match each observation to a conclusion: 'passed through' → empty space; 'bounced back' → tiny dense nucleus. This is a favourite 5-mark question.",
    },
  },

  // ─── obj-3-2: Bonding ─────────────────────────────────────────────────────
  {
    id: "chem-3-2-e", subjectId: "chemistry-0620", objectiveId: "obj-3-2",
    difficulty: "Easy", marks: 3,
    question: "State the type of bonding in each of the following: (a) NaCl, (b) H₂O, (c) copper.",
    workedSolution: {
      steps: [
        "(a) NaCl — ionic bonding (metal + non-metal).",
        "(b) H₂O — covalent bonding (non-metal + non-metal).",
        "(c) Copper — metallic bonding (pure metal).",
      ],
      markSchemePoints: ["(a) Ionic (1)", "(b) Covalent (1)", "(c) Metallic (1)"],
      examTip: "Quick rule: metal + non-metal → ionic; non-metal + non-metal → covalent; pure metal → metallic.",
    },
  },
  {
    id: "chem-3-2-m", subjectId: "chemistry-0620", objectiveId: "obj-3-2",
    difficulty: "Medium", marks: 4,
    question: "Explain how ionic bonding occurs in the formation of sodium chloride (NaCl). Draw a dot-and-cross diagram to show the electron transfer.",
    workedSolution: {
      steps: [
        "Sodium (2,8,1) has one electron in its outer shell; chlorine (2,8,7) needs one more electron for a full outer shell.",
        "Sodium transfers its outer electron to chlorine.",
        "Sodium becomes Na⁺ (2,8) — a positive ion (cation).",
        "Chlorine becomes Cl⁻ (2,8,8) — a negative ion (anion).",
        "The oppositely charged ions are held together by strong electrostatic attraction — ionic bond.",
        "Dot-and-cross: Na [dot configuration] → [Na]⁺ [Cl with 8 electrons including the transferred one]⁻",
      ],
      markSchemePoints: [
        "Na loses one electron to form Na⁺ (1)",
        "Cl gains one electron to form Cl⁻ (1)",
        "Electrostatic attraction between oppositely charged ions (1)",
        "Correct dot-and-cross diagram showing electron transfer (1)",
      ],
      examTip: "In dot-and-cross diagrams: show dots for one element, crosses for the other. Show the ion charges and square brackets around each ion.",
    },
  },
  {
    id: "chem-3-2-h", subjectId: "chemistry-0620", objectiveId: "obj-3-2",
    difficulty: "Hard", marks: 6,
    question: "Compare ionic compounds and covalent molecules in terms of: structure, melting point, solubility in water, and electrical conductivity.",
    workedSolution: {
      steps: [
        "Structure: ionic compounds form giant ionic lattices (3D regular arrangements of ions); covalent molecules are discrete molecules with strong covalent bonds within the molecule but weak intermolecular forces between molecules.",
        "Melting point: ionic compounds have high melting points (strong electrostatic forces between ions require a lot of energy to break); simple covalent molecules have low melting points (only weak intermolecular forces to overcome).",
        "Solubility: ionic compounds tend to dissolve in water (polar water molecules surround and separate ions); covalent molecules are often insoluble in water but soluble in organic solvents (like dissolves like).",
        "Conductivity: ionic compounds conduct electricity when molten or dissolved in water (ions free to move and carry charge) but not when solid (ions in fixed positions); covalent molecules do not conduct electricity (no free ions or electrons).",
      ],
      markSchemePoints: [
        "Ionic: giant lattice; covalent: discrete molecules (1)",
        "Ionic: high melting point (strong electrostatic forces); covalent: low melting point (weak intermolecular forces) (1)",
        "Ionic: often soluble in water; covalent: often insoluble in water (1)",
        "Ionic: conducts when molten/dissolved (ions free to move) (1)",
        "Ionic: does not conduct when solid (ions fixed) (1)",
        "Covalent: does not conduct (no free ions/electrons) (1)",
      ],
      examTip: "Use a comparison table in your head: Structure → Melting point → Solubility → Conductivity. Cover all four for full marks.",
    },
  },

  // ─── obj-4-1: Formulae and Equations ─────────────────────────────────────
  {
    id: "chem-4-1-e", subjectId: "chemistry-0620", objectiveId: "obj-4-1",
    difficulty: "Easy", marks: 3,
    question: "Balance the following chemical equations: (a) H₂ + O₂ → H₂O  (b) Fe + O₂ → Fe₂O₃",
    workedSolution: {
      steps: [
        "(a) H₂ + O₂ → H₂O: H is balanced (2 on each side), but O is not (2 left, 1 right). Add coefficient 2 to H₂O: H₂ + O₂ → 2H₂O. Now H: 2 left, 4 right — not balanced. Add 2 to H₂: 2H₂ + O₂ → 2H₂O. Balanced: H=4, O=2.",
        "(b) Fe + O₂ → Fe₂O₃: Fe: 1 left, 2 right. O: 2 left, 3 right. LCM of 2 and 3 = 6, so put 3 on O₂ and 2 on Fe₂O₃: Fe + 3O₂ → 2Fe₂O₃. Now Fe: 1 left, 4 right. Add 4 to Fe: 4Fe + 3O₂ → 2Fe₂O₃. Balanced.",
      ],
      markSchemePoints: [
        "(a) 2H₂ + O₂ → 2H₂O (1)",
        "(b) 4Fe + 3O₂ → 2Fe₂O₃ (1)",
        "State symbols optional unless asked (1 if state symbols correct when required)",
      ],
      examTip: "When balancing, never change subscripts (you'd change the substance). Only change coefficients in front of formulas.",
    },
  },
  {
    id: "chem-4-1-m", subjectId: "chemistry-0620", objectiveId: "obj-4-1",
    difficulty: "Medium", marks: 4,
    question: "Write the ionic equation for the reaction between hydrochloric acid (HCl) and sodium hydroxide (NaOH) solution. Explain the difference between a full chemical equation and an ionic equation.",
    workedSolution: {
      steps: [
        "Full equation: HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)",
        "All ionic: H⁺(aq) + Cl⁻(aq) + Na⁺(aq) + OH⁻(aq) → Na⁺(aq) + Cl⁻(aq) + H₂O(l)",
        "Cancel spectator ions (Na⁺ and Cl⁻ appear on both sides): H⁺(aq) + OH⁻(aq) → H₂O(l)",
        "Difference: a full equation shows all species including spectator ions; an ionic equation shows only the species that actually change / participate in the reaction.",
      ],
      markSchemePoints: [
        "Correct full equation with state symbols (1)",
        "Ionic equation: H⁺(aq) + OH⁻(aq) → H₂O(l) (1)",
        "Spectator ions identified and cancelled (Na⁺ and Cl⁻) (1)",
        "Difference correctly explained (ionic shows only reacting species) (1)",
      ],
      examTip: "The ionic equation for ALL neutralisation reactions of strong acid + strong base is: H⁺(aq) + OH⁻(aq) → H₂O(l). Memorise this.",
    },
  },
  {
    id: "chem-4-1-h", subjectId: "chemistry-0620", objectiveId: "obj-4-1",
    difficulty: "Hard", marks: 5,
    question: "0.50 g of calcium carbonate (CaCO₃, Mr = 100) reacts with excess hydrochloric acid. Write a balanced equation for this reaction and calculate the volume of CO₂ produced at room temperature and pressure (RTP, 1 mole of gas = 24 dm³).",
    workedSolution: {
      steps: [
        "Equation: CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)",
        "Moles of CaCO₃ = mass / Mr = 0.50 / 100 = 0.005 mol",
        "From equation: 1 mol CaCO₃ → 1 mol CO₂, so 0.005 mol CaCO₃ → 0.005 mol CO₂",
        "Volume of CO₂ = moles × 24 dm³/mol = 0.005 × 24 = 0.12 dm³ (= 120 cm³)",
      ],
      markSchemePoints: [
        "Correct balanced equation (1)",
        "Moles of CaCO₃ = 0.005 mol (1)",
        "Moles CO₂ = 0.005 mol (from 1:1 ratio) (1)",
        "Volume = 0.005 × 24 = 0.12 dm³ / 120 cm³ (1)",
        "Correct unit (dm³ or cm³) (1)",
      ],
      examTip: "Mole calculations: moles = mass/Mr; then use the molar ratio from the equation; then calculate volume = moles × 24 (at RTP).",
    },
  },

  // ─── obj-4-2: Mole Concept ────────────────────────────────────────────────
  {
    id: "chem-4-2-e", subjectId: "chemistry-0620", objectiveId: "obj-4-2",
    difficulty: "Easy", marks: 2,
    question: "Calculate the number of moles in (a) 16 g of sulfur (Ar = 32) and (b) 5.85 g of sodium chloride (Mr = 58.5).",
    workedSolution: {
      steps: [
        "(a) moles = mass / Ar = 16 / 32 = 0.5 mol",
        "(b) moles = mass / Mr = 5.85 / 58.5 = 0.1 mol",
      ],
      markSchemePoints: ["(a) 0.5 mol (1)", "(b) 0.1 mol (1)"],
      examTip: "Moles = mass / molar mass (Ar for elements, Mr for compounds). Keep the triangle: moles × Mr = mass.",
    },
  },
  {
    id: "chem-4-2-m", subjectId: "chemistry-0620", objectiveId: "obj-4-2",
    difficulty: "Medium", marks: 4,
    question: "In the reaction N₂ + 3H₂ → 2NH₃, calculate the mass of ammonia (NH₃, Mr = 17) produced when 14 g of nitrogen (N₂, Mr = 28) reacts with excess hydrogen.",
    workedSolution: {
      steps: [
        "Moles of N₂ = 14 / 28 = 0.5 mol",
        "From equation: 1 mol N₂ → 2 mol NH₃, so 0.5 mol N₂ → 1.0 mol NH₃",
        "Mass of NH₃ = moles × Mr = 1.0 × 17 = 17 g",
      ],
      markSchemePoints: [
        "Moles N₂ = 0.5 mol (1)",
        "Molar ratio N₂:NH₃ = 1:2 / moles NH₃ = 1.0 mol (1)",
        "Mass = 1.0 × 17 = 17 g (1)",
        "Unit: grams (1)",
      ],
      examTip: "The method is always: moles of given → use ratio → moles of wanted → mass of wanted. Never skip the ratio step.",
    },
  },
  {
    id: "chem-4-2-h", subjectId: "chemistry-0620", objectiveId: "obj-4-2",
    difficulty: "Hard", marks: 5,
    question: "25.0 cm³ of 0.100 mol/dm³ sulfuric acid reacts with sodium hydroxide solution. The equation is: H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O. Calculate the concentration of sodium hydroxide solution if 20.0 cm³ of it is needed for complete neutralisation.",
    workedSolution: {
      steps: [
        "Moles of H₂SO₄ = concentration × volume (in dm³) = 0.100 × (25.0/1000) = 0.00250 mol",
        "From equation: 1 mol H₂SO₄ reacts with 2 mol NaOH, so moles NaOH = 2 × 0.00250 = 0.00500 mol",
        "Volume of NaOH = 20.0 cm³ = 0.0200 dm³",
        "Concentration of NaOH = moles / volume = 0.00500 / 0.0200 = 0.250 mol/dm³",
      ],
      markSchemePoints: [
        "Moles H₂SO₄ = 0.00250 mol (1)",
        "Molar ratio 1:2 applied → moles NaOH = 0.00500 mol (1)",
        "Volume converted to dm³: 0.0200 dm³ (1)",
        "Concentration = 0.250 mol/dm³ (1)",
        "Unit: mol/dm³ (1)",
      ],
      examTip: "ALWAYS convert cm³ to dm³ by dividing by 1000 before using c = n/V. The molar ratio is the most common place to lose a mark.",
    },
  },

  // ─── obj-5-1: Electrolysis ────────────────────────────────────────────────
  {
    id: "chem-5-1-e", subjectId: "chemistry-0620", objectiveId: "obj-5-1",
    difficulty: "Easy", marks: 3,
    question: "Define electrolysis and state what is meant by an electrolyte, a cathode, and an anode.",
    workedSolution: {
      steps: [
        "Electrolysis: the decomposition of a compound (electrolyte) using electricity.",
        "Electrolyte: a compound that conducts electricity when molten or in aqueous solution, due to free ions.",
        "Cathode: the negative electrode — positive ions (cations) migrate here and gain electrons (reduction).",
        "Anode: the positive electrode — negative ions (anions) migrate here and lose electrons (oxidation).",
      ],
      markSchemePoints: [
        "Electrolysis: decomposition using electricity (1)",
        "Cathode: negative electrode / cations gain electrons (1)",
        "Anode: positive electrode / anions lose electrons (1)",
      ],
      examTip: "Remember: AN OX (Anode = Oxidation) and RED CAT (Reduction at Cathode). Positively charged cations are attracted to the negative cathode.",
    },
  },
  {
    id: "chem-5-1-m", subjectId: "chemistry-0620", objectiveId: "obj-5-1",
    difficulty: "Medium", marks: 4,
    question: "Predict the products at the cathode and anode during electrolysis of (a) molten lead(II) bromide and (b) aqueous copper(II) sulfate solution using copper electrodes.",
    workedSolution: {
      steps: [
        "(a) Molten PbBr₂: only ions present are Pb²⁺ and Br⁻. Cathode: Pb²⁺ + 2e⁻ → Pb (lead deposited). Anode: 2Br⁻ → Br₂ + 2e⁻ (bromine gas produced).",
        "(b) Aqueous CuSO₄ with copper electrodes: ions are Cu²⁺, SO₄²⁻, H⁺, OH⁻. Cathode: Cu²⁺ + 2e⁻ → Cu (copper deposited — Cu²⁺ discharged in preference to H⁺). Anode: copper electrode dissolves (Cu → Cu²⁺ + 2e⁻) — electrode is active/sacrificial.",
      ],
      markSchemePoints: [
        "(a) Cathode: lead metal deposited (1)",
        "(a) Anode: bromine gas produced (1)",
        "(b) Cathode: copper deposited (1)",
        "(b) Anode: copper electrode dissolves / copper ions enter solution (1)",
      ],
      examTip: "When electrodes are copper (reactive/active), the anode dissolves instead of gases being produced. This is used in copper purification and electroplating.",
    },
  },
  {
    id: "chem-5-1-h", subjectId: "chemistry-0620", objectiveId: "obj-5-1",
    difficulty: "Hard", marks: 6,
    question: "During the electrolysis of dilute aqueous sodium chloride solution using inert (graphite) electrodes, state and explain the products at each electrode. Explain why the product at the anode changes if the NaCl solution is concentrated.",
    workedSolution: {
      steps: [
        "Ions present: Na⁺, Cl⁻, H⁺ (from water), OH⁻ (from water).",
        "Cathode: H⁺ and Na⁺ present. H⁺ is discharged in preference to Na⁺ (Na is higher in reactivity series). Product: hydrogen gas (2H⁺ + 2e⁻ → H₂).",
        "Anode (dilute NaCl): OH⁻ and Cl⁻ present. In dilute solution, OH⁻ is present in relatively higher concentration, so OH⁻ is preferentially discharged. Product: oxygen gas (4OH⁻ → 2H₂O + O₂ + 4e⁻).",
        "Anode (concentrated NaCl): Cl⁻ is now in much higher concentration relative to OH⁻, so Cl⁻ is discharged. Product: chlorine gas (2Cl⁻ → Cl₂ + 2e⁻).",
        "Overall (dilute): H₂ at cathode, O₂ at anode. (concentrated): H₂ at cathode, Cl₂ at anode.",
      ],
      markSchemePoints: [
        "Cathode: H⁺ discharged in preference to Na⁺ / H₂ produced (1)",
        "Reason: H⁺ easier to discharge than Na⁺ (Na higher in reactivity series) (1)",
        "Anode (dilute): OH⁻ discharged / O₂ produced (1)",
        "Anode (concentrated): Cl⁻ in excess / Cl₂ produced (1)",
        "Reason for change: higher Cl⁻ concentration → Cl⁻ preferentially discharged (1)",
        "Half equation at anode (either): 2Cl⁻ → Cl₂ + 2e⁻ OR 4OH⁻ → 2H₂O + O₂ + 4e⁻ (1)",
      ],
      examTip: "The concentration effect is the hardest part. Dilute NaCl → O₂ at anode. Concentrated NaCl → Cl₂ at anode. The reason is always about relative ion concentrations.",
    },
  },

  // ─── obj-6-1: Energy Changes ──────────────────────────────────────────────
  {
    id: "chem-6-1-e", subjectId: "chemistry-0620", objectiveId: "obj-6-1",
    difficulty: "Easy", marks: 2,
    question: "State the difference between an exothermic and an endothermic reaction. Give one example of each.",
    workedSolution: {
      steps: [
        "Exothermic: releases energy (heat) to the surroundings — temperature of surroundings increases. Example: combustion of methane, neutralisation, oxidation.",
        "Endothermic: absorbs energy (heat) from the surroundings — temperature of surroundings decreases. Example: thermal decomposition, dissolving ammonium nitrate in water, photosynthesis.",
      ],
      markSchemePoints: [
        "Exothermic: releases heat / temperature increases / energy transferred to surroundings + named example (1)",
        "Endothermic: absorbs heat / temperature decreases / energy taken from surroundings + named example (1)",
      ],
      examTip: "Exothermic = exits heat (temperature rises). Endothermic = enters heat (temperature falls). Combustion is always exothermic — a very reliable example.",
    },
  },
  {
    id: "chem-6-1-m", subjectId: "chemistry-0620", objectiveId: "obj-6-1",
    difficulty: "Medium", marks: 4,
    question: "Explain why breaking bonds requires energy and forming bonds releases energy. Use this to explain why combustion of hydrogen (H₂ + ½O₂ → H₂O) is exothermic.",
    workedSolution: {
      steps: [
        "Breaking bonds requires energy — you must put energy in to overcome the attractive forces between atoms.",
        "Forming bonds releases energy — energy is released as the atoms come together and new bonds are made.",
        "For H₂ + ½O₂ → H₂O: bonds broken: H–H (436 kJ/mol) and ½ × O=O (½ × 498 = 249 kJ/mol). Total energy in = 685 kJ/mol.",
        "Bonds formed: 2 × O–H (2 × 463 = 926 kJ/mol). Total energy out = 926 kJ/mol.",
        "Energy change = energy in − energy out = 685 − 926 = −241 kJ/mol (negative = exothermic).",
        "More energy is released forming bonds than is used breaking them → net energy is released → exothermic.",
      ],
      markSchemePoints: [
        "Breaking bonds: requires energy input (endothermic step) (1)",
        "Forming bonds: releases energy (exothermic step) (1)",
        "For H₂ combustion: energy released forming bonds > energy needed breaking bonds (1)",
        "Net energy released to surroundings → exothermic (1)",
      ],
      examTip: "ΔH = energy absorbed (bonds broken) − energy released (bonds formed). If negative → exothermic; if positive → endothermic.",
    },
  },
  {
    id: "chem-6-1-h", subjectId: "chemistry-0620", objectiveId: "obj-6-1",
    difficulty: "Hard", marks: 6,
    question: "Use the following bond energies to calculate the enthalpy change for CH₄ + 2O₂ → CO₂ + 2H₂O. C–H = 412, O=O = 498, C=O = 805, O–H = 463 kJ/mol. State whether the reaction is exo- or endothermic and explain.",
    workedSolution: {
      steps: [
        "Bonds broken: 4 × C–H = 4 × 412 = 1648; 2 × O=O = 2 × 498 = 996. Total = 2644 kJ/mol.",
        "Bonds formed: 2 × C=O (in CO₂) = 2 × 805 = 1610; 4 × O–H (in 2H₂O) = 4 × 463 = 1852. Total = 3462 kJ/mol.",
        "ΔH = energy in − energy out = 2644 − 3462 = −818 kJ/mol.",
        "Negative ΔH → exothermic. More energy is released forming bonds in products than is absorbed breaking bonds in reactants.",
      ],
      markSchemePoints: [
        "Bonds broken correctly identified and summed: 2644 kJ/mol (1)",
        "Bonds formed correctly identified and summed: 3462 kJ/mol (1)",
        "ΔH = 2644 − 3462 (correct method) (1)",
        "ΔH = −818 kJ/mol (1)",
        "Exothermic (1)",
        "Reason: energy released forming bonds > energy absorbed breaking bonds (1)",
      ],
      examTip: "Count every bond carefully — CH₄ has 4 C–H bonds, CO₂ has 2 C=O bonds (both carbon-oxygen double bonds), each H₂O has 2 O–H bonds. Missing even one bond loses the mark.",
    },
  },
];
