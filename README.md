# Galoria AI Website

Windows-only marketing and SEO site for Galoria AI, positioned as an AI photo organizer for Windows. The implementation is copied from the Foldora AI website template and keeps its layout, styles, components, animations, responsive breakpoints, and static SEO generator.

## Verified Product Scope

- Windows 10 and Windows 11 desktop application
- Image-only discovery for JPG, JPEG, PNG, WEBP, GIF, BMP, TIFF, HEIC, and HEIF
- Local metadata, filename, folder-context, EXIF, dimension, transparency, animation, and hash analysis
- Optional local BLIP image captioning for ambiguous images when the bundled model is available
- Fixed photo categories with review, reassignment, exclusion, and editable destination-folder names
- Exact move preview, local history logs, latest-operation undo, and no automatic deletion
- Original filenames are preserved unless collision handling requires a safe suffix
- No image upload to a cloud organizer
- License activation is required before the application workflow is available

The local installer is still Foldora-branded, unsigned, and about 1.4 GB. Do not publish it as a Galoria download. Keep the download CTA pointed at the on-page release section until a renamed, validated Galoria installer and public release URL exist.

## Development

```powershell
npm install
npm run dev
```

Open the local URL printed by Vite.

## Verification

```powershell
npm run lint
npm run test
npm run seo:check
npm run build
npm run preview
```

The production site is generated in `dist/`. The build also generates and audits static SEO pages, `sitemap.xml`, `robots.txt`, and `llms.txt`.

## Deployment

Deploy the contents of `dist/` to any static host configured for `https://galoriaai.com` and SPA fallback to `index.html`.

For a repository-hosted `docs/` deployment:

```powershell
npm run deploy
```

Then commit and publish the generated `docs/` directory from the repository branch configured for static hosting. Before public deployment:

1. Build and validate a Galoria-branded production installer.
2. Publish the installer at a stable release URL and connect every download CTA to it.
3. Confirm the production domain in `src/config/product.ts`, `scripts/audit-static-pages.ts`, and DNS/hosting configuration.
4. Add a real analytics measurement ID only if analytics is required.

