# SEO review — 5 November 2026

## Implemented

- Homepage title and description identify NomoLabs and its actual game/app collection.
- Removed homepage draft noindex; index/follow now permits production indexing.
- Canonical URL: https://nomolabs.pro/ (query-string preview variants share this canonical).
- Open Graph and Twitter large-image tags, with an original 1200×630 PNG share image.
- Organization, WebSite and WebPage JSON-LD with consistent domain/name. No invented reviews, ratings, business address or release links.
- Root robots.txt allows crawling and declares sitemap.xml. Sitemap contains only the indexable homepage; unfinished product policies and pages are excluded.
- One H1, semantic headings/navigation, meaningful product copy, image alternatives and dimension attributes.
- Font connection hints. Decorative footer logo is scalable SVG text with an accessible name.
- Browser checks at 390, 768 and 1440px: no horizontal page overflow; metadata/JSON-LD parse correctly.

## Live launch checks still required

The domain resolves and a direct HTTPS request returned HTTP 200 with the title Coming soon. The new NomoLabs website is not yet deployed there. This is an implementation review, not a live indexing or ranking confirmation.

1. Deploy the current dist output to Vercel and connect nomolabs.pro; verify HTTPS and public access.
2. Redirect www to the selected apex domain through Vercel domain settings. Do not change DNS without inspecting the actual project values.
3. Verify the domain in Google Search Console, submit https://nomolabs.pro/sitemap.xml, and inspect/request indexing of the homepage.
4. Verify canonical, robots, social-preview.png and response status on the deployed domain. Preview deployments should remain protected or have a preview-only noindex header; do not apply that header to production.
5. Finalize each product page and policy before removing its existing noindex. Child Caravan pages intentionally retain their draft policy status.
6. Add real store links and confirmed support/legal contact details when available. No App Store, Play Store or generic studio privacy links have been invented for the footer.
7. Run PageSpeed Insights/Core Web Vitals after deployment; no performance or ranking score is claimed here.

References: https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag and https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap

