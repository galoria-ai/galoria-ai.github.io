export const site = {
  name: "Galoria AI",
  productName: "Galoria",
  url: "https://galoriaai.com",
  helpHref: "/#faq",
  supportEmail: "support@computoraai.com",
  analyticsMeasurementId: "",
};

export const product = {
  productName: "Galoria",
  price: { amount: 10.99, display: "$10.99" },
  checkoutUrl: "https://computora.gumroad.com/l/galoria",
  downloadHref: "#download",
  platforms: {
    supported: ["Windows 10", "Windows 11"],
    positioning: "Windows-only AI photo organizer",
    requirements: [
      "Windows 10 or Windows 11",
      "Local access to the folders you choose to scan",
      "Enough free disk space for moved image files",
      "Internet access for license activation; image analysis and planning run locally",
    ],
  },
  claims: [
    "Scans image folders locally before any move is allowed",
    "Shows exact destinations, reasons, and conflict status in preview",
    "Lets you exclude items before confirmation",
    "Writes a local audit trail and supports undo",
    "The app workflow requires license activation",
  ],
  folders: [
    "Downloads",
    "Pictures",
    "Screenshots",
    "Camera Roll",
    "project folders",
    "archives",
    "memes",
    "mixed image folders",
  ],
  supportedFileTypes: {
    Images: ["JPG", "JPEG", "PNG", "WEBP", "GIF", "BMP", "TIFF", "HEIC", "HEIF"],
  },
};

export function checkoutUrl(): string {
  return product.downloadHref;
}

export function absoluteUrl(route = ""): string {
  return `${site.url}/${route ? `${route.replace(/^\/|\/$/g, "")}/` : ""}`;
}
