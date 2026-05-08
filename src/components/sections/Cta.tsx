import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { Container } from "@/components/ui/Container";
import { Eyebrow, Section } from "@/components/ui/Section";

type CtaDict = {
  eyebrow: string;
  heading: string;
  body: string;
  button: string;
};

export function Cta({ lang, dict }: { lang: Locale; dict: CtaDict }) {
  return (
    <Section className="hairline-top relative overflow-hidden">
      <div className="absolute inset-0 radial-fade opacity-60" aria-hidden />
      <Container size="narrow" className="relative">
        <div className="text-center">
          <Eyebrow className="inline-block">{dict.eyebrow}</Eyebrow>
          <h2 className="mt-8 font-display text-4xl leading-[1.15] text-foreground sm:text-5xl lg:text-6xl">
            {dict.heading}
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-[15px] leading-[1.7] text-muted">
            {dict.body}
          </p>
          <Link
            href={`/${lang}/contact`}
            className="mt-12 inline-flex items-center gap-3 border border-gold bg-gold px-9 py-5 text-[12px] tracking-[0.18em] uppercase text-black transition-colors hover:bg-gold-bright"
          >
            {dict.button} <span>→</span>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
