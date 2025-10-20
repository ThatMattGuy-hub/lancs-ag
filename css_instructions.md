Prompt: Build "Lancashire Ag" website (React, Tailwind, Web3Forms, Vercel)
==========================================================================

**Goal:** Generate a production-ready, CMS-free marketing website for Lancashire Ag. It should feel **professional but homely**: warm, trustworthy, crafted, with tasteful motion and micro-interactions. Ship clean code, excellent a11y, fast performance, and SEO best practices.

Tech & Constraints
------------------

-   **Framework:** React (Vite preferred). Use file-based routes via `react-router-dom`.

-   **Styling:** Tailwind CSS with design tokens; include `@tailwindcss/typography` and `@tailwindcss/forms`.

-   **UI Library:** shadcn/ui for primitives (Buttons, Cards, Dialog, Input, Textarea, Select, Badge).

-   **Icons:** `lucide-react`.

-   **Animation:** `framer-motion` (layout transitions, scroll-reveal, subtle parallax).

-   **Forms:** `react-hook-form` + `@hookform/resolvers` + `zod` for validation; submit to **Web3Forms**.

-   **Images:** Local `/public`, responsive `<img srcSet>`; build to WebP where possible.

-   **Routing/Meta:** `react-router-dom`; `react-helmet-async` for titles/meta.

-   **State:** Local component state only; no global state libs.

-   **Analytics:** Add placeholder for Vercel Analytics / Plausible (opt-in).

-   **Build/Deploy:** Vercel (GitHub). Provide `README.md` with run/build/deploy steps.

-   **Env Vars:** `WEB3FORMS_ACCESS_KEY` pulled from `import.meta.env`.

Brand & Theme
-------------

Use this palette and derive Tailwind CSS variables/tokens:

`--bg:        #fffcf2;  /* page background (warm cream) */
--muted:     #ccc5b9;  /* subtle accents, borders, dividers */
--ink-1:     #403d39;  /* primary body text */
--ink-2:     #252422;  /* headings / strong */
--accent:    #eb5e28;  /* primary CTAs, focus highlights */`

-   Font stack: system UI with gentle letter-spacing; headings slightly tighter than body.

-   **Mood:** warm neutrals, generous white space, soft card shadows, rounded-2xl corners.

-   **Accessibility:** Minimum WCAG AA contrast; visible focus rings using `--accent`.

Site Map
--------

-   Home (`/`)

-   Services index (`/services`)

-   Service detail (`/services/:slug`)

-   Projects (`/projects`)

-   About (`/about`)

-   Contact (`/contact`)

-   Footer pages: Privacy, Terms (simple markdown pages)

Project Structure
-----------------

`/src
  /components    (Button, Container, Card, Section, Header, Footer, LogoRow, Testimonial, Metric, BadgeList, Form)
  /sections      (HomeHero, HomeHighlights, HomeServices, HomeProject, HomeWhyUs, HomeTestimonial, HomeLeadCapture)
  /pages         (Home, ServicesIndex, ServiceDetail, Projects, About, Contact, Legal)
  /content       (services.json, projects.json, copy.json)
  /lib           (seo.ts, forms.ts, animations.ts, schema.ts)
  /styles        (globals.css, tokens.css)
  /assets        (logos, photos, favicon)`

Global Elements & Behaviors
---------------------------

### Header

-   Sticky, semi-translucent on scroll with backdrop blur; elevates to shadow-md after 24px scroll.

-   Left: logo; center: primary nav; right: primary CTA "Request a Quote".

-   Mobile: hamburger → `Dialog` sheet with nav + CTA; body scroll locked when open.

-   Active link uses subtle underline + accent dot.

### Footer

-   Split into: Logo + short comfort copy; Quick Links; Services list; Contact info (tel, email, service area).

-   Small "We work safely through winter" seasonal line.

-   Newsletter field (non-functional placeholder, disabled by default).

### Buttons

-   **Primary:** accent solid; hover lifts 2px; focus ring using accent.

-   **Secondary:** outline in `--ink-2`; hover background `--muted/40`.

### Cards

-   Soft shadow, rounded-2xl, border `--muted`; hover: translate-y-1 + shadow-lg.

-   Optional accent top border for emphasis on featured items.

Page-Level Sections & Detailed Behaviors
----------------------------------------

### Home

1.  **Hero**

    -   H1 + subhead + two CTAs: "Request a Quote" (primary), "Speak to the Team" (secondary tel: link).

    -   Subtle parallax background texture (no heavy images).

    -   Enter animation: staggered fade/slide up; CTA buttons spring in.

    -   Add small trust badges row (e.g., insured, tickets, RAMS prepared).

2.  **Highlights Trio**

    -   Three value props with icons; on hover each card slightly tilts (tiny) and accent underline animates in.

3.  **Services Teaser Grid**

    -   6--8 services; each card has icon, 1-liner, "Request a Quote" micro-CTA.

    -   On hover: reveal a short "Where it helps" tooltip-like caption.

