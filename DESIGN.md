---
version: beta
name: Gocres Editorial
description: >
  Boutique branding-studio design system for gocres.com — a Hugo +
  Tailwind CSS v4 marketing site. Extracted from
  themes/gocres/assets/css/main.css, the Hugo layouts/partials, and the
  "Web - Gocres" Figma file (V2 - Web (Branding), node 2002:2), which is
  the current source of truth for new work.
colors:
  ink: "#111310"
  ink-soft: "#232323"
  ink-deep: "#0C0C0C"
  cream: "#F9F3E9"
  sand: "#DECFB7"
  surface: "#FFFFFF"
  accent-taupe: "#9E8E73"
  primary: "{colors.ink}"
  neutral: "{colors.cream}"
  secondary: "{colors.sand}"
  on-surface: "{colors.ink}"
  muted: "oklch(0.93 0.012 82)"
  muted-foreground: "#5C5A54"
  border: "#D9D3CA"
  border-deep: "#33322E"
  line: "oklch(0.82 0.018 82)"
  error: "oklch(0.55 0.19 27)"
typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 120px
    fontWeight: 500
    lineHeight: 0.95
    letterSpacing: -0.035em
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 76px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: -0.03em
  display-md:
    fontFamily: Space Grotesk
    fontSize: 44px
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: -0.025em
  heading-sm:
    fontFamily: Space Grotesk
    fontSize: 30px
    fontWeight: 500
    lineHeight: 1.375
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "'ss01', 'cv11'"
  body-sm:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  label-eyebrow:
    fontFamily: Work Sans
    fontSize: 11.52px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.22em
  label-caption:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0.2em
spacing:
  unit: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 24px
  gutter-lg: 40px
  container-max: 1440px
  section-py-sm: 128px
  section-py-lg: 192px
rounded:
  sm: 0px
  md: 2px
  lg: 4px
  full: 9999px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    typography: "{typography.body-lg}"
    fontWeight: 500
    rounded: "{rounded.full}"
    height: 54px
    padding: "16px 40px"
    gap: 16px
  button-primary-hover:
    opacity: "0.9"
  button-primary-compact:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    typography: "{typography.body-md}"
    fontWeight: 500
    rounded: "{rounded.full}"
    padding: "12px 24px"
    gap: 8px
    note: "Header/nav CTA size — same pill, smaller footprint than button-primary."
  button-on-tonal:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-lg}"
    fontWeight: 500
    rounded: "{rounded.full}"
    height: 54px
    padding: "16px 40px"
    note: "Primary-button shape inverted to a cream fill, used when the button sits on a sand/tonal section background instead of cream."
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.on-surface}"
    borderColor: "{colors.border}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    height: 56px
    padding: 28px
  button-secondary-hover:
    backgroundColor: "{colors.secondary}"
  button-text:
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    borderColor: "{colors.on-surface}"
  chip:
    backgroundColor: transparent
    textColor: "{colors.on-surface}"
    borderColor: "{colors.border}"
    rounded: "{rounded.full}"
    height: 40px
    padding: 16px
  chip-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    borderColor: "{colors.primary}"
  input-field:
    backgroundColor: transparent
    textColor: "{colors.on-surface}"
    borderColor: "{colors.border}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.sm}"
    padding: 12px
  input-field-focus:
    borderColor: "{colors.on-surface}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    borderColor: "{colors.border}"
    rounded: "{rounded.sm}"
    padding: 40px
  case-card:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.cream}"
    rounded: "{rounded.sm}"
    padding: 24px
  faq-item:
    textColor: "{colors.on-surface}"
    borderColor: "{colors.border}"
    typography: "{typography.heading-sm}"
  nav-header:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    borderColor: "{colors.border}"
    height: 80px
    note: "Static cream fill + 1px bottom hairline at all times (confirmed by the Figma header sitting at the very top of the page composition, not a scroll-triggered state) — no transparent-at-top/opaque-on-scroll transition."
  footer:
    backgroundColor: "{colors.ink-deep}"
    textColor: "{colors.border}"
    borderColor: "{colors.border-deep}"
    eyebrowColor: "{colors.sand}"
    note: "Footer is a darker, dedicated near-black (#0C0C0C), not the ink (#111310) used elsewhere — treat it as its own tonal block, not a reuse of primary."
