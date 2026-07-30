import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { objections } from "@/lib/site";

export function Objections() {
  return (
    <section id="why" className="relative py-16 md:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-1/4 -z-10 h-96 bg-brand-700/8 blur-[120px]" />

      <div className="shell">
        <SectionHeading
          eyebrow="Why Fixxir"
          title={
            <>
              You already know what goes wrong at a{" "}
              <span className="text-gradient">repair shop</span>
            </>
          }
          description="We asked customers what they hate about getting a device fixed. Here is every answer we heard — and exactly what we do about it."
        />

        <div className="mt-14 grid gap-4 md:mt-16 lg:grid-cols-2">
          {objections.map((item, i) => (
            <Reveal key={item.answer} delay={i * 0.06}>
              <article className="card-surface group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30 md:p-7">
                <p className="flex items-start gap-3 text-[0.9375rem] text-white/40">
                  <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 text-white/20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="line-through decoration-white/20">{item.pain}</span>
                </p>

                <h3 className="mt-5 flex items-center gap-2.5 text-lg font-semibold text-white">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-brand-300 transition-transform duration-300 group-hover:scale-110">
                    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {item.answer}
                </h3>
                <p className="mt-2.5 pl-[2.25rem] text-[0.9375rem] leading-relaxed text-white/60">
                  {item.detail}
                </p>
              </article>
            </Reveal>
          ))}

          <Reveal delay={objections.length * 0.06}>
            <article className="relative h-full overflow-hidden rounded-2xl border border-brand-500/25 bg-gradient-to-br from-brand-600/25 via-brand-700/10 to-transparent p-6 md:p-7">
              <div className="absolute -right-8 -bottom-8 h-40 w-40 rounded-full bg-brand-500/20 blur-3xl" />
              <h3 className="relative font-display text-xl font-semibold text-white">
                Not sure what&apos;s even wrong with it?
              </h3>
              <p className="relative mt-3 text-[0.9375rem] leading-relaxed text-white/70">
                That&apos;s normal, and it&apos;s our job. Bring the device in for an
                assessment and we&apos;ll tell you what we find before you commit to
                anything.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
