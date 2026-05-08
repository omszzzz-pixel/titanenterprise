import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "../dictionaries";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Contact · 문의",
  description:
    "타이탄엔터프라이즈 문의 — 라이선싱·기관 자금 배분·교육 프로그램·채용. titan@titan-enterprise.kr · 02-6951-1028 · 서울 영등포구 여의도동.",
  alternates: { canonical: "/en/contact" },
};

export default async function ContactPage(props: PageProps<"/[lang]/contact">) {
  const { lang } = await props.params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);

  const fields = [
    { key: "general", label: dict.contactPage.fields.general },
    { key: "partnerships", label: dict.contactPage.fields.partnerships },
    { key: "education", label: dict.contactPage.fields.education },
    { key: "careers", label: dict.contactPage.fields.careers },
  ];

  return (
    <div className="pt-40 pb-32">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Eyebrow>{dict.contactPage.eyebrow}</Eyebrow>
            <h1 className="mt-8 font-display text-4xl leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
              {dict.contactPage.title}
            </h1>
            <p className="mt-10 max-w-md text-[15px] leading-[1.7] text-muted">
              {dict.contactPage.lead}
            </p>

            <div className="mt-16">
              <div className="tracking-eyebrow text-[11px] uppercase text-gold">
                {dict.footer.contactTitle}
              </div>
              <div className="mt-6 space-y-1 text-[14px] text-foreground">
                <div>{dict.contactPage.address.line1}</div>
                <div className="text-muted">{dict.contactPage.address.line2}</div>
                <div className="text-muted">{dict.contactPage.address.line3}</div>
              </div>
              <div className="mt-8 space-y-2">
                <a
                  href={`mailto:${dict.contactPage.email}`}
                  className="block font-mono text-[14px] text-gold underline-offset-4 hover:underline"
                >
                  {dict.contactPage.email}
                </a>
                <a
                  href={`tel:${dict.contactPage.phone.replace(/[^+0-9]/g, "")}`}
                  className="block font-mono text-[14px] text-muted hover:text-foreground"
                >
                  {dict.contactPage.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="space-y-px bg-line">
              {fields.map((f) => (
                <a
                  key={f.key}
                  href={`mailto:${dict.contactPage.email}?subject=${encodeURIComponent(f.label)}`}
                  className="group flex items-center justify-between bg-background p-8 transition-colors hover:bg-charcoal"
                >
                  <div className="font-display text-xl text-foreground transition-colors group-hover:text-gold sm:text-2xl">
                    {f.label}
                  </div>
                  <span className="text-gold transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