omitted:
  - section: Elevation & Depth
    reason: "Flat design with no drop shadows in production; one unused shadow token is documented below for future elevated surfaces (modals, popovers)."
---

# Gocres — Design System

## Overview

Gocres is a boutique branding and digital-product studio. The site's visual
language is **Editorial · Premium · Boutique** — closer to a print magazine
or a monograph than a typical SaaS marketing site. Sections are numbered
like chapters ("01 · El espejo", "02 · La oportunidad"…), copy is set in
large, confident display type, and pages breathe with generous negative
space (128–192px of vertical section padding is the norm, not the
exception).

The brand voice is calm, deliberate, and a little literary — "el camino no
se improvisa, se recorre" ("the path isn't improvised, it's walked"). A paw
print motif (`partial "paw.html"`) reinforces the walking/journey metaphor
throughout numbered lists and step markers. The target audience is
founders and growing businesses who want a studio that feels considered
and trustworthy rather than flashy — so the palette stays almost
monochrome, contrast is high, and color is spent sparingly.

Motion is a deliberate, low-key detail: content fades and rises into view
on scroll (`opacity: 0 → 1`, `translateY(24px) → 0`, 900ms
`cubic-bezier(0.16, 1, 0.3, 1)`, staggered by ~60–120ms per item). It should
always read as a soft reveal, never a bounce or a flashy entrance.

## Colors

The palette is almost monochrome by design: two near-black inks, one warm
paper background, one earthy accent. Color is a scalpel, not a paintbrush.

- **Ink (`#111310`):** The primary color. Used as the default text color,
  as the fill for primary buttons, and as a full-bleed dark section
  background (hero-adjacent "oportunidad" and closing CTA sections) to
  create high-contrast, editorial breaks in the page rhythm.
- **Ink Soft (`#232323`):** A secondary near-black used sparingly for
  emphasis within body copy (e.g. an italicized word inside a headline).
- **Ink Deep (`#0C0C0C`):** A dedicated, slightly darker near-black used
  only for the site footer. Not a duplicate of ink — the footer is its own
  tonal block, one shade darker than every other dark section.
- **Cream (`#F9F3E9`):** The neutral. The default page background and the
  "paper" the whole site is printed on. Also used as reversed text/button
  color on dark (ink) sections.
- **Sand (`#DECFB7`):** The secondary/accent. A warm earthy tan used for
  secondary section backgrounds, hover states, active chip fills, and the
  footer's eyebrow color. Never used for large bodies of text.
- **Accent Taupe (`#9E8E73`):** A muted taupe used exclusively inline,
  inside display headlines, to emphasize one phrase on a cream background
  (e.g. "tus **clientes**"). On a sand-background headline, the emphasis
  color switches to Muted Foreground (`#5C5A54`) instead, so the emphasized
  word always stays readable against its own section background.
- **Surface (`#FFFFFF`):** Pure white, reserved for cards that need to sit
  slightly above the cream background (testimonial cards, contact info
  panel).
- **Border / Line:** `border` (`#D9D3CA`) is the standard warm-grey
  hairline (header bottom border, footer nav-link text). `border-deep`
  (`#33322E`) is its dark-mode counterpart, used only inside the Ink Deep
  footer. `line` is a closely related warm grey for secondary hairline
  rules elsewhere. Together they're the system's primary tool for
  separating content without shadows or heavy boxes.
- **Muted foreground (`#5C5A54`):** A warm mid-grey used for
  secondary/supporting copy wherever full-ink contrast would be too loud
  (lead paragraphs under a headline, captions), and for in-headline
  emphasis on sand-background sections (see Accent Taupe above).
- **Error:** A muted brick red, present in the token set for form
  validation but not currently rendered anywhere in the UI.

## Typography

Two typefaces, two jobs. **Space Grotesk** is the editorial, geometric
display face — it exists to make headlines, numbered markers, and pull
quotes feel confident and slightly architectural. **Work Sans** is the
workhorse — body copy, labels, navigation, buttons, forms. The two are
never swapped: display copy is never set in Work Sans, and body copy is
never set in Space Grotesk.

- **Display (`display-xl` / `display-lg` / `display-md`):** Space Grotesk
  Medium (500), always tight and slightly negative letter-spacing
  (-0.025em to -0.035em), fluid via `clamp()` so headlines scale smoothly
  between mobile and desktop rather than jumping at breakpoints. `display-xl`
  is reserved for the hero H1 and the final CTA H2 — at most one per page.
