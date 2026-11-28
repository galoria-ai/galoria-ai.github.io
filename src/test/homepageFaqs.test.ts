import fs from "node:fs";
import path from "node:path";
import { JSDOM } from "jsdom";
import { describe, expect, it } from "vitest";
import { homepageFaqs } from "../content/homepageFaqs";

describe("crawlable homepage answers", () => {
  it("provides the interactive FAQ answers and matching schema without JavaScript", () => {
    const dom = new JSDOM(fs.readFileSync(path.resolve("index.html"), "utf8"));
    const document = dom.window.document;
    const section = document.querySelector("#faq");
    expect(document.querySelectorAll("#faq")).toHaveLength(1);
    const schemas = (Array.from(document.querySelectorAll('script[type="application/ld+json"]')) as Element[])
      .map(script => JSON.parse(script.textContent || "{}"));
    expect(schemas).toHaveLength(1);
    const nodes = schemas.flatMap(schema => schema["@graph"] || [schema]);
    const faqs = nodes.filter(node => node["@type"] === "FAQPage");
    expect(faqs).toHaveLength(1);
    const faq = faqs[0];
    const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute("href");
    expect(document.querySelectorAll('link[rel="canonical"]')).toHaveLength(1);
    expect(document.querySelectorAll('meta[name="description"]')).toHaveLength(1);
    expect(document.querySelectorAll('meta[name="robots"]')).toHaveLength(1);
    expect(faq["@id"]).toBe(`${canonical}#faq`);
    expect(faq.isPartOf).toEqual({ "@id": `${canonical}#webpage` });
    const page = nodes.find(node => node["@type"] === "WebPage");
    expect(page.name).toBe(document.title);
    expect(page.description).toBe(document.querySelector('meta[name="description"]')?.getAttribute("content"));
    const ids = nodes.map(node => node["@id"]).filter(Boolean);
    expect(new Set(ids).size).toBe(ids.length);
    expect(faq.mainEntity).toHaveLength(homepageFaqs.length);
    homepageFaqs.forEach(({ q, a }, index) => {
      expect(section?.textContent).toContain(q);
      expect(section?.textContent).toContain(a);
      expect(faq.mainEntity[index]).toMatchObject({ name: q, acceptedAnswer: { text: a } });
    });
    dom.window.close();
  });
});
