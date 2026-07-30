"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/data/site-config";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex size-14 items-center justify-center rounded-2xl bg-foreground text-background text-sm font-semibold"
            >
              {siteConfig.initials}
            </motion.div>
            <div className="h-[2px] w-32 overflow-hidden rounded-full bg-secondary">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 0.9, ease: "easeInOut", repeat: Infinity }}
                className="h-full w-1/2 bg-accent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
