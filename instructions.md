Generate a production-ready React marketing site for **Lancashire Ag**, a construction and agriculture contractor, following this detailed brief:

---

**1. Objective**  

Create a fast, static marketing site that drives lead conversions via clear CTAs and a streamlined quote form. No CMS; use Markdown or JSON where necessary to simplify maintenance.

---

**2. Tech Stack**  

- **Framework**: React  

  - Use **Next.js with App Router** for static generation and file-based routing.  

- **Styling**: Tailwind CSS (utility-first, responsive).  

- **Forms**: Web3Forms (static, spam-protected, serverless).  

- **Icons**: Lucide or simple outline set.  

- **Analytics**: Optional --- Vercel Analytics or Plausible.  

- **Hosting**: Vercel, with GitHub integration (PR previews, protected `main` branch).  

- **Image Handling**:  

  - Store locally in `/public`.  

  - Compress to WebP on build where possible.  

  - Use Next.js `<Image>` for responsive and optimized image loading.

---

**3. Site Structure**  

**Pages to Include**:

- `/` --- Home  

- `/services` --- Service categories  

- `/services/[slug]` --- Individual service details  

- `/projects` --- Past work with details  

- `/about` --- Company overview  

- `/contact` --- Form + alternate contact info  

- Footer Links: H&S & Environmental, Insurance & Accreditations, Privacy, Terms

---

**4. Key Features & Components**

**Global Layout**:

- Header: logo, sticky scroll, primary CTA ("Request a Quote")

- Footer: navigation, legal links, service region info

**CTAs (Call-To-Actions)**:

- Primary: "Request a Quote" (button)

- Secondary: "Speak to the Team"

- Tertiary: "Download Capability Statement (PDF)" (`/public/capability.pdf`)

**Home Page Sections**:

1\. Hero (headline, subheadline, CTAs)

2\. Highlight trio (value props)

3\. Logos row (client or partner logos)

4\. Service teaser grid

5\. Featured project highlight

6\. "Why Lancashire Ag" value props

7\. Testimonial

8\. Lead capture strip (quote form)

**Other Pages**:

- **Services (index)**: Grid of 7 services with titles, blurbs, and CTA buttons.

- **Service Detail**:  

  - Content: What we do / Where it helps / Deliverables or Outcomes  

  - Sidebar CTA ("Request a Quote")

- **Projects**: Cards with title, client, outcome, metrics, and badges for duration/team/plant.

- **About**: Short story + credentials (insured, RAMS, local).

- **Contact**:  

  - Form fields: Name, Company, Email, Phone, Postcode, Service Interest (select), Message  

  - Success message: "We'll get back to you within X working hours"  

  - Include privacy link and alt contact info  

  - Add seasonal winter note near form

---

**5. Forms Integration (Web3Forms)**  

- Use REST endpoint with access key from `.env`  

- Include:  

  - Honeypot field  

  - Basic HTML validation  

  - Optional Zod schema validation  

  - Inline success/error state messaging  

- Success: Show inline confirmation message  

- Optional: Web3Forms auto-reply email

---

**6. Color Palette (WCAG-AA compliant)**  

- `--bg`: #fffcf2 (cream background)  

- `--muted`: #ccc5b9 (subtle accents)  

- `--ink-1`: #403d39 (primary text)  

- `--ink-2`: #252422 (headings)  

- `--accent`: #eb5e28 (CTAs, links)

**UI Rules**:

- Buttons:  

  - Primary: solid `accent`  

  - Secondary: outline `ink-2`  

- Cards:  

  - Light background, subtle shadow  

  - Accent-colored top border for emphasis  

- High contrast: test accent on cream backgrounds

---

**7. SEO, Schema & Accessibility**  

- Meta tags per page (title, description) from approved copy  

- JSON-LD:  

  - LocalBusiness + Service schema  

  - Project pages use Article schema (with image + metrics)  

- Accessibility:  

  - Focus outlines, keyboard nav  

  - Proper form labels and error messages  

- Performance:  

  - Preload hero image  

  - Lazy-load below-the-fold content  

  - Defer non-critical JS  

  - Use system font fallback

---

**8. File/Repo Structure**  

/src

/components

Header.tsx, Footer.tsx, Button.tsx, Card.tsx, Section.tsx

/sections

HomeHero.tsx, HomeServices.tsx, HomeProject.tsx, HomeValueProps.tsx,

Testimonial.tsx, LeadCapture.tsx

/app (if Next.js App Router)

page.tsx (Home)

/services/page.tsx

/services/[slug]/page.tsx

/projects/page.tsx

/about/page.tsx

/contact/page.tsx

/content

*.json or *.md for copy + projects

/styles

tailwind.css, tokens.css

/utils

form.ts, seo.ts, analytics.ts

/public

images/, capability.pdf

---

**9. CI/CD & Deployment (Vercel)**  

- Deploy from GitHub  

- `main` → production  

- `feature/*` → preview deploys  

- Environment Variables:  

  - `WEB3FORMS_ACCESS_KEY`  

  - `NEXT_PUBLIC_SITE_URL`  

  - `ANALYTICS_*` (optional)  

- Build commands:  

  - `next build && next export` (prefer static output)  

- PR Checks (optional): Type-check, ESLint, Lighthouse CI  

- Rollbacks: Vercel "Promote Previous Deployment"

---

**10. Copy Integration Strategy**  

- Import content from `/content/*.json` or props-based component structures.  

- Ensure all headings, service blurbs, outcomes, testimonials, etc. are editable via static files.

---

**11. Expected Output**  

- A fully responsive, accessible React site (Next.js + Tailwind), deployed on Vercel  

- All core pages with structured, real content (placeholder images acceptable)  

- Working quote/contact forms via Web3Forms  

- Integrated SEO metadata and schema  

- Capability statement PDF available in `/public`