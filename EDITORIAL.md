# Editorial policy for ronbronson.com

This document belongs to Ron Bronson. His latest explicit instruction takes precedence over anything here, over any linter finding, and over any agent's judgment. Positioning lives in `CAREER-NARRATIVE-REGISTER.md`, not in this file.

## Purpose and audience

- **Publisher or author:** Ron Bronson.
- **Primary readers and tasks:** anyone who looked him up. A student, a reporter, a conference organiser, a colleague, someone who read one essay and wanted to know who wrote it.
- **What this publication should help people accomplish:** understand what he is responsible for, what he thinks, and that there is a person here rather than a pitch.
- **Source of approved facts:** `CAREER-NARRATIVE-REGISTER.md` and the 25 October 2026 executive narrative reference.

## Voice and register

**A representative paragraph we want to preserve**, from the live site:

> More than two decades of this work has run through service design, critical urbanism, digital public infrastructure, and the politics of technology. I pay attention to judgment, social trust, and the consequences that surface once a designed system is running at scale.

**Language we deliberately use:** responsibility first, then what changed. The Kentucky Register's move, documented at length in `CAREER-NARRATIVE-REGISTER.md`: an earlier role can be larger than the present one, and its authority and scale stay intact in the record.

**Language we avoid:** the register's own warning. Do not claim sole credit for outcomes that involved many people, including the response to 18F's closure.

**Where the voice changes:** the chapters carry the argument and run long. The rail is short, personal, and does not argue anything. Keep them apart. The colophon digressions are his and are not subject to any of this.

## Page responsibilities

| Type | Reader question and job | Required sections | Primary source |
| --- | --- | --- | --- |
| Front door | "Who is this and what is he responsible for?" | hero, the chapters, the record, then the person | career register |
| Course | "What is this class?" | syllabus structure | the course itself |
| Coaching | "Is this the same guy?" | the record, plainly | his own account |

**Keep jobs and executive details apart.** "A short record" has two lists on purpose. A temporary detail to another agency is not an appointment, and collapsing them overstates both.

**This site is the person and the worldview.** The service practice belongs on ronbronson.design; proof that software shipped belongs on ronbronson.dev.

## Known findings, not yet fixed

`prosekeep check .` reports 5 findings in this repo, left deliberately rather than cleaned up in a change that was about something else:

- Four `STYLE-07` headings reading "Overview" on the course pages and the course page type. The rule is right; a heading should name its subject. Ron's call whether syllabus convention wins.
- One `STYLE-03` formulaic negative contrast in `docs/aar-front-door-copy-2026-10-22.md`, an archived record.

CI checks changed files only, so these surface when someone next touches those pages.

## Writing mechanics

Conventions taken from Ron's existing corpus, not imposed on it.

| Convention | Ruling | Why |
| --- | --- | --- |
| Contractions | Use them in first person | Every first-person page already does: "I'm a systems designer", "Build what's missing". Copy without them reads as written by someone else. This is the fastest tell that an agent wrote a section. |
| Em dashes | Allowed | Used throughout the corpus by choice. `STYLE-04` is **off** in `.editorial.json` for this reason; it alone produced 94% of the findings on first run. The humanizer skill defers to the writer's sample on dashes, and this is the sample. |
| Dates | Day first: "22 October 2026" | Every colophon and the career register use it. `STYLE-05` is **off** for this reason. Keep `talks.html` style dates ("Sep. 2025") as they are. |
| Serial comma | Use it | "content strategy, information architecture, digital services, governance, and delivery leadership". |
| Headings | Sentence case, name the subject | `STYLE-07` is on. A heading reading "Overview" fails it, and should. |
| Numbers | Spell out in prose where the corpus does ("more than a hundred people signed up"), figures where precision is the point ("more than 40 designers", "400+ engagements") | Both patterns are already in use and both are deliberate. |
| Person | First person on the live pages, third person in meta descriptions and OG tags | Already the split across all three sites. |

## Factual fidelity and decisions

**Evidence states.** Every claim about Ron's record sits in one of these, and the state decides how it may be written:

| State | How it may appear |
| --- | --- |
| Documented | Stated plainly. Backed by a performance plan, a public artifact, or a published page. |
| Firsthand account | Stated plainly, but flagged in the AAR so Ron can confirm before a page ships. |
| Plausible interpretation | Not published until Ron confirms it. |
| Needs verification | Not published. |

**Decisions an agent may not revise on its own:**

- Positioning. Which of the three sites makes which argument is set by rule 7 of the 25 October editorial reference: masthead is the person and the worldview, `.design` is a service practice, `.dev` is proof that software shipped.
- Any claim of authority held: headcount set, hiring approved, who he advised, what he was accountable for.
- Any project's status. "Live" is a claim about the world, not a style choice.
- Any number. A figure may be carried from existing copy or from the career register. It may not be rounded, upgraded, or invented.
- Whether Ron founded Vloora or works with it. The sites currently disagree and only he can settle it.

**Where a human decision is required:** any new claim about his record, any change to a status, and any copy that would make one site say what another site is supposed to say.

## How the checks run

```sh
# what CI runs: changed files only
npx prosekeep@0.3.0 check --changed --base origin/main

# the whole repo
npx prosekeep@0.3.0 check .

# plain language, on the rendered copy rather than the markup
npx plain-language-default@0.1.0 check <extracted-copy>.md
```

`plain-as-day` reads a file as prose. Pointed straight at an HTML page it scores the markup and the inline scripts, so extract the rendered visible text first and terminate headings, buttons, and definition-list rows with a full stop. Without that it runs the next sentence onto the previous block and reports long sentences no reader ever sees.

A passing check proves nothing about accuracy, voice, or whether a claim is true. It only means no pattern matched.
