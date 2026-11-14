# inspirovix.com

The Inspirovix studio site. Static HTML, CSS and vanilla JavaScript, with no build step.

- `index.html`: the page
- `assets/css/site.css`: layout and components
- `assets/css/world.css`: the look ("After hours": the high street at night, where the lit shop windows are real client sites)
- `assets/js/site.js`: interactions; `reviews-data.js` and `map-data.js` hold the client reviews and the country map

Run it locally with `python3 -m http.server`, then open http://localhost:8000. Add `?still` to the address for a view with no motion.

Deployed on Vercel from `main` (see `vercel.json`). The previous React site is kept at the tag `pre-revamp-2026-11-14`.
