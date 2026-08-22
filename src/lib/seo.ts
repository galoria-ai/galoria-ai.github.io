import { absoluteUrl, product, site } from "@/config/product";

export interface FaqItem {
  q: string;
  a: string;
}

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: `${site.url}/`,
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: `${site.url}/`,
    publisher: { "@id": `${site.url}/#organization` },
  };
}

export function softwareApplicationSchema() {
  return {
    "@type": "SoftwareApplication",
    name: product.productName ?? site.productName,
    url: `${site.url}/`,
    applicationCategory: "FileManagementApplication",
    operatingSystem: product.platforms.supported.join(", "),
    description:
      "Galoria helps Windows users scan cluttered image folders locally, review exact destinations, and apply approved file moves with a local audit trail.",
    featureList: product.claims,
    publisher: { "@id": `${site.url}/#organization` },
  };
}

export function faqSchema(faqs: FaqItem[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; route?: string }>) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.route ?? ""),
    })),
  };
}

export function homepageSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      websiteSchema(),
      softwareApplicationSchema(),
      faqSchema(faqs),
    ],
  };
}

