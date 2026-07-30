export const siteConfig = {
  name: "Hamza khan",
  initials: "AR",
  title: "Senior Full Stack Engineer",
  tagline: "I build fast, elegant, and scalable products for the web.",
  description:
    "Senior Full Stack Engineer specializing in Next.js, React, TypeScript, and AI-powered SaaS products. I design and ship production-grade software used by thousands of users.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ayaanraza.dev",
  ogImage: "/og-image.png",
  email: "hamzadev124@gmail.com",
  location: "Lahore, Pakistan (Remote)",
  keywords: [
    "Hamza khan Raza",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Engineer",
    "AI SaaS Developer",
    "Frontend Engineer",
    "Software Engineer Portfolio",
  ],
  links: {
    github: "https://github.com/muhmmadhamza?tab=repositories",
    linkedin: "https://www.linkedin.com/in/muhammad-hamza-02598220b/",
    twitter: "https://www.linkedin.com/in/muhammad-hamza-02598220b/",
    leetcode: "https://www.linkedin.com/in/muhammad-hamza-02598220b/a",
    resume: "/Muhammad_Hamza_Resume.docx",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
};

export type SiteConfig = typeof siteConfig;
