import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";
import { BoltMark } from "./ui/Bolt";
import { business } from "@/lib/site";

const asks = [
  "How you get devices repaired today",
  "What goes wrong with that",
  "What would make you switch",
  "Which app features you'd actually use",
];

export function Survey() {
  return (
    <section id="survey" className="relative py-8 md:py-12">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-brand-400/25 bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 p-8 md:p-12 lg:p-14">
            <div className="pointer-events-none absolute inset-0">
              <div className="grid-backdrop absolute inset-0 opacity-25" />
              <div className="absolute -top-32 -right-20 h-80 w-80 rounded-full bg-brand-300/25 blur-[90px]" />
              <BoltMark className="absolute -right-6 -bottom-16 h-64 w-64 text-white/[0.07]" />
            </div>

            <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-16">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-[0.6875rem] font-semibold tracking-[0.14em] text-white uppercase backdrop-blur-sm">
                  Customer survey · open now
                </span>

                <h2 className="mt-6 text-3xl font-semibold leading-[1.1] text-white sm:text-4xl md:text-[2.625rem]">
                  Help us build it properly.
                </h2>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
                  We&apos;d rather ask you than guess. Give us five minutes and you
                  directly shape what the Fixxir app does first — whether
                  you&apos;ve used us before or you&apos;re just tired of how repairs
                  work everywhere else.
                </p>

                <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Button
                    href={business.surveyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="lg"
                    className="bg-white text-brand-700 shadow-[0_14px_40px_-10px_rgba(0,0,0,0.6)] hover:bg-white hover:text-brand-600"
                  >
                    Take the survey
                    <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Button>
                  <p className="text-[0.8125rem] text-white/65">
                    Under 5 minutes · your answers stay with us
                  </p>
                </div>
              </div>

              <ul className="relative space-y-2.5 rounded-2xl border border-white/15 bg-white/[0.08] p-5 backdrop-blur-sm md:p-6">
                <p className="mb-4 text-[0.6875rem] font-semibold tracking-[0.14em] text-white/60 uppercase">
                  What we&apos;ll ask about
                </p>
                {asks.map((ask, i) => (
                  <li key={ask} className="flex items-center gap-3 text-[0.9375rem] text-white/90">
                    <span className="font-display flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/15 text-xs font-semibold text-white">
                      {i + 1}
                    </span>
                    {ask}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
