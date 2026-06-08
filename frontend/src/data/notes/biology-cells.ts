import type { NoteChapter } from "./types";

export const biologyCellsNotes: NoteChapter = {
  subject: "Biology",
  title: "Cells & Organisation",
  pages: [
    {
      section: "1.1 Cell Structure",
      blocks: [
        {
          kind: "intro",
          text: "All living organisms are made of cells — the fundamental unit of life. Cells contain structures called organelles, each with a specific function.",
        },
        {
          kind: "image",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Animal_cell_structure_en.svg/640px-Animal_cell_structure_en.svg.png",
          caption: "Labeled animal cell — note the absence of cell wall, chloroplasts, and large central vacuole",
          side: "right",
        },
        {
          kind: "table",
          headers: ["Organelle", "Function", "Plant?", "Animal?"],
          rows: [
            ["Nucleus", "Contains DNA; controls cell activities", "✓", "✓"],
            ["Cell membrane", "Controls entry/exit of substances", "✓", "✓"],
            ["Cytoplasm", "Site of metabolic reactions", "✓", "✓"],
            ["Mitochondria", "Site of aerobic respiration; produces ATP", "✓", "✓"],
            ["Ribosomes", "Site of protein synthesis", "✓", "✓"],
            ["Cell wall (cellulose)", "Structural support; prevents over-expansion", "✓", "✗"],
            ["Chloroplasts", "Contain chlorophyll; site of photosynthesis", "✓", "✗"],
            ["Vacuole (large, permanent)", "Filled with cell sap; maintains turgor pressure", "✓", "✗"],
          ],
        },
        {
          kind: "tip",
          text: "Exam tip: Link structure to function. Don't just name the organelle — say WHY its structure suits its function. E.g. 'Mitochondria have a folded inner membrane (cristae) which increases surface area for the enzymes of aerobic respiration, maximising ATP production.'",
        },
      ],
    },
    {
      section: "1.2 Organisation of Living Things",
      blocks: [
        {
          kind: "intro",
          text: "Living organisms are organised in a hierarchy from cells to the whole organism.",
        },
        {
          kind: "highlight",
          text: "Cell → Tissue → Organ → Organ System → Organism",
          color: "pink",
        },
        {
          kind: "keyterms",
          terms: [
            { label: "Cell", value: "the smallest unit of life; carries out all basic life processes" },
            { label: "Tissue", value: "a group of similar cells working together (e.g. muscle tissue, xylem)" },
            { label: "Organ", value: "a structure made of different tissues working together (e.g. heart, leaf)" },
            { label: "Organ system", value: "a group of organs working together (e.g. circulatory system, digestive system)" },
          ],
        },
        {
          kind: "comparison",
          left: {
            label: "Prokaryotic cells (bacteria)",
            items: [
              "No nucleus — DNA is free in cytoplasm",
              "No membrane-bound organelles",
              "Smaller (1–10 μm)",
              "Has cell wall (not cellulose)",
              "May have plasmids (small circular DNA)",
            ],
          },
          right: {
            label: "Eukaryotic cells (plants, animals)",
            items: [
              "Has a true nucleus with nuclear envelope",
              "Has membrane-bound organelles",
              "Larger (10–100 μm)",
              "Plant cells have cellulose cell wall",
              "No plasmids",
            ],
          },
        },
      ],
    },
    {
      section: "1.3 Diffusion",
      blocks: [
        {
          kind: "definition",
          term: "Diffusion",
          definition: "the net movement of particles from a region of higher concentration to a region of lower concentration, down the concentration gradient. It is passive — no ATP (energy) is required.",
        },
        {
          kind: "bullets",
          items: [
            {
              text: "Factors that increase the rate of diffusion:",
              sub: [
                "Steeper concentration gradient (bigger difference in concentration)",
                "Larger surface area (e.g. alveoli, villi, root hair cells)",
                "Higher temperature (particles have more kinetic energy)",
                "Shorter diffusion distance (thinner membrane)",
                "Smaller molecule size",
              ],
            },
          ],
        },
        {
          kind: "image",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Diffusion.svg/640px-Diffusion.svg.png",
          caption: "Diffusion: net movement of particles from high to low concentration until equilibrium is reached",
          side: "right",
        },
        {
          kind: "highlight",
          text: "Examples of diffusion in biology: O₂ and CO₂ exchange in alveoli; glucose absorption in small intestine; gas exchange in leaves through stomata.",
          color: "green",
        },
      ],
    },
    {
      section: "1.4 Osmosis",
      blocks: [
        {
          kind: "definition",
          term: "Osmosis",
          definition: "the net movement of water molecules from a region of higher water potential to a region of lower water potential, across a partially permeable membrane. It is passive — no ATP required.",
        },
        {
          kind: "warning",
          text: "Common mistake: Never say 'particles move' in osmosis — only WATER MOLECULES move. Always include 'partially permeable membrane' and 'water potential' in your definition.",
        },
        {
          kind: "image",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Osmotic_pressure_on_blood_cells_diagram.svg/640px-Osmotic_pressure_on_blood_cells_diagram.svg.png",
          caption: "Effect of osmosis on animal cells: hypotonic solution → cell swells/bursts (lysis); hypertonic → cell shrinks (crenation)",
          side: "full",
        },
        {
          kind: "comparison",
          left: {
            label: "Animal cell in hypotonic solution (dilute)",
            items: [
              "Water potential outside > inside",
              "Water enters by osmosis",
              "Cell swells and may burst (lysis)",
            ],
          },
          right: {
            label: "Animal cell in hypertonic solution (concentrated)",
            items: [
              "Water potential inside > outside",
              "Water leaves by osmosis",
              "Cell shrinks (crenation)",
            ],
          },
        },
        {
          kind: "bullets",
          items: [
            {
              text: "Plant cells in hypertonic solution:",
              sub: [
                "Water leaves vacuole by osmosis",
                "Cell membrane pulls away from cell wall",
                "This is called plasmolysis — the cell becomes flaccid",
              ],
            },
            {
              text: "Plant cells in hypotonic solution:",
              sub: [
                "Water enters vacuole by osmosis",
                "Cell becomes turgid (rigid) — cell wall prevents bursting",
                "Turgor pressure supports the plant",
              ],
            },
          ],
        },
      ],
    },
    {
      section: "1.5 Active Transport",
      blocks: [
        {
          kind: "definition",
          term: "Active transport",
          definition: "the movement of molecules or ions across a membrane against their concentration gradient (from low to high concentration), using energy (ATP) and carrier proteins.",
        },
        {
          kind: "comparison",
          left: {
            label: "Active transport",
            items: [
              "Against concentration gradient",
              "Requires ATP (energy)",
              "Uses carrier proteins",
              "Can be stopped by metabolic poisons",
              "Examples: mineral ion uptake in roots; glucose absorption in gut",
            ],
          },
          right: {
            label: "Diffusion",
            items: [
              "Down concentration gradient",
              "No ATP required (passive)",
              "No carrier proteins needed",
              "Cannot be stopped by metabolic poisons",
              "Examples: O₂/CO₂ in alveoli; glucose in capillaries",
            ],
          },
        },
        {
          kind: "tip",
          text: "Active transport is used when cells need to absorb substances that are already at a higher concentration inside the cell than outside — e.g. root hair cells absorbing mineral ions from dilute soil water.",
        },
      ],
    },
  ],
};
