# Familier Landing Page — Coding Agent Execution Spec

## 1. Objective

Build a production-ready static landing page for the **Familier** mobile application.

Main goals:

* Fast initial load.
* Excellent SEO.
* Mobile-first responsive design.
* UI inspired by an app-store product page.
* Direct users to the GitHub Release page for APK installation.
* Showcase 6 provided app screenshots.
* Briefly explain Familier features.
* Link to frontend and backend GitHub repositories.
* Minimal JavaScript.
* No backend required.
* Production-ready for Vercel deployment.

---

# 2. Tech Stack

Use:

* Astro
* TypeScript strict mode
* Tailwind CSS
* Static output
* Astro Image / asset optimization
* Astro Sitemap integration
* Playwright for basic E2E tests if reasonable

Do NOT add React unless strictly necessary.

Do NOT add:

* Next.js
* Framer Motion
* Swiper
* large UI libraries
* state-management libraries
* unnecessary client-side JavaScript

Prefer:

* Astro components
* semantic HTML
* CSS
* CSS scroll-snap
* native browser behavior

---

# 3. Existing Project

Project root:

```text
D:\job_prep\familier_landing
```

Existing asset directory:

```text
D:\job_prep\familier_landing\assests
```

Important:

The folder is intentionally referenced as:

```text
assests
```

Do not silently assume it is named `assets`.

Inspect the filesystem first.

Logo:

```text
D:\job_prep\familier_landing\assests\logo.png
```

Screenshot source folder:

```text
D:\job_prep\familier_landing\assests
```

The folder contains 6 app screenshots.

Frontend repository:

```text
https://github.com/pnv-familier/mobile
```

Backend repository:

```text
https://github.com/pnv-familier/backend
```

GitHub Release URL:

Not available yet.

Use a clearly centralized placeholder:

```ts
githubReleaseUrl: "GITHUB_RELEASE_URL_PLACEHOLDER"
```

Do not invent a release URL.

---

# 4. Core UX

The landing page should visually resemble the information hierarchy of an app-store download page without copying Google Play branding.

Desired page flow:

```text
Header

App Hero
- logo
- Familier
- tagline
- platform/project metadata
- Install button

App Preview
- 6 screenshots
- horizontal swipe/scroll

About Familier

Key Features

Technology / Source Code
- Mobile repository
- Backend repository

Footer
```

The main CTA is:

```text
Install
```

For now, clicking Install should use the release placeholder.

Do not implement direct APK hosting.

Final intended behavior:

```text
Install
    ↓
GitHub Release page
    ↓
User downloads APK release asset
```

---

# 5. Project Structure

Prefer this structure:

