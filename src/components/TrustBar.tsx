import { Reveal } from "./ui/Reveal";
import { stats } from "@/lib/site";

const brands = [
  "Apple",
  "Samsung",
  "HP",
  "Dell",
  "Lenovo",
  "Asus",
  "Acer",
  "Infinix",
  "Tecno",
  "Xiaomi",
  "Huawei",
  "Microsoft Surface",
];

export function TrustBar() {
  return (
    <section className="relative border-y border-white/8 bg-ink-925/60 py-12 md:py-14">
      <div className="shell">
        <Reveal>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <dt className="font-display text-3xl font-semibold text-white md:text-[2.5rem]">
                  <span className="text-gradient">{stat.value}</span>
                </dt>
                <dd className="mt-1.5 text-[0.8125rem] text-white/45">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <div className="relative mt-12 flex flex-col items-center gap-5">
        <p className="text-xs tracking-[0.18em] text-white/30 uppercase">
          Brands we work on every week
        </p>
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="animate-marquee flex w-max items-center gap-12 pr-12">
            {[...brands, ...brands].map((brand, i) => (
              <span
                key={`${brand}-${i}`}
                className="font-display text-lg font-medium whitespace-nowrap text-white/25 md:text-xl"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
