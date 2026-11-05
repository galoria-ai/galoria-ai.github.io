# Ordinary-folder acquisition improvement

Existing destination: https://galoriaai.com/automatic-photo-organizer/ . Research: opportunity 2 in the sibling Cleanora site's ACQUISITION-RESEARCH-2026-11-05.md. Recent 4f03022 covers same-filename conflicts on a different page; this edit links that page rather than repeating its detailed answer.

## Source verification (application inspected read-only)

- backend/galoria/paths.py: default output is Image Organizer Output inside the selected source folder.
- backend/galoria/planner.py and frontend/src/App.tsx: normal UI scan is recursive, excludes the existing output tree, stores local metadata-cache-v1.json, and generates a preview plan.
- backend/file_ops.py build_operations: destination categories come from the reviewed plan; destination starts with source.name, with conflict suffix handling. execute_operations uses shutil.move, not a copy-only import. It records actual moved paths in local JSON history. The source file is relocated; there is no second source copy to serve as a backup. Source directories are not recreated as an archive hierarchy.
- backend/image_discovery.py: discovers supported image extensions and omits unsupported files; selected output, ignored folders, hidden/system files and scan bounds limit discovery. Unsupported RAW/PSD files are not converted or organized as supported images.
- backend/galoria/executor.py: only selected plan items are applied; size/modified-time changes reject stale reviewed items; corrupt/error-marked images are rejected for apply. Excluded images remain in place. Licensing guards apply and undo; a normal independent image viewer does not use Galoria's history to open the output images.

Result: output images remain ordinary filesystem files, browsable independently of Galoria. That does not establish that the application keeps no persistent data: metadata cache and history exist, and recovery relies on application records. No app-uninstall, universal metadata-preservation or guaranteed data-recovery claim was added.

## Website change

The existing page answers moves versus managed-library import immediately, then explains filenames, source folders, unsupported/unreadable images, persistent local records, review and separate backups. A single folder-output example is explicitly illustrative and assumes the user reviewed the named categories; no measured classifier result is invented. A second decision scenario explains when unchanged source paths require a different approach. No named competitor claim is introduced. Publisher ownership, relevant workflow/format docs and one individual-pricing route are included using existing templates.

Validation covers build/static audit, pricing navigation, initial-HTML/FAQ consistency, and actual desktop/mobile browser layout. No claim of increased rankings, indexing, AI citations or sales.

Completed checks: build and 23-URL static audit passed; 18 existing pricing-navigation and anchor tests passed. Chrome rendered the built page at 1440px and 390px; scroll widths were 1425px and 390px. The mobile comparison table remains in its own scrolling container. Screenshots were visually inspected and are retained outside Git in the TEMP folder galoria-folder-output-20261105. Supporting workflow, supported-format, filename-conflict and individual-pricing destinations returned HTTP 200. FAQ markup agrees with visible initial HTML. An initial inherited browser check expected a dollar price on this content page; that irrelevant assertion was corrected to check the one-time purchase context, while the individual-pricing link was separately verified.
