import { product, site } from "@/config/product";

export const docs = {
  install: {
    title: "How to Install Galoria",
    description:
      "Install Galoria on a supported Windows device and start with a small image folder before organizing larger collections.",
    sections: [
      {
        title: "Download Galoria",
        content: "Open the Download for Windows section on the official Galoria site, complete checkout with your preferred purchase option, and use the download instructions supplied with the purchase.",
      },
      {
        title: "Run the installer",
        content: `The supported systems are ${product.platforms.supported.join(", ")}. Use the installer provided for Windows.`,
      },
      {
        title: "Current release information",
        content: "These instructions apply to Galoria 0.2.0 and were reviewed on September 6, 2026. Use only a Galoria-labeled Windows package obtained through the official product flow.",
      },
      {
        title: "Choose a focused folder first",
        content: `Start with Downloads, Pictures, Screenshots, a camera roll export, or a folder of images small enough to review carefully.`,
      },
      {
        title: "Review before applying",
        content: `Galoria proposes categories and destination folders for review. Apply changes only after the preview matches how you want to find images later.`,
      },
      {
        title: "Need help",
        content: `Use the installation and troubleshooting pages on this site or contact ${site.supportEmail} for setup and purchase-delivery help.`,
      },
    ],
  },

  privacy: {
    title: "Galoria Privacy",
    description:
      "Learn how Galoria's local organization workflow reduces cloud exposure for image collections and sensitive photos.",
    sections: [
      {
        title: "Organization runs locally",
        content: `Galoria is positioned around local analysis. Images do not need to be uploaded to a cloud organizer for the organization workflow.`,
      },
      {
        title: "Download is separate from image organization",
        content: `Internet access is needed to download and activate the app. Image analysis and organization run locally without uploading image names or content to an organizer service.`,
      },
      {
        title: "Preview is still important",
        content: `Privacy does not prevent sorting mistakes. Review proposed categories and destinations before moving important images.`,
      },
    ],
  },

  troubleshooting: {
    title: "Galoria Troubleshooting",
    description:
      "Fix common Galoria installation, folder access, preview, and image-organizing issues.",
    sections: [
      {
        title: "Folder permissions",
        content: `Make sure Galoria can access the folder you selected. Start with a focused folder instead of a full drive.`,
      },
      {
        title: "Large folders",
        content: `Large folders can take longer to analyze and are harder to review. Test with a smaller representative image folder first.`,
      },
      {
        title: "Preview unexpected suggestions",
        content: `If suggestions do not match your workflow, do not apply them. Narrow the folder scope or organize a smaller batch.`,
      },
      {
        title: "Download or installer does not match",
        content: `Do not run a package that is not clearly labeled Galoria. Return to the official purchase library or contact ${site.supportEmail} with the order email and downloaded filename.`,
      },
      {
        title: "AI engine does not start",
        content: "Restart Windows after installation, confirm that security software has not quarantined a packaged runtime file, and reinstall from the official download. If the message names a missing DLL or dependency, include the complete error and Windows version when contacting support.",
      },
      {
        title: "Release and platform details",
        content: "This guide applies to Galoria 0.2.0 on Windows 10 and Windows 11. It was reviewed on September 6, 2026.",
      },
      {
        title: "Support",
        content: `For unresolved installation, purchase-delivery, or activation issues, contact ${site.supportEmail}.`,
      },
    ],
  },

  "how-it-works": {
    title: "How Galoria Works",
    description:
      "Understand how Galoria analyzes local image files, proposes destination folders, and keeps you in control with a preview step.",
    sections: [
      {
        title: "Select a folder",
        content: `Choose a mixed image folder such as Downloads, Pictures, Screenshots, a camera roll export, or a project folder.`,
      },
      {
        title: "Analyze locally",
        content: `Galoria uses filenames, folder context, metadata, and supported local image analysis to infer useful categories.`,
      },
      {
        title: "Preview the plan",
        content: `Review proposed categories and exact destination paths before images move.`,
      },
      {
        title: "Apply approved changes",
        content: `Apply changes only after the result matches your photo retrieval workflow.`,
      },
    ],
  },

  "supported-file-types": {
    title: "Supported File Types",
    description:
      "See the image formats Galoria can discover and organize in local folders.",
    sections: Object.entries(product.supportedFileTypes).map(([title, types]) => ({
      title,
      content: `${types.join(", ")} files are recognized by the scanner. HEIC and HEIF analysis depends on decoder support in the local runtime.`,
    })),
  },
};
