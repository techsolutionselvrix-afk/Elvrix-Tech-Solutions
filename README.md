# Elvrix TechSolutions

Marketing website for **Elvrix TechSolutions** — a technology services company offering custom software, cloud infrastructure, AI/ML-adjacent delivery, web & mobile apps, UI/UX design, API integrations, and digital marketing.

> Empowering businesses through premium technology solutions. From AI to cloud infrastructure — we build what matters.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Pages & Routes](#pages--routes)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Design System](#design-system)
- [Automatic theme](#automatic-theme)
- [Current Status & Roadmap](#current-status--roadmap)
- [Contact](#contact)
- [License](#license)

---

## Overview

This is a **frontend-only** React marketing site. All pages, blog posts, and portfolio content are static in the client — no server or API is required to run or deploy the website.

The UI includes smooth scrolling, Framer Motion animations, and a Three.js / React Three Fiber 3D robot hero on the home page.

---

## Features

- Multi-page marketing site with shared navigation and footer
- Responsive layout (breakpoints at 1280 / 1024 / 768 / 480px)
- Smooth scrolling via [Lenis](https://github.com/darkroomengineering/lenis)
- Scroll and entrance animations via [Framer Motion](https://www.framer.com/motion/)
- Interactive 3D hero scene (`RobotScene`) using Three.js + React Three Fiber + Drei
- Services showcase with tech tags
- Static blog list + detail routes (`/blog`, `/blog/:id`)
- Portfolio / work page
- About page (team & company story)
- Contact form UI (client-side mock submit)
- Social links: Instagram, LinkedIn, GitHub
- Automatic day/night theme from **Indian Standard Time**: sage/cream from 6 AM–6 PM IST, dark cyan theme from 6 PM–6 AM IST (see [THEME.md](THEME.md))

### Not yet wired

- Real contact-form submission / email delivery
- Supabase (`@supabase/supabase-js` is listed in dependencies but unused)
- Production deploy configuration (Vercel, Netlify, etc.)

---

## Tech Stack

| Technology | Version / notes |
|------------|-----------------|
| [React](https://react.dev/) | ^19 |
| [Vite](https://vitejs.dev/) | ^8 |
| [React Router DOM](https://reactrouter.com/) | ^7 |
| [Framer Motion](https://www.framer.com/motion/) | animations |
| [Lenis](https://lenis.darkroom.engineering/) | smooth scroll |
| [Three.js](https://threejs.org/) + [R3F](https://docs.pmnd.rs/react-three-fiber) + [Drei](https://github.com/pmndrs/drei) | 3D hero |
| [react-icons](https://react-icons.github.io/react-icons/) | icons |
| CSS | custom design tokens in `src/index.css` |
| Font | [Abel](https://fonts.google.com/specimen/Abel) (Google Fonts) |

---

## Project Structure

```
Elvrix-Tech-Solutions-main/
├── README.md                 # This file
├── THEME.md                  # India-time auto theme changelog
├── .gitignore
├── frontend/
│   ├── index.html            # Early IST theme script
│   ├── package.json
│   ├── vite.config.js
│   ├── tsconfig.json
│   ├── public/
│   │   ├── favicon.svg
│   │   ├── icons.svg
│   │   └── images/           # Home page imagery
│   └── src/
│       ├── main.jsx          # React entry + theme apply
│       ├── App.jsx           # Router, Lenis, theme schedule
│       ├── index.css         # Design system & light/dark tokens
│       ├── theme/
│       │   └── indiaTheme.js # IST 6 AM / 6 PM switch
│       ├── assets/           # Logo and static assets
│       ├── components/
│       │   ├── Navigation.jsx
│       │   ├── Footer.jsx
│       │   ├── RobotScene.jsx   # 3D hero (used)
│       │   └── Scene.jsx        # Unused demo scene
│       └── pages/
│           ├── Home.jsx
│           ├── Service.jsx
│           ├── About.jsx
│           ├── Work.jsx
│           ├── Contact.jsx
│           ├── Blog.jsx
│           └── BlogDetail.jsx
└── imageshomepage/           # Duplicate image assets (not wired into the app)
```

---

## Pages & Routes

| Path | Page | Description |
|------|------|-------------|
| `/` | Home | Hero with 3D scene, value props, service ticker, imagery |
| `/service` | Services | Six service offerings with tags (software, cloud, marketing, apps, UI/UX, APIs) |
| `/about` | About | Company story and team |
| `/blog` | Blog | Static post listing |
| `/blog/:id` | Blog detail | Individual post view (e.g. `/blog/01`) |
| `/work` | Work | Portfolio / case studies |
| `/contact` | Contact | Contact form and company details |

---

## Prerequisites

- **Node.js** 18+ (recommended LTS) and npm
- Git (optional, for version control)

---

## Getting Started

```bash
cd frontend
npm install
npm run dev
```

- Dev server: typically [http://localhost:5173](http://localhost:5173)
- Hot Module Replacement (HMR) is enabled by Vite

**Production build:**

```bash
cd frontend
npm run build
npm run preview
```

> **Note:** The `build` script runs `tsc && vite build`. The live app entry is `src/main.jsx` (JavaScript). Leftover Vite TypeScript scaffold files (`main.ts`, `counter.ts`) may affect the TypeScript check step until cleaned up.

You can deploy the `frontend/dist` output to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.).

---

## Environment Variables

No environment variables are required to run the site today.

`.gitignore` already ignores `.env` files. If you later add Supabase or a form service:

| Variable | Purpose |
|----------|---------|
| `VITE_SUPABASE_URL` | Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Supabase anon key (never commit secrets) |
| Form / email service keys | Contact form delivery |

Create `frontend/.env` when those integrations are added. Prefer a `.env.example` with placeholders and no real secrets.

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite development server |
| `npm run build` | Typecheck (`tsc`) then production build to `dist/` |
| `npm run preview` | Serve the production build locally |

Run these from the `frontend/` directory.

---

## Design System

Global tokens live in `frontend/src/index.css` (`:root`):

| Token | Approx. role |
|-------|----------------|
| Cream background (`#F7F4ED`) | Page background |
| Sage greens | Secondary / surface accents |
| Gold accent (`#C8A96B`) | Highlights, brand punctuation |
| Abel | Display / body typography |

Shared UI patterns include:

- `.grid-bg` — subtle grid overlay on hero sections
- `.display-text` — large section titles
- `.btn` / form styles — CTAs and contact inputs
- Ticker / marquee for services
- Footer and blog layout utilities

Motion: Framer Motion `fadeUp`-style variants on pages; Lenis for smooth page scroll.

---

## Automatic theme

The site follows **Asia/Kolkata** time, not the visitor’s local timezone.

| Window (IST) | Theme |
|--------------|--------|
| 6:00 AM – 6:00 PM | Day — cream `#F7F4ED`, sage surfaces, gold accent |
| 6:00 PM – 6:00 AM | Night — `#080B0D` background, cyan headings `#19C6E8`, gold accent |

Implementation details, file list, and how to preview the other theme: **[THEME.md](THEME.md)**.

---

## Current Status & Roadmap

### Working today

- [x] Full marketing page set and client-side routing
- [x] Responsive CSS and shared chrome (nav / footer)
- [x] 3D home hero
- [x] Frontend-only static site (no backend required)
- [x] Automatic IST day/night theme (6 AM / 6 PM)

### Recommended next steps

- [ ] Wire `Contact` form to a form service or serverless function (e.g. Formspree, EmailJS, or a small edge function)
- [ ] Remove unused Vite scaffold files and unused deps (`Scene.jsx`, `lucide-react` if unused, duplicate `imageshomepage/`)
- [ ] Add missing blog images under `frontend/public/images/blog/`
- [ ] Deduplicate blog post data (shared module for list + detail)
- [ ] Add production deploy docs
- [ ] Replace placeholder team / portfolio content where needed
- [ ] Add README badges / CI when a remote is connected

---

## Contact

| Channel | Details |
|---------|---------|
| **Email** | [elvrixtechsolution@gmail.com](mailto:elvrixtechsolution@gmail.com) |
| **Phone** | +91 90962 87077 |
| **Instagram** | [elvrix_techsolutions](https://www.instagram.com/elvrix_techsolutions) |
| **LinkedIn** | [elvrix-techsolutions](https://linkedin.com/company/elvrix-techsolutions) |
| **GitHub** | [elvrixtechsolutions](https://github.com/elvrixtechsolutions) |

---

## License

Proprietary — All rights reserved by Elvrix TechSolutions unless otherwise stated.

If you intend to open-source this repository, replace this section with an SPDX license (e.g. MIT) and a `LICENSE` file.
