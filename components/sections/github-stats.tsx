"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GitFork, Star, GitCommitHorizontal, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/data/site-config";

const highlights = [
  { icon: GitCommitHorizontal, value: "2,400+", label: "Contributions this year" },
  { icon: Star, value: "1,150+", label: "Stars earned across repos" },
  { icon: GitFork, value: "180+", label: "Forks of open source work" },
  { icon: Users, value: "60+", label: "Developers followed / following" },
];

export function GithubStats() {
  const githubUsername = siteConfig.links.github.split("/").pop();

  return (
    <section id="github" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="GitHub Activity"
          title="Open source & consistent shipping."
          description="A snapshot of my public contributions — I believe in building in the open whenever possible."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {highlights.map((h) => (
            <div key={h.label} className="rounded-2xl border border-border bg-card p-5 text-center">
              <h.icon className="mx-auto mb-2 size-5 text-accent" />
              <p className="text-xl font-semibold sm:text-2xl">{h.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{h.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 gap-4 lg:grid-cols-2"
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-card p-2">
            <Image
              src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&hide_border=true&bg_color=00000000&title_color=8b5cf6&text_color=888888&icon_color=8b5cf6`}
              alt="GitHub stats overview"
              width={495}
              height={195}
              className="h-auto w-full"
              unoptimized
            />
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-card p-2">
            <Image
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&hide_border=true&bg_color=00000000&title_color=8b5cf6&text_color=888888`}
              alt="Most used languages"
              width={495}
              height={195}
              className="h-auto w-full"
              unoptimized
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
