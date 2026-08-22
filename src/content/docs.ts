import { product } from "@/config/product";

export const docs = {
  install: {
    title: "How to Install Galoria",
    description:
      "Install Galoria on a supported Windows device and start with a small image folder before organizing larger collections.",
    sections: [
      {
        title: "Download Galoria",
        content: `Use the Windows download published on the product site, then run the setup file on a supported PC. A public Galoria release URL must be configured before deployment.`,
      },
      {
        title: "Run the installer",
        content: `The supported systems are ${product.platforms.supported.join(", ")}. Use the installer provided for Windows.`,
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
        content: "Use the installation and troubleshooting pages on this site for setup guidance.",
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
        title: "Support",
        content: "Use the documentation pages on this site for installation, privacy, and troubleshooting guidance.",
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
