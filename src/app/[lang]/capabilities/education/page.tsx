import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "../../dictionaries";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Section";
import { Cta } from "@/components/sections/Cta";

export default async function EducationPage(props: PageProps<"/[lang]/capabilities/education">) {
  const { lang } = await props.params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);

  return (
    <>
      <div className="pt-40 pb-24">
        <Container>
          <Eyebrow>{dict.educationPage.eyebrow}</Eyebrow>
          <h1 className="mt-8 max-w-4xl font-display text-4xl leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
            {dict.educationPage.title}
          </h1>
          <p className="mt-10 max-w-3xl font-display text-xl leading-[1.6] text-muted sm:text-2xl">
            {dict.educationPage.lead}
          </p>

          <div className="mt-24 space-y-px bg-line">
            {dict.educationPage.modules.map((m) => (
              <div key={m.no} className="bg-background p-10">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
                  <div className="md:col-span-2">
                    <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-gold">
                      {m.no}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-display text-2xl leading-snug text-foreground">
                      {m.title}
                    </h3>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-[14px] leading-[1.75] text-muted">{m.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
      <Cta lang={lang as Locale} dict={dict.cta} />
    </>
  );
}
