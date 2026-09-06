import { product, site } from "@/config/product";

export const homepageFaqs = [
  {
    q: "Does Galoria upload my photos?",
    a: "No. Galoria's organization workflow analyzes supported image files locally on your computer instead of uploading them to a cloud organizer.",
  },
  {
    q: "Can I preview changes before images move?",
    a: "Yes. Galoria is built around a review step so you can inspect proposed folders and filenames before applying changes.",
  },
  {
    q: "Can I undo changes?",
    a: "The app keeps a local history log and supports undo for the latest organization operation after changes are applied.",
  },
  {
    q: "Does it require a subscription?",
    a: `No. Galoria is offered as a one-time ${product.price.display} purchase rather than a recurring subscription.`,
  },
  {
    q: "Which operating systems are supported?",
    a: "Galoria supports Windows 10 and Windows 11.",
  },
  {
    q: "What kinds of images can it organize?",
    a: "Galoria is positioned for screenshots, camera photos, people shots, receipts, documents and scans, product images, wallpapers, memes, travel photos, food, pets, and design assets.",
  },
  {
    q: "Does it work without internet?",
    a: "Image analysis and organization run locally. Internet access is still needed to download and activate the app.",
  },
  {
    q: "How do I install it?",
    a: "Open Download for Windows on this page, complete checkout, and use the Galoria installer supplied through the official purchase flow. Start with a copied or noncritical image folder and review the proposed result before applying changes.",
  },
  {
    q: "What happens if it does not work on my device?",
    a: `Check the installation and troubleshooting pages, then contact ${site.supportEmail} with your Windows version, downloaded filename, and exact error message if the problem continues.`,
  },
];
