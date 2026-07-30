import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";
import { BoltMark } from "./ui/Bolt";
import { WhatsAppIcon } from "./Hero";
import { business, cta } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-backdrop absolute inset-0 [mask-image:radial-gradient(ellipse_55%_60%_at_50%_50%,black,transparent)]" />
        <div className="animate-pulse-glow absolute bottom-0 left-1/2 h-[32rem] w-[40rem] -translate-x-1/2 translate-y-1/3 rounded-full bg-brand-600/25 blur-[120px]" />
      </div>

      <div className="shell relative flex flex-col items-center text-center">
        <Reveal>
          <BoltMark className="mx-auto h-14 w-14 text-brand-400" />
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-8 max-w-3xl text-3xl font-semibold leading-[1.08] text-white sm:text-5xl md:text-[3.5rem]">
            Get your device{" "}
            <span className="text-gradient">working again</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
            Send us a message with your device and what it&apos;s doing. You&apos;ll
            get an honest answer, a clear price, and no pressure either way.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Button href={cta.bookRepair} target="_blank" rel="noopener noreferrer" size="lg">
              <WhatsAppIcon className="h-[1.15rem] w-[1.15rem]" />
              Chat on WhatsApp
            </Button>
            <Button href={`tel:${business.phone}`} variant="secondary" size="lg">
              <svg viewBox="0 0 24 24" className="h-[1.05rem] w-[1.05rem]" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path
                  d="M4.5 4.5h3.2l1.6 4-2 1.4a11 11 0 0 0 5.3 5.3l1.4-2 4 1.6v3.2a1.5 1.5 0 0 1-1.7 1.5C9.9 18.8 5.2 14.1 3 6.2A1.5 1.5 0 0 1 4.5 4.5Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {business.phoneDisplay}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-7 text-[0.8125rem] text-white/40">
            {business.addressDisplay} · {business.hoursShort}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
