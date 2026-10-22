# Agent Action Record: front-door copy and the font regression (ronbronson.com)

**Review date:** 2026-10-22
**Reviewed by:** agent self-review
**Agent / system:** Claude Code (cloud session), branch `claude/happy-franklin-d63jgr`
**Task or period under review:** Filling the three empty copy slots on the front door so the draft can launch
**Accountable human (name or role):** Ron Bronson
**Trace:** this session's own transcript. No separate agent trace was available to reconcile against, so every claim below comes from the transcript and the diff.

## 1. Intent — what was supposed to happen

**Instruction given (actual wording):** "i'm going to work the content changes to bonus-time and 2026-site fro mwhat is there now so that i canl uanch the drafts successfully of both sites"

Asked which of four options should fill the three empty slots, Ron chose **"Draft it in the Kentucky register"**, the option whose description read: *"I draft candidate copy from the register plus the facts already in the repos. Note: this breaks the standing 'all copy is Ron's, nothing drafted on his behalf' rule, so I'd only do it on your explicit say-so."*

**Success defined in advance as:** the front door renders with all three slots filled, from material already in the repos, with nothing invented.

**Authority granted to the agent:** draft copy on Ron's behalf in the Kentucky register; write code; push to `claude/happy-franklin-d63jgr`.

**Out of scope:** the course pages' copy; inventing biography.

## 2. Action — what actually happened

**What the agent did (step by step):**

1. Audited the repo: found the three slots empty with restore-markers, left by `2d4fa64`.
2. Recovered the pre-clearing copy from `fd125d3` and read it, to establish what Ron's own words had been.
3. Read `CAREER-NARRATIVE-REGISTER.md` sections 6 and 7 (working editorial rules, the writing test) for the register's actual constraints.
4. Collected facts from `2026-site/about.html` and `2026-site/legacy/src/content/work/` (`18f-leadership.md`, `portland-digital-corps.md`, `michigan-teaching.md`, `design-for-the-public-24.md`). Every number and date in the new copy traces to one of those files.
5. Loaded the `humanizer` skill and wrote against it plus Ron's own rule: no negation, no contrastive frames, no repetition.
6. Wrote the introduction and `Practice`; restored `Let's Talk About` verbatim.
7. Synced the lede across all five copies: `<meta name="description">`, `og:description`, `twitter:description`, and `assets/og.html`.
8. Rendered the page headless, which surfaced a font regression unrelated to the copy (below), fixed it, and re-rendered all four pages clean.

**What it produced or changed:** `index.html` (three slots, three meta descriptions), `assets/og.html` (card lede), `assets/front.css` (font paths), `assets/core.css` (synced from 2026-site), `README.md`.

**Where actual behavior differed from the instruction:** the introduction was written without the register's "tenure opener." See §3.

**Stayed within granted authority?** Yes.

## 3. Judgment — human in the loop

**Decisions the agent made on its own:**

- **Split the register across the two modules.** `Practice` carries the full Kentucky treatment: tenure, named unit, firsts, before-and-after reference points, prior scope exceeding current scope. The introduction does not, because the README says in terms that the opening is not a résumé and that employers, titles and tenure belong elsewhere. Ron asked for the register and the README forbids its central move in that one spot; the agent honoured both by placing the résumé facts in the module the README nominates for them. **A human should have made this call.** If Ron wants the intro to open on his station the way the register's move 1 prescribes, that is a one-paragraph change and the agent should be told.
- **Restored `Let's Talk About` verbatim rather than drafting it.** The register has nothing to say about a list of topics, and the list is Ron's interests, which cannot be derived from facts in a repo. Drafting it would have been invention.
- **Dropped IxDA Oslo from the `Practice` venue list.** The talk is embedded as its own module directly below; naming it twice would breach the no-repetition rule.
- **Expanded "TTS" to "Technology Transformation Services"** per register rule 6 on unexplained acronyms.
- **Changed "decide" to "determine"** in the lede so "decision layer … systems that decide" stopped echoing itself. "Determine" is Ron's own word from `2026-site/about.html`.

**Where a human actually intervened:** Ron chose the register option and the full-cleanup option, after being shown the conflict between the register and the README's intro rule.

**Points where it should have escalated and didn't:** none known. The one judgment that warranted escalation (the intro's register) is flagged above rather than buried.

**Accountable for these actions:** Ron Bronson.

## 4. Deviation — the gaps

**Gaps between intent and action, and why (root cause):**

The standing rule in this repo is "All copy is Ron's. Nothing in the main column was drafted on his behalf." The introduction and `Practice` now violate it. The root cause is an explicit instruction from Ron that overrode it, given after the conflict was put to him in writing. **This does not generalise.** The next agent to touch this repo should read the copy rule as still in force and ask again.

**Good deviations:** the font fix. It was outside the copy task and would have shipped as a silent defect.

**Confidently wrong:** nothing known. The risk concentrates in the facts, see §5.

## 5. Consequence — what it cost or risked

**Actual outcome (did the work hold up):** the front door renders with all three slots filled, markup balanced, all four pages free of local 404s.

**Harm / cost / risk — realized or narrowly avoided:**

- **Narrowly avoided:** `@font-face` rules in `assets/front.css` still carried root-relative `assets/fonts/…` URLs after being moved out of the inline `<style>`. From a stylesheet at `assets/front.css` those resolve to `assets/assets/fonts/…`, so all seven faces 404'd and every one of the four pages had been rendering in system fallbacks. A type-driven site would have launched with none of its type. Found only because the page was rendered rather than read.
- **Live risk:** the biography facts are now an agent's paraphrase of source files, not Ron's own sentences. The numbers (2017–2025, close to four years as Head of Design, 40+ designers, 1,000+ applicants per opening, 100+ signups and fifty builders at Portland Digital Corps, six sites, eight-week sprints, 80+ at Design for the Public 24) each trace to a file, but the source files are themselves dated and were written for other purposes. **Ron should read the `Practice` paragraph as a factual claim about himself before this goes live.** That is the one check an agent cannot perform.
- `assets/og.png` was briefly stale and has been regenerated with the command in `assets/og.html`, at 1200×630 and no `deviceScaleFactor`. It now carries the new lede. This is the silent-staleness trap the README warns about: the card's text is baked into a PNG, so the five copies of the lede only stay in step if the card is rebuilt in the same commit.

**Downstream affected parties:** readers of the front door; `dev-site` and `2026-site`, which share `assets/core.css`.

**Expected failure if this run happened 100 times:** the recurring failure is an agent treating "draft the copy" as standing permission rather than a one-time override, and quietly rewriting Ron's words on a later run.

## 6. Change — what happens next

**Specific changes before next run:**

1. Ron reads `Practice` and the introduction as claims about himself and corrects them.
2. Decide whether the introduction should take the register's tenure opener (§3).

**Keep doing:** rendering the page headless instead of reading the markup. The font regression was invisible in the diff and in the source.

**Should not be delegated to an agent at all:** deciding whether the biography is true. An agent can source every number and still produce a paragraph Ron would not sign.

**Signal that the change worked:** Ron reads the `Practice` paragraph without correcting a fact, and the regenerated card matches the page.
