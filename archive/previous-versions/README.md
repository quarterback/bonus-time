# Previous versions of masthead.ronbronson.com

Front page screenshots of each real redesign in this repo, sampled about every three to six months. Restyles of the same layout are left out, including the shared block system that ran on all three sites for six days in October 2026. Each design was rendered from the last commit before the next redesign replaced it, at desktop (1440 px) and phone (390 px) width.

| Design | Live | Commit | Desktop | Phone |
|---|---|---|---|---|
| blue grid | 2026-07-28 to 2026-10-22 | `89a0439` | [desktop](2026-07-28-blue-grid-desktop.jpg) | [phone](2026-07-28-blue-grid-phone.jpg) |
| yellow grid | 2026-06-09 to 2026-07-28 | `5025fb0` | [desktop](2026-06-09-yellow-grid-desktop.jpg) | [phone](2026-06-09-yellow-grid-phone.jpg) |

Pages that loaded web fonts from Google Fonts or Fontshare were rendered without those fonts, so their type falls back to system faces. Live data (last.fm, reading shelves, video thumbnails) did not load in the render.

To see any version in a browser, check out its commit and open `index.html`. Versions built with Astro need `npm install` and `npx astro build` first; the built site is in `dist/`.
