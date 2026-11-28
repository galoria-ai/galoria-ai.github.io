import { absoluteUrl, product, site } from "@/config/product";

export interface FaqItem {
  q: string;
  a: string;
}

export const homepageMetadata = {
  title: "AI Photo Organizer for Windows | Galoria AI",
  description:
    "Galoria organizes screenshots, camera photos, and mixed image folders on Windows with local analysis, exact destination previews, and undo.",
};

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: `${site.url}/`,
    sameAs: ["https://github.com/galoria-ai"],
    contactPoint: {
      "@type": "ContactPoint",
      email: site.supportEmail,
      contactType: "customer support",
    },
    parentOrganization: {
      "@type": "Organization",
      "@id": "https://computoraai.com/#organization",
      name: "Computora AI",
      url: "https://computoraai.com/",
    },
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: `${site.url}/`,
    publisher: { "@id": `${site.url}/#organization` },
    inLanguage: "en",
  };
}

export function homepagePageSchema() {
  return {
    "@type": "WebPage",
    "@id": `${site.url}/#webpage`,
    url: `${site.url}/`,
    name: homepageMetadata.title,
    description: homepageMetadata.description,
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": `${site.url}/#software` },
    inLanguage: "en",
  };
}

export function softwareApplicationSchema() {
  return {
    "@type": "SoftwareApplication",
    "@id": `${site.url}/#software`,
    name: product.productName ?? site.productName,
    url: `${site.url}/`,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: product.platforms.supported.join(", "),
    description:
      "Galoria helps Windows users scan cluttered image folders locally, review exact destinations, and apply approved file moves with a local audit trail.",
    featureList: product.claims,
    offers: {
      "@type": "Offer",
      price: product.price.amount.toFixed(2),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: product.checkoutUrl,
    },
    publisher: { "@id": `${site.url}/#organization` },
  };
}

export function faqSchema(faqs: FaqItem[], id?: string) {
  return {
    "@type": "FAQPage",
    ...(id ? { "@id": id } : {}),
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
      homepagePageSchema(),
      softwareApplicationSchema(),
      { ...faqSchema(faqs, `${site.url}/#faq`), isPartOf: { "@id": `${site.url}/#webpage` } },
    ],
  };
}

