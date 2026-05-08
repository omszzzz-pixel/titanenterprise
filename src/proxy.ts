import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from "./i18n/config";

// Disabled-but-recognized locales — paths under these prefixes get redirected
// to the equivalent default-locale path instead of 404'ing.
const DISABLED_LOCALE_PREFIXES = ["ko"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const url = request.nextUrl.clone();

  for (const disabled of DISABLED_LOCALE_PREFIXES) {
    if (pathname === `/${disabled}` || pathname.startsWith(`/${disabled}/`)) {
      const rest = pathname === `/${disabled}` ? "" : pathname.slice(disabled.length + 1);
      url.pathname = `/${defaultLocale}${rest}`;
      return NextResponse.redirect(url);
    }
  }

  const hasLocale = (locales as readonly string[]).some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (hasLocale) return;

  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!_next|api|favicon.ico|logo|.*\\..*).*)",
  ],
};
