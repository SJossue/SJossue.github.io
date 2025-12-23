export type ExperienceItem = {
  title: string;
  org: string;
  date: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    title: "Projects & Construction Engineering Intern",
    org: "PSEG / PSE&G",
    date: "Summer 2025 (and pursuing Summer 2026 return)",
    bullets: [
      "Supported field-facing engineering work and learned utility infrastructure workflows.",
      "Collaborated with engineers/crews; documented observations and translated needs into action items.",
    ],
  },
  {
    title: "Webmaster",
    org: "SHPE NJIT",
    date: "2025 – Present",
    bullets: [
      "Leading a web rebuild using Next.js + Tailwind with a focus on clarity, polish, and alumni pride.",
      "Building reusable components and a content structure that scales with the chapter.",
    ],
  },
  {
    title: "Engineering Clubs",
    org: "NJIT (Baja SAE / Formula SAE involvement)",
    date: "2024 – Present",
    bullets: [
      "Hands-on design/test iteration with a team environment and real constraints.",
      "Applying classroom fundamentals to real mechanisms and systems.",
    ],
  },
];
