# Jay Monga's Portfolio

My portfolio is a small, static website. It shows working ListPull apps and some of the software I built for previous employers.

**Live portfolio:** https://listpull.github.io/portfolio/

**ListPull:** https://listpull.com/

## What's on the site

- Blobby's Woodland Wonder, with links to the iOS and Android versions.
- ListPull Studio's Creative Editor, Video Studio, AI Workspace, Business Insights, and Forecast Lab. Each card links to the actual tool.
- ListPull wildlife media.
- A few projects from Accenture and BAE Systems, described without private screenshots or client data.
- My work history, resume, and contact details.

The wording is deliberately short. The work should speak for itself.

## Edit and run

The site uses plain HTML, CSS, and JavaScript. There's no build step.

- `index.html`: page content and project cards.
- `styles.css`: site styling.
- `script.js`: filters, mobile menu, and copy-email button.
- `projects.json`: project details in a reusable format.
- `assets/`: illustrations and a fallback image.
- `docs/CONTENT_AND_CREDITS.md`: image credits and link notes.

To preview locally, run `python -m http.server 8000` and open http://localhost:8000.

GitHub Pages publishes from this repository's main branch after changes are merged.

## About the pictures

The Blobby gameplay image comes from ListPull's public game page. The Creative Studio, Video Studio, AI, data, forecast, and wildlife images are **new illustrations**, not screenshots. Accenture and BAE Systems projects use simplified diagrams, not client-owned screens. All tool cards link to the real apps.

If you take screenshots of the live tools later, you can swap the relevant `assets/studio-*.svg` paths in `index.html` and `projects.json`.
