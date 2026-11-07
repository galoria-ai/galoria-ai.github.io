export type SeoPageKind = "landing" | "guide" | "comparison" | "use-case" | "feature" | "docs";

export type Topic = "photos" | "screenshots" | "windows" | "privacy" | "workflows";

export interface SeoExample {
  title: string;
  before: string;
  after: string;
}

export interface SeoFaq {
  question: string;
  answer: string;
}

export interface ContextualLink {
  before: string;
  anchor: string;
  href: string;
  after: string;
}

export interface SeoComparison {
  title: string;
  summary: string;
  headers?: { option: string; bestFor: string; tradeoff: string };
  rows: Array<{ option: string; bestFor: string; tradeoff: string; sources?: Array<{ label: string; url: string }> }>;
}

export interface SeoEvidence {
  title: string;
  summary: string;
  facts: Array<{
    label: string;
    value: string;
  }>;
  media: Array<{
    kind: "image" | "video";
    src: string;
    alt: string;
    caption: string;
  }>;
  note: string;
}

export interface SeoPage {
  route: string;
  kind: SeoPageKind;
  topic: Topic;
  title: string;
  h1: string;
  description: string;
  eyebrow: string;
  updatedAt: string;
  directAnswer: string;
  problemTitle: string;
  problem: string[];
  contextualLinks?: ContextualLink[];
  steps: string[];
  examples: SeoExample[];
  comparison: SeoComparison;
  comparisonFirst?: boolean;
  faqs: SeoFaq[];
  related: string[];
  sources?: Array<{ label: string; url: string; note: string }>;
  evidence?: SeoEvidence;
  indexable?: boolean;
}

const updatedAt = "2026-09-08";

