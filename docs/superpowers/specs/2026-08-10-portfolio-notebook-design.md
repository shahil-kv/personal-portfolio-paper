# shahilkv.in — field notebook redesign

**Date:** 2026-08-10
**Branch:** `redesign/notebook`

## The job

The site's audience is people who find Shahil through his Instagram videos. Its
job is to make that audience stay: show what he builds, show the videos, and
give one obvious way to reach him. Projects are supporting evidence, not the
spine.

Subject, in his own words: *"Developer. Founder. Automation builder. Scaling
businesses through automation. From Kerala. No hype. Just real."* 46 videos,
5,965 followers, most content in Malayalam and about Claude Code, MCP and
agents.

## What was wrong with the old site

Verified against the live site and the source:

- Roughly 60% of the page was empty grey. Every section carried a 200–400px
  void created by centred flex containers with no structural ground.
- Saturated stock photography and full-colour brand logos sat inside a
  monochrome pencil-sketch page. Two visual worlds that never touched.
- Three competing textures: paper grain, a graph-paper grid, hand-drawn outline
  illustration.
- Two type sizes total — a 140px display face and ~14px body. No mid-tier, so
  no hierarchy.
- Palette was six greys. `--territory`, `--forth` and `--fifth` were declared
  and never used.
- Hero was absolutely positioned with hardcoded offsets (`-top-33`, `left-18`,
  `lg:mt-80`), correct at exactly two widths.
- No contact path anywhere on the site.
- `githubLink: ''` on company projects rendered a Github button linking to `/`.
- PetroHSE copy ended mid-sentence.
- `metadataBase` pointed at `shahil.co`, not `shahilkv.in` — every canonical and
  OG URL resolved to the wrong domain.
- Dead code: empty `useTheme.ts`, `useScrollAnimation.ts`, `lib/api.ts`,
  duplicate Footer components, a `[data-theme='dark']` block referencing tokens
  that did not exist.

## Direction

A surveyor's field notebook. The page is a ruled sheet on a desk. Handwriting
is demoted to an annotation layer and never sets a heading or a paragraph —
that is what turns the hand-drawn quality from decoration into information.

### Colour

| Token | Value | Role |
|---|---|---|
| `--paper` | `#e9e8e0` | The sheet. Cool bone, green-grey cast. |
| `--paper-deep` | `#dedcd2` | The desk behind the sheet. |
| `--rule` | `#b9c4c0` | Printed rule line, desaturated cyan-green. |
| `--ink` | `#1c2529` | Iron-gall blue-black. Body text. |
| `--ink-soft` | `#5a6669` | Secondary text. |
| `--annotate` | `#c2452d` | Correction pencil. Annotations and active state only. |
| `--stamp` | `#2f5d50` | Used exactly once, on the location stamp. |

Deliberately not `#F4F1EA` cream. A field book is grey-green and mineral,
printed with a cyan rule and written in ink that is blue-black rather than
black. The red is correction-pencil red because red pencil is what you annotate
with — not a terracotta accent chosen for warmth.

### Type — four roles

| Role | Face | Use |
|---|---|---|
| Display | Bricolage Grotesque | Headings and the name |
| Body | Newsreader | Reading passages |
| Utility | DM Mono | Page numbers, labels, tags, meta |
| Marginalia | Caveat | Annotations only |

Six-step scale: `.t-display`, `.t-title`, `.t-heading`, `.t-lead`, `.t-body`,
`.t-label`. Body sits on a 30px rhythm that matches the ruled ground.

### Layout

One vertical margin rule runs the full sheet at `--gutter`. All content hangs
off it. Page markers sit in the gutter in DM Mono. Section rules span the sheet
edge to edge. No absolute positioning with magic numbers.

Page numbering is honest structure here: a notebook genuinely is sequential, so
`p.01`–`p.05` encodes order the reader can use.

### Signature

The annotation layer. Red-pencil notes in Caveat with hand-drawn SVG arrows
anchored to real elements, each saying something true — *"same phone as the
videos"*, *"5,965 people follow along"*, *"this one is the day job now"*. Paths
draw themselves in on scroll via `pathLength`; under `prefers-reduced-motion`
they render already drawn. Five instances across the whole site. Restraint is
the point.

### Imagery

Every photo is duotone-mapped to ink/paper via a grayscale filter plus
`lighten`/`darken` blend layers. Nothing on the page competes with the
annotation red.

## Information architecture

Routes collapse from four to two. `/work` and `/skills` were 19-line wrappers
rendering the same components as the homepage — duplicate content, and a
contradiction in a document that is meant to be continuous.

```
/          p.01 Cover  → p.02 On film → p.03 Built → p.04 Stack → p.05 Find me
/about     p.00
```

**Videos come before projects.** That is the structural consequence of the site
being audience-first rather than client-first.

## Content model

- `src/data/videos.ts` — curated cards, not Instagram embeds. The official
  embed is ~200KB of unstylable iframe chrome and would make the page look more
  templated, not less. Each entry carries title, `lang`, a one-line takeaway,
  optional poster and permalink. Until a poster exists the card renders
  typographically rather than as a grey void.
- `src/data/projects.ts` — schema is `name, role, year, kind, summary, stack,
  live?, github?`. `github` is optional and only renders when present.

## Out of scope

- No test runner. This is a visual redesign of a static site with no users at
  risk; verification is by screenshot. Add a Playwright baseline later if
  regression safety becomes worth the setup.
- Instagram poster images are not included. Five frame grabs need to go into
  `/public/videos/` and be referenced from `videos.ts`.
- Video permalinks currently all point at the profile. Real per-post links
  should replace them.