4.  **Featured Project**

    -   Large image (object-cover), title, client, scope, outcome metrics (Badges).

    -   On scroll into view: metrics count-up (from 0) with `framer-motion` value animation.

5.  **Why Lancashire Ag**

    -   Two-column: proof bullets (local, insured, RAMS, plant) and a warm "homely" paragraph.

    -   Add small inline testimonial portrait chip.

6.  **Testimonial**

    -   Single, sincere quote; slight background pattern; quotation marks via icon; fade-in on scroll.

7.  **Lead Capture Strip**

    -   Short line + email/phone + "Get a fast quote" CTA; sticky on very tall pages is **off** (avoid annoyance).

### Services Index

-   Intro paragraph + filterable grid (client-side filter by category using chips).

-   Each card links to `/services/:slug`; include small list of deliverables.

-   Keyboard navigable; cards focusable; Enter opens detail.

### Service Detail

-   Consistent hero with service title and 1-sentence summary.

-   Sections: **What we do** → **Where it helps** → **Deliverables/Outcomes**.

-   Right sidebar: sticky "Request a Quote" card with 3 bullet reassurances.

-   Local table of contents (hash links) that highlights active section while scrolling.

### Projects

-   Responsive masonry/grid of project cards with: title, client, scope, outcomes, duration/team/plant badges.

-   Optional filter by type of work.

-   Clicking a card opens a lightweight Dialog with gallery (keyboard accessible, arrow keys to navigate).

### About

-   Short origin story + values.

-   Proof list (tickets, insurance, RAMS, local knowledge).

-   Team strip with names/roles (no bios needed), hover shows a human detail (e.g., "loves early starts").

### Contact

-   **Form fields:** Name, Company, Email, Phone, Site Postcode, Service Interest (Select), Message, hidden honeypot.

-   **Validation:** zod schema; inline errors; disable submit until valid; show small character counters for Message.

-   **Submission:** POST to Web3Forms with access key from `import.meta.env.WEB3FORMS_ACCESS_KEY`.

-   **States:** loading (button spinner), success (inline card with friendly copy + mailto/tel follow-ups), error (retry + alternate contact).

-   **Spam:** honeypot field + Web3Forms anti-spam enabled.

-   **Privacy:** short text with links to Privacy & Terms.

Motion & Effects (tasteful, low-jank)
-------------------------------------

-   Use `framer-motion` variants with reduced-motion support (`prefers-reduced-motion` → disable non-essential animations).

-   **Scroll reveal:** fade-up with 8--16px translateY, stagger children in grids.

-   **Parallax:** only in hero background; transform range ≤ 10px to keep subtle.

-   **Hover:** scale 1.01--1.02 and slight shadow changes; never break layout.

-   **Focus:** always visible outlines; avoid box-shadow-only focus.

Content Model (no CMS)
----------------------

-   Store copy in `/content/*.json` (headlines, blurbs, value props, services, projects).

-   Service slugs map to detail pages; project cards read from JSON.

-   Provide sample realistic data for 6+ services and 6+ projects.

SEO & Metadata
--------------

-   Per-route `<Helmet>` with title (≤60 chars) and description (≤160 chars).

-   JSON-LD: `LocalBusiness` on Home, `Service` on service pages, `Article`/`CreativeWork` per project card.

-   Open Graph/Twitter tags with fallback image in `/public/og.jpg`.

-   Canonical URLs and basic sitemap.xml generation script (node).

Accessibility
-------------

-   Landmarks: header, nav, main, footer.

-   Announce form success via `aria-live="polite"`.

-   All interactive elements keyboard operable, visible focus, sufficient hit targets.

-   Meaningful `alt` text for images; decorative images `aria-hidden`.

Performance
-----------

-   Lighthouse ≥ 90 on Performance/Accessibility/Best Practices/SEO.

-   Images lazy-load; responsive sizes; prefetch critical routes on idle.

-   Split vendor chunks; defer non-critical scripts.

-   No large third-party fonts; use system stack.

Deliverables
------------

1.  Complete React project with pages/sections/components per structure above.

2.  Tailwind theme wired to brand tokens; global CSS for tokens, prose, and forms.

3.  Working Web3Forms integration with validation and state handling.

4.  JSON content with realistic sample data.

5.  README with setup, env vars, and Vercel deploy steps.

Acceptance Tests (must pass)
----------------------------

-   Routes exist and render; nav works desktop/mobile; sticky header transitions on scroll.

-   All sections animate in with reduced-motion respected.

-   Contact form validates, submits to Web3Forms (mockable), and shows success/error states.

-   Service detail sidebar CTA stays in view and never overlaps footer.

-   Projects dialog is keyboard accessible (Esc closes, focus trapped).

-   Lighthouse run meets targets; color contrast AA verified for text and buttons.

-   No console errors; build succeeds with `npm run build`.