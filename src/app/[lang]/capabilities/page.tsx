import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "../dictionaries";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Capabilities · 사업영역",
  description:
    "타이탄엔터프라이즈의 세 가지 사업영역 — 시스템 트레이딩 자체 개발·운용, 시스템 트레이딩 교육, 그리고 금융 플랫폼. Trading & Operations · Education · Platform.",
  alternates: { canonical: "/en/capabilities" },
};

export default async function CapabilitiesHub(props: PageProps<"/[lang]/capabilities">) {
  const { lang } = await props.params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);

  const cards = [
    { ...dict.capabilities.trading, slug: "trading" },
    { ...dict.capabilities.education, slug: "education" },
    { ...dict.capabilities.platform, slug: "platform" },
  ];

  return (
    <div className="pt-40 pb-24">
      <Container>
        <Eyebrow>{dict.capabilities.eyebrow}</Eyebrow>
        <h1 className="mt-8 max-w-4xl font-display text-4xl leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
          {dict.capabilities.heading}
        </h1>
        <p className="mt-8 max-w-2xl text-[15px] leading-[1.7] text-muted">
          {dict.capabilities.subheading}
        </p>

        <div className="mt-20 space-y-px bg-line">
          {cards.map((card) => (
            <Link
              key={card.slug}
              href={`/${lang}/capabilities/${card.slug}`}
              className="group relative block bg-background p-10 transition-colors hover:bg-charcoal"
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
                <div className="md:col-span-3">
                  <div className="tracking-eyebrow text-[11px] uppercase text-gold">
                    {card.label}
                  </div>
                </div>
                <div className="md:col-span-7">
                  <h2 className="font-display text-2xl leading-snug text-foreground sm:text-3xl">
                    {card.title}
                  </h2>
                  <p className="mt-5 text-[14px] leading-[1.7] text-muted">
                    {card.body}
                  </p>
                </div>
                <div className="flex items-end md:col-span-2 md:justify-end">
                  <div className="inline-flex items-center gap-3 text-[11px] tracking-[0.18em] uppercase text-gold">
                    {card.cta}
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