export const seoPages: SeoPage[] = [
  {
  "route": "ai-photo-organizer",
  "kind": "landing",
  "topic": "photos",
  "title": "Local AI Photo Organizer for Windows",
  "h1": "AI Photo Organizer for Windows",
  "description": "Organize screenshots, camera photos, receipts, memes, and design assets on Windows with local AI. Review every destination before images move.",
  "eyebrow": "Local photo organization",
  "updatedAt": "2026-10-28",
  "directAnswer": "Galoria is a $14.99 one-time AI photo organizer for Windows 10 and 11. It organizes JPG, JPEG, PNG, WEBP, GIF, BMP, TIFF, HEIC, and HEIF files. Local analysis combines filenames, folder context, metadata, dimensions, and optional visual captions from the packaged model, then proposes categories such as Photos, Screenshots, Receipts, Documents, Design Assets, and Memes. Review each proposed destination and choose Move or Keep before images move. Download, license activation, and periodic license validation require internet access; the packaged model and organization workflow run locally without a separate model download.",
  "problemTitle": "Why photo libraries get hard to browse",
  "problem": [
    "Windows photo folders often mix camera imports, screenshots, memes, wallpapers, receipts, scanned documents, design assets, and exports from other apps. A folder can contain useful images without revealing what any of them are for.",
    "Manual sorting is slow when filenames do not explain the image. You usually need a combination of folder context, image type, and a review step to keep the result usable later."
  ],
  "steps": [
    "Choose one mixed image folder, such as Downloads or Pictures.",
    "Let Galoria inspect filenames and local image signals on your PC.",
    "Review destinations and conflicts, then exclude unsuitable suggestions and handle them manually.",
    "Apply only the organization plan that matches how you browse images later."
  ],
  "examples": [
    {
      "title": "Mixed downloads",
      "before": "IMG_4829.jpg, Screenshot 2026-08-01.png, meme_004.webp, receipt.jpg",
      "after": "Photos/Camera, Screenshots/Work, Memes, and Receipts"
    },
    {
      "title": "Creative project",
      "before": "logo draft.png, reference 1.jpg, color palette.webp",
      "after": "Design/Logos, Design/References, Design/Palettes"
    }
  ],
  "comparison": {
    "title": "AI sorting, manual sorting, or cloud AI?",
    "summary": "The best choice depends on privacy expectations, the size of the library, and how much review you want.",
    "rows": [
      {
        "option": "Galoria",
        "bestFor": "Local Windows photo sorting with preview-first control",
        "tradeoff": "Requires reviewing the proposed plan"
      },
      {
        "option": "Manual sorting",
        "bestFor": "Small image folders with only a few files",
        "tradeoff": "Becomes repetitive as the library grows"
      },
      {
        "option": "Cloud AI organizers",
        "bestFor": "Hosted workflows where image upload is acceptable",
        "tradeoff": "Files may leave your device during analysis"
      }
    ]
  },
  "faqs": [
    {
      "question": "Does Galoria upload my photos?",
      "answer": "No. The workflow is designed to analyze supported image files locally on Windows before any move is applied."
    },
    {
      "question": "Can I review the plan first?",
      "answer": "Yes. Galoria is built around a preview step so you can inspect destinations and conflicts before changes are applied."
    },
    {
      "question": "What kinds of images work best?",
      "answer": "Mixed folders with screenshots, camera photos, memes, wallpapers, design assets, and scanned documents are the best fit."
    },
    {
      "question": "Which image formats can Galoria organize?",
      "answer": "Galoria supports JPG, JPEG, PNG, WEBP, GIF, BMP, TIFF, HEIC, and HEIF image files. The information available for analysis varies by format, so review the proposed destination for each file before applying a move."
    },
    {
      "question": "Does Galoria download an AI model while organizing photos?",
      "answer": "No. The installer packages the local image model, and Galoria loads it from the installed application without a separate model download. Internet access is still required to download Galoria, activate a license, and periodically validate that license."
    },
    {
      "question": "What are the limits of Galoria's image analysis?",
      "answer": "Galoria uses available filename, folder, metadata, dimension, and optional local caption signals. Visual captions are reserved for uncertain items and bounded per scan. Signals vary by format and ambiguous images may still be categorized incorrectly, so review, reassign, or exclude them before applying the plan."
    },
    {
      "question": "Can Galoria undo a photo organization run?",
      "answer": "Galoria records applied moves in local history and can undo the latest organization operation. Undo requires a valid license and restores files from that recorded operation; keep a separate backup before organizing important libraries."
    }
  ],
  "evidence": {
    "title": "Real interface captures and tested classification cases",
    "summary": "The captures below show Galoria's local picture-folder workflow and a resulting Windows folder structure. On September 6, 2026, all 26 backend tests passed, including 12 representative filename, metadata, and caption classification cases plus uncertainty and false-positive checks.",
    "facts": [
      {
        "label": "Backend regression suite",
        "value": "26 of 26 tests passed"
      },
      {
        "label": "Representative category fixtures",
        "value": "12 of 12 passed"
      },
      {
        "label": "Test-suite runtime",
        "value": "1.986 seconds"
      },
      {
        "label": "Test computer",
        "value": "Windows 11 Pro, Core i5-8350U, 8 GB RAM"
      }
    ],
    "media": [
      {
        "kind": "image",
        "src": "/evidence/galoria-folder-step.png",
        "alt": "Galoria AI photo organizer asking the user to choose a local picture folder",
        "caption": "Galoria begins with a local picture folder and states that nothing moves until the plan is approved."
      },
      {
        "kind": "image",
        "src": "/evidence/galoria-output.png",
        "alt": "Windows File Explorer showing folders produced by a Galoria image organization run",
        "caption": "A local demonstration output with Design Assets, Documents, Miscellaneous, Photos, and Screenshots folders."
      }
    ],
    "note": "The 12 fixtures are curated regression cases, not a universal accuracy percentage. Test-suite runtime is also not end-to-end photo-library speed; image decoding, optional visual analysis, storage, and hardware affect real runs."
  },
  "related": [
    "blog/ai-photo-organizer-classification-test",
    "organize-photos-with-ai",
    "offline-ai-photo-organizer",
    "automatic-photo-organizer"
  ],
  "contextualLinks": [
    {
      "before": "For screenshot-heavy folders, choose between ",
      "anchor": "reviewed image moves and OCR text extraction",
      "href": "/organize-screenshots-automatically/",
      "after": "."
    }
  ]
},
  {
    route: "photo-organizer-windows",
    kind: "landing",
    topic: "windows",
    title: "Photo Organizer for Windows: Choose the Right Tool",
    h1: "Photo Organizer for Windows",
    description:
      "Compare Galoria, Microsoft Photos, digiKam, and Google Photos for mixed folders, family collections, people search, duplicates, and cost.",
    eyebrow: "Windows photo workflow",
    updatedAt: "2026-11-07",
    directAnswer:
      "For mixed screenshots and downloaded images that you want physically moved into ordinary Windows folders, consider Galoria after reviewing its proposed destinations. For a family collection with albums, people and duplicate-search tools, choose digiKam. Microsoft Photos is a free starting point for browsing and manually arranging local folders; Google Photos suits people who want cloud backup and search. Galoria is a $14.99 one-time purchase for Windows 10 and 11, not a face finder, near-duplicate cleaner or photo catalog.",
    comparisonFirst: true,
    problemTitle: "Windows image folders need a better structure than one giant pile",
    problem: [
      "A single folder can hold camera imports, screenshots, product images, memes, and scans. That is fine for storage but not for retrieval when you need one specific image later.",
      "Date-only folder structures are easy to create and difficult to browse. A useful layout usually combines purpose, subject, and review control instead of relying on timestamps alone.",
      "Camera imports can reuse names such as IMG_0001.jpg. The name alone cannot tell you whether two files contain the same picture. Galoria reserves destination names across the plan and chooses an available suffix when a path is already occupied. Review both the images and their complete destination paths before applying moves, and avoid editing the source or destination folders during the operation.",
      "For screenshots and downloaded images, decide whether you need files moved into folders or simply an easier way to browse them. Galoria proposes local folder moves after analyzing supported images; Microsoft Photos lets you add local folders, search by file name, date or type, and move photos manually. Neither should be described as a guaranteed screenshot recognizer.",
      "A family archive often needs albums, person labels and duplicate review rather than a one-time folder cleanup. digiKam offers those collection tools, including similarity-based duplicate search. Google Photos offers cloud backup and face groups where available. Galoria can flag candidates for exact byte-for-byte duplicates but does not automatically delete them or identify visually similar shots.",
      "This guide is published by Computora AI, the publisher of Galoria. The behavior described here concerns local image-folder organization, not phone importing, video management, or a guarantee that every file operation will succeed.",
    ],
    contextualLinks: [
      { before: "Because approved images move out of their original paths, see the guide to ", anchor: "ordinary folder output and catalog trade-offs", href: "/automatic-photo-organizer/", after: " before applying a large batch." },
      { before: "If you already use the Windows Photos app, compare ", anchor: "Microsoft Photos with Galoria's reviewed folder moves", href: "/alternatives/microsoft-photos/", after: " before buying another organizer." },
    ],
    steps: [
      "Start with one folder that mixes several image types.",
      "Let Galoria analyze the image collection on your Windows PC.",
      "Review the proposed categories and destination paths.",
      "Keep the categories that match how you actually search for images.",
    ],
    examples: [
      {
        title: "Illustrative mixed-folder plan (not a test result)",
        before: "Vacation photos, phone imports, and work screenshots in one folder",
        after: "Photos/Trips, Photos/Family, and Screenshots/Work",
      },
      {
        title: "Illustrative asset-folder plan (not a test result)",
        before: "Product shots, banner drafts, and social graphics mixed together",
        after: "Products, Marketing, and Social",
      },
      {
        title: "Illustrative filename collision",
        before: "Two different photos named IMG_0001.jpg would share one destination folder",
        after: "Available destinations can be IMG_0001.jpg and IMG_0001 (1).jpg; existing files may require a different suffix",
      },
    ],
    comparison: {
      title: "Which Windows photo organizer fits your job?",
      summary:
        "Publisher assessment of documented workflows, checked November 7, 2026. Review the linked official sources before choosing.",
      rows: [
        {
          option: "Galoria · $14.99 once · Windows 10/11",
          bestFor: "Mixed screenshots and downloaded images: inspect a local proposed folder plan, then approve physical moves into ordinary folders.",
          tradeoff: "No person search, persistent albums, or near-duplicate cleanup. Keep a backup; review every proposed move.",
          sources: [{ label: "How Galoria works", url: "/docs/how-it-works/" }],
        },
        {
          option: "Microsoft Photos · included with Windows",
          bestFor: "Free local browsing, basic search, editing and manually arranging photos into folders.",
          tradeoff: "Folder moves are manual. Newer People features depend on personal OneDrive photos; they do not group local-only faces.",
          sources: [{ label: "Microsoft Photos guide", url: "https://support.microsoft.com/en-us/onedrive/windows/browse-your-photos-on-windows" }],
        },
        {
          option: "digiKam · free/open source · Windows 10+",
          bestFor: "Family collections needing local albums, tags, face recognition and similarity-based duplicate search.",
          tradeoff: "Requires collection/database setup; face models may need a download. It also uses ordinary folders, but offers a broader catalog workflow.",
          sources: [{ label: "digiKam features", url: "https://www.digikam.org/about/" }, { label: "Duplicate search", url: "https://docs.digikam.org/en/left_sidebar/similarity_view.html" }],
        },
        {
          option: "Google Photos · free storage allowance",
          bestFor: "Family photos across devices with cloud backup, search and face groups where available.",
          tradeoff: "Backup uploads photos to a Google Account; the free 15 GB is shared with Drive and Gmail. Face Groups vary by region/account.",
          sources: [{ label: "Face Groups", url: "https://support.google.com/photos/answer/6128838" }, { label: "Storage", url: "https://support.google.com/accounts/answer/6374270" }],
        },
      ],
    },
    faqs: [
      {
        question: "Is Galoria Windows-only?",
        answer:
          "Yes. The website and application are positioned for Windows 10 and Windows 11 only.",
      },
      {
        question: "Does it support screenshots?",
        answer:
          "Yes. Screenshots are one of the main categories Galoria is built to sort.",
      },
      {
        question: "Can it help with camera roll exports?",
        answer:
          "Yes. Start with a folder of mixed imports and review the proposed structure before applying changes.",
      },
      {
        question: "What happens when photos have the same filename?",
        answer:
          "Galoria checks whether the intended destination already exists or is reserved by another planned move. If so, it chooses an available numbered name such as IMG_0001 (1).jpg. It checks again before moving each file. A destination created after Preview may therefore change the final name; the local move history records the actual destination. Keep a backup and review completion errors instead of assuming every selected photo moved.",
      },
      {
        question: "Does keeping same-named photos also remove duplicates?",
        answer:
          "No. Filename conflicts and identical image contents are different problems. Galoria can flag candidate exact copies after full-file SHA-256 verification, but it does not automatically delete them. That check is not visual similarity detection: edited versions, resized images and burst shots are not necessarily exact copies. Review the files you keep or exclude; do not buy Galoria as an automatic near-duplicate photo cleaner.",
      },
    ],
    related: [
      "ai-photo-organizer",
      "organize-screenshots-automatically",
      "offline-ai-photo-organizer",
      "photo-organizer-vs-cloud",
      "docs/how-it-works",
      "docs/supported-file-types",
      "alternatives/digikam",
    ],
  },
  {
    route: "organize-photos-with-ai",
    kind: "guide",
    topic: "photos",
    title: "How to Organize Photos with AI on Windows",
    h1: "Organize Photos with AI",
    description:
      "Use local AI to sort mixed photo folders on Windows, then review the proposed layout before moving screenshots, camera photos, and image exports.",
    eyebrow: "Photo organization guide",
    updatedAt,
    directAnswer:
      "To organize photos with AI, pick one mixed folder, let the app infer useful categories from local signals, and only apply the result after you review the preview.",
    problemTitle: "AI sorting works best when the folder is messy but still meaningful",
    problem: [
      "A mixed image folder usually has enough context to sort, but not enough context to sort manually at speed. That is where a preview-first AI workflow helps.",
      "The goal is not to erase human judgment. It is to reduce the number of repetitive choices when the same folder keeps filling up with screenshots, exports, and photos.",
    ],
    contextualLinks: [
      { before: "Before applying the plan, check ", anchor: "where Galoria puts approved images and how ordinary folders differ from a photo catalog", href: "/automatic-photo-organizer/", after: "." },
    ],
    steps: [
      "Pick a mixed image folder with several repeated categories.",
      "Run Galoria locally and inspect the initial category plan.",
      "Review the proposed names and destination folders carefully.",
      "Apply only the parts of the plan that match your search habits.",
    ],
    examples: [
      {
        title: "Travel folder",
        before: "Flight receipts, beach photos, location screenshots, and map captures",
        after: "Travel/Photos, Travel/Receipts, and Travel/References",
      },
      {
        title: "Content folder",
        before: "Thumbnail drafts, social images, reference photos, and exported banners",
        after: "Content/Thumbnails, Content/Social, Content/References, Content/Banners",
      },
    ],
    comparison: {
      title: "AI sorting versus manual cleanup",
      summary:
        "AI is useful when the folder is too mixed for a quick manual pass, but still predictable enough to review.",
      rows: [
        {
          option: "Galoria",
          bestFor: "Local photo sorting with review and undo",
          tradeoff: "Suggestions should be checked before applying",
        },
        {
          option: "Manual cleanup",
          bestFor: "Very small folders or one-off exceptions",
          tradeoff: "Hard to keep up with repeated imports",
        },
        {
          option: "Cloud AI tools",
          bestFor: "Hosted workflows with remote processing",
          tradeoff: "Less private than local analysis",
        },
      ],
    },
    faqs: [
      {
        question: "What is the safest way to start?",
        answer:
          "Start with a copy or a small representative image folder, then compare the proposed layout with how you retrieve images.",
      },
      {
        question: "Can AI sort screenshots and photos together?",
        answer:
          "Yes, but it is usually better to split screenshots, camera photos, and exports into separate top-level folders.",
      },
      {
        question: "Do I need to move every file?",
        answer:
          "No. Exclude images that already sit in the right place or that you want to keep in the current folder.",
      },
    ],
    related: [
      "ai-photo-organizer",
      "automatic-photo-sorting",
      "offline-ai-photo-organizer",
    ],
  },
  {
    route: "automatic-photo-organizer",
    kind: "landing",
    topic: "photos",
    title: "Automatic Photo Organizer for Windows",
    h1: "Automatic Photo Organizer",
    description:
      "Organize photos into ordinary Windows folders with Galoria. Review physical file moves, understand what happens to originals, and compare folders with catalogs.",
    eyebrow: "Automatic sorting",
    updatedAt: "2026-11-05",
    directAnswer:
      "Galoria organizes approved images into ordinary folders on Windows 10 and 11. It physically moves selected files under Image Organizer Output inside the folder you chose. You can browse the result in Windows File Explorer or open it in another image application without using a Galoria library. This changes the source paths: it is not a copy-only import or a backup. Review the destinations and keep a separate backup before applying changes.",
    problemTitle: "Choose physical folders or a catalog deliberately",
    problem: [
      "Ordinary folders suit people who want the organization visible in Windows and usable with other applications. Galoria moves individual images, not whole source folders, and does not reproduce the original folder hierarchy. Its normal workflow scans subfolders too, so an approved nested image can move out of its old project folder and leave an empty directory. Exclude images whose current paths must stay unchanged.",
      "Galoria normally retains each image's filename. This workflow does not generate a new descriptive name for every photo; a destination-name conflict may require a numbered suffix. Unsupported files stay outside the image move plan. Apply rejects images marked unreadable, and recognized HEIC/HEIF files still depend on local decoder support.",
      "Browsing the resulting folders needs no Galoria catalog, but the application does keep local metadata-cache and move-history files. History supports the app's recovery workflow; it is not a second copy of every photo. Keep it if you intend to use undo, which requires a valid license, and retain an independent backup.",
      "Choose a catalog or library application if your main task is browsing, ratings, tags, albums, or keeping existing image paths intact. Check whether that particular tool indexes images in place or copies them into its own library. Galoria is a selected-folder organizer, not an in-place photo catalog or a background folder watcher. This guide is published by Computora AI, Galoria's publisher.",
    ],
    contextualLinks: [{ before: "For a specific local collection manager, compare ", anchor: "Galoria vs digiKam: collection management or folder proposals", href: "/alternatives/digikam/", after: ". Both use ordinary folders and local AI; the comparison covers editing, face recognition, setup, and recovery." }],
    steps: [
      "Back up the images separately, then choose one small Windows image folder. The default output is Image Organizer Output inside that folder.",
      "Generate the local plan and inspect the complete source and destination paths. Review category assignments and destination folder names; do not assume the old hierarchy will be retained.",
      "Exclude images that must remain in their current location and review any skipped or unreadable items. Nothing moves until you approve the plan; apply requires a valid license.",
      "Apply the reviewed selection, check the completion result for errors, then browse Image Organizer Output in Windows File Explorer. Keep the local move history for eligible undo and keep your separate backup.",
    ],
    examples: [
      {
        title: "Illustrative reviewed plan: ordinary folders, not a library import",
        before: "Inbox contains camera.jpg, capture.png, and notes.pdf. In Preview, the user reviews Photos and Screenshots as the destination folders for the two images.",
        after: "Approved moves place camera.jpg in Image Organizer Output / Photos and capture.png in Image Organizer Output / Screenshots. The original image paths no longer contain those moved files; notes.pdf stays in Inbox. This example follows the move and exclusion behavior in the code; it is not a measured classification result or a promise that those category suggestions are automatic.",
      },
      {
        title: "When a catalog is the better choice",
        before: "Images are already linked from documents or design projects, and the current source paths must stay unchanged.",
        after: "Choose a catalog that explicitly supports indexing files in place, or leave those images excluded from a Galoria move plan. Verify the selected product's import behavior before relying on it.",
      },
    ],
    comparison: {
      title: "Folder organizer, catalog, or manual filing?",
      summary:
        "Decide whether you want files physically relocated or a way to browse and label them. Catalog storage behavior varies by product.",
      rows: [
        {
          option: "Galoria",
          bestFor: "Reviewed moves into ordinary Windows category folders",
          tradeoff: "Changes source paths; local cache and history still exist; not a backup",
        },
        {
          option: "Catalog or library application",
          bestFor: "Browsing, ratings, tags, or album-based organization",
          tradeoff: "Verify whether it indexes files in place or imports copies; albums need not correspond to disk folders",
        },
        {
          option: "Manual folder filing",
          bestFor: "Small collections where every destination must be chosen individually",
          tradeoff: "Moves and copies must be managed manually, including their effect on existing references",
        },
      ],
    },
    faqs: [
      {
        question: "Does Galoria move photos or import copies into a library?",
        answer: "The approved organization workflow moves selected images into category folders under the output root. It does not leave a separate source copy as a backup. Original filenames are normally retained, apart from destination-conflict adjustments. Use a backed-up folder and review the actual paths before approving.",
      },
      {
        question: "Can I browse the organized photos without Galoria?",
        answer: "Yes. The output contains ordinary image files and folders, so you can browse it with Windows File Explorer or another application that supports the image format. Galoria's metadata cache and move history are separate local application records; they are not required simply to browse those files. This does not mean the app stores no persistent data.",
      },
      {
        question: "What happens to existing folders and unsupported files?",
        answer: "Approved images can move out of existing subfolders into the reviewed category layout; the old hierarchy is not preserved as an archive. Excluded images and files outside the supported-image scan remain in place. Apply rejects images marked corrupt or unreadable. Check the supported-format documentation and preview before changing a mixed folder.",
      },
      {
        question: "Can Galoria sort thousands of images?",
        answer:
          "Yes, the workflow is designed for large local folders, but it is still better to review and apply changes in batches.",
      },
      {
        question: "Will it delete my photos?",
        answer:
          "No. Galoria is built around organizing, previewing, and undoing, not automatic deletion.",
      },
      {
        question: "Can I exclude some images?",
        answer:
          "Yes. Exclusion is part of the review workflow so you can leave specific images in their current folder.",
      },
    ],
    related: [
      "photo-organizer-windows",
      "ai-photo-organizer",
      "offline-ai-photo-organizer",
      "photo-organizer-vs-manual",
      "docs/how-it-works",
      "docs/supported-file-types",
    ],
  },
  {
  "route": "automatic-photo-sorting",
  "kind": "landing",
  "topic": "screenshots",
  "title": "Automatic Photo Sorting for Screenshots and Exports",
  "h1": "Automatic Photo Sorting",
  "description": "Sort screenshots, exports, and mixed image folders automatically on Windows with local AI and a preview before any move happens.",
  "eyebrow": "Screenshot workflow",
  "updatedAt": "2026-09-08",
  "directAnswer": "Automatic photo sorting is best when screenshots, exports, and temporary captures keep piling up. Galoria groups the folder locally and lets you review the result before applying it.",
  "problemTitle": "Screenshots are fast to capture and slow to clean up",
  "problem": [
    "Screenshots tend to accumulate because they are easy to take and hard to sort later. Without a system, the folder becomes a long list of generic filenames and forgotten captures.",
    "Many screenshot folders also include error messages, chat snippets, design references, and one-off captures that should not live in the same final folder."
  ],
  "steps": [
    "Pick the screenshot folder that fills up fastest.",
    "Let Galoria group temporary captures from keepers.",
    "Review the proposed project or subject folders.",
    "Apply the layout and keep the temporary folder small."
  ],
  "examples": [
    {
      "title": "Work captures",
      "before": "Error messages, meeting snippets, and product notes in one screenshot folder",
      "after": "Screenshots/Work, Screenshots/Reference, Screenshots/Errors"
    },
    {
      "title": "Design references",
      "before": "Color examples, layout ideas, and saved inspiration shots",
      "after": "Design/References, Design/Color, Design/Layout"
    }
  ],
  "comparison": {
    "title": "Screenshot sorting approaches",
    "summary": "Choose a workflow based on how temporary the captures are and whether you need a review step.",
    "rows": [
      {
        "option": "Galoria",
        "bestFor": "Local screenshot sorting with preview and undo",
        "tradeoff": "Requires you to review the plan"
      },
      {
        "option": "Manual cleanup",
        "bestFor": "A few screenshots every now and then",
        "tradeoff": "Quickly becomes repetitive"
      },
      {
        "option": "Cloud tools",
        "bestFor": "Hosted image workflows already in use",
        "tradeoff": "Less control over where the files go"
      }
    ]
  },
  "faqs": [
    {
      "question": "Should screenshots be deleted or organized?",
      "answer": "Usually both. Delete truly temporary captures, then organize the screenshots worth keeping into subject folders."
    },
    {
      "question": "Can I keep screenshots separate from photos?",
      "answer": "Yes. That is often the easiest way to keep a large image library browsable."
    },
    {
      "question": "Can Galoria handle mixed screenshot exports?",
      "answer": "Yes. Mixed folders are the main use case, especially when the images are already on your Windows PC."
    }
  ],
  "related": [
    "ai-photo-organizer",
    "organize-photos-with-ai",
    "photo-organizer-windows",
    "offline-ai-photo-organizer"
  ],
  "contextualLinks": [
    {
      "before": "For screenshot-heavy folders, choose between ",
      "anchor": "reviewed image moves and OCR text extraction",
      "href": "/organize-screenshots-automatically/",
      "after": "."
    }
  ]
},
  {
  "route": "organize-screenshots-automatically",
  "kind": "guide",
  "topic": "screenshots",
  "title": "Organize Screenshots: Folder Sorting or OCR Search?",
  "h1": "Organize Screenshots: Folder Sorting or OCR Search?",
  "description": "Choose screenshot folder organization or text extraction on Windows. See Galoria classification signals, review controls, limits and free Microsoft alternatives.",
  "eyebrow": "Screenshot guide",
  "updatedAt": "2026-11-06",
  "directAnswer": "Choose Galoria when you want reviewed physical folder moves for existing screenshot images on Windows 10 or 11. It uses filename, folder and image-metadata signals, with optional local visual captions; screenshot suggestions are heuristics, not reliable recognition of every capture or its text. Use capture software or Microsoft text-extraction tools when the real task is taking screenshots or copying words from them. Galoria is not an OCR search library.",
  "problemTitle": "Recognizing a screenshot is different from reading its contents",
  "problem": [
    "The classifier gives weight to screenshot-like filenames and some screen-like dimensions/formats, while considering camera metadata. A cropped capture, renamed export or ordinary graphic can lack or mimic those signals. Optional local captions can influence categories, but a visual description does not guarantee extraction of an error message, receipt total, application name or conversation.",
    "The image planner applies captions selectively and limits them to a bounded subset, rather than promising a model read of every picture. It can still propose categories from metadata and filenames when a caption is absent. That is a reason to inspect each proposed folder and exclude mismatches, not evidence of a classification accuracy percentage.",
    "Galoria does not expose an OCR/text-search workflow or a persistent screenshot knowledge library. If you need to copy the words visible in a capture, Microsoft documents OCR in PowerToys Text Extractor. Snipping Tool handles capture, saving and editing, with text actions in supported versions. Those are different tasks from approving image-file moves.",
    "The review interface shows images and proposed folders and lets you toggle Move or Keep. Category filters change what you are reviewing; do not assume they edit destinations or generate custom Errors, Work and Notes hierarchies. Exclude a wrong suggestion and file it manually if the proposed category does not suit the image.",
    "Approval physically moves selected supported images under Image Organizer Output inside the chosen folder. Original filenames are retained unless a collision requires a numbered suffix. Keep an independent backup: history-based undo can be limited by files changed or paths occupied after organization. No automatic deletion, disk-space saving or reliable duplicate identification is claimed by this workflow.",
    "PNG, JPG/JPEG, WEBP, GIF, BMP, TIFF, HEIC and HEIF are supported image formats; screen recordings such as MP4 are not image entries in this workflow. Read the format documentation for decoder and analysis limits. Installation downloads, activation and periodic license checks require internet; optional image captions use the packaged local model.",
    "Publisher disclosure: Computora AI publishes Galoria. Microsoft documentation and application source were checked November 6, 2026. Examples are illustrative, not observed classification tests, and no comparative speed, recognition or OCR accuracy result is claimed."
  ],
  "steps": [
    "Choose the actual goal: capturing an image, extracting visible text, keeping a few manual folders, or reviewing category-based file moves. Use a copy and keep a backup.",
    "In Galoria, select a copied screenshot folder and generate the plan. Compare each preview image with its proposed folder; do not assume a screenshot-like filename proves the category is right.",
    "Use Move or Keep to select appropriate entries and exclude mismatches. A category tab is a review filter, not a custom destination editor. Handle excluded files manually if needed.",
    "Approve the selected moves and inspect the resulting Image Organizer Output folders. Use an OCR tool separately for text extraction; use capture or monitoring software if you need ongoing capture automation."
  ],
  "examples": [
    {
      "title": "Illustrative screenshot-category proposal, not a measured result",
      "before": "A copied folder contains Screenshot_001.png, a camera JPEG and a cropped capture with a generic filename.",
      "after": "Galoria may propose Screenshots for the named capture and a different folder for the camera image. Inspect the cropped image manually and keep it in place if the suggestion is inappropriate. Exact outcomes depend on the actual signals."
    },
    {
      "title": "When text extraction is the better approach",
      "before": "You need to copy an exact error code from an image and later find it by those words.",
      "after": "Use an OCR/text-extraction tool and an appropriate searchable note or library workflow. A Galoria category move does not create an OCR transcript or searchable text index."
    }
  ],
  "comparison": {
    "title": "Choose the screenshot task before the tool",
    "summary": "Free capture and text-extraction tools can be sufficient; buying a folder organizer should solve a different requirement.",
    "headers": {
      "option": "Your task",
      "bestFor": "Suitable approach",
      "tradeoff": "Important limitation"
    },
    "rows": [
      {
        "option": "Capture, save or annotate a screenshot",
        "bestFor": "Windows Snipping Tool on supported Windows versions.",
        "tradeoff": "Capture/editing is different from reviewing a backlog of category-based moves."
      },
      {
        "option": "Copy words from a screenshot",
        "bestFor": "Microsoft PowerToys Text Extractor or supported Snipping Tool text actions.",
        "tradeoff": "OCR output still needs review; text extraction is not Galoria classification."
      },
      {
        "option": "A small collection with known destinations",
        "bestFor": "File Explorer and manually chosen folders.",
        "tradeoff": "You supply the categories and move selections; no organizer purchase is required."
      },
      {
        "option": "Review category suggestions for existing images",
        "bestFor": "Galoria local image planning and Move/Keep selection on Windows 10/11.",
        "tradeoff": "Heuristic suggestions can be wrong; no promise of exact app, topic or text recognition."
      },
      {
        "option": "Search by screenshot text or capture automatically",
        "bestFor": "A tool specifically providing the required OCR library or capture/monitoring workflow.",
        "tradeoff": "Galoria does not provide an OCR search library, capture tool or background screenshot watcher."
      }
    ]
  },
  "faqs": [
    {
      "question": "Can Galoria reliably find every screenshot regardless of its filename?",
      "answer": "No such reliability is established. Names, dimensions, format, camera metadata and optional captions influence suggestions. Crops and exports can miss expected signals, and ordinary graphics can resemble captures. Review the images and keep mismatches out of the move selection."
    },
    {
      "question": "Does Galoria read and index screenshot text?",
      "answer": "Its caption/classification workflow is not an OCR transcript or full-text search library. Use a suitable text-extraction and retrieval tool when exact words or error codes are the requirement."
    },
    {
      "question": "Can I correct a wrong screenshot suggestion?",
      "answer": "The current review interface lets you exclude the image using Keep. Category filtering is not destination editing. File an excluded mismatch manually rather than assuming automatic custom Errors or Notes subfolders."
    }
  ],
  "related": [
    "ai-photo-organizer",
    "automatic-photo-organizer",
    "docs/supported-file-types",
    "offline-ai-photo-organizer"
  ],
  "contextualLinks": [
    {
      "before": "Check ",
      "anchor": "supported images and analysis limits",
      "href": "/docs/supported-file-types/",
      "after": "."
    },
    {
      "before": "Read the ",
      "anchor": "preview, approval and recovery workflow",
      "href": "/docs/how-it-works/",
      "after": "."
    },
    {
      "before": "For what happens to existing files, see ",
      "anchor": "Galoria ordinary-folder output",
      "href": "/automatic-photo-organizer/",
      "after": "."
    },
    {
      "before": "Review ",
      "anchor": "local processing and licensing privacy",
      "href": "/docs/privacy/",
      "after": "."
    }
  ],
  "sources": [
    {
      "label": "Microsoft: Snipping Tool",
      "url": "https://support.microsoft.com/en-us/windows/apps/use-snipping-tool-to-capture-screenshots",
      "note": "Capture, saving/editing and text actions in supported versions."
    },
    {
      "label": "Microsoft: PowerToys Text Extractor",
      "url": "https://learn.microsoft.com/en-us/windows/powertoys/text-extractor",
      "note": "OCR text extraction is distinct from a folder classification workflow."
    }
  ]
},
  {
    route: "windows-photo-organizer",
    kind: "landing",
    topic: "windows",
    title: "Windows Photo Organizer for Local Image Libraries",
    h1: "Windows Photo Organizer",
    description:
      "A Windows photo organizer for local image libraries, screenshot folders, and mixed downloads that need a preview-first sort order.",
    eyebrow: "Windows image library",
    updatedAt,
    directAnswer:
      "A Windows photo organizer is useful when the library keeps growing and the folder names no longer explain what is inside. Galoria keeps the work local and preview-first.",
    problemTitle: "Local image libraries need retrieval-friendly structure",
    problem: [
      "A photo library can include personal albums, work screenshots, product images, and downloads from many apps. Those images are easier to keep than to rediscover later.",
      "A good structure uses a small number of categories that match how you browse, not just how the images were originally saved by the app that created them.",
    ],
    steps: [
      "Choose the image folder that feels hardest to browse.",
      "Let Galoria propose a structure based on local signals.",
      "Check the preview and edit any folders you do not want.",
      "Apply the changes once the categories feel natural.",
    ],
    examples: [
      {
        title: "Personal library",
        before: "Family photos, screenshots, and saved memes in one place",
        after: "Photos/Family, Screenshots, and Memes",
      },
      {
        title: "Work folder",
        before: "Reference images, UI captures, and exported product shots",
        after: "Work/References, Work/Screenshots, Work/Product",
      },
    ],
    comparison: {
      title: "Windows photo organizer choices",
      summary:
        "The right choice depends on privacy, library size, and how much automation you want.",
      rows: [
        {
          option: "Galoria",
          bestFor: "Local Windows image sorting with preview and undo",
          tradeoff: "Needs a review step",
        },
        {
          option: "Manual sorting",
          bestFor: "Small albums and one-off cleanup",
          tradeoff: "Hard to keep up with repeated imports",
        },
        {
          option: "Cloud AI services",
          bestFor: "Hosted workflows already integrated elsewhere",
          tradeoff: "Images may be uploaded for analysis",
        },
      ],
    },
    faqs: [
      {
        question: "Does it support large image collections?",
        answer:
          "Yes. It is designed for local Windows folders that contain many image files, although reviewing in batches is still smart.",
      },
      {
        question: "Can I use it for screenshots only?",
        answer:
          "Yes. Screenshot-heavy folders are a strong fit for Galoria.",
      },
      {
        question: "Can it help with photos from phone backups?",
        answer:
          "Yes. Start with a backup folder and review the proposed categories before applying changes.",
      },
    ],
    related: [
      "ai-photo-organizer",
      "photo-organizer-windows",
      "organize-screenshots-automatically",
      "offline-ai-photo-organizer",
    ],
  },
  {
    route: "offline-ai-photo-organizer",
    kind: "comparison",
    topic: "privacy",
    title: "Local AI Photo Organizer for Windows: Offline Limits",
    h1: "Local AI Photo Sorting: What Works Offline?",
    description:
      "Sort image folders locally on Windows. Check Galoria's model setup, seven-day license window and preview limits before choosing an offline photo organizer.",
    eyebrow: "Local photo sorting and offline readiness",
    updatedAt: "2026-11-06",
    directAnswer:
      "Galoria scans images and builds organization previews locally on Windows 10 and 11, without uploading photos for analysis. Preview is available without activation; applying moves and Undo require a valid license. Download and initial activation need internet. The current license permits offline use for less than seven days after saved validation, then needs online validation again. Choose another approach for a permanently disconnected computer.",
    problemTitle: "Local AI does not mean every part of the product stays offline",
    problem: [
      "Published by Galoria's publisher, Computora AI. Competitor documentation was checked on November 6, 2026. The recommendations below compare documented workflows, not hands-on accuracy or speed results.",
      "The complete Windows package includes the Python runtime and local BLIP image-captioning model. The loader uses local model files only and does not fetch missing models on first use. If the model is absent or cannot initialize, captions can be unavailable while filename, folder-context, and metadata classification still produce a plan. A completed preview alone does not prove that image-content AI ran.",
      "Galoria combines filenames, existing folder context, image metadata, and available short visual captions to suggest categories. It is not a face-identity, detailed image-search, or document-OCR system. The planner selects a limited set of images for captioning, with a default cap of 300 per scan, and analyzes resized images up to 384 pixels rather than every detail of every original. Review uncertain suggestions; do not expect every photo to receive an AI caption.",
      "Recognized formats include JPG/JPEG, PNG, WEBP, GIF, BMP, TIFF, HEIC, and HEIF. Recognition does not guarantee successful decoding or meaningful classification. Unreadable images and missing local decoding dependencies can limit analysis. The supported-format documentation explains these boundaries; test a copied representative folder first.",
      "Scanning, metadata caching, planning, and approved file moves happen locally. License activation and later validation communicate with Keygen; checkout, downloads, updates, and online support are separate connected activities. A separately configured cloud-sync service can still upload a selected folder independently of Galoria. Local sorting is not cloud backup.",
    ],
    contextualLinks: [
      { before: "Before choosing an image batch, review ", anchor: "Galoria's supported formats and analysis limits", href: "/docs/supported-file-types/", after: "." },
      { before: "For local processing and connected services, read ", anchor: "Galoria's privacy documentation", href: "/docs/privacy/", after: "; use the installation guide before relying on a disconnected session." },
      { before: "For catalog-style object tags, ", anchor: "digiKam's official auto-tagging manual", href: "https://docs.digikam.org/en/left_sidebar/tags_view.html", after: " documents neural-network tagging and a required model download. This is a different workflow from approving a Galoria file-move plan." },
      { before: "Compare that with ", anchor: "KDE's digiKam overview", href: "https://apps.kde.org/digikam/", after: ", which describes albums, tags, metadata search, and Windows, macOS, and Linux support." },
      { before: "If your main goal is a remotely accessible copy, ", anchor: "Google Photos' backup documentation", href: "https://support.google.com/photos/answer/6193313?co=GENIE.Platform%3DDesktop&hl=en", after: " describes saving images to a Google Account with an internet connection. That backup function is not supplied by Galoria's local sorting." },
      { before: "If local reviewed sorting with periodic online validation fits, check ", anchor: "Galoria's individual $14.99 one-time license and pricing", href: "/#download", after: " before buying." },
    ],
    steps: [
      "While connected, download the complete Windows installer, install it, and activate normally if you intend to apply moves or use Undo. Confirm local image analysis on a small copied folder before travel or a restricted-network session.",
      "Select a local image folder and review the category plan. Check whether suggestions use available image content or only filename and metadata clues; ambiguous images need manual review or exclusion.",
      "Within the valid offline license window, inspect exact destinations and exclude anything you do not want moved. Keep a separate backup before approving the plan. Preview itself does not move files.",
      "After approval, inspect the moved files and retain local history. Undo depends on that history and the organized files remaining available; it is not a substitute for a backup. Reconnect for license validation before the offline window expires.",
    ],
    examples: [
      {
        title: "Illustrative: a short disconnected sorting session",
        before: "A copied folder contains camera photos and work screenshots. The complete package is installed, licensed moves were activated online, and local image analysis was checked before disconnecting.",
        after: "Galoria can propose categories from local signals, show the move destinations, and apply an approved plan within the license window. Exact categories vary; this is a source-grounded workflow example, not an executed accuracy benchmark.",
      },
      {
        title: "Decision example: a computer that cannot reconnect",
        before: "The workstation must remain disconnected for weeks and you need ongoing photo tagging or browsing.",
        after: "Galoria's periodic validation is a mismatch. Evaluate a local catalog such as digiKam and complete its documented model download before disconnecting; verify the setup against your own offline requirements.",
      },
    ],
    comparison: {
      title: "Choose by the result and connection requirement",
      summary:
        "An offline-capable sorter, a local photo catalog, and an online backup service solve different jobs. These are publisher assessments based on the official sources linked above.",
      rows: [
        { option: "Reviewed local folder sorting: Galoria", bestFor: "Windows 10/11 users who want categories and an exact destination plan before files move; $14.99 once.", tradeoff: "Bundled local models; AI captioning is selective. Applying moves and Undo require activation and periodic online license validation." },
        { option: "Local albums, tags, and metadata search: digiKam", bestFor: "A photo-management workflow with albums, object auto-tags, and metadata search across Windows, macOS, or Linux.", tradeoff: "Its auto-tagging models must be downloaded before that feature works. Plan and verify the local setup before disconnecting." },
        { option: "Online backup and access: Google Photos", bestFor: "Saving photos to a Google Account and accessing backed-up images from signed-in devices.", tradeoff: "Backup requires internet and account storage. It does not make Galoria's local move plan into a backup." },
      ],
    },
    faqs: [
      {
        question: "Can offline AI organizers work without internet?",
        answer:
          "Local analysis can, once its dependencies and models are available. Galoria's preview runs locally, but applying moves and Undo require a valid license, with an offline window of less than seven days after saved validation. Download, activation, periodic validation, and updates need a connection at the relevant times.",
      },
      {
        question: "Does Galoria download a cloud model when local AI is missing?",
        answer:
          "No. Its captioning loader reads local model files only. If local captioning is unavailable, filename, folder-context, and metadata signals can still produce suggestions; those suggestions should not be mistaken for completed image-content analysis.",
      },
      {
        question: "Does local photo organization protect the original files?",
        answer:
          "Preview does not move files. Approving a plan physically moves the included images, rather than creating a backup copy. Exclude files you want left in place, keep an independent backup, and inspect results before relying on local history and Undo.",
      },
    ],
    related: [
      "ai-photo-organizer",
      "docs/install",
      "docs/how-it-works",
      "photo-organizer-vs-cloud",
    ],
  },
  {
    route: "photo-organizer-vs-cloud",
    kind: "comparison",
    topic: "privacy",
    title: "Galoria vs Cloud AI Photo Organizers",
    h1: "Galoria vs Cloud AI Photo Organizers",
    description:
      "Compare local Windows photo sorting with cloud-based AI organizers by privacy, control, setup effort, and whether image uploads are required.",
    eyebrow: "Comparison",
    updatedAt,
    directAnswer:
      "Choose Galoria when you want local Windows photo sorting with a preview-first workflow. Choose cloud AI organizers when you are fine sending images to a hosted service for analysis.",
    problemTitle: "The main difference is where the work happens",
    problem: [
      "A local organizer keeps the planning step on your device and is easier to explain for private photos, screenshots, and work images.",
      "A cloud organizer can be helpful for hosted workflows, but it introduces upload, retention, and vendor-policy questions that you need to evaluate carefully.",
    ],
    steps: [
      "Decide whether the images should stay local during organization.",
      "Check whether the tool shows a preview before any folder move happens.",
      "Confirm the Windows workflow and the image types you expect to sort.",
      "Test one mixed folder before relying on any larger library cleanup.",
    ],
    examples: [
      {
        title: "Local downloads cleanup",
        before: "Screenshots, memes, and camera photos mixed in Downloads",
        after: "Use Galoria to plan locally and review before applying changes",
      },
      {
        title: "Hosted image workflow",
        before: "A team already stores images in a cloud service",
        after: "Cloud AI may fit, but review the upload policy first",
      },
    ],
    comparison: {
      title: "Local and cloud photo organizers at a glance",
      summary:
        "The better choice depends on privacy expectations and how much control you want before files move.",
      rows: [
        {
          option: "Galoria",
          bestFor: "Windows users who want local planning and preview",
          tradeoff: "Not a hosted service",
        },
        {
          option: "Cloud AI organizers",
          bestFor: "Users already comfortable with remote image processing",
          tradeoff: "Images may be uploaded for analysis",
        },
        {
          option: "Manual sorting",
          bestFor: "Very small folders",
          tradeoff: "Does not scale well",
        },
      ],
    },
    faqs: [
      {
        question: "Is cloud processing always less private?",
        answer:
          "It usually requires more trust because images are uploaded to a provider before the sorting plan is created.",
      },
      {
        question: "What should I check in a cloud service?",
        answer:
          "Check upload behavior, retention terms, preview behavior, and whether you can easily undo a bad sort.",
      },
      {
        question: "Can Galoria replace a cloud organizer?",
        answer:
          "It can replace the local sorting part for Windows users who want the analysis to stay on their device.",
      },
    ],
    related: [
      "ai-photo-organizer",
      "offline-ai-photo-organizer",
      "photo-organizer-vs-manual",
      "photo-organizer-windows",
    ],
  },
  {
    route: "photo-organizer-vs-manual",
    kind: "comparison",
    topic: "workflows",
    title: "Galoria vs Manual Photo Organization",
    h1: "Automatic vs Manual Photo Organization",
    description:
      "Compare automatic and manual photo organization by setup time, review, control, scale, and whether you want repeated cleanup work.",
    eyebrow: "Workflow comparison",
    updatedAt,
    directAnswer:
      "Manual sorting works for tiny folders or high-stakes exceptions. Automatic sorting works better when the same image types keep appearing. Galoria sits in the middle with review-first control.",
    problemTitle: "The real tradeoff is repeated effort versus review effort",
    problem: [
      "Manual sorting gives complete control but repeats the same decisions every time screenshots, photos, or exports pile up in the same folder.",
      "Automatic sorting reduces repetition, but it should still keep the user in control through a preview step and an easy way to exclude specific images.",
    ],
    contextualLinks: [
      { before: "For the manual folder tools already included with Windows, see ", anchor: "Galoria versus Microsoft Photos", href: "/alternatives/microsoft-photos/", after: " and decide whether a proposed move plan would add value." },
    ],
    steps: [
      "Identify the photo folders that fill up most often.",
      "Decide which images can be grouped automatically and which need manual review.",
      "Keep a consistent folder structure for both methods.",
      "Measure whether the system helps you find images faster later.",
    ],
    examples: [
      {
        title: "Monthly cleanup",
        before: "Filing the same screenshot types one by one",
        after: "Use Galoria to propose destination folders, then review the batch",
      },
      {
        title: "Important archive",
        before: "A handful of irreplaceable photos that need careful placement",
        after: "Use manual review for the final move after the preview looks right",
      },
    ],
    comparison: {
      title: "Automatic and manual organization at a glance",
      summary:
        "Use automation where patterns are stable and manual review where consequences are high.",
      rows: [
        {
          option: "Galoria",
          bestFor: "Repeated local photo categorization and filing",
          tradeoff: "Suggestions need review",
        },
        {
          option: "Manual organization",
          bestFor: "Small, ambiguous, or high-consequence collections",
          tradeoff: "Slow and hard to maintain at scale",
        },
        {
          option: "Hybrid workflow",
          bestFor: "Most real-world mixed libraries",
          tradeoff: "Requires a clear review rule",
        },
      ],
    },
    faqs: [
      {
        question: "Is automatic photo organization safe?",
        answer:
          "It is safer when actions are previewed, backups exist, and uncertain images can be excluded before applying changes.",
      },
      {
        question: "When should I review images manually?",
        answer:
          "Review irreplaceable photos, legal or financial scans, and any image whose destination matters more than speed.",
      },
      {
        question: "How do I know if automation saves time?",
        answer:
          "Measure time spent sorting and time spent finding images, plus correction work caused by bad names or destinations.",
      },
    ],
    related: [
      "automatic-photo-organizer",
      "automatic-photo-sorting",
      "offline-ai-photo-organizer",
      "ai-photo-organizer",
    ],
  },
  {
    route: "blog/ai-photo-organizer-classification-test",
    kind: "guide",
    topic: "photos",
    title: "AI Photo Organizer Test | 12 Classification Cases",
    h1: "Galoria AI Photo Organizer Classification Test",
    description:
      "Review Galoria's 12 representative photo-classification cases, 26 passing backend tests, Windows environment, real interface captures, and test limitations.",
    eyebrow: "Reproducible product evidence",
    updatedAt: "2026-09-06",
    directAnswer:
      "On September 6, 2026, Galoria passed all 26 backend tests in 1.986 seconds on Windows 11 Pro with a Core i5-8350U and 8 GB of RAM. A representative regression set correctly handled all 12 defined category cases, including work, people, travel, products, receipts, documents, screenshots, wallpapers, design assets, memes, and pets. This is a curated regression result, not a claim of 100% real-world accuracy.",
    problemTitle: "Why photo-organizer evidence needs edge cases",
    problem: [
      "A useful image organizer must do more than match obvious words. Galoria's regression suite checks that a camera photo of a window is not treated as a screenshot, an abstract camera photo is not forced into Wallpapers, and a small unknown image can remain uncertain instead of receiving a confident but weak category.",
      "The suite also covers preview capabilities, changed-file rejection, duplicate verification with a full hash, undo history, bounded progress updates, metadata workers, and caption limits. These checks reduce known regressions while leaving the final destination visible to the user.",
    ],
    steps: [
      "Prepare representative filenames, image metadata, and optional local visual captions with an expected category for each case.",
      "Run the classifier across 12 categories covering common photo-library and screenshot workflows.",
      "Run edge cases designed to catch screenshot, wallpaper, design, and uncertainty false positives.",
      "Run planner, duplicate, history, preview, changed-file, and performance-bound tests before publishing the result.",
    ],
    examples: [
      {
        title: "Screenshot classification",
        before: "browser_dashboard.png with a browser-dashboard visual caption",
        after: "Screenshots category",
      },
      {
        title: "Receipt classification",
        before: "receipt_204.jpg with printed receipt, subtotal, and tax signals",
        after: "Receipts category",
      },
    ],
    comparison: {
      title: "Evidence, meaning, and limits",
      summary: "The published result separates curated regression coverage from performance and real-library accuracy.",
      rows: [
        {
          option: "12 category fixtures",
          bestFor: "Preventing regressions in representative filename, metadata, and caption cases",
          tradeoff: "A curated set is smaller and cleaner than a real photo library",
        },
        {
          option: "26 backend tests",
          bestFor: "Classifier, planner, duplicate, history, preview, and bounded-work checks",
          tradeoff: "Test runtime is not end-to-end library speed",
        },
        {
          option: "Copied-library acceptance test",
          bestFor: "Checking categories against your own image collection",
          tradeoff: "Requires reviewing ambiguous and irreplaceable images",
        },
      ],
    },
    faqs: [
      {
        question: "Did Galoria score 100% accuracy?",
        answer: "Galoria passed 12 of 12 defined regression fixtures. That is not the same as 100% accuracy across arbitrary real-world photo collections.",
      },
      {
        question: "What happens when an image is uncertain?",
        answer: "The classifier can retain uncertainty rather than forcing a weak category, and the proposed destination remains available for review.",
      },
      {
        question: "Does the 1.986-second result measure a photo scan?",
        answer: "No. It is the complete backend automated test-suite time on one computer. A real scan also depends on image count, format, storage, caching, and visual analysis.",
      },
    ],
    evidence: {
      title: "Observed Galoria test evidence",
      summary: "The regression results and product captures document both machine-checked behavior and the user-visible workflow.",
      facts: [
        { label: "Backend tests", value: "26 passed, 0 failed" },
        { label: "Representative fixtures", value: "12 passed, 0 failed" },
        { label: "Automated suite time", value: "1.986 seconds" },
        { label: "Environment", value: "Windows 11 Pro, Core i5-8350U, 8 GB RAM" },
      ],
      media: [
        {
          kind: "image",
          src: "/evidence/galoria-folder-step.png",
          alt: "Galoria local photo organizer folder-selection screen",
          caption: "The first product step keeps the source folder and local-processing promise explicit.",
        },
        {
          kind: "image",
          src: "/evidence/galoria-output.png",
          alt: "Galoria photo organization output shown in Windows File Explorer",
          caption: "Observed demonstration output displayed directly in Windows File Explorer.",
        },
      ],
      note: "No general accuracy percentage or guaranteed scan speed is inferred from these fixtures. A broader benchmark would require a labeled image dataset, repeated runs, and documented model/runtime versions.",
    },
    related: [
      "ai-photo-organizer",
      "organize-screenshots-automatically",
      "offline-ai-photo-organizer",
      "docs/troubleshooting",
    ],
  },
];

