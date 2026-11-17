# Vercel deployment — 5 November 2026

Project: nomolabs
Project ID: prj_FpiZ0kKaNAa9qIFWML0wV8g0AwzO
Team ID: team_tRWHBmBUxZD69m71L7zXPtwF
Production deployment: dpl_8CJjDqUgSxjsKB6PmKWsrGyELxGe (READY)
Public URL: https://nomolabs-sigma.vercel.app/
Domain: https://nomolabs.pro/ (active and ownership verified)
WWW: www.nomolabs.pro (308 redirect to apex configured)

Uploaded 27 static files from dist, with a deployment-specific static vercel.json (clean URLs and security headers). No credentials stored. API deployment uses built output directly; source project's vercel.json remains configured for future source builds.

Verified deployed homepage, About, Team, Contact, robots.txt and sitemap.xml all HTTP 200. Public Vercel homepage works without login. Existing game policy drafts remain labelled draft/noindex.

## Hostinger DNS configuration

Keep byte.dns-parking.com and pixel.dns-parking.com as nameservers. Replace old website A/AAAA records for @ and conflicting www records with the exact Vercel project recommendations:

| Type | Name | Value |
|---|---|---|
| A | @ | 216.198.79.1 |
| A | @ | 64.29.17.1 |
| CNAME | www | b38bc5c118b3c5f6.vercel-dns-017.com |

Keep MX/TXT and unrelated subdomain records. DNS was not changed by the agent. Hostinger connector timed out; user requested manual Hostinger setup. No Hostinger credentials requested.

The user applied the DNS records manually. MX/TXT and unrelated subdomain records were retained.

## Domain activation confirmed

User updated Hostinger DNS manually. Vercel reports misconfigured=false for apex and www. Issued auto-renewing TLS certificate cert_8PLF4fgGHDWf5YLKbOKe5VjY for both domains. HTTPS requests verified with valid certificate: home, About, Team, Contact, robots.txt, sitemap.xml, team portrait and social preview all returned HTTP 200. https://www.nomolabs.pro/ resolves through redirect to https://nomolabs.pro/.

## Caravan journey and gameplay redesign

Reused five original chapter illustrations as optimized WebP artwork. Journey now has native accessible chapter accordions and synchronized artwork; gameplay has enlarged screenshot galleries, lightbox, combat/rescue/trading explanations. Added original four-villain concept image from exec-1cac830d (generated image index entry 6), served as villains-chronicle.webp, with concept-art label and tactics for Chapters I–IV. It does not claim to depict the Chapter V Iron Reeve. Original source image is unchanged. Mobile/tablet/desktop checks: all five chapter selections, image decoding, lightbox close/focus, no overflow or browser errors at 390/768/1440px. All child page assets/navigation paths are absolute so slashless product URLs work correctly.
Published final Caravan refresh as dpl_GnQjgA3SGvpFzCtxgfQ1oyHKBsjb (READY). Live browser verified slashless user URL, chapter switching, original villain artwork/lightbox, gameplay image, CSS grid and zero failed HTTP responses.

## Repository and live-site verification — 17 November 2026

The local `main` branch and `origin/main` were verified at the same source revision before this documentation refresh. A clean `npm run build` completed successfully. The resulting homepage, About, Team, Contact, The Last Caravan landing page and privacy policy matched their live HTTPS responses byte-for-byte; robots.txt and sitemap.xml matched as well. Local build output, responsive QA captures, Vercel metadata and environment files are intentionally excluded from Git.
