# Buyer question addressed

Question: **What happens if two photos have the same filename when I organize them?**

Existing destination: https://galoriaai.com/photo-organizer-windows/ . No new page needed: collision handling is a selection criterion for Windows photo organization, and this page previously answered platform, screenshots and exports without explaining conflicts.

## Research (five questions maximum)

1. Local photo organization without uploads: already covered by Galoria privacy and offline pages. Public demand example: https://www.reddit.com/r/Windows11/comments/1srasfg/ .
2. Date taken versus modified date: Foldora comparison b106445 already explains modified-date behavior. Public request: https://www.reddit.com/r/software/comments/s7u8cx/ .
3. HEIC imports on Windows: Galoria supported-format docs already state local decoder limitations. Public discussion: https://www.reddit.com/r/software/comments/1h0irl2/ .
4. Separating camera photos, screenshots and downloads: existing screenshot pages cover desktop sorting; the explicit iOS request is outside our products' platforms. https://www.reddit.com/r/ApplePhotos/comments/1wyppqe/ .
5. Same-name collisions versus duplicate images: selected gap. In https://www.reddit.com/r/software/comments/1ecjmkp/ the poster explicitly seeks organizing software and asks whether same-named images cause errors or deletion. They later ask for free software; this is evidence of a software-selection question, not willingness to pay for Galoria or a forecast of current demand. The thread is archived and dates from 2024. The Windows photo-manager review above independently describes frustrating same-name collision handling.

## Verification and implementation

Application source inspected read-only: backend/file_ops.py make_unique_destination, build_operations and execute_operations reserve/check paths and choose numbered suffixes, including a second check before moves. backend/galoria/executor.py records actual moved paths and reports errors. backend/galoria/planner.py verifies candidate exact duplicates by SHA-256; duplicates remain selected unless unreadable, and there is no automatic duplicate deletion in these operations. No claim of perceptual duplicate detection or universal overwrite protection was added.

The existing page now explains collision handling, final-name changes after Preview, error review, backup precautions and exact-copy versus visual-similarity limits. The filename example is explicitly illustrative. Shared page data supplies both initial HTML and React/FAQ markup. Added links to existing workflow and format docs. The existing single contextual pricing link now connects this workflow to the Windows 10/11 one-time purchase offer. Publisher ownership is disclosed. No new competitor claim, rating or benchmark.

Validation: existing static sitemap audit/build, pricing navigation tests, initial HTML FAQ/visible-text agreement and one contextual pricing link. Deployment and raw production checks are reported with the implementation result; submission/indexing/citations/sales outcomes are not inferred.
