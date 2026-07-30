import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { testimonials } from "@/lib/site";

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="reviews" className="relative py-16 md:py-24 lg:py-32">
      <div className="shell">
        <SectionHeading
          eyebrow="In their words"
          title={
            <>
              The people who&apos;ve already{" "}
              <span className="text-gradient">handed us</span> their device
            </>
          }
        />

        <div className="mt-14 grid gap-4 md:mt-16 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.name} delay={i * 0.08}>
              <figure className="card-surface flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/16 md:p-7">
                <div className="flex gap-0.5 text-brand-400" aria-label="5 out of 5">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <svg key={star} viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                      <path d="M10 1.5l2.6 5.3 5.9.85-4.25 4.15 1 5.85L10 14.9l-5.25 2.75 1-5.85L1.5 7.65l5.9-.85L10 1.5Z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-[0.9375rem] leading-relaxed text-white/75">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/8 pt-5">
                  <span className="font-display flex h-9 w-9 items-center justify-center rounded-full bg-brand-500/15 text-sm font-semibold text-brand-300">
                    {testimonial.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-[0.875rem] font-medium text-white">
                      {testimonial.name}
                    </span>
                    <span className="block text-xs text-white/40">
                      {testimonial.context}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
