// @vitest-environment jsdom
import fs from "node:fs";
import path from "node:path";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { afterEach, describe, expect, it, vi } from "vitest";
import PricingRoute from "@/components/PricingRoute";
import Navbar from "@/components/Navbar";
import SeoContentPage from "@/pages/SeoContentPage";
import DocsPage from "@/pages/DocsPage";
import CategoryPage from "@/pages/CategoryPage";
import { getPricingNavigation } from "@/lib/pricingNavigation";
import * as analytics from "@/lib/analytics";
import { site } from "@/config/product";

vi.mock("@/components/SeoHead", () => ({ default: () => null }));
afterEach(() => { cleanup(); vi.restoreAllMocks(); });

describe("content-page pricing navigation", () => {
  it("covers every eligible sitemap URL exactly once in initial HTML", () => {
    const sitemap = new DOMParser().parseFromString(fs.readFileSync("public/sitemap.xml", "utf8"), "text/xml");
    const urls = [...new Set([...sitemap.querySelectorAll("loc")].map(item => item.textContent!))];
    let affected = 0;
    for (const url of urls) {
      const route = new URL(url).pathname.replace(/^\/+|\/+$/g, "");
      if (!route) continue;
      const markup = fs.readFileSync(path.join("public", route, "index.html"), "utf8");
      const document = new DOMParser().parseFromString(markup, "text/html");
      const navigation = getPricingNavigation(route);
      const blocks = document.querySelectorAll("[data-pricing-route]");
      if (!navigation) {
        expect(blocks.length, url).toBe(0);
        continue;
      }
      affected++;
      expect(blocks.length, url).toBe(1);
      expect(blocks[0].querySelector("p")?.textContent, url).toBe(navigation.context);
      expect(blocks[0].querySelectorAll("a").length, url).toBe(1);
      const link = blocks[0].querySelector("a")!;
      expect(link.textContent, url).toBe("See pricing");
      expect(new URL(link.getAttribute("href")!, url).href, url).toBe(site.url + "/#download");
      expect(blocks[0].textContent, url).toContain("Windows 10 and 11");
      expect(blocks[0].textContent, url).not.toMatch(/macOS|bundle|\$/);
      expect(document.querySelector("main .cta"), url).toBeNull();
      expect(document.querySelector('link[rel="canonical"]')?.getAttribute("href"), url).toBe(url);
    }
    expect(affected).toBe(18);
  });

  it.each([
    ["/alternatives/", <SeoContentPage />, "*"],
    ["/docs/how-it-works/", <DocsPage />, "/docs/:slug/"],
    ["/category/windows/", <CategoryPage />, "/category/:slug/"],
  ])("renders one matching pricing route for %s", (url, component, route) => {
    render(<HelmetProvider><MemoryRouter initialEntries={[url as string]}><Routes><Route path={route as string} element={component} /></Routes></MemoryRouter></HelmetProvider>);
    expect(screen.getAllByRole("link", { name: "See pricing" })).toHaveLength(1);
    expect(screen.getByRole("link", { name: "See pricing" }).getAttribute("href")).toBe("/#download");
    expect(document.querySelectorAll("[data-pricing-route]")).toHaveLength(1);
  });

  it.each(["/", "/ai-photo-organizer/", "/docs/privacy/", "/docs/troubleshooting/", "/category/privacy/", "/legal/", "/terms/"])("does not add a promotion to excluded or already-clear page %s", route => {
    expect(getPricingNavigation(route)).toBeNull();
    const { container } = render(<PricingRoute route={route} />);
    expect(container.firstChild).toBeNull();
  });

  it("keeps the existing opt-in analytics hook on replaced links", () => {
    const track = vi.spyOn(analytics, "trackEvent");
    render(<PricingRoute route="docs/how-it-works" trackClick />);
    fireEvent.click(screen.getByRole("link", { name: "See pricing" }));
    expect(track).toHaveBeenCalledWith("download_cta_clicked", { location: "docs/how-it-works" });
    expect(track.mock.calls.some(([event]) => String(event) === "purchase")).toBe(false);
  });

  it("takes the shared header to the homepage, not a nonexistent local fragment", () => {
    render(<Navbar />);
    expect(screen.getByRole("link", { name: "Download for Windows" }).getAttribute("href")).toBe("/#download");
  });
});
