# Jay Monga's portfolio

My work includes mobile games, creative applications, AI research, data platforms, forecasting services, and public-sector software.

**Portfolio:** https://listpull.github.io/portfolio/  
**ListPull:** https://listpull.com/

## How the portfolio is organized

The site shows ten projects, each with a technical summary, a project period, and an expandable story of at least 100 words. The stories focus on the engineering problems, underlying systems, and work done, not on selling browser tools.

For five ListPull engineering projects, the links lead to related browser examples published through ListPull Studio. Those examples demonstrate selected features or interaction patterns; they are not the complete underlying applications or connected services. In particular, the CSV upload in a public data example should not be mistaken for the data sources or integration work used in the market analytics platform.

The portfolio keeps the original banner, career timeline, and about section. The Approach section is intentionally absent.

## Files

- `index.html`: the published page and its project cards.
- `projects.json`: the project titles, dates, full stories, images, and links.
- `docs/PORTFOLIO_PIECES.md`: the same project content in Markdown.
- `styles.css`: responsive styling.
- `script.js`: navigation, filtering, and copy-email.
- `docs/CONTENT_AND_CREDITS.md`: source notes and image credits.

To preview locally, run `python -m http.server 8000` and open http://localhost:8000.

GitHub Pages deploys when changes are merged into `main`.

## Sources and images

Technical details are based on Jay's resume, the earlier portfolio project descriptions, and the public ListPull Engineering and Solutions pages. Some images are published ListPull media; others are clearly identified conceptual diagrams, not production screenshots.
