import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import { Container } from "./ui/Container";
import { LogoFull } from "./Logo";

export function Footer({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  const base = `/${lang}`;
  const year = new Date().getFullYear();

  const navLinks = [
    { href: base, label: dict.nav.home },
    { href: `${base}/about`, label: dict.nav.about },
    { href: `${base}/capabilities/trading`, label: dict.nav.trading },
    { href: `${base}/capabilities/education`, label: dict.nav.education },
    { href: `${base}/capabilities/platform`, label: dict.nav.platform },
    { href: `${base}/contact`, label: dict.nav.contact },
  ];

  return (
    <footer className="hairline-top relative mt-16 bg-night">
      <Container>
        <div className="grid grid-cols-1 gap-12 py-20 md:grid-cols-12">
          <div className="md:col-span-5">
            <LogoFull className="max-h-32 w-auto" />
            <p className="mt-6 max-w-md font-display text-2xl leading-snug text-foreground">
              {dict.footer.tagline}
            </p>
            <p className="mt-3 max-w-md text-[12px] leading-relaxed text-subtle">
              타이탄엔터프라이즈 · 시스템 트레이딩 · 금융 플랫폼
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="tracking-eyebrow text-[11px] uppercase text-gold">
              {dict.footer.navTitle}
            </div>
            <ul className="mt-6 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[13px] text-muted transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="tracking-eyebrow text-[11px] uppercase text-gold">
              {dict.footer.contactTitle}
            </div>
            <div className="mt-6 space-y-1 text-[13px] text-muted">
              <div>{dict.contactPage.address.line1}</div>
              <div>{dict.contactPage.address.line2}</div>
              <div>{dict.contactPage.address.line3}</div>
            </div>
            <div className="mt-4 space-y-1">
              <a
                href={`mailto:${dict.contactPage.email}`}
                className="block font-mono text-[13px] text-gold underline-offset-4 hover:underline"
              >
                {dict.contactPage.email}
              </a>
              <a
                href={`tel:${dict.contactPage.phone.replace(/[^+0-9]/g, "")}`}
                className="block font-mono text-[13px] text-muted hover:text-foreground"
              >
                {dict.contactPage.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="rule-line" />

        <div className="py-8">
          <p className="max-w-4xl text-[11px] leading-relaxed text-subtle">
            {dict.footer.disclaimer}
          </p>
        </div>

        <div className="rule-line" />

        <div className="py-6">
          <div className="text-[11px] tracking-[0.12em] uppercase text-subtle">
            © {year} Titan-Enterprise · 타이탄엔터프라이즈. {dict.footer.rights}
          </div>
        </div>
      </Container>
    </footer>
  );
}
