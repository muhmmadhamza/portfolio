export interface Service {
  title: string;
  description: string;
  icon: "Layers" | "Code2" | "Sparkles" | "Bot" | "Plug";
  features: string[];
}

export const services: Service[] = [
  {
    title: "Full Stack Development",
    description:
      "End-to-end web application development — from database schema design to polished, responsive UI.",
    icon: "Layers",
    features: [
      "Scalable architecture design",
      "REST / GraphQL / tRPC APIs",
      "Database design & optimization",
      "Authentication & authorization",
    ],
  },
  {
    title: "Next.js Development",
    description:
      "Production-grade Next.js applications with App Router, Server Components, and best-in-class performance.",
    icon: "Code2",
    features: [
      "App Router & RSC architecture",
      "SEO & Core Web Vitals optimization",
      "ISR / SSR / SSG strategy",
      "Edge & serverless deployment",
    ],
  },
  {
    title: "React Development",
    description:
      "Fast, accessible, and maintainable React interfaces with clean component architecture and state management.",
    icon: "Sparkles",
    features: [
      "Reusable component libraries",
      "Complex state management",
      "Animation & micro-interactions",
      "Accessibility (WCAG) compliance",
    ],
  },
  {
    title: "AI SaaS Development",
    description:
      "AI-powered products from concept to production — LLM integration, RAG pipelines, and usage-based billing.",
    icon: "Bot",
    features: [
      "LLM & embeddings integration",
      "RAG & vector search pipelines",
      "Prompt engineering & evals",
      "Usage metering & billing",
    ],
  },
  {
    title: "API Integration",
    description:
      "Seamless integration with third-party services — payments, auth providers, CRMs, and internal tools.",
    icon: "Plug",
    features: [
      "Stripe / payment gateways",
      "OAuth & SSO providers",
      "Webhooks & event-driven systems",
      "Legacy system integration",
    ],
  },
];

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "VP of Engineering",
    company: "LoudlyDev Globel Solutions",
    avatar: "https://i.pravatar.cc/150?img=47",
    quote:
      "One of the strongest full-stack engineers I've worked with. Ships production-ready code fast without cutting corners on quality or architecture.",
  },
  {
    name: "Marcus Alden",
    role: "Founder",
    company: "Ledgerly",
    avatar: "https://i.pravatar.cc/150?img=12",
    quote:
      "Took our idea from a rough sketch to a polished product in under three months. The attention to detail on performance and UX was outstanding.",
  },
  {
    name: "Priya Nandan",
    role: "Product Manager",
    company: " Datalytics AI ",
    avatar: "https://i.pravatar.cc/150?img=32",
    quote:
      "Consistently delivers ahead of schedule with clean, well-documented code. A rare combination of strong engineering and genuine product sense.",
  },
  {
    name: "James Whitfield",
    role: "CTO",
    company: "DevRadar",
    avatar: "https://i.pravatar.cc/150?img=53",
    quote:
      "Deep understanding of both frontend performance and backend scalability. Our infrastructure is significantly more robust after the engagement.",
  },
];
