import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "./dictionaries";
import { Hero } from "@/components/sections/Hero";
import { Ticker } from "@/components/sections/Ticker";
import { Metrics } from "@/components/sections/Metrics";
import { Capabilities } from "@/components/sections/Capabilities";
import { Cta } from "@/components/sections/Cta";

export default async function HomePage(props: PageProps<"/[lang]">) {
  const { lang } = await props.params;
  if (!isLocale(lang)) notFound();

  const dict = await getDictionary(lang as Locale);

  return (
    <>
      <Hero lang={lang as Locale} dict={dict.hero} />
      <Ticker items={dict.ticker.items} />
      <Metrics dict={dict.metrics} />
      <Capabilities lang={lang as Locale} dict={dict.capabilities} />
      <Cta lang={lang as Locale} dict={dict.cta} />
    </>
  );
}
