# Jay Monga — Portfolio

A story-driven, responsive portfolio for **Jay Monga**, adapted from the six-section reference storyboard. The project is a plain HTML/CSS/JavaScript static site and can be hosted directly on **GitHub Pages** without installing Node, running a build, or providing API credentials.

## Contents

- `index.html` — the complete public-facing portfolio, including **10 numbered pieces**, a year of creation, and an **exactly 100-word synopsis** for each.
- `styles.css` — responsive styling, editorial layouts, and accessibility settings.
- `script.js` — work-category filters, responsive navigation, and copy-email action.
- `assets/*.svg` — original illustrations of systems and product concepts, plus an offline fallback for live ListPull images.
- `assets/social-preview.png` — social share artwork.
- `Jay_Monga_Resume.pdf` — the résumé provided by Jay.
- `docs/PORTFOLIO_PIECES.md` — all ten synopses in a portable document.
- `docs/CONTENT_AND_CREDITS.md` — source verification, provenance, and image credits.
- `.nojekyll` — prevents GitHub Pages from rewriting asset paths.

## Deploy to GitHub Pages

1. Create a public GitHub repository, for example `jay-monga-portfolio`.
2. Upload **the contents of this folder** to the root of the repository (`index.html` should be at the repository root).
3. In the repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, `main`, and `/ (root)`; click **Save**.
4. Open the URL GitHub displays. For a project repo, the URL typically looks like `https://YOUR_USERNAME.github.io/jay-monga-portfolio/`. For a personal site repo named `YOUR_USERNAME.github.io`, it typically looks like `https://YOUR_USERNAME.github.io/`.
5. To work locally, open `index.html` or use `python -m http.server 8000` from this folder, then visit `http://localhost:8000/`.

## Personalize before publishing

- Verify the résumé contact information is still the preferred public email and phone.
- Review each first-person synopsis and correct any nuance of authorship, leadership, or dates.
- Replace or augment linked company media with any locally owned MP4/MOV/WEBM clips or screenshots you'd like to keep archived. No video has been fabricated or relabeled.
- Add real personal GitHub, LinkedIn, and a headshot **only** if you want them public; these were not in the provided résumé and have intentionally not been invented.
- The actual Blobby images are served from `listpull.com`. The site has an original **local fallback SVG** if those hotlinks are unavailable. For a fully offline version, save company-owned image assets into `assets/` and update their `src` values.
- Technical graphics are new conceptual portfolio illustrations, *not* actual Accenture, BAE, or BLS client screens.
- After you have your final GitHub Pages URL, use it as the absolute `og:image` location for more reliable social previews.

## Accessibility and design

Semantic headings, descriptive image alternative text, keyboard focus states, a skip link, a functional mobile menu, accessible native disclosure summaries, responsive layout, and reduced-motion support. The site uses no tracking code and sends contact through `mailto:`/`tel:`, so it requires no backend or service credentials.

## Art and sources

All original SVG diagrams and the portfolio layout are provided as source and may be edited. ListPull's external game imagery remains attributed to the company. For full evidence and links, see `docs/CONTENT_AND_CREDITS.md`.
