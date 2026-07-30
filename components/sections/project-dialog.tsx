"use client";

import Image from "next/image";
import { ArrowUpRight, Github, CheckCircle2, Lightbulb } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";

interface ProjectDialogProps {
  project: Project | null;
  onOpenChange: (open: boolean) => void;
}

export function ProjectDialog({ project, onOpenChange }: ProjectDialogProps) {
  return (
    <Dialog open={!!project} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto p-0">
        {project && (
          <>
            <DialogTitle className="sr-only">{project.title}</DialogTitle>
            <div className="relative aspect-[16/8] w-full">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{project.year}</p>
                </div>
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <Button asChild size="sm" variant="accent">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        Live Demo <ArrowUpRight className="size-3.5" />
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button asChild size="sm" variant="outline">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="size-3.5" /> Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {project.longDescription}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold">
                    <CheckCircle2 className="size-4 text-accent" /> Key Features
                  </h4>
                  <ul className="space-y-2.5">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 size-1 shrink-0 rounded-full bg-muted-foreground" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold">
                    <Lightbulb className="size-4 text-accent" /> Challenges &amp; Solutions
                  </h4>
                  <div className="space-y-4">
                    {project.challenges.map((c) => (
                      <div key={c.problem} className="rounded-xl bg-secondary/50 p-3.5">
                        <p className="text-xs font-medium text-foreground">
                          {c.problem}
                        </p>
                        <p className="mt-1.5 text-xs text-muted-foreground">
                          {c.solution}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
