import type { QuizSet, QuizQuestion } from "@/api/quizzes";
import type { FlashcardDeck, Flashcard } from "@/api/flashcards";

// Helper to normalize subject names (e.g. "Chemistry - 0620" -> "Chemistry")
export function getCleanSubjectName(name: string): string {
  if (!name) return "General Study";
  return name.split(" - ")[0].trim();
}

/**
 * Generate 2 mock quiz sets for any subject.
 */
export function mockQuizSetsForSubject(subject: string): QuizSet[] {
  const cleanSubject = getCleanSubjectName(subject);
  return [
    {
      id: `mock-quiz-core-${cleanSubject}`,
      subject: cleanSubject,
      title: `${cleanSubject} Core Fundamentals`,
      description: `Test your foundational knowledge of ${cleanSubject} concepts. Essential preparation for IGCSE papers.`,
      time_limit_seconds: 600,
      image_url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80",
      course: "Cambridge IGCSE",
      level: "Core",
      attempt_count: 0,
      best_score: null,
    },
    {
      id: `mock-quiz-adv-${cleanSubject}`,
      subject: cleanSubject,
      title: `${cleanSubject} Advanced Theory & Calculations`,
      description: `Tackle higher-level questions, analysis, and problem-solving scenarios in ${cleanSubject}.`,
      time_limit_seconds: 900,
      image_url: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&q=80",
      course: "Cambridge IGCSE",
      level: "Extended",
      attempt_count: 0,
      best_score: null,
    }
  ];
}

/**
 * Generate mock questions for a specific quiz ID.
 */
export function getMockQuiz(quizId: string | number): { quiz: QuizSet; questions: QuizQuestion[] } {
  const strId = String(quizId);
  const isAdv = strId.includes("-adv-");
  const cleanSubject = strId.split("-").pop() || "General Study";

  const quiz: QuizSet = {
    id: quizId,
    subject: cleanSubject,
    title: isAdv ? `${cleanSubject} Advanced Theory & Calculations` : `${cleanSubject} Core Fundamentals`,
    description: isAdv 
      ? `Tackle higher-level questions, analysis, and problem-solving scenarios in ${cleanSubject}.`
      : `Test your foundational knowledge of ${cleanSubject} concepts. Essential preparation for IGCSE papers.`,
    time_limit_seconds: isAdv ? 900 : 600,
    course: "Cambridge IGCSE",
    level: isAdv ? "Extended" : "Core",
    attempt_count: 0,
    best_score: null,
  };

  const questions: QuizQuestion[] = generateMockQuestions(cleanSubject, isAdv, quizId);

  return { quiz, questions };
}

/**
 * Generate 2 mock flashcard decks for any subject.
 */
export function mockDecksForSubject(subject: string): FlashcardDeck[] {
  const cleanSubject = getCleanSubjectName(subject);
  return [
    {
      id: `mock-deck-terms-${cleanSubject}`,
      subject: cleanSubject,
      name: `${cleanSubject}: Key Terminology`,
      description: `Master the essential vocabulary, definitions, and formulas required for IGCSE ${cleanSubject}.`,
      card_count: 10,
      image_url: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=400&q=80",
      course: "Cambridge IGCSE",
      level: "All",
    },
    {
      id: `mock-deck-concepts-${cleanSubject}`,
      subject: cleanSubject,
      name: `${cleanSubject}: Core Principles & Explanations`,
      description: `Deep-dive flashcards focusing on explaining key processes, theories, and mechanisms in ${cleanSubject}.`,
      card_count: 10,
      image_url: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&q=80",
      course: "Cambridge IGCSE",
      level: "All",
    }
  ];
}

/**
 * Get flashcards for a specific deck ID.
 */
export function getMockCardsForDeck(deckId: string | number): Flashcard[] {
  const strId = String(deckId);
  const cleanSubject = strId.split("-").pop() || "General Study";
  const isConcepts = strId.includes("-concepts-");

  return generateMockFlashcards(cleanSubject, isConcepts, deckId);
}

// ──────────────────────────────────────────────────────────────────────────────
// QUESTION GENERATOR DATA
// ──────────────────────────────────────────────────────────────────────────────

