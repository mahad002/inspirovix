# inspirovix.com: revamp, concept E (branch `revamp/concept-e`)

A static redesign of inspirovix.com, kept on its own branch for review. `main` is unchanged, and the old site is also saved at the tag `pre-revamp-2026-11-14`.

- `index.html` is the whole page. `assets/` holds only the files it uses: the design-kit runtime, icons, flags and client screenshots.
- No build step: `vercel.json` tells Vercel to serve the folder as it is.
- Preview locally: `python3 -m http.server 8080`, then open http://localhost:8080.

Status: a design concept under review, not approved for production.
