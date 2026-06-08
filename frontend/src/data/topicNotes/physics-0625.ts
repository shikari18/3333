import { TopicNote } from "@/types/content";

export const physicsTopicNotes: TopicNote[] = [
  {
    id: "phys-note-1-1", subjectId: "physics-0625", objectiveId: "obj-1-1",
    title: "Motion",
    keyPoints: [
      "Speed = distance/time (scalar); velocity = displacement/time (vector)",
      "Acceleration = change in velocity / time (m/s²)",
      "d–t graph: gradient = speed; v–t graph: gradient = acceleration, area = distance",
      "SUVAT equations apply only for uniform (constant) acceleration",
    ],
    content: [
      {
        kind: "table", heading: "Key motion quantities",
        headers: ["Quantity", "Symbol", "Formula", "Unit", "Scalar/Vector"],
        rows: [
          ["Distance", "d", "—", "m", "Scalar"],
          ["Displacement", "s", "—", "m (+ direction)", "Vector"],
          ["Speed", "v", "d/t", "m/s", "Scalar"],
          ["Velocity", "v", "s/t", "m/s (+ direction)", "Vector"],
          ["Acceleration", "a", "Δv/t", "m/s²", "Vector"],
        ],
      },
      {
        kind: "bullets", heading: "SUVAT equations for uniform acceleration",
        bullets: [
          "v = u + at (no distance term)",
          "s = ut + ½at² (no final velocity)",
          "v² = u² + 2as (no time term)",
          "s = (u+v)/2 × t (no acceleration term)",
          "Method: list known variables (u, v, a, s, t), identify unknown, select equation",
        ],
      },
      {
        kind: "table", heading: "Interpreting motion graphs",
        headers: ["Graph type", "Straight line (gradient)", "Curve", "Flat section", "Area under graph"],
        rows: [
          ["Distance–time", "Constant speed", "Changing speed (acceleration)", "Stationary", "—"],
          ["Speed–time", "Constant acceleration", "Changing acceleration", "Constant speed", "Distance travelled"],
        ],
      },
    ],
    examTips: [
      "For instantaneous speed on a d–t curve: draw a tangent to the curve at that point, then calculate gradient = rise/run.",
      "Free-fall acceleration: g = 10 m/s² (use value given in question). In free fall, u = 0 if dropped from rest.",
      "Always list u, v, a, s, t before choosing a SUVAT equation — never guess which to use.",
    ],
    commonMistakes: [
      "Confusing speed (scalar) with velocity (vector) — velocity requires a direction.",
      "Reading area under a v–t graph as speed instead of distance.",
      "Applying SUVAT when acceleration is not constant (e.g. a falling object with air resistance).",
    ],
  },
  {
    id: "phys-note-1-2", subjectId: "physics-0625", objectiveId: "obj-1-2",
    title: "Mass and Weight",
    keyPoints: [
      "Mass: amount of matter (kg), scalar, constant everywhere",
      "Weight: gravitational force (N), vector, varies with location",
      "W = mg (g = 10 N/kg on Earth; g ≈ 1.6 N/kg on Moon)",
      "Beam balance measures mass; spring balance measures weight",
    ],
    content: [
      {
        kind: "table", heading: "Mass vs Weight",
        headers: ["Property", "Mass", "Weight"],
        rows: [
          ["Definition", "Amount of matter", "Gravitational force on object"],
          ["Type", "Scalar", "Vector"],
          ["Unit", "kilogram (kg)", "newton (N)"],
          ["Measured with", "Beam balance", "Spring balance / newtonmeter"],
          ["Changes with location?", "No — constant", "Yes — depends on g"],
          ["80 kg person on Moon", "80 kg", "80 × 1.6 = 128 N"],
        ],
      },
      { kind: "definition", term: "Gravitational field strength (g)", definition: "The gravitational force acting per unit mass at a point in a gravitational field. g = 10 N/kg on Earth's surface. g = 1.6 N/kg on the Moon's surface. It equals the acceleration due to gravity (10 m/s²) for a freely falling object." },
    ],
    examTips: [
      "Beam balance: compares mass against standard masses — g affects both sides equally → same reading on Moon.",
      "Spring balance: measures force (stretch of spring). On Moon, g is smaller → spring stretches less → lower reading.",
      "W = mg can be rearranged: m = W/g or g = W/m. Common in multi-step questions.",
    ],
    commonMistakes: [
      "Saying weight is measured in kg — weight is a FORCE measured in newtons.",
      "Saying mass changes on the Moon — only weight changes; mass is constant.",
    ],
  },
  {
    id: "phys-note-1-3", subjectId: "physics-0625", objectiveId: "obj-1-3",
    title: "Density",
    keyPoints: [
      "Density = mass / volume (ρ = m/V)",
      "Units: kg/m³ (SI) or g/cm³ (practical)",
      "Irregular volume measured by water displacement",
      "Objects float if their density is less than the fluid; sink if greater",
    ],
    content: [
      { kind: "definition", term: "Density (ρ)", definition: "Density = mass ÷ volume. Symbol ρ (rho). SI unit: kg/m³. Practical unit: g/cm³. Water has density ≈ 1 g/cm³ = 1000 kg/m³. Objects less dense than water float; denser ones sink." },
      {
        kind: "bullets", heading: "Measuring density experimentally",
        bullets: [
          "Regular solid: measure mass with balance; calculate volume from dimensions (e.g. V = l×w×h for cuboid, V = πr²h for cylinder)",
          "Irregular solid: mass with balance; volume by water displacement (submerge in measuring cylinder, V = V₂ − V₁)",
          "Liquid: measure mass of known volume using balance and measuring cylinder; ρ = m/V",
        ],
      },
      {
        kind: "table", heading: "Useful density values",
        headers: ["Material", "Density (g/cm³)", "Density (kg/m³)"],
        rows: [
          ["Water", "1.0", "1000"],
          ["Sea water", "1.025", "1025"],
          ["Ice", "~0.92", "~920"],
          ["Aluminium", "2.7", "2700"],
          ["Iron/Steel", "~7.9", "~7900"],
          ["Air", "~0.0013", "~1.3"],
        ],
      },
    ],
    examTips: [
      "Unit conversion: 1 g/cm³ = 1000 kg/m³. Convert by multiplying by 1000.",
      "Floating: fraction submerged = ρ_object / ρ_fluid. Ice in water: 0.92/1.0 = 92% submerged.",
      "For the water displacement method, state that the object must be fully submerged.",
    ],
    commonMistakes: [
      "Confusing g/cm³ and kg/m³ — a density of 2.7 g/cm³ is 2700 kg/m³, not 2.7 kg/m³.",
      "Not fully submerging the object in displacement experiments.",
    ],
  },
  {
    id: "phys-note-1-4", subjectId: "physics-0625", objectiveId: "obj-1-4",
    title: "Effects of Forces",
    keyPoints: [
      "Newton's 1st Law: no net force → no change in motion",
      "Newton's 2nd Law: F = ma (net force = mass × acceleration)",
      "Newton's 3rd Law: equal and opposite forces on DIFFERENT objects",
      "Terminal velocity: drag force = weight; net force = 0; constant speed",
    ],
    content: [
      {
        kind: "table", heading: "Newton's Three Laws",
        headers: ["Law", "Statement", "Example"],
        rows: [
          ["1st (Inertia)", "Object at rest/uniform motion unless resultant force acts on it", "A book stays on a table until pushed; a spaceship in deep space keeps moving"],
          ["2nd (F=ma)", "Resultant force = mass × acceleration; F and a in same direction", "Pushing a 10 kg trolley with 20 N → a = 2 m/s²"],
          ["3rd (Action-Reaction)", "For every action there is an equal and opposite reaction — on different objects", "Rocket: exhaust gases pushed backward → rocket pushed forward"],
        ],
      },
      { kind: "paragraph", heading: "Terminal velocity in detail", text: "A falling object starts with weight >> air resistance → accelerates. As speed increases, drag increases. When drag = weight, net force = 0, acceleration = 0 → terminal velocity reached. On a v–t graph: curve rising steeply, then levelling off (asymptote at terminal velocity). If a parachute opens: drag suddenly >> weight → deceleration (v decreases). New (lower) terminal velocity reached when drag = weight again." },
      {
        kind: "bullets", heading: "Free body diagrams",
        bullets: [
          "Show ALL forces acting on ONE object as arrows from the object",
          "Arrow length ∝ force magnitude; arrow direction = direction of force",
          "Label each force: weight (W = mg, downward), normal reaction (N, perpendicular to surface), friction (opposing motion), air resistance (opposing motion), applied force",
          "Resultant force = vector sum of all forces on the diagram",
        ],
      },
    ],
    examTips: [
      "Newton's 3rd Law pairs: same type of force (both gravity, or both contact), same magnitude, opposite direction, on different objects.",
      "For the skydiver question (very common): always describe three stages — accelerating, decelerating, new terminal velocity.",
      "F = ma only gives the NET (resultant) force equals mass × acceleration — always check if there are other forces acting.",
    ],
    commonMistakes: [
      "Applying Newton's 3rd Law to forces on the SAME object — 3rd Law pairs are always on different objects.",
      "Saying 'at terminal velocity, forces are balanced' without specifying which forces (weight and air resistance/drag).",
      "Drawing free-body diagrams with forces starting at different positions — all forces should start from the object.",
    ],
  },
  {
    id: "phys-note-2-1", subjectId: "physics-0625", objectiveId: "obj-2-1",
    title: "Kinetic Model of Matter",
    keyPoints: [
      "All matter is made of particles in constant random motion",
      "Temperature = measure of average kinetic energy of particles",
      "Brownian motion: evidence for constant random particle movement",
      "Gas pressure comes from particle collisions with container walls",
    ],
    content: [
      { kind: "definition", term: "Brownian motion", definition: "Random, erratic movement of visible particles (e.g. smoke, pollen) caused by uneven bombardment by surrounding invisible molecules. First observed by botanist Robert Brown (1827) with pollen in water. Provides direct evidence that matter consists of particles in constant random motion." },
      {
        kind: "table", heading: "Kinetic explanation of gas laws",
        headers: ["Change", "Effect on particles", "Result"],
        rows: [
          ["Increase temperature (constant V)", "Particles move faster → hit walls more frequently and forcefully", "Pressure increases"],
          ["Decrease volume (constant T)", "Same particles, smaller space → more frequent wall collisions", "Pressure increases"],
          ["Increase volume (constant T)", "More space → less frequent collisions", "Pressure decreases"],
          ["Increase temperature (constant P)", "Particles move faster → must increase volume to keep collision rate constant", "Volume increases"],
        ],
      },
      { kind: "paragraph", heading: "Internal energy", text: "The internal energy of a substance is the total kinetic energy of all its particles plus the total potential energy stored in the bonds/forces between them. When you heat a substance, its internal energy increases. During a state change (e.g. melting), the internal energy increases (potential energy increases as bonds break) but temperature stays constant — kinetic energy of particles doesn't change during the state change." },
    ],
    examTips: [
      "Gas pressure questions: always explain via collision frequency AND force of collisions on the walls.",
      "Temperature is proportional to average kinetic energy — NOT to speed directly (it's ½mv²).",
      "Absolute zero (0 K = −273°C) is the temperature at which particles have minimum kinetic energy (they stop moving).",
    ],
    commonMistakes: [
      "Saying 'particles are stationary in a solid' — solid particles still vibrate (just about fixed positions).",
      "Confusing temperature (average KE per particle) with heat (total thermal energy transferred).",
    ],
  },
  {
    id: "phys-note-2-2", subjectId: "physics-0625", objectiveId: "obj-2-2",
    title: "Thermal Properties of Matter",
    keyPoints: [
      "Specific heat capacity (c): energy to raise 1 kg by 1°C; Q = mcΔT",
      "Latent heat: energy for state change at constant temperature",
      "Thermal expansion: all materials expand on heating (gases expand most)",
      "Thermometers use thermal expansion (mercury) or electrical resistance (digital)",
    ],
    content: [
      { kind: "definition", term: "Specific heat capacity (c)", definition: "The amount of energy required to raise the temperature of 1 kg of a substance by 1°C (or 1 K). Formula: Q = mcΔT where Q = energy (J), m = mass (kg), c = specific heat capacity (J/kg°C), ΔT = temperature change (°C). Water: c = 4200 J/kg°C (very high — used as coolant and in heating systems)." },
      { kind: "definition", term: "Latent heat", definition: "The energy absorbed or released during a state change at constant temperature. Specific latent heat of fusion (L_f) = energy to melt 1 kg; specific latent heat of vaporisation (L_v) = energy to vaporise 1 kg. Q = mL. No temperature change during state change — energy changes potential energy (breaks intermolecular bonds)." },
      {
        kind: "table", heading: "Thermal expansion applications",
        headers: ["Application", "Material", "Purpose"],
        rows: [
          ["Bimetallic strip (thermostat)", "Two metals (brass + iron)", "Different expansion rates → strip bends → breaks/makes circuit"],
          ["Thermometer (mercury/alcohol)", "Mercury or coloured alcohol", "Liquid expands up capillary tube when heated"],
          ["Bridges (expansion joints)", "Steel", "Gaps allow expansion in summer without buckling"],
          ["Tyres (pressure)", "Air", "Pressure increases when hot (gas law)"],
        ],
      },
    ],
    examTips: [
      "Q = mcΔT: calculate ΔT first (final − initial). Units must match: Q in J, m in kg, c in J/kg°C.",
      "During state changes: Q = mL. Temperature is constant — do NOT use Q = mcΔT here.",
      "Water's high specific heat capacity is WHY it's used in car radiators, central heating systems, and why coastal areas have milder climates.",
    ],
    commonMistakes: [
      "Using Q = mcΔT during a state change (e.g. while ice is melting) — during state changes, use Q = mL instead.",
      "Getting ΔT wrong — it's always |T_final − T_initial|, a positive value for 'rise in temperature'.",
    ],
  },
  {
    id: "phys-note-2-3", subjectId: "physics-0625", objectiveId: "obj-2-3",
    title: "Thermal Energy Transfers",
    keyPoints: [
      "Conduction: through solids via particle vibrations (+ free electrons in metals)",
      "Convection: through fluids via bulk movement of less dense warm fluid rising",
      "Radiation: electromagnetic waves (infrared) — travels through vacuum, no medium needed",
      "Good absorbers are also good emitters; shiny surfaces are poor absorbers/emitters",
    ],
    content: [
      {
        kind: "table", heading: "Three methods of heat transfer compared",
        headers: ["Feature", "Conduction", "Convection", "Radiation"],
        rows: [
          ["Medium needed?", "Yes (usually solid)", "Yes (fluid: liquid or gas)", "No (can travel through vacuum)"],
          ["How?", "Particle vibration; free electrons in metals", "Bulk flow of warm, less dense fluid", "Infrared electromagnetic waves"],
          ["Best in", "Metals (good conductors)", "Liquids and gases", "All materials; vacuum too"],
          ["Reduced by", "Insulating materials, air gaps", "Reducing fluid circulation", "Shiny/reflective surfaces"],
        ],
      },
      {
        kind: "bullets", heading: "Factors affecting radiation absorption/emission",
        bullets: [
          "Colour and texture: dull, dark (black) surfaces — best absorbers AND best emitters",
          "Shiny, light (silver/white) surfaces — poor absorbers AND poor emitters (best reflectors)",
          "Temperature: hotter objects emit more radiation and at shorter wavelengths",
          "Surface area: larger surface area → more radiation emitted/absorbed",
        ],
      },
      { kind: "paragraph", heading: "Vacuum flask (Thermos) design", text: "Double glass walls with vacuum: eliminates conduction and convection (no medium). Silvered inner walls: reflect infrared radiation back, reducing transfer by radiation. Plastic stopper: plastic is a poor conductor, reduces conduction through top. Plastic casing and supports: reduce conduction through base/sides. All three modes are reduced simultaneously." },
    ],
    examTips: [
      "Radiation is the ONLY mechanism that works in a vacuum (e.g. Sun → Earth, satellites in space).",
      "Leslie's cube experiment: all faces at same temperature, but dull black emits most radiation, shiny silver emits least.",
      "For 'explain why a vacuum flask keeps drinks cold/hot': mention all three mechanisms being reduced and HOW each feature reduces each one.",
    ],
    commonMistakes: [
      "Saying convection occurs in solids — it requires a FLUID (liquid or gas) to flow.",
      "Saying radiation requires a medium — radiation is the only heat transfer that works in a vacuum.",
      "Confusing absorption (taking in radiation) with emission (giving out radiation) — dull black surfaces do both well.",
    ],
  },
  {
    id: "phys-note-3-1", subjectId: "physics-0625", objectiveId: "obj-3-1",
    title: "General Wave Properties",
    keyPoints: [
      "Waves transfer energy without transferring matter",
      "v = fλ (wave speed = frequency × wavelength)",
      "T = 1/f (period = 1 / frequency)",
      "Transverse: oscillation perpendicular to propagation (light, EM waves); Longitudinal: oscillation parallel (sound)",
    ],
    content: [
      {
        kind: "table", heading: "Wave quantities",
        headers: ["Quantity", "Symbol", "Unit", "Definition"],
        rows: [
          ["Amplitude", "A", "m", "Maximum displacement from equilibrium (NOT full height)"],
          ["Wavelength", "λ", "m", "Distance between adjacent points in phase (crest to crest)"],
          ["Frequency", "f", "Hz", "Number of complete waves per second"],
          ["Period", "T", "s", "Time for one complete wave; T = 1/f"],
          ["Wave speed", "v", "m/s", "v = fλ; also v = λ/T"],
        ],
      },
      {
        kind: "bullets", heading: "Wave behaviours",
        bullets: [
          "Reflection: angle of incidence = angle of reflection (measured from normal)",
          "Refraction: wave changes speed (and wavelength) when crossing boundary; frequency stays the same",
          "Diffraction: waves spread out when passing through a gap or around an obstacle; most pronounced when gap ≈ wavelength",
          "Interference: superposition of two waves — constructive (crests coincide) or destructive (crest + trough)",
        ],
      },
      { kind: "paragraph", heading: "Electromagnetic spectrum", text: "All EM waves travel at 3 × 10⁸ m/s in a vacuum. From longest to shortest wavelength: radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, gamma rays. Frequency increases from left to right; wavelength decreases. All EM waves are transverse and can travel through a vacuum." },
    ],
    examTips: [
      "v = fλ is the key formula. If asked 'what happens to wavelength when frequency doubles?' — wavelength halves (same speed, so λ = v/f halves).",
      "When a wave moves from one medium to another: frequency NEVER changes (set by the source). Speed and wavelength both change.",
      "Amplitude ≠ height from trough to crest. Amplitude = displacement from rest position to crest (half the peak-to-trough height).",
    ],
    commonMistakes: [
      "Saying amplitude is the full height from trough to crest — amplitude is only half this.",
      "Saying frequency changes when a wave enters a new medium — frequency stays constant; speed and wavelength change.",
      "Confusing transverse (oscillation perpendicular to wave direction) with longitudinal (oscillation parallel, like sound).",
    ],
  },
  {
    id: "phys-note-3-2", subjectId: "physics-0625", objectiveId: "obj-3-2",
    title: "Light",
    keyPoints: [
      "Law of reflection: angle of incidence = angle of reflection (from normal)",
      "Refraction: light bends towards normal entering denser medium (slows down)",
      "Total internal reflection occurs when angle > critical angle in denser medium",
      "Converging lens: focuses parallel rays to a focal point; used in cameras and eyes",
    ],
    content: [
      {
        kind: "table", heading: "Refraction rules",
        headers: ["Going from", "Speed change", "Wavelength change", "Bends", "Frequency"],
        rows: [
          ["Less dense → more dense (air → glass)", "Decreases", "Decreases", "Towards normal", "Unchanged"],
          ["More dense → less dense (glass → air)", "Increases", "Increases", "Away from normal", "Unchanged"],
        ],
      },
      { kind: "definition", term: "Total Internal Reflection (TIR)", definition: "When light in a denser medium hits the boundary with a less dense medium at an angle greater than the critical angle, all light is reflected back into the denser medium — none is refracted. Critical angle c: sin c = 1/n (where n = refractive index). Applications: optical fibres, periscope prisms, diamond sparkle." },
      {
        kind: "table", heading: "Converging lens image types",
        headers: ["Object position", "Image type", "Image orientation", "Image size"],
        rows: [
          ["Beyond 2F", "Real", "Inverted", "Smaller"],
          ["At 2F", "Real", "Inverted", "Same size"],
          ["Between F and 2F", "Real", "Inverted", "Larger (magnified)"],
          ["At F", "No image", "—", "At infinity"],
          ["Inside F (between F and lens)", "Virtual", "Upright", "Larger (magnified) — magnifying glass"],
        ],
      },
    ],
    examTips: [
      "ALL angles in optics are measured from the NORMAL, not from the surface.",
      "Critical angle: if refractive index of glass = 1.5, sin c = 1/1.5 = 0.667 → c = 41.8°.",
      "Real images can be formed on a screen; virtual images cannot (they appear to come from behind the lens).",
    ],
    commonMistakes: [
      "Measuring angles from the surface instead of the normal.",
      "Saying light speeds up when going into glass — it slows down in denser media.",
      "TIR in less dense medium hitting more dense boundary — TIR can only happen when going from denser to less dense.",
    ],
  },
  {
    id: "phys-note-4-1", subjectId: "physics-0625", objectiveId: "obj-4-1",
    title: "Simple Phenomena of Magnetism",
    keyPoints: [
      "Magnetic materials: iron, steel, cobalt, nickel — only these are attracted to magnets",
      "Like poles repel; unlike poles attract",
      "Electromagnets: coil of wire carrying current; strength increased by more turns, more current, soft iron core",
      "Motor effect: current-carrying conductor in magnetic field experiences a force (F = BIL)",
    ],
    content: [
      {
        kind: "bullets", heading: "Magnetic field lines — key rules",
        bullets: [
          "Field lines run from North to South (outside the magnet)",
          "Field lines never cross",
          "Closer lines = stronger field",
          "Arrows on lines show direction of force on a North pole",
          "Inside a magnet: field lines run from South to North (completing the loop)",
        ],
      },
      { kind: "paragraph", heading: "Electromagnets and their uses", text: "An electromagnet is made by winding insulated copper wire around a soft iron core and connecting to a DC supply. Soft iron is used because it is easily magnetised and demagnetised. Permanent magnets use hard steel. Electromagnets are used in: electric motors, generators, transformers, electric bells, maglev trains, MRI scanners, scrap metal cranes." },
      { kind: "definition", term: "Fleming's Left-Hand Rule (Motor Effect)", definition: "For a current-carrying conductor in a magnetic field: hold the left hand so that the First finger points in the Field direction (N→S), the seCond finger in the Current direction, and the thuMb gives the direction of Motion/Force (F = BIL). Used to find the direction of force on motors." },
    ],
    examTips: [
      "FBI with left hand: Field (1st finger), Current (2nd finger), Motion/Force (thumb). Practise until automatic.",
      "Force is ZERO when the conductor is parallel to the field. Force is MAXIMUM when perpendicular to the field.",
      "To increase the force on a conductor: increase B (stronger magnet), increase I (larger current), increase L (longer conductor in field).",
    ],
    commonMistakes: [
      "Using the right hand instead of the left for the motor effect (right hand is for the generator effect/dynamo rule).",
      "Saying all metals are magnetic — only iron, steel, cobalt, and nickel are magnetic.",
    ],
  },
  {
    id: "phys-note-4-2", subjectId: "physics-0625", objectiveId: "obj-4-2",
    title: "Electrical Quantities",
    keyPoints: [
      "V = IR (Ohm's Law); P = IV; Q = It",
      "Series: same current throughout; voltages add up; resistances add up",
      "Parallel: same voltage across each branch; currents add up; total resistance less than smallest",
      "AC: current alternates direction (mains 50 Hz, 230 V); DC: one direction only",
    ],
    content: [
      {
        kind: "table", heading: "Key electrical formulas",
        headers: ["Formula", "Quantities", "Notes"],
        rows: [
          ["V = IR", "Voltage, current, resistance", "Ohm's Law — applies at constant temperature"],
          ["P = IV", "Power, current, voltage", "Also: P = I²R = V²/R"],
          ["Q = It", "Charge, current, time", "Charge in coulombs"],
          ["E = QV", "Energy, charge, voltage", "Energy transferred"],
          ["E = Pt = IVt", "Energy, power, time", "Electrical energy in joules"],
        ],
      },
      {
        kind: "table", heading: "Series vs Parallel circuits",
        headers: ["Feature", "Series", "Parallel"],
        rows: [
          ["Current", "Same throughout", "Splits at junctions (Kirchhoff's 1st law)"],
          ["Voltage", "Splits across components", "Same across each branch"],
          ["Resistance", "R = R₁ + R₂ + ...", "1/R = 1/R₁ + 1/R₂ + ..."],
          ["If one component fails", "All fail (break in circuit)", "Others still work"],
          ["Use", "Fairy lights (decorative)", "Household appliances (each works independently)"],
        ],
      },
      { kind: "paragraph", heading: "AC vs DC and the mains supply", text: "DC (direct current): current flows in one direction only; provided by batteries. AC (alternating current): current reverses direction periodically; UK mains = 230 V (rms), 50 Hz. The frequency is how many times per second the current completes a full cycle. AC is used for mains power because it can be transformed to different voltages efficiently (transformers only work with AC)." },
    ],
    examTips: [
      "Power triangle: P = IV, I = P/V, V = P/I. Also useful: P = I²R (when V not given), P = V²/R (when I not given).",
      "Parallel resistors: the combined resistance is LESS than the smallest individual resistor — more paths = less resistance.",
      "Charge Q = It: if 3 A flows for 2 minutes, Q = 3 × 120 = 360 C (convert minutes to seconds).",
    ],
    commonMistakes: [
      "Adding resistances in parallel like series (R_total = R₁ + R₂) — use the reciprocal formula for parallel.",
      "Forgetting to convert time to seconds when calculating charge Q = It.",
      "Confusing voltage drop (series circuit) with equal voltage (parallel circuit).",
    ],
  },
  {
    id: "phys-note-5-1", subjectId: "physics-0625", objectiveId: "obj-5-1",
    title: "The Nuclear Model of the Atom",
    keyPoints: [
      "Atom = small dense positive nucleus + electrons in shells (mostly empty space)",
      "Protons: +1 charge, mass 1 u; Neutrons: 0 charge, mass 1 u; Electrons: −1 charge, ~0 mass",
      "Atomic number (Z) = protons; Mass number (A) = protons + neutrons",
      "Rutherford scattering experiment proved the nuclear model",
    ],
    content: [
      {
        kind: "table", heading: "Subatomic particles",
        headers: ["Particle", "Relative mass", "Relative charge", "Location"],
        rows: [
          ["Proton", "1", "+1", "Nucleus"],
          ["Neutron", "1", "0", "Nucleus"],
          ["Electron", "1/1840 (≈0)", "−1", "Shells around nucleus"],
        ],
      },
      { kind: "paragraph", heading: "Rutherford alpha scattering experiment", text: "Alpha particles were fired at thin gold foil. Most passed straight through (atom is mostly empty space). A small fraction were deflected slightly (positive charge not uniformly distributed). Very few (≈1 in 8000) bounced back through large angles (tiny dense positively charged nucleus). This disproved Thomson's 'plum pudding model' and led to Rutherford's nuclear model." },
      {
        kind: "bullets", heading: "Nuclide notation and isotopes",
        bullets: [
          "Nuclide notation: ᴬ_Z X (A = mass number on top, Z = atomic number on bottom)",
          "Neutrons = A − Z",
          "Isotopes: same Z (same element) but different A (different neutron number)",
          "Same chemical properties (same electron arrangement); different physical properties (different mass, density, diffusion rate)",
          "Example: ¹²C and ¹⁴C are both carbon (6 protons), but ¹²C has 6 neutrons and ¹⁴C has 8 neutrons",
        ],
      },
    ],
    examTips: [
      "The key result of alpha scattering: 'bounced back' = tiny dense positive nucleus. Most particles pass through = mostly empty space.",
      "Isotopes have the same chemical properties because chemical properties depend on electron number, which depends on proton number — and isotopes have the same proton number.",
      "Ions: losing electrons → positive ion (cation); gaining electrons → negative ion (anion). Proton number doesn't change.",
    ],
    commonMistakes: [
      "Thinking mass number is on the bottom — A (mass) is on top, Z (atomic number) is on bottom.",
      "Saying isotopes have different chemical properties — same proton number → same electrons → same chemistry.",
    ],
  },
  {
    id: "phys-note-5-2", subjectId: "physics-0625", objectiveId: "obj-5-2",
    title: "Radioactivity",
    keyPoints: [
      "Alpha (α): helium nucleus (+2), stopped by paper, most ionising, least penetrating",
      "Beta (β): fast electron (−1), stopped by few mm aluminium",
      "Gamma (γ): EM wave, no charge, reduced by thick lead, most penetrating",
      "Half-life: time for activity (or number of undecayed nuclei) to halve",
    ],
    content: [
      {
        kind: "table", heading: "Radiation comparison",
        headers: ["Property", "Alpha (α)", "Beta (β)", "Gamma (γ)"],
        rows: [
          ["Nature", "Helium nucleus (2p+2n)", "Fast electron", "EM wave (photon)"],
          ["Charge", "+2", "−1", "0"],
          ["Mass", "4 u", "~0", "0"],
          ["Stopped by", "Paper / few cm air", "Few mm aluminium", "Thick lead (reduced, not stopped)"],
          ["Ionising power", "Highest (most ionising)", "Medium", "Lowest"],
          ["Penetrating power", "Lowest", "Medium", "Highest"],
          ["Deflection in field", "Towards negative (small deflection)", "Towards positive (large deflection)", "Not deflected"],
        ],
      },
      { kind: "definition", term: "Half-life", definition: "The time taken for the activity (or number of undecayed nuclei) of a radioactive sample to halve. Each half-life: activity → half, number of undecayed atoms → half. To find remaining activity after n half-lives: A = A₀ × (1/2)ⁿ." },
      {
        kind: "bullets", heading: "Nuclear equations",
        bullets: [
          "Alpha decay: A decreases by 4, Z decreases by 2. Emits ⁴₂He",
          "Beta decay: A unchanged, Z increases by 1. A neutron → proton + electron (β particle emitted)",
          "Gamma emission: A and Z unchanged. Nucleus releases excess energy as γ ray",
          "Balance check: sum of A on left = sum of A on right; same for Z",
        ],
      },
    ],
    examTips: [
      "Half-life: number of half-lives = total time / half-life. Then activity = initial × (1/2)ⁿ.",
      "Nuclear equations must balance: top numbers (A) and bottom numbers (Z) must balance on both sides.",
      "Uses of radiation: alpha in smoke detectors; beta for checking thickness of paper/foil; gamma for sterilisation, radiotherapy, tracers.",
    ],
    commonMistakes: [
      "Dividing activity by number of half-lives instead of halving repeatedly — always halve n times.",
      "Alpha decay: forgetting BOTH mass number (−4) AND atomic number (−2) change.",
      "Saying gamma radiation is 'stopped' by lead — it is only reduced/attenuated, never completely stopped.",
    ],
  },
];
