import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";
import { WhatsAppIcon } from "./Hero";
import { businessBenefits, cta } from "@/lib/site";

export function Audiences() {
  return (
    <section id="business" className="relative py-16 md:py-24 lg:py-32">
      <div className="shell grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
        <Reveal>
          <article className="card-surface flex h-full flex-col rounded-[1.5rem] p-7 md:p-9">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/6 px-3 py-1.5 text-[0.6875rem] font-semibold tracking-[0.14em] text-white/60 uppercase">
              For individuals
            </span>
            <h3 className="mt-6 text-2xl font-semibold text-white md:text-[1.75rem]">
              Your device is part of your day. Let&apos;s get it back.
            </h3>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/60">
              Whether you use it for work, school, your business or staying in touch,
              being without it is more than an inconvenience. We keep the process
              simple: tell us what happened, get a clear answer, decide from there.
            </p>
            <div className="mt-auto pt-8">
              <Button href={cta.bookRepair} target="_blank" rel="noopener noreferrer" size="lg" className="w-full sm:w-auto">
                <WhatsAppIcon className="h-[1.15rem] w-[1.15rem]" />
                Fix my device
              </Button>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.1}>
          <article className="relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-brand-500/25 bg-gradient-to-br from-brand-600/25 via-ink-900 to-ink-925 p-7 md:p-9">
            <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-brand-500/20 blur-[90px]" />

            <span className="relative inline-flex w-fit items-center gap-2 rounded-full bg-brand-500/20 px-3 py-1.5 text-[0.6875rem] font-semibold tracking-[0.14em] text-brand-200 uppercase ring-1 ring-brand-400/25 ring-inset">
              For business
            </span>
            <h3 className="relative mt-6 text-2xl font-semibold text-white md:text-[1.75rem]">
              One broken device shouldn&apos;t slow down a whole team.
            </h3>
            <p className="relative mt-4 text-[0.9375rem] leading-relaxed text-white/70">
              Become the person who has a repair partner on speed dial. We handle
              multi-device requests, keep documentation your finance team will accept,
              and tell you plainly when replacing beats repairing.
            </p>

            <ul className="relative mt-7 grid gap-2.5 sm:grid-cols-2">
              {businessBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2.5 text-[0.875rem] text-white/75">
                  <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.86-9.47a.75.75 0 0 0-1.22-.87l-3.24 4.53-1.62-1.62a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.09l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="relative mt-auto pt-8">
              <Button href={cta.businessSupport} target="_blank" rel="noopener noreferrer" size="lg" className="w-full sm:w-auto">
                Talk to us about your team
              </Button>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
