export interface TechItem {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "DevOps & Tools" | "AI & Data";
  proficiency: number; // 0-100
}

export const techStack: TechItem[] = [
  { name: "React", category: "Frontend", proficiency: 97 },
  { name: "Next.js", category: "Frontend", proficiency: 96 },
  { name: "TypeScript", category: "Frontend", proficiency: 95 },
  { name: "Tailwind CSS", category: "Frontend", proficiency: 96 },
  { name: "Framer Motion", category: "Frontend", proficiency: 88 },
  { name: "Redux / Zustand", category: "Frontend", proficiency: 90 },

  { name: "Node.js", category: "Backend", proficiency: 93 },
  { name: "Express", category: "Backend", proficiency: 90 },
  { name: "tRPC / GraphQL", category: "Backend", proficiency: 85 },
  { name: "Python / FastAPI", category: "Backend", proficiency: 80 },

  { name: "PostgreSQL", category: "Database", proficiency: 90 },
  { name: "MongoDB", category: "Database", proficiency: 85 },
  { name: "Redis", category: "Database", proficiency: 82 },
  { name: "Prisma / Drizzle", category: "Database", proficiency: 88 },

  { name: "Docker", category: "DevOps & Tools", proficiency: 84 },
  { name: "AWS", category: "DevOps & Tools", proficiency: 78 },
  { name: "Vercel", category: "DevOps & Tools", proficiency: 95 },
  { name: "CI/CD (GitHub Actions)", category: "DevOps & Tools", proficiency: 87 },

  { name: "OpenAI / LLM APIs", category: "AI & Data", proficiency: 88 },
  { name: "Vector Databases", category: "AI & Data", proficiency: 80 },
  { name: "LangChain", category: "AI & Data", proficiency: 78 },
];

export const categories = [
  "Frontend",
  "Backend",
  "Database",
  "DevOps & Tools",
  "AI & Data",
] as const;
