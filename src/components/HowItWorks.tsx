"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { steps } from "@/lib/site";

export function HowItWorks() {
  const trackRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 75%", "end 60%"],
  });
  const height = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <section id="process" className="relative py-16 md:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 grid-backdrop opacity-40 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]" />

      <div className="shell">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              Five steps, and you approve{" "}
              <span className="text-gradient">every one</span>
            </>
          }
          description="No mystery, no surprise invoice at the end. Here's exactly what happens from the moment you message us."
        />

        <ol ref={trackRef} className="relative mx-auto mt-14 max-w-2xl md:mt-16">
          <div className="absolute top-2 bottom-2 left-[1.4375rem] w-px bg-white/8 md:left-[1.6875rem]">
            <motion.div
              style={{ height }}
              className="w-px bg-gradient-to-b from-brand-400 to-brand-600 shadow-[0_0_12px_var(--color-brand-500)]"
            />
          </div>

          {steps.map((step, i) => (
            <li key={step.title} className="relative pb-10 last:pb-0">
              <Reveal delay={i * 0.05} y={16}>
                <div className="flex gap-5 md:gap-6">
                  <span className="font-display relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-ink-900 text-[0.9375rem] font-semibold text-white shadow-[0_8px_24px_-8px_rgba(0,0,0,0.9)] md:h-14 md:w-14 md:text-base">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="pt-1.5 md:pt-3">
                    <h3 className="text-lg font-semibold text-white md:text-xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-white/60">
                      {step.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
