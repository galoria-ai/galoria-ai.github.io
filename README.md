# Galoria AI — Offline AI Photo Organizer for Windows

Galoria AI is a privacy-first **AI photo organizer for Windows 10 and Windows 11**. It categorizes screenshots, camera photos, memes, receipts, scans, wallpapers, and mixed image folders locally, then lets users review every proposed move before applying changes.

**Official website:** [galoriaai.com](https://galoriaai.com)

This repository contains the React and TypeScript marketing website for Galoria, including product pages, documentation, photo-organization guides, comparisons, and statically generated SEO landing pages.

## What Galoria Does

Galoria helps users organize photos on Windows without uploading their image library to a cloud organizer.

- Discovers JPG, JPEG, PNG, WEBP, GIF, BMP, TIFF, HEIC, and HEIF images
- Analyzes filenames, folder context, metadata, EXIF data, dimensions, transparency, animation, and hashes locally
- Can use optional local BLIP image captioning for ambiguous images when the bundled model is available
- Suggests fixed photo categories for screenshots, camera photos, receipts, scans, design assets, and other common images
- Lets users reassign images, exclude items, and rename destination folders before applying a plan
- Shows exact destinations and naming conflicts before images move
- Preserves original filenames unless safe collision handling requires a suffix
- Keeps local history and supports undo for the latest organization operation
- Never deletes photos automatically

The desktop workflow requires license activation.

## How the AI Photo Organizer Works

1. Select an image folder such as Pictures, Downloads, Screenshots, or Camera Roll.
2. Let Galoria analyze supported image files locally.
3. Review suggested categories, exclusions, folder names, and destination paths.
4. Reassign ambiguous photos or exclude anything that should stay in place.
5. Confirm only the image moves you want to apply.

## Supported Image Formats

| Image type | Extensions |
| --- | --- |
| Photos and graphics | JPG, JPEG, PNG, WEBP, BMP, TIFF |
| Animated images | GIF, animated WEBP |
| Apple and mobile photos | HEIC, HEIF |

Galoria is intended for screenshots, camera photos, people shots, receipts, scanned documents, product images, wallpapers, memes, travel photos, food photos, pet photos, and design assets.

## Private, Local Photo Organization

Galoria analyzes supported image files on the Windows device. Photos do not need to leave the computer for categorization, preview, or organization. Internet access is needed to download and activate the app, while image analysis and planning run locally.

Every proposed organization plan remains editable before files move. Galoria provides a destination preview, avoids automatic deletion, preserves filenames where possible, and keeps a local history for the latest-operation undo workflow.

## Website SEO Features

The website combines a React interface with crawlable static content for people searching for private photo-management tools.

- Search-focused pages for AI photo organization, automatic photo sorting, screenshot cleanup, and offline image management
- Static HTML generation for product, feature, documentation, category, comparison, and guide routes
- Unique titles, meta descriptions, canonical URLs, and social metadata
- Schema.org structured data for the website, organization, software application, articles, breadcrumbs, and FAQs
- Automatically generated `sitemap.xml`, `robots.txt`, and `llms.txt`
- A build-time SEO audit that detects missing or inconsistent metadata

## Technology Stack

- React 18 and TypeScript
- Vite
- Tailwind CSS and shadcn/ui
- Radix UI
- React Router
- Framer Motion
- Vitest and Testing Library

## Local Development

### Requirements

- Node.js
- npm

### Install and run

```powershell
git clone https://github.com/galoria-ai/galoria-ai.github.io.git
cd galoria-ai.github.io
npm install
npm run dev
```

Open the local URL printed by Vite.

## Available Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run test` | Run the Vitest test suite |
| `npm run lint` | Check the codebase with ESLint |
| `npm run seo:check` | Generate and audit static SEO pages |
| `npm run build` | Run SEO generation and create the production build |
| `npm run preview` | Preview the production build locally |
| `npm run deploy` | Build and prepare a repository-hosted `docs/` deployment |

The production site is written to `dist/`.

## Project Structure

```text
src/
├── components/       # Homepage and shared UI components
├── config/           # Product name, domain, platform, and download settings
├── content/          # Feature, documentation, category, FAQ, and SEO content
├── lib/              # SEO, analytics, and shared utilities
└── pages/             # Homepage and reusable content-page layouts
scripts/               # Static-page generation, SEO audit, and deployment scripts
public/                # Generated crawlable pages and public assets
docs/                  # Repository-hosted production output
```

## Production Deployment

Deploy the contents of `dist/` to a static host configured for `https://galoriaai.com`. The host should serve `index.html` as the fallback for client-side routes.

For a repository-hosted `docs/` deployment:

```powershell
npm run deploy
```

Commit and publish the generated `docs/` directory from the branch configured for static hosting.

## Current Release

Galoria 0.2.0 is available for Windows 10 and Windows 11 through the official purchase flow on [galoriaai.com](https://galoriaai.com). Open **Download for Windows**, complete checkout with a supported payment option, and follow the download instructions supplied with the purchase.

Use only a Galoria-labeled Windows package obtained through the official product flow. Internet access is required for license activation; image analysis and planning run locally. For setup or purchase-delivery help, contact [support@computoraai.com](mailto:support@computoraai.com).

## License

No open-source license is currently declared in this repository. All rights are reserved unless a license is added.
