"use client";

import { motion } from "motion/react";
import { Button } from "./ui/Button";
import { BoltMark } from "./ui/Bolt";
import { business, cta, promises } from "@/lib/site";

const fade = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-14 md:pt-40 md:pb-28">
      <Backdrop />

      <div className="shell relative">
        <div className="flex flex-col items-center text-center">
          <motion.a
            href="#services"
            custom={0}
            variants={fade}
            initial="hidden"
            animate="show"
            className="card-surface group inline-flex items-center gap-2.5 rounded-full py-1.5 pr-4 pl-1.5 text-xs text-white/70 transition-colors hover:text-white sm:text-sm"
          >
            <span className="relative flex h-6 items-center gap-1.5 rounded-full bg-brand-500/15 px-2.5 text-[0.6875rem] font-semibold tracking-wide text-brand-300 uppercase">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-400" />
              </span>
              Open now
            </span>
            <span className="hidden sm:inline">
              Walk-ins welcome in Ikeja, Lagos
            </span>
            <span className="sm:hidden">Ikeja, Lagos</span>
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>

          <motion.h1
            custom={1}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-7 max-w-4xl text-[2.6rem] leading-[1.04] font-semibold text-white sm:text-6xl md:text-[4.25rem]"
          >
            Repairs you don&apos;t have to{" "}
            <span className="relative whitespace-nowrap">
              <span className="text-gradient">worry</span>
              <svg
                viewBox="0 0 300 14"
                preserveAspectRatio="none"
                className="absolute -bottom-1.5 left-0 h-2.5 w-full text-brand-500/60 md:-bottom-2"
                fill="none"
              >
                <motion.path
                  d="M2 9c60-7 130-9 296-4"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.75, ease: "easeInOut" }}
                />
              </svg>
            </span>{" "}
            about.
          </motion.h1>

          <motion.p
            custom={2}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-7 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg"
          >
            Cracked screens, dead batteries, laptops that won&apos;t boot, faults
            other shops turn away. We find what&apos;s actually wrong, tell you the
            price before we start, and hand back a device that genuinely works.
          </motion.p>

          <motion.div
            custom={3}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center"
          >
            <Button
              href={cta.bookRepair}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              <WhatsAppIcon className="h-[1.15rem] w-[1.15rem]" />
              Book a repair
            </Button>
            <Button href={business.surveyUrl} target="_blank" rel="noopener noreferrer" variant="secondary" size="lg">
              Shape the Fixxir app
              <span className="text-white/40">·</span>
              <span className="text-brand-300">5 min survey</span>
            </Button>
          </motion.div>

          <motion.ul
            custom={4}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5"
          >
            {promises.map((promise) => (
              <li key={promise} className="flex items-center gap-2 text-[0.8125rem] text-white/50">
                <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0 text-brand-400" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.86-9.47a.75.75 0 0 0-1.22-.87l-3.24 4.53-1.62-1.62a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.09l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
                {promise}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 md:mt-20"
        >
          <RepairTicket />
        </motion.div>
      </div>
    </section>
  );
}

function Backdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="grid-backdrop absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="animate-pulse-glow absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-brand-600/25 blur-[130px]" />
      <div className="absolute top-1/3 -left-32 h-80 w-80 rounded-full bg-brand-700/20 blur-[110px]" />
      <div className="absolute top-1/4 -right-24 h-72 w-72 rounded-full bg-brand-500/10 blur-[100px]" />
      <BoltMark className="animate-float absolute top-24 left-[6%] hidden h-24 w-24 text-brand-500/10 xl:block" />
      <BoltMark className="absolute top-56 right-[7%] hidden h-16 w-16 text-brand-400/10 xl:block" />
    </div>
  );
}

const ticketRows = [
  { label: "Reported", value: "\u201cIt stopped charging overnight\u201d" },
  { label: "Actual fault", value: "Charging IC failure on the board", accent: true },
  { label: "Parts needed", value: "Replacement charging IC \u00b7 in stock" },
  { label: "Timeline", value: "2 working days" },
];

/**
 * The hero visual: an illustrative repair ticket that demonstrates the
 * diagnose-then-quote promise rather than describing it.
 */
function RepairTicket() {
  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="absolute -inset-px rounded-[1.75rem] bg-gradient-to-b from-brand-500/40 via-white/5 to-transparent" />
      <div className="relative overflow-hidden rounded-[1.75rem] bg-ink-925/90 p-5 backdrop-blur-xl sm:p-7">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="animate-sweep absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-brand-400/10 to-transparent" />
        </div>

        <div className="relative flex flex-wrap items-center justify-between gap-3 border-b border-white/8 pb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
                <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
                <path d="M10.5 5.5h3" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <p className="font-display text-[0.9375rem] font-semibold text-white">
                iPhone 13 Pro
              </p>
              <p className="text-xs text-white/45">Ticket FX-2481 · Received today</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-3 py-1.5 text-[0.6875rem] font-semibold tracking-wide text-emerald-300 uppercase ring-1 ring-emerald-400/20 ring-inset">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Diagnosed
          </span>
        </div>

        <dl className="relative mt-5 space-y-3.5">
          {ticketRows.map((row) => (
            <div
              key={row.label}
              className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-4"
            >
              <dt className="w-28 shrink-0 text-xs tracking-wide text-white/40 uppercase">
                {row.label}
              </dt>
              <dd
                className={`text-[0.9375rem] ${
                  row.accent ? "font-medium text-brand-300" : "text-white/80"
                }`}
              >
                {row.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="relative mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-brand-500/20 bg-brand-500/[0.07] p-4 sm:p-5">
          <div>
            <p className="text-xs tracking-wide text-white/45 uppercase">
              Your quote, before we begin
            </p>
            <p className="font-display mt-1 text-2xl font-semibold text-white sm:text-[1.75rem]">
              ₦32,500
              <span className="ml-2 text-sm font-normal text-white/40">
                all in
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-full px-4 py-2 text-sm text-white/40 ring-1 ring-white/10 ring-inset">
              Decline
            </span>
            <span className="rounded-full bg-brand-500 px-5 py-2 text-sm font-medium text-white shadow-[0_8px_28px_-8px_var(--color-brand-500)]">
              Approve repair
            </span>
          </div>
        </div>

        <p className="relative mt-4 text-center text-xs text-white/35">
          Illustration of a real Fixxir diagnosis. Nothing chargeable starts until
          you approve it.
        </p>
      </div>
    </div>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.42 1.28 4.87L2 22l5.3-1.38a9.9 9.9 0 0 0 4.74 1.2c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Zm0 18.02c-1.55 0-3-.44-4.23-1.2l-.3-.18-3.14.82.84-3.06-.2-.32a7.98 7.98 0 0 1-1.23-4.26c0-4.44 3.62-8.05 8.06-8.05 4.44 0 8.05 3.61 8.05 8.05 0 4.44-3.61 8.2-7.85 8.2Zm4.42-5.98c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.18-.7-.63-1.18-1.4-1.32-1.64-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.68 2.68 4.1 3.66.57.25 1.02.4 1.37.5.58.19 1.1.16 1.52.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}
