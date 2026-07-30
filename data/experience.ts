export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  tags: string[];
  current?: boolean;
}

export const experience: ExperienceItem[] = [
  {
    company: "LoudlyDev Globel Solutions",
    role: "Senior Full Stack Engineer",
    duration: "2025 — Present",
    location: "Remote",
    current: true,
    description:
      "Leading the engineering team for a suite of AI-powered B2B SaaS products serving over 40,000 monthly active users.",
    achievements: [
      "Architected a micro-frontend migration that reduced deployment times by 70%",
      "Led adoption of the App Router and React Server Components, cutting client JS bundle size by 45%",
      "Mentored a team of 5 engineers and established code review and design system standards",
      "Designed the core billing and subscription infrastructure processing $2M+ ARR",
    ],
    tags: ["Next.js", "TypeScript", "AWS","Node","Nest", "PostgreSQL", "AI Integration", "Team Leadership"],
  },
  {
    company: " Datalytics AI ",
    role: "Full Stack Developer",
    duration: "2022 — 2025",
    location: "Hybrid — Lahore, PK",
    description:
      "Built and maintained client-facing web applications for fintech and e-commerce clients across North America and Europe.",
    achievements: [
      "Shipped 12+ production applications from scratch using React and Node.js",
      "Reduced average page load times by 55% through code splitting and image optimization",
      "Implemented automated E2E testing pipelines that cut regression bugs by 80%",
      "Collaborated directly with clients to translate business requirements into technical specs",
    ],
    tags: ["React", "Node.js", "MongoDB", "Docker","Express", "AWS", "CI/CD", "Agile","elasticsearch"],
  },
  {
    company: "LEADconcept",
    role: "Frontend Developer",
    duration: "2019 — 2021",
    location: "Remote",
    description:
      "Delivered custom websites and web applications for startups and small businesses across various industries.",
    achievements: [
      "Completed 30+ freelance projects with a 5-star client satisfaction rating",
      "Specialized in pixel-perfect, high-performance marketing sites and landing pages",
      "Built a reusable component library that accelerated project delivery by 3x",
    ],
    tags: ["JavaScript", "React", "WordPress", "Figma"],
  },
];
