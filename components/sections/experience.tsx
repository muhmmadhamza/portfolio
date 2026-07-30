"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've made an impact."
          description="A timeline of the roles that shaped my engineering perspective."
        />

        <div className="relative">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border sm:left-[19px]" />

          <div className="space-y-10">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-10 sm:pl-14"
              >
                <span
                  className={`absolute left-0 top-1.5 flex size-[31px] items-center justify-center rounded-full border sm:size-10 ${
                    exp.current
                      ? "border-accent bg-accent/10"
                      : "border-border bg-card"
                  }`}
                >
                  <span
                    className={`size-2.5 rounded-full ${
                      exp.current ? "bg-accent" : "bg-muted-foreground"
                    }`}
                  />
                </span>

                <div className="glass rounded-2xl p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold">{exp.role}</h3>
                    {exp.current && (
                      <Badge variant="accent" className="text-[11px]">
                        Current
                      </Badge>
                    )}
                  </div>
                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{exp.company}</span>
                    <span>•</span>
                    <span>{exp.duration}</span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="size-3.5" /> {exp.location}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {exp.achievements.map((a) => (
                      <li key={a} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 size-1 shrink-0 rounded-full bg-accent" />
                        {a}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-[11px]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
