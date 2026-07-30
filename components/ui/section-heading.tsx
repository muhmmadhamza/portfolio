"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        "mb-14 flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3.5 py-1 text-xs font-medium text-muted-foreground">
        <span className="size-1.5 rounded-full bg-accent" />
        {eyebrow}
      </span>
      <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-balance text-base text-muted-foreground sm:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
