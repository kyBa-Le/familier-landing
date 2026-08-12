# Familier Landing Page

Static, high-performance landing page for the **Familier** AI-powered family assistant mobile application.

Built with [Astro](https://astro.build), TypeScript, and Tailwind CSS.

---

## Features

- **App-Store Inspired UI:** Information hierarchy designed to highlight app screenshots, features, and source code.
- **Pure CSS Scroll-Snap Gallery:** Touch-friendly horizontal swipe gallery displaying all 6 application screenshots without third-party carousel dependencies.
- **Graceful Download CTA:** Built-in release placeholder handling for seamless APK release link updates.
- **Full SEO & Open Graph:** Meta tags, Twitter cards, JSON-LD `SoftwareApplication` schema, automated sitemap, and `robots.txt`.
- **Zero Heavy Framework JS:** Static Astro output delivering fast page load times and minimal JavaScript footprint.

---

## Tech Stack

- **Framework:** Astro 5.2 (Static Output)
- **Language:** TypeScript (Strict mode)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **SEO & Sitemap:** `@astrojs/sitemap`
- **Testing:** Playwright (`@playwright/test`)

---

## Project Structure

```text
familier_landing/
├── assests/                    # Original user asset directory
│   ├── logo.png
│   └── demo_images/            # Original 6 screenshots
│
├── public/                     # Static public assets
│   ├── favicon.ico
│   ├── favicon.png
│   ├── favicon.svg
│   ├── robots.txt
│   └── og/                     # Open Graph images
│
├── src/
│   ├── assets/                 # Processed & optimized assets
│   │   ├── logo.png
│   │   └── screenshots/        # 6 app screenshots optimized by Astro
│   │
│   ├── components/             # Astro components
│   │   ├── Header.astro
│   │   ├── AppHero.astro
│   │   ├── InstallButton.astro
│   │   ├── ScreenshotGallery.astro
│   │   ├── AboutSection.astro
│   │   ├── FeatureSection.astro
│   │   ├── SourceCodeSection.astro
│   │   └── Footer.astro
│   │
│   ├── config/
│   │   └── site.ts             # Centralized product & site config
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro    # Base HTML layout with SEO metadata
│   │
│   ├── pages/
│   │   └── index.astro         # Main landing page
│   │
│   └── styles/
│       └── global.css          # Tailwind CSS & custom scroll utilities
│
├── tests/                      # Playwright E2E tests
│   └── landing.spec.ts
│
├── astro.config.mjs            # Astro configuration
├── playwright.config.ts        # Playwright test configuration
├── package.json
└── tsconfig.json
```

---

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:4321`.

### 3. Type Checking

```bash
npm run check
```

### 4. Production Build

```bash
npm run build
```

Production static files will be generated in the `dist/` directory.

### 5. Preview Production Build

```bash
npm run preview
```

### 6. Run E2E Tests

```bash
npm test
```

---

## Release Link Configuration

All product metadata and repository links are centralized in [`src/config/site.ts`](file:///D:/job_prep/familier_landing/src/config/site.ts).

To configure the GitHub Release URL when an APK release is created:

1. Open `src/config/site.ts`.
2. Replace `"GITHUB_RELEASE_URL_PLACEHOLDER"` in `siteConfig.github.release`:

```ts
export const siteConfig = {
  // ...
  github: {
    mobile: "https://github.com/pnv-familier/mobile",
    backend: "https://github.com/pnv-familier/backend",
    release: "https://github.com/pnv-familier/mobile/releases/tag/v1.0.0", // UPDATE HERE
  },
};
```

---

## Deployment (Vercel)

This project is configured for static hosting on Vercel.

- **Framework Preset:** Astro
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