```text
familier_landing/
│
├── assests/
│   ├── logo.png
│   └── <existing screenshots>
│
├── public/
│   ├── favicon.*
│   ├── robots.txt
│   └── og/
│       └── familier-og.*
│
├── src/
│   ├── components/
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
│   │   └── site.ts
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro
│   │
│   ├── pages/
│   │   └── index.astro
│   │
│   └── styles/
│       └── global.css
│
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

The agent may reorganize existing assets into `src/assets` if Astro image optimization works better that way.

Do not delete original user assets without a reason.

---

# 6. Central Configuration

Create:

```text
src/config/site.ts
```

All editable product information must live here.

Example:

```ts
export const siteConfig = {
  name: "Familier",

  tagline: "AI-powered Family Assistant",

  description:
    "Familier helps families communicate, organize everyday activities, and stay connected with AI-powered assistance.",

  github: {
    mobile: "https://github.com/pnv-familier/mobile",
    backend: "https://github.com/pnv-familier/backend",
    release: "GITHUB_RELEASE_URL_PLACEHOLDER",
  },
};
```

Do not scatter URLs or product text throughout components.

---

# 7. Phase 0 — Repository and Asset Inspection

## Tasks

1. Inspect the existing project.
2. Determine whether Astro already exists.
3. List files inside:

```text
assests
```

4. Identify:

   * logo
   * exactly 6 screenshots
   * screenshot dimensions
   * image formats
   * duplicate images
   * unusually large files

5. Preserve original screenshots.

## Acceptance Criteria

* Logo exists.
* Six screenshots are identified.
* No asset path is guessed.
* Existing project files are understood before modification.

If fewer or more than six valid screenshots exist:

```text
[USER ACTION REQUIRED]
Expected 6 screenshots but found <number>.
Please confirm which files should be displayed.
```

Continue all tasks that do not depend on that answer.

---

# 8. Phase 1 — Astro Setup

If Astro is not initialized, initialize it in the existing project root.

Requirements:

```text
TypeScript: strict
Output: static
Package manager: use existing lockfile if present
```

Install only required dependencies.

Add Tailwind.

Add Astro sitemap integration.

## Commands to Validate

Run equivalent commands for the selected package manager:

```bash
npm install
npm run check
npm run build
```

## Acceptance Criteria

* Astro development server works.
* TypeScript check passes.
* Static production build succeeds.
* No unnecessary framework dependency exists.

Do not continue with complex UI work if the base build is broken.

---

# 9. Phase 2 — Design Foundation

Create a small design system.

Requirements:

```text
Mobile first
Clean
Modern
Friendly
App-store-like information hierarchy
Familier branding
```

Suggested layout:

```text
max-width: approximately 1100–1200px

mobile horizontal padding:
16–20px

desktop horizontal padding:
24–32px
```

Use the Familier logo/brand as the visual reference.

Do NOT automatically use Google Play green.

Implement:

* typography hierarchy
* spacing scale
* button styles
* card styles
* focus states
* responsive container
* subtle borders/shadows where useful

Avoid excessive gradients, glassmorphism, animation, and decoration.

## Required Viewports

Validate at minimum:

```text
390px
768px
1440px
```

## Acceptance Criteria

* No horizontal page overflow.
* Text remains readable.
* Content does not become excessively wide.
* Touch targets are usable on mobile.

---

# 10. Phase 3 — Header

Create:

```text
Header.astro
```

Keep it minimal.

Suggested layout:

```text
Familier logo/name                      GitHub
```

GitHub may link to either the organization/project source section.

Do not create large navigation menus.

## Acceptance Criteria

* Responsive.
* Accessible.
* No unnecessary JavaScript.
* GitHub link works.

---

# 11. Phase 4 — App Hero

Create:

```text
AppHero.astro
InstallButton.astro
```

Hero content:

```text
[Familier Logo]

Familier

AI-powered Family Assistant

Android • Open Source • AI

[ Install ]
```

Optionally include a small secondary label:

```text
Available as Android APK
```

Do not show fake:

* ratings
* reviews
* download counts
* user counts
* awards

## Install Button

Use the centralized:

```ts
siteConfig.github.release
```

Current value:

```text
GITHUB_RELEASE_URL_PLACEHOLDER
```

If the value is still placeholder, choose one of these safe behaviors:

Preferred development behavior:

* render the Install button visually
* prevent navigation
* clearly indicate release link is pending

Example accessible label:

```text
Install — release link coming soon
```

Do NOT navigate to a fake GitHub URL.

## User Dependency

Before final production deployment:

```text
[USER ACTION REQUIRED]
Replace GITHUB_RELEASE_URL_PLACEHOLDER with the actual Familier GitHub Release URL.
```

This should not block implementation.

## Acceptance Criteria

* Logo renders correctly.
* Install is the strongest CTA.
* Hero looks good on mobile and desktop.
* Placeholder does not create a broken link.

---

# 12. Phase 5 — Screenshot Gallery

Create:

```text
ScreenshotGallery.astro
```

Use all 6 provided screenshots.

Do NOT use a carousel library.

Use:

```text
overflow-x
CSS scroll-snap
touch scrolling
```

Desktop target:

```text
multiple screenshots visible simultaneously
```

Mobile target:

```text
one main screenshot
part of the next screenshot visible
horizontal swipe
```

Images should maintain their original phone screenshot ratio.

Requirements:

* optimized image loading
* useful alt text
* width/height or reserved aspect ratio
* lazy-load below-the-fold images where appropriate
* no layout shift
* no distortion

Possible heading:

```text
App preview
```

## Acceptance Criteria

* All 6 screenshots render.
* Swipe works on mobile.
* Scroll works with mouse/trackpad.
* No image stretching.
* No large layout shift.
* No carousel dependency.

---

# 13. Phase 6 — About Section

Create:

```text
AboutSection.astro
```

Suggested content:

```text
Familier is an AI-powered family assistant designed to help family members communicate, organize everyday activities, and stay connected.

