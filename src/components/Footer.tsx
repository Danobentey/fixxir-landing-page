import { Logo } from "./ui/Logo";
import { business, navLinks, socials } from "@/lib/site";

const socialLinks = [
  { key: "instagram", label: "Instagram", href: socials.instagram },
  { key: "x", label: "X", href: socials.x },
  { key: "tiktok", label: "TikTok", href: socials.tiktok },
].filter((link): link is { key: string; label: string; href: string } =>
  Boolean(link.href),
);

export function Footer() {
  return (
    <footer className="relative border-t border-white/8 bg-ink-925/80">
      <div className="shell py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)] md:gap-8">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-[0.9375rem] leading-relaxed text-white/50">
              {business.tagline}
            </p>
            {socialLinks.length > 0 ? (
              <div className="mt-6 flex gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.key}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-surface rounded-full px-4 py-2 text-[0.8125rem] text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          <nav aria-label="Footer">
            <h2 className="text-[0.6875rem] font-semibold tracking-[0.16em] text-white/35 uppercase">
              Explore
            </h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[0.9375rem] text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={business.surveyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.9375rem] text-brand-300 transition-colors hover:text-brand-200"
                >
                  Customer survey
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-[0.6875rem] font-semibold tracking-[0.16em] text-white/35 uppercase">
              Visit or reach us
            </h2>
            <ul className="mt-5 space-y-3 text-[0.9375rem] text-white/60">
              <li>
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {business.addressDisplay}
                </a>
              </li>
              <li>
                <a href={`tel:${business.phone}`} className="transition-colors hover:text-white">
                  {business.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${business.email}`} className="transition-colors hover:text-white">
                  {business.email}
                </a>
              </li>
              <li className="text-white/40">{business.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/8 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.8125rem] text-white/35">
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <p className="text-[0.8125rem] text-white/35">
            Built for the devices you depend on.
          </p>
        </div>
      </div>
    </footer>
  );
}