- **Heading Small:** Space Grotesk Medium at a fixed 30px, used for
  editorial pull-quotes and list items that need display presence at
  paragraph scale (e.g. the "¿Te resulta familiar?" list, service leads).
- **Body:** Work Sans Regular (400). `body-lg` (18px) is used for lead
  paragraphs directly under a headline; `body-md` (16px) is the default
  paragraph size; `body-sm` (14px) is used for navigation links, button
  labels, and secondary UI text. Body text also enables the `ss01`/`cv11`
  OpenType features for slightly more contemporary numerals and forms.
- **Labels:** `label-eyebrow` is the small-caps-style kicker
  ("01 · EL ESPEJO", "BRANDING · UX/UI · DISEÑO DIGITAL") that opens every
  section — always uppercase, always at 0.22em letter-spacing, always in
  the muted-foreground color. `label-caption` is used for meta text under
  testimonials and image captions, also uppercase with wide tracking.
- Heading elements (`h1`–`h6`) default to Space Grotesk Medium (500) at
  -0.02em letter-spacing even outside the named display utilities, so any
  new heading automatically inherits the display voice.

## Layout

The site is built on Tailwind CSS v4 utility classes with a single fixed
content container: **`max-w-[1440px]`**, horizontally padded `24px` on
mobile and `40px` on desktop (`px-6 md:px-10`). Inside that container,
multi-column sections use a **12-column grid** (`grid md:grid-cols-12`),
typically split 4/8, 5/7, or 7/5 to pair a short eyebrow+headline column
against a longer content column — never an even 6/6 split, which would
read as too static for the editorial tone.

Vertical rhythm is deliberately generous: most sections use
`py-32 md:py-48` (128px → 192px), with tighter `py-20`/`py-24` for
denser sections (marquee, hero). Section numbering (`01`, `02`, `03`…) in
the eyebrow doubles as a wayfinding device down a very long single-column
homepage.

Spacing otherwise follows Tailwind's default 4px base scale — gaps of
`gap-6`/`gap-8`/`gap-10`/`gap-16` (24/32/40/64px) are used for grid and
flex spacing, and interactive element heights step through `h-9` (36px)
up to `h-16` (64px) depending on prominence (chip → compact button →
primary CTA).

## Elevation & Depth

The design is **flat**. There are no drop shadows anywhere in the
rendered UI — visual hierarchy comes entirely from:

1. **Tonal blocks** — alternating full-bleed section backgrounds between
   cream, sand (secondary), ink (dark, high-contrast breaks), and white
   (cards) to segment the page without borders or boxes.
2. **Hairline rules** — 1px `border`/`line` colored dividers between list
   items, table-like grids (benefits, values), and stacked sections.
3. **Opacity layering** — text and rules on dark sections use
   ink/cream at reduced opacity (e.g. `text-[color:var(--cream)]/70`)
   rather than a separate lighter color token, to keep the palette small.

A `shadow-editorial` token (`0 30px 80px -40px oklch(0.15 0.005 60 / 0.35)`)
is defined in the CSS theme for future elevated surfaces such as modals or
popovers, but nothing in the current UI uses it — treat it as reserved,
not deployed.

## Shapes

Shape language is intentionally split by function: **sharp for content,
round for action.**

- Images, cards, and media containers use `rounded-sm`, which in this
  theme's radius scale resolves to **0px** — hard, architectural corners
  that reinforce the editorial/print feel.
- Every clickable button and chip uses `rounded-full` — fully pill-shaped
  — so the eye can instantly tell "this is interactive" apart from static
  content blocks.
- Nothing in the interface mixes the two: a rounded corner always signals
  an action, a square corner always signals content.

## Components

- **Buttons:** Solid ink pill with cream text (`bg-primary`/
  `text-primary-foreground`), `rounded-full`, with an arrow glyph (`→`)
  that nudges right on hover, in two sizes: **`button-primary`** (54px
  tall, `16px 40px` padding, `body-lg`/500 label) for hero and CTA
  prominence, and **`button-primary-compact`** (`12px 24px` padding,
  `body-md`/500 label) for the header nav CTA. On a tonal (sand)
  background, use **`button-on-tonal`** — the same shape/size as
  `button-primary` but inverted to a cream fill with ink text, so the
  button never disappears against its section. **Secondary/outline** is a
  transparent pill with a `border-border` outline that fills with the
  secondary (sand) color on hover. A **text-link** variant (underline via
  `border-b`) is used for lower-emphasis links like "Conocer mi historia."
- **Chips:** Toggle-style selection chips used in the contact form
  (service type, budget range). Default state is an outlined pill;
  `.chip.is-active` fills with the primary (ink) color and flips text to
  cream. Multiple chips within a group are not mutually exclusive by
  markup — behavior is controlled by the accompanying JS.
- **Cards:** Two card patterns. The **testimonial/benefit card** is a
  bordered, `rounded-sm` white or cream box with generous padding
  (`p-8`/`p-10`) and a `justify-between` flex layout so a quote sits above
  fixed attribution. The **case-card** is a full-bleed image card
  (`aspect-[16/11]`, `rounded-sm`) with a dark gradient overlay
  (ink at 70–80% opacity fading to transparent) carrying reversed
  (cream) text — tag eyebrow top, title and CTA bottom.
- **Lists:** Most lists (mirror statements, method steps, FAQ) are simple
  `divide-y`/`border-t` stacks rather than bulleted — each item numbered
  manually (`01`, `02`…) in a muted-foreground display-font marker column.
- **Inputs:** Minimalist underline style — no box, no fill, just a bottom
  border (`border-b border-border`) that darkens to full foreground color
  on focus. Labels sit above as an eyebrow-style kicker
  ("01 · Cómo te llamas"), reinforcing the numbered/step metaphor used
  throughout the site.
- **FAQ accordion:** Native `<details>`/`<summary>`, no JS required for
  the open/close mechanic. A circular `+` icon rotates 45° to become a
  visual `×` when the panel is open (`details[open] .faq-icon`).
- **Navigation header:** Sticky, always a solid cream (`#F9F3E9`)
  background with a permanent 1px `border`-colored (`#D9D3CA`) bottom
  hairline — not a scroll-triggered transition. The logo is the
  illustrated wolf-mark + "ocres" wordmark lockup (`partial "logo.html"`),
  not a text-only wordmark.
- **Footer:** The one section that is never cream, sand, or ink — it uses
  its own dedicated `ink-deep` (`#0C0C0C`) background with `border-deep`
  (`#33322E`) hairlines, sand-colored eyebrow labels, and `border`-colored
  (`#D9D3CA`) link text, so treat it as a distinct tonal block rather than
  reusing the primary dark-section styling.

## Do's and Don'ts

- Do open a section headline directly with a `display-lg`/`display-xl`
  heading — most section headings (home, /metodo/, /about/, /casos/) have
  NO eyebrow kicker above them per the current Figma file. Reserve
  `label-eyebrow` for: per-item numbering inside a list/step (mirror
  statements, method phases — "01", "02"…), a genuine label above a small
  data cluster (contact info card fields, footer nav-column titles), or a
  short standalone kicker line the design explicitly shows (e.g. "Un poco
  sobre mí" before the /about/ pull-quote). When unsure whether a given
  headline gets one, check the current Figma file rather than assuming
  every section needs it — the older "0X · Section Name" chapter-numbered
  kicker convention was dropped in the V2 redesign.
- Do let hairline borders, tonal background blocks, and opacity do the
  work of hierarchy. Don't add drop shadows to cards, buttons, or nav —
  the design is deliberately flat.
- Do keep `rounded-full` exclusive to interactive elements (buttons,
  chips) and sharp corners (`rounded-sm`/0px) on everything else
  (images, cards, containers). Don't mix the two shape languages in the
  same component.
- Do spend the sand accent sparingly — one emphasized word, one hover
  state, one active chip — never as a large fill or body-text color.
  Don't use it for anything that needs to stay legible at length.
- Do pair Space Grotesk (display) exclusively with headlines, numbered
  markers, and pull-quotes; Work Sans exclusively with body copy, labels,
  and UI chrome. Don't cross the two typefaces' roles.
- Do use the fluid `clamp()`-based display sizes for new headlines so they
  scale smoothly across breakpoints instead of jumping.
- Do maintain generous section padding (128–192px) between major
  homepage sections; cramming sections closer together undercuts the
  editorial, unhurried pacing the brand relies on.
- Don't introduce a third typeface or a fully saturated/bright color —
  the entire system is built on restraint: two fonts, four core colors.