It combines family communication with contextual AI assistance, smart suggestions, and real-time interaction.
```

Keep it short.

Do not write a long marketing essay.

Do not claim functionality that is not implemented.

---

# 14. Phase 7 — Key Features

Create:

```text
FeatureSection.astro
```

Use approximately 3–4 feature items.

Suggested features:

### AI Family Assistant

```text
Context-aware AI support designed around family conversations.
```

### Smart Suggestions

```text
Receive useful suggestions for family activities, tasks, and actions.
```

### Real-time AI Chat

```text
Streaming AI responses create a more natural conversational experience.
```

### Family Communication

```text
Bring family conversations and AI assistance into one shared experience.
```

Do not include Voice AI unless it is known to be production-ready.

Use simple cards or rows.

Avoid excessive icons.

## Acceptance Criteria

* Feature descriptions are short.
* No unverified claims.
* Section works without client JavaScript.

---

# 15. Phase 8 — Source Code Section

Create:

```text
SourceCodeSection.astro
```

Heading:

```text
Explore the project
```

Create two cards.

## Mobile App

```text
React Native / Expo
```

URL:

```text
https://github.com/pnv-familier/mobile
```

CTA:

```text
View mobile source →
```

## Backend

Suggested technology summary:

```text
Java
Spring Boot
Microservices
WebFlux
AI integration
```

URL:

```text
https://github.com/pnv-familier/backend
```

CTA:

```text
View backend source →
```

External links must:

```text
target="_blank"
rel="noopener noreferrer"
```

## Acceptance Criteria

* Both URLs are exact.
* Both links work.
* Technology labels remain concise.
* Cards are readable on mobile.

---

# 16. Phase 9 — Footer

Create:

```text
Footer.astro
```

Keep minimal.

Example:

```text
Familier © 2026
Built as an open-source project.
```

Optional links:

```text
Mobile
Backend
```

Do not add unnecessary social media placeholders.

---

# 17. Phase 10 — SEO

Implement SEO inside:

```text
BaseLayout.astro
```

Required:

```text
title
meta description
canonical
Open Graph
Twitter/X card
viewport
favicon
```

Suggested title:

```text
Familier — AI Family Assistant
```

Suggested description:

```text
Familier is an AI-powered family assistant for communication, smart suggestions, and everyday family activities.
```

Create Open Graph metadata:

```text
og:title
og:description
og:image
og:type
og:url
```

Create Twitter/X metadata:

```text
twitter:card
twitter:title
twitter:description
twitter:image
```

If no production domain exists yet, centralize it in config and use a clearly visible placeholder.

Example:

```ts
siteUrl: "SITE_URL_PLACEHOLDER"
```

Do not invent a production domain.

## Structured Data

Add valid JSON-LD using:

```text
SoftwareApplication
```

Example fields:

```text
name
description
operatingSystem: Android
applicationCategory
url
```

Do not add:

```text
aggregateRating
review
downloadCount
```

unless real data exists.

## Sitemap

Configure Astro sitemap integration.

## robots.txt

Allow normal indexing.

## Acceptance Criteria

Built HTML contains:

* title
* description
* canonical
* Open Graph tags
* Twitter tags
* valid JSON-LD
* sitemap
* robots.txt

---

# 18. Phase 11 — Accessibility

Validate:

```text
one H1 only
logical H2 structure
semantic sections
alt text
keyboard navigation
visible focus state
sufficient contrast
proper link labels
accessible Install button
```

Suggested heading structure:

```text
H1 Familier

