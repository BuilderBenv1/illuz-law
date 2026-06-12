# Iluz Lawyer's Office Website

Modern Hebrew-first website for Iluz Lawyer's Office / ILUZ LAWYERS in Jerusalem, Israel.

## Included

- Responsive RTL landing page for a law office
- Local generated hero image: `public/hero-jerusalem-urban-renewal.png`
- Canonical preview image for hosting: `public/screenshot.jpeg`
- LegalService, WebSite, WebPage, and FAQ structured data
- SEO metadata, canonical URL, Open Graph, Twitter card, robots, sitemap, and `llms.txt`
- Vinext build output for Cloudflare Worker-compatible Sites hosting

## Practice Signals

The content is optimized around:

- פינוי בינוי והתחדשות עירונית
- תמ"א 38
- ייצוג דיירים ונציגויות
- מקרקעין, עסקאות מכר ורישום זכויות
- ליטיגציה אזרחית, חוזים, הוצאה לפועל ותאגידים
- Jerusalem, Israel and Iluz Lawyer's Office entity terms

## Local Commands

```bash
npm ci
npm run dev -- --hostname 127.0.0.1 --port 3000
npm run build
npm run lint
```

## Deployment Notes

The generated `dist/` folder contains the deployable Sites build. A packaged artifact is also available one level up as:

```text
../iluz-law-modern-site-dist.tar.gz
```

To publish through Sites, create or connect a Sites project, push the exact source state to the configured source repository, then save and deploy a version using the packaged `dist` artifact.

Search rankings cannot be guaranteed by markup alone. This build provides a strong technical/content foundation; ranking will also depend on backlinks, local citations, Google Business Profile quality, ongoing expert content, reviews, and domain history.
