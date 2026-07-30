"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";
import { Logo } from "./ui/Logo";
import { appFeatures, business } from "@/lib/site";

export function AppTeaser() {
  return (
    <section id="app" className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/15 blur-[130px]" />
      </div>

      <div className="shell">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-20">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/25 bg-brand-500/10 px-3.5 py-1.5 text-[0.6875rem] font-semibold tracking-[0.14em] text-brand-200 uppercase">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-300" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-300" />
                </span>
                In development
              </span>

              <h2 className="mt-6 text-3xl font-semibold leading-[1.1] text-white sm:text-4xl md:text-[2.75rem]">
                We&apos;re building the repair app{" "}
                <span className="text-gradient">Lagos actually needs</span>
              </h2>

              <p className="mt-5 text-base leading-relaxed text-white/60 md:text-lg">
                Right now, getting a device fixed means going somewhere and hoping.
                We think you should be able to log a fault from your sofa, see the
                price before you commit, and watch the repair progress like a
                delivery.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="mt-9 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                {appFeatures.map((feature) => (
                  <li key={feature.title} className="flex gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-brand-300">
                      <svg viewBox="0 0 20 20" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[0.9375rem] font-medium text-white/90">
                        {feature.title}
                      </p>
                      <p className="mt-0.5 text-[0.8125rem] leading-relaxed text-white/45">
                        {feature.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 card-surface flex flex-col gap-4 rounded-2xl p-5 sm:flex-row sm:items-center sm:justify-between md:p-6">
                <p className="text-[0.9375rem] leading-relaxed text-white/70">
                  <span className="font-medium text-white">
                    This list is ordered by what people have already told us.
                  </span>{" "}
                  Add your answer and it changes what we build first.
                </p>
                <Button
                  href={business.surveyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0"
                >
                  Have your say
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const trackerSteps = [
  { label: "Device received", detail: "Logged at 09:14" },
  { label: "Diagnosis in progress", detail: "Technician assigned" },
  { label: "Quote sent for approval", detail: "₦32,500 · awaiting you" },
  { label: "Repair under way", detail: "Charging IC replaced" },
  { label: "Tested & ready", detail: "Pickup or delivery" },
];

function PhoneMockup() {
  const [active, setActive] = useState(2);

  useEffect(() => {
    const id = setInterval(
      () => setActive((prev) => (prev + 1) % trackerSteps.length),
      2200,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative">
      <div className="absolute -inset-10 -z-10 rounded-full bg-brand-500/15 blur-[70px]" />

      {/* Floating notification card */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-6 -left-6 z-20 hidden w-56 rounded-2xl border border-white/10 bg-ink-850/95 p-3.5 shadow-[0_24px_60px_-16px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:block"
      >
        <div className="flex items-center gap-2.5">
          <Logo showWordmark={false} />
          <div className="min-w-0">
            <p className="truncate text-[0.8125rem] font-medium text-white">
              Repair approved
            </p>
            <p className="truncate text-[0.6875rem] text-white/45">
              We&apos;ve started work on your iPhone
            </p>
          </div>
        </div>
      </motion.div>

      {/* Phone */}
      <div className="relative w-[17.5rem] rounded-[2.75rem] border border-white/12 bg-gradient-to-b from-ink-700 to-ink-900 p-2.5 shadow-[0_50px_100px_-30px_rgba(0,0,0,1)] sm:w-[19rem]">
        <div className="relative overflow-hidden rounded-[2.25rem] bg-ink-950">
          {/* Notch */}
          <div className="absolute top-2.5 left-1/2 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-ink-950" />

          <div className="relative px-5 pt-11 pb-7">
            <div className="pointer-events-none absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-brand-600/25 blur-3xl" />

            <div className="relative flex items-center justify-between">
              <Logo showWordmark={false} />
              <span className="text-[0.625rem] tracking-[0.14em] text-white/35 uppercase">
                FX-2481
              </span>
            </div>

            <p className="relative mt-6 text-[0.6875rem] tracking-[0.14em] text-white/35 uppercase">
              Your repair
            </p>
            <p className="relative mt-1 font-display text-xl font-semibold text-white">
              iPhone 13 Pro
            </p>

            <ol className="relative mt-6 space-y-0">
              {trackerSteps.map((step, i) => {
                const done = i < active;
                const current = i === active;

                return (
                  <li key={step.label} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <motion.span
                        animate={{
                          backgroundColor: current
                            ? "var(--color-brand-500)"
                            : done
                              ? "color-mix(in oklab, var(--color-brand-500) 35%, transparent)"
                              : "rgba(255,255,255,0.07)",
                          scale: current ? 1.15 : 1,
                        }}
                        transition={{ duration: 0.4 }}
                        className="relative flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                      >
                        {current ? (
                          <span className="absolute h-full w-full animate-ping rounded-full bg-brand-400/60" />
                        ) : null}
                        {done || current ? (
                          <svg viewBox="0 0 20 20" className="relative h-3 w-3 text-white" fill="none" stroke="currentColor" strokeWidth="3.5">
                            <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        ) : null}
                      </motion.span>
                      {i < trackerSteps.length - 1 ? (
                        <span
                          className={`my-1 w-px flex-1 transition-colors duration-500 ${
                            done ? "bg-brand-500/40" : "bg-white/8"
                          }`}
                        />
                      ) : null}
                    </div>

                    <div className={`pb-4 transition-opacity duration-500 ${current || done ? "opacity-100" : "opacity-40"}`}>
                      <p className="text-[0.8125rem] font-medium text-white">
                        {step.label}
                      </p>
                      <AnimatePresence mode="wait">
                        {current ? (
                          <motion.p
                            key={step.detail}
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-[0.6875rem] text-brand-300"
                          >
                            {step.detail}
                          </motion.p>
                        ) : (
                          <p className="text-[0.6875rem] text-white/35">{step.detail}</p>
                        )}
                      </AnimatePresence>
                    </div>
                  </li>
                );
              })}
            </ol>

            <div className="relative mt-2 rounded-2xl border border-white/8 bg-white/[0.04] p-3.5">
              <div className="flex items-center justify-between">
                <span className="text-[0.6875rem] text-white/45">Approved total</span>
                <span className="font-display text-[0.9375rem] font-semibold text-white">
                  ₦32,500
                </span>
              </div>
              <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-white/8">
                <motion.div
                  animate={{ width: `${((active + 1) / trackerSteps.length) * 100}%` }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="mt-5 text-center text-xs text-white/30">
        Concept preview · design not final
      </p>
    </div>
  );
}
