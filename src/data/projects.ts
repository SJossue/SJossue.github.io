export type Project = {
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  href?: string;       // live demo / repo
  github?: string;     // repo link
  highlight?: boolean; // show on homepage
  image?: string;      // public path to display on cards
};

export const projects: Project[] = [
  {
    title: "SHPE-NJIT Website",
    subtitle: "Next.js • Tailwind • Modern components",
    description:
      "A modern chapter website with alumni storytelling, event pages, and a polished design system—built with the same workflow you’ve been using recently.",
    tags: ["Next.js", "React", "Tailwind", "TypeScript"],
    href: "https://njitshpe.vercel.app", // change if needed
    github: "https://github.com/njitshpe", // change if needed
    highlight: true,
    image: "/project/SHPEWeb.jpg",
  },
  {
    title: "Personal Portfolio (this site)",
    subtitle: "Static export • GitHub Pages",
    description:
      "Rebuilt from a vanilla JS site into a Next.js portfolio with reusable components and data-driven sections.",
    tags: ["Next.js", "GitHub Pages", "UI Components"],
    github: "https://github.com/SJossue/SJossue.github.io",
    highlight: true,
    image: "/project/CNC2.jpg",
  },
  {
    title: "Baja SAE / Vehicle Systems Work",
    subtitle: "Design • Testing • Team engineering",
    description:
      "Hands-on engineering work across mechanical systems, iterative testing, and cross-functional team collaboration.",
    tags: ["Vehicle Dynamics", "CAD", "Testing"],
    highlight: true,
    image: "/project/Hybrid-Aero.jpg",
  },
  {
    title: "AV Ethics Research Direction",
    subtitle: "Safety • Decision-making • Algorithms",
    description:
      "Exploring ethical decision frameworks for autonomous vehicles in hazardous scenarios and how safety objectives are encoded.",
    tags: ["Autonomy", "Ethics", "Safety"],
    highlight: false,
    image: "/project/PythonAVS.jpg",
  },
  {
    title: "CNC Mini Mill Conversion",
    subtitle: "Mechanical retrofit • Controls",
    description:
      "Upgrading a CNC platform with precision components, tuning motion, and validating cuts on new fixturing.",
    tags: ["CNC", "Retrofit", "Controls"],
    highlight: false,
    image: "/project/CNC.jpg",
  },
  {
    title: "Maglev Concept Study",
    subtitle: "Electromagnetics • Stability",
    description:
      "Experimental maglev rig to explore levitation stability, sensor feedback, and coil drive characteristics.",
    tags: ["Maglev", "Sensors", "Control"],
    highlight: false,
    image: "/project/Maglev.jpg",
  },
  {
    title: "Prosthetic Hand Prototype",
    subtitle: "Mechanisms • User testing",
    description:
      "Iterating a prosthetic hand concept with linkage tuning, grip testing, and ergonomic improvements.",
    tags: ["Prosthetics", "Mechanisms", "Testing"],
    highlight: false,
    image: "/project/Prosthetic.jpg",
  },
];
