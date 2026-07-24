import type { MetadataRoute } from "next";
import { SITE_URL } from "./[lang]/seo";

const routes = [
  "/home",
  "/about",
  "/contacts",
  "/reviews",
  "/services/plugins",
  "/services/mods",
  "/services/design",
  "/services/skins",
  "/services/building",
  "/services/servers",
  "/services/sites",
  "/policies/privacy-policy",
  "/policies/cookies-policy",
];

const locales = ["uk", "en"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((route) =>
    locales.map((lang) => ({
      url: `${SITE_URL}/${lang}${route}`,
      changeFrequency: "monthly" as const,
      priority: route === "/home" ? 1 : 0.7,
      alternates: {
        languages: {
          uk: `${SITE_URL}/uk${route}`,
          en: `${SITE_URL}/en${route}`,
        },
      },
    })),
  );
}
