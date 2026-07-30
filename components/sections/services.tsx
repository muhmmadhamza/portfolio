"use client";

import { motion } from "framer-motion";
import { Layers, Code2, Sparkles, Bot, Plug, Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/data/services";

const iconMap = { Layers, Code2, Sparkles, Bot, Plug };

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="How I can help your team."
          description="Focused engineering services for founders, product teams, and engineering leaders."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-colors hover:border-accent/40"
              >
                <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-transform group-hover:scale-110">
                  <Icon className="size-6" />
                </div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="size-3.5 shrink-0 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