const privatePhotoBase = seoPages.find((page) => page.route === "photo-organizer-vs-cloud");

if (privatePhotoBase) {
  seoPages.push({
    ...privatePhotoBase,
    route: "best-private-ai-photo-organizer",
    title: "Private AI Photo Organizer for Windows",
    h1: "Best Private AI Photo Organizer for Windows",
    description: "Compare private photo organization approaches and see how Galoria categorizes image folders locally with a review-first workflow.",
    eyebrow: "Private AI photo organization",
    directAnswer: "Galoria is a strong fit for private photo organization on Windows because it analyzes supported image folders locally, proposes categories and destination folders, and lets you review every change before applying it. It is designed for screenshots, camera photos, receipts, scans, and mixed image folders without requiring a cloud photo upload.",
    problemTitle: "Private photo organization needs more than a no-cloud slogan",
    problem: [
      "A private photo organizer should explain what happens on the device, which files and signals it supports, and whether proposed moves can be reviewed and excluded. Privacy is useful only when the workflow also protects against wrong categories and accidental moves.",
      "Galoria combines local image analysis with a visible plan. You can review proposed destinations, exclude ambiguous photos, and keep local history for undo subject to file and path checks.",
    ],
    steps: [
      "Choose a copied Pictures, Screenshots, Downloads, or camera-roll folder.",
      "Let Galoria analyze supported image files locally.",
      "Review categories, destination names, exclusions, and conflicts.",
      "Apply only the approved moves and keep the local history available for undo.",
    ],
    examples: [
      { title: "Private screenshots", before: "Work captures, receipts, and reference images mixed in Screenshots", after: "Reviewable local categories for work, receipts, and reference" },
      { title: "Camera archive", before: "Phone exports with years of images and inconsistent folders", after: "A proposed structure that remains editable before any move" },
    ],
    comparison: {
      title: "Private photo organizer options",
      summary: "Compare where analysis happens, how much control you retain, and whether the workflow fits Windows image folders.",
      rows: [
        { option: "Galoria", bestFor: "Local Windows photo categorization with review", tradeoff: "Focused on supported image formats and desktop workflows" },
        { option: "Cloud photo organizer", bestFor: "Cross-device libraries and hosted search", tradeoff: "Requires uploading or syncing image data" },
        { option: "Manual folders", bestFor: "Small libraries or carefully curated archives", tradeoff: "Time cost grows with every import" },
      ],
    },
    faqs: [
      { question: "Does Galoria upload my photos?", answer: "Galoria is designed around local image analysis and planning, so photos do not need to be uploaded to a cloud organizer for the organization workflow." },
      { question: "Can I review photo categories before moving anything?", answer: "Yes. Galoria shows proposed categories and destinations, and lets you reassign or exclude images before applying changes." },
      { question: "Which images can Galoria organize?", answer: "Galoria supports JPG, JPEG, PNG, WEBP, GIF, BMP, TIFF, HEIC, and HEIF files, subject to the workflow's local analysis capabilities." },
    ],
    related: ["ai-photo-organizer", "offline-ai-photo-organizer", "photo-organizer-vs-cloud", "organize-screenshots-automatically"],
    evidence: privatePhotoBase.evidence,
  });
}

