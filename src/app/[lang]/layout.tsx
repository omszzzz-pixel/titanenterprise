import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Cormorant_Garamond, Inter, JetBrains_Mono, Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import "../globals.css";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "./dictionaries";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { OrganizationLD, WebSiteLD } from "@/components/StructuredData";

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

const SITE_URL = "https://titan-enterprise.kr";
const SITE_TITLE = "Titan-Enterprise · 타이탄엔터프라이즈";
const SITE_TAGLINE = "Bridging Financial and Technology";
const SITE_DESCRIPTION =
  "Titan-Enterprise(타이탄엔터프라이즈)는 시스템 트레이딩 자체 개발·운용, 시스템 트레이딩 교육, 그리고 금융 플랫폼 사업을 영위하는 회사입니다. 글로벌 시장에서 금융과 기술을 잇습니다. — Systematic trading, education, and financial platform infrastructure.";

const KEYWORDS = [
  "타이탄엔터프라이즈",
  "타이탄 엔터프라이즈",
  "Titan-Enterprise",
  "Titan Enterprise",
  "시스템 트레이딩",
  "시스템트레이딩",
  "퀀트 트레이딩",
  "알고리즘 트레이딩",
  "systematic trading",
  "quant trading",
  "금융 플랫폼",
  "트레이딩 교육",
  "시스템트레이딩 교육",
  "한국 헤지펀드",
  "여의도 트레이딩",
  "오민식",
  "titan-enterprise.kr",
];

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(props: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await props.params;
  if (!isLocale(lang)) return {};

  const fullTitle = `${SITE_TITLE} | ${SITE_TAGLINE}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: fullTitle,
      template: `%s | ${SITE_TITLE}`,
    },
    description: SITE_DESCRIPTION,
    keywords: KEYWORDS,
    applicationName: "Titan-Enterprise",
    authors: [{ name: "Titan-Enterprise", url: SITE_URL }],
    creator: "Titan-Enterprise",
    publisher: "Titan-Enterprise",
    category: "Financial Services",
    alternates: {
      canonical: `/${lang}`,
    },
    icons: {
      icon: [
        { url: "/logo/mark.png", type: "image/png" },
      ],
      shortcut: "/logo/mark.png",
      apple: "/logo/mark.png",
    },
    manifest: "/manifest.webmanifest",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: fullTitle,
      description: SITE_DESCRIPTION,
      url: `${SITE_URL}/${lang}`,
      siteName: "Titan-Enterprise · 타이탄엔터프라이즈",
      locale: "ko_KR",
      alternateLocale: ["en_US"],
      type: "website",
      images: [
        {
          url: "/logo/fulllogo.png",
          width: 1280,
          height: 1024,
          alt: "Titan-Enterprise · 타이탄엔터프라이즈",
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: SITE_DESCRIPTION,
      images: ["/logo/fulllogo.png"],
    },
    verification: {
      google: "mMDOEIKm5w83qUZjFOwnZvbZbqoB5ZhuBBIpc6X2od4",
      other: {
        "naver-site-verification": "3ad3f68152805ea10a73a09ecfe0c36f084b2d77",
      },
    },
    formatDetection: {
      telephone: true,
      address: true,
      email: true,
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
        <OrganizationLD />
        <WebSiteLD />
        <Header lang={lang as Locale} nav={dict.nav} />
        <main className="relative">{props.children}</main>
        <Footer lang={lang as Locale} dict={dict} />
      </body>
    </html>
  );
}
