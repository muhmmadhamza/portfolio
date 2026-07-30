"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { CommandMenu } from "@/components/layout/command-menu";
import { Button } from "@/components/ui/button";
import { useActiveSection } from "@/hooks/use-active-section";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const activeId = useActiveSection(siteConfig.nav.map((n) => n.href));

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "glass flex w-full items-center justify-between rounded-full px-4 py-2 transition-shadow duration-300",
            scrolled ? "shadow-lg shadow-black/[0.03]" : "shadow-none"
          )}
        >
          <Link
            href="#top"
            onClick={(e) => handleNavClick(e, "#top")}
            className="flex items-center gap-2 pl-2 text-sm font-semibold tracking-tight"
          >
            <span className="flex size-8 items-center justify-center rounded-full bg-foreground text-background text-xs">
              {siteConfig.initials}
            </span>
            <span className="hidden sm:inline">{siteConfig.name}</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm transition-colors",
                  activeId === item.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {activeId === item.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-secondary"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <CommandMenu />
            <ThemeToggle />
            <Button
              asChild
              size="sm"
              variant="accent"
              className="hidden sm:inline-flex"
            >
              <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
                Let&apos;s Talk
              </a>
            </Button>
            <button
              className="ml-1 flex size-10 items-center justify-center rounded-full lg:hidden"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mx-4 mt-2 overflow-hidden lg:hidden"
          >
            <div className="glass flex flex-col gap-1 rounded-2xl p-3">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "rounded-xl px-4 py-2.5 text-sm transition-colors",
                    activeId === item.href
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
