import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";
import { cta, services } from "@/lib/site";

const icons = [PhoneIcon, LaptopIcon, TabletIcon, ChipIcon];

export function Services() {
  return (
    <section id="services" className="relative py-16 md:py-24 lg:py-32">
      <div className="shell">
        <SectionHeading
          eyebrow="What we fix"
          title={
            <>
              From cracked glass to{" "}
              <span className="text-gradient">board-level</span> faults
            </>
          }
          description="Most repairs are straightforward. Some are not. We handle both, and we tell you honestly which one you have."
        />

        <div className="mt-14 grid gap-4 md:mt-16 md:grid-cols-2">
          {services.map((service, i) => {
            const Icon = icons[i] ?? PhoneIcon;
            const featured = "featured" in service && service.featured;

            return (
              <Reveal key={service.title} delay={i * 0.07}>
                <article
                  className={`group relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 md:p-8 ${
                    featured
                      ? "border border-brand-500/25 bg-gradient-to-br from-brand-600/20 via-ink-900 to-ink-925"
                      : "card-surface hover:border-white/16"
                  }`}
                >
                  {featured ? (
                    <div className="absolute -top-16 -right-16 h-52 w-52 rounded-full bg-brand-500/15 blur-3xl transition-all duration-500 group-hover:bg-brand-500/25" />
                  ) : null}

                  <div className="relative flex items-start justify-between gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 ${
                        featured
                          ? "bg-brand-500 text-white shadow-[0_10px_30px_-8px_var(--color-brand-500)]"
                          : "bg-white/6 text-brand-300 ring-1 ring-white/8 ring-inset"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    {featured ? (
                      <span className="rounded-full bg-white/10 px-3 py-1 text-[0.6875rem] font-semibold tracking-wide text-white uppercase">
                        Our specialty
                      </span>
                    ) : null}
                  </div>

                  <h3 className="relative mt-6 text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="relative mt-2.5 text-[0.9375rem] leading-relaxed text-white/60">
                    {service.blurb}
                  </p>

                  <ul className="relative mt-6 flex flex-wrap gap-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-white/[0.04] px-3 py-1.5 text-[0.8125rem] text-white/65 ring-1 ring-white/8 ring-inset"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-center gap-4 text-center">
            <p className="text-[0.9375rem] text-white/50">
              Don&apos;t see your device or fault listed? Send us the model and
              we&apos;ll tell you straight away if we can help.
            </p>
            <Button href={cta.askQuestion} target="_blank" rel="noopener noreferrer" variant="secondary">
              Ask about your device
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

type IconProps = { className?: string };

function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="6" y="2" width="12" height="20" rx="2.5" />
      <path d="M10.5 5h3" strokeLinecap="round" />
      <path d="M10 18.5h4" strokeLinecap="round" />
    </svg>
  );
}

function LaptopIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="4" y="4" width="16" height="11" rx="1.8" />
      <path d="M2 18.5h20M9.5 18.5h5" strokeLinecap="round" />
    </svg>
  );
}

function TabletIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="4.5" y="3" width="15" height="18" rx="2" />
      <circle cx="12" cy="18" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ChipIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path
        d="M10 4v3M14 4v3M10 17v3M14 17v3M4 10h3M4 14h3M17 10h3M17 14h3"
        strokeLinecap="round"
      />
    </svg>
  );
}
