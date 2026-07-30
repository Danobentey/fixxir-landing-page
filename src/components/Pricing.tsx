import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";
import { cta, prices } from "@/lib/site";

export function Pricing() {
  if (prices.length === 0) return null;

  return (
    <section id="pricing" className="relative py-16 md:py-24 lg:py-32">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Indicative pricing"
              title={
                <>
                  Know roughly what it costs{" "}
                  <span className="text-gradient">before</span> you come in
                </>
              }
              description="Nobody likes asking the price and getting 'bring it and we'll see'. These are honest starting points. Your exact quote is confirmed after diagnosis, and never changes without your say-so."
            />
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href={cta.bookRepair} target="_blank" rel="noopener noreferrer">
                  Get an exact quote
                </Button>
                <p className="text-[0.8125rem] text-white/40">
                  Usually answered within business hours.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="card-surface overflow-hidden rounded-2xl">
              <ul>
                {prices.map((price, i) => (
                  <li
                    key={price.service}
                    className={`group flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-white/[0.03] md:px-6 ${
                      i !== 0 ? "border-t border-white/8" : ""
                    }`}
                  >
                    <div>
                      <p className="text-[0.9375rem] font-medium text-white/90">
                        {price.service}
                      </p>
                      <p className="mt-0.5 text-xs text-white/40">{price.note}</p>
                    </div>
                    <p className="font-display shrink-0 text-right text-lg font-semibold text-white">
                      {price.from !== "Free" ? (
                        <span className="mr-1 text-xs font-normal tracking-wide text-white/40 uppercase">
                          from
                        </span>
                      ) : null}
                      <span className={price.from === "Free" ? "text-emerald-300" : ""}>
                        {price.from}
                      </span>
                    </p>
                  </li>
                ))}
              </ul>
              <p className="border-t border-white/8 bg-white/[0.02] px-5 py-3.5 text-xs text-white/40 md:px-6">
                Prices vary by model, part grade and the extent of the damage.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
