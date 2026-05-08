import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "../dictionaries";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Firm · 회사소개",
  description:
    "타이탄엔터프라이즈(Titan-Enterprise)는 엔지니어링 회사처럼 운영되는 시스템 트레이딩 회사입니다. 철학·접근·팀 소개. A trading firm built like an engineering firm.",
  alternates: { canonical: "/en/about" },
};

export default async function AboutPage(props: PageProps<"/[lang]/about">) {
  const { lang } = await props.params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);

  return (
    <div className="pt-40 pb-32">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>{dict.about.eyebrow}</Eyebrow>
            <h1 className="mt-8 font-display text-4xl leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
              {dict.about.title}
            </h1>
          </div>

          <div className="lg:col-span-7">
            <p className="font-display text-2xl leading-[1.5] text-foreground sm:text-3xl">
              {dict.about.lead}
            </p>
          </div>
        </div>

        <div className="mt-32 grid grid-cols-1 gap-px bg-line md:grid-cols-3">
          {dict.about.sections.map((s) => (
            <div key={s.heading} className="bg-background p-10">
              <div className="font-display text-2xl text-gold-gradient">
                {s.heading}
              </div>
              <p className="mt-6 text-[14px] leading-[1.75] text-muted">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
