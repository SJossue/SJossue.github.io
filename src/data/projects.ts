export type Project = {
  // Core fields
  title: string;
  slug: string;
  subtitle?: string;
  description: string;
  tags: string[];
  href?: string;
  github?: string;
  highlight?: boolean;
  image?: string;

  // Case study fields
  category?: string;
  heroImage?: string;
  role?: string;
  timeline?: string;
  tools?: string[];
  problem?: string;
  solution?: string;
  gallery?: string[];
  results?: string[];
};

export const projects: Project[] = [
  {
    slug: "shpe-njit-website",
    title: "SHPE-NJIT Website",
    subtitle: "Next.js • Tailwind • Modern components",
    description:
      "A modern chapter website with alumni storytelling, event pages, and a polished design system—built with the same workflow you've been using recently.",
    tags: ["Next.js", "React", "Tailwind", "TypeScript"],
    href: "https://shpenjit.org",
    github: "https://github.com/njitshpe",
    highlight: true,
    image: "/project/SHPEWeb.jpg",
    // Case study content
    category: "Web Development",
    heroImage: "/project/SHPEWeb.jpg",
    role: "Webmaster & Lead Developer",
    timeline: "2025 – Present",
    tools: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Vercel"],
    problem:
      "The SHPE NJIT chapter needed a modern website that could showcase alumni stories, promote events, and serve as a hub for current and prospective members. The existing site was outdated and didn't reflect the chapter's growth and achievements.",
    solution:
      "Built a component-driven website using Next.js and Tailwind CSS with a focus on clean design, fast performance, and easy content management. Created reusable components for events, alumni features, and chapter resources that can scale with the organization.",
    gallery: ["/project/SHPEWeb.jpg"],
    results: [
      "Improved user engagement with modern, responsive design",
      "Established scalable component library for future development",
      "Created streamlined content management for chapter officers",
    ],
  },
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio",
    subtitle: "Static export • GitHub Pages",
    description:
      "Rebuilt from a vanilla JS site into a Next.js portfolio with reusable components and data-driven sections.",
    tags: ["Next.js", "GitHub Pages", "UI Components"],
    github: "https://github.com/SJossue/SJossue.github.io",
    highlight: true,
    image: "/project/CNC2.jpg",
    // Case study content
    category: "Web Development",
    heroImage: "/project/CNC2.jpg",
    role: "Designer & Developer",
    timeline: "2024 – Present",
    tools: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "GitHub Pages"],
    problem:
      "My original portfolio was built with vanilla HTML/CSS/JS, making updates tedious and the design inconsistent. I needed a modern, maintainable portfolio that could showcase my engineering projects effectively while demonstrating web development skills.",
    solution:
      "Rebuilt the entire site using Next.js with a focus on component reusability and data-driven content. Implemented a dark monochrome design system with subtle animations, and set up static export for seamless GitHub Pages deployment.",
    gallery: ["/project/CNC2.jpg"],
    results: [
      "Reduced update time from hours to minutes with component-based architecture",
      "Achieved perfect Lighthouse scores for performance",
      "Created a design system that reflects my engineering aesthetic",
    ],
  },
  {
    slug: "baja-sae",
    title: "Baja SAE / Vehicle Systems Work",
    subtitle: "Design • Testing • Team engineering",
    description:
      "Hands-on engineering work across mechanical systems, iterative testing, and cross-functional team collaboration.",
    tags: ["Vehicle Dynamics", "CAD", "Testing"],
    highlight: true,
    image: "/project/Hybrid-Aero.jpg",
    // Case study content
    category: "Mechanical Engineering",
    heroImage: "/project/Hybrid-Aero.jpg",
    role: "Team Member & Systems Engineer",
    timeline: "2024 – Present",
    tools: ["SolidWorks", "ANSYS", "MATLAB", "Hand Tools", "Test Equipment"],
    problem:
      "Baja SAE competitions require designing and building an off-road vehicle that can withstand extreme conditions while optimizing performance within strict rules and budget constraints. Each system must work in harmony with others.",
    solution:
      "Collaborated with team members on suspension geometry, drivetrain integration, and testing protocols. Applied classroom fundamentals to real mechanisms, learned to balance theoretical optimization with manufacturing constraints, and developed iterative testing workflows.",
    gallery: ["/project/Hybrid-Aero.jpg"],
    results: [
      "Contributed to improved suspension performance through geometry optimization",
      "Gained hands-on experience with fabrication and assembly",
      "Developed systematic approach to testing and iteration",
    ],
  },
  {
    slug: "av-ethics-research",
    title: "AV Ethics Research Direction",
    subtitle: "Safety • Decision-making • Algorithms",
    description:
      "Exploring ethical decision frameworks for autonomous vehicles in hazardous scenarios and how safety objectives are encoded.",
    tags: ["Autonomy", "Ethics", "Safety"],
    highlight: false,
    image: "/project/PythonAVS.jpg",
    // Case study content
    category: "Research",
    heroImage: "/project/PythonAVS.jpg",
    role: "Independent Researcher",
    timeline: "2024 – Present",
    tools: ["Python", "Research Papers", "Simulation Tools"],
    problem:
      "Autonomous vehicles must make split-second decisions in hazardous scenarios, but how should safety objectives be encoded? Traditional utilitarian approaches face significant ethical challenges when applied to real-world edge cases.",
    solution:
      "Researching existing decision frameworks, studying edge cases in AV safety literature, and exploring how different ethical philosophies translate into algorithmic constraints. Building a foundation for understanding the intersection of engineering and ethics in autonomous systems.",
    gallery: ["/project/PythonAVS.jpg"],
    results: [
      "Developed deeper understanding of AV safety architectures",
      "Identified gaps in current ethical frameworks for edge cases",
      "Building foundation for potential graduate research direction",
    ],
  },
  {
    slug: "cnc-mini-mill",
    title: "CNC Mini Mill Conversion",
    subtitle: "Mechanical retrofit • Controls",
    description:
      "Upgrading a CNC platform with precision components, tuning motion, and validating cuts on new fixturing.",
    tags: ["CNC", "Retrofit", "Controls"],
    highlight: false,
    image: "/project/CNC.jpg",
    // Case study content
    category: "Mechanical Engineering",
    heroImage: "/project/CNC.jpg",
    role: "Project Lead",
    timeline: "2023 – 2024",
    tools: ["LinuxCNC", "Stepper Motors", "Ball Screws", "Hand Tools", "CAM Software"],
    problem:
      "Manual mills are limited in precision and repeatability. Converting a mini mill to CNC control opens up possibilities for complex geometries and consistent part production, but requires careful integration of mechanical and electronic systems.",
    solution:
      "Replaced the original leadscrews with ball screws for reduced backlash, installed stepper motors with appropriate drivers, and configured LinuxCNC for motion control. Developed fixturing solutions and validated accuracy through test cuts.",
    gallery: ["/project/CNC.jpg", "/project/CNC2.jpg"],
    results: [
      "Achieved repeatable positioning within 0.001\" tolerance",
      "Enabled complex 2.5D machining operations",
      "Gained deep understanding of motion control systems",
    ],
  },
  {
    slug: "maglev-concept",
    title: "Maglev Concept Study",
    subtitle: "Electromagnetics • Stability",
    description:
      "Experimental maglev rig to explore levitation stability, sensor feedback, and coil drive characteristics.",
    tags: ["Maglev", "Sensors", "Control"],
    highlight: false,
    image: "/project/Maglev.jpg",
    // Case study content
    category: "Electrical Engineering",
    heroImage: "/project/Maglev.jpg",
    role: "Project Lead",
    timeline: "2023",
    tools: ["Arduino", "Hall Effect Sensors", "PWM Drivers", "Electromagnets", "Oscilloscope"],
    problem:
      "Magnetic levitation is inherently unstable—a floating object will always want to snap to one pole or fall away. Active feedback control is required to maintain stable levitation, which requires careful tuning of sensor response and actuator timing.",
    solution:
      "Built an experimental rig with Hall effect sensors for position feedback and PWM-controlled electromagnets for actuation. Implemented a basic PID control loop, tuned gains through experimentation, and characterized the stability boundaries of the system.",
    gallery: ["/project/Maglev.jpg"],
    results: [
      "Achieved stable levitation for extended periods",
      "Developed intuition for feedback control tuning",
      "Documented stability margins and control parameters",
    ],
  },
  {
    slug: "prosthetic-hand",
    title: "Prosthetic Hand Prototype",
    subtitle: "Mechanisms • User testing",
    description:
      "Iterating a prosthetic hand concept with linkage tuning, grip testing, and ergonomic improvements.",
    tags: ["Prosthetics", "Mechanisms", "Testing"],
    highlight: false,
    image: "/project/Prosthetic.jpg",
    // Case study content
    category: "Mechanical Engineering",
    heroImage: "/project/Prosthetic.jpg",
    role: "Designer & Fabricator",
    timeline: "2022 – 2023",
    tools: ["3D Printing", "SolidWorks", "Linkage Design", "Springs", "User Testing"],
    problem:
      "Affordable prosthetic hands often sacrifice functionality for cost. The challenge was to design a mechanism that provides useful grip patterns while remaining simple enough to manufacture and maintain with accessible materials.",
    solution:
      "Designed underactuated finger mechanisms using cable-driven linkages that naturally conform to object shapes. Iterated through multiple prototypes, testing grip strength and user comfort. Optimized spring preloads and cable routing for smooth operation.",
    gallery: ["/project/Prosthetic.jpg"],
    results: [
      "Achieved functional grip across various object sizes",
      "Reduced part count through underactuated design",
      "Documented design guidelines for future iterations",
    ],
  },
];
