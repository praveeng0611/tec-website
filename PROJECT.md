# PROJECT: TEC — Automotive Manufacturer Website

<!--
  AI CONTEXT
  ==========
  A corporate website for TEC, an automotive sheet metal parts manufacturer.
  Fully static / no database. Server-side contact form via API route.
  Stack: Next.js 14 (App Router) · React · Tailwind CSS
  Deployment: Vercel (via GitHub push) — vercel.json is present
  Workflow: Edit files → git add → git commit → git push → Vercel builds automatically
-->

## What This Is

The corporate website for **TEC** — an automotive components manufacturer specialising
in sheet metal tooling, stamping, welding, painting/CED coating, and anodizing.
The site presents the company's capabilities, products, sustainability commitments,
factory locations, and a contact form.

Key metrics: 5,000+ projects · 1,000+ experts · 7+ awards.

---

## Tech Stack

| Layer       | Technology                     |
|-------------|--------------------------------|
| Framework   | Next.js 14 (App Router)        |
| UI          | React + Tailwind CSS           |
| Icons       | lucide-react + inline SVGs     |
| Deployment  | Vercel (via GitHub push)       |

No database. No external email service configured (contact form may need setup).

---

## Pages & Routes

| Route            | Description                                                  |
|------------------|--------------------------------------------------------------|
| `/`              | Home — hero, services grid, stats, about snippet             |
| `/about`         | Company story, milestones timeline, leadership               |
| `/products`      | Products / capabilities listing                              |
| `/sustainability`| Sustainability commitments and practices                     |
| `/find-us`       | Factory locations and contact map                            |
| `/contact`       | Contact form                                                 |

---

## Key Files

| File / Folder             | Purpose                                          |
|---------------------------|--------------------------------------------------|
| `app/page.jsx`            | Homepage — services, stats, hero                 |
| `app/about/page.jsx`      | Company history and milestones                   |
| `app/products/page.jsx`   | Product and capabilities catalogue               |
| `app/sustainability/page.jsx` | Sustainability page                          |
| `app/find-us/page.jsx`    | Factory locations / map                          |
| `app/contact/page.jsx`    | Contact page                                     |
| `components/`             | Navbar, Footer, shared components                |
| `tailwind.config.js`      | Brand colour config                              |
| `vercel.json`             | Vercel deployment config                         |
| `public/`                 | Logo, images, favicons                           |

Note: The project root has both `next.config.js` and `next.config.mjs` — the `.mjs`
version is the active one; the `.js` is legacy.

---

## Services (from homepage)

1. Sheet Metal press tool, Welding & Checking fixtures
2. Sheet metal stamping (HPS, LPS), Wire & Tube forming — up to 1200 MPa tensile
3. Welding, Hemming, Riveting, Brazing (robotic + manual)
4. Painting, CED Coating, Anodizing

---

## Environment Variables

No environment variables required unless a contact form email service is added.

If Resend is added later, set:
```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
```

---

## Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

---

## Deploy

```bash
git add <changed-files>
git commit -m "describe the change"
git push origin main
# Vercel auto-deploys within ~2 minutes
```

---

## Notes

- Fully static — no database, no auth, no CMS.
- All content (products, services, company data) is hardcoded in page components.
- Real company logo is in `public/` — do not replace without client approval.
- SEO metadata and structured data (JSON-LD) were added for search optimisation.
- The company profile PDF (source document used for content) is referenced in
  task history but not stored in this repo.
