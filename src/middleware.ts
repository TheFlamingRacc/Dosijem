import { NextRequest, NextResponse } from "next/server";

const locales = ["uk", "en"] as const;
const defaultLocale = "uk";

function detectLocale(req: NextRequest): string {
  const accept = req.headers.get("accept-language");
  if (accept) {
    const requested = accept
      .split(",")
      .map((part) => part.split(";")[0].trim().toLowerCase());
    for (const lang of requested) {
      if (lang.startsWith("uk")) return "uk";
      if (lang.startsWith("en")) return "en";
    }
  }
  return defaultLocale;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const pathLocale = locales.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  // Already localized — forward the locale to the root layout via a header
  // so <html lang> can be set correctly per request.
  if (pathLocale) {
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("x-locale", pathLocale);
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  // No locale in the path — negotiate from Accept-Language and redirect.
  const locale = detectLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "/home" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Run on everything except Next internals, API routes and files with an
  // extension (static assets, favicon, sitemap.xml, robots.txt, …).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
