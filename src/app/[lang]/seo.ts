import type { Metadata } from "next";
import type { Locale } from "./dictionaries";

export const SITE_URL = "https://www.dosijem.com";
export const SITE_NAME = "DOSIJEM";
export const OG_IMAGE = "/DOSIJEM_logo_web.png";

const ogLocale: Record<Locale, string> = {
  uk: "uk_UA",
  en: "en_US",
};

type BuildArgs = {
  lang: Locale;
  /** Route path after the locale segment, e.g. "/about" or "/services/plugins". */
  path: string;
  title: string;
  description: string;
  /** When true, the title is used verbatim (no "| DOSIJEM" template suffix). */
  absoluteTitle?: boolean;
};

export function buildMetadata({
  lang,
  path,
  title,
  description,
  absoluteTitle = false,
}: BuildArgs): Metadata {
  const canonical = `${SITE_URL}/${lang}${path}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
      languages: {
        uk: `${SITE_URL}/uk${path}`,
        en: `${SITE_URL}/en${path}`,
        "x-default": `${SITE_URL}/uk${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type: "website",
      locale: ogLocale[lang],
      images: [{ url: OG_IMAGE, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}