seoPages.push({
  route: "alternatives",
  kind: "comparison",
  topic: "privacy",
  title: "Best Private Photo Organizer Alternatives",
  h1: "Private Photo Organizer Alternatives",
  description:
    "Compare Galoria with cloud photo services, manual folders, and traditional library managers for private photo organization on Windows.",
  eyebrow: "Photo organizer comparison hub",
  updatedAt,
  directAnswer:
    "Choose Galoria when you want a focused Windows tool that analyzes supported image folders locally, proposes categories, and lets you review destinations before files move. Choose a cloud photo service when automatic backup, sharing, and cross-device access matter more than keeping the workflow entirely on the PC. Choose manual folders or a traditional library manager when detailed curation and metadata editing are the priority.",
  problemTitle: "Photo organizers solve different library problems",
  problem: [
    "A local sorter, cloud gallery, and digital asset manager may all be called photo organizers, but they serve different needs. Compare storage location, supported formats, visual analysis, category editing, destination preview, backup, and recovery before choosing.",
    "Irreplaceable photos deserve a cautious workflow. Keep an independent backup, test with copied images, and review uncertain screenshots, scans, receipts, and design assets before allowing any organizer to change the folder structure.",
  ],
  contextualLinks: [{ before: "For a specific local collection manager, compare ", anchor: "Galoria vs digiKam: collection management or folder proposals", href: "/alternatives/digikam/", after: ". Both use ordinary folders and local AI; the comparison covers editing, face recognition, setup, and recovery." }],
    steps: [
    "Decide whether your priority is local privacy, cloud access, or detailed library management.",
    "Check image-format support and whether analysis requires an upload.",
    "Compare category editing, exclusions, destination previews, conflicts, history, and undo.",
    "Test the preferred approach on a copied mixed-image folder before an important archive.",
  ],
  examples: [
    {
      title: "Private mixed image folder",
      before: "Screenshots, camera photos, receipts, memes, and design references together",
      after: "Galoria proposes local categories that remain editable before moving images",
    },
    {
      title: "Shared family library",
      before: "Photos must be backed up and available across several phones",
      after: "A cloud service may fit better when synchronization and sharing are essential",
    },
  ],
  comparison: {
    title: "Galoria alternatives by priority",
    summary:
      "Choose by where your photos should live and how much control you need before organization changes are applied.",
    rows: [
      {
        option: "Galoria",
        bestFor: "Local Windows image categorization with review-first control",
        tradeoff: "Focused desktop workflow rather than hosted backup and sharing",
      },
      {
        option: "Cloud photo services",
        bestFor: "Cross-device backup, search, albums, and sharing",
        tradeoff: "Images are uploaded or synchronized to a hosted service",
      },
      {
        option: "Manual or library managers",
        bestFor: "Careful curation, metadata editing, and custom archives",
        tradeoff: "Requires more setup and ongoing manual decisions",
      },
    ],
  },
  faqs: [
    {
      question: "What is the best private photo organizer for Windows?",
      answer:
        "Galoria is a strong fit when local analysis and a reviewable folder plan matter. A traditional library manager may be better when advanced metadata editing is the primary need.",
    },
    {
      question: "Does Galoria replace cloud photo backup?",
      answer:
        "No. Galoria organizes supported image folders locally; it is not a hosted backup or multi-device sharing service.",
    },
    {
      question: "Can Galoria organize screenshots as well as photos?",
      answer:
        "Yes. It is designed for mixed folders containing screenshots, camera photos, receipts, scans, memes, wallpapers, and design assets.",
    },
  ],
  related: [
    "best-private-ai-photo-organizer",
    "photo-organizer-vs-cloud",
    "photo-organizer-vs-manual",
    "blog/ai-photo-organizer-classification-test",
  ],
});

