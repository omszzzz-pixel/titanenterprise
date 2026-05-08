import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "../../dictionaries";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Section";
import { Cta } from "@/components/sections/Cta";

export const metadata: Metadata = {
  title: "Platform · 금융 플랫폼",
  description:
    "펀드·증권사·자기자본 트레이딩 회사에 라이선싱·화이트라벨로 공급하는 금융 인프라. 체결 엔진·시그널 파이프라인·리스크 대시보드·리서치 워크벤치.",
  alternates: { canonical: "/en/capabilities/platform" },
};

export default async function PlatformPage(props: PageProps<"/[lang]/capabilities/platform">) {
  const { lang } = await props.params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);

  return (
    <>
      <div className="pt-40 pb-24">
        <Container>
          <Eyebrow>{dict.platformPage.eyebrow}</Eyebrow>
          <h1 className="mt-8 max-w-4xl font-display text-4xl leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
            {dict.platformPage.title}
          </h1>
          <p className="mt-10 max-w-3xl font-display text-xl leading-[1.6] text-muted sm:text-2xl">
            {dict.platformPage.lead}
          </p>

          <div className="mt-24 grid grid-cols-1 gap-px bg-line sm:grid-cols-2">
            {dict.platformPage.modules.map((m, i) => (
              <div key={m.title} className="bg-background p-10">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-gold">
                    M{(i + 1).toString().padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl text-foreground">{m.title}</h3>
                </div>
                <p className="mt-6 text-[14px] leading-[1.75] text-muted">{m.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>
      <Cta lang={lang as Locale} dict={dict.cta} />
    </>
  );
}
