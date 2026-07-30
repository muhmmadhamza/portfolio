"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Briefcase, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";

const skills = [
  "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL",
  "Tailwind CSS", "GraphQL", "AWS", "Docker", "System Design",
  "AI Integration", "Framer Motion",
];

const facts = [
  { icon: Briefcase, label: "5+ years", desc: "professional experience" },
  { icon: MapPin, label: "Lahore, PK", desc: "based, remote-first" },
  { icon: GraduationCap, label: "BSCS", desc: "Computer Science" },
  { icon: Sparkles, label: "40+", desc: "products shipped" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Engineering thoughtful software, one product at a time."
          description="A quick look at my journey, what I value as an engineer, and the skills I bring to every project."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                My journey into software started with a curiosity for how
                things worked under the hood — reverse-engineering websites
                and building small automation scripts long before I called
                myself a developer. That curiosity turned into a career
                building products used by real people, at real companies,
                under real constraints.
              </p>
              <p>
                Over the past five years, I&apos;ve worked across the stack —
                from pixel-perfect frontend interfaces to distributed
                backend systems — always with a bias toward simplicity,
                performance, and maintainability. I care deeply about the
                details most users never consciously notice: the 200ms
                that makes an interaction feel instant, the empty state
                that guides instead of confuses, the error message that
                actually helps.
              </p>
              <p>
                Today, I specialize in building full-stack products with
                Next.js and TypeScript, often powered by AI — from
                LLM-driven SaaS tools to internal automation platforms. I
                enjoy working closely with founders and product teams to
                turn ambiguous ideas into shipped, reliable software.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="mb-4 text-sm font-semibold text-foreground">
                Core Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="px-3 py-1.5">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-2 gap-4">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="glass rounded-2xl p-5 transition-transform hover:-translate-y-1"
                >
                  <fact.icon className="mb-3 size-5 text-accent" />
                  <p className="text-lg font-semibold">{fact.label}</p>
                  <p className="text-xs text-muted-foreground">{fact.desc}</p>
                </div>
              ))}
            </div>

            <div className="glass mt-4 rounded-2xl p-6">
              <h3 className="text-sm font-semibold">Philosophy</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                &ldquo;Ship fast, but never ship sloppy. Great software feels
                invisible — it just works, and it makes people&apos;s lives
                a little easier.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