function generateMockQuestions(subject: string, isAdv: boolean, quizId: string | number): QuizQuestion[] {
  const clean = subject.toLowerCase();

  // Chemistry Questions
  if (clean.includes("chemistry")) {
    if (!isAdv) {
      return [
        {
          id: `${quizId}-q1`,
          quiz_set_id: quizId,
          question: "Which of the following describes a physical change?",
          option_a: "Iron rusting in damp air",
          option_b: "Water evaporating to form water vapour",
          option_c: "Magnesium ribbon burning in oxygen",
          option_d: "Hydrochloric acid neutralizing sodium hydroxide",
          correct_answer: "B",
          explanation: "Evaporation is a physical change because no new chemical substances are formed; water molecules merely change state.",
          topic: "States of Matter",
          sort_order: 1,
        },
        {
          id: `${quizId}-q2`,
          quiz_set_id: quizId,
          question: "What is the atomic number of an element defined by?",
          option_a: "The number of neutrons in the nucleus",
          option_b: "The total number of protons and neutrons",
          option_c: "The number of protons in the nucleus",
          option_d: "The number of valence electrons",
          correct_answer: "C",
          explanation: "The atomic number represents the number of protons in an atom's nucleus, uniquely identifying the element.",
          topic: "Atomic Structure",
          sort_order: 2,
        },
        {
          id: `${quizId}-q3`,
          quiz_set_id: quizId,
          question: "Which of the following compounds is formed by ionic bonding?",
          option_a: "Carbon dioxide (CO2)",
          option_b: "Sodium chloride (NaCl)",
          option_c: "Methane (CH4)",
          option_d: "Water (H2O)",
          correct_answer: "B",
          explanation: "Sodium chloride (NaCl) is formed by the transfer of electrons from a metal (sodium) to a non-metal (chlorine), creating electrostatic attractions.",
          topic: "Chemical Bonding",
          sort_order: 3,
        },
        {
          id: `${quizId}-q4`,
          quiz_set_id: quizId,
          question: "What is the pH value of a strong acid?",
          option_a: "pH 7",
          option_b: "pH 14",
          option_c: "pH 2",
          option_d: "pH 9",
          correct_answer: "C",
          explanation: "Acidic solutions have a pH less than 7. A pH of 2 represents a high concentration of H+ ions, which is a strong acid.",
          topic: "Acids, Bases & Salts",
          sort_order: 4,
        },
        {
          id: `${quizId}-q5`,
          quiz_set_id: quizId,
          question: "Which gas is released when a metal reacts with dilute acid?",
          option_a: "Oxygen",
          option_b: "Hydrogen",
          option_c: "Carbon dioxide",
          option_d: "Chlorine",
          correct_answer: "B",
          explanation: "Reactive metals react with dilute acids to produce a salt and hydrogen gas.",
          topic: "Chemical Reactions",
          sort_order: 5,
        }
      ];
    } else {
      return [
        {
          id: `${quizId}-q1`,
          quiz_set_id: quizId,
          question: "Calculate the concentration in mol/dm³ of a solution containing 4.0 g of NaOH dissolved in 250 cm³ of water. (Ar of Na=23, O=16, H=1)",
          option_a: "0.1 mol/dm³",
          option_b: "0.4 mol/dm³",
          option_c: "1.0 mol/dm³",
          option_d: "2.5 mol/dm³",
          correct_answer: "B",
          explanation: "NaOH mass = 4.0g. Mr = 23+16+1 = 40. Moles = 4.0/40 = 0.1 mol. Volume = 0.250 dm³. Conc = Moles / Vol = 0.1 / 0.250 = 0.4 mol/dm³.",
          topic: "Stoichiometry & Mole Concept",
          sort_order: 1,
        },
        {
          id: `${quizId}-q2`,
          quiz_set_id: quizId,
          question: "During electrolysis of concentrated aqueous sodium chloride, what is produced at the anode?",
          option_a: "Hydrogen gas",
          option_b: "Sodium metal",
          option_c: "Chlorine gas",
          option_d: "Oxygen gas",
          correct_answer: "C",
          explanation: "Concentrated chloride ions are preferentially discharged at the anode (oxidation) to form chlorine gas.",
          topic: "Electrochemistry",
          sort_order: 2,
        },
        {
          id: `${quizId}-q3`,
          quiz_set_id: quizId,
          question: "Which statement about the Haber process catalyst is correct?",
          option_a: "Iron increases the yield of ammonia",
          option_b: "Iron increases the rate of reaction",
          option_c: "Nickel shifts the equilibrium position to the right",
          option_d: "Platinum increases activation energy",
          correct_answer: "B",
          explanation: "Catalysts increase the rate of chemical reactions by providing an alternative pathway with a lower activation energy, but do not affect the yield or equilibrium position.",
          topic: "Reversible Reactions",
          sort_order: 3,
        }
      ];
    }
  }

  // Physics Questions
  if (clean.includes("physics")) {
    if (!isAdv) {
      return [
        {
          id: `${quizId}-q1`,
          quiz_set_id: quizId,
          question: "What is the standard unit of force in the SI system?",
          option_a: "Joule (J)",
          option_b: "Newton (N)",
          option_c: "Watt (W)",
          option_d: "Pascal (Pa)",
          correct_answer: "B",
          explanation: "The Newton is the SI unit of force, defined as the force needed to accelerate 1 kg of mass at a rate of 1 m/s².",
          topic: "General Physics",
          sort_order: 1,
        },
        {
          id: `${quizId}-q2`,
          quiz_set_id: quizId,
          question: "Which of the following is a vector quantity?",
          option_a: "Speed",
          option_b: "Distance",
          option_c: "Velocity",
          option_d: "Time",
          correct_answer: "C",
          explanation: "Velocity has both magnitude (speed) and direction, making it a vector quantity, unlike speed, distance, or time which are scalars.",
          topic: "Forces & Motion",
          sort_order: 2,
        },
        {
          id: `${quizId}-q3`,
          quiz_set_id: quizId,
          question: "What type of wave is sound in air?",
          option_a: "Transverse",
          option_b: "Longitudinal",
          option_c: "Electromagnetic",
          option_d: "Micro-wave",
          correct_answer: "B",
          explanation: "Sound waves in air are longitudinal because particles of the medium vibrate parallel to the direction of wave travel.",
          topic: "Waves",
          sort_order: 3,
        }
      ];
    } else {
      return [
        {
          id: `${quizId}-q1`,
          quiz_set_id: quizId,
          question: "A block of mass 5.0 kg is pulled along a friction-free surface with a force of 15 N. What is its acceleration?",
          option_a: "0.33 m/s²",
          option_b: "3.0 m/s²",
          option_c: "75 m/s²",
          option_d: "10 m/s²",
          correct_answer: "B",
          explanation: "Using Newton's Second Law: a = F / m = 15 N / 5.0 kg = 3.0 m/s².",
          topic: "Newtonian Mechanics",
          sort_order: 1,
        },
        {
          id: `${quizId}-q2`,
          quiz_set_id: quizId,
          question: "A step-down transformer has 800 turns on its primary coil and 40 turns on its secondary coil. If the primary voltage is 240 V, calculate the secondary voltage.",
          option_a: "12 V",
          option_b: "48 V",
          option_c: "4800 V",
          option_d: "24 V",
          correct_answer: "A",
          explanation: "Using the transformer equation Vs/Vp = Ns/Np: Vs = Vp * (Ns / Np) = 240 * (40 / 800) = 12 V.",
          topic: "Electricity & Magnetism",
          sort_order: 2,
        }
      ];
    }
  }

  // Biology Questions
  if (clean.includes("biology")) {
    return [
      {
        id: `${quizId}-q1`,
        quiz_set_id: quizId,
        question: "Which organelle is the site of aerobic respiration in eukaryotic cells?",
        option_a: "Chloroplast",
        option_b: "Ribosome",
        option_c: "Mitochondrion",
        option_d: "Nucleus",
        correct_answer: "C",
        explanation: "Mitochondria are the powerhouses of the cell where aerobic respiration occurs, producing ATP for energy.",
        topic: "Cell Structure & Function",
        sort_order: 1,
      },
      {
        id: `${quizId}-q2`,
        quiz_set_id: quizId,
        question: "What is the primary function of root hair cells in plants?",
        option_a: "Photosynthesis",
        option_b: "Absorption of water and mineral ions",
        option_c: "Gas exchange",
        option_d: "Support and structure",
        correct_answer: "B",
        explanation: "Root hair cells have a large surface area that maximizes absorption of water (via osmosis) and mineral ions (via active transport) from the soil.",
        topic: "Plant Nutrition & Transport",
        sort_order: 2,
      },
      {
        id: `${quizId}-q3`,
        quiz_set_id: quizId,
        question: "Which of the following represents the correct word equation for photosynthesis?",
        option_a: "Carbon dioxide + water -> glucose + oxygen",
        option_b: "Glucose + oxygen -> carbon dioxide + water",
        option_c: "Carbon dioxide + glucose -> water + oxygen",
        option_d: "Oxygen + water -> glucose + carbon dioxide",
        correct_answer: "A",
        explanation: "Photosynthesis is the process by which light energy converts carbon dioxide and water into chemical energy (glucose) and oxygen gas.",
        topic: "Bioenergetics",
        sort_order: 3,
      }
    ];
  }

  // Mathematics Questions
  if (clean.includes("math")) {
    return [
      {
        id: `${quizId}-q1`,
        quiz_set_id: quizId,
        question: "Factorise completely: 3x² - 12x",
        option_a: "3x(x - 4)",
        option_b: "3(x² - 4x)",
        option_c: "x(3x - 12)",
        option_d: "3x(x + 4)",
        correct_answer: "A",
        explanation: "The greatest common factor is 3x. Factoring it out leaves x in the first term and -4 in the second term: 3x(x - 4).",
        topic: "Algebra",
        sort_order: 1,
      },
      {
        id: `${quizId}-q2`,
        quiz_set_id: quizId,
        question: "Solve the equation: 5x + 3 = 2x + 18",
        option_a: "x = 3",
        option_b: "x = 5",
        option_c: "x = 7",
        option_d: "x = 15",
        correct_answer: "B",
        explanation: "Subtract 2x from both sides: 3x + 3 = 18. Subtract 3: 3x = 15. Divide by 3: x = 5.",
        topic: "Equations",
        sort_order: 2,
      },
      {
        id: `${quizId}-q3`,
        quiz_set_id: quizId,
        question: "A triangle has sides of length 6 cm and 8 cm with a right angle between them. What is the length of the hypotenuse?",
        option_a: "10 cm",
        option_b: "14 cm",
        option_c: "12 cm",
        option_d: "9.8 cm",
        correct_answer: "A",
        explanation: "Using Pythagoras' Theorem: c² = a² + b² = 6² + 8² = 36 + 64 = 100. Taking square root: c = 10 cm.",
        topic: "Geometry & Trigonometry",
        sort_order: 3,
      }
    ];
  }

  // Business Studies / Accounting / Economics Questions
  if (clean.includes("business") || clean.includes("accounting") || clean.includes("econom")) {
    return [
      {
        id: `${quizId}-q1`,
        quiz_set_id: quizId,
        question: "What is primary market research?",
        option_a: "Analyzing data from textbooks and news articles",
        option_b: "Gathering new, first-hand data directly from potential customers",
        option_c: "Studying market reports published by competitors",
        option_d: "Looking up trade databases online",
        correct_answer: "B",
        explanation: "Primary research is field research that collects fresh, unique data directly from sources (e.g. surveys, focus groups).",
        topic: "Marketing",
        sort_order: 1,
      },
      {
        id: `${quizId}-q2`,
        quiz_set_id: quizId,
        question: "Which of the following best defines opportunity cost?",
        option_a: "The monetary expense of buying goods",
        option_b: "The next best alternative foregone when making a choice",
        option_c: "The time spent studying instead of working",
        option_d: "The total production cost of a resource",
        correct_answer: "B",
        explanation: "Opportunity cost represents the benefit of the next best choice that had to be given up to pursue a chosen action.",
        topic: "Basic Economic Problem",
        sort_order: 2,
      },
      {
        id: `${quizId}-q3`,
        quiz_set_id: quizId,
        question: "What does double-entry bookkeeping state?",
        option_a: "Every transaction is written twice in the same ledger page",
        option_b: "Every transaction has an equal and opposite debit and credit entry",
        option_c: "Transactions are verified by two separate accountants",
        option_d: "Total assets must equal total liabilities minus capital",
        correct_answer: "B",
        explanation: "The core principle of double-entry accounting is that every business transaction affects at least two accounts with equal debits and credits.",
        topic: "Double-Entry Bookkeeping",
        sort_order: 3,
      }
    ];
  }

  // Fallback / Generic Questions for other IGCSE Subjects
  return [
    {
      id: `${quizId}-q1`,
      quiz_set_id: quizId,
      question: `Which of the following is a primary goal when studying IGCSE ${subject}?`,
      option_a: "Memorising syllabus numbers without context",
      option_b: "Developing critical understanding, evaluation, and analytical skills",
      option_c: "Bypassing worked solutions in exam papers",
      option_d: "Relying purely on historical guesswork",
      correct_answer: "B",
      explanation: "Cambridge IGCSE aims to cultivate deep understanding, critical analysis, and practical application of knowledge in all subjects.",
      topic: "Core Skills",
      sort_order: 1,
    },
    {
      id: `${quizId}-q2`,
      quiz_set_id: quizId,
      question: "Which method is most effective for long-term retention of core concepts?",
      option_a: "Passive reading of notes repeatedly",
      option_b: "Active recall and spaced repetition practice",
      option_c: "Cramming the night before the exam",
      option_d: "Highlighting every line in a textbook",
      correct_answer: "B",
      explanation: "Active recall testing and spaced retrieval strengthen memory pathways and lead to the best long-term knowledge retention.",
      topic: "Revision Strategies",
      sort_order: 2,
    },
    {
      id: `${quizId}-q3`,
      quiz_set_id: quizId,
      question: "When evaluating sources or data in this syllabus, what is critical?",
      option_a: "Accepting all claims as factual immediately",
      option_b: "Assessing the reliability, bias, validity, and context of the evidence",
      option_c: "Ignoring conflicting datasets",
      option_d: "Only referencing old publications",
      correct_answer: "B",
      explanation: "Evaluation requires critical assessment of the source material's validity, reliability, and background context to form balanced arguments.",
      topic: "Analytical Methods",
      sort_order: 3,
    }
  ];
}

