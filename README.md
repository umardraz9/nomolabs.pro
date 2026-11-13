# NomoLabs website

Modern static studio homepage inspired by the supplied numolabs.ai reference, with original studio copy and a six-product collection. Actual Caravan artwork is used; the other card visuals are clearly labelled illustrations. Filter buttons work without navigation. The existing Caravan page is preserved at `/games/the-last-caravan/`.

Run `npm run build`, then `npm run dev` for http://127.0.0.1:4174.

## Vercel

Import this folder as the project root, select Other, build with `npm run build`, output `dist`. The included vercel.json configures these settings. Or sign in to Vercel and run `vercel` from this folder to create a preview; `vercel --prod` publishes production. Add nomolabs.pro through the Vercel domain settings and use the DNS values Vercel provides.

## Before public launch

- Confirm legal owner and each product's release/store links. Public support email is confirmed as support@nomolabs.pro.
- Replace illustration cards with actual approved screenshots where available.
- Confirm Color Draw and Real Life Quest descriptions before adding detailed claims.
- Finalize per-product privacy policies. Alphabet Beach is a children's product and needs its own review.
- Confirm the AdMob publisher entry against the account's personalized app-ads.txt snippet, then place the verified file at the website root.
- The studio homepage now permits indexing and has canonical/social metadata, JSON-LD, robots.txt and sitemap.xml for nomolabs.pro. Caravan child pages/policies retain their draft noindex state. Do not submit draft policy URLs to Play Console. See SEO_REVIEW.md for deployment and Search Console follow-up.
- This homepage uses Google Fonts; account for this third-party font request in the finalized website privacy notice or self-host the fonts.

No analytics, contact form, ad SDK, or fabricated store buttons are added.

## Studio pages

`/about/`, `/team/`, and `/contact/` use the shared header/footer and have unique SEO metadata, canonical URLs and sitemap entries. Edit `src/team.json` to update confirmed names/roles. `npm run build` regenerates these pages with `scripts/pages.mjs`. Team WebPs preserve transparent alpha; PNG masters and the imagegen prompt are saved in `src/team-originals/` outside the deployed files. Contact links open the visitor's email app and the copy button copies the confirmed email; this website does not send messages itself or verify mailbox delivery.

Browser validation: 320, 390, 768, 1440px; navigation stays visible, no page overflow, portraits load, contact copy works, FAQs expand. Deployment remains pending.