seoPages.push({
  "route": "alternatives/digikam",
  "kind": "comparison",
  "topic": "photos",
  "title": "Galoria vs digiKam: Sorter or Photo Manager?",
  "h1": "Galoria vs digiKam: Which Photo Workflow Fits?",
  "description": "Choose between Galoria folder-move previews and digiKam collection management. Compare local AI, albums, editing, formats, setup, price, and recovery.",
  "eyebrow": "Comparison published by Computora AI",
  "updatedAt": "2026-11-06",
  "directAnswer": "Choose digiKam when you want to manage a continuing photo collection with albums, tags, search, editing, or face recognition. Choose Galoria when your main job is reviewing a category-based move plan for one Windows image folder. Both products work with ordinary folders, and both have local AI capabilities. Neither is inherently faster or more accurate on the evidence presented here.",
  "problemTitle": "A photo collection manager or a focused organization plan?",
  "problem": [
    "This comparison is published by Computora AI, the publisher of Galoria. Galoria behavior was checked against its application source; digiKam statements were checked against official documentation on November 6, 2026. This is not an independent review or a hands-on performance or accuracy comparison.",
    "In Galoria, select a folder, scan supported images, review categories and proposed destinations, exclude images, and approve the selection. Applying the plan physically moves individual files beneath Image Organizer Output inside the selected folder. It does not keep a separate source copy or preserve the old subfolder hierarchy. Normal filenames remain, with numbered suffixes when needed for destination conflicts. You can browse the resulting files outside Galoria; local cache and history records still exist.",
    "digiKam can register existing directories as collections. Its physical albums correspond to subfolders containing ordinary image files; it is not a closed container that hides all originals. It also keeps collection databases for catalog information. Import and move/copy actions can change where files live, while saved edits can change image files. Select the action you need rather than assuming every catalog operation relocates everything.",
    "Galoria combines filenames, folder context, metadata, and available BLIP captions to suggest categories. Captioning uses local models, selects up to 300 images per scan by default, and uses resized analysis images up to 384 pixels. Missing models can leave metadata-based suggestions. It does not provide named-person recognition, an image editor, or an ongoing album/tag/search catalog. Ambiguous categories need review.",
    "digiKam offers local AI for object auto-tags and face management, as well as collection search and editing. Its optional deep-learning files must be downloaded before those features work. Face recognition needs initial user labels for detected people; predictions still require judgment. Galoria is not the only local-AI option, and digiKam is not limited to manual sorting.",
    "Use a copied sample before changing your archive. With Galoria, keep the move history and a separate backup: Undo requires a valid license and the moved files to remain available; it can restore under a numbered name if an original path is occupied. With digiKam, check import/move/copy, deletion, and editor-versioning settings; keep independent copies of the images and back up the collection database. Neither a preview nor a catalog replaces a backup."
  ],
  "contextualLinks": [
    {
      "before": "For Galoria's physical output and source-path changes, read ",
      "anchor": "how approved images become ordinary folders",
      "href": "/automatic-photo-organizer/",
      "after": "."
    },
    {
      "before": "Check ",
      "anchor": "supported image formats and decoding limits",
      "href": "/docs/supported-file-types/",
      "after": " and use the installation and privacy documentation linked below before selecting a large batch."
    },
    {
      "before": "If reviewed category moves fit your needs, see ",
      "anchor": "Galoria's individual $14.99 one-time license and pricing",
      "href": "/#download",
      "after": ". Scan and preview are available without activation; applying moves and Undo require a valid license."
    }
  ],
  "steps": [
    "Decide what you need after this session: newly arranged folders, or continuing albums, tags, search, face labels, and editing. That decision matters more than the AI label.",
    "For a proposed category move plan, test Galoria on copied supported images, inspect category assignments and destination paths, and exclude files whose current paths must remain unchanged.",
    "For ongoing collection management, register a copied test collection in digiKam, try its album/tag/search workflow, and download the optional models before evaluating its AI features.",
    "Before using either product on originals, verify format support, internet/setup requirements, the exact physical file actions, recovery settings, and a separate backup. Do not let two applications move the same live collection at the same time."
  ],
  "examples": [
    {
      "title": "Illustrative Galoria scenario: a mixed image inbox",
      "before": "A copied Inbox contains camera.jpg, capture.png, and notes.pdf. The user reviews Photos and Screenshots as the proposed destinations for the two images.",
      "after": "Approving those images moves them beneath Inbox / Image Organizer Output / Photos and Screenshots; notes.pdf is not part of the image move plan. Exact categories vary. This illustrates source-verified file operations, not a measured AI result."
    },
    {
      "title": "digiKam scenario: a continuing family archive",
      "before": "Years of photos already have meaningful folders, but you need people labels, ratings, searches, and edits while keeping track of the collection.",
      "after": "Start with a copied collection in digiKam and test those management functions. Its ordinary-folder storage does not require you to replace the existing hierarchy just to use a catalog. Explicit imports, moves, and editing still need deliberate choices."
    }
  ],
  "comparison": {
    "title": "Compare the workflow you actually need",
    "summary": "The columns describe documented behavior, not rankings or measured superiority. Official sources are provided below.",
    "headers": {
      "option": "Decision or capability",
      "bestFor": "Galoria",
      "tradeoff": "digiKam"
    },
    "rows": [
      {
        "option": "Main workflow",
        "bestFor": "Selected-folder scan, category suggestions, destination review, exclusions, then approved moves.",
        "tradeoff": "Continuing collection management with albums, tags, ratings, search, editing, and import tools."
      },
      {
        "option": "Physical files and ordinary folders",
        "bestFor": "Moves approved images under Image Organizer Output. Source paths change; no backup copy is created by applying the plan.",
        "tradeoff": "Collections use ordinary directories and physical album folders, plus databases. Explicit import and move/copy operations can relocate files."
      },
      {
        "option": "Local AI and limits",
        "bestFor": "BLIP captions plus filename/folder/metadata signals. Default caption cap: 300; analysis thumbnails: up to 384 pixels. Missing captions can leave metadata-only suggestions.",
        "tradeoff": "Local object auto-tagging, face detection and recognition, and other AI tools. Download optional models; face recognition needs initial labeling. Review results."
      },
      {
        "option": "Albums, tags, and search",
        "bestFor": "Review categories within a move plan; not a persistent album/tag/search collection manager.",
        "tradeoff": "Albums, tags, ratings, metadata search, and collection databases. These are reasons to choose a photo manager."
      },
      {
        "option": "Editing and named people",
        "bestFor": "No image-editing suite or named-person recognition workflow.",
        "tradeoff": "Image editor, configurable versioning, and trained face recognition. Check the save/versioning choices before changing originals."
      },
      {
        "option": "Platforms and formats",
        "bestFor": "Windows 10/11. JPG/JPEG, PNG, WEBP, GIF, BMP, TIF/TIFF, HEIC/HEIF, subject to decoding support. RAW formats such as CR2, NEF, and DNG and video are outside the supported image plan.",
        "tradeoff": "Windows, macOS, and Linux. Common photos, RAW decoding, and video management; verify your camera, format, and platform against current official packages."
      },
      {
        "option": "Price and setup",
        "bestFor": "$14.99 one-time license. Complete package bundles runtime and local models. Preview before activation; licensed apply/Undo.",
        "tradeoff": "Free and open source. Configure collection roots and the catalog database; download optional AI models when needed."
      },
      {
        "option": "Internet and local processing",
        "bestFor": "Local image processing; download, activation and later validation need internet. Cached license use is less than seven days after saved validation.",
        "tradeoff": "Downloaded AI models run locally. Downloads/updates and chosen online export services need a connection; do not assume every optional feature is offline."
      },
      {
        "option": "Preview, recovery, and backup",
        "bestFor": "Review a move plan before approval. Local history supports Undo, with missing-file and occupied-path limits. Keep a separate image backup.",
        "tradeoff": "Image previews, comparison tools and configurable editor versioning. Review file actions and trash settings; back up both photos and database rather than assuming a universal undo."
      }
    ]
  },
  "faqs": [
    {
      "question": "Is Galoria better than digiKam because it has AI?",
      "answer": "No. digiKam also provides local AI, including auto-tags and face recognition. Choose by the intended workflow and supported tasks; no comparative speed or accuracy testing is claimed here."
    },
    {
      "question": "Does digiKam require a proprietary photo container?",
      "answer": "No. Its collection roots and physical albums are ordinary directories and image files, alongside databases used for management. It can also move or copy files when you choose those operations. A catalog is not proof that originals are hidden in a closed library."
    },
    {
      "question": "Can I use both on the same photos?",
      "answer": "You can evaluate both on separate copied samples. Plan which application owns physical folder changes before using a live collection: external moves can disrupt paths known to a catalog. Keep backups and follow the catalog documentation when relocating images."
    }
  ],
  "related": [
    "automatic-photo-organizer",
    "offline-ai-photo-organizer",
    "docs/how-it-works",
    "docs/supported-file-types",
    "docs/install",
    "docs/privacy"
  ],
  "sources": [
    {
      "label": "digiKam manual and free/open-source status",
      "url": "https://docs.digikam.org/en/index.html",
      "note": "Official manual entry point and product licensing description; checked November 6, 2026."
    },
    {
      "label": "digiKam Albums View",
      "url": "https://docs.digikam.org/en/left_sidebar/albums_view.html",
      "note": "Physical albums, import actions, moving/copying images, and deletion settings."
    },
    {
      "label": "digiKam collections setup",
      "url": "https://docs.digikam.org/en/setup_application/collections_settings.html",
      "note": "Existing local, removable, and network collection roots."
    },
    {
      "label": "digiKam features and supported workflows",
      "url": "https://www.digikam.org/about/features/",
      "note": "Local AI, albums, search, image previews, editing, and RAW/batch tools."
    },
    {
      "label": "digiKam People View",
      "url": "https://docs.digikam.org/en/left_sidebar/people_view.html",
      "note": "Model download, face detection, recognition, and initial person labeling."
    },
    {
      "label": "digiKam image-editor settings",
      "url": "https://docs.digikam.org/en/setup_application/editor_settings.html",
      "note": "Configurable image versioning and save behavior; not a blanket backup guarantee."
    },
    {
      "label": "digiKam database settings",
      "url": "https://docs.digikam.org/en/setup_application/database_settings.html",
      "note": "Database setup, local records, and database-backup recommendations."
    },
    {
      "label": "digiKam official downloads",
      "url": "https://www.digikam.org/download/",
      "note": "Current Windows, Intel/Apple Silicon macOS, and Linux packages. Check platform requirements before installation."
    },
    {
      "label": "digiKam product overview",
      "url": "https://www.digikam.org/about/",
      "note": "Photo/RAW/video support, collection search and editing, and optional external-service plugins."
    }
  ]
});

