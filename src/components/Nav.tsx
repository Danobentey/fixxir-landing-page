"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Logo } from "./ui/Logo";
import { Button } from "./ui/Button";
import { business, cta, navLinks } from "@/lib/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/8 bg-ink-950/80 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <nav className="shell flex h-16 items-center justify-between md:h-[4.5rem]">
          <a href="#top" aria-label="Fixxir home">
            <Logo />
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3.5 py-2 text-sm text-white/60 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <Button href={cta.bookRepair} target="_blank" rel="noopener noreferrer">
              Book a repair
            </Button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="card-surface flex h-10 w-10 items-center justify-center rounded-full text-white/80 lg:hidden"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" strokeWidth="1.8" stroke="currentColor">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-60 bg-ink-950/95 backdrop-blur-xl lg:hidden"
          >
            <div className="shell flex h-16 items-center justify-between md:h-[4.5rem]">
              <Logo />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="card-surface flex h-10 w-10 items-center justify-center rounded-full text-white/80"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" strokeWidth="1.8" stroke="currentColor">
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="shell mt-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.05, duration: 0.35 }}
                  className="border-b border-white/8 py-4 font-display text-2xl font-medium text-white/85"
                >
                  {link.label}
                </motion.a>
              ))}
              <Button
                href={cta.bookRepair}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="mt-6 w-full"
              >
                Book a repair on WhatsApp
              </Button>

              <div className="mt-8 space-y-2 text-[0.9375rem] text-white/50">
                <a href={`tel:${business.phone}`} className="block text-white/80">
                  {business.phoneDisplay}
                </a>
                <p>{business.addressDisplay}</p>
                <p className="text-white/35">{business.hours}</p>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
