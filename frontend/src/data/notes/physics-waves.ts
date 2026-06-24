import type { NoteChapter } from "./types";

export const physicsWavesNotes: NoteChapter = {
  subject: "Physics",
  title: "Waves",
  pages: [
    {
      section: "3.1 General properties of waves",
      blocks: [
        {
          kind: "intro",
          text: "Waves transfer energy without transferring matter; particles oscillate about a fixed point. Understanding wave properties is essential for all of Unit 3.",
        },
        {
          kind: "video",
          youtubeId: "r1WV68nraoc",
          title: "Waves — IGCSE Physics (Cognito)",
          caption: "Transverse vs longitudinal waves, wave equation, reflection, refraction and diffraction",
        },
        {
          kind: "keyterms",
          terms: [
            { label: "Amplitude", value: "the distance from the equilibrium position to the maximum displacement" },
            { label: "Wavelength (λ)", value: "the distance between a point on one wave and the same point on the next wave" },
            { label: "Frequency (f)", value: "the number of waves that pass a single point per second" },
            { label: "Speed (v)", value: "the distance travelled by a wave each second" },
          ],
        },
        {
          kind: "definition",
          term: "Wave motion",
          definition: "refers to the transfer of energy from one point to another without the transfer of matter, typically involving oscillations or vibrations.",
        },
        {
          kind: "highlight",
          text: "Speed is related to frequency and wavelength by:  speed = frequency × wavelength   →   v = fλ",
          color: "pink",
        },
        {
          kind: "bullets",
          items: [
            {
              text: "Transverse waves",
              bold: true,
              sub: [
                "Has peaks and troughs",
                "Vibrations are at right angles to the direction of travel",
                "An example is light",
              ],
            },
            {
              text: "Longitudinal waves",
              bold: true,
              sub: [
                "Consists of compressions (particles pushed together) and rarefactions (particles moved apart)",
                "Vibrations are in the same direction as the direction of travel",
                "An example is sound",
              ],
            },
          ],
        },
        {
          kind: "image",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Sine_wavelength.svg/800px-Sine_wavelength.svg.png",
          caption: "Transverse wave showing amplitude, wavelength, crest and trough",
          side: "right",
        },
        {
          kind: "definition",
          term: "A wavefront",
          definition: "is a surface containing points affected in the same way by a wave at a given time such as crests or troughs.",
        },
      ],
    },
    {
      section: "3.2 Reflection, Refraction & Diffraction",
      blocks: [
        {
          kind: "intro",
          text: "Reflection:",
        },
        {
          kind: "bullets",
          items: [
            { text: "Waves reflect off smooth, plane surfaces rather than getting absorbed" },
            { text: "Angle of incidence = angle of reflection" },
            { text: "Rough surfaces scatter the light in all directions, so they appear matte and unreflective" },
            { text: "Frequency, wavelength, and speed are all unchanged" },
          ],
        },
        {
          kind: "image",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Reflection_angles.svg/800px-Reflection_angles.svg.png",
          caption: "Angle of incidence = Angle of reflection. Both measured from the normal (perpendicular to surface).",
          side: "right",
        },
        {
          kind: "intro",
          text: "Refraction:",
        },
        {
          kind: "bullets",
          items: [
            { text: "The speed of a wave changes when it enters a new medium", bold: true },
            { text: "If the wave enters a more optically dense medium, its speed decreases and it bends towards the normal" },
            { text: "If the wave enters a less optically dense medium, its speed increases and it bends away from the normal" },
            { text: "In all cases, the frequency stays the same but the wavelength changes" },
          ],
        },
        {
          kind: "image",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Snells_law.svg/800px-Snells_law.svg.png",
          caption: "Refraction: light bends towards the normal entering a denser medium (n₁sinθ₁ = n₂sinθ₂)",
          side: "right",
        },
        {
          kind: "intro",
          text: "Diffraction:",
        },
        {
          kind: "bullets",
          items: [
            { text: "Waves spread out when they go around the sides of an obstacle or through a gap" },
            { text: "The narrower the gap the greater the wavelength, the more the diffraction", bold: true },
            { text: "Frequency, wavelength, and speed are all unchanged" },
          ],
        },
        {
          kind: "image",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Diffraction1.png/640px-Diffraction1.png",
          caption: "Diffraction through a gap — maximum diffraction when gap width ≈ wavelength",
          side: "right",
        },
      ],
    },
    {
      section: "3.3 The Electromagnetic Spectrum",
      blocks: [
        {
          kind: "intro",
          text: "All electromagnetic (EM) waves travel at the speed of light (3 × 10⁸ m/s) in a vacuum and are transverse waves.",
        },
        {
          kind: "video",
          youtubeId: "7v2gs8rdQzU",
          title: "Electromagnetic Spectrum — IGCSE Physics (Cognito)",
          caption: "All 7 types of EM waves, their properties, uses and dangers",
        },
        {
          kind: "table",
          headers: ["Type", "Wavelength", "Uses", "Hazards"],
          rows: [
            ["Radio waves", "> 0.1 m", "Broadcasting, telecommunications", "None significant"],
            ["Microwaves", "1 mm – 0.1 m", "Cooking, satellite comms", "Internal heating of tissue"],
            ["Infrared", "700 nm – 1 mm", "Thermal imaging, TV remotes, heating", "Skin burns"],
            ["Visible light", "400 – 700 nm", "Sight, photography, fibre optics", "None at normal levels"],
            ["Ultraviolet", "10 – 400 nm", "Sterilisation, fluorescence", "Skin cancer, eye damage"],
            ["X-rays", "0.01 – 10 nm", "Medical imaging, security scanning", "Cell mutation, cancer"],
            ["Gamma rays", "< 0.01 nm", "Cancer treatment, sterilising equipment", "Cell mutation, cancer"],
          ],
        },
        {
          kind: "highlight",
          text: "As you go from radio → gamma: frequency increases, wavelength decreases, energy increases. Speed stays the same (3 × 10⁸ m/s in vacuum).",
          color: "blue",
        },
        {
          kind: "tip",
          text: "Remember: all EM waves are transverse, travel at the same speed in a vacuum, and can travel through a vacuum. Sound is NOT an EM wave — it is longitudinal and cannot travel through a vacuum.",
        },
      ],
    },
    {
      section: "3.4 Sound Waves",
      blocks: [
        {
          kind: "intro",
          text: "Sound is a longitudinal wave produced by vibrating objects. It requires a medium to travel through and cannot travel through a vacuum.",
        },
        {
          kind: "keyterms",
          terms: [
            { label: "Pitch", value: "determined by frequency — higher frequency = higher pitch" },
            { label: "Loudness", value: "determined by amplitude — larger amplitude = louder sound" },
            { label: "Speed in air", value: "approximately 340 m/s at room temperature" },
            { label: "Ultrasound", value: "sound with frequency above 20,000 Hz (above human hearing range)" },
          ],
        },
        {
          kind: "comparison",
          left: {
            label: "Sound CAN travel through",
            items: ["Solids (fastest)", "Liquids", "Gases (slowest)"],
          },
          right: {
            label: "Sound CANNOT travel through",
            items: ["Vacuum", "Space", "Any region with no particles"],
          },
        },
        {
          kind: "bullets",
          items: [
            {
              text: "Uses of ultrasound:",
              sub: [
                "Medical scanning (foetal imaging) — safe, non-ionising",
                "Sonar — measuring depth of ocean, detecting submarines",
                "Industrial cleaning and quality control",
              ],
            },
          ],
        },
        {
          kind: "warning",
          text: "Sound travels FASTER in solids than in liquids, and faster in liquids than in gases. This is because particles are closer together in solids, so vibrations are transmitted more quickly.",
        },
      ],
    },
    {
      section: "3.5 Seismic Waves",
      blocks: [
        {
          kind: "intro",
          text: "Earthquakes produce seismic waves that travel through the Earth. Studying these waves tells us about the Earth's internal structure.",
        },
        {
          kind: "comparison",
          left: {
            label: "P-waves (Primary)",
            items: [
              "Longitudinal waves",
              "Travel through solids AND liquids",
              "Faster than S-waves",
              "Arrive first at seismograph",
            ],
          },
          right: {
            label: "S-waves (Secondary)",
            items: [
              "Transverse waves",
              "Travel through solids ONLY",
              "Cannot travel through liquid outer core",
              "Arrive second at seismograph",
            ],
          },
        },
        {
          kind: "highlight",
          text: "The fact that S-waves cannot pass through the outer core tells us the outer core is LIQUID. P-waves slow down and refract as they pass through the core, creating a shadow zone.",
          color: "green",
        },
        {
          kind: "image",
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Earthquake_wave_shadow_zone.svg/800px-Earthquake_wave_shadow_zone.svg.png",
          caption: "Seismic wave paths through the Earth — S-wave shadow zone reveals the liquid outer core",
          side: "full",
        },
      ],
    },
  ],
};
