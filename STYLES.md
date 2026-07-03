# Style reference

A cheat-sheet of the styles defined in `src/styles/theme.css` (tokens) and
`src/styles/global.css` (elements + components). Three ways to reach them:
markdown in content files, the `formatInline` markers in config strings, and
plain CSS classes / variables in any `.astro` or HTML.

---

## 1. Inline text — in markdown content files (`src/content/**/*.md`)

Standard markdown, styled by the `.prose` rules:

| Write            | Result                                    |
|------------------|-------------------------------------------|
| `*text*`         | emphasis → **pink italic**                |
| `**text**`       | strong → full-weight foreground           |
| `***text***`     | bold + italic → **mauve**                 |
| `` `text` ``     | inline code chip                          |
| `~~text~~`       | strikethrough (dim)                       |
| `> text`         | blockquote (green rule, italic)           |
| `## Heading`     | section heading, auto-numbered `§1, §2…`  |
| `### Heading`    | sub-heading                               |
| `- item`         | list; markers use the green accent        |
| `---`            | horizontal rule                           |
| `$x^2$`          | inline math (KaTeX)                        |
| `$$ … $$`        | display math, incl. `\begin{align*}`      |

For anything richer, drop raw HTML into the markdown and use the classes in §3
(e.g. `<span class="accent-3">…</span>`, `<mark>…</mark>`).

---

## 2. Inline text — in config strings (`src/config.ts`)

Config strings (like `SITE.intro`) aren't run through markdown; they go through
`formatInline()` in `src/lib/markup.ts`, which supports:

| Write         | Result                          |
|---------------|---------------------------------|
| `*text*`      | emphasis (pink italic)          |
| `**text**`    | bold                            |
| `***text***`  | bold italic (mauve)             |
| `==text==`    | highlighter mark                |
| `_text_`      | highlight (orange italic)       |
| `` `text` ``  | inline code                     |

You can also embed raw HTML in these strings (the intro already uses an
`<a class="ext">` link).

---

## 3. Utility classes — use anywhere with `class="…"`

Text colour / emphasis:

- `.accent` — green
- `.accent-2` — pink
- `.accent-3` — orange
- `.highlight` — orange italic, medium weight
- `<mark>…</mark>` — highlighter background

Links:

- `.ext` on an `<a>` — adds the ↗ arrow that grows + lifts on hover. Pair with
  `target="_blank" rel="noopener"` for real external links.

Standard links auto-style: hover = cyan text + pink underline. Header, footer,
and brand links hover cyan with no underline. The current page in the nav shows
pink (via `aria-current="page"`).

---

## 4. Layout & component classes

Building blocks for pages:

- `.wrap` — centered column (max `--content-width`, responsive padding)
- `.eyebrow` — small dim caption/label
- `.slabel` — uppercase section label with a trailing hairline rule
- `.hero`, `.hero h1`, `.hero .lede` — home header block
- `.linkrow` / `.linkrow a` — inline link row with leading `→` that nudges on hover
- `.list` + `.item` — preview rows. Inside an `.item`: `.date`, `.t` (title),
  `.d` (description), `.arrow`. Whole row underlines pink on hover.
- `.article`, `.article .lede`, `.backlink` — article header
- `.prose` — the rich-text container; wrap article body content in it to get all
  the heading/list/quote/code/figure/math styling
- `.footer`, `.flinks`, `.top`, `.copy` — footer pieces

---

## 5. Design tokens (CSS variables)

Use in inline `style="…"`, SVGs, or new CSS. All defined per-theme in
`theme.css`, so they adapt to light/dark automatically.

Colours:

- `--bg`, `--bg-raised`, `--bg-code` — backgrounds
- `--fg`, `--fg-muted`, `--fg-dim` — text
- `--border`, `--surface-hover` — lines & hover fills
- `--link` — cyan (interactive links)
- `--accent` — green (structural/UI)
- `--accent-2` — pink (emphasis + link underline)
- `--accent-3` — orange (rare highlight)
- `--accent-4` — mauve (secondary emphasis)
- `--mark-bg` — highlighter tint

Layout / timing:

- `--font-mono` — the IBM Plex Mono stack
- `--content-width` — page column width (760px)
- `--measure` — prose line length (70ch)
- `--step` — base line-height
- `--pad` — responsive inline padding
- `--radius` — corner radius
- `--dur` — transition duration
- `--arrow-gap` — gap before header/footer ↗ arrows

Example: `<span style="color: var(--accent-4)">custom</span>`
