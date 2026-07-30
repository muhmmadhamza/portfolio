"use client";

import * as React from "react";
 
import { Command } from "cmdk";
import {
  User,
  Layers,
  FolderGit2,
  Briefcase,
  Wrench,
  MessageSquareQuote,
  Mail,
  Github,
  Linkedin,
  Sun,
  Moon,
  FileText,
  Search,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";
 
export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
 
  const { setTheme, resolvedTheme } = useTheme();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false);
    command();
  }, []);

  const navItems = [
    { icon: User, label: "About", href: "#about" },
    { icon: Wrench, label: "Tech Stack", href: "#stack" },
    { icon: FolderGit2, label: "Projects", href: "#projects" },
    { icon: Briefcase, label: "Experience", href: "#experience" },
    { icon: Layers, label: "Services", href: "#services" },
    { icon: MessageSquareQuote, label: "Testimonials", href: "#testimonials" },
    { icon: Mail, label: "Contact", href: "#contact" },
  ];

  const goTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="glass hidden items-center gap-2 rounded-full px-3.5 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground md:flex"
        aria-label="Open command menu"
      >
        <Search className="size-3.5" />
        <span>Search</span>
        <kbd className="ml-2 rounded-md border border-border bg-secondary px-1.5 py-0.5 font-mono text-[10px]">
          ⌘K
        </kbd>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent hideClose className="max-w-xl overflow-hidden p-0">
          <DialogTitle className="sr-only">Command Menu</DialogTitle>
          <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground">
            <div className="flex items-center gap-2 border-b border-border px-4">
              <Search className="size-4 shrink-0 text-muted-foreground" />
              <Command.Input
                placeholder="Type a command or search..."
                className="flex h-12 w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground"
              />
            </div>
            <Command.List className="max-h-80 overflow-y-auto p-2">
              <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
                No results found.
              </Command.Empty>
              <Command.Group heading="Navigate">
                {navItems.map((item) => (
                  <Command.Item
                    key={item.href}
                    onSelect={() => runCommand(() => goTo(item.href))}
                    className={cn(
                      "flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2.5 text-sm",
                      "data-[selected=true]:bg-secondary"
                    )}
                  >
                    <item.icon className="size-4" />
                    {item.label}
                  </Command.Item>
                ))}
              </Command.Group>
              <Command.Group heading="Links">
                <Command.Item
                  onSelect={() =>
                    runCommand(() => window.open(siteConfig.links.github, "_blank"))
                  }
                  className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2.5 text-sm data-[selected=true]:bg-secondary"
                >
                  <Github className="size-4" /> GitHub
                </Command.Item>
                <Command.Item
                  onSelect={() =>
                    runCommand(() => window.open(siteConfig.links.linkedin, "_blank"))
                  }
                  className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2.5 text-sm data-[selected=true]:bg-secondary"
                >
                  <Linkedin className="size-4" /> LinkedIn
                </Command.Item>
                <Command.Item
                  onSelect={() =>
                    runCommand(() => window.open(siteConfig.links.resume, "_blank"))
                  }
                  className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2.5 text-sm data-[selected=true]:bg-secondary"
                >
                  <FileText className="size-4" /> Resume
                </Command.Item>
              </Command.Group>
              <Command.Group heading="Theme">
                <Command.Item
                  onSelect={() => runCommand(() => setTheme("light"))}
                  className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2.5 text-sm data-[selected=true]:bg-secondary"
                >
                  <Sun className="size-4" /> Light
                  {resolvedTheme === "light" && (
                    <span className="ml-auto text-xs text-muted-foreground">Active</span>
                  )}
                </Command.Item>
                <Command.Item
                  onSelect={() => runCommand(() => setTheme("dark"))}
                  className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2.5 text-sm data-[selected=true]:bg-secondary"
                >
                  <Moon className="size-4" /> Dark
                  {resolvedTheme === "dark" && (
                    <span className="ml-auto text-xs text-muted-foreground">Active</span>
                  )}
                </Command.Item>
              </Command.Group>
            </Command.List>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  );
}