H2 App preview
H2 About Familier
H2 Key features
H2 Explore the project
```

Do not use clickable `div` elements.

---

# 19. Phase 12 — Performance

Optimization rules:

1. Avoid hydration unless necessary.
2. Avoid third-party JS.
3. Optimize screenshots.
4. Reserve image dimensions.
5. Lazy-load appropriate below-fold images.
6. Avoid large font packages.
7. Prefer system fonts or a minimal font strategy.
8. Keep animations CSS-only.
9. Avoid loading all assets eagerly.

Targets:

```text
Lighthouse Performance >= 95
Lighthouse Accessibility >= 95
Lighthouse Best Practices >= 95
Lighthouse SEO >= 95
```

Treat Lighthouse scores as guidance, not the only acceptance condition.

Primary requirement:

```text
fast page
low JS
no console errors
no broken assets
minimal CLS
```

---

# 20. Phase 13 — Automated Tests

Add small E2E coverage using Playwright if it does not significantly complicate the project.

Required tests:

### Homepage

```text
GET /
loads successfully
```

### Hero

```text
Familier heading exists
Install CTA exists
```

### Screenshots

```text
6 screenshots render
```

### GitHub Mobile

Verify href equals:

```text
https://github.com/pnv-familier/mobile
```

### GitHub Backend

Verify href equals:

```text
https://github.com/pnv-familier/backend
```

### Release Placeholder

Verify placeholder does NOT behave like a valid external download link.

### Responsive Overflow

At:

```text
390x844
```

verify approximately:

```js
document.documentElement.scrollWidth <= window.innerWidth
```

Vertical page scrolling is expected.

Horizontal page overflow is not.

---

# 21. Phase 14 — Quality Gate

Before marking implementation complete, run:

```bash
npm run check
npm run build
npm test
```

or equivalent scripts.

All must pass.

Also manually inspect:

```text
390px viewport
768px viewport
1440px viewport
```

Check:

```text
[ ] logo renders
[ ] 6 screenshots render
[ ] no horizontal page overflow
[ ] Install CTA works safely with placeholder
[ ] GitHub mobile link works
[ ] GitHub backend link works
[ ] no console errors
[ ] no missing assets
[ ] SEO metadata exists
[ ] sitemap generated
[ ] robots.txt available
[ ] keyboard navigation works
```

Do not mark DONE when compilation is the only validation performed.

---

# 22. Phase 15 — README

Update/create:

```text
README.md
```

Include:

```text
Project purpose
Tech stack
Local development
Build command
Project structure
Asset location
GitHub Release configuration
Deployment instructions
```

Explicitly document:

```text
GITHUB_RELEASE_URL_PLACEHOLDER
```

and where to replace it.

---

# 23. Phase 16 — Implementation Report

Create:

```text
IMPLEMENTATION_REPORT.md
```

Format:

```markdown
# Familier Landing Page Implementation Report

## Build

- Type check: PASS / FAIL
- Production build: PASS / FAIL
- Tests: PASS / FAIL

## Assets

- Logo: PASS
- Screenshots: 6/6

## Responsive

- 390px: PASS
- 768px: PASS
- 1440px: PASS

## Links

- Mobile repository: PASS
- Backend repository: PASS
- GitHub Release: PLACEHOLDER / PASS

## SEO

- Metadata: PASS
- Open Graph: PASS
- JSON-LD: PASS
- Sitemap: PASS
- robots.txt: PASS

## Remaining User Actions

