# SEO review — updated 17 November 2026

## Implemented

- Homepage title and description identify NomoLabs and its actual game/app collection.
- Removed homepage draft noindex; index/follow now permits production indexing.
- Canonical URL: https://nomolabs.pro/ (query-string preview variants share this canonical).
- Open Graph and Twitter large-image tags, with an original 1200×630 PNG share image.
- Organization, WebSite and WebPage JSON-LD with consistent domain/name. No invented reviews, ratings, business address or release links.
- Root robots.txt allows crawling and declares sitemap.xml. Sitemap contains the indexable homepage, About, Team and Contact pages; unfinished product landing pages are excluded.
- One H1, semantic headings/navigation, meaningful product copy, image alternatives and dimension attributes.
- Font connection hints. Decorative footer logo is scalable SVG text with an accessible name.
- Browser checks at 390, 768 and 1440px: no horizontal page overflow; metadata/JSON-LD parse correctly.

## Production verification

The current build is deployed at https://nomolabs.pro/ through Vercel. The apex domain and `www` redirect have valid HTTPS. On 17 November 2026, fresh build output matched the live homepage, About, Team, Contact, The Last Caravan landing page and privacy policy byte-for-byte. Live robots.txt and sitemap.xml also matched the repository build.

## Remaining SEO operations

1. Verify the domain in Google Search Console, submit https://nomolabs.pro/sitemap.xml, and inspect/request indexing of the four sitemap URLs.
2. Keep preview deployments protected or add preview-only noindex headers; do not apply those headers to production.
3. Finalize each unfinished product page before removing its intentional noindex directive or adding it to the sitemap.
4. Add confirmed store links as products become publicly available; do not publish placeholder store URLs.
5. Run PageSpeed Insights/Core Web Vitals periodically after production changes; no performance or ranking score is claimed here.

References: https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag and https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap

