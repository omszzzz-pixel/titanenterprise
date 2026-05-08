import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "../../dictionaries";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Section";
import { Cta } from "@/components/sections/Cta";

export const metadata: Metadata = {
  title: "Trading & Operations · 트레이딩·운용",
  description:
    "타이탄엔터프라이즈 자체 트레이딩 데스크. 주식·선물·외환·디지털 자산에 걸친 시스템 전략 포트폴리오. 리서치·체결·리스크·운영 전 단계의 수직 통합 인프라.",
  alternates: { canonical: "/en/capabilities/trading" },
};

export default async function TradingPage(props: PageProps<"/[lang]/capabilities/trading">) {
  const { lang } = await props.params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);

  return (
    <>
      <div className="pt-40 pb-24">
        <Container>
          <Eyebrow>{dict.tradingPage.eyebrow}</Eyebrow>
          <h1 className="mt-8 max-w-4xl font-display text-4xl leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
            {dict.tradingPage.title}
          </h1>
          <p className="mt-10 max-w-3xl font-display text-xl leading-[1.6] text-muted sm:text-2xl">
            {dict.tradingPage.lead}
          </p>

          <div className="mt-24 grid grid-cols-1 gap-px bg-line sm:grid-cols-2">
            {dict.tradingPage.pillars.map((p) => (
              <div key={p.title} className="bg-background p-10">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-gold">
                    ◆
                  </span>
                  <h3 className="font-display text-2xl text-foreground">{p.title}</h3>
                </div>
                <p className="mt-6 text-[14px] leading-[1.75] text-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>
      <Cta lang={lang as Locale} dict={dict.cta} />
    </>
  );
}
