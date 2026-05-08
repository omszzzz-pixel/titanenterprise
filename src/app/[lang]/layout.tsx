import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Cormorant_Garamond, Inter, JetBrains_Mono, Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import "../globals.css";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "./dictionaries";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const notoSerifKR = Noto_Serif_KR({
  variable: "--font-noto-serif-kr",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(props: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await props.params;
  if (!isLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    metadataBase: new URL("https://titan-enterprise.kr"),
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      type: "website",
      locale: "en_US",
    },
  };
}

export default async function RootLayout(props: LayoutProps<"/[lang]">) {
  const { lang } = await props.params;
  if (!isLocale(lang)) notFound();

  const dict = await getDictionary(lang as Locale);

  return (
    <html
      lang={lang}
      className={`${inter.variable} ${cormorant.variable} ${jetbrains.variable} ${notoSansKR.variable} ${notoSerifKR.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background">
        <Header lang={lang as Locale} nav={dict.nav} />
        <main className="relative">{props.children}</main>
        <Footer lang={lang as Locale} dict={dict} />
      </body>
    </html>
  );
}