seoPages.push({
  route: "alternatives/microsoft-photos",
  kind: "comparison",
  topic: "windows",
  title: "Galoria vs Microsoft Photos: Do You Need Both?",
  h1: "Galoria vs Microsoft Photos for Windows Folders",
  description: "Microsoft Photos can browse and manually move pictures. Compare its Windows and Copilot+ features with Galoria's reviewed folder proposals before buying.",
  eyebrow: "Comparison published by Computora AI",
  updatedAt: "2026-11-07",
  directAnswer: "You may not need Galoria. Microsoft Photos lets you browse local pictures, search, edit, create folders and manually move files on Windows. Choose Galoria only if you want it to analyze a selected mixed-image folder locally, propose category destinations, and let you review Move or Keep before approved images physically move. Galoria costs $14.99 once and runs on Windows 10 and 11. It does not replace Photos' gallery or editor, and its category suggestions can be wrong.",
  problemTitle: "The difference is who chooses each destination",
  problem: [
    "Microsoft Photos is a useful first choice when your image folders are small or you already know where each file belongs. Its documented folder actions let you create folders and drag pictures into them; a manual move changes the file's location. Browsing a local folder in Photos does not itself upload those images to OneDrive. Microsoft also offers optional OneDrive and iCloud views, depending on the connected accounts and setup.",
    "Microsoft Photos is not limited to filename-only search on every PC. Its documented name, date and file-type search works without Copilot+ hardware. On supported Windows 11 Copilot+ PCs, semantic search can find indexed local photos by a natural-language description. That feature helps retrieve an image; it is not Galoria's proposed category move plan. Availability also depends on Microsoft's supported languages, image types and indexing settings.",
    "Galoria scans supported images in the folder you select on Windows 10 or 11. Filenames, folder context, metadata and dimensions inform proposed categories; optional captions use a packaged local model for a bounded subset. Screenshot-like names and dimensions are hints, not reliable recognition of every cropped or renamed capture. Review the images and destinations, keep wrong suggestions in place, then approve the selected moves into Image Organizer Output. Galoria does not continuously watch the folder, create an OCR index or organize videos and RAW photos.",
    "Galoria's preview does not move files and does not require activation; applying moves and Undo require a valid license. Download and activation need internet, and later license validation needs occasional access. Local image analysis does not require cloud uploads or a separate model download. Approved moves change source paths rather than creating backup copies. Keep an independent backup, and check completion errors and undo limits before changing important folders.",
    "This comparison is published by Computora AI, the publisher of Galoria. Microsoft claims were checked against Microsoft's official documentation on November 7, 2026. Galoria behavior was checked against application source; this is not a hands-on performance or accuracy comparison.",
  ],
  contextualLinks: [
    { before: "For image formats, decoder requirements and scan limits, see ", anchor: "Galoria's supported-file documentation", href: "/docs/supported-file-types/", after: "." },
    { before: "For physical output, history and recovery, read ", anchor: "how Galoria's reviewed moves work", href: "/docs/how-it-works/", after: "." },
  ],
  steps: [
    "Try Microsoft Photos first: add your local picture folder, browse or search it, and manually create folders and move a few images if their destinations are obvious.",
    "Decide whether you need to find pictures in the current collection or change their physical folder paths. On an eligible Copilot+ PC, try local semantic search before moving files just to make them findable.",
    "If a mixed folder still needs repeated sorting decisions, use Galoria on a backed-up copy. Select the folder and inspect its category plan, source paths, proposed destinations and uncertain screenshots.",
    "Mark incorrect suggestions Keep. Apply only the reviewed selection with a valid Galoria license, then inspect Image Organizer Output and the completion result. Keep a separate backup.",
  ],
  examples: [
    { title: "Illustrative mixed folder, not a measured AI result", before: "A copied folder contains Screenshot_001.png, holiday.jpg and notes.pdf. You can drag the images into folders manually in Microsoft Photos.", after: "Galoria may propose Screenshots and Photos for the supported images. Review or keep each suggestion; approved images move beneath Image Organizer Output. The PDF is outside its image plan." },
    { title: "When Photos is sufficient", before: "A family collection is already filed by year and you mostly browse, search, crop or edit images.", after: "Use Microsoft Photos without buying Galoria. On eligible Windows 11 Copilot+ hardware, local semantic search may also help retrieve indexed pictures without moving them." },
  ],
  comparison: {
    title: "Choose the workflow, not an AI label",
    summary: "Both products can work with ordinary local files. Microsoft Photos offers more than a viewer; Galoria offers a different move-planning step.",
    headers: { option: "Decision", bestFor: "Microsoft Photos", tradeoff: "Galoria" },
    rows: [
      { option: "Browse and edit", bestFor: "Gallery, local folders, search and editing; suitable when existing folders work.", tradeoff: "Focused folder organization, not a gallery or image editor." },
      { option: "Move files", bestFor: "Create folders and move/copy selected files manually; a move changes the original path.", tradeoff: "Proposes categories and exact destinations; user reviews Move or Keep before approved physical moves." },
      { option: "Screenshots", bestFor: "Browse and search captures; manual filing remains available.", tradeoff: "Can suggest a screenshot category from heuristic signals, but crops and renamed images need review; no OCR search." },
      { option: "AI and hardware", bestFor: "Name/date/type search on ordinary PCs; indexed local-photo semantic search on supported Windows 11 Copilot+ PCs.", tradeoff: "Optional local image captions use bundled models on Windows 10/11; no Copilot+ hardware requirement. Captioning is selective and uncertain." },
      { option: "Internet and storage", bestFor: "Local browsing need not upload photos; optional OneDrive/iCloud access uses their accounts and connectivity.", tradeoff: "Local planning and files; download, activation and later license validation need internet. Not cloud backup." },
      { option: "Cost and fit", bestFor: "Included with Windows; start here if manual folder filing or photo viewing meets the need.", tradeoff: "$14.99 one-time license for reviewed category move plans. Buy only if that additional step saves repeated manual filing." },
    ],
  },
  faqs: [
    { question: "Does Microsoft Photos actually move pictures?", answer: "Yes. Microsoft documents creating folders and dragging photos into them; a move changes the file's location. Galoria differs by proposing destinations for a selected batch before approval, not by being the only way to move pictures." },
    { question: "Does Microsoft Photos have local AI?", answer: "On supported Windows 11 Copilot+ PCs, Microsoft documents semantic search over indexed local photos. Standard name, date and file-type search does not require that hardware. Semantic search is for finding pictures, not automatically filing them into categories." },
    { question: "Will Galoria identify every screenshot or read its text?", answer: "No. It uses filename, metadata, dimensions and optional local captions to suggest categories. It does not provide a reliable screenshot detector or OCR search index. Review ambiguous images and keep wrong suggestions in place." },
    { question: "Can either tool replace a photo backup?", answer: "No. Galoria physically moves approved files and keeps local move history, not a second copy of every image. Microsoft Photos can show local files without uploading them; optional connected cloud services have their own backup and sync behavior. Keep an independent backup before moving important pictures." },
  ],
  related: ["photo-organizer-windows", "photo-organizer-vs-manual", "organize-screenshots-automatically", "automatic-photo-organizer", "docs/how-it-works", "docs/supported-file-types"],
  sources: [
    { label: "Microsoft Photos: manage photos and folders", url: "https://support.microsoft.com/en-us/windows/apps/photos/manage-photos-and-videos-with-microsoft-photos-app", note: "Official folder browsing, manual move/copy, editing and connected-service features; checked November 7, 2026." },
    { label: "Microsoft Photos: search photos", url: "https://support.microsoft.com/en-us/windows/apps/photos/search-photos", note: "Official distinction between name/date/type search and semantic local-photo search on eligible Windows 11 Copilot+ PCs." },
    { label: "Microsoft: browse and manage photos on Windows", url: "https://support.microsoft.com/en-us/onedrive/windows/browse-your-photos-on-windows", note: "Official local-folder browsing, optional OneDrive access and local-photo upload behavior; features may vary by account and rollout." },
  ],
});

export const seoPagesByRoute = Object.fromEntries(
  seoPages.map((page) => [page.route, page]),
) as Record<string, SeoPage>;