// ──────────────────────────────────────────────────────────────────────────────
// FLASHCARD GENERATOR DATA
// ──────────────────────────────────────────────────────────────────────────────

function generateMockFlashcards(subject: string, isConcepts: boolean, deckId: string | number): Flashcard[] {
  const clean = subject.toLowerCase();

  // Chemistry Decks
  if (clean.includes("chemistry")) {
    if (!isConcepts) {
      return [
        { id: `${deckId}-f1`, deck_id: deckId, front: "Proton", back: "A positively charged subatomic particle found in the nucleus of an atom, with a relative mass of 1.", topic: "Atomic Structure" },
        { id: `${deckId}-f2`, deck_id: deckId, front: "Isotope", back: "Atoms of the same element with the same number of protons but different numbers of neutrons.", topic: "Atomic Structure" },
        { id: `${deckId}-f3`, deck_id: deckId, front: "Covalent Bond", back: "A chemical bond formed when two non-metal atoms share pairs of electrons to achieve stable outer shells.", topic: "Chemical Bonding" },
        { id: `${deckId}-f4`, deck_id: deckId, front: "Catalyst", back: "A substance that increases the rate of reaction by lowering the activation energy, without being consumed in the reaction.", topic: "Chemical Reactions" },
        { id: `${deckId}-f5`, deck_id: deckId, front: "Electrolysis", back: "The breakdown of an ionic compound, molten or in aqueous solution, by the passage of electricity.", topic: "Electrochemistry" }
      ];
    } else {
      return [
        { id: `${deckId}-f1`, deck_id: deckId, front: "How does temperature affect chemical reaction rate?", back: "Increasing temperature increases the kinetic energy of particles, causing them to move faster. This results in more frequent collisions and a higher proportion of collisions having energy >= activation energy.", topic: "Rates of Reaction" },
        { id: `${deckId}-f2`, deck_id: deckId, front: "Why do ionic compounds have high melting points?", back: "They have giant ionic lattices with strong electrostatic forces of attraction between oppositely charged ions, which require a large amount of thermal energy to break.", topic: "Structure & Bonding" },
        { id: `${deckId}-f3`, deck_id: deckId, front: "Explain the term dynamic equilibrium.", back: "A state in a reversible reaction in a closed system where the forward and backward reactions happen at the exact same rate, keeping reactant and product concentrations constant.", topic: "Reversible Reactions" }
      ];
    }
  }

  // Physics Decks
  if (clean.includes("physics")) {
    if (!isConcepts) {
      return [
        { id: `${deckId}-f1`, deck_id: deckId, front: "Acceleration", back: "The rate of change of velocity over time. Measured in m/s².", topic: "Mechanics" },
        { id: `${deckId}-f2`, deck_id: deckId, front: "Refraction", back: "The bending of a wave (like light) as it passes from one medium to another of different optical density, due to a change in speed.", topic: "Light & Waves" },
        { id: `${deckId}-f3`, deck_id: deckId, front: "Specific Heat Capacity", back: "The energy required to raise the temperature of 1 kg of a substance by 1°C. Unit: J/(kg°C).", topic: "Thermal Physics" },
        { id: `${deckId}-f4`, deck_id: deckId, front: "Half-Life", back: "The time taken for half the radioactive nuclei in a sample to decay.", topic: "Radioactivity" }
      ];
    } else {
      return [
        { id: `${deckId}-f1`, deck_id: deckId, front: "State Newton's First Law of Motion", back: "An object will remain at rest or continue to move at a constant velocity in a straight line unless acted upon by a resultant external force.", topic: "Forces & Motion" },
        { id: `${deckId}-f2`, deck_id: deckId, front: "Explain how a generator produces electricity", back: "A coil rotates in a magnetic field, cutting magnetic field lines. This induces an electromotive force (e.m.f.) and alternating current in the coil via electromagnetic induction.", topic: "Electromagnetism" }
      ];
    }
  }

  // Math Decks
  if (clean.includes("math")) {
    return [
      { id: `${deckId}-f1`, deck_id: deckId, front: "Pythagoras' Theorem", back: "In a right-angled triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides: a² + b² = c².", topic: "Geometry" },
      { id: `${deckId}-f2`, deck_id: deckId, front: "Gradient Formula", back: "Given two points (x1, y1) and (x2, y2), the gradient m = (y2 - y1) / (x2 - x1).", topic: "Algebra" },
      { id: `${deckId}-f3`, deck_id: deckId, front: "Quadratic Formula", back: "To solve ax² + bx + c = 0, x = [-b ± √(b² - 4ac)] / 2a.", topic: "Algebra" },
      { id: `${deckId}-f4`, deck_id: deckId, front: "Sine Rule", back: "a/sin(A) = b/sin(B) = c/sin(C) for any triangle.", topic: "Trigonometry" }
    ];
  }

  // Fallback Decks
  return [
    { id: `${deckId}-f1`, deck_id: deckId, front: "Active Recall", back: "Testing your brain by trying to retrieve information rather than passively reviewing textbook pages.", topic: "Revision Method" },
    { id: `${deckId}-f2`, deck_id: deckId, front: "Spaced Repetition", back: "Reviewing materials at increasing intervals of time to optimize brain retention and prevent forgetting.", topic: "Revision Method" },
    { id: `${deckId}-f3`, deck_id: deckId, front: "Syllabus Objective", back: "Specific knowledge or skill statement set out by the exam board that students must master for the exam.", topic: "Exam Prep" },
    { id: `${deckId}-f4`, deck_id: deckId, front: "Command Word", back: "Verbs like 'Explain', 'Describe', or 'Evaluate' that tell the candidate exactly how to construct their exam answer.", topic: "Exam Prep" }
  ];
}
