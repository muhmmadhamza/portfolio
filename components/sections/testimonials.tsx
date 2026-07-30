"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/data/services";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What people I've worked with say."
          description="Feedback from founders, engineering leads, and product managers I've partnered with."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass relative flex flex-col rounded-3xl p-7"
            >
              <Quote className="mb-4 size-7 text-accent/40" />
              <p className="flex-1 text-sm leading-relaxed text-foreground/90 sm:text-base">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div className="relative size-11 shrink-0 overflow-hidden rounded-full">
                  <Image src={t.avatar} alt={t.name} fill sizes="44px" className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
