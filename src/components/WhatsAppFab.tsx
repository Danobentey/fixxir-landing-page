"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { WhatsAppIcon } from "./Hero";
import { cta } from "@/lib/site";

export function WhatsAppFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.a
          href={cta.bookRepair}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 16 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="group fixed right-5 bottom-5 z-50 flex items-center gap-0 overflow-hidden rounded-full bg-[#25D366] py-4 pl-4 pr-4 text-ink-950 shadow-[0_16px_40px_-10px_rgba(37,211,102,0.6)] transition-all duration-300 hover:gap-2.5 hover:pr-5 md:bottom-7 md:right-7"
          aria-label="Chat with Fixxir on WhatsApp"
        >
          <WhatsAppIcon className="h-6 w-6 shrink-0" />
          <span className="max-w-0 overflow-hidden text-sm font-semibold whitespace-nowrap transition-all duration-300 group-hover:max-w-40">
            Chat with us
          </span>
        </motion.a>
      ) : null}
    </AnimatePresence>
  );
}
