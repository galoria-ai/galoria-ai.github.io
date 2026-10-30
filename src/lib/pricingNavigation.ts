import { seoPagesByRoute } from "../content/seoPages";
import { site } from "../config/product";

const excluded = new Set([
  "", "ai-photo-organizer", "docs/privacy", "docs/troubleshooting", "category/privacy",
  "privacy", "legal", "terms", "terms-of-service", "support",
]);

export function getPricingNavigation(path: string) {
  const route = path.replace(/^\/+|\/+$/g, "");
  if (excluded.has(route)) return null;
  const page = seoPagesByRoute[route];
  if (page && (page.indexable === false || (page.canonicalUrl && !page.canonicalUrl.startsWith(site.url + "/")))) return null;
  if (!page && !/^(docs|category)\//.test(route)) return null;

  const context = route.startsWith("category/")
    ? "For the photo topics covered here, Galoria offers local image organization with reviewed file moves on Windows 10 and 11."
    : route.startsWith("docs/")
      ? "Galoria runs on Windows 10 and 11 and lets you preview photo destinations before applying moves."
      : "Galoria supports review-first photo organization with local image analysis on Windows 10 and 11.";

  return { href: "/#download", context, route };
}
