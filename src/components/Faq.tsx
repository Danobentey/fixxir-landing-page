"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";
import { cta, faqs } from "@/lib/site";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-16 md:py-24 lg:py-32">
      <div className="shell">
        <SectionHeading
          eyebrow="Questions"
          title={
            <>
              The things people ask us{" "}
              <span className="text-gradient">before</span> handing it over
            </>
          }
        />

        <div className="mx-auto mt-14 max-w-3xl md:mt-16">
          <div className="card-surface overflow-hidden rounded-2xl">
            {faqs.map((faq, i) => {
              const expanded = open === i;

              return (
                <div key={faq.q} className={i !== 0 ? "border-t border-white/8" : ""}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(expanded ? null : i)}
                      aria-expanded={expanded}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-white/[0.03] md:px-7"
                    >
                      <span
                        className={`text-[0.9375rem] font-medium transition-colors md:text-base ${
                          expanded ? "text-white" : "text-white/80"
                        }`}
                      >
                        {faq.q}
                      </span>
                      <motion.span
                        animate={{ rotate: expanded ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors ${
                          expanded ? "bg-brand-500 text-white" : "bg-white/6 text-white/50"
                        }`}
                      >
                        <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.2">
                          <path d="M10 4v12M4 10h12" strokeLinecap="round" />
                        </svg>
                      </motion.span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {expanded ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-[0.9375rem] leading-relaxed text-white/60 md:px-7 md:pr-16">
                          {faq.a}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-col items-center gap-4 text-center">
              <p className="text-[0.9375rem] text-white/50">
                Still unsure about something?
              </p>
              <Button href={cta.askQuestion} target="_blank" rel="noopener noreferrer" variant="secondary">
                Ask us directly
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
