import { TopicNote } from "@/types/content";

export const biologyTopicNotes: TopicNote[] = [
  // ─── obj-1-1: Characteristics of Living Organisms ───────────────────────
  {
    id: "bio-note-1-1",
    subjectId: "biology-0610",
    objectiveId: "obj-1-1",
    title: "Characteristics of Living Organisms",
    keyPoints: [
      "All living organisms share 7 characteristics — remembered by MRS GREN",
      "Movement does NOT mean locomotion — includes internal movements",
      "Respiration is not breathing — it is the chemical release of energy from food",
      "Excretion removes metabolic waste — not just faeces (that is egestion)",
    ],
    content: [
      {
        kind: "bullets",
        heading: "MRS GREN — the 7 characteristics",
        bullets: [
          "Movement — organisms can move part or all of their body",
          "Respiration — chemical process releasing energy from food (glucose + oxygen → CO₂ + water + ATP)",
          "Sensitivity — ability to detect and respond to changes in the environment (stimuli)",
          "Growth — permanent increase in size and dry mass by cell division and differentiation",
          "Reproduction — producing offspring (sexual or asexual)",
          "Excretion — removal of toxic metabolic waste products (CO₂, urea, excess salts)",
          "Nutrition — taking in or manufacturing food for energy and building materials",
        ],
      },
      {
        kind: "paragraph",
        heading: "Common confusions to avoid",
        text: "Respiration ≠ breathing. Breathing is the physical process of moving air in and out of lungs. Respiration is the cellular chemical process of releasing energy from glucose — it happens in every living cell. Excretion ≠ egestion. Excretion removes waste products of metabolism (produced inside the body). Egestion removes undigested food through the anus — it was never truly inside the body's cells.",
      },
      {
        kind: "table",
        heading: "Examples of each characteristic in animals and plants",
        headers: ["Characteristic", "Animal example", "Plant example"],
        rows: [
          ["Movement", "Walking / muscle contraction", "Shoot growing towards light (phototropism)"],
          ["Respiration", "Mitochondria in muscle cells releasing ATP", "Mitochondria in root cells releasing ATP"],
          ["Sensitivity", "Eye detecting light, withdrawing hand from heat", "Root growing towards gravity (gravitropism)"],
          ["Growth", "Child growing taller by cell division", "Root tip extending by cell division + elongation"],
          ["Reproduction", "Producing offspring sexually or asexually", "Producing seeds (sexual) or runners (asexual)"],
          ["Excretion", "Kidneys producing urine (urea)", "Leaves releasing O₂ (from photosynthesis)"],
          ["Nutrition", "Eating and digesting food (heterotrophic)", "Photosynthesis (autotrophic)"],
        ],
      },
      {
        kind: "paragraph",
        heading: "Are viruses alive?",
        text: "Viruses are not considered living organisms because they do not fulfil all 7 characteristics. They cannot carry out respiration, they have no cellular structure, and they can only reproduce inside a host cell. They do not grow, excrete, or respond independently. This makes them a borderline case — they contain genetic material (DNA or RNA) and can evolve, but are not considered independently alive by most biologists.",
      },
      {
        kind: "definition",
        term: "Metabolism",
        definition: "The sum of all chemical reactions occurring inside a living organism. Metabolic reactions are either anabolic (building larger molecules, e.g. protein synthesis) or catabolic (breaking down larger molecules, e.g. respiration). Waste products of metabolism include CO₂, urea, and excess water — these must be excreted.",
      },
    ],
    examTips: [
      "For any 'state characteristics' question — list and define. You score a mark for each correct characteristic + its definition.",
      "If asked to explain how a virus or fire is not alive — refer to the lack of cells, no metabolism, and cannot reproduce independently.",
      "Movement questions almost always have a plant twist — always say movement includes internal movements, not just locomotion.",
      "MRS GREN is a mnemonic — in the exam, write the full word and a brief definition for each characteristic to score maximum marks.",
    ],
    commonMistakes: [
      "Writing 'respiration = breathing' — these are completely different processes.",
      "Confusing excretion (metabolic waste) with egestion (undigested food).",
      "Saying plants cannot move — plants show movement of parts, especially tropisms.",
      "Listing 'reproduction' without clarifying it can be sexual or asexual.",
    ],
    relatedTopics: [
      { label: "Classification of Living Organisms", subjectId: "biology-0610", objectiveId: "obj-1-2" },
      { label: "Cell Structure", subjectId: "biology-0610", objectiveId: "obj-2-1" },
      { label: "Enzyme Action", subjectId: "biology-0610", objectiveId: "obj-5-1" },
    ],
  },

  // ─── obj-1-2: Classification ─────────────────────────────────────────────
  {
    id: "bio-note-1-2",
    subjectId: "biology-0610",
    objectiveId: "obj-1-2",
    title: "Classification of Living Organisms",
    keyPoints: [
      "The five kingdoms: Animalia, Plantae, Fungi, Protoctista, Prokaryotae",
      "Classification hierarchy: Kingdom → Phylum → Class → Order → Family → Genus → Species",
      "Binomial nomenclature: Genus species (Homo sapiens) — capital G, lower case s, italicised",
      "Species = organisms that can interbreed to produce fertile offspring",
    ],
    content: [
      {
        kind: "table",
        heading: "The Five Kingdoms",
        headers: ["Kingdom", "Key features", "Examples"],
        rows: [
          ["Animalia", "Eukaryotic, no cell wall, heterotrophic, can move", "Humans, fish, insects"],
          ["Plantae", "Eukaryotic, cellulose cell wall, autotrophic (photosynthesis)", "Oak tree, grass, moss"],
          ["Fungi", "Eukaryotic, chitin cell wall, saprophytic (extracellular digestion)", "Mushrooms, yeast, moulds"],
          ["Protoctista", "Eukaryotic, mostly unicellular, varied nutrition", "Amoeba, Euglena, Plasmodium"],
          ["Prokaryotae", "No membrane-bound nucleus, smaller ribosomes, circular DNA", "E. coli, Streptococcus"],
        ],
      },
      {
        kind: "bullets",
        heading: "The classification hierarchy (largest → smallest)",
        bullets: [
          "Kingdom — broadest group",
          "Phylum — e.g. Chordata (animals with a backbone)",
          "Class — e.g. Mammalia",
          "Order — e.g. Primates",
          "Family — e.g. Hominidae",
          "Genus — first word of the scientific name (capital letter)",
          "Species — second word (lower case); organisms that breed to produce fertile offspring",
        ],
      },
      {
        kind: "paragraph",
        heading: "Binomial nomenclature",
        text: "Every organism has a unique two-part Latin scientific name: Genus species. For example, humans are Homo sapiens. The genus name is capitalised, the species name is lower case. When typed or printed, names are italicised; when handwritten, they must be underlined. This system is universal — all scientists worldwide use the same name for the same organism, avoiding confusion caused by different common names.",
      },
      {
        kind: "definition",
        term: "Species",
        definition: "A group of organisms that share similar features and can interbreed to produce fertile offspring. Organisms that produce infertile offspring (e.g. mules from horse × donkey) are NOT the same species.",
      },
      {
        kind: "bullets",
        heading: "Features of each vertebrate group (Phylum Chordata)",
        bullets: [
          "Fish — scales, gills for gas exchange, lay eggs in water, ectothermic (cold-blooded)",
          "Amphibians — moist skin (gas exchange), lay eggs in water, ectothermic, can breathe air as adults",
          "Reptiles — dry scales, lay eggs with shells (on land), ectothermic",
          "Birds — feathers, wings, lay hard-shelled eggs, endothermic (warm-blooded)",
          "Mammals — hair/fur, give birth to live young (mostly), suckle young with milk, endothermic",
        ],
      },
      {
        kind: "paragraph",
        heading: "Dichotomous keys",
        text: "A dichotomous key is a tool used to identify unknown organisms by answering a series of questions, each with exactly two possible answers (yes/no or either/or). At each step, the answer leads you to the next question or to an identification. When constructing a key, ensure each question has exactly two clear options, applies to at least two of the remaining organisms, and eventually leads to each organism being uniquely identified.",
      },
    ],
    examTips: [
      "Remember: yeast is a FUNGUS, not a plant or bacterium — this is a classic trick in classification questions.",
      "For dichotomous key questions: every question must have exactly two options, and you must eventually arrive at a single organism.",
      "When asked 'what is a species?', you must include 'fertile offspring' — infertile offspring do not count.",
      "The mnemonic for the hierarchy: 'King Philip Came Over For Good Soup' (Kingdom, Phylum, Class, Order, Family, Genus, Species).",
    ],
    commonMistakes: [
      "Forgetting that chitin cell walls = Fungi (not Plantae, which use cellulose).",
      "Writing scientific names without italics/underline, or reversing the capitalisation (genus must be capital).",
      "Saying viruses are in Prokaryotae — viruses are NOT classified in any kingdom as they are not considered living organisms.",
    ],
    relatedTopics: [
      { label: "Characteristics of Living Organisms", subjectId: "biology-0610", objectiveId: "obj-1-1" },
      { label: "Cell Structure", subjectId: "biology-0610", objectiveId: "obj-2-1" },
    ],
  },

  // ─── obj-2-1: Cell Structure ─────────────────────────────────────────────
  {
    id: "bio-note-2-1",
    subjectId: "biology-0610",
    objectiveId: "obj-2-1",
    title: "Cell Structure",
    keyPoints: [
      "Plant cells have cell wall (cellulose), chloroplasts, and permanent vacuole — animal cells do not",
      "Both plant and animal cells have: nucleus, cell membrane, cytoplasm, mitochondria, ribosomes",
      "Prokaryotic cells have no membrane-bound nucleus and smaller (70S) ribosomes",
      "Always link organelle structure to function",
    ],
    content: [
      {
        kind: "image",
        src: "/diagram-previews/cell-structure.png",
        alt: "Diagram showing plant and animal cell structures with labelled organelles",
        caption: "Figure 1: Comparison of a typical animal cell (left) and plant cell (right) with key organelles labelled.",
      },
      {
        kind: "table",
        heading: "Organelles: structure and function",
        headers: ["Organelle", "Structure", "Function"],
        rows: [
          ["Nucleus", "Membrane-bound, contains chromosomes (DNA)", "Controls cell activities; contains genetic information"],
          ["Cell membrane", "Phospholipid bilayer with proteins (fluid-mosaic)", "Controls what enters and leaves the cell (selective permeability)"],
          ["Cytoplasm", "Watery solution with dissolved substances", "Site of many chemical reactions"],
          ["Mitochondria", "Double membrane; folded inner membrane (cristae)", "Site of aerobic respiration — produces ATP"],
          ["Ribosomes", "Tiny structures in cytoplasm or on rough ER", "Site of protein synthesis"],
          ["Cell wall (plant)", "Made of cellulose fibres; rigid", "Provides structural support; prevents over-expansion"],
          ["Chloroplast (plant)", "Double membrane; internal membrane stacks (grana); contains chlorophyll", "Site of photosynthesis"],
          ["Vacuole (plant)", "Large, permanent, filled with cell sap", "Maintains cell turgor; stores dissolved substances"],
        ],
      },
      {
        kind: "paragraph",
        heading: "Prokaryotic vs Eukaryotic cells",
        text: "Prokaryotic cells (bacteria) are smaller, have no membrane-bound nucleus (DNA is free in cytoplasm as a single circular chromosome), have smaller ribosomes (70S vs 80S), and may have plasmids. They have no mitochondria, chloroplasts, or endoplasmic reticulum. Eukaryotic cells (animals, plants, fungi) have a true nucleus, membrane-bound organelles, and larger ribosomes.",
      },
      {
        kind: "bullets",
        heading: "Key differences: plant vs animal cells",
        bullets: [
          "Plant ONLY: cellulose cell wall, chloroplasts, large permanent vacuole",
          "Both: nucleus, cell membrane, cytoplasm, mitochondria, ribosomes",
          "Animal cells may have centrioles (for cell division) — plant cells do not",
          "Animal cells may have small temporary vacuoles",
          "Animal cells have irregular shapes; plant cells tend to be more regular/box-like",
        ],
      },
      {
        kind: "definition",
        term: "Cell membrane (plasma membrane)",
        definition: "A thin, flexible layer made of a phospholipid bilayer with embedded proteins. It is selectively permeable — it controls which substances enter and leave the cell. Small, non-polar molecules (e.g. O₂, CO₂) pass freely. Larger or polar molecules require transport proteins.",
      },
      {
        kind: "paragraph",
        heading: "Mitochondria — the powerhouse",
        text: "Mitochondria have a double membrane. The inner membrane is folded into structures called cristae, which greatly increase surface area for aerobic respiration reactions. The matrix (inner fluid) contains enzymes for the Krebs cycle. Cells that need lots of energy (e.g. muscle cells, liver cells, sperm cells) have many more mitochondria than less active cells.",
      },
    ],
    examTips: [
      "In a diagram labelling question, always draw arrows to the exact structure — not just pointing vaguely at the cell.",
      "When explaining adaptations, use the format: 'X has Y structure, which means Z function occurs efficiently'.",
      "'Mitochondria are the site of aerobic respiration' — say this exactly. Do not say 'mitochondria produce energy' (they produce ATP).",
      "For prokaryotic cell questions: no membrane-bound nucleus, circular DNA, 70S ribosomes, possible plasmids — these are the key differences.",
    ],
    commonMistakes: [
      "Saying animal cells have a cell wall — they do not.",
      "Confusing 'cell membrane' with 'cell wall' — the membrane controls entry/exit; the wall provides structural support.",
      "Stating chloroplasts are found in all plant cells — only in cells exposed to light (leaf mesophyll), not in root cells.",
    ],
    relatedTopics: [
      { label: "Levels of Organisation", subjectId: "biology-0610", objectiveId: "obj-2-2" },
      { label: "Diffusion and Osmosis", subjectId: "biology-0610", objectiveId: "obj-3-1" },
      { label: "Active Transport", subjectId: "biology-0610", objectiveId: "obj-3-2" },
      { label: "Characteristics of Living Organisms", subjectId: "biology-0610", objectiveId: "obj-1-1" },
    ],
  },

  // ─── obj-2-2: Levels of Organisation ─────────────────────────────────────
  {
    id: "bio-note-2-2",
    subjectId: "biology-0610",
    objectiveId: "obj-2-2",
    title: "Levels of Organisation",
    keyPoints: [
      "Hierarchy: cell → tissue → organ → organ system → organism",
      "Cell differentiation = cells becoming specialised for a particular function",
      "Specialised cells express only certain genes from the shared DNA",
      "Division of labour: each specialised cell type does one job very efficiently",
    ],
    content: [
      {
        kind: "table",
        heading: "Levels of organisation with examples",
        headers: ["Level", "Definition", "Human example", "Plant example"],
        rows: [
          ["Cell", "Basic unit of life", "Red blood cell", "Palisade mesophyll cell"],
          ["Tissue", "Group of similar cells performing the same function", "Muscle tissue", "Palisade tissue"],
          ["Organ", "Group of different tissues working together", "Heart", "Leaf"],
          ["Organ system", "Group of organs working together", "Circulatory system", "Shoot system"],
          ["Organism", "Complete living thing", "Human", "Oak tree"],
        ],
      },
      {
        kind: "paragraph",
        heading: "Cell differentiation",
        text: "All cells in an organism contain the same DNA (from the original fertilised egg). During development, cells differentiate — they switch on only some of their genes. This causes different cells to develop different structures, suited to different functions. This is why a muscle cell looks and behaves differently from a nerve cell, despite having identical DNA. Once differentiated, most animal cells cannot change type (unlike stem cells).",
      },
      {
        kind: "table",
        heading: "Specialised cells — structure linked to function",
        headers: ["Cell", "Special feature", "Function enabled"],
        rows: [
          ["Red blood cell", "No nucleus → more space for haemoglobin; biconcave disc → large surface area", "Carries maximum O₂ efficiently"],
          ["Nerve cell (neurone)", "Long axon; myelin sheath for insulation", "Transmits impulses rapidly over long distances"],
          ["Palisade mesophyll", "Many chloroplasts; tall columnar shape", "Maximum light absorption for photosynthesis"],
          ["Root hair cell", "Long extension into soil; large surface area", "Maximum absorption of water and mineral ions"],
          ["Sperm cell", "Head with acrosome (enzymes to penetrate egg); many mitochondria in midpiece; tail", "Fertilises egg cell"],
        ],
      },
      {
        kind: "definition",
        term: "Stem cell",
        definition: "An undifferentiated cell that has the ability to divide and develop into many different specialised cell types. Embryonic stem cells are pluripotent — they can become any cell type in the body. Adult stem cells are more limited. Stem cells have important potential uses in medicine for replacing damaged tissues.",
      },
      {
        kind: "bullets",
        heading: "How differentiation works — key steps",
        bullets: [
          "The fertilised egg (zygote) contains all the organism's DNA",
          "After cell division, all daughter cells contain the same DNA",
          "Gene expression is controlled — different genes are switched on or off in different cells",
          "Switched-on genes produce proteins that determine cell structure and function",
          "The resulting specialised cell has a unique shape, organelle composition, and biochemistry",
          "Most animal cells are terminally differentiated — they cannot revert to an undifferentiated state",
        ],
      },
    ],
    examTips: [
      "If asked to describe the organisation levels, always use the mnemonic: Cell → Tissue → Organ → Organ System → Organism.",
      "For specialised cell questions: state the feature, then say what it enables. Never just list features without function.",
      "'All cells have the same DNA' is a key fact — use this when asked why differentiation is remarkable.",
    ],
    commonMistakes: [
      "Saying different cells have different DNA — all cells in one organism have the same DNA.",
      "Forgetting that an organ contains DIFFERENT types of tissue (e.g. the heart has muscle tissue, nervous tissue, and connective tissue).",
      "Describing tissues as a single cell type — tissues are a group of similar (but not always identical) cells.",
    ],
    relatedTopics: [
      { label: "Cell Structure", subjectId: "biology-0610", objectiveId: "obj-2-1" },
      { label: "Diffusion and Osmosis", subjectId: "biology-0610", objectiveId: "obj-3-1" },
    ],
  },

  // ─── obj-3-1: Diffusion and Osmosis ──────────────────────────────────────
  {
    id: "bio-note-3-1",
    subjectId: "biology-0610",
    objectiveId: "obj-3-1",
    title: "Diffusion and Osmosis",
    keyPoints: [
      "Diffusion: net movement of molecules from HIGH to LOW concentration — passive, no energy",
      "Osmosis: movement of WATER MOLECULES ONLY across a partially permeable membrane from high to low water potential",
      "Higher water potential = more dilute solution",
      "Turgor pressure keeps plant cells firm; plasmolysis occurs when cells lose too much water",
    ],
    content: [
      {
        kind: "image",
        src: "/diagram-previews/diffusion-osmosis.png",
        alt: "Diagram illustrating diffusion and osmosis across membranes",
        caption: "Figure 1: Diffusion (left) — molecules move from high to low concentration. Osmosis (right) — water moves across a partially permeable membrane from high to low water potential.",
      },
      {
        kind: "definition",
        term: "Diffusion",
        definition: "The net movement of molecules or ions from a region of higher concentration to a region of lower concentration (down the concentration gradient), as a result of the random motion of particles. Diffusion is a passive process — no energy (ATP) is required.",
      },
      {
        kind: "definition",
        term: "Osmosis",
        definition: "The net movement of water molecules from a region of higher water potential (dilute solution) to a region of lower water potential (concentrated solution), through a partially permeable membrane. This is a passive process.",
      },
      {
        kind: "bullets",
        heading: "Factors affecting the rate of diffusion",
        bullets: [
          "Concentration gradient — steeper gradient → faster diffusion",
          "Surface area — larger surface area → faster diffusion",
          "Distance — shorter diffusion distance → faster diffusion",
          "Temperature — higher temperature → faster molecular movement → faster diffusion",
          "Molecular size — smaller molecules diffuse faster",
        ],
      },
      {
        kind: "table",
        heading: "Effects of osmosis on plant cells",
        headers: ["Condition", "What happens", "Term"],
        rows: [
          ["Cell in dilute / pure water (lower solute concentration outside)", "Water enters cell by osmosis → cell swells → vacuole pushes against cell wall → cell firm", "Turgid"],
          ["Cell in concentrated solution (higher solute concentration outside)", "Water leaves cell by osmosis → cytoplasm shrinks → cell membrane pulls away from cell wall", "Plasmolysed"],
          ["Cell in solution of equal concentration to cell contents", "No net movement of water → cell neither gains nor loses water", "Incipient plasmolysis / flaccid"],
        ],
      },
      {
        kind: "paragraph",
        heading: "Why plant cells don't burst when turgid",
        text: "Unlike animal cells, plant cells have a rigid cellulose cell wall. When water enters by osmosis, the cell contents push outward (turgor pressure) but the cell wall pushes back (wall pressure). These forces balance — the cell becomes turgid but does not burst. Animal cells lack a cell wall and will burst (lysis) if placed in very dilute solutions.",
      },
      {
        kind: "paragraph",
        heading: "Osmosis in animal cells",
        text: "Animal cells placed in a dilute solution (hypotonic) will take in water by osmosis and may swell and burst (lysis) because there is no cell wall to resist. Animal cells in a concentrated solution (hypertonic) will lose water by osmosis and shrink (crenation). Animal cells in an isotonic solution (same water potential as cell contents) remain unchanged. This is why intravenous fluids must be isotonic with blood.",
      },
      {
        kind: "table",
        heading: "Comparing diffusion and osmosis",
        headers: ["Feature", "Diffusion", "Osmosis"],
        rows: [
          ["Substance moved", "Any molecule or ion", "Water molecules only"],
          ["Membrane needed?", "Not always", "Yes — partially permeable membrane required"],
          ["Energy required?", "No (passive)", "No (passive)"],
          ["Direction", "High → low concentration", "High → low water potential"],
          ["Example in biology", "CO₂ out of respiring cells", "Water into root hair cells"],
        ],
      },
    ],
    examTips: [
      "You MUST say 'water molecules' in the osmosis definition — never 'particles' or 'substance'.",
      "For osmosis experiments with potato: mass increase = water entered = solution was MORE dilute than potato. Mass decrease = water left = solution was MORE concentrated than potato.",
      "Always state the direction of water movement AND why (water potential difference) for full marks.",
      "Include 'partially permeable membrane' explicitly when defining osmosis — examiners deduct marks if it is missing.",
    ],
    commonMistakes: [
      "Using the word 'particles' instead of 'water molecules' in osmosis definitions.",
      "Forgetting to mention 'partially permeable membrane' in the osmosis definition.",
      "Saying cells 'absorb' or 'take up' water — say 'water moves in by osmosis down the water potential gradient'.",
      "Confusing plasmolysis (plant cell losing water) with crenation (animal cell losing water — they look different).",
    ],
    relatedTopics: [
      { label: "Active Transport", subjectId: "biology-0610", objectiveId: "obj-3-2" },
      { label: "Cell Structure", subjectId: "biology-0610", objectiveId: "obj-2-1" },
      { label: "Biological Molecules", subjectId: "biology-0610", objectiveId: "obj-4-1" },
    ],
  },

  // ─── obj-3-2: Active Transport ────────────────────────────────────────────
  {
    id: "bio-note-3-2",
    subjectId: "biology-0610",
    objectiveId: "obj-3-2",
    title: "Active Transport",
    keyPoints: [
      "Active transport moves substances AGAINST the concentration gradient",
      "Requires ATP energy (from respiration)",
      "Requires specific carrier proteins in the cell membrane",
      "Key examples: mineral ions into root hair cells; glucose reabsorption in kidney",
    ],
    content: [
      {
        kind: "definition",
        term: "Active transport",
        definition: "The movement of molecules or ions across a cell membrane from a region of lower concentration to a region of higher concentration (against the concentration gradient), using energy in the form of ATP from respiration, and requiring specific carrier proteins.",
      },
      {
        kind: "table",
        heading: "Comparing diffusion, osmosis and active transport",
        headers: ["Feature", "Diffusion", "Osmosis", "Active Transport"],
        rows: [
          ["Direction", "High → low concentration", "High → low water potential", "Low → high concentration"],
          ["Energy required", "No (passive)", "No (passive)", "Yes (ATP from respiration)"],
          ["Membrane required", "Not always", "Yes (partially permeable)", "Yes"],
          ["Carrier proteins", "Not required", "Not required (aquaporins help)", "Required"],
          ["Substance moved", "Any molecule/ion", "Water molecules only", "Specific molecules/ions"],
        ],
      },
      {
        kind: "bullets",
        heading: "Key examples of active transport in biology",
        bullets: [
          "Root hair cells absorbing mineral ions (nitrate, phosphate) from soil — soil concentration is lower than inside root cells",
          "Glucose reabsorption in kidney tubules — glucose moves from tubule fluid back into blood against gradient",
          "Nerve cells maintaining sodium/potassium ion gradients — sodium-potassium pump uses ATP continuously",
          "Absorption of glucose and amino acids in the small intestine — from gut lumen into epithelial cells",
        ],
      },
      {
        kind: "paragraph",
        heading: "Why active transport requires respiration",
        text: "The carrier proteins that move substances against the gradient need energy to change shape and transport molecules across the membrane. This energy comes from ATP, which is produced by cellular respiration (mainly aerobic). If respiration is inhibited (e.g. by metabolic poisons, lack of oxygen, low temperature), ATP production falls and active transport stops. This is why cells doing a lot of active transport (e.g. root hair cells, kidney tubule cells) have many mitochondria.",
      },
      {
        kind: "paragraph",
        heading: "Experimental evidence for active transport",
        text: "Several types of experiments demonstrate active transport. If cells are treated with a metabolic poison (e.g. cyanide) that inhibits respiration, active transport stops — showing it requires ATP. If the oxygen supply is reduced, active transport slows. Experiments comparing ion uptake at different temperatures show that at low temperatures (which slow respiration), uptake is greatly reduced, whereas diffusion is less affected. All this evidence distinguishes active transport from passive diffusion.",
      },
    ],
    examTips: [
      "Always justify WHY active transport is needed — state that the concentration inside the cell is already HIGHER than outside, so diffusion cannot work.",
      "If an experiment shows that cooling (reducing respiration) stops ion uptake — this is evidence for active transport, not diffusion.",
      "The phrase 'against the concentration gradient' is essential in any active transport definition.",
    ],
    commonMistakes: [
      "Saying active transport 'uses energy from food' — be specific: it uses ATP produced by respiration.",
      "Forgetting to mention carrier proteins — active transport requires specific carrier proteins, unlike diffusion.",
      "Confusing active transport (ions moving against gradient) with facilitated diffusion (molecules moving down gradient via channel proteins — still passive).",
    ],
    relatedTopics: [
      { label: "Diffusion and Osmosis", subjectId: "biology-0610", objectiveId: "obj-3-1" },
      { label: "Cell Structure", subjectId: "biology-0610", objectiveId: "obj-2-1" },
      { label: "Enzyme Action", subjectId: "biology-0610", objectiveId: "obj-5-1" },
    ],
  },

  // ─── obj-4-1: Biological Molecules ───────────────────────────────────────
  {
    id: "bio-note-4-1",
    subjectId: "biology-0610",
    objectiveId: "obj-4-1",
    title: "Biological Molecules",
    keyPoints: [
      "Carbohydrates contain C, H, O — used for energy and structural support",
      "Proteins contain C, H, O, N (and S) — used as enzymes, antibodies, structural components",
      "Lipids contain C, H, O — used for energy storage and insulation",
      "Food tests: starch (iodine → blue-black), reducing sugars (Benedict's + heat → brick-red), protein (Biuret → purple), fat (ethanol emulsion → white precipitate)",
    ],
    content: [
      {
        kind: "table",
        heading: "Summary of biological molecules",
        headers: ["Molecule", "Elements", "Monomer", "Examples", "Function"],
        rows: [
          ["Carbohydrates", "C, H, O", "Glucose (monosaccharide)", "Starch, glycogen, cellulose, sucrose", "Energy source; energy storage; structural support (cellulose)"],
          ["Proteins", "C, H, O, N (S)", "Amino acids", "Enzymes, haemoglobin, collagen, insulin", "Enzymes; transport; structural; hormones; antibodies"],
          ["Lipids (fats/oils)", "C, H, O", "Glycerol + fatty acids", "Triglycerides, phospholipids", "Long-term energy storage; insulation; cell membranes"],
        ],
      },
      {
        kind: "table",
        heading: "Food tests",
        headers: ["Substance", "Reagent", "Procedure", "Positive result"],
        rows: [
          ["Starch", "Iodine solution", "Add drops of iodine to sample", "Blue-black colour"],
          ["Reducing sugar", "Benedict's solution", "Add Benedict's, heat in water bath", "Brick-red / orange precipitate"],
          ["Non-reducing sugar (sucrose)", "Benedict's (after hydrolysis)", "Boil with HCl to hydrolyse, neutralise, then add Benedict's and heat", "Brick-red precipitate"],
          ["Protein", "Biuret reagent", "Add Biuret (NaOH + CuSO₄) to sample", "Purple / violet colour"],
          ["Fat", "Ethanol emulsion test", "Dissolve in ethanol, add to water", "Milky white emulsion"],
        ],
      },
      {
        kind: "paragraph",
        heading: "Carbohydrate structure",
        text: "Monosaccharides (e.g. glucose, fructose) are the simplest carbohydrates. Two monosaccharides join to form a disaccharide (e.g. sucrose = glucose + fructose; maltose = glucose + glucose). Many monosaccharides join to form a polysaccharide (e.g. starch, glycogen, cellulose). Polysaccharides are insoluble — ideal for storage as they don't affect osmosis.",
      },
      {
        kind: "definition",
        term: "Condensation reaction",
        definition: "A reaction in which two molecules join together with the removal of water. For example, two glucose molecules join by a condensation reaction to form maltose. The reverse — breaking bonds by adding water — is called hydrolysis.",
      },
      {
        kind: "bullets",
        heading: "Proteins — structure and function",
        bullets: [
          "Proteins are polymers of amino acids linked by peptide bonds (formed by condensation)",
          "The sequence of amino acids is determined by DNA (via mRNA)",
          "The 3D shape of a protein is crucial for its function (e.g. the active site of an enzyme)",
          "Structural proteins: collagen (tendons, skin), keratin (hair, nails)",
          "Functional proteins: enzymes, hormones (insulin), antibodies, haemoglobin",
          "Proteins are denatured by high temperature or extreme pH — the 3D shape is permanently altered",
        ],
      },
      {
        kind: "paragraph",
        heading: "Lipids — fats and oils",
        text: "Lipids are formed by condensation reactions between one glycerol molecule and three fatty acid molecules, producing a triglyceride and three water molecules. Fats are solid at room temperature (saturated fatty acids); oils are liquid (unsaturated fatty acids). Phospholipids are a special type that form the cell membrane — they have a hydrophilic (water-loving) head and hydrophobic (water-hating) tails, creating a bilayer.",
      },
    ],
    examTips: [
      "Benedict's test MUST be heated in a water bath — always state this, or you lose the method mark.",
      "Biuret test: NaOH is added first to make the solution alkaline, then CuSO₄. Some papers just say 'Biuret reagent' — both are acceptable.",
      "The food test for lipids (ethanol emulsion) is often forgotten — practise recalling all five tests.",
      "Always state that a negative result for reducing sugar (Benedict's test remains blue) does NOT mean no sugar is present — the sugar could be non-reducing (e.g. sucrose).",
    ],
    commonMistakes: [
      "Saying proteins contain only C, H, O — they also contain nitrogen (N) and sometimes sulfur (S).",
      "Confusing starch (plant storage) with glycogen (animal storage) — both are polysaccharides of glucose but stored in different organisms.",
      "Saying Benedict's test needs to 'boil' — it needs gentle heating in a water bath, not vigorous boiling.",
    ],
    relatedTopics: [
      { label: "Enzyme Action", subjectId: "biology-0610", objectiveId: "obj-5-1" },
      { label: "Factors Affecting Enzyme Activity", subjectId: "biology-0610", objectiveId: "obj-5-2" },
      { label: "Diffusion and Osmosis", subjectId: "biology-0610", objectiveId: "obj-3-1" },
    ],
  },

  // ─── obj-5-1: Enzyme Action ───────────────────────────────────────────────
  {
    id: "bio-note-5-1",
    subjectId: "biology-0610",
    objectiveId: "obj-5-1",
    title: "Enzyme Action",
    keyPoints: [
      "Enzymes are biological catalysts — proteins that speed up chemical reactions without being used up",
      "The active site has a specific shape complementary to the substrate",
      "Lock and key model: substrate fits active site; enzyme-substrate complex forms; products released",
      "Enzymes are specific — one enzyme, one substrate (due to active site shape)",
    ],
    content: [
      {
        kind: "image",
        src: "/diagram-previews/enzyme-action.png",
        alt: "Diagram of the lock and key model of enzyme action showing substrate binding to active site",
        caption: "Figure 1: The lock and key model. The substrate (key) fits precisely into the active site of the enzyme (lock), forming an enzyme-substrate complex before products are released.",
      },
      {
        kind: "definition",
        term: "Enzyme",
        definition: "A biological catalyst — a protein that speeds up the rate of a chemical reaction without itself being changed or used up. Enzymes are specific: each enzyme has an active site that is complementary in shape to only one type of substrate.",
      },
      {
        kind: "bullets",
        heading: "The lock and key model — step by step",
        bullets: [
          "1. The enzyme has an active site with a specific 3D shape",
          "2. The substrate has a complementary shape to the active site",
          "3. The substrate binds to the active site → enzyme-substrate complex forms",
          "4. The enzyme catalyses the reaction: bonds in the substrate break (or new bonds form between substrates)",
          "5. The product(s) are released from the active site",
          "6. The enzyme is unchanged and free to bind another substrate molecule",
        ],
      },
      {
        kind: "paragraph",
        heading: "Enzyme specificity",
        text: "Each enzyme can only catalyse one reaction because only one substrate fits its active site. This is called enzyme specificity. For example, amylase can only break down starch (not proteins or fats); protease can only break down proteins. This is because the active site shape is determined by the enzyme's amino acid sequence, which is unique for each enzyme type.",
      },
      {
        kind: "table",
        heading: "Key digestive enzymes",
        headers: ["Enzyme", "Substrate", "Product(s)", "Where produced"],
        rows: [
          ["Amylase", "Starch", "Maltose", "Salivary glands, pancreas"],
          ["Protease (e.g. pepsin)", "Protein", "Amino acids / peptides", "Stomach, pancreas"],
          ["Lipase", "Lipids (fats/oils)", "Fatty acids + glycerol", "Pancreas"],
          ["Maltase", "Maltose", "Glucose + glucose", "Small intestine (epithelium)"],
        ],
      },
      {
        kind: "image",
        src: "/diagram-previews/small_intestine.png",
        alt: "Diagram of the small intestine showing digestive enzyme action",
        caption: "Figure 2: The small intestine is the primary site of enzyme digestion. Enzymes from the pancreas (amylase, lipase, proteases) act on food passing through.",
      },
      {
        kind: "paragraph",
        heading: "Enzyme inhibition — overview",
        text: "Competitive inhibitors have a similar shape to the substrate and compete to bind to the active site — effect is reduced by adding more substrate. Non-competitive inhibitors bind to an allosteric site (not the active site) and change the shape of the active site — the substrate can no longer fit, and adding more substrate does NOT reverse the effect.",
      },
      {
        kind: "table",
        heading: "Competitive vs non-competitive inhibition",
        headers: ["Feature", "Competitive inhibition", "Non-competitive inhibition"],
        rows: [
          ["Binding site", "Active site", "Allosteric site (elsewhere on enzyme)"],
          ["Shape similarity to substrate", "Yes — similar shape", "No — different shape"],
          ["Effect on active site", "Blocks substrate from binding", "Changes shape of active site"],
          ["Reversed by more substrate?", "Yes", "No"],
          ["Example", "Malonate inhibiting succinate dehydrogenase", "Heavy metal ions (Pb²⁺, Hg²⁺)"],
        ],
      },
    ],
    examTips: [
      "Use the word 'complementary' when describing the relationship between enzyme and substrate — not 'same shape' or 'matching shape'.",
      "Always say the enzyme is 'unchanged' at the end of the reaction — this is what makes it a catalyst.",
      "For inhibition questions: competitive = can overcome with more substrate; non-competitive = cannot overcome.",
      "When writing about enzyme digestion, name both the enzyme AND its substrate AND product — all three are needed for full marks.",
    ],
    commonMistakes: [
      "Saying enzymes are 'destroyed' or 'used up' during reactions — they are unchanged catalysts.",
      "Describing the active site as the same shape as the substrate — it is complementary (like a lock and key, not two identical keys).",
      "Confusing substrate and product — the substrate is what the enzyme works on, the product is what is made.",
    ],
    relatedTopics: [
      { label: "Factors Affecting Enzyme Activity", subjectId: "biology-0610", objectiveId: "obj-5-2" },
      { label: "Biological Molecules", subjectId: "biology-0610", objectiveId: "obj-4-1" },
      { label: "Active Transport", subjectId: "biology-0610", objectiveId: "obj-3-2" },
    ],
  },

  // ─── obj-5-2: Factors Affecting Enzymes ──────────────────────────────────
  {
    id: "bio-note-5-2",
    subjectId: "biology-0610",
    objectiveId: "obj-5-2",
    title: "Factors Affecting Enzyme Activity",
    keyPoints: [
      "Temperature: rate increases up to optimum; above optimum the enzyme denatures",
      "pH: each enzyme has an optimum pH; above or below this the active site shape changes",
      "Substrate concentration: increasing substrate increases rate until all active sites are occupied (Vmax)",
      "Denaturation is permanent — the enzyme cannot be reactivated by removing the unfavourable conditions",
    ],
    content: [
      {
        kind: "paragraph",
        heading: "Effect of temperature",
        text: "As temperature increases from 0°C to the optimum (typically 37°C for human enzymes), the rate of reaction increases — molecules have more kinetic energy, collide more frequently, and more enzyme-substrate complexes form per second. At the optimum temperature, the rate is maximum. Above the optimum, the extra energy breaks the hydrogen bonds and other interactions that maintain the enzyme's 3D shape. The active site changes shape and the substrate can no longer bind — the enzyme is denatured. Denaturation is irreversible.",
      },
      {
        kind: "paragraph",
        heading: "Effect of pH",
        text: "Each enzyme has an optimum pH at which its active site shape is ideal for the substrate. Changing pH alters the charges on the R-groups (side chains) of the amino acids forming the active site. This disrupts hydrogen bonds and ionic bonds, changing the active site's 3D shape. The substrate can no longer fit → rate decreases. At extreme pH values, the enzyme is denatured. Different enzymes have different optimum pH values because they work in different environments: pepsin (stomach) — optimum pH 2; amylase (saliva) — optimum pH 7; trypsin (small intestine) — optimum pH 8.",
      },
      {
        kind: "bullets",
        heading: "Effect of substrate concentration",
        bullets: [
          "At low substrate concentration: rate is low — not all active sites are occupied",
          "As substrate concentration increases: more enzyme-substrate complexes form per second → rate increases",
          "At high substrate concentration: all active sites are occupied (enzymes are saturated) → rate reaches a maximum (Vmax)",
          "Increasing substrate further has no effect once all active sites are full",
          "To increase Vmax further: increase enzyme concentration",
        ],
      },
      {
        kind: "table",
        heading: "Optimum conditions for key digestive enzymes",
        headers: ["Enzyme", "Location", "Optimum pH", "Optimum temperature"],
        rows: [
          ["Salivary amylase", "Mouth", "~7 (neutral)", "37°C"],
          ["Pepsin", "Stomach", "~2 (acidic)", "37°C"],
          ["Trypsin", "Small intestine", "~8 (slightly alkaline)", "37°C"],
          ["Lipase (pancreatic)", "Small intestine", "~7–8", "37°C"],
        ],
      },
      {
        kind: "definition",
        term: "Denaturation",
        definition: "The permanent change in the 3D shape of a protein (including an enzyme) caused by high temperature, extreme pH, or certain chemicals. The hydrogen bonds and other interactions maintaining the protein's shape are broken, altering the active site so the substrate can no longer bind. Denaturation is irreversible — the enzyme cannot regain its original shape.",
      },
      {
        kind: "bullets",
        heading: "Effect of enzyme concentration",
        bullets: [
          "Increasing enzyme concentration increases the rate of reaction (more active sites available)",
          "Rate increases proportionally as long as substrate is in excess",
          "If substrate is limited, increasing enzyme concentration has no further effect",
          "In biological systems, enzyme concentration is tightly regulated by gene expression",
        ],
      },
      {
        kind: "paragraph",
        heading: "Interpreting enzyme graphs",
        text: "Temperature graph: rate rises, peaks at optimum, then falls steeply (not symmetrical). The steep drop above optimum is due to denaturation. pH graph: bell-shaped curve, peak at optimum pH. Substrate concentration graph: curve rises steeply then levels off at a plateau (Vmax). The plateau occurs because all active sites are saturated — adding more substrate cannot increase rate further. Adding more enzyme would shift Vmax higher.",
      },
    ],
    examTips: [
      "Graph shape for temperature: rate rises, peaks at optimum, then falls steeply (not symmetrical — the fall is sharper due to denaturation).",
      "Graph shape for pH: bell curve, peak at optimum pH, symmetric-ish fall on either side.",
      "Graph for substrate concentration: curve that rises steeply then levels off at Vmax (plateau). Explain the plateau: all active sites are occupied/saturated.",
      "Always say 'denatured' for above optimum temperature effects, not 'killed' or 'broken down'.",
    ],
    commonMistakes: [
      "Saying denaturation is reversible — it is NOT. Once the active site shape is permanently changed, the enzyme cannot be reactivated.",
      "Saying 'high temperature kills the enzyme' — enzymes are not alive. Say the enzyme is 'denatured'.",
      "Drawing a temperature graph that is symmetrical — the drop above optimum is steeper than the rise, due to denaturation.",
      "Forgetting to explain WHY pH affects enzyme activity — always mention bonds (hydrogen bonds) and active site shape change.",
    ],
    relatedTopics: [
      { label: "Enzyme Action", subjectId: "biology-0610", objectiveId: "obj-5-1" },
      { label: "Biological Molecules", subjectId: "biology-0610", objectiveId: "obj-4-1" },
    ],
  },
];
