import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { Container } from "@/components/ui/Container";
import { Eyebrow, Section } from "@/components/ui/Section";

type CapabilityItem = {
  label: string;
  title: string;
  body: string;
  cta: string;
};

type CapabilitiesDict = {
  eyebrow: string;
  heading: string;
  subheading: string;
  trading: CapabilityItem;
  education: CapabilityItem;
  platform: CapabilityItem;
};

export function Capabilities({ lang, dict }: { lang: Locale; dict: CapabilitiesDict }) {
  const cards = [
    { ...dict.trading, slug: "trading" },
    { ...dict.education, slug: "education" },
    { ...dict.platform, slug: "platform" },
  ];

  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>{dict.eyebrow}</Eyebrow>
            <h2 className="mt-6 font-display text-4xl leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
              {dict.heading}
            </h2>
            <p className="mt-8 max-w-md text-[15px] leading-[1.7] text-muted">
              {dict.subheading}
            </p>
          </div>

          <div className="space-y-px bg-line lg:col-span-7">
            {cards.map((card) => (
              <Link
                key={card.slug}
                href={`/${lang}/capabilities/${card.slug}`}
                className="group relative block bg-background p-8 transition-colors hover:bg-charcoal sm:p-10"
              >
                <div className="tracking-eyebrow text-[11px] uppercase text-gold">
                  {card.label}
                </div>
                <h3 className="mt-5 max-w-xl font-display text-2xl leading-snug text-foreground sm:text-3xl">
                  {card.title}
                </h3>
                <p className="mt-5 max-w-2xl text-[14px] leading-[1.7] text-muted">
                  {card.body}
                </p>
                <div className="mt-8 inline-flex items-center gap-3 text-[11px] tracking-[0.18em] uppercase text-gold">
                  {card.cta}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
