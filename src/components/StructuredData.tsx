const SITE_URL = "https://titan-enterprise.kr";

export function OrganizationLD() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Titan-Enterprise",
    alternateName: ["타이탄엔터프라이즈", "Titan Enterprise"],
    url: SITE_URL,
    logo: `${SITE_URL}/logo/fulllogo.png`,
    image: `${SITE_URL}/logo/fulllogo.png`,
    description:
      "Titan-Enterprise (타이탄엔터프라이즈) designs, deploys, and licenses systematic trading infrastructure for institutions and professionals. Proprietary trading, education, and financial platform.",
    foundingDate: "2022",
    legalName: "Titan-Enterprise",
    taxID: "108-24-18998",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Suite 2901, S-Trenue, 37 Gukjegeumyung-ro 2-gil",
      addressLocality: "Yeongdeungpo-gu",
      addressRegion: "Seoul",
      postalCode: "07327",
      addressCountry: "KR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+82-2-6951-1028",
      email: "titan@titan-enterprise.kr",
      contactType: "customer service",
      areaServed: ["KR", "Worldwide"],
      availableLanguage: ["English", "Korean"],
    },
    founder: {
      "@type": "Person",
      name: "Min-sik Oh",
      alternateName: "오민식",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteLD() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Titan-Enterprise",
    alternateName: "타이탄엔터프라이즈",
    url: SITE_URL,
    description: "Bridging Financial and Technology",
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: "Titan-Enterprise",
      alternateName: "타이탄엔터프라이즈",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
