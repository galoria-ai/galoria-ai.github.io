import fs from "node:fs";
import path from "node:path";
import { JSDOM } from "jsdom";
import { describe, expect, it } from "vitest";

describe("Galoria free photo cleanup tool", () => {
  it("renders useful guidance and tracks and resets six steps locally", () => {
    const html = fs.readFileSync(path.resolve("dist/tools/index.html"), "utf8");
    const dom = new JSDOM(html, { url: "https://galoriaai.com/tools/", runScripts: "dangerously" });
    const document = dom.window.document;
    const inputs = Array.from(document.querySelectorAll<HTMLInputElement>('#tool-list input[type="checkbox"]'));

    expect(inputs).toHaveLength(6);
    expect(document.querySelector('link[rel="canonical"]')?.getAttribute("href")).toBe("https://galoriaai.com/tools/");
    expect(document.querySelector('a[href="/ai-photo-organizer/"]')).not.toBeNull();
    expect(document.querySelector('a[href="/docs/supported-file-types/"]')).not.toBeNull();
    expect(document.querySelector("main")?.textContent).toContain("does not detect duplicates");
    expect(html).toContain("@media(max-width:700px)");

    inputs[0].checked = true;
    inputs[0].dispatchEvent(new dom.window.Event("change", { bubbles: true }));
    expect(document.querySelector("#tool-progress")?.textContent).toBe("1 of 6 steps complete");
    expect(dom.window.localStorage.getItem("galoria-photo-cleanup-v1")).toBe("[0]");

    document.querySelector<HTMLButtonElement>("#tool-reset")?.click();
    expect(document.querySelector("#tool-progress")?.textContent).toBe("0 of 6 steps complete");
    expect(inputs.every((input) => !input.checked)).toBe(true);
    dom.window.close();
  });
});
