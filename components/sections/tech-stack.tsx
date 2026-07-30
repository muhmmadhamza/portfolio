"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { techStack, categories } from "@/data/tech-stack";

export function TechStack() {
  return (
    <section id="stack" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools I use to bring products to life."
          description="A curated set of technologies I reach for daily, organized by where they fit in the stack."
        />

        <Tabs defaultValue="Frontend" className="flex flex-col items-center">
          <TabsList className="flex-wrap h-auto gap-1 sm:h-11">
            {categories.map((cat) => (
              <TabsTrigger key={cat} value={cat}>
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => (
            <TabsContent key={cat} value={cat} className="w-full">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {techStack
                  .filter((t) => t.category === cat)
                  .map((tech, i) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      whileHover={{ y: -4 }}
                      className="group rounded-2xl border border-border bg-card p-5 transition-colors hover:border-accent/40"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{tech.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {tech.proficiency}%
                        </span>
                      </div>
                      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.05 }}
                          className="h-full rounded-full bg-gradient-to-r from-accent to-purple-400"
                        />
                      </div>
                    </motion.div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
