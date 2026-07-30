"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="size-10 rounded-full" aria-hidden />;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="relative overflow-hidden"
    >
      <Sun className="size-[18px] scale-100 rotate-0 transition-all duration-300 dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute size-[18px] scale-0 rotate-90 transition-all duration-300 dark:scale-100 dark:rotate-0" />
    </Button>
  );
}
