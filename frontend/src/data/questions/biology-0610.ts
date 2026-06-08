import { TopicQuestion } from "@/types/content";

export const biologyQuestions: TopicQuestion[] = [
  // ─── obj-1-1: Characteristics of Living Organisms ───────────────────────
  {
    id: "bio-1-1-e",
    subjectId: "biology-0610",
    objectiveId: "obj-1-1",
    difficulty: "Easy",
    marks: 4,
    question:
      "State four characteristics of living organisms. Use the correct biological terms.",
    workedSolution: {
      steps: [
        "Think of MRS GREN: Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion, Nutrition.",
        "Choose any four and state them clearly — one mark each.",
      ],
      markSchemePoints: [
        "Movement — organisms can move (not necessarily locomotion)",
        "Respiration — release of energy from food",
        "Sensitivity / Response to stimuli — ability to detect and respond to changes in the environment",
        "Growth — permanent increase in size and dry mass",
        "Reproduction — production of offspring",
        "Excretion — removal of waste products of metabolism",
        "Nutrition — taking in or making food for energy and growth",
      ],
      examTip:
        "You only need four — choose the ones you can define most confidently. 'Reproduction' and 'respiration' are common choices.",
    },
  },
  {
    id: "bio-1-1-m",
    subjectId: "biology-0610",
    objectiveId: "obj-1-1",
    difficulty: "Medium",
    marks: 3,
    question:
      "Explain why movement is considered a characteristic of all living organisms, including plants, even though plants cannot move from place to place.",
    workedSolution: {
      steps: [
        "Movement as a characteristic does NOT mean locomotion (moving the whole body from place to place).",
        "It refers to movement of parts of an organism — plants show movement e.g. growing towards light (phototropism), roots growing downwards.",
        "At the cellular level, cytoplasm streams within cells, chloroplasts move towards light.",
      ],
      markSchemePoints: [
        "Movement does not require locomotion / movement of entire body (1)",
        "Named example of plant movement, e.g. growing shoots bend towards light / roots grow towards gravity / stomata open and close (1)",
        "All living cells show internal movement / cytoplasmic streaming (1)",
      ],
      examTip:
        "Never say 'plants cannot move' — the examiner wants you to distinguish between locomotion and movement of parts.",
    },
  },
  {
    id: "bio-1-1-h",
    subjectId: "biology-0610",
    objectiveId: "obj-1-1",
    difficulty: "Hard",
    marks: 4,
    question:
      "A student observes a fire burning. The fire grows larger, releases energy, responds to wind, and produces waste gases. Suggest why fire is NOT classified as a living organism. Refer to at least two characteristics of living organisms in your answer.",
    workedSolution: {
      steps: [
        "Fire appears to show some life-like processes, so you need to explain why these don't qualify.",
        "Reproduction: fire cannot produce offspring independently — it cannot replicate itself without an external fuel source; there is no genetic material involved.",
        "Nutrition: fire does not take in organic molecules or carry out photosynthesis — it oxidises fuel, a purely chemical process.",
        "Excretion: fire releases CO₂ and smoke, but this is a combustion reaction — not the removal of metabolic waste produced inside cells.",
        "Growth is not a true increase in organised living mass — fire grows by consuming more fuel, not by cell division or protein synthesis.",
      ],
      markSchemePoints: [
        "Fire does not carry out reproduction (cannot produce offspring / no genetic material / no cells) (1)",
        "Fire does not have nutrition / does not synthesise organic compounds / only breaks down fuel by combustion (1)",
        "Fire has no cells / is not made of cells / no cell membrane / no nucleus (1)",
        "Any second valid characteristic with correct explanation, e.g. no excretion of metabolic waste / no regulation / no growth by cell division (1)",
      ],
      examTip:
        "The key argument is always: fire has no cells and no genetic material. Reference the cellular definition of life for top marks.",
    },
  },

  // ─── obj-1-2: Classification ─────────────────────────────────────────────
  {
    id: "bio-1-2-e",
    subjectId: "biology-0610",
    objectiveId: "obj-1-2",
    difficulty: "Easy",
    marks: 3,
    question:
      "State the five kingdoms used in biological classification and give one example organism for each.",
    workedSolution: {
      steps: [
        "The five kingdoms are: Animalia, Plantae, Fungi, Protoctista (Protista), Prokaryotae (Monera/Bacteria).",
        "Give one example for each.",
      ],
      markSchemePoints: [
        "Animalia — e.g. human / dog / fish (1)",
        "Plantae — e.g. rose / oak tree / moss (1)",
        "Fungi — e.g. mushroom / yeast / mould (1)",
        "Protoctista — e.g. Amoeba / Euglena / Plasmodium (1)",
        "Prokaryotae — e.g. Escherichia coli / Streptococcus / any named bacterium (1)",
        "(any 3 correct kingdom + example pairs for 3 marks)",
      ],
      examTip:
        "Learn the five kingdoms with one named example each. Yeast is a fungus — a common trick question.",
    },
  },
  {
    id: "bio-1-2-m",
    subjectId: "biology-0610",
    objectiveId: "obj-1-2",
    difficulty: "Medium",
    marks: 3,
    question:
      "Explain the binomial nomenclature system and state two rules that must be followed when writing a scientific name.",
    workedSolution: {
      steps: [
        "Binomial means 'two names' — every organism is given a two-part Latin name.",
        "First part = genus (generic name) — written with a capital letter.",
        "Second part = species (specific name) — written in lower case.",
        "Both parts are italicised when printed, or underlined when handwritten.",
      ],
      markSchemePoints: [
        "Two-part name consisting of genus and species (1)",
        "Genus name starts with capital letter; species name all lower case (1)",
        "Names are italicised (printed) or underlined (handwritten) (1)",
      ],
      examTip:
        "In an exam, always underline scientific names when writing by hand — this is a rule and examiners do check it.",
    },
  },
  {
    id: "bio-1-2-h",
    subjectId: "biology-0610",
    objectiveId: "obj-1-2",
    difficulty: "Hard",
    marks: 4,
    question:
      "A scientist discovers a new organism. It has a membrane-bound nucleus, cell walls made of chitin, and obtains nutrients by secreting enzymes onto food and absorbing the digested products. Identify the kingdom this organism belongs to, and justify your answer using all three pieces of evidence.",
    workedSolution: {
      steps: [
        "Identify the kingdom: Fungi.",
        "Evidence 1 — membrane-bound nucleus: this means it is eukaryotic (rules out Prokaryotae).",
        "Evidence 2 — cell walls made of chitin: plant cell walls are made of cellulose, animal cells have no cell wall; chitin is diagnostic of Fungi.",
        "Evidence 3 — extracellular digestion (secretes enzymes, absorbs products): this is saprophytic nutrition, characteristic of Fungi; animals ingest food, plants photosynthesise.",
      ],
      markSchemePoints: [
        "Kingdom: Fungi (1)",
        "Membrane-bound nucleus → eukaryote, not Prokaryotae (1)",
        "Chitin cell walls → not Plantae (cellulose), not Animalia (no cell wall) (1)",
        "Extracellular digestion / saprophytic nutrition → not Plantae or Animalia (1)",
      ],
      examTip:
        "Chitin cell wall is the single most important distinguishing feature of Fungi. Learn it — it appears regularly.",
    },
  },

  // ─── obj-2-1: Cell Structure ─────────────────────────────────────────────
  {
    id: "bio-2-1-e",
    subjectId: "biology-0610",
    objectiveId: "obj-2-1",
    difficulty: "Easy",
    marks: 3,
    question:
      "Name three structures found in plant cells but NOT in animal cells.",
    workedSolution: {
      steps: [
        "Plant cells have additional structures not present in animal cells.",
        "The three unique plant cell structures are: cell wall, chloroplasts, permanent vacuole.",
      ],
      markSchemePoints: [
        "Cell wall (made of cellulose) (1)",
        "Chloroplast(s) (1)",
        "Permanent / large vacuole (containing cell sap) (1)",
      ],
      examTip:
        "Do not confuse vacuole — animal cells can have temporary vacuoles, but only plant cells have a large permanent vacuole. The word 'permanent' is important.",
    },
  },
  {
    id: "bio-2-1-m",
    subjectId: "biology-0610",
    objectiveId: "obj-2-1",
    difficulty: "Medium",
    marks: 4,
    question:
      "Explain how the structure of the mitochondrion is related to its function in aerobic respiration.",
    workedSolution: {
      steps: [
        "Function: mitochondria carry out aerobic respiration — releasing ATP (energy) from glucose and oxygen.",
        "Double membrane: outer membrane encloses the organelle; inner membrane is highly folded.",
        "Inner membrane folds (cristae): greatly increase surface area for reactions (electron transport chain) to occur.",
        "Matrix: the fluid-filled interior contains enzymes for the Krebs cycle and has its own DNA and ribosomes.",
        "Many mitochondria are found in cells with high energy demands (e.g. muscle cells, sperm cells) — this matches the link between structure and function.",
      ],
      markSchemePoints: [
        "Double membrane — outer and inner (1)",
        "Inner membrane folded into cristae — increases surface area for respiration (1)",
        "Matrix contains enzymes for aerobic respiration / Krebs cycle (1)",
        "Link: cells that need more energy (e.g. muscle) have more mitochondria / more cristae (1)",
      ],
      examTip:
        "Always connect a structural feature to its function: 'cristae increase surface area SO THAT more enzymes can fit, allowing faster ATP production'.",
    },
  },
  {
    id: "bio-2-1-h",
    subjectId: "biology-0610",
    objectiveId: "obj-2-1",
    difficulty: "Hard",
    marks: 6,
    question:
      "Compare and contrast a prokaryotic cell (e.g. a bacterium) with a eukaryotic cell (e.g. a plant cell). Your answer should refer to at least four named features.",
    workedSolution: {
      steps: [
        "Prokaryotic cells are smaller (typically 1–10 µm) than eukaryotic cells (10–100 µm).",
        "DNA location: prokaryotes have a single circular chromosome in the cytoplasm (no nucleus); eukaryotes have linear chromosomes enclosed in a membrane-bound nucleus.",
        "Membrane-bound organelles: absent in prokaryotes; present in eukaryotes (e.g. mitochondria, chloroplasts, ER).",
        "Cell wall: prokaryotes have a cell wall made of murein/peptidoglycan; plant eukaryotes have cellulose; animal eukaryotes have none.",
        "Ribosomes: prokaryotes have smaller (70S) ribosomes; eukaryotes have larger (80S) ribosomes.",
        "Plasmids: prokaryotes may have small circular DNA plasmids; eukaryotes do not (generally).",
      ],
      markSchemePoints: [
        "Prokaryotes have no membrane-bound nucleus; eukaryotes have a nucleus enclosed in a nuclear envelope (1)",
        "Prokaryotic DNA is circular and in cytoplasm; eukaryotic DNA is linear and in nucleus (1)",
        "Prokaryotes have no membrane-bound organelles (mitochondria/chloroplasts); eukaryotes do (1)",
        "Prokaryotes have smaller ribosomes (70S); eukaryotes have larger ribosomes (80S) (1)",
        "Prokaryotes may have plasmids; eukaryotes generally do not (1)",
        "Prokaryotes are generally smaller than eukaryotes (1)",
      ],
      examTip:
        "The most important distinction is the nucleus — 'pro-karyote' literally means 'before nucleus'. Always start with this point.",
    },
  },

  // ─── obj-2-2: Levels of Organisation ─────────────────────────────────────
  {
    id: "bio-2-2-e",
    subjectId: "biology-0610",
    objectiveId: "obj-2-2",
    difficulty: "Easy",
    marks: 1,
    question:
      "Place the following levels of organisation in order from smallest to largest: organ system, organism, cell, tissue, organ.",
    workedSolution: {
      steps: [
        "Think of the hierarchy: the cell is the basic unit, cells group into tissues, tissues into organs, organs into organ systems, organ systems make an organism.",
      ],
      markSchemePoints: [
        "Correct order: cell → tissue → organ → organ system → organism (1 mark for all five in correct order)",
      ],
      examTip:
        "Use the mnemonic: 'Clever Tigers Often Attack Ostriches' — Cell, Tissue, Organ, (organ) system, Organism.",
    },
  },
  {
    id: "bio-2-2-m",
    subjectId: "biology-0610",
    objectiveId: "obj-2-2",
    difficulty: "Medium",
    marks: 3,
    question:
      "Explain what is meant by cell differentiation and why it is important in multicellular organisms.",
    workedSolution: {
      steps: [
        "Cell differentiation: the process by which cells become specialised for a particular function.",
        "During development, cells with the same DNA develop different structures and express different genes.",
        "Importance: allows division of labour — different cells are optimised for different tasks, making the organism more efficient overall.",
        "Examples: red blood cells (no nucleus, biconcave shape — maximises haemoglobin, increases surface area for O₂ diffusion); nerve cells (long axon — carries impulses over distance).",
      ],
      markSchemePoints: [
        "Cell differentiation = process by which unspecialised cells become specialised (1)",
        "Cells develop different structures / express different genes despite having the same DNA (1)",
        "Division of labour — specialised cells carry out their function more efficiently / named example of specialised cell and its function (1)",
      ],
      examTip:
        "Always give a named example of a specialised cell with an explanation of how its structure fits its function.",
    },
  },
  {
    id: "bio-2-2-h",
    subjectId: "biology-0610",
    objectiveId: "obj-2-2",
    difficulty: "Hard",
    marks: 6,
    question:
      "Explain how palisade mesophyll cells are adapted for photosynthesis at the cell level, the tissue level, and the organ level.",
    workedSolution: {
      steps: [
        "Cell level: palisade cells are elongated and packed with many chloroplasts; the large vacuole pushes chloroplasts to the edge of the cell closest to the cell membrane, maximising light absorption.",
        "Tissue level: palisade tissue is found near the top of the leaf (just below the upper epidermis) to maximise exposure to sunlight; cells are tightly packed to intercept light before it reaches lower layers.",
        "Organ level (leaf): the leaf is flat and thin — large surface area to volume ratio maximises light absorption; transparent upper epidermis allows light through; stomata in lower epidermis allow CO₂ in and O₂ out; network of veins delivers water (xylem) and removes sugars (phloem).",
      ],
      markSchemePoints: [
        "Cell: many chloroplasts to absorb light for photosynthesis (1)",
        "Cell: elongated / columnar shape — more chloroplasts can be packed vertically (1)",
        "Tissue: positioned near upper surface of leaf to receive maximum light (1)",
        "Tissue: tightly packed cells — little air space, maximum light interception (1)",
        "Organ: flat / thin leaf — large surface area for light absorption (1)",
        "Organ: stomata for gas exchange (CO₂ in, O₂ out) / veins for water supply and sugar removal (1)",
      ],
      examTip:
        "Exam questions at this level expect you to explicitly link each structural feature to the function it enables — never list without explaining.",
    },
  },

  // ─── obj-3-1: Diffusion and Osmosis ──────────────────────────────────────
  {
    id: "bio-3-1-e",
    subjectId: "biology-0610",
    objectiveId: "obj-3-1",
    difficulty: "Easy",
    marks: 2,
    question: "Define osmosis.",
    workedSolution: {
      steps: [
        "Osmosis is a specific type of diffusion involving water only.",
        "It requires a partially permeable membrane.",
        "Water moves from a region of higher water potential (dilute solution) to lower water potential (concentrated solution).",
      ],
      markSchemePoints: [
        "Movement of water molecules (not 'particles') (1)",
        "From a region of higher water potential / dilute solution to lower water potential / concentrated solution, across a partially permeable membrane (1)",
      ],
      examTip:
        "You MUST say 'water molecules' — writing 'particles' or 'substances' will lose you the mark every time.",
    },
  },
  {
    id: "bio-3-1-m",
    subjectId: "biology-0610",
    objectiveId: "obj-3-1",
    difficulty: "Medium",
    marks: 4,
    question:
      "A potato cylinder is placed in a concentrated salt solution. Describe what happens to the potato cylinder and explain why, using your knowledge of osmosis.",
    workedSolution: {
      steps: [
        "Identify direction of osmosis: the salt solution is more concentrated (lower water potential) than the potato cells (higher water potential).",
        "Therefore water moves by osmosis out of the potato cells, across the partially permeable cell membrane, into the salt solution.",
        "Effect on cells: cells lose water → cytoplasm shrinks → cell membrane pulls away from cell wall → cells become plasmolysed (plant cell) or crenated (animal cell).",
        "Macroscopic effect: the potato cylinder becomes lighter in mass, softer, and more flaccid/limp.",
      ],
      markSchemePoints: [
        "Water moves out of the potato by osmosis (1)",
        "From higher water potential (potato) to lower water potential (salt solution) (1)",
        "Cells lose water / become plasmolysed / cell membrane pulls away from cell wall (1)",
        "Potato cylinder decreases in mass / becomes flaccid / softer (1)",
      ],
      examTip:
        "Draw the direction of water movement with an arrow in your mind before writing. Mass decrease = water left the cells.",
    },
  },
  {
    id: "bio-3-1-h",
    subjectId: "biology-0610",
    objectiveId: "obj-3-1",
    difficulty: "Hard",
    marks: 6,
    question:
      "Explain how the fluid-mosaic model of the cell membrane accounts for its selective permeability, and explain the roles of diffusion and osmosis in this context.",
    workedSolution: {
      steps: [
        "Fluid-mosaic model: the membrane consists of a phospholipid bilayer with proteins embedded within it ('mosaic'); the structure is dynamic/fluid.",
        "Phospholipid bilayer: hydrophobic fatty acid tails face inward, hydrophilic phosphate heads face outward. Small non-polar molecules (O₂, CO₂) can pass freely through the lipid core.",
        "Selective permeability: large molecules (glucose, proteins) and charged ions cannot pass through the lipid core; they require specific protein channels or carriers.",
        "Diffusion: movement of molecules from high to low concentration down the concentration gradient — passive, no ATP required. Gases and small molecules diffuse through the bilayer.",
        "Osmosis: a special case of diffusion — only water molecules move through the bilayer (and aquaporin channels) from high to low water potential across the partially permeable membrane.",
        "Therefore the membrane controls which substances enter/leave, maintaining homeostasis.",
      ],
      markSchemePoints: [
        "Phospholipid bilayer described (hydrophilic heads outward, hydrophobic tails inward) (1)",
        "Non-polar / small molecules pass freely through lipid core, e.g. O₂, CO₂ (1)",
        "Proteins act as channels or carriers for ions / larger molecules — selective permeability (1)",
        "Diffusion: net movement from high to low concentration, passive, no energy required (1)",
        "Osmosis: movement of water molecules only, across partially permeable membrane, from high to low water potential (1)",
        "Selective permeability maintains internal environment / homeostasis (1)",
      ],
      examTip:
        "For 6-mark questions, aim for 6 distinct, well-phrased points. Use connectives like 'therefore' and 'because' to chain your reasoning.",
    },
  },

  // ─── obj-3-2: Active Transport ────────────────────────────────────────────
  {
    id: "bio-3-2-e",
    subjectId: "biology-0610",
    objectiveId: "obj-3-2",
    difficulty: "Easy",
    marks: 2,
    question:
      "State two ways in which active transport differs from diffusion.",
    workedSolution: {
      steps: [
        "Think about direction, energy requirement, and speed.",
        "Diffusion is passive (no energy), moves down a concentration gradient.",
        "Active transport requires ATP energy and moves against the concentration gradient.",
      ],
      markSchemePoints: [
        "Active transport requires energy (ATP) / diffusion does not require energy (1)",
        "Active transport moves substances against the concentration gradient; diffusion moves substances down the concentration gradient (1)",
        "(Also accept: active transport requires carrier proteins; diffusion does not necessarily require proteins)",
      ],
      examTip:
        "The two key differences are: ENERGY (ATP required) and DIRECTION (against the gradient). Memorise these.",
    },
  },
  {
    id: "bio-3-2-m",
    subjectId: "biology-0610",
    objectiveId: "obj-3-2",
    difficulty: "Medium",
    marks: 3,
    question:
      "Explain why root hair cells use active transport to absorb mineral ions from the soil, rather than relying on diffusion.",
    workedSolution: {
      steps: [
        "Concentration of mineral ions in the soil is typically low — often lower than the concentration inside the root hair cells.",
        "This means diffusion cannot occur (diffusion moves from high to low concentration).",
        "Active transport allows the plant to move mineral ions against the concentration gradient, from low concentration (soil) into the root hair cell (higher concentration).",
        "This requires energy from respiration (ATP).",
      ],
      markSchemePoints: [
        "Concentration of mineral ions in soil is lower than inside root hair cells (1)",
        "Diffusion cannot move substances against a concentration gradient (1)",
        "Active transport uses ATP / energy from respiration to move ions against the concentration gradient (1)",
      ],
      examTip:
        "This question requires you to justify why diffusion is insufficient BEFORE explaining active transport. Don't skip the first step.",
    },
  },
  {
    id: "bio-3-2-h",
    subjectId: "biology-0610",
    objectiveId: "obj-3-2",
    difficulty: "Hard",
    marks: 5,
    question:
      "An experiment shows that cells treated with a metabolic inhibitor (which blocks aerobic respiration) can no longer absorb mineral ions against a concentration gradient. Explain these results fully.",
    workedSolution: {
      steps: [
        "Active transport requires ATP as an energy source.",
        "ATP is produced mainly by aerobic respiration in the mitochondria.",
        "The metabolic inhibitor blocks aerobic respiration → ATP is no longer produced.",
        "Without ATP, the carrier proteins in the cell membrane cannot be activated to transport mineral ions against the gradient.",
        "Therefore, active transport stops and ions cannot be absorbed against the concentration gradient.",
        "Ions could still enter by diffusion IF they were at higher concentration outside the cell, but against the gradient is not possible.",
      ],
      markSchemePoints: [
        "Active transport requires ATP / energy (1)",
        "ATP is produced by aerobic respiration (in mitochondria) (1)",
        "Inhibitor blocks respiration → ATP not produced (1)",
        "Without ATP, carrier proteins cannot function / active transport stops (1)",
        "Therefore ions cannot be moved against concentration gradient (1)",
      ],
      examTip:
        "Always trace the chain: inhibitor → respiration blocked → no ATP → carrier proteins fail → active transport stops. One sentence per link earns marks.",
    },
  },

  // ─── obj-4-1: Biological Molecules ───────────────────────────────────────
  {
    id: "bio-4-1-e",
    subjectId: "biology-0610",
    objectiveId: "obj-4-1",
    difficulty: "Easy",
    marks: 2,
    question:
      "State the chemical elements present in (a) carbohydrates and (b) proteins.",
    workedSolution: {
      steps: [
        "Carbohydrates contain carbon (C), hydrogen (H), and oxygen (O).",
        "Proteins contain carbon (C), hydrogen (H), oxygen (O), and nitrogen (N) — and sometimes sulfur (S).",
      ],
      markSchemePoints: [
        "(a) Carbohydrates: carbon, hydrogen, oxygen (C, H, O) (1)",
        "(b) Proteins: carbon, hydrogen, oxygen, nitrogen (C, H, O, N) — sulfur also accepted (1)",
      ],
      examTip:
        "The key difference is nitrogen (and sulfur) in proteins. Lipids also contain C, H, O — same as carbohydrates. Use elements to distinguish them.",
    },
  },
  {
    id: "bio-4-1-m",
    subjectId: "biology-0610",
    objectiveId: "obj-4-1",
    difficulty: "Medium",
    marks: 4,
    question:
      "Describe how you would test a food sample for the presence of (a) starch and (b) reducing sugars. Include the reagent, procedure, and positive result for each.",
    workedSolution: {
      steps: [
        "(a) Starch test — Iodine solution: add a few drops of iodine solution to the food sample. Positive result: colour changes from yellow-brown to blue-black.",
        "(b) Reducing sugar test — Benedict's solution: add Benedict's solution to the food sample and heat in a water bath. Positive result: colour changes from blue to brick-red/orange precipitate.",
      ],
      markSchemePoints: [
        "(a) Reagent: iodine solution (1)",
        "(a) Positive result: blue-black colour (1)",
        "(b) Reagent: Benedict's solution + heat/water bath (1)",
        "(b) Positive result: brick-red / orange / yellow precipitate (1)",
      ],
      examTip:
        "Benedict's test MUST be heated — the examiner will not award the mark if you omit this. Always mention the water bath.",
    },
  },
  {
    id: "bio-4-1-h",
    subjectId: "biology-0610",
    objectiveId: "obj-4-1",
    difficulty: "Hard",
    marks: 6,
    question:
      "Compare starch and glycogen as energy storage molecules. In your answer, refer to their structure, where they are stored, and why they are suited to their storage roles.",
    workedSolution: {
      steps: [
        "Both are polysaccharides made of many glucose units joined by glycosidic bonds; both are insoluble in water (suitable for storage — do not affect osmosis).",
        "Starch: found in plants; made of amylose (unbranched helix) and amylopectin (branched); stored in starch grains inside chloroplasts and other plant cells.",
        "Glycogen: found in animals (and fungi); highly branched structure with many free ends; stored mainly in liver and muscle cells.",
        "Branching in glycogen: more free ends means glucose molecules can be added or removed more quickly → rapid mobilisation of energy when needed (e.g. during exercise).",
        "Starch: lower degree of branching → slower glucose release → suits plants which have less sudden energy demands.",
        "Both insoluble → do not change water potential of the cell (no osmotic effect on surrounding cells).",
      ],
      markSchemePoints: [
        "Both are polysaccharides / polymers of glucose (1)",
        "Both insoluble — do not affect water potential / osmosis (1)",
        "Starch found in plants (chloroplasts / starch grains); glycogen found in animals (liver / muscle) (1)",
        "Glycogen is more highly branched than starch (1)",
        "More branches → more free ends → faster hydrolysis / faster glucose release for rapid energy demand (1)",
        "Starch: amylose (unbranched) and amylopectin (branched) — slower release suits plant metabolism (1)",
      ],
      examTip:
        "The branching point is the highest-level mark — many students can state where they're stored but miss the structural reason glycogen is more reactive.",
    },
  },

  // ─── obj-5-1: Enzyme Action ───────────────────────────────────────────────
  {
    id: "bio-5-1-e",
    subjectId: "biology-0610",
    objectiveId: "obj-5-1",
    difficulty: "Easy",
    marks: 2,
    question:
      "What is meant by the term 'active site' of an enzyme?",
    workedSolution: {
      steps: [
        "The active site is a specific region on the enzyme molecule.",
        "It has a specific 3D shape that is complementary to the shape of a particular substrate molecule.",
        "The substrate binds to the active site to form an enzyme-substrate complex.",
      ],
      markSchemePoints: [
        "Region on the enzyme where the substrate binds / attaches (1)",
        "Has a specific / complementary shape to the substrate (1)",
      ],
      examTip:
        "Use the word 'complementary' — not 'same shape'. The active site shape fits the substrate like a lock fits a key.",
    },
  },
  {
    id: "bio-5-1-m",
    subjectId: "biology-0610",
    objectiveId: "obj-5-1",
    difficulty: "Medium",
    marks: 4,
    question:
      "Explain the 'lock and key' model of enzyme action. Use the terms: active site, substrate, enzyme-substrate complex, and product.",
    workedSolution: {
      steps: [
        "The enzyme is the 'lock' — it has an active site with a specific 3D shape.",
        "The substrate is the 'key' — its shape is complementary to the active site.",
        "The substrate binds to the active site, forming an enzyme-substrate complex.",
        "The enzyme catalyses the reaction: bonds in the substrate are broken (or formed between two substrates).",
        "The product(s) are released from the active site.",
        "The enzyme is unchanged and can bind to another substrate molecule.",
      ],
      markSchemePoints: [
        "Substrate has a complementary shape to the active site (1)",
        "Substrate binds to the active site → enzyme-substrate complex forms (1)",
        "Reaction is catalysed — substrate converted to product(s) (1)",
        "Products released; enzyme unchanged / can catalyse further reactions (1)",
      ],
      examTip:
        "Examiners often ask you to 'explain' rather than 'describe' — make sure you say WHY the substrate fits (complementary shape) not just THAT it fits.",
    },
  },
  {
    id: "bio-5-1-h",
    subjectId: "biology-0610",
    objectiveId: "obj-5-1",
    difficulty: "Hard",
    marks: 6,
    question:
      "Explain the difference between competitive inhibition and non-competitive inhibition of enzyme action. Include the effect each type of inhibitor has on the enzyme's active site and on the rate of reaction.",
    workedSolution: {
      steps: [
        "Competitive inhibition: the inhibitor molecule has a similar shape to the substrate and competes with the substrate to bind to the active site.",
        "When the competitive inhibitor is bound to the active site, the substrate cannot bind — rate of reaction decreases.",
        "Adding more substrate increases the chance of substrate (rather than inhibitor) binding → effect can be overcome by increasing substrate concentration.",
        "Non-competitive inhibition: the inhibitor binds to an allosteric site (different site, not the active site) on the enzyme.",
        "This changes the 3D shape of the active site — the substrate no longer fits.",
        "Effect cannot be overcome by adding more substrate because the active site is permanently altered while the inhibitor is attached.",
        "Non-competitive inhibition reduces the maximum rate of reaction (Vmax) even at high substrate concentrations.",
      ],
      markSchemePoints: [
        "Competitive: inhibitor has similar shape to substrate / binds to active site (1)",
        "Competitive: blocks substrate from binding → rate of reaction decreases (1)",
        "Competitive: effect overcome by increasing substrate concentration (1)",
        "Non-competitive: inhibitor binds to allosteric site (not active site) (1)",
        "Non-competitive: changes shape of active site → substrate cannot bind (1)",
        "Non-competitive: effect not overcome by increasing substrate / permanent effect on active site shape (1)",
      ],
      examTip:
        "The examiner loves asking 'which type cannot be overcome by adding more substrate?' — that's always non-competitive inhibition.",
    },
  },

  // ─── obj-5-2: Factors Affecting Enzymes ──────────────────────────────────
  {
    id: "bio-5-2-e",
    subjectId: "biology-0610",
    objectiveId: "obj-5-2",
    difficulty: "Easy",
    marks: 2,
    question:
      "State two factors that affect the rate of enzyme activity.",
    workedSolution: {
      steps: [
        "Multiple factors affect enzyme activity — choose any two.",
      ],
      markSchemePoints: [
        "Temperature (1)",
        "pH (1)",
        "(Also accept: substrate concentration / enzyme concentration / inhibitors)",
      ],
      examTip:
        "Temperature and pH are the most commonly tested. Always know the effect of each — not just that they 'affect' the rate.",
    },
  },
  {
    id: "bio-5-2-m",
    subjectId: "biology-0610",
    objectiveId: "obj-5-2",
    difficulty: "Medium",
    marks: 4,
    question:
      "Explain why increasing the temperature above the optimum decreases the rate of enzyme activity. Use the term 'denaturation' in your answer.",
    workedSolution: {
      steps: [
        "At the optimum temperature, enzymes work at their maximum rate — the active site has its correct 3D shape.",
        "Above the optimum temperature, the extra thermal energy causes the bonds (especially hydrogen bonds) holding the enzyme's 3D structure in place to break.",
        "The active site changes shape — it is no longer complementary to the substrate.",
        "The substrate can no longer bind — enzyme-substrate complexes cannot form.",
        "This is called denaturation — the enzyme is permanently inactivated.",
        "The enzyme cannot be 're-activated' by cooling back down.",
      ],
      markSchemePoints: [
        "Above optimum temperature, bonds maintaining 3D shape of enzyme break (hydrogen bonds / ionic bonds) (1)",
        "Active site changes shape / is no longer complementary to the substrate (1)",
        "Substrate cannot bind to active site (1)",
        "Enzyme is denatured — permanently inactivated (not just slowed) (1)",
      ],
      examTip:
        "Do not say the enzyme is 'killed' — enzymes are not alive. Say the enzyme is 'denatured' and its active site changes shape. The change is permanent.",
    },
  },
  {
    id: "bio-5-2-h",
    subjectId: "biology-0610",
    objectiveId: "obj-5-2",
    difficulty: "Hard",
    marks: 6,
    question:
      "An experiment investigates the effect of pH on the activity of the enzyme amylase. Describe and explain the expected results, and suggest why different enzymes have different optimum pH values.",
    workedSolution: {
      steps: [
        "Amylase works in the mouth (saliva) — optimum pH is approximately 7 (neutral).",
        "At pH 7: amylase has its correct 3D structure; active site is complementary to starch substrate; maximum rate of reaction.",
        "At pH below optimum: excess H⁺ ions interact with R-groups of amino acids; bonds maintaining the active site shape are disrupted; rate of reaction decreases.",
        "At pH above optimum: excess OH⁻ ions also disrupt hydrogen bonds and ionic interactions in the enzyme structure; active site changes shape; rate decreases.",
        "At extreme pH (very low or very high): enzyme is denatured — active site permanently altered, rate → 0.",
        "Different enzymes have different optimum pH values because different amino acid sequences and R-groups are involved in forming the active site — the specific pattern of charges and bonds that maintains the optimal active site shape differs for each enzyme. Example: pepsin (stomach protease) has optimum pH ~2; trypsin (intestinal protease) has optimum pH ~8.",
      ],
      markSchemePoints: [
        "Rate is maximum at optimum pH (approximately 7 for amylase) (1)",
        "At pH above or below optimum, rate decreases (1)",
        "Change in pH alters charges on R-groups / disrupts hydrogen bonds / ionic bonds in the enzyme (1)",
        "Active site shape changes — substrate can no longer bind correctly (1)",
        "At extreme pH — denaturation — permanent change (1)",
        "Different enzymes have different amino acid sequences / different bonds in active site → different optimum pH / named example (e.g. pepsin at pH 2, trypsin at pH 8) (1)",
      ],
      examTip:
        "Graph description: draw a bell curve with the peak at pH 7, falling steeply on both sides. For the explanation, link every pH change back to bond disruption in the active site.",
    },
  },

  // ─── obj-6-1: Photosynthesis ──────────────────────────────────────────────
  {
    id: "bio-6-1-e",
    subjectId: "biology-0610",
    objectiveId: "obj-6-1",
    difficulty: "Easy",
    marks: 2,
    question: "State the word equation for photosynthesis.",
    workedSolution: {
      steps: [
        "Photosynthesis converts carbon dioxide and water into glucose and oxygen using light energy.",
        "carbon dioxide + water → glucose + oxygen",
      ],
      markSchemePoints: [
        "Reactants: carbon dioxide + water (1)",
        "Products: glucose + oxygen (1)",
      ],
      examTip: "If asked for the balanced symbol equation: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂. Always include 'light energy' as the energy source above the arrow.",
    },
  },
  {
    id: "bio-6-1-m",
    subjectId: "biology-0610",
    objectiveId: "obj-6-1",
    difficulty: "Medium",
    marks: 4,
    question: "Explain how increasing light intensity affects the rate of photosynthesis, and state what happens when light intensity is very high.",
    workedSolution: {
      steps: [
        "At low light intensity, light is the limiting factor — increasing it provides more energy for the light-dependent reactions, so rate increases.",
        "As light intensity increases, rate of photosynthesis increases proportionally.",
        "At a certain point, another factor becomes limiting (e.g. CO₂ concentration or temperature) — the graph levels off (plateau).",
        "Further increases in light intensity have no effect once another factor is limiting.",
      ],
      markSchemePoints: [
        "As light intensity increases, rate of photosynthesis increases (1)",
        "Light provides energy for light-dependent reactions / splitting of water (1)",
        "Rate levels off / plateaus at high light intensity (1)",
        "Another factor becomes limiting at the plateau, e.g. CO₂ concentration or temperature (1)",
      ],
      examTip: "Always identify which factor is limiting at each part of a graph. The plateau means light is no longer limiting — something else is.",
    },
  },
  {
    id: "bio-6-1-h",
    subjectId: "biology-0610",
    objectiveId: "obj-6-1",
    difficulty: "Hard",
    marks: 6,
    question: "Describe an experiment to investigate the effect of carbon dioxide concentration on the rate of photosynthesis in pondweed (Elodea). Include variables, method, and how you would measure rate.",
    workedSolution: {
      steps: [
        "Independent variable: CO₂ concentration — vary by adding different concentrations of sodium hydrogen carbonate (NaHCO₃) solution.",
        "Dependent variable: rate of photosynthesis — measured by counting bubbles of O₂ per minute, or by measuring volume of O₂ produced.",
        "Control variables: light intensity (keep lamp at fixed distance), temperature (water bath at constant temperature), same species/length of pondweed.",
        "Method: place pondweed in a boiling tube with NaHCO₃ solution; illuminate with a lamp; allow to equilibrate; count O₂ bubbles per minute; repeat at different NaHCO₃ concentrations.",
        "Repeat each concentration at least three times and calculate mean to improve reliability.",
        "Expected result: as CO₂ concentration increases, rate increases, then plateaus when light or temperature becomes limiting.",
      ],
      markSchemePoints: [
        "Independent variable: CO₂ concentration (varied by NaHCO₃ concentration) (1)",
        "Dependent variable: rate of O₂ production / bubble count per minute (1)",
        "Control variables: light intensity, temperature, same pondweed (any two) (1)",
        "Correct method: pondweed in solution, illuminated, O₂ bubbles counted (1)",
        "Repeat measurements / calculate mean to improve reliability (1)",
        "Expected result: rate increases with CO₂, then levels off at limiting factor (1)",
      ],
      examTip: "Exam questions about investigations always need: independent variable, dependent variable, controlled variables, method and how results are measured. Cover all five areas.",
    },
  },

  // ─── obj-6-2: Mineral Requirements ───────────────────────────────────────
  {
    id: "bio-6-2-e",
    subjectId: "biology-0610",
    objectiveId: "obj-6-2",
    difficulty: "Easy",
    marks: 2,
    question: "State the role of magnesium ions in plants and explain what happens if they are deficient.",
    workedSolution: {
      steps: [
        "Magnesium ions are needed to make chlorophyll — the green pigment in leaves used for photosynthesis.",
        "Without magnesium, chlorophyll cannot be produced — leaves turn yellow (chlorosis).",
      ],
      markSchemePoints: [
        "Magnesium needed for chlorophyll synthesis / production (1)",
        "Deficiency causes yellowing of leaves / chlorosis (1)",
      ],
      examTip: "Magnesium → chlorophyll → photosynthesis. Nitrates → amino acids → proteins. These two are the most tested mineral deficiencies.",
    },
  },
  {
    id: "bio-6-2-m",
    subjectId: "biology-0610",
    objectiveId: "obj-6-2",
    difficulty: "Medium",
    marks: 3,
    question: "Explain why plants need nitrate ions and what symptoms appear when nitrate levels are deficient.",
    workedSolution: {
      steps: [
        "Nitrate ions provide nitrogen, which is needed to make amino acids.",
        "Amino acids are the building blocks of proteins — needed for growth, enzymes, and structural components.",
        "Without nitrates, plants cannot make proteins — growth is stunted and older leaves turn yellow (chlorosis) first.",
      ],
      markSchemePoints: [
        "Nitrate ions are needed for amino acid / protein synthesis (1)",
        "Proteins required for growth / enzyme production (1)",
        "Deficiency symptoms: stunted growth / yellowing of older leaves (1)",
      ],
      examTip: "The key chain is: nitrate → nitrogen → amino acids → proteins → growth. Any break in this chain explains the deficiency symptoms.",
    },
  },

  // ─── obj-7-1: Diet and Nutrients ─────────────────────────────────────────
  {
    id: "bio-7-1-e",
    subjectId: "biology-0610",
    objectiveId: "obj-7-1",
    difficulty: "Easy",
    marks: 3,
    question: "State the roles of three named components of a balanced diet (excluding water).",
    workedSolution: {
      steps: [
        "Choose three from: carbohydrates, proteins, lipids, vitamins, minerals, fibre.",
        "State a specific role for each.",
      ],
      markSchemePoints: [
        "Carbohydrates — provide energy / used in respiration (1)",
        "Proteins — growth and repair of tissues / enzyme synthesis (1)",
        "Lipids — long-term energy storage / insulation / cell membrane structure (1)",
        "(Also accept: Vitamin C — prevents scurvy / needed for collagen; Calcium — for strong bones and teeth; Fibre / roughage — prevents constipation / aids gut movement)",
      ],
      examTip: "Always match the nutrient to a specific function — 'provides energy' alone is often not enough for proteins and lipids. Be specific.",
    },
  },
  {
    id: "bio-7-1-m",
    subjectId: "biology-0610",
    objectiveId: "obj-7-1",
    difficulty: "Medium",
    marks: 4,
    question: "Explain what is meant by a 'balanced diet' and describe two health problems that can result from a diet that is unbalanced.",
    workedSolution: {
      steps: [
        "A balanced diet contains all required nutrients in the correct proportions — adequate energy intake to match energy expenditure, with sufficient proteins, lipids, vitamins, minerals, fibre, and water.",
        "Malnutrition = any imbalance — can be over-nutrition or under-nutrition.",
        "Obesity: excess energy intake (especially from fat and carbohydrates) → fat stored → increased risk of Type 2 diabetes, heart disease, high blood pressure.",
        "Deficiency diseases: e.g. scurvy (lack of Vitamin C — collagen cannot be made, gum disease, bleeding), anaemia (lack of iron — insufficient haemoglobin, fatigue).",
      ],
      markSchemePoints: [
        "Balanced diet = all nutrients in correct proportions / right amounts (1)",
        "Obesity: excessive fat/calorie intake → increased risk of cardiovascular disease / Type 2 diabetes (1)",
        "Named deficiency disease with correct cause, e.g. scurvy (Vit C), anaemia (iron), rickets (Vit D) (1)",
        "Correct symptom for the named deficiency disease (1)",
      ],
      examTip: "When naming a deficiency disease, always state the missing nutrient AND the symptom together — the examiner needs both for full marks.",
    },
  },

  // ─── obj-7-2: Digestion and Absorption ───────────────────────────────────
  {
    id: "bio-7-2-e",
    subjectId: "biology-0610",
    objectiveId: "obj-7-2",
    difficulty: "Easy",
    marks: 3,
    question: "Name the three types of digestive enzyme and state the substrate each one digests.",
    workedSolution: {
      steps: [
        "The three main types of digestive enzyme are: amylase, protease, and lipase.",
        "Each acts on a specific substrate due to enzyme specificity.",
      ],
      markSchemePoints: [
        "Amylase — digests starch (to maltose) (1)",
        "Protease — digests protein (to amino acids / peptides) (1)",
        "Lipase — digests lipids / fats (to fatty acids and glycerol) (1)",
      ],
      examTip: "You must state the product as well as the substrate for full marks in most questions. Starch → maltose → glucose (via maltase).",
    },
  },
  {
    id: "bio-7-2-m",
    subjectId: "biology-0610",
    objectiveId: "obj-7-2",
    difficulty: "Medium",
    marks: 4,
    question: "Describe the role of the small intestine in digestion and absorption. Explain how the structure of a villus is adapted for efficient absorption.",
    workedSolution: {
      steps: [
        "Digestion in small intestine: enzymes from the pancreas (amylase, protease, lipase) and from the intestinal wall complete digestion of food into small soluble molecules.",
        "Absorption: the lining of the small intestine is folded into villi, which increase surface area for absorption by diffusion and active transport.",
        "Villus adaptations: (1) large surface area from microvilli (brush border); (2) single layer of epithelial cells — short diffusion distance; (3) rich blood supply (capillaries) — maintains concentration gradient; (4) lacteals absorb fatty acids and glycerol into lymph.",
      ],
      markSchemePoints: [
        "Enzymes from pancreas/intestine complete digestion to small soluble molecules (1)",
        "Villi greatly increase surface area for absorption (1)",
        "Single cell epithelium / thin wall — short diffusion distance (1)",
        "Rich capillary network maintains concentration gradient / carries absorbed products away (1)",
      ],
      examTip: "For structure-function questions on villi: surface area, thin wall, good blood supply are the three golden points. Each must be linked to how it aids absorption.",
    },
  },

  // ─── obj-8-1: Xylem and Phloem ───────────────────────────────────────────
  {
    id: "bio-8-1-e",
    subjectId: "biology-0610",
    objectiveId: "obj-8-1",
    difficulty: "Easy",
    marks: 2,
    question: "State the function of xylem and phloem in plants.",
    workedSolution: {
      steps: [
        "Xylem transports water and dissolved mineral ions from roots to leaves (and other parts) — upward.",
        "Phloem transports sugars (mainly sucrose) and amino acids from leaves to the rest of the plant — in both directions (translocation).",
      ],
      markSchemePoints: [
        "Xylem: transports water (and mineral ions) from roots to shoots/leaves (1)",
        "Phloem: transports dissolved sugars (sucrose/glucose) from leaves to rest of plant / translocation (1)",
      ],
      examTip: "Xylem = water upward only. Phloem = sugars in both directions (from source to sink). Never say phloem transports water.",
    },
  },
  {
    id: "bio-8-1-m",
    subjectId: "biology-0610",
    objectiveId: "obj-8-1",
    difficulty: "Medium",
    marks: 4,
    question: "Describe three structural features of xylem vessels that make them well adapted for transporting water.",
    workedSolution: {
      steps: [
        "Dead cells: xylem vessels are formed from dead cells — no cytoplasm blocking the lumen, allowing unobstructed water flow.",
        "Hollow lumen: joined end-to-end with no end walls (perforations) — forms a continuous tube from root to leaf.",
        "Lignified walls: walls impregnated with lignin — waterproof and provide structural support, preventing the tubes from collapsing under pressure.",
        "No living contents: nothing to impede the flow of water.",
      ],
      markSchemePoints: [
        "Dead cells / no cytoplasm — unobstructed flow of water (1)",
        "No end walls / hollow continuous lumen — water flows freely from root to leaf (1)",
        "Lignified walls — structural support / prevents collapse / waterproof (1)",
        "Narrow lumen diameter aids capillary action / cohesion of water (1)",
      ],
      examTip: "Always link structural feature → function. 'Lignified walls → structural support' scores better than just 'lignified walls'.",
    },
  },

  // ─── obj-8-2: Transpiration ───────────────────────────────────────────────
  {
    id: "bio-8-2-e",
    subjectId: "biology-0610",
    objectiveId: "obj-8-2",
    difficulty: "Easy",
    marks: 2,
    question: "Define transpiration.",
    workedSolution: {
      steps: [
        "Transpiration is the loss of water vapour from the leaves (and other aerial parts) of a plant, mainly through the stomata.",
      ],
      markSchemePoints: [
        "Loss of water vapour from plant / leaf surfaces (1)",
        "Mainly through stomata (1)",
      ],
      examTip: "Transpiration is NOT the movement of water up the xylem — that is the transpiration stream. Transpiration itself is only the evaporation of water from the leaf surface.",
    },
  },
  {
    id: "bio-8-2-m",
    subjectId: "biology-0610",
    objectiveId: "obj-8-2",
    difficulty: "Medium",
    marks: 4,
    question: "Explain how each of the following factors increases the rate of transpiration: (a) increased temperature, (b) increased wind speed, (c) decreased humidity.",
    workedSolution: {
      steps: [
        "(a) Temperature: higher temperature increases the kinetic energy of water molecules in the leaf — more water evaporates into air spaces; also, warm air holds more water vapour, so the concentration gradient out of the leaf is steeper → faster transpiration.",
        "(b) Wind speed: moving air removes water vapour from around stomata, maintaining a steep water vapour concentration gradient between inside the leaf and the air → faster diffusion of water vapour out.",
        "(c) Decreased humidity: drier air has a lower water vapour concentration — steeper concentration gradient between the inside of the leaf (saturated with water vapour) and the air → faster diffusion out.",
      ],
      markSchemePoints: [
        "(a) Higher temperature → more water molecules evaporate / greater kinetic energy → steeper concentration gradient (1)",
        "(b) Wind removes water vapour → maintains steep concentration gradient for diffusion out of stomata (1)",
        "(c) Lower humidity → more dilute air outside → steeper concentration gradient → faster diffusion out (1)",
        "All three correctly linked to concentration gradient maintenance (1)",
      ],
      examTip: "All three factors work by the same principle — maintaining a steep water vapour concentration gradient between inside the leaf and the air outside. Link each factor back to this.",
    },
  },

  // ─── obj-9-1: Heart and Circulation ──────────────────────────────────────
  {
    id: "bio-9-1-e",
    subjectId: "biology-0610",
    objectiveId: "obj-9-1",
    difficulty: "Easy",
    marks: 2,
    question: "Explain why humans have a double circulatory system.",
    workedSolution: {
      steps: [
        "Double circulation: blood passes through the heart twice for each complete circuit of the body.",
        "Pulmonary circulation: heart → lungs → heart (blood picks up O₂, loses CO₂).",
        "Systemic circulation: heart → body → heart (blood delivers O₂ and nutrients, picks up CO₂).",
        "Advantage: blood is re-pressurised at the heart between the two circuits — allows high pressure delivery to body organs, especially important for active animals.",
      ],
      markSchemePoints: [
        "Blood passes through the heart twice per complete circuit (1)",
        "Allows higher pressure / faster delivery of oxygenated blood to body tissues (1)",
      ],
      examTip: "The key advantage of double circulation is the re-pressurisation of blood, allowing efficient, high-pressure delivery to all body organs.",
    },
  },
  {
    id: "bio-9-1-m",
    subjectId: "biology-0610",
    objectiveId: "obj-9-1",
    difficulty: "Medium",
    marks: 4,
    question: "Describe the sequence of events in one complete heartbeat, starting from when the atria fill with blood.",
    workedSolution: {
      steps: [
        "1. Both atria fill with blood (right atrium from vena cava, left atrium from pulmonary vein).",
        "2. Atria contract (atrial systole) — AV valves open — blood forced into ventricles.",
        "3. Ventricles fill with blood — AV valves close (prevents backflow) — 'lub' sound.",
        "4. Ventricles contract (ventricular systole) — pressure rises — semilunar valves open — blood ejected into aorta (left) and pulmonary artery (right).",
        "5. Ventricles relax — semilunar valves close — 'dub' sound — prevents backflow.",
        "6. Heart relaxes (diastole) — atria refill — cycle repeats.",
      ],
      markSchemePoints: [
        "Atria contract → blood flows into ventricles through open AV valves (1)",
        "Ventricles contract → blood forced into aorta and pulmonary artery (1)",
        "AV valves close when ventricles contract — prevents backflow to atria (1)",
        "Semilunar valves close when ventricles relax — prevents backflow from arteries (1)",
      ],
      examTip: "Valve questions always focus on DIRECTION — valves prevent backflow. State which valves open/close at each stage and why.",
    },
  },

  // ─── obj-9-2: Blood and Blood Vessels ────────────────────────────────────
  {
    id: "bio-9-2-e",
    subjectId: "biology-0610",
    objectiveId: "obj-9-2",
    difficulty: "Easy",
    marks: 3,
    question: "State three differences between arteries and veins.",
    workedSolution: {
      steps: [
        "Consider wall thickness, lumen size, presence of valves, and direction of blood flow.",
      ],
      markSchemePoints: [
        "Arteries have thicker walls (more muscle and elastic fibres); veins have thinner walls (1)",
        "Arteries have a narrower lumen relative to wall; veins have a wider lumen (1)",
        "Veins have valves to prevent backflow; arteries do not (1)",
        "(Also accept: arteries carry blood away from heart at high pressure; veins carry blood back to heart at low pressure)",
      ],
      examTip: "The classic three: thick wall vs thin wall; narrow lumen vs wide lumen; no valves vs valves. Learn these as paired contrasts.",
    },
  },
  {
    id: "bio-9-2-m",
    subjectId: "biology-0610",
    objectiveId: "obj-9-2",
    difficulty: "Medium",
    marks: 4,
    question: "Describe the composition of blood and explain how red blood cells and white blood cells are adapted for their roles.",
    workedSolution: {
      steps: [
        "Blood components: red blood cells (erythrocytes), white blood cells (leucocytes), platelets, plasma.",
        "Red blood cell adaptations: biconcave disc shape → large surface area for O₂ absorption; no nucleus → more space for haemoglobin; contains haemoglobin which binds O₂ reversibly; small and flexible → can fit through capillaries.",
        "White blood cell adaptations: phagocytes — can change shape to engulf pathogens (phagocytosis); lymphocytes — produce antibodies specific to antigens on pathogens.",
      ],
      markSchemePoints: [
        "RBC: biconcave disc / no nucleus → more haemoglobin / larger surface area for O₂ diffusion (1)",
        "RBC: haemoglobin binds O₂ reversibly (1)",
        "WBC: phagocytes engulf pathogens by phagocytosis (1)",
        "WBC: lymphocytes produce antibodies against specific antigens (1)",
      ],
      examTip: "The no-nucleus feature of RBCs gives two advantages: more space for haemoglobin AND more flexible shape. Mention both for high-mark questions.",
    },
  },

  // ─── obj-10-1: Pathogens and Disease ─────────────────────────────────────
  {
    id: "bio-10-1-e",
    subjectId: "biology-0610",
    objectiveId: "obj-10-1",
    difficulty: "Easy",
    marks: 3,
    question: "Name four types of pathogen that can cause disease in humans and give one example disease for each.",
    workedSolution: {
      steps: [
        "Pathogens are microorganisms that cause disease. The four main types are: bacteria, viruses, fungi, and protoctists (protists).",
      ],
      markSchemePoints: [
        "Bacteria — e.g. tuberculosis (TB), cholera, Salmonella food poisoning (1)",
        "Viruses — e.g. influenza (flu), HIV/AIDS, measles (1)",
        "Fungi — e.g. athlete's foot, ringworm (1)",
        "Protoctists — e.g. malaria (Plasmodium), amoebic dysentery (1)",
      ],
      examTip: "Malaria is caused by a protoctist (Plasmodium), transmitted by a mosquito vector — not a bacterium or virus. This is a common source of exam errors.",
    },
  },
  {
    id: "bio-10-1-m",
    subjectId: "biology-0610",
    objectiveId: "obj-10-1",
    difficulty: "Medium",
    marks: 4,
    question: "Explain how cholera is spread and describe two measures that can be used to reduce its transmission.",
    workedSolution: {
      steps: [
        "Cholera is caused by the bacterium Vibrio cholerae.",
        "Spread: faecal-oral route — the bacterium is excreted in faeces of infected individuals and contaminates water sources; drinking or using contaminated water spreads the infection.",
        "Control measures: (1) providing clean, uncontaminated drinking water (water treatment/purification); (2) improving sewage treatment to prevent faecal contamination of water; (3) handwashing with soap after using the toilet and before food preparation.",
      ],
      markSchemePoints: [
        "Caused by bacterium / Vibrio cholerae (1)",
        "Spread via contaminated water / faecal-oral route (1)",
        "Control: clean water supply / water treatment / boiling water (1)",
        "Control: improved sewage disposal / handwashing / personal hygiene (1)",
      ],
      examTip: "For any waterborne disease: spread = contaminated water/food, control = clean water + sanitation + hygiene. These three always link together.",
    },
  },

  // ─── obj-10-2: Immunity ───────────────────────────────────────────────────
  {
    id: "bio-10-2-e",
    subjectId: "biology-0610",
    objectiveId: "obj-10-2",
    difficulty: "Easy",
    marks: 2,
    question: "Explain what is meant by the term 'antibody' and state the type of cell that produces antibodies.",
    workedSolution: {
      steps: [
        "An antibody is a protein produced by the immune system in response to a specific antigen.",
        "Antibodies are produced by lymphocytes (B-lymphocytes).",
      ],
      markSchemePoints: [
        "Antibody: protein produced in response to a specific antigen / has specific shape complementary to an antigen (1)",
        "Produced by lymphocytes / B-cells (1)",
      ],
      examTip: "Antibodies are specific to ONE antigen — their shape is complementary to that antigen. This specificity is key to how immunity works.",
    },
  },
  {
    id: "bio-10-2-m",
    subjectId: "biology-0610",
    objectiveId: "obj-10-2",
    difficulty: "Medium",
    marks: 4,
    question: "Explain how vaccination protects an individual from a disease, using the terms: antigen, antibody, memory cells, and immune response.",
    workedSolution: {
      steps: [
        "Vaccination introduces a weakened/killed pathogen, or its antigens, into the body.",
        "The immune system recognises the foreign antigens — lymphocytes are stimulated to produce specific antibodies against those antigens.",
        "Memory cells are produced and remain in the bloodstream long after the initial response.",
        "If the real pathogen enters the body later, memory cells recognise its antigens immediately.",
        "A rapid, large secondary immune response is mounted — antibodies are produced quickly and in large quantities before the pathogen can cause disease.",
      ],
      markSchemePoints: [
        "Vaccine introduces antigen(s) of pathogen (1)",
        "Immune system produces specific antibodies against the antigen (1)",
        "Memory cells formed — remain in blood long-term (1)",
        "Re-exposure: memory cells trigger faster/larger antibody production → disease prevented (1)",
      ],
      examTip: "The key to vaccination is memory cells — they enable the rapid secondary response. Always explain what happens on re-exposure to the actual pathogen.",
    },
  },

  // ─── obj-11-1: Gas Exchange in Humans ────────────────────────────────────
  {
    id: "bio-11-1-e",
    subjectId: "biology-0610",
    objectiveId: "obj-11-1",
    difficulty: "Easy",
    marks: 2,
    question: "State two features of the alveoli that make them efficient surfaces for gas exchange.",
    workedSolution: {
      steps: [
        "Alveoli are tiny air sacs in the lungs with very large total surface area.",
        "Features that maximise gas exchange: large total surface area, thin walls, rich blood supply.",
      ],
      markSchemePoints: [
        "Large (total) surface area — many alveoli → lots of space for diffusion (1)",
        "Thin walls / one cell thick — short diffusion distance for gases (1)",
        "(Also accept: rich capillary network — maintains concentration gradient)",
      ],
      examTip: "Always give three features for high-mark alveoli questions: large surface area, thin walls (short diffusion distance), good blood supply (maintains gradient).",
    },
  },
  {
    id: "bio-11-1-m",
    subjectId: "biology-0610",
    objectiveId: "obj-11-1",
    difficulty: "Medium",
    marks: 4,
    question: "Explain the mechanism of breathing in (inspiration). Refer to the diaphragm, intercostal muscles, volume, and pressure.",
    workedSolution: {
      steps: [
        "Diaphragm contracts and flattens (moves downward).",
        "External intercostal muscles contract — ribs move upward and outward.",
        "These two actions increase the volume of the thorax (chest cavity).",
        "Increased volume → decreased pressure inside the lungs (below atmospheric pressure).",
        "Air rushes in from outside (high pressure) to the lungs (low pressure) down the pressure gradient.",
      ],
      markSchemePoints: [
        "Diaphragm contracts and moves down / flattens (1)",
        "External intercostal muscles contract → ribs move up and out (1)",
        "Volume of thorax increases (1)",
        "Pressure in lungs decreases below atmospheric → air flows in (1)",
      ],
      examTip: "Breathing in = muscles CONTRACT, volume INCREASES, pressure DECREASES. Breathing out = muscles RELAX, volume DECREASES, pressure INCREASES. These are always opposite.",
    },
  },

  // ─── obj-12-1: Aerobic Respiration ───────────────────────────────────────
  {
    id: "bio-12-1-e",
    subjectId: "biology-0610",
    objectiveId: "obj-12-1",
    difficulty: "Easy",
    marks: 2,
    question: "State the word equation for aerobic respiration.",
    workedSolution: {
      steps: [
        "Aerobic respiration uses glucose and oxygen to produce carbon dioxide, water, and energy (ATP).",
        "glucose + oxygen → carbon dioxide + water (+ energy released as ATP)",
      ],
      markSchemePoints: [
        "Reactants: glucose + oxygen (1)",
        "Products: carbon dioxide + water (+ energy / ATP) (1)",
      ],
      examTip: "Symbol equation: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O. Always mention that energy is released as ATP — not just 'energy'.",
    },
  },
  {
    id: "bio-12-1-m",
    subjectId: "biology-0610",
    objectiveId: "obj-12-1",
    difficulty: "Medium",
    marks: 3,
    question: "Explain why cells that are very active, such as muscle cells, contain a large number of mitochondria.",
    workedSolution: {
      steps: [
        "Active cells (e.g. contracting muscle cells) require large amounts of ATP for movement.",
        "ATP is produced by aerobic respiration, which occurs in the mitochondria.",
        "More mitochondria = more sites for aerobic respiration = more ATP produced per unit time.",
        "This meets the high energy demand of active cells.",
      ],
      markSchemePoints: [
        "Active cells require large amounts of ATP / energy for contraction (1)",
        "ATP produced by aerobic respiration in mitochondria (1)",
        "More mitochondria → greater rate of ATP production → meets energy demand (1)",
      ],
      examTip: "Structure-function link: high energy demand → many mitochondria → high rate of aerobic respiration → lots of ATP. One sentence per link.",
    },
  },
  {
    id: "bio-12-1-h",
    subjectId: "biology-0610",
    objectiveId: "obj-12-1",
    difficulty: "Hard",
    marks: 5,
    question: "Describe an experiment to compare the rate of respiration in germinating and non-germinating seeds using a respirometer. Explain what result you would expect and why.",
    workedSolution: {
      steps: [
        "Set up a simple respirometer: seeds placed in a boiling tube with soda lime (absorbs CO₂); sealed with a capillary tube connected to coloured water.",
        "Control tube: same mass of dead (boiled) seeds with identical conditions — to account for physical changes.",
        "Germinating seeds respire aerobically — consume O₂; CO₂ absorbed by soda lime → pressure decreases → coloured water moves towards seeds.",
        "Non-germinating seeds have much lower metabolic activity — little or no respiration — no movement of water, or very slow movement.",
        "Rate measured by how far the coloured liquid moves per unit time.",
        "Expected result: germinating seeds show greater movement of coloured liquid (faster O₂ uptake = faster respiration) because germination requires energy for growth.",
      ],
      markSchemePoints: [
        "Soda lime absorbs CO₂; decrease in gas volume causes coloured water to move toward seeds (1)",
        "Control tube with dead seeds to account for physical changes (1)",
        "Germinating seeds show greater movement of liquid / consume O₂ faster (1)",
        "Germinating seeds have higher metabolic rate / require more ATP for growth (1)",
        "Rate measured by distance moved per unit time (1)",
      ],
      examTip: "Respirometers measure O₂ consumption (with CO₂ removed by soda lime). Always describe a control. The coloured liquid moves toward whichever side consumes more O₂.",
    },
  },

  // ─── obj-12-2: Anaerobic Respiration ─────────────────────────────────────
  {
    id: "bio-12-2-e",
    subjectId: "biology-0610",
    objectiveId: "obj-12-2",
    difficulty: "Easy",
    marks: 2,
    question: "State the products of anaerobic respiration in (a) animals and (b) yeast.",
    workedSolution: {
      steps: [
        "(a) In animals (e.g. muscle cells): glucose → lactic acid + (small amount of) ATP.",
        "(b) In yeast: glucose → ethanol + carbon dioxide + (small amount of) ATP.",
      ],
      markSchemePoints: [
        "(a) Animals: lactic acid (+ ATP) (1)",
        "(b) Yeast: ethanol AND carbon dioxide (+ ATP) (1)",
      ],
      examTip: "Yeast produces TWO products (ethanol AND CO₂) — both are needed for the mark. Animal anaerobic respiration produces ONLY lactic acid.",
    },
  },
  {
    id: "bio-12-2-m",
    subjectId: "biology-0610",
    objectiveId: "obj-12-2",
    difficulty: "Medium",
    marks: 4,
    question: "Explain why muscle cells switch to anaerobic respiration during intense exercise and describe the consequence of this for the body.",
    workedSolution: {
      steps: [
        "During intense exercise, muscle cells demand more ATP than aerobic respiration can supply (limited by O₂ delivery).",
        "When O₂ supply is insufficient, cells switch to anaerobic respiration.",
        "Glucose is broken down to lactic acid without O₂, producing a small amount of ATP quickly.",
        "Lactic acid accumulates in muscles — causes muscle fatigue/pain, and eventually muscle activity must stop.",
        "After exercise, extra O₂ is needed to break down lactic acid — this is the 'oxygen debt' (excess post-exercise oxygen consumption).",
      ],
      markSchemePoints: [
        "O₂ supply insufficient to meet ATP demand during intense exercise (1)",
        "Cells switch to anaerobic respiration — no O₂ needed (1)",
        "Lactic acid builds up in muscles — causes fatigue / cramp (1)",
        "Oxygen debt: extra O₂ needed after exercise to oxidise lactic acid (1)",
      ],
      examTip: "Oxygen debt is the extra O₂ consumed after exercise to break down the lactic acid that accumulated. This is why breathing rate stays elevated after you stop exercising.",
    },
  },

  // ─── obj-13-1: The Kidney ─────────────────────────────────────────────────
  {
    id: "bio-13-1-e",
    subjectId: "biology-0610",
    objectiveId: "obj-13-1",
    difficulty: "Easy",
    marks: 2,
    question: "State the two main roles of the kidneys in the body.",
    workedSolution: {
      steps: [
        "The kidneys have two main roles: excretion of urea, and regulation of water content of the blood (osmoregulation).",
      ],
      markSchemePoints: [
        "Excretion of urea / removal of metabolic waste products from the blood (1)",
        "Regulation of water and ion content of blood / osmoregulation (1)",
      ],
      examTip: "Excretion ≠ egestion. The kidneys excrete urea (metabolic waste from protein breakdown in the liver). The gut egests undigested food waste.",
    },
  },
  {
    id: "bio-13-1-m",
    subjectId: "biology-0610",
    objectiveId: "obj-13-1",
    difficulty: "Medium",
    marks: 4,
    question: "Describe the three processes that occur in the kidney nephron to produce urine: filtration, reabsorption, and secretion.",
    workedSolution: {
      steps: [
        "Ultrafiltration: high pressure in the glomerulus forces small molecules (water, glucose, urea, ions) out of the blood into the Bowman's capsule — large molecules (proteins, red blood cells) remain in the blood.",
        "Selective reabsorption: as filtrate passes through the proximal convoluted tubule, ALL glucose and most water and ions are reabsorbed back into the blood by active transport and osmosis.",
        "The remaining filtrate (mainly urea, excess water, excess ions) continues to the collecting duct and is excreted as urine.",
      ],
      markSchemePoints: [
        "Ultrafiltration: high pressure forces small molecules into Bowman's capsule; large molecules remain in blood (1)",
        "All glucose reabsorbed in proximal convoluted tubule by active transport (1)",
        "Water reabsorbed by osmosis; amount controlled by ADH (1)",
        "Remaining urea and excess salts form urine, passed to ureter (1)",
      ],
      examTip: "Remember: glucose is ALWAYS fully reabsorbed. If glucose appears in urine, it indicates diabetes (blood glucose too high for kidneys to reabsorb all of it).",
    },
  },

  // ─── obj-14-1: Nervous System ─────────────────────────────────────────────
  {
    id: "bio-14-1-e",
    subjectId: "biology-0610",
    objectiveId: "obj-14-1",
    difficulty: "Easy",
    marks: 3,
    question: "State the pathway of a reflex arc, from receptor to effector.",
    workedSolution: {
      steps: [
        "A reflex arc is the nervous pathway for a reflex action — fast and automatic.",
        "The pathway is: receptor → sensory neurone → relay neurone (in spinal cord) → motor neurone → effector.",
      ],
      markSchemePoints: [
        "Receptor detects stimulus (1)",
        "Sensory neurone → relay neurone (in CNS/spinal cord) → motor neurone (1)",
        "Effector (muscle or gland) produces response (1)",
      ],
      examTip: "The relay neurone is always in the CNS (spinal cord or brain). Reflexes are fast because they bypass the conscious brain — the decision is made in the spinal cord.",
    },
  },
  {
    id: "bio-14-1-m",
    subjectId: "biology-0610",
    objectiveId: "obj-14-1",
    difficulty: "Medium",
    marks: 4,
    question: "Explain how a nerve impulse is transmitted across a synapse from one neurone to the next.",
    workedSolution: {
      steps: [
        "The nerve impulse arrives at the presynaptic terminal (knob) of the first neurone.",
        "Vesicles containing neurotransmitter molecules (e.g. acetylcholine) fuse with the presynaptic membrane.",
        "Neurotransmitters are released into the synaptic cleft by exocytosis.",
        "Neurotransmitters diffuse across the cleft and bind to specific receptor proteins on the postsynaptic membrane.",
        "This triggers a new nerve impulse in the postsynaptic neurone.",
        "Neurotransmitters are then broken down by enzymes (or recycled) to prevent continuous stimulation.",
      ],
      markSchemePoints: [
        "Impulse arrives at presynaptic terminal — vesicles release neurotransmitter into synaptic cleft (1)",
        "Neurotransmitter diffuses across synaptic cleft (1)",
        "Neurotransmitter binds to receptors on postsynaptic membrane (1)",
        "New impulse generated in postsynaptic neurone; neurotransmitter broken down by enzymes (1)",
      ],
      examTip: "Synaptic transmission always goes ONE WAY (presynaptic → postsynaptic) because receptors are only on the postsynaptic side. This is essential to mention.",
    },
  },

  // ─── obj-14-2: Hormones and Homeostasis ───────────────────────────────────
  {
    id: "bio-14-2-e",
    subjectId: "biology-0610",
    objectiveId: "obj-14-2",
    difficulty: "Easy",
    marks: 2,
    question: "State two ways in which hormonal communication differs from nervous communication.",
    workedSolution: {
      steps: [
        "Hormones travel in the blood — slower; nerves transmit electrical impulses — much faster.",
        "Hormones have a longer-lasting effect; nerve impulses are brief.",
        "Hormones affect many/widespread target organs; nerves affect specific cells directly.",
      ],
      markSchemePoints: [
        "Hormonal: slower / travels in blood; Nervous: faster / electrical impulse along neurones (1)",
        "Hormonal: longer-lasting / widespread effect; Nervous: short-lived / specific / targeted (1)",
      ],
      examTip: "These contrasts come up every year: speed (hormones slow, nerves fast) and duration (hormones long-lasting, nerves short). Learn both paired contrasts.",
    },
  },
  {
    id: "bio-14-2-m",
    subjectId: "biology-0610",
    objectiveId: "obj-14-2",
    difficulty: "Medium",
    marks: 4,
    question: "Explain how blood glucose concentration is regulated after a carbohydrate-rich meal. Name the hormone involved and the organ that produces it.",
    workedSolution: {
      steps: [
        "After a carbohydrate meal, glucose is absorbed into the blood from the small intestine — blood glucose rises.",
        "The pancreas detects the rise in blood glucose.",
        "Beta cells in the islets of Langerhans in the pancreas secrete insulin into the blood.",
        "Insulin travels to the liver and muscle cells — stimulates them to take up glucose from the blood and convert it to glycogen (glycogenesis) for storage.",
        "Blood glucose falls back to the normal level (negative feedback).",
      ],
      markSchemePoints: [
        "Blood glucose rises after meal — detected by pancreas (1)",
        "Pancreas secretes insulin (from beta cells / islets of Langerhans) (1)",
        "Insulin stimulates liver/muscle to take up glucose and convert to glycogen (1)",
        "Blood glucose returns to normal level / negative feedback (1)",
      ],
      examTip: "The organ = pancreas. The process = glycogenesis (glucose → glycogen). After exercise or fasting, glucagon does the reverse (glycogen → glucose). Know both directions.",
    },
  },

  // ─── obj-15-1: Asexual and Sexual Reproduction ────────────────────────────
  {
    id: "bio-15-1-e",
    subjectId: "biology-0610",
    objectiveId: "obj-15-1",
    difficulty: "Easy",
    marks: 3,
    question: "State three differences between asexual and sexual reproduction.",
    workedSolution: {
      steps: [
        "Compare: number of parents, gametes, genetic variation in offspring, and speed.",
      ],
      markSchemePoints: [
        "Asexual: one parent; Sexual: two parents (1)",
        "Asexual: no gametes / no fertilisation; Sexual: gametes produced, fertilisation occurs (1)",
        "Asexual: offspring genetically identical to parent (clones); Sexual: offspring show genetic variation (1)",
      ],
      examTip: "The key biological advantage of sexual reproduction is GENETIC VARIATION — it allows populations to adapt to changing environments through natural selection.",
    },
  },
  {
    id: "bio-15-2-m",
    subjectId: "biology-0610",
    objectiveId: "obj-15-2",
    difficulty: "Medium",
    marks: 4,
    question: "Describe the development of the fertilised egg to a fetus, and explain the role of the placenta.",
    workedSolution: {
      steps: [
        "The fertilised egg (zygote) undergoes repeated mitotic cell divisions — forms a ball of cells (embryo).",
        "The embryo implants into the uterus wall (endometrium).",
        "The placenta develops — a structure where fetal and maternal blood systems are close but do not mix.",
        "Role of placenta: exchange of nutrients (glucose, amino acids, vitamins) and O₂ from mother to fetus; exchange of CO₂ and urea from fetus to mother; forms a barrier against some pathogens; produces hormones to maintain pregnancy.",
        "The amniotic sac and fluid protect the fetus from mechanical damage.",
      ],
      markSchemePoints: [
        "Zygote → embryo by repeated cell division; implants in uterus wall (1)",
        "Placenta: exchange of O₂ and nutrients from mother's blood to fetal blood (1)",
        "Placenta: removal of CO₂ and waste from fetal blood to mother's blood (1)",
        "Maternal and fetal blood do NOT mix / villi increase surface area for exchange (1)",
      ],
      examTip: "A key exam point: maternal and fetal blood do NOT mix in the placenta. Exchange occurs by diffusion across thin membranes of the chorionic villi.",
    },
  },

  // ─── obj-16-1: DNA and Genes ──────────────────────────────────────────────
  {
    id: "bio-16-1-e",
    subjectId: "biology-0610",
    objectiveId: "obj-16-1",
    difficulty: "Easy",
    marks: 3,
    question: "Describe the structure of a DNA molecule.",
    workedSolution: {
      steps: [
        "DNA is a double helix — two polynucleotide strands twisted around each other.",
        "Each strand is made of nucleotides; each nucleotide has a deoxyribose sugar, a phosphate group, and a nitrogenous base.",
        "The bases pair specifically (complementary base pairing): Adenine pairs with Thymine (A–T); Cytosine pairs with Guanine (C–G).",
        "The two strands are held together by hydrogen bonds between the base pairs.",
      ],
      markSchemePoints: [
        "Double helix structure (1)",
        "Made of nucleotides containing deoxyribose sugar, phosphate, and base (1)",
        "Complementary base pairing: A–T and C–G, held by hydrogen bonds (1)",
      ],
      examTip: "A–T pairs have 2 hydrogen bonds; C–G pairs have 3. This affects DNA stability — more C–G pairs = more stable DNA. This can come up in harder questions.",
    },
  },
  {
    id: "bio-16-1-m",
    subjectId: "biology-0610",
    objectiveId: "obj-16-1",
    difficulty: "Medium",
    marks: 3,
    question: "Explain what is meant by the terms 'gene', 'allele', and 'genotype'.",
    workedSolution: {
      steps: [
        "Gene: a section of DNA on a chromosome that codes for a specific protein (and therefore a specific characteristic).",
        "Allele: a specific version (variant) of a gene — different alleles produce slightly different versions of the same protein.",
        "Genotype: the combination of alleles an organism has for a particular gene (or set of genes) — e.g. Tt, TT, tt.",
      ],
      markSchemePoints: [
        "Gene: section of DNA / sequence of bases that codes for a specific protein / characteristic (1)",
        "Allele: different version of the same gene (1)",
        "Genotype: the combination of alleles an organism has / represented by letters, e.g. Tt (1)",
      ],
      examTip: "Do not confuse genotype (allele combination, e.g. Tt) with phenotype (physical appearance, e.g. 'tall'). Both may be asked in the same question.",
    },
  },

  // ─── obj-16-2: Monohybrid Inheritance ────────────────────────────────────
  {
    id: "bio-16-2-e",
    subjectId: "biology-0610",
    objectiveId: "obj-16-2",
    difficulty: "Easy",
    marks: 3,
    question: "In pea plants, tall (T) is dominant over dwarf (t). Two heterozygous tall plants are crossed. Use a Punnett square to determine the expected ratio of tall to dwarf plants in the offspring.",
    workedSolution: {
      steps: [
        "Both parents are Tt × Tt.",
        "Punnett square: T | t across top, T | t down side.",
        "Offspring: TT, Tt, Tt, tt.",
        "Phenotypes: TT = tall, Tt = tall, tt = dwarf.",
        "Ratio: 3 tall : 1 dwarf.",
      ],
      markSchemePoints: [
        "Correct Punnett square showing all four possible offspring genotypes: TT, Tt, Tt, tt (1)",
        "Genotype ratio: 1 TT : 2 Tt : 1 tt (1)",
        "Phenotype ratio: 3 tall : 1 dwarf (1)",
      ],
      examTip: "Always set up the Punnett square carefully — parents' gametes go along the top and side. Show your working even if you know the answer — marks are given for the cross too.",
    },
  },
  {
    id: "bio-16-2-m",
    subjectId: "biology-0610",
    objectiveId: "obj-16-2",
    difficulty: "Medium",
    marks: 4,
    question: "Explain why a carrier of a recessive genetic disorder does not show symptoms of the disorder. Use the terms 'dominant', 'recessive', 'heterozygous', and 'phenotype'.",
    workedSolution: {
      steps: [
        "A carrier is heterozygous — they have one dominant allele (normal) and one recessive allele (disorder) e.g. Aa.",
        "The dominant allele masks the expression of the recessive allele.",
        "The normal dominant allele produces enough functional protein for the body to function normally.",
        "Therefore the phenotype (physical appearance) shows no symptoms — the disorder is not expressed.",
        "Only homozygous recessive individuals (aa) show the disorder because they have no dominant allele to mask it.",
      ],
      markSchemePoints: [
        "Carrier is heterozygous — one dominant, one recessive allele (1)",
        "Dominant allele masks the recessive allele (1)",
        "Phenotype is normal / symptoms not expressed in heterozygous individual (1)",
        "Disorder only expressed in homozygous recessive individuals (two recessive alleles) (1)",
      ],
      examTip: "Use all four required terms in the answer. If the question says 'use the terms', you MUST use every one listed — and use them correctly or marks are deducted.",
    },
  },

  // ─── obj-17-1: Variation and Mutation ────────────────────────────────────
  {
    id: "bio-17-1-e",
    subjectId: "biology-0610",
    objectiveId: "obj-17-1",
    difficulty: "Easy",
    marks: 2,
    question: "State the difference between continuous and discontinuous variation. Give one example of each.",
    workedSolution: {
      steps: [
        "Continuous variation: characteristics that show a range of values with no distinct groups — controlled by many genes (polygenic) and influenced by the environment.",
        "Discontinuous variation: characteristics that fall into distinct groups with no intermediates — usually controlled by a single gene.",
      ],
      markSchemePoints: [
        "Continuous: range of values / no distinct groups; example: height, mass, skin colour (1)",
        "Discontinuous: distinct categories / no intermediates; example: blood group (A, B, AB, O), tongue rolling, attached/free earlobes (1)",
      ],
      examTip: "Blood group is the classic discontinuous variation example. Height is the classic continuous variation example. Both appear frequently in exam questions.",
    },
  },
  {
    id: "bio-17-1-m",
    subjectId: "biology-0610",
    objectiveId: "obj-17-1",
    difficulty: "Medium",
    marks: 3,
    question: "Define the term 'mutation' and explain two ways in which mutations can arise.",
    workedSolution: {
      steps: [
        "A mutation is a change in the base sequence of DNA — this may alter the amino acid sequence of a protein, potentially changing its function.",
        "Mutations arise: (1) spontaneously during DNA replication — errors in copying the base sequence; (2) caused by mutagens — agents that increase mutation rate, e.g. UV radiation, ionising radiation (X-rays), certain chemicals (e.g. chemicals in tobacco smoke).",
      ],
      markSchemePoints: [
        "Mutation: change in the base sequence of DNA (1)",
        "Spontaneous errors during DNA replication (1)",
        "Caused by mutagens: UV radiation / ionising radiation / named chemical mutagen (1)",
      ],
      examTip: "Mutations are random and mostly harmful or neutral, but occasionally beneficial. This is important for understanding natural selection (topic 17.2).",
    },
  },

  // ─── obj-17-2: Natural Selection and Evolution ────────────────────────────
  {
    id: "bio-17-2-e",
    subjectId: "biology-0610",
    objectiveId: "obj-17-2",
    difficulty: "Easy",
    marks: 3,
    question: "Outline how natural selection leads to changes in a population over time. Use the example of antibiotic resistance in bacteria.",
    workedSolution: {
      steps: [
        "In a population of bacteria, there is natural variation — some bacteria have mutations that make them resistant to an antibiotic.",
        "When antibiotics are used, sensitive bacteria are killed (selection pressure).",
        "Resistant bacteria survive and reproduce — they pass on the resistance allele to offspring (survival of the fittest).",
        "Over many generations, the proportion of resistant bacteria in the population increases.",
        "This is evolution by natural selection — the population has changed genetically.",
      ],
      markSchemePoints: [
        "Variation exists in the population — some bacteria are resistant due to mutation (1)",
        "Antibiotic kills non-resistant bacteria (selection pressure) (1)",
        "Resistant bacteria survive, reproduce and pass resistance to offspring — frequency of resistance increases (1)",
      ],
      examTip: "Natural selection always has four components: variation, selection pressure (environmental challenge), survival of the fittest, reproduction passing on advantageous alleles.",
    },
  },
  {
    id: "bio-17-2-m",
    subjectId: "biology-0610",
    objectiveId: "obj-17-2",
    difficulty: "Medium",
    marks: 4,
    question: "Explain Darwin's theory of evolution by natural selection. Your answer should include the role of variation, struggle for survival, and inheritance.",
    workedSolution: {
      steps: [
        "All populations show variation (due to mutation and sexual reproduction).",
        "More offspring are produced than the environment can support — there is competition for limited resources (struggle for survival / overproduction).",
        "Individuals with favourable characteristics (adaptations) are better able to survive and reproduce.",
        "These favourable characteristics are inherited by offspring — they are passed on genetically.",
        "Over many generations, the favourable alleles increase in frequency — the population changes and may evolve into a new species.",
      ],
      markSchemePoints: [
        "Variation exists in the population (1)",
        "Overproduction of offspring → competition / struggle for survival (1)",
        "Individuals with advantageous characteristics more likely to survive and reproduce (survival of the fittest) (1)",
        "Favourable characteristics inherited by offspring → frequency increases over generations (1)",
      ],
      examTip: "Four key words for natural selection: Variation, Overproduction, Survival, Inheritance (VOSI). Memorise this sequence.",
    },
  },

  // ─── obj-18-1: Food Chains and Ecosystems ────────────────────────────────
  {
    id: "bio-18-1-e",
    subjectId: "biology-0610",
    objectiveId: "obj-18-1",
    difficulty: "Easy",
    marks: 2,
    question: "Explain why food chains rarely have more than five trophic levels.",
    workedSolution: {
      steps: [
        "Energy is lost at each trophic level — only about 10% of energy is transferred from one level to the next.",
        "Energy is lost as heat (respiration), movement, undigested food (egestion), and urine.",
        "By the fifth trophic level, there is so little energy remaining that it is insufficient to support another level.",
      ],
      markSchemePoints: [
        "Energy is lost at each trophic level (as heat through respiration, movement, egestion) (1)",
        "By 4–5 trophic levels, insufficient energy remains to support another consumer level (1)",
      ],
      examTip: "About 90% of energy is LOST at each level. Only 10% is transferred. By trophic level 5: 10⁻⁴ = 0.01% of original energy remains.",
    },
  },
  {
    id: "bio-18-1-m",
    subjectId: "biology-0610",
    objectiveId: "obj-18-1",
    difficulty: "Medium",
    marks: 4,
    question: "A pyramid of numbers and a pyramid of biomass are both used to represent feeding relationships. Explain why a pyramid of biomass is generally a more accurate representation than a pyramid of numbers.",
    workedSolution: {
      steps: [
        "A pyramid of numbers shows the number of individuals at each trophic level — but this can give misleading shapes (e.g. one large oak tree supports many insects).",
        "For example: one oak tree (producer) → thousands of caterpillars → dozens of birds → a few hawks. The pyramid of numbers would show a very wide second level and inverted base.",
        "A pyramid of biomass shows the total mass (dry mass) of organisms at each trophic level — this is always pyramid-shaped because each level has less total mass.",
        "Biomass better represents energy available at each level — it accounts for differences in organism size.",
      ],
      markSchemePoints: [
        "Pyramid of numbers can be inverted / misleading — e.g. one tree supports many parasites or herbivores (1)",
        "Pyramid of biomass uses total dry mass — better represents energy content at each level (1)",
        "Biomass pyramid is always pyramid-shaped / producer always has highest biomass (1)",
        "Named example of inverted numbers pyramid that biomass would correct (1)",
      ],
      examTip: "A pyramid of biomass is always the correct shape. A pyramid of numbers can be inverted if producers are large or if parasites are being counted.",
    },
  },

  // ─── obj-18-2: Nutrient Cycles ────────────────────────────────────────────
  {
    id: "bio-18-2-e",
    subjectId: "biology-0610",
    objectiveId: "obj-18-2",
    difficulty: "Easy",
    marks: 2,
    question: "State two ways in which carbon is returned to the atmosphere from living organisms.",
    workedSolution: {
      steps: [
        "Respiration: all living organisms (plants, animals, decomposers) respire — releasing CO₂ into the atmosphere.",
        "Decomposition: decomposers (bacteria and fungi) break down dead organic matter — respire and release CO₂.",
      ],
      markSchemePoints: [
        "Respiration by any living organism releases CO₂ into the atmosphere (1)",
        "Decomposition / decay by microorganisms (decomposers) releases CO₂ (1)",
      ],
      examTip: "Carbon returns to atmosphere via: respiration, decomposition, combustion (burning). Carbon is removed from atmosphere by: photosynthesis.",
    },
  },
  {
    id: "bio-18-2-m",
    subjectId: "biology-0610",
    objectiveId: "obj-18-2",
    difficulty: "Medium",
    marks: 4,
    question: "Describe the role of microorganisms in the nitrogen cycle. Include the processes of decomposition, nitrification, and denitrification.",
    workedSolution: {
      steps: [
        "Decomposition: decomposers (bacteria and fungi) break down proteins in dead organisms and urea in animal waste → release ammonia (ammonium ions) into soil.",
        "Nitrification: nitrifying bacteria in soil convert ammonium ions → nitrites → nitrates. Plants absorb nitrates to make amino acids and proteins.",
        "Denitrification: denitrifying bacteria in waterlogged/anaerobic soil convert nitrates → nitrogen gas (N₂), which is released into the atmosphere.",
        "Nitrogen fixation: nitrogen-fixing bacteria (in root nodules of legumes or free-living in soil) convert N₂ from atmosphere into ammonium ions/nitrates — making nitrogen available to plants again.",
      ],
      markSchemePoints: [
        "Decomposers break down proteins/urea → ammonia/ammonium ions in soil (1)",
        "Nitrifying bacteria convert ammonium ions → nitrites → nitrates (1)",
        "Denitrifying bacteria convert nitrates → nitrogen gas / return N₂ to atmosphere (1)",
        "Nitrogen-fixing bacteria convert N₂ → ammonium ions / nitrates (in root nodules or soil) (1)",
      ],
      examTip: "The nitrogen cycle has four bacterial processes: decomposition, nitrification, denitrification, and nitrogen fixation. Know which bacteria do each process and in which direction nitrogen moves.",
    },
  },
];
