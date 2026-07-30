"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/sections/project-card";
import { ProjectDialog } from "@/components/sections/project-dialog";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Products I've designed, built, and shipped."
          description="A selection of projects that showcase full-stack ownership — from architecture decisions to pixel-level polish."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={i}
              onSelect={setSelected}
            />
          ))}
        </div>
      </div>

      <ProjectDialog
        project={selected}
        onOpenChange={(open) => !open && setSelected(null)}
      />
    </section>
  );
}
