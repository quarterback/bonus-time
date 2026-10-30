# Agent Action Record: front page introduces Ron

**Review date:** 30 October 2026
**Agent / system:** Claude Code (cloud session), on `claude/magical-faraday-uqz6vn`
**Accountable human:** Ron Bronson (owner)

## 1. Intent

Ron asked for the front page to introduce him before it sends anyone elsewhere:
- remove the two big links to Design and Research & Teaching
- move the introduction sentence below the photo
- give the drop-cap section the About text
- remove the captions under the video and the podcast
- add a full-width section on what he does that introduces the other pages
- make Community a narrative section and move its list to the Community page
- put Now listening at the bottom

## 2. Action

- `index.html`, top to bottom: headline, photo, introduction sentence, About text in the drop-cap section, Watch / Listen with no captions, What I do, Community, the Coaching card, reading and watching, the radio banner, Now listening, colophon.
- Removed the two doors and the Community card with its list.
- `events.html` gains a Boards and commissions section (AIGA Portland, Portland Historic Landmarks Commission, Global Office of Public Delivery), the one part of the old front-page list it didn't already have. Its nav gains About, which was missing there.
- `assets/tabloid.css`: styles for the sentence under the photo, the What I do and Community headings, and Now listening at the bottom.

## 3. Judgment

- The About text is `about.html`'s, word for word, apart from dropping the Portland Digital Corps and AIGA sentence, which Community now tells.
- **What I do** and **Community** are `STAND-IN` drafts for Ron to rewrite. They break this repo's rule that every word on this page is Ron's. Every fact in Community comes from the old front-page list and `events.html`.