- Replace GitHub Release placeholder.
- Configure production site URL if not available.
```

---

# 24. Phase 17 — Deployment Preparation

Target deployment:

```text
Vercel
```

Static deployment only.

Expected:

```text
Build command:
npm run build

Output:
dist
```

Do not introduce Astro SSR or a Vercel server adapter unless static deployment genuinely requires it.

## User Interaction

When Vercel/GitHub authorization is required:

```text
[USER ACTION REQUIRED]
Authorize Vercel to access the Familier landing-page repository and select the project for deployment.
```

Do not block local implementation while waiting for deployment authorization.

---

# 25. Phase 18 — Production Verification

After a real deployment URL exists, verify production instead of assuming localhost behavior is sufficient.

Check:

```text
GET /
200

GET /robots.txt
200

GET /sitemap...
200
```

Verify:

* logo
* screenshots
* mobile layout
* desktop layout
* GitHub links
* SEO metadata
* Open Graph metadata
* release link
* browser console

If the GitHub Release URL still contains the placeholder, production deployment must be reported as incomplete.

---

# 26. Agent Execution Rules

## General

1. Work phase by phase.
2. Inspect existing files before modifying them.
3. Preserve existing useful project code.
4. Fix problems encountered during implementation.
5. Do not stop after merely generating code.
6. Run validation after important phases.
7. Continue independent work even when one task needs user input.

## Never Fabricate

Never invent:

* ratings
* reviews
* download numbers
* users
* testimonials
* release URLs
* domain names
* GitHub URLs
* project metrics
* unsupported features

## Architecture

Prefer:

```text
Astro
semantic HTML
CSS
Tailwind
minimal JS
```

Avoid:

```text
React
Vue
Svelte
large UI libraries
carousel libraries
animation libraries
```

unless technically necessary.

## Assets

Never overwrite original user screenshots unnecessarily.

Never distort screenshot aspect ratio.

Never silently use arbitrary images instead of provided project assets.

## User Interaction Protocol

When user action is actually required, output exactly:

```text
[USER ACTION REQUIRED]

Reason:
<why>

Action:
<exact action required>

Affected task:
<task>

Independent work:
<what can still continue>
```

Do NOT ask the user to perform actions the agent can perform itself.

Do NOT stop all work because one independent item needs input.

## Failure Handling

If a command fails:

```text
1. inspect error
2. determine root cause
3. fix it
4. rerun command
```

Do not immediately ask the user to fix ordinary coding/configuration errors.

Ask the user only for things such as:

* credentials
* authorization
* missing assets
* unknown production URL
* GitHub Release URL
* product decisions that cannot safely be inferred

## Completion Rule

The task is DONE only when:

```text
TypeScript check passes
Production build passes
Tests pass
Required assets render
Responsive checks pass
No major console errors exist
SEO is configured
GitHub source URLs are correct
Remaining placeholders are clearly reported
IMPLEMENTATION_REPORT.md exists
```

A successful `npm run build` alone does not mean DONE.

---

# 27. Current User Actions

These inputs already exist:

```text
[x] Logo
[x] 6 screenshots
[x] Mobile GitHub repository
[x] Backend GitHub repository
```

Still pending:

```text
[ ] GitHub Release URL
[ ] Production site URL/domain
[ ] Vercel authorization when deployment begins
```

These pending values must NOT block local implementation.

---

# 28. Final Expected Result

The finished page should provide this user journey:

```text
Recruiter / Visitor
        ↓
opens Familier website
        ↓
immediately understands the app
        ↓
sees app screenshots
        ↓
reads key features
        ↓
can choose Install
        ↓
GitHub Releases
        ↓
APK download

or

        ↓
Explore the project
        ↓
Mobile repository / Backend repository
```

Primary optimization priority:

```text
1. Clarity
2. Mobile UX
3. Speed
4. SEO
5. Professional project presentation
6. Maintainability
```

Do not increase complexity unless it improves one of these goals.
