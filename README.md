# David Bennett, DVM — Resume Website

A clean, professional, single-page resume website built as plain HTML/CSS/JS
(no build step), designed for fast and reliable deployment on Netlify and easy
sharing on LinkedIn and other sites.

## Files
| File | Purpose |
|------|---------|
| `index.html` | The resume content and structure |
| `css/styles.css` | Styling + print/PDF layout |
| `js/main.js` | "Download PDF" button + footer year |
| `assets/` | Your headshot (`headshot.jpg`) |
| `netlify.toml` | Netlify deploy settings |

## View locally
Just open `index.html` in any web browser (double-click it).

## Download as PDF
Click **Download PDF** on the page → in the print dialog choose
**Save as PDF** as the destination. The print layout is optimized for this.

## Deploy on Netlify
1. Push this folder to a GitHub repository.
2. In Netlify: **Add new site → Import an existing project → GitHub** and pick
   the repo. No build command needed; publish directory is `.`.
3. Netlify gives you a live URL; every future `git push` updates the site.

## Editing content
All text lives in `index.html`. Placeholders are marked in `[brackets]` —
replace them with your real details (phone, city/state, school, license, etc.).
