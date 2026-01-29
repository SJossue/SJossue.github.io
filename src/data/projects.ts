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

  // New card fields
  organization?: string;
  year?: string;
  tagline?: string;

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
    slug: "shpe-app",
    title: "SHPE App",
    subtitle: "React Native • Expo • Firebase",
    description:
      "A mobile application for SHPE NJIT chapter members to track events, manage points, and stay connected with the organization.",
    tags: ["React Native", "Expo", "Firebase", "TypeScript"],
    href: "https://apps.apple.com/us/app/shpe-njit/id1234567890",
    github: "https://github.com/shpe-njit/shpe-app",
    highlight: true,
    image: "/projects/shpe-app/app-store.jpeg",
    organization: "SHPE NJIT",
    year: "'26",
    tagline: "Connecting 200+ members through mobile engagement",
    category: "Mobile Development",
    heroImage: "/projects/shpe-app/app-store.jpeg",
    role: "Principal Engineer & Lead Developer",
    timeline: "2025 – Present",
    tools: ["React Native", "Expo", "Firebase", "TypeScript", "Blender"],
    problem:
      "SHPE NJIT members struggled to track their involvement, event attendance, and points across multiple platforms. Communication was fragmented and engagement tracking was manual.",
    solution:
      "Built a comprehensive mobile app with real-time event tracking, points leaderboard, push notifications, and member profiles. Integrated with Firebase for authentication and data sync.",
    gallery: [
      "/projects/shpe-app/static-1.jpeg",
      "/projects/shpe-app/static-2.jpeg",
      "/projects/shpe-app/static-3.jpeg",
      "/projects/shpe-app/blender-1.jpeg",
    ],
    results: [
      "200+ active members using the app",
      "Streamlined event check-in process",
      "Real-time points tracking and leaderboards",
    ],
  },
  {
    slug: "stress-analysis",
    title: "Stress Analysis",
    subtitle: "ANSYS • FEA • Structural Testing",
    description:
      "Finite element analysis and structural testing of mechanical components to validate design decisions and ensure safety factors.",
    tags: ["ANSYS", "FEA", "SolidWorks", "Testing"],
    highlight: true,
    image: "/projects/stress-analysis/baja-web.jpeg",
    organization: "BAJA SAE NJIT",
    year: "'25",
    tagline: "Validating designs through computational analysis",
    category: "Mechanical Engineering",
    heroImage: "/projects/stress-analysis/baja-web.jpeg",
    role: "Analysis Engineer",
    timeline: "2025",
    tools: ["ANSYS", "SolidWorks", "MATLAB", "Excel"],
    problem:
      "Mechanical designs require validation before manufacturing to ensure they meet safety factors and performance requirements. Physical testing alone is expensive and time-consuming.",
    solution:
      "Applied finite element analysis to validate structural integrity, identify stress concentrations, and optimize material distribution. Correlated simulation results with physical testing.",
    gallery: [
      "/projects/stress-analysis/static-1.jpeg",
      "/projects/stress-analysis/static-2.jpeg",
      "/projects/stress-analysis/static-3.jpeg",
      "/projects/stress-analysis/static-4.jpeg",
    ],
    results: [
      "Identified critical stress concentrations before manufacturing",
      "Achieved target safety factors through design iteration",
      "Reduced prototype iterations through simulation",
    ],
  },
  {
    slug: "data-cool",
    title: "DataCool",
    subtitle: "Python • ML • Streamlit",
    description:
      "AI-powered data center optimization system that predicts server hotspots and optimizes workload distribution. 1st Place at Claude NJIT Hackathon.",
    tags: ["Python", "scikit-learn", "Streamlit", "SHAP"],
    github: "https://github.com/GurmeherSingh/DataCool",
    highlight: true,
    image: "/projects/data-cool/static-3.jpeg",
    organization: "Hackathon",
    year: "'25",
    tagline: "1st Place — AI-powered thermal optimization",
    category: "Machine Learning",
    heroImage: "/projects/data-cool/static-3.jpeg",
    role: "ML Engineer",
    timeline: "2025",
    tools: ["Python", "scikit-learn", "Streamlit", "SHAP", "Plotly"],
    problem:
      "Data centers face thermal management challenges. Server hotspots reduce efficiency, increase cooling costs, and risk hardware failure. Traditional monitoring is reactive, not predictive.",
    solution:
      "Built a machine learning system using Histogram Gradient Boosting to predict hotspots with 94% accuracy. Implemented constraint-based optimization for workload redistribution with thermal physics modeling.",
    gallery: [
      "/projects/data-cool/static-1.jpeg",
      "/projects/data-cool/static-2.jpeg",
      "/projects/data-cool/static-3.jpeg",
    ],
    results: [
      "94% prediction accuracy on hotspot detection",
      "75% reduction in critical overheating incidents",
      "Interactive 3D visualization dashboard",
    ],
  },
  {
    slug: "av-ethics",
    title: "AV Ethics Research",
    subtitle: "Research • Python • Simulation",
    description:
      "Exploring ethical decision frameworks for autonomous vehicles in hazardous scenarios and how safety objectives are encoded.",
    tags: ["Research", "Python", "Ethics", "Autonomy"],
    highlight: false,
    image: "/projects/av-ethics/PythonAVS.jpg",
    organization: "Research",
    year: "'25",
    tagline: "Exploring ethics in autonomous decision-making",
    category: "Research",
    heroImage: "/projects/av-ethics/PythonAVS.jpg",
    role: "Independent Researcher",
    timeline: "2025 – Present",
    tools: ["Python", "Research Papers", "Simulation Tools"],
    problem:
      "Autonomous vehicles must make split-second decisions in hazardous scenarios, but how should safety objectives be encoded? Traditional utilitarian approaches face significant ethical challenges.",
    solution:
      "Researching existing decision frameworks, studying edge cases in AV safety literature, and exploring how different ethical philosophies translate into algorithmic constraints.",
    gallery: ["/projects/av-ethics/PythonAVS.jpg"],
    results: [
      "Developed deeper understanding of AV safety architectures",
      "Identified gaps in current ethical frameworks for edge cases",
      "Building foundation for potential graduate research direction",
    ],
  },
  {
    slug: "shpe-website",
    title: "SHPE Website",
    subtitle: "Next.js • Tailwind • Vercel",
    description:
      "A modern chapter website with alumni storytelling, event pages, and a polished design system for SHPE NJIT.",
    tags: ["Next.js", "React", "Tailwind", "TypeScript"],
    href: "https://shpenjit.org",
    github: "https://github.com/shpe-njit/shpe-website",
    highlight: true,
    image: "/projects/shpe-web/static-1.jpeg",
    organization: "SHPE NJIT",
    year: "'25",
    tagline: "Modernizing the chapter's digital presence",
    category: "Web Development",
    heroImage: "/projects/shpe-web/static-1.jpeg",
    role: "Webmaster & Lead Developer",
    timeline: "2025 – Present",
    tools: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Vercel"],
    problem:
      "The SHPE NJIT chapter needed a modern website that could showcase alumni stories, promote events, and serve as a hub for current and prospective members.",
    solution:
      "Built a component-driven website using Next.js and Tailwind CSS with a focus on clean design, fast performance, and easy content management.",
    gallery: [
      "/projects/shpe-web/static-1.jpeg",
      "/projects/shpe-web/static-2.jpeg",
      "/projects/shpe-web/static-3.jpeg",
    ],
    results: [
      "Improved user engagement with modern, responsive design",
      "Established scalable component library for future development",
      "Created streamlined content management for chapter officers",
    ],
  },
  {
    slug: "maglev",
    title: "Maglev Concept",
    subtitle: "Electromagnetics • Control Systems",
    description:
      "Experimental maglev rig to explore levitation stability, sensor feedback, and coil drive characteristics.",
    tags: ["Maglev", "Arduino", "PID Control", "Electronics"],
    highlight: false,
    image: "/projects/maglev/static-1.jpeg",
    organization: "NJIT",
    year: "'24",
    tagline: "Active feedback control for magnetic levitation",
    category: "Electrical Engineering",
    heroImage: "/projects/maglev/static-1.jpeg",
    role: "Project Lead",
    timeline: "2024",
    tools: ["Arduino", "Hall Effect Sensors", "PWM Drivers", "Electromagnets"],
    problem:
      "Magnetic levitation is inherently unstable—a floating object will always want to snap to one pole or fall away. Active feedback control is required to maintain stable levitation.",
    solution:
      "Built an experimental rig with Hall effect sensors for position feedback and PWM-controlled electromagnets. Implemented PID control loop and tuned gains through experimentation.",
    gallery: ["/projects/maglev/static-1.jpeg"],
    results: [
      "Achieved stable levitation for extended periods",
      "Developed intuition for feedback control tuning",
      "Documented stability margins and control parameters",
    ],
  },
  {
    slug: "hybrid-air",
    title: "Hybrid Aircraft",
    subtitle: "Aerospace • Design Study",
    description:
      "Design study for hybrid-electric aircraft propulsion systems, analyzing efficiency gains and integration challenges.",
    tags: ["Aerospace", "Propulsion", "Analysis", "Design"],
    highlight: false,
    image: "/projects/hybrid-air/static-1.jpeg",
    organization: "NJIT",
    year: "'24",
    tagline: "Exploring sustainable aviation propulsion",
    category: "Aerospace Engineering",
    heroImage: "/projects/hybrid-air/static-1.jpeg",
    role: "Research & Design",
    timeline: "2024",
    tools: ["MATLAB", "Research Papers", "CAD", "Excel"],
    problem:
      "Aviation faces pressure to reduce emissions. Hybrid-electric propulsion offers potential efficiency gains but introduces complex integration challenges for weight, cooling, and power management.",
    solution:
      "Conducted a design study analyzing hybrid-electric architectures, comparing series vs parallel configurations, and evaluating tradeoffs between battery weight and fuel savings.",
    gallery: [
      "/projects/hybrid-air/static-1.jpeg",
      "/projects/hybrid-air/static-2.jpeg",
    ],
    results: [
      "Quantified efficiency gains for different mission profiles",
      "Identified key integration challenges for thermal management",
      "Documented design guidelines for future hybrid concepts",
    ],
  },
];
