// @vitest-environment jsdom
import "@testing-library/jest-dom/vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import App from "@/App";

// Hold route downloads pending so the loading interval can be tested directly.
vi.mock("@/pages/Index", () => new Promise(() => {}));
vi.mock("@/pages/NotFound", () => new Promise(() => {}));
vi.mock("@/components/ui/sonner", () => ({ Toaster: () => null }));

afterEach(() => {
  cleanup();
  window.history.replaceState({}, "", "/");
});

describe("initial-page loading content", () => {
  const initialPage = {
    pathname: "/",
    html: '<main><h1>Galoria introduction</h1><a href="https://computora.gumroad.com/l/galoria" data-product-checkout="true">Get Galoria</a></main>',
  };

  it("keeps the initial heading and checkout link available while the route downloads", () => {
    window.history.replaceState({}, "", "/");
    render(<App initialPage={initialPage} />);
    expect(screen.getByRole("heading", { name: "Galoria introduction" })).toBeVisible();
    expect(screen.getByRole("link", { name: "Get Galoria" })).toHaveAttribute(
      "href", "https://computora.gumroad.com/l/galoria",
    );
  });

  it("does not display homepage content while a different route downloads", () => {
    window.history.replaceState({}, "", "/unknown-performance-test");
    render(<App initialPage={initialPage} />);
    expect(screen.queryByText("Galoria introduction")).toBeNull();
  });
});
