"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site-config";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 text-center sm:px-6 lg:px-8"
      >
        <motion.div
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-medium text-muted-foreground"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-green-500" />
          </span>
          Available for new opportunities
        </motion.div>

        <motion.h1
          variants={item}
          className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl md:text-7xl"
        >
          Hi, I&apos;m {siteConfig.name.split(" ")[0]} —{" "}
          <span className="gradient-text">{siteConfig.title}</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg md:text-xl"
        >
          {siteConfig.description}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button asChild size="lg" variant="accent">
            <a href="#projects">
              View my work <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#contact">Get in touch</a>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <a href={siteConfig.links.resume} target="_blank" rel="noopener noreferrer">
              <Download className="size-4" /> Resume
            </a>
          </Button>
        </motion.div>

        <motion.div variants={item} className="mt-12 flex items-center gap-4">
          {[
            { icon: Github, href: siteConfig.links.github, label: "GitHub" },
            { icon: Linkedin, href: siteConfig.links.linkedin, label: "LinkedIn" },
            { icon: Twitter, href: siteConfig.links.twitter, label: "Twitter" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              <s.icon className="size-4" />
            </a>
          ))}
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 grid w-full max-w-2xl grid-cols-3 gap-4 border-t border-border pt-10"
        >
          {[
            { value: "5+", label: "Years Experience" },
            { value: "40+", label: "Projects Shipped" },
            { value: "98%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {stat.value}
              </span>
              <span className="mt-1 text-xs text-muted-foreground sm:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
