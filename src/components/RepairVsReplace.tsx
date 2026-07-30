import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";
import { cta, repairReasons } from "@/lib/site";

export function RepairVsReplace() {
  return (
    <section className="relative py-16 md:py-24 lg:py-28">
      <div className="shell">
        <div className="card-surface relative overflow-hidden rounded-[1.75rem] p-8 md:p-12 lg:p-14">
          <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-brand-700/20 blur-[100px]" />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <SectionHeading
              align="left"
              eyebrow="Repair before you replace"
              title={
                <>
                  A new device isn&apos;t always the{" "}
                  <span className="text-gradient">answer</span>
                </>
              }
              description="Replacing a device costs more than the price tag. It costs your files, your setup, and the muscle memory of something that already worked the way you like."
            />

            <div>
              <ul className="grid gap-3">
                {repairReasons.map((reason) => (
                  <Reveal key={reason} y={12}>
                    <li className="flex items-start gap-3 rounded-xl bg-white/[0.03] px-4 py-3.5 text-[0.9375rem] text-white/75 ring-1 ring-white/8 ring-inset">
                      <svg viewBox="0 0 24 24" className="mt-0.5 h-[1.125rem] w-[1.125rem] shrink-0 text-brand-400" fill="none" stroke="currentColor" strokeWidth="1.9">
                        <path
                          d="M20 12a8 8 0 1 1-2.34-5.66M20 4v4h-4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {reason}
                    </li>
                  </Reveal>
                ))}
              </ul>

              <Reveal delay={0.15}>
                <Button
                  href={cta.askQuestion}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  className="mt-6"
                >
                  Let us assess it first
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
