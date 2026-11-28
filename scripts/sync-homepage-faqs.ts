import fs from "node:fs";
import path from "node:path";

type Faq = { q: string; a: string };
type SchemaNode = Record<string, unknown>;

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
})[character]!);

/** One homepage graph and one set of metadata, before and after React loads. */
export function syncHomepageFaqs(faqs: Faq[], homepageSchema?: object): void {
  const file = path.resolve("index.html");
  let html = fs.readFileSync(file, "utf8");
  const canonical = html.match(/<link\b[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)/i)?.[1];
  const schemaPattern = /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/i;
  const existingSchema = html.match(schemaPattern);
  if (!canonical || !existingSchema || !html.includes("</main>")) {
    throw new Error("Homepage sync requires a canonical URL, structured data, and main element");
  }
  const graph = (homepageSchema ?? JSON.parse(existingSchema[1])) as SchemaNode;
  const nodes = ((graph["@graph"] as SchemaNode[] | undefined) ?? [graph])
    .filter(node => node["@type"] !== "FAQPage");
  const page = nodes.find(node => node["@type"] === "WebPage");
  // The publisher site retains its existing graph and uses its visible metadata.
  if (!homepageSchema && page) {
    page.name = html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1];
    page.description = html.match(/<meta\b[^>]*name="description"[^>]*content="([^"]*)"/i)?.[1];
  }
  nodes.push({
    "@type": "FAQPage",
    "@id": `${canonical}#faq`,
    isPartOf: { "@id": `${canonical}#webpage` },
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question", name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  });
  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": nodes }).replace(/</g, "\\u003c");
  // Helmet replaces only owned tags. Verification tokens remain unmanaged.
  const ownership = homepageSchema ? ' data-rh="true"' : "";
  html = html.replace(/\s*<!-- homepage-faq-schema:start -->[\s\S]*?<!-- homepage-faq-schema:end -->/, "");
  html = html.replace(schemaPattern, () => `<script type="application/ld+json"${ownership}>${json}</script>`);

  if (page && typeof page.name === "string" && typeof page.description === "string") {
    const values: Record<string, string> = {
      description: page.description,
      "og:title": page.name, "og:description": page.description,
      "twitter:title": page.name, "twitter:description": page.description,
    };
    html = html.replace(/<title[^>]*>[^<]*<\/title>/i, () => `<title>${escapeHtml(page.name as string)}</title>`);
    const managed = new Set([
      "description", "robots", "author", "twitter:card", "twitter:title", "twitter:description", "twitter:image", "twitter:url",
      "og:title", "og:description", "og:image", "og:image:alt", "og:image:width", "og:image:height", "og:image:type",
      "og:type", "og:locale", "og:url", "og:site_name",
    ]);
    html = html.replace(/<(?:meta|link)\b[^>]*>/gi, tag => {
      const key = tag.match(/\b(?:name|property)=["']([^"']+)/i)?.[1];
      if (key && values[key]) {
        tag = tag.replace(/\bcontent=(["'])([\s\S]*?)\1/i, () => `content="${escapeHtml(values[key])}"`);
      }
      const canonicalLink = /\brel=["']canonical["']/i.test(tag);
      const englishAlternate = /\brel=["']alternate["']/i.test(tag) && /\bhreflang=["']en["']/i.test(tag);
      if (homepageSchema && (managed.has(key ?? "") || canonicalLink || englishAlternate) && !/\bdata-rh=/i.test(tag)) {
        tag = tag.replace(/^<(meta|link)\b/i, '<$1 data-rh="true"');
      }
      return tag;
    });
  }

  const section = `<!-- homepage-faqs:start -->
        <section id="faq" aria-labelledby="homepage-faq-title">
          <h2 id="homepage-faq-title">Frequently asked questions</h2>
${faqs.map(({ q, a }) => `          <h3>${escapeHtml(q)}</h3>\n          <p>${escapeHtml(a)}</p>`).join("\n")}
        </section>
        <!-- homepage-faqs:end -->`;
  const sectionPattern = /<!-- homepage-faqs:start -->[\s\S]*?<!-- homepage-faqs:end -->/;
  html = sectionPattern.test(html)
    ? html.replace(sectionPattern, () => section)
    : html.replace("</main>", () => `${section}\n      </main>`);
  if (fs.readFileSync(file, "utf8") !== html) fs.writeFileSync(file, html, "utf8");
}
