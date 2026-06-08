import { TopicQuestion } from "@/types/content";

export const physicsQuestions: TopicQuestion[] = [
  // ─── obj-1-1: Motion ─────────────────────────────────────────────────────
  {
    id: "phys-1-1-e", subjectId: "physics-0625", objectiveId: "obj-1-1",
    difficulty: "Easy", marks: 2,
    question: "State the difference between speed and velocity.",
    workedSolution: {
      steps: ["Speed is scalar (magnitude only). Velocity is a vector (magnitude + direction)."],
      markSchemePoints: ["Speed has magnitude only / is scalar (1)", "Velocity has magnitude AND direction / is vector (1)"],
      examTip: "Speed = distance/time. Velocity = displacement/time. Always include direction when quoting a velocity.",
    },
  },
  {
    id: "phys-1-1-m", subjectId: "physics-0625", objectiveId: "obj-1-1",
    difficulty: "Medium", marks: 4,
    question: "A car travels 120 m in 8 s then decelerates uniformly to rest in a further 4 s. (a) Calculate the average speed over the first 8 s. (b) Calculate the deceleration during the final 4 s.",
    workedSolution: {
      steps: ["(a) speed = 120/8 = 15 m/s", "(b) a = Δv/t = (0−15)/4 = −3.75 m/s²; deceleration = 3.75 m/s²"],
      markSchemePoints: ["Speed = 15 m/s (1)", "Correct formula a = Δv/t (1)", "Deceleration = 3.75 m/s² (1)", "Unit: m/s² (1)"],
      examTip: "Deceleration is a negative acceleration. Quote magnitude and say 'deceleration', or give the negative value as acceleration — both accepted.",
    },
  },
  {
    id: "phys-1-1-h", subjectId: "physics-0625", objectiveId: "obj-1-1",
    difficulty: "Hard", marks: 5,
    question: "A distance–time graph shows a curve with increasing gradient. Describe the motion and explain how to find the speed at a specific point. Sketch the corresponding speed–time graph.",
    workedSolution: {
      steps: ["Increasing gradient → object is accelerating (speed increasing over time).", "Instantaneous speed at a point = gradient of tangent to curve at that point.", "Draw a tangent, measure rise/run = Δd/Δt.", "Speed–time graph: straight line with positive gradient (constant acceleration)."],
      markSchemePoints: ["Increasing gradient → acceleration (1)", "Gradient of d–t graph = speed (1)", "Draw tangent to curve (1)", "Speed = Δd/Δt of tangent (1)", "Speed–time: straight line with positive gradient (1)"],
      examTip: "d–t: gradient = speed. v–t: gradient = acceleration; area under graph = distance. Memorise both.",
    },
  },

  // ─── obj-1-2: Mass and Weight ─────────────────────────────────────────────
  {
    id: "phys-1-2-e", subjectId: "physics-0625", objectiveId: "obj-1-2",
    difficulty: "Easy", marks: 2,
    question: "State the difference between mass and weight, including units for each.",
    workedSolution: {
      steps: ["Mass: amount of matter, kg, scalar, constant everywhere.", "Weight: gravitational force on an object, N, vector, varies with location."],
      markSchemePoints: ["Mass = amount of matter, kg, does not change with location (1)", "Weight = gravitational force, N, changes with g (1)"],
      examTip: "W = mg. On Earth g = 10 N/kg. On Moon g ≈ 1.6 N/kg — weight is about 1/6 of Earth weight.",
    },
  },
  {
    id: "phys-1-2-m", subjectId: "physics-0625", objectiveId: "obj-1-2",
    difficulty: "Medium", marks: 3,
    question: "An astronaut has a mass of 80 kg. Calculate her weight on Earth (g = 10 N/kg) and on the Moon (g = 1.6 N/kg). Explain why her mass is the same on both.",
    workedSolution: {
      steps: ["W(Earth) = 80 × 10 = 800 N", "W(Moon) = 80 × 1.6 = 128 N", "Mass = amount of matter — independent of gravity and location."],
      markSchemePoints: ["800 N (1)", "128 N (1)", "Mass constant — not dependent on gravitational field (1)"],
      examTip: "Weight varies; mass does not. A spring balance reads weight (changes on Moon); a beam balance reads mass (same on Moon).",
    },
  },
  {
    id: "phys-1-2-h", subjectId: "physics-0625", objectiveId: "obj-1-2",
    difficulty: "Hard", marks: 5,
    question: "Explain why a spring balance and beam balance give different readings on the Moon compared to Earth. Which instrument correctly measures mass, and why?",
    workedSolution: {
      steps: ["Spring balance measures force (weight = mg). On Moon g is smaller → spring stretches less → lower reading in N.", "Beam balance compares the object's weight against standard masses. Both sides experience the same reduced g — the ratio is unchanged. Reading is the same (correct mass in kg).", "Beam balance correctly measures mass because it compares gravitational forces on both sides, cancelling out the effect of g."],
      markSchemePoints: ["Spring balance reads force/weight — lower on Moon (1)", "Beam balance: both sides affected equally by g (1)", "Beam balance reading unchanged (1)", "Beam balance correctly measures mass (1)", "Reason: gravitational force acts on both pans equally — g cancels (1)"],
      examTip: "Beam balance = measures mass (location-independent). Spring balance = measures weight (location-dependent). Classic 5-mark question.",
    },
  },

  // ─── obj-1-3: Density ──────────────────────────────────────────────────────
  {
    id: "phys-1-3-e", subjectId: "physics-0625", objectiveId: "obj-1-3",
    difficulty: "Easy", marks: 2,
    question: "State the formula for density and calculate the density of an object with mass 540 g and volume 200 cm³.",
    workedSolution: {
      steps: ["Density = mass / volume", "ρ = 540 / 200 = 2.7 g/cm³"],
      markSchemePoints: ["ρ = m/V stated (1)", "ρ = 2.7 g/cm³ (1)"],
      examTip: "Units matter — if mass is in g and volume is in cm³, density is in g/cm³. If SI units (kg, m³) are used, density is in kg/m³.",
    },
  },
  {
    id: "phys-1-3-m", subjectId: "physics-0625", objectiveId: "obj-1-3",
    difficulty: "Medium", marks: 4,
    question: "Describe an experiment to determine the density of an irregularly shaped stone. Include all measurements and calculations.",
    workedSolution: {
      steps: ["Measure the mass of the stone using a balance. Record mass m in grams.", "Partially fill a measuring cylinder with water; record the initial volume V₁.", "Submerge the stone in the water using a thread; record the new volume V₂.", "Volume of stone = V₂ − V₁ (displacement method).", "Density = mass / volume = m / (V₂ − V₁)."],
      markSchemePoints: ["Mass measured with balance (1)", "Volume by water displacement: V₂ − V₁ (1)", "Correct calculation: ρ = m/(V₂−V₁) (1)", "Correct units (g/cm³ or kg/m³) (1)"],
      examTip: "The key to irregular objects is always the displacement method. Make sure the stone is fully submerged and thread doesn't add significant volume.",
    },
  },
  {
    id: "phys-1-3-h", subjectId: "physics-0625", objectiveId: "obj-1-3",
    difficulty: "Hard", marks: 5,
    question: "An iceberg floats in seawater with 90% of its volume submerged. The density of seawater is 1025 kg/m³. Calculate the density of ice. Explain using density principles why ice floats.",
    workedSolution: {
      steps: ["For a floating object: weight of object = weight of fluid displaced.", "mass_ice × g = mass of 90% volume of seawater × g", "ρ_ice × V × g = ρ_seawater × 0.90V × g", "ρ_ice = 0.90 × 1025 = 922.5 kg/m³ ≈ 923 kg/m³", "Ice floats because its density (923 kg/m³) < density of seawater (1025 kg/m³). Objects float when they are less dense than the fluid."],
      markSchemePoints: ["Floating condition: upthrust = weight (1)", "Equation set up correctly: ρ_ice = 0.90 × ρ_seawater (1)", "ρ_ice = 922.5 kg/m³ (1)", "Ice floats because density of ice < density of seawater (1)", "Objects less dense than fluid float (1)"],
      examTip: "For floating: fraction submerged = ρ_object / ρ_fluid. Ice is less dense than water because its molecular lattice structure is more open.",
    },
  },

  // ─── obj-1-4: Effects of Forces ───────────────────────────────────────────
  {
    id: "phys-1-4-e", subjectId: "physics-0625", objectiveId: "obj-1-4",
    difficulty: "Easy", marks: 3,
    question: "State Newton's three laws of motion.",
    workedSolution: {
      steps: [
        "1st Law: An object remains at rest or in uniform motion unless acted on by a resultant (net) force.",
        "2nd Law: The resultant force on an object equals the product of its mass and acceleration (F = ma).",
        "3rd Law: When object A exerts a force on object B, object B exerts an equal and opposite force on object A.",
      ],
      markSchemePoints: ["1st: no resultant force → no change in motion / constant velocity (1)", "2nd: F = ma stated (1)", "3rd: equal and opposite forces on two different objects (1)"],
      examTip: "For Newton's 3rd Law: the forces act on DIFFERENT objects. 'Equal and opposite' alone is not enough — you must say they act on different bodies.",
    },
  },
  {
    id: "phys-1-4-m", subjectId: "physics-0625", objectiveId: "obj-1-4",
    difficulty: "Medium", marks: 4,
    question: "A resultant force of 12 N acts on a 3 kg object. (a) Calculate the acceleration. (b) Explain what happens to the acceleration if the force is doubled and the mass is halved.",
    workedSolution: {
      steps: ["(a) a = F/m = 12/3 = 4 m/s²", "(b) New F = 24 N, new m = 1.5 kg. a = 24/1.5 = 16 m/s². Acceleration increases by factor of 4."],
      markSchemePoints: ["a = F/m used (1)", "a = 4 m/s² (1)", "New a = 16 m/s² (1)", "Acceleration × 4 / increases by factor of 4 (1)"],
      examTip: "F = ma — if F doubles (×2) and m halves (×½), acceleration changes by factor 2 ÷ ½ = 4. Work it through rather than guessing.",
    },
  },
  {
    id: "phys-1-4-h", subjectId: "physics-0625", objectiveId: "obj-1-4",
    difficulty: "Hard", marks: 6,
    question: "A skydiver of mass 70 kg jumps from a plane. Describe and explain her motion from leaving the plane to reaching terminal velocity. Include forces in your answer.",
    workedSolution: {
      steps: [
        "At the instant of jumping: weight > air resistance (air resistance ≈ 0 initially). Resultant force downward = weight. She accelerates downward at g = 10 m/s².",
        "As speed increases: air resistance increases (proportional to speed squared). Resultant downward force decreases. She still accelerates, but at a reducing rate.",
        "At terminal velocity: air resistance = weight. Resultant force = 0. No acceleration — constant (maximum) velocity.",
        "Weight = mg = 70 × 10 = 700 N. Terminal velocity when air resistance = 700 N.",
        "On free-body diagram: at start — weight large, air resistance zero. At terminal velocity — weight = air resistance, both equal 700 N.",
      ],
      markSchemePoints: [
        "Initially: weight > air resistance → accelerates downward (1)",
        "As speed increases: air resistance increases (1)",
        "Resultant force decreases → acceleration decreases (1)",
        "Terminal velocity: air resistance = weight / resultant force = 0 (1)",
        "At terminal velocity: constant velocity (no acceleration) (1)",
        "Correct value: weight = 700 N / air resistance = 700 N at terminal velocity (1)",
      ],
      examTip: "The skydiver question is almost always on the paper. Practise: draw the velocity-time graph (curve levelling off) and free-body diagrams at each stage.",
    },
  },

  // ─── obj-2-1: Kinetic Model of Matter ────────────────────────────────────
  {
    id: "phys-2-1-e", subjectId: "physics-0625", objectiveId: "obj-2-1",
    difficulty: "Easy", marks: 3,
    question: "State the key differences between the arrangement and motion of particles in solids, liquids and gases.",
    workedSolution: {
      steps: ["Solid: regular, closely packed, vibrate in fixed positions.", "Liquid: irregular, close, move past each other.", "Gas: far apart, random, move rapidly in all directions."],
      markSchemePoints: ["Solid: regular arrangement, vibrate (1)", "Liquid: close, random, flow (1)", "Gas: far apart, random, rapid movement (1)"],
      examTip: "Always address both arrangement AND movement for each state to guarantee marks.",
    },
  },
  {
    id: "phys-2-1-m", subjectId: "physics-0625", objectiveId: "obj-2-1",
    difficulty: "Medium", marks: 4,
    question: "Describe the Brownian motion experiment and explain what it tells us about the nature of matter.",
    workedSolution: {
      steps: ["Smoke particles are placed in a glass cell and illuminated with a bright light. Under a microscope, the smoke particles appear as bright specks moving in a random, zigzag path.", "Explanation: air molecules are too small to see but bombard the smoke particles from all sides. When more air molecules hit one side than another, the smoke particle moves in that direction. Because the collisions are random, the motion is erratic.", "This provides evidence that: (1) matter is made of tiny, invisible particles; (2) these particles are in constant random motion."],
      markSchemePoints: ["Smoke particles observed under microscope (1)", "Move in random zigzag path (1)", "Caused by uneven bombardment by invisible air molecules (1)", "Evidence for particles being in constant random motion (1)"],
      examTip: "You see the smoke particles (large), not the air molecules (tiny). The zigzag motion is caused by the air molecules hitting unevenly.",
    },
  },
  {
    id: "phys-2-1-h", subjectId: "physics-0625", objectiveId: "obj-2-1",
    difficulty: "Hard", marks: 5,
    question: "Explain, using the kinetic model, why (a) gases can be compressed easily but liquids cannot, and (b) gases exert pressure on the walls of their containers but solids do not (in the same way).",
    workedSolution: {
      steps: ["(a) Gas compression: gas particles are widely spaced with large empty space between them. Applying pressure reduces this space — gas is easily compressible. Liquid particles are already close together with minimal space → very difficult to compress further.", "(b) Gas pressure: gas particles move rapidly and randomly, colliding with container walls. Each collision exerts a tiny force. The sum of many collisions per unit area = pressure. Solid particles vibrate in fixed positions, they do not freely travel to strike all surfaces — solid doesn't fill its container and doesn't exert uniform pressure in the same way."],
      markSchemePoints: ["Gas: large spaces between particles → compressible (1)", "Liquid: particles already close → incompressible (1)", "Gas pressure: rapid random particle movement → collisions with walls (1)", "Force per unit area from many collisions = pressure (1)", "Solids: particles in fixed positions / do not move freely to exert pressure on all sides (1)"],
      examTip: "Compressibility = how much space is between particles. Pressure = result of particle collisions. Both explanations go back to particle spacing and movement.",
    },
  },

  // ─── obj-2-2: Thermal Properties of Matter ───────────────────────────────
  {
    id: "phys-2-2-e", subjectId: "physics-0625", objectiveId: "obj-2-2",
    difficulty: "Easy", marks: 2,
    question: "Define specific heat capacity and state its unit.",
    workedSolution: {
      steps: ["Specific heat capacity (c): the energy required to raise the temperature of 1 kg of a substance by 1°C (or 1 K).", "Unit: J/(kg·°C) or J·kg⁻¹·K⁻¹"],
      markSchemePoints: ["Energy per kg per °C / energy to raise 1 kg by 1°C (1)", "Unit: J/(kg·°C) or J·kg⁻¹·K⁻¹ (1)"],
      examTip: "Formula: Q = mcΔT. Water has a very high specific heat capacity (4200 J/kg°C) — it resists temperature change, which is why it's used as a coolant.",
    },
  },
  {
    id: "phys-2-2-m", subjectId: "physics-0625", objectiveId: "obj-2-2",
    difficulty: "Medium", marks: 4,
    question: "Calculate the energy needed to raise the temperature of 2.0 kg of water from 20°C to 100°C. (Specific heat capacity of water = 4200 J/kg°C). Then calculate how long this would take using a 1500 W kettle (assume no energy losses).",
    workedSolution: {
      steps: ["Q = mcΔT = 2.0 × 4200 × (100−20) = 2.0 × 4200 × 80 = 672 000 J", "Power = energy / time → time = energy / power = 672 000 / 1500 = 448 s"],
      markSchemePoints: ["Q = mcΔT used (1)", "Q = 672 000 J / 672 kJ (1)", "t = Q/P = 672000/1500 (1)", "t = 448 s (1)"],
      examTip: "Always calculate ΔT = final − initial first. Check units match: Q in J, m in kg, c in J/kg°C, ΔT in °C.",
    },
  },
  {
    id: "phys-2-2-h", subjectId: "physics-0625", objectiveId: "obj-2-2",
    difficulty: "Hard", marks: 6,
    question: "Explain thermal expansion in solids, liquids and gases in terms of the kinetic model. Explain why gases expand much more than solids when heated.",
    workedSolution: {
      steps: [
        "When a substance is heated, its particles gain kinetic energy and move/vibrate more vigorously.",
        "Solids: particles vibrate more — they push slightly further apart on average (the interatomic force is asymmetric: harder to compress than extend). Small expansion.",
        "Liquids: particles move faster and occupy slightly more space. Larger expansion than solids.",
        "Gases: particles move faster and exert more pressure. At constant pressure, the volume must increase to maintain equilibrium. Particles are already far apart, so expansion is very large.",
        "Gases expand much more: the spaces between gas particles are large, so increasing speed has a proportionally greater effect on volume. In solids, particles are already close and strongly bound.",
      ],
      markSchemePoints: [
        "Heating → particles gain kinetic energy → move/vibrate more vigorously (1)",
        "Solids: particles push further apart on average → small expansion (1)",
        "Liquids: larger expansion than solids (1)",
        "Gases expand most: large spaces between particles (1)",
        "Gases: must expand to maintain pressure when moving faster (at constant pressure) (1)",
        "Solids: strong forces hold particles close → resist expansion (1)",
      ],
      examTip: "Rank of expansion: gases > liquids > solids. Always explain in terms of particle spacing and forces between particles.",
    },
  },

  // ─── obj-2-3: Thermal Energy Transfers ───────────────────────────────────
  {
    id: "phys-2-3-e", subjectId: "physics-0625", objectiveId: "obj-2-3",
    difficulty: "Easy", marks: 3,
    question: "State the three methods of thermal energy transfer and which states of matter each requires.",
    workedSolution: {
      steps: ["Conduction: transfer through solids (or fluids at rest) via particle vibrations / free electrons — mainly solids.", "Convection: transfer through fluids (liquids and gases) via bulk movement of the fluid.", "Radiation: transfer via electromagnetic waves (infrared) — does not require a medium; can travel through a vacuum."],
      markSchemePoints: ["Conduction: mainly solids, particle vibrations (1)", "Convection: fluids (liquids/gases), bulk flow (1)", "Radiation: any medium or vacuum, electromagnetic waves (1)"],
      examTip: "Only radiation can travel through a vacuum (e.g. from the Sun to Earth). The others require matter.",
    },
  },
  {
    id: "phys-2-3-m", subjectId: "physics-0625", objectiveId: "obj-2-3",
    difficulty: "Medium", marks: 4,
    question: "Explain how convection currents form in a room with a radiator on one wall.",
    workedSolution: {
      steps: [
        "Air near the radiator is heated and expands (gains kinetic energy, particles move faster and further apart).",
        "This warm air becomes less dense than the surrounding cooler air.",
        "The less dense warm air rises (upthrust > weight).",
        "Cooler, denser air from elsewhere in the room flows in at the bottom to replace it.",
        "This creates a circular convection current — warm air rises near the radiator and cool air falls away from it, circulating throughout the room.",
      ],
      markSchemePoints: [
        "Air near radiator heated → expands → less dense (1)",
        "Less dense warm air rises (1)",
        "Cooler denser air moves in to replace it (1)",
        "Circular convection current described (1)",
      ],
      examTip: "Convection: warm fluid rises (less dense); cool fluid sinks (denser). Draw an arrow diagram — circular current — to visualise.",
    },
  },
  {
    id: "phys-2-3-h", subjectId: "physics-0625", objectiveId: "obj-2-3",
    difficulty: "Hard", marks: 6,
    question: "A vacuum flask (Thermos) keeps hot drinks hot and cold drinks cold. Explain how each design feature of the flask minimises each type of thermal energy transfer.",
    workedSolution: {
      steps: [
        "Double glass walls with vacuum between them: vacuum eliminates conduction and convection (both require a medium/particles). Main reduction of energy transfer.",
        "Silvered inner walls: highly polished silver surfaces reflect infrared radiation back into the liquid, reducing transfer by radiation in both directions.",
        "Plastic stopper/cap: plastic is a poor conductor of heat — reduces conduction through the top.",
        "Plastic casing/support: again poor conductor — reduces conduction through the base and sides to the surroundings.",
        "Overall: all three modes of heat transfer are minimised simultaneously, so the flask is effective for both hot and cold contents.",
      ],
      markSchemePoints: [
        "Vacuum: eliminates conduction (no medium) (1)",
        "Vacuum: eliminates convection (no fluid medium) (1)",
        "Silvered walls: reflect infrared radiation (reduce radiation transfer) (1)",
        "Plastic cap/casing: poor conductor → reduces conduction through cap and base (1)",
        "Works for both hot and cold: radiation reflected back in both cases (1)",
        "Combines all three reductions simultaneously (1)",
      ],
      examTip: "For each feature: name it, state which type of transfer it reduces, and explain the mechanism (why does silvering reduce radiation? — reflection).",
    },
  },

  // ─── obj-3-1: General Wave Properties ────────────────────────────────────
  {
    id: "phys-3-1-e", subjectId: "physics-0625", objectiveId: "obj-3-1",
    difficulty: "Easy", marks: 3,
    question: "Define the following wave properties: (a) amplitude, (b) wavelength, (c) frequency.",
    workedSolution: {
      steps: ["(a) Amplitude: maximum displacement of a particle from its equilibrium (rest) position. Unit: metres.", "(b) Wavelength (λ): distance between two adjacent points in phase (e.g. crest to crest). Unit: metres.", "(c) Frequency (f): number of complete waves passing a point per second. Unit: hertz (Hz)."],
      markSchemePoints: ["Amplitude: max displacement from equilibrium (1)", "Wavelength: distance between successive crests/troughs / adjacent in-phase points (1)", "Frequency: waves per second / Hz (1)"],
      examTip: "Amplitude is NOT the full height from trough to crest — it's only half of that (from the rest position to the peak).",
    },
  },
  {
    id: "phys-3-1-m", subjectId: "physics-0625", objectiveId: "obj-3-1",
    difficulty: "Medium", marks: 4,
    question: "A water wave has a frequency of 2.5 Hz and a wavelength of 0.40 m. (a) Calculate the wave speed. (b) Calculate the period of the wave.",
    workedSolution: {
      steps: ["(a) v = fλ = 2.5 × 0.40 = 1.0 m/s", "(b) T = 1/f = 1/2.5 = 0.40 s"],
      markSchemePoints: ["v = fλ used (1)", "v = 1.0 m/s (1)", "T = 1/f used (1)", "T = 0.40 s (1)"],
      examTip: "v = fλ is THE most important wave formula. Period T = 1/f — they are reciprocals. If f = 2.5 Hz, T = 0.4 s (2.5 × 0.4 = 1, which checks out).",
    },
  },
  {
    id: "phys-3-1-h", subjectId: "physics-0625", objectiveId: "obj-3-1",
    difficulty: "Hard", marks: 6,
    question: "Describe and explain what happens to the speed, frequency, and wavelength of light as it passes from air into glass. Draw a ray diagram showing refraction at the boundary.",
    workedSolution: {
      steps: [
        "Speed: light slows down when entering glass (glass is optically denser than air). Speed decreases.",
        "Frequency: frequency does NOT change — it is determined by the source, not the medium.",
        "Wavelength: since v = fλ and f is constant, λ must decrease (λ = v/f — lower v → lower λ).",
        "Refraction: the ray bends towards the normal when entering the denser medium (glass). The angle of refraction (r) < angle of incidence (i).",
        "Diagram: incident ray → normal → refracted ray bending towards normal in glass. Angles i and r labelled.",
      ],
      markSchemePoints: [
        "Speed decreases (slows in glass) (1)",
        "Frequency unchanged (1)",
        "Wavelength decreases (λ = v/f, v decreases, f constant) (1)",
        "Ray bends towards normal in glass (1)",
        "Angle of refraction < angle of incidence (1)",
        "Correct diagram with normal, angles i and r labelled (1)",
      ],
      examTip: "Frequency NEVER changes when a wave crosses a boundary. Speed changes → wavelength changes proportionally. Bend towards normal → denser medium.",
    },
  },

  // ─── obj-3-2: Light ───────────────────────────────────────────────────────
  {
    id: "phys-3-2-e", subjectId: "physics-0625", objectiveId: "obj-3-2",
    difficulty: "Easy", marks: 2,
    question: "State the law of reflection and apply it to a ray of light hitting a mirror at 35° to the normal.",
    workedSolution: {
      steps: ["Law of reflection: angle of incidence = angle of reflection (both measured from the normal).", "Angle of incidence = 35° → angle of reflection = 35°."],
      markSchemePoints: ["Angle of incidence = angle of reflection (1)", "Reflected angle = 35° (1)"],
      examTip: "ALL angles in optics are measured from the NORMAL, not from the surface. If a ray hits the mirror at 55° to the surface, the angle to the normal is 90°−55°=35°.",
    },
  },
  {
    id: "phys-3-2-m", subjectId: "physics-0625", objectiveId: "obj-3-2",
    difficulty: "Medium", marks: 4,
    question: "Explain total internal reflection and state the two conditions required for it to occur. Give one practical application.",
    workedSolution: {
      steps: [
        "Total internal reflection (TIR) occurs when light travelling in a denser medium hits the boundary with a less dense medium at an angle greater than the critical angle.",
        "The light cannot pass into the less dense medium — it is completely reflected back into the denser medium.",
        "Conditions: (1) light must be in the denser medium; (2) angle of incidence must exceed the critical angle.",
        "Application: optical fibres use TIR to transmit data (light signals) over long distances with minimal loss — used in telecommunications and endoscopes.",
      ],
      markSchemePoints: [
        "Must be in denser medium hitting less dense boundary (1)",
        "Angle of incidence > critical angle (1)",
        "Light completely reflected back (1)",
        "Application: optical fibres / endoscope / periscope prisms (1)",
      ],
      examTip: "TIR only occurs going from dense to less dense (e.g. glass to air). At exactly the critical angle, the refracted ray travels along the boundary (90°).",
    },
  },
  {
    id: "phys-3-2-h", subjectId: "physics-0625", objectiveId: "obj-3-2",
    difficulty: "Hard", marks: 6,
    question: "A converging lens has a focal length of 10 cm. An object is placed 15 cm from the lens. Using the lens formula (1/v − 1/u = 1/f) or scale ray diagram, find the image distance, state whether the image is real or virtual, and describe its nature.",
    workedSolution: {
      steps: [
        "Using lens formula with sign convention: u = −15 cm (object on left), f = +10 cm.",
        "1/v = 1/f + 1/u = 1/10 + 1/(−15) = 3/30 − 2/30 = 1/30",
        "v = +30 cm (positive → real image on opposite side of lens from object)",
        "Magnification m = v/u = 30/15 = 2 (ignoring signs).",
        "Image is: real (v positive), inverted, magnified (m = 2), formed 30 cm on the far side of the lens.",
      ],
      markSchemePoints: [
        "Correct application of lens formula (1)",
        "1/v = 1/10 − 1/15 = 1/30 (1)",
        "v = 30 cm (1)",
        "Real image (1)",
        "Inverted (1)",
        "Magnified (m = 2) (1)",
      ],
      examTip: "Object between F and 2F → real, inverted, magnified image beyond 2F. Object inside F → virtual, upright, magnified. These rules let you check your calculation.",
    },
  },

  // ─── obj-4-1: Simple Phenomena of Magnetism ──────────────────────────────
  {
    id: "phys-4-1-e", subjectId: "physics-0625", objectiveId: "obj-4-1",
    difficulty: "Easy", marks: 3,
    question: "State three properties of magnets and magnetic field lines.",
    workedSolution: {
      steps: ["Magnets have two poles (N and S). Like poles repel; unlike poles attract.", "Magnetic field lines run from North to South outside the magnet. They never cross. The closer the lines, the stronger the field."],
      markSchemePoints: ["Like poles repel, unlike poles attract (1)", "Field lines run N→S outside magnet / never cross (1)", "Closer lines = stronger field (1)"],
      examTip: "Field lines outside a magnet go from North to South. Inside the magnet, they run from South to North (continuous loops).",
    },
  },
  {
    id: "phys-4-1-m", subjectId: "physics-0625", objectiveId: "obj-4-1",
    difficulty: "Medium", marks: 4,
    question: "Describe how to make an electromagnet and explain two advantages it has over a permanent magnet.",
    workedSolution: {
      steps: [
        "Wind insulated wire around a soft iron core (solenoid). Connect to a d.c. power supply.",
        "When current flows, a magnetic field is created around the coil — the iron core becomes magnetised, greatly enhancing the field.",
        "Advantage 1: can be switched on and off (by switching current) — permanent magnets cannot be turned off.",
        "Advantage 2: strength can be varied by changing the current or number of turns — permanent magnets have a fixed strength.",
      ],
      markSchemePoints: ["Insulated wire wound around soft iron core + d.c. supply (1)", "Iron core increases field strength (1)", "Can be switched on/off (1)", "Strength adjustable by changing current or turns (1)"],
      examTip: "Soft iron core: easily magnetised and demagnetised. Hard steel would retain magnetism — not suitable for an electromagnet you want to switch off.",
    },
  },
  {
    id: "phys-4-1-h", subjectId: "physics-0625", objectiveId: "obj-4-1",
    difficulty: "Hard", marks: 5,
    question: "A current-carrying conductor is placed in a magnetic field. Explain the motor effect and state how the force can be maximised. Use Fleming's left-hand rule to determine the direction of force.",
    workedSolution: {
      steps: [
        "Motor effect: when a current-carrying conductor is placed in an external magnetic field, it experiences a force. This is because the magnetic field from the current interacts with the external field.",
        "Fleming's Left-Hand Rule: hold left hand so: First finger → Field direction (N→S); seCond finger → Current direction; thuMb → Motion/force direction.",
        "Force is maximised when the conductor is perpendicular (90°) to the field. Force is zero when parallel to field.",
        "Force F = BIL: B = magnetic flux density (T), I = current (A), L = length of conductor in field (m).",
        "To maximise: increase B (stronger magnet), increase I (larger current), increase L (longer conductor in field), keep conductor perpendicular to field.",
      ],
      markSchemePoints: [
        "Force on current-carrying conductor in magnetic field (motor effect) (1)",
        "Fleming's Left-Hand Rule correctly described/applied (1)",
        "Force maximum when conductor perpendicular to field (1)",
        "F = BIL stated (1)",
        "Two correct ways to increase force (1)",
      ],
      examTip: "FBI rule: First finger = Field, seCond = Current, thuMb = motion. Practice with your left hand until it's automatic — it appears on virtually every paper.",
    },
  },

  // ─── obj-4-2: Electrical Quantities ──────────────────────────────────────
  {
    id: "phys-4-2-e", subjectId: "physics-0625", objectiveId: "obj-4-2",
    difficulty: "Easy", marks: 3,
    question: "State Ohm's Law and write the formula relating voltage, current, and resistance.",
    workedSolution: {
      steps: ["Ohm's Law: the current through a conductor is directly proportional to the voltage across it, provided temperature and other physical conditions remain constant.", "V = IR (voltage = current × resistance)"],
      markSchemePoints: ["Current ∝ voltage at constant temperature (1)", "V = IR stated (1)", "Correct units: V in volts, I in amperes, R in ohms (1)"],
      examTip: "Ohm's Law only holds when temperature is constant (resistance changes with temperature for most materials). Non-ohmic components include light bulbs and diodes.",
    },
  },
  {
    id: "phys-4-2-m", subjectId: "physics-0625", objectiveId: "obj-4-2",
    difficulty: "Medium", marks: 4,
    question: "Two resistors, 6 Ω and 3 Ω, are connected (a) in series and (b) in parallel to a 12 V battery. Calculate the total resistance and total current in each case.",
    workedSolution: {
      steps: [
        "(a) Series: R_total = 6 + 3 = 9 Ω. I = V/R = 12/9 = 1.33 A",
        "(b) Parallel: 1/R_total = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2, so R_total = 2 Ω. I = 12/2 = 6 A",
      ],
      markSchemePoints: ["(a) R = 9 Ω (1)", "(a) I = 1.33 A (1)", "(b) R = 2 Ω (1)", "(b) I = 6 A (1)"],
      examTip: "Parallel: total resistance is always LESS than the smallest individual resistor. Series: total resistance is the sum. Parallel gives more current paths → lower total resistance.",
    },
  },
  {
    id: "phys-4-2-h", subjectId: "physics-0625", objectiveId: "obj-4-2",
    difficulty: "Hard", marks: 6,
    question: "Explain the difference between a.c. and d.c. current. A mains supply of 230 V (rms) at 50 Hz powers a 920 W electric heater. Calculate: (a) the current, (b) the resistance of the heater element, (c) the charge flowing through it in 30 s.",
    workedSolution: {
      steps: [
        "d.c.: current flows in one direction only (from battery). a.c.: current reverses direction periodically; mains frequency = 50 Hz (UK).",
        "(a) P = IV → I = P/V = 920/230 = 4 A",
        "(b) V = IR → R = V/I = 230/4 = 57.5 Ω",
        "(c) Q = It = 4 × 30 = 120 C",
      ],
      markSchemePoints: [
        "d.c. one direction; a.c. alternates direction (1)",
        "I = P/V = 920/230 = 4 A (1)",
        "R = V/I = 57.5 Ω (1)",
        "Q = It = 120 C (1)",
        "Correct formulas used throughout (1)",
        "Correct units on all answers (1)",
      ],
      examTip: "Power triangle: P = IV = I²R = V²/R — any two quantities let you find the third. Charge Q = It — current × time.",
    },
  },

  // ─── obj-5-1: Nuclear Model of the Atom ──────────────────────────────────
  {
    id: "phys-5-1-e", subjectId: "physics-0625", objectiveId: "obj-5-1",
    difficulty: "Easy", marks: 3,
    question: "An atom has the symbol ⁵⁶₂₆Fe. State the number of protons, neutrons, and electrons.",
    workedSolution: {
      steps: ["Protons = atomic number = 26", "Neutrons = mass number − atomic number = 56 − 26 = 30", "Electrons = protons = 26 (neutral atom)"],
      markSchemePoints: ["Protons = 26 (1)", "Neutrons = 30 (1)", "Electrons = 26 (1)"],
      examTip: "Top number = mass number (protons + neutrons). Bottom = atomic number = protons. Neutrons = top − bottom.",
    },
  },
  {
    id: "phys-5-1-m", subjectId: "physics-0625", objectiveId: "obj-5-1",
    difficulty: "Medium", marks: 4,
    question: "Explain what is meant by isotopes and give two examples for carbon. Explain why isotopes of the same element have the same chemical properties.",
    workedSolution: {
      steps: [
        "Isotopes: atoms of the same element (same proton number) with different mass numbers (different numbers of neutrons).",
        "Carbon isotopes: ¹²C (6 protons, 6 neutrons) and ¹⁴C (6 protons, 8 neutrons).",
        "Same chemical properties: chemical behaviour is determined by the electron configuration, which depends on the number of protons. Isotopes have the same number of protons → same electron arrangement → same chemistry.",
      ],
      markSchemePoints: [
        "Same number of protons, different number of neutrons (1)",
        "Two correct carbon isotopes named (¹²C and ¹⁴C or ¹³C) (1)",
        "Chemical properties determined by electron number/arrangement (1)",
        "Isotopes have same proton number → same electrons → same chemistry (1)",
      ],
      examTip: "Isotopes: same Z (proton number), different A (mass number). Same chemical properties because same electron arrangement. Different physical properties (different mass).",
    },
  },
  {
    id: "phys-5-1-h", subjectId: "physics-0625", objectiveId: "obj-5-1",
    difficulty: "Hard", marks: 5,
    question: "Describe the Geiger-Marsden alpha particle scattering experiment. State three observations and what each tells us about the structure of the atom.",
    workedSolution: {
      steps: [
        "Alpha particles (positive, heavy) are fired at a very thin gold foil. Detectors surround the foil at various angles.",
        "Observation 1: Most particles pass straight through → atom is mostly empty space.",
        "Observation 2: Small fraction deflected slightly → positive charge/mass not uniformly spread.",
        "Observation 3: Very few (≈1 in 8000) bounce back (>90°) → there is a tiny, dense, positively charged nucleus.",
        "Conclusion: atom has a small, dense, positively charged nucleus containing almost all the mass, surrounded by a mostly empty space where electrons orbit.",
      ],
      markSchemePoints: [
        "Most particles pass through → mostly empty space (1)",
        "Small fraction deflected → charge/mass not uniform (1)",
        "Very few bounce back → tiny dense positive nucleus (1)",
        "Nucleus very small relative to atom (1)",
        "Replaced plum pudding model / Rutherford nuclear model proposed (1)",
      ],
      examTip: "Three observations, each with a conclusion. 'Bounced back' is the most dramatic result and the most important — it disproves the plum pudding model.",
    },
  },

  // ─── obj-5-2: Radioactivity ────────────────────────────────────────────────
  {
    id: "phys-5-2-e", subjectId: "physics-0625", objectiveId: "obj-5-2",
    difficulty: "Easy", marks: 3,
    question: "Compare alpha, beta, and gamma radiation in terms of their nature, charge, and penetrating power.",
    workedSolution: {
      steps: [
        "Alpha (α): helium nucleus (2 protons + 2 neutrons), charge +2. Stopped by paper or a few cm of air. Least penetrating.",
        "Beta (β): fast electron (from nucleus), charge −1. Stopped by a few mm of aluminium.",
        "Gamma (γ): electromagnetic wave, no charge. Reduced (not stopped) by several cm of lead. Most penetrating.",
      ],
      markSchemePoints: ["Alpha: helium nucleus, +2, stopped by paper (1)", "Beta: fast electron, −1, stopped by aluminium (1)", "Gamma: EM wave, no charge, reduced by lead (1)"],
      examTip: "Penetrating power order: α < β < γ. Ionising power order: α > β > γ (reversed). Alpha is the most ionising because it moves slowest and has the highest charge.",
    },
  },
  {
    id: "phys-5-2-m", subjectId: "physics-0625", objectiveId: "obj-5-2",
    difficulty: "Medium", marks: 4,
    question: "The half-life of iodine-131 is 8 days. A sample initially has an activity of 640 Bq. Calculate the activity after 32 days.",
    workedSolution: {
      steps: [
        "Number of half-lives = 32 / 8 = 4 half-lives.",
        "After each half-life, activity halves: 640 → 320 → 160 → 80 → 40 Bq.",
        "Activity after 32 days = 40 Bq.",
      ],
      markSchemePoints: ["4 half-lives identified (1)", "Correct halving method (1)", "Activity = 40 Bq (1)", "Unit: Bq (1)"],
      examTip: "Always work out the number of half-lives first (total time ÷ half-life). Then halve the activity that many times. Never just divide by the number of half-lives.",
    },
  },
  {
    id: "phys-5-2-h", subjectId: "physics-0625", objectiveId: "obj-5-2",
    difficulty: "Hard", marks: 6,
    question: "Radium-226 (⁲²⁶₈₈Ra) undergoes alpha decay. Write the nuclear equation for this decay. Explain why the nucleus emits radiation and describe one use and one hazard of radioactivity.",
    workedSolution: {
      steps: [
        "Alpha decay: nucleus emits ⁴₂He (alpha particle). Mass number decreases by 4, atomic number decreases by 2.",
        "²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He",
        "Product: Radon-222 (Z=86, A=222).",
        "Why: the nucleus has an unstable ratio of neutrons to protons. To become more stable, it emits an alpha particle to reduce the mass number and proton number.",
        "Use: cancer radiotherapy (gamma from cobalt-60 destroys tumours); smoke detectors (alpha from americium-241).",
        "Hazard: ionising radiation damages DNA and living cells; can cause cancer or mutations if absorbed by the body.",
      ],
      markSchemePoints: [
        "Correct product nucleus: ²²²₈₆Rn (1)",
        "Correct nuclear equation balanced (A and Z) (1)",
        "Alpha particle: ⁴₂He shown (1)",
        "Nucleus unstable / emits to become more stable (1)",
        "Named use with explanation (1)",
        "Named hazard with explanation (1)",
      ],
      examTip: "Nuclear equations must balance: top numbers (A) balance, bottom numbers (Z) balance. Alpha decay: A−4, Z−2. Beta decay: A unchanged, Z+1.",
    },
  },
];
