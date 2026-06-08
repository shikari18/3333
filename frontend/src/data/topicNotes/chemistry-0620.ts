import { TopicNote } from "@/types/content";

export const chemistryTopicNotes: TopicNote[] = [
  {
    id: "chem-note-1-1", subjectId: "chemistry-0620", objectiveId: "obj-1-1",
    title: "States of Matter",
    keyPoints: [
      "Three states: solid, liquid, gas — differ in particle arrangement and movement",
      "State changes are physical (reversible) — no new substance formed",
      "Temperature stays constant during a state change (latent heat breaks/forms bonds)",
      "Heating curve: flat sections = melting point / boiling point",
    ],
    content: [
      {
        kind: "table", heading: "Properties of the three states",
        headers: ["Property", "Solid", "Liquid", "Gas"],
        rows: [
          ["Arrangement", "Regular, closely packed", "Random, close together", "Far apart, random"],
          ["Movement", "Vibrate about fixed positions", "Move past each other", "Move rapidly in all directions"],
          ["Shape", "Fixed", "Takes shape of container", "Fills entire container"],
          ["Volume", "Fixed", "Fixed", "No fixed volume"],
          ["Compressibility", "Not compressible", "Not compressible", "Easily compressed"],
        ],
      },
      { kind: "definition", term: "Melting point", definition: "The temperature at which a solid changes to a liquid. At this point, the kinetic energy of particles is sufficient to overcome the forces holding them in fixed positions. Temperature stays constant during the change — all energy goes into breaking bonds (latent heat of fusion)." },
      { kind: "paragraph", heading: "Heating curves", text: "A heating curve shows temperature vs time when a substance is heated at a constant rate. The flat sections (plateaus) represent state changes — the temperature stays constant because all energy is used to break intermolecular forces rather than increasing kinetic energy. The slope of other sections represents the specific heat capacity of each state." },
    ],
    examTips: [
      "Draw a heating curve with two plateaus (at melting point and boiling point) to illustrate state changes.",
      "The steeper the slope, the less energy needed to raise the temperature (lower specific heat capacity).",
      "In particle diagrams: regular touching particles = solid; irregular touching = liquid; wide spaces = gas.",
    ],
    commonMistakes: [
      "Saying gas has no particles — gas particles just have large spaces between them.",
      "Drawing a heating curve without flat sections at state changes.",
      "Forgetting that temperature is constant during melting and boiling — many students draw a continuous slope.",
    ],
  },
  {
    id: "chem-note-1-2", subjectId: "chemistry-0620", objectiveId: "obj-1-2",
    title: "Kinetic Theory of Matter",
    keyPoints: [
      "All matter consists of tiny particles in constant random motion",
      "Higher temperature = greater average kinetic energy of particles",
      "Diffusion and Brownian motion are key evidence for the kinetic theory",
      "Diffusion is faster in gases than liquids, and faster at higher temperatures",
    ],
    content: [
      { kind: "definition", term: "Diffusion", definition: "The net movement of particles from a region of higher concentration to lower concentration, due to random particle motion. Diffusion is passive — requires no energy input." },
      { kind: "definition", term: "Brownian motion", definition: "The random, zigzag movement of visible particles (e.g. smoke, pollen) caused by uneven bombardment by smaller invisible molecules. Provides direct evidence that matter is made of particles in constant random motion." },
      {
        kind: "bullets", heading: "Factors affecting diffusion rate",
        bullets: [
          "Temperature — higher temp → particles move faster → faster diffusion",
          "Concentration gradient — steeper gradient → faster diffusion",
          "Molecular mass — lighter molecules diffuse faster (e.g. NH₃ vs HCl in diffusion tube)",
          "State — diffusion in gases is much faster than in liquids (particles more free to move)",
        ],
      },
      { kind: "paragraph", heading: "Ammonia and HCl diffusion experiment", text: "Cotton wool soaked in ammonia (NH₃, Mr=17) and hydrochloric acid (HCl, Mr=36.5) are placed at opposite ends of a glass tube. White smoke (ammonium chloride, NH₄Cl) forms where the two gases meet. Since ammonia is lighter, it diffuses faster — the ring of smoke forms closer to the HCl end. This experiment demonstrates both diffusion and the effect of molecular mass on diffusion rate." },
    ],
    examTips: [
      "The ring forms closer to the HCl end because NH₃ is lighter and diffuses faster.",
      "For Brownian motion: the smoke particles are what you see; the invisible air molecules cause the movement.",
    ],
    commonMistakes: [
      "Saying diffusion only happens in gases — it also occurs in liquids (just more slowly).",
      "Confusing Brownian motion (erratic movement of large visible particles) with diffusion (net movement of molecules down gradient).",
    ],
  },
  {
    id: "chem-note-2-1", subjectId: "chemistry-0620", objectiveId: "obj-2-1",
    title: "Measurement and Experimental Techniques",
    keyPoints: [
      "Use burette/pipette for accurate liquid volumes; measuring cylinder for approximate volumes",
      "Read all scales at eye level to avoid parallax error",
      "Burette reads top-to-bottom (0 at top); always record the bottom of the meniscus",
      "Thermometer bulb must be fully submerged; wait for stable reading",
    ],
    content: [
      {
        kind: "table", heading: "Apparatus and appropriate uses",
        headers: ["Apparatus", "Measures", "Precision", "Notes"],
        rows: [
          ["Burette", "Volume of liquid", "±0.05 cm³", "Reads 0 at top; record bottom of meniscus"],
          ["Pipette", "Fixed volume of liquid", "±0.05 cm³", "Most accurate for delivering exact volume"],
          ["Measuring cylinder", "Volume of liquid", "±0.5 cm³", "Good for approximate volumes"],
          ["Top-pan balance", "Mass", "±0.01 g", "Tare (zero) before use"],
          ["Thermometer", "Temperature", "±0.5°C", "Bulb fully submerged; read at eye level"],
          ["Gas syringe", "Volume of gas", "±0.5 cm³", "Replace bung quickly to avoid gas loss"],
        ],
      },
      { kind: "paragraph", heading: "Sources of error in experiments", text: "Random errors are unpredictable variations that cause scatter in results (e.g. timing errors, reading fluctuations). They can be reduced by repeating measurements and averaging. Systematic errors are consistent biases in one direction (e.g. a zero error on a balance, heat loss in calorimetry). They cannot be reduced by repeating, but by fixing the method or apparatus." },
      {
        kind: "bullets", heading: "Key practical techniques",
        bullets: [
          "Titration: fill burette with solution, add indicator to conical flask, add from burette until colour change (endpoint)",
          "Crystallisation: heat solution, concentrate, allow to cool slowly for large crystals",
          "Chromatography: spots near bottom of paper, run solvent up, calculate Rf = distance moved by spot / distance moved by solvent",
        ],
      },
    ],
    examTips: [
      "Parallax error is a guaranteed mark in 'sources of error' questions — mention reading at eye level.",
      "In titration questions: always read the burette to the nearest 0.05 cm³ and state the colour change of the indicator.",
      "Rf values are always between 0 and 1 — if your calculation gives >1, you've divided incorrectly.",
    ],
    commonMistakes: [
      "Forgetting that a burette reads from 0 at the TOP — students often read it the wrong way round.",
      "Not zeroing (taring) the balance before measuring — this gives systematic error.",
      "Saying 'repeat the experiment' as a way to reduce systematic error — repetition only helps with random errors.",
    ],
  },
  {
    id: "chem-note-2-2", subjectId: "chemistry-0620", objectiveId: "obj-2-2",
    title: "Purification Methods",
    keyPoints: [
      "Filtration: separate insoluble solid from liquid",
      "Crystallisation/evaporation: obtain soluble solid from solution",
      "Simple distillation: separate solvent from solution (one volatile component)",
      "Fractional distillation: separate two miscible liquids with different boiling points",
      "Chromatography: separate mixtures of dissolved substances by solubility/adsorption",
    ],
    content: [
      {
        kind: "table", heading: "Separation methods and when to use them",
        headers: ["Method", "Separates", "Principle", "Example"],
        rows: [
          ["Filtration", "Insoluble solid from liquid", "Solid trapped by filter paper, liquid passes through", "Sand from water"],
          ["Evaporation to dryness", "Soluble solid from solution", "Water evaporates, solid remains", "Salt from seawater (not for hydrated salts)"],
          ["Crystallisation", "Soluble solid (pure crystals)", "Saturate by heating, cool slowly to grow crystals, filter", "Copper sulfate crystals"],
          ["Simple distillation", "Solvent from dissolved solid", "Solvent vaporises, condenses and is collected", "Pure water from salt solution"],
          ["Fractional distillation", "Two miscible liquids", "Different boiling points; fractionating column separates", "Ethanol from water; crude oil fractionation"],
          ["Chromatography", "Mixture of dissolved substances", "Differential solubility/adsorption rates", "Food dyes in ink; amino acids"],
        ],
      },
      { kind: "definition", term: "Rf value (Retardation factor)", definition: "Rf = (distance travelled by spot) ÷ (distance travelled by solvent front). A pure substance always has the same Rf under identical conditions. Rf is always between 0 and 1." },
      { kind: "paragraph", heading: "Testing purity", text: "A pure substance has a sharp, precise melting point (melts at one temperature). An impure substance has a lower and broader melting point range. Similarly, a pure substance boils at one precise temperature; impurities raise the boiling point and widen the range. Chromatography of a pure substance shows a single spot; a mixture shows multiple spots." },
    ],
    examTips: [
      "For crystallisation: never boil to complete dryness — crystals decompose. Gently concentrate, then cool.",
      "Fractional distillation question: the key feature is the fractionating column providing multiple condensation/evaporation steps.",
      "Paper chromatography: the pencil baseline is used because pen ink would be carried up by the solvent.",
    ],
    commonMistakes: [
      "Saying 'boil to dryness' for crystallisation — this decomposes or gives impure product.",
      "Confusing simple distillation (liquid from solid mixture) with fractional distillation (two liquids).",
      "Forgetting that Rf is always ≤ 1 — the spot cannot travel further than the solvent.",
    ],
  },
  {
    id: "chem-note-3-1", subjectId: "chemistry-0620", objectiveId: "obj-3-1",
    title: "Atomic Structure",
    keyPoints: [
      "Atom: protons + neutrons in nucleus; electrons in shells around nucleus",
      "Atomic number (Z) = number of protons = number of electrons (neutral atom)",
      "Mass number (A) = protons + neutrons; neutrons = A − Z",
      "Isotopes: same Z, different A (same protons, different neutrons)",
    ],
    content: [
      {
        kind: "table", heading: "Subatomic particles",
        headers: ["Particle", "Location", "Relative mass", "Relative charge"],
        rows: [
          ["Proton", "Nucleus", "1", "+1"],
          ["Neutron", "Nucleus", "1", "0"],
          ["Electron", "Shells (energy levels)", "1/1840 (≈ 0)", "−1"],
        ],
      },
      { kind: "paragraph", heading: "Electronic configuration", text: "Electrons occupy energy levels (shells) around the nucleus. The first shell holds maximum 2 electrons; the second and third shells hold maximum 8. For IGCSE, you need to write electronic configurations up to element 20 (calcium). Example: sodium (Na, Z=11) has configuration 2,8,1. The number of outer electrons determines the chemical properties and group number in the periodic table." },
      {
        kind: "table", heading: "Common isotopes",
        headers: ["Element", "Isotope 1", "Isotope 2", "Same?", "Different?"],
        rows: [
          ["Hydrogen", "¹H (1p, 0n)", "²H deuterium (1p, 1n)", "Protons, electrons", "Neutrons, mass"],
          ["Carbon", "¹²C (6p, 6n)", "¹⁴C (6p, 8n)", "Protons, electrons", "Neutrons, mass"],
          ["Chlorine", "³⁵Cl (17p, 18n)", "³⁷Cl (17p, 20n)", "Protons, electrons", "Neutrons, mass"],
        ],
      },
      { kind: "definition", term: "Relative atomic mass (Ar)", definition: "The weighted average mass of all naturally occurring isotopes of an element, relative to 1/12 the mass of a carbon-12 atom. Ar = Σ(isotope mass × % abundance) / 100. This is why Ar values are often non-integers (e.g. chlorine = 35.5)." },
    ],
    examTips: [
      "Electronic configuration determines: group number (= outer electrons), period number (= number of shells), and reactivity.",
      "Isotopes have the same chemical properties but different physical properties (different densities, different rates of diffusion).",
      "For Ar calculation: Ar = (mass₁ × %₁ + mass₂ × %₂) / 100.",
    ],
    commonMistakes: [
      "Confusing atomic number (protons) with mass number (protons + neutrons). Neutrons = A − Z.",
      "Saying isotopes have different chemical properties — they have the same chemical properties (same electron arrangement).",
      "Forgetting that electrons are in shells, not randomly around the nucleus.",
    ],
  },
  {
    id: "chem-note-3-2", subjectId: "chemistry-0620", objectiveId: "obj-3-2",
    title: "Bonding",
    keyPoints: [
      "Ionic: electron transfer between metal and non-metal; electrostatic attraction between ions",
      "Covalent: electron sharing between non-metals; forms molecules",
      "Metallic: positive ions in a sea of delocalised electrons",
      "Structure determines properties: ionic = high mp, conducts when molten; covalent = low mp, poor conductor",
    ],
    content: [
      {
        kind: "table", heading: "Types of bonding compared",
        headers: ["Feature", "Ionic", "Covalent (simple)", "Metallic"],
        rows: [
          ["Between", "Metal + non-metal", "Non-metal + non-metal", "Metal atoms"],
          ["Type of bond", "Electrostatic attraction (ions)", "Shared electron pairs", "Delocalised electrons + ions"],
          ["Structure", "Giant ionic lattice", "Discrete molecules", "Giant metallic lattice"],
          ["Melting point", "High", "Low", "High"],
          ["Conductivity", "Only when molten/dissolved", "Never", "Always (free electrons)"],
          ["Solubility in water", "Usually soluble", "Usually insoluble", "Insoluble"],
        ],
      },
      { kind: "paragraph", heading: "Dot-and-cross diagrams", text: "Dot-and-cross diagrams show the outer shell electrons of each atom. In ionic bonding: show the completed shells of each ion with square brackets and charge. In covalent bonding: show shared pairs of electrons as overlapping ovals, with dots (one element) and crosses (other element). Each shared pair = one covalent bond." },
      {
        kind: "bullets", heading: "Common covalent molecules",
        bullets: [
          "H₂O: 2 O–H bonds, 2 lone pairs on oxygen, bent shape",
          "NH₃: 3 N–H bonds, 1 lone pair on nitrogen, pyramidal shape",
          "CH₄: 4 C–H bonds, tetrahedral shape",
          "CO₂: 2 C=O double bonds, linear shape, non-polar overall",
          "HCl: 1 H–Cl bond",
        ],
      },
    ],
    examTips: [
      "In dot-and-cross diagrams: always show square brackets and charge on ions. Use dots for one element and crosses for the other to distinguish electron origins.",
      "Giant covalent structures (diamond, graphite, SiO₂) are different from simple covalent molecules — they have high melting points because you must break covalent bonds to melt them.",
      "Graphite conducts electricity (delocalised electrons in layers) despite being covalent — a common trick question.",
    ],
    commonMistakes: [
      "Saying covalent compounds always have low melting points — giant covalent structures (diamond) have extremely high melting points.",
      "Forgetting that ionic compounds only conduct when dissolved or molten (ions must be free to move).",
      "Drawing ionic bonds as if electrons are shared — in ionic bonding, electrons are TRANSFERRED, not shared.",
    ],
  },
  {
    id: "chem-note-4-1", subjectId: "chemistry-0620", objectiveId: "obj-4-1",
    title: "Formulae and Equations",
    keyPoints: [
      "Chemical formula shows the ratio of atoms in a compound",
      "Balanced equations: atoms of each element must be equal on both sides",
      "Ionic equations show only the species that actually react (spectator ions removed)",
      "State symbols: (s) solid, (l) liquid, (g) gas, (aq) aqueous solution",
    ],
    content: [
      {
        kind: "bullets", heading: "Steps to balance an equation",
        bullets: [
          "1. Write the unbalanced equation with correct formulas",
          "2. Count atoms of each element on each side",
          "3. Add coefficients to balance — start with the most complex molecule",
          "4. NEVER change subscripts in formulas (that changes the substance)",
          "5. Check all elements balance, then add state symbols",
        ],
      },
      {
        kind: "table", heading: "Common ionic equations to memorise",
        headers: ["Reaction", "Ionic equation"],
        rows: [
          ["Strong acid + strong base (neutralisation)", "H⁺(aq) + OH⁻(aq) → H₂O(l)"],
          ["Metal + acid (e.g. Zn + HCl)", "Zn(s) + 2H⁺(aq) → Zn²⁺(aq) + H₂(g)"],
          ["Carbonate + acid", "CO₃²⁻(s) + 2H⁺(aq) → H₂O(l) + CO₂(g)"],
          ["Precipitation (e.g. Ag⁺ + Cl⁻)", "Ag⁺(aq) + Cl⁻(aq) → AgCl(s)"],
          ["Oxidation of Fe²⁺ to Fe³⁺ (test)", "Fe²⁺(aq) → Fe³⁺(aq) + e⁻"],
        ],
      },
      { kind: "paragraph", heading: "Half equations in electrolysis", text: "At the cathode (reduction): Cu²⁺ + 2e⁻ → Cu. At the anode (oxidation): 2Cl⁻ → Cl₂ + 2e⁻. To combine half equations, multiply to make electron count equal, then add and cancel electrons. This gives the overall ionic equation." },
    ],
    examTips: [
      "Ionic equation for neutralisation is ALWAYS H⁺ + OH⁻ → H₂O for strong acid + strong alkali — memorise this.",
      "For balancing: leave O and H until last; start with the element that appears in the fewest species.",
      "State symbols are not always required but are always good practice and may earn an extra mark.",
    ],
    commonMistakes: [
      "Changing subscripts to balance an equation (e.g. writing H₃ instead of adding a coefficient) — this is a serious error.",
      "Forgetting to cancel spectator ions in ionic equations.",
      "Not checking that the equation balances for charge as well as atoms in ionic equations.",
    ],
  },
  {
    id: "chem-note-4-2", subjectId: "chemistry-0620", objectiveId: "obj-4-2",
    title: "The Mole Concept",
    keyPoints: [
      "1 mole = 6.02 × 10²³ particles (Avogadro's number)",
      "Moles = mass (g) ÷ molar mass (g/mol)",
      "Moles of gas at RTP = volume (dm³) ÷ 24",
      "Moles of solution = concentration (mol/dm³) × volume (dm³)",
    ],
    content: [
      {
        kind: "table", heading: "Mole calculation triangles",
        headers: ["Quantity", "Formula", "Units"],
        rows: [
          ["Moles of solid", "n = m/Mr", "g / (g/mol)"],
          ["Mass of solid", "m = n × Mr", "g"],
          ["Moles of gas (RTP)", "n = V/24", "dm³ / (dm³/mol)"],
          ["Volume of gas (RTP)", "V = n × 24", "dm³"],
          ["Moles of solution", "n = c × V", "mol/dm³ × dm³"],
          ["Concentration", "c = n/V", "mol/dm³"],
        ],
      },
      {
        kind: "bullets", heading: "Mole calculation steps",
        bullets: [
          "1. Write the balanced equation",
          "2. Calculate moles of the GIVEN substance (using mass/Mr or volume/24 or c×V)",
          "3. Use the molar ratio from the equation to find moles of the WANTED substance",
          "4. Convert moles of wanted substance to mass/volume/concentration as required",
        ],
      },
      { kind: "paragraph", heading: "Percentage yield and percentage purity", text: "Percentage yield = (actual yield / theoretical yield) × 100. The theoretical yield is calculated from the mole ratio; the actual yield is what you get in the experiment. Percentage yield < 100% due to: incomplete reaction, side reactions, loss during purification. Percentage purity = (mass of pure substance / total mass of sample) × 100." },
    ],
    examTips: [
      "ALWAYS convert cm³ to dm³ (divide by 1000) before using n = cV. Forgetting this is the most common calculation error.",
      "Molar ratio from the equation is used ONCE in the middle of the calculation — never skip it.",
      "At RTP (room temperature and pressure): 1 mole of any gas occupies 24 dm³. This is given in most papers.",
    ],
    commonMistakes: [
      "Using volume in cm³ instead of dm³ in concentration calculations — always divide by 1000 first.",
      "Using the molar ratio incorrectly: if the equation is A + 2B → C, then 1 mol A reacts with 2 mol B (not 1:1).",
      "Forgetting that Ar values are for elements and Mr for compounds.",
    ],
  },
  {
    id: "chem-note-5-1", subjectId: "chemistry-0620", objectiveId: "obj-5-1",
    title: "Electrolysis",
    keyPoints: [
      "Electrolysis: decomposition of electrolyte using electricity",
      "Cathode (−): cations gain electrons → reduction (RED CAT)",
      "Anode (+): anions lose electrons → oxidation (AN OX)",
      "Products depend on: electrode material (inert vs active), concentration and nature of ions",
    ],
    content: [
      {
        kind: "table", heading: "Products of electrolysis",
        headers: ["Electrolyte", "Electrode type", "Cathode product", "Anode product"],
        rows: [
          ["Molten PbBr₂", "Inert (graphite)", "Lead metal (Pb)", "Bromine gas (Br₂)"],
          ["Dilute H₂SO₄", "Inert (graphite)", "Hydrogen gas (H₂)", "Oxygen gas (O₂)"],
          ["Dilute NaCl (aq)", "Inert (graphite)", "Hydrogen gas (H₂)", "Oxygen gas (O₂)"],
          ["Concentrated NaCl (aq)", "Inert (graphite)", "Hydrogen gas (H₂)", "Chlorine gas (Cl₂)"],
          ["CuSO₄ (aq)", "Copper (active)", "Copper deposited (Cu)", "Copper dissolves (anode erodes)"],
          ["CuSO₄ (aq)", "Inert (graphite)", "Copper deposited (Cu)", "Oxygen gas (O₂)"],
        ],
      },
      {
        kind: "bullets", heading: "Discharge priority for ions",
        bullets: [
          "At cathode: Cu²⁺ > H⁺ > Na⁺ (lower in reactivity series = discharged preferentially)",
          "At anode (dilute solution): OH⁻ discharged → O₂ produced",
          "At anode (concentrated halide): Cl⁻ or Br⁻ discharged in preference to OH⁻ → halogen gas produced",
          "Active (copper) anode dissolves regardless of ions in solution",
        ],
      },
      { kind: "paragraph", heading: "Industrial uses of electrolysis", text: "Electroplating: coat an object with a thin layer of metal (e.g. chrome, silver) to improve appearance or corrosion resistance. The object is the cathode; the plating metal is the anode; the electrolyte contains ions of the plating metal. Copper purification: impure copper is the anode; pure copper is the cathode; copper(II) sulfate solution is the electrolyte. Pure copper is deposited at cathode; impurities fall as anode sludge." },
    ],
    examTips: [
      "AN OX = anode oxidation; RED CAT = reduction at cathode. Learn these mnemonics — they work every time.",
      "The concentration effect (dilute vs concentrated NaCl giving O₂ vs Cl₂ at anode) is a favourite exam question.",
      "For electroplating questions: identify which is the cathode (object to be plated) and what the electrolyte must contain (ions of the coating metal).",
    ],
    commonMistakes: [
      "Confusing which electrode is cathode (−) and anode (+). Cathode = negative = where cations go.",
      "Forgetting to consider concentration when predicting anode product in aqueous NaCl.",
      "Saying 'electrons move through the electrolyte' — electrons move through the external circuit; IONS move through the electrolyte.",
    ],
  },
  {
    id: "chem-note-6-1", subjectId: "chemistry-0620", objectiveId: "obj-6-1",
    title: "Chemical Energetics",
    keyPoints: [
      "Exothermic: releases heat to surroundings; temperature increases; ΔH is negative",
      "Endothermic: absorbs heat from surroundings; temperature decreases; ΔH is positive",
      "Breaking bonds REQUIRES energy (endothermic step)",
      "Forming bonds RELEASES energy (exothermic step)",
      "ΔH = energy input (bonds broken) − energy output (bonds formed)",
    ],
    content: [
      {
        kind: "table", heading: "Exothermic vs Endothermic reactions",
        headers: ["Feature", "Exothermic", "Endothermic"],
        rows: [
          ["Energy change", "Released to surroundings", "Absorbed from surroundings"],
          ["Temperature", "Increases", "Decreases"],
          ["ΔH", "Negative (−)", "Positive (+)"],
          ["Bond energy", "More energy from forming bonds than breaking", "More energy to break bonds than forming releases"],
          ["Energy level diagram", "Products lower than reactants", "Products higher than reactants"],
          ["Examples", "Combustion, neutralisation, respiration", "Thermal decomposition, dissolving NH₄NO₃, photosynthesis"],
        ],
      },
      {
        kind: "bullets", heading: "Bond energy calculation method",
        bullets: [
          "1. Draw out the structural formula and identify all bonds broken and formed",
          "2. Sum energy needed to break all bonds in reactants (endothermic)",
          "3. Sum energy released when forming all bonds in products (exothermic)",
          "4. ΔH = Σ(bonds broken) − Σ(bonds formed)",
          "5. If negative → exothermic; if positive → endothermic",
        ],
      },
      { kind: "paragraph", heading: "Activation energy and catalysts", text: "The activation energy is the minimum energy required for a reaction to start (energy needed to break bonds in reactants). A catalyst provides an alternative reaction pathway with a lower activation energy. This means more particles have enough energy to react → faster reaction rate. The catalyst is unchanged at the end of the reaction." },
    ],
    examTips: [
      "ΔH = bonds broken − bonds formed (input − output). Negative result → exothermic.",
      "On energy level diagrams: the height of the 'hump' = activation energy. A catalyst lowers this hump but doesn't change the energy of reactants or products.",
      "Bond energies are always positive (energy must be INPUT to break a bond). When forming bonds, the same amount is released.",
    ],
    commonMistakes: [
      "Getting the ΔH formula backwards (writing formed − broken instead of broken − formed).",
      "Saying a catalyst is 'used up' — catalysts are unchanged and can be reused.",
      "Drawing energy level diagrams with products higher than reactants for exothermic reactions — products must be lower.",
    ],
  },
];
