# Agent Action Record: About page moves to the masthead

**Review date:** 30 October 2026
**Agent / system:** Claude Code (cloud session), on `claude/magical-faraday-uqz6vn`
**Accountable human:** Ron Bronson (owner)

## 1. Intent

> masthead should for sure have an about page since it's the front door … redirect the about page to masthead's about and make it still standard.site sync but for masthead

## 2. Action

- New `about.html`, on the same profile template as `coaching.html`. The lede and bio are the ronbronson.design About page, word for word, in third person. The photos are `gsa-18f.jpg`, `michigan.jpg` and `design-month.jpg`, with the alt text this repo already uses for them.
- About is in the nav on the front page and on Coaching.
- `vercel.json`: `/about` now serves `about.html`. `/about.html` no longer redirects to the front page.
- standard.site: added the same `scripts/sync-standard.mjs`, workflow and `STANDARD-SITE.md` as 2026-site. The publication is `https://masthead.ronbronson.com`, described with the front page's meta description, and `about.html` and `coaching.html` are its documents. `standard-mapping.json` carries the About record .design published (`3mpff3klyjq2u`), so the first sync moves that record to this publication rather than creating a duplicate.

## 3. Judgment

- This breaks the README rule that nothing on this site is drafted on Ron's behalf only to the extent that the About copy came from .design. That copy was already published and is Ron's.
- Coaching was added as a second standard.site document at Ron's request.

## 4. Change

The workflow does nothing until this repo has the `BLUESKY_HANDLE` variable and the `BLUESKY_APP_PASSWORD` secret, the same ones set on 2026-site.

## Follow-up: nav label and interviews

- Every link to ronbronson.design now says "Design" (nav on the front page, About, Coaching and Events, plus the doors band). It used to say "Product Leadership".
- About has an Interviews list: the Soft Labor Questionnaire (Nov 2025) and Humans of Public Service (May 2022).
