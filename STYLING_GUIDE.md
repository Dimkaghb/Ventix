# Styling Guide — Ventrix / Dianaverntrix

Extracted directly from the Framer project source and visual design reference. Use this as the single source of truth when building new pages, components, or features in Next.js.

---

## 0. Product & Visual Identity

This is **Ventrix** — a vortex-induced wind generator company. The product is called **ВИ\*-Ветрогенератор** (VI\* = Вихреиндуцированный / Vortex-Induced). Every design decision should reinforce the brand themes: **atmospheric energy, vortex motion, clean technology, dark-premium**.

### Asset Inventory

| File | Role | Usage notes |
|---|---|---|
| `assets/фон.png` | **Full-page background** | Dark navy/black with blue smoke swirls at corners. Apply as `position: fixed; inset: 0; object-fit: cover`. Required on every page. |
| `assets/image.png` | **Hero product visual** | Three VI* turbines with spotlight fx. PNG should be transparent-bg; use `object-contain object-bottom` so turbines "stand on the floor". |
| `assets/фотоВихревыеКолебания.png` | **Wave / vortex strip** | Panoramic photo of vortex oscillations. Use `mix-blend-mode: screen` to make its black bg transparent — only the glowing blue waves remain visible. Use as atmospheric divider strips between sections. |
| `assets/синийзнак.png` | **Logo mark** | The Ventrix swirl symbol. Pair with "ventrix" wordmark in Plus Jakarta Sans Semibold. |

### Background Overlay Rules

Always apply a gradient vignette on top of `фон.png` to maintain text readability:
```css
/* dark-top → transparent → dark-bottom */
background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 40%, rgba(0,0,0,0.6) 100%);
```

### Vortex Wave Usage

The `фотоВихревыеКолебания.png` strip should appear at section boundaries to evoke the VI\* physics principle:
```tsx
<div className="relative w-full overflow-hidden" style={{ height: "88px" }}>
  <Image src={волныImg} fill className="object-cover" style={{ mixBlendMode: "screen", opacity: 0.75 }} />
  {/* fade left/right edges */}
  <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
  <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />
</div>
```

---

## 1. Color Palette

All color tokens map 1:1 to Framer color styles. Use the CSS values below when implementing in code.

### Backgrounds

| Token | Light Value | Dark Value | Usage |
|---|---|---|---|
| `/Bg/Primary` | `rgb(0, 0, 0)` | `rgb(0, 0, 0)` | Page background |
| `/Bg/Secondary` | `rgba(255, 255, 255, 0.04)` | same | Cards, content blocks |
| `/Bg/CTA` | `rgb(18, 18, 18)` | — | Secondary button default |
| `/Bg/Hover` | `rgb(26, 26, 26)` | — | Button hover states |

### Text

| Token | Value | Usage |
|---|---|---|
| `/Text/Primary` | `rgb(255, 255, 255)` | Primary text |
| `/Text/Secondary` | `rgb(186, 186, 186)` | Subtext, captions |
| `/Text/Hover` | `rgb(184, 184, 184)` | Text hover state |

### Brand

| Token | Value | Usage |
|---|---|---|
| `/Brand/Primary` | `rgb(54, 94, 255)` — `#365EFF` | Primary buttons, accents, form CTA |
| `/Brand/Secondary` | `rgb(77, 112, 255)` — `#4D70FF` | Hover state of primary brand, badges |

### Borders & Dividers

| Token | Value | Usage |
|---|---|---|
| `/Border` | `rgba(255, 255, 255, 0.2)` | Section edges, card dividers |

### Utility

| Token | Value | Usage |
|---|---|---|
| `/Light` | `rgb(217, 217, 217)` | Light accent elements |
| `/Secondary` | `rgb(110, 110, 110)` | Muted/disabled UI |

### Status Colors (Form component)

| State | Value |
|---|---|
| Success | `rgb(0, 194, 36)` |
| Error | `rgb(255, 34, 68)` |

---

## 2. Typography

### Font Families

| Role | Family | Format ID |
|---|---|---|
| Headings | **Plus Jakarta Sans** (SemiBold) | `FS;Plus Jakarta Sans-semibold` |
| Body / UI | **Inter** (Regular) | `Inter` |
| UI SemiBold | **Inter** (SemiBold) | `Inter-SemiBold` |
| Logo / Wordmark | Plus Jakarta Sans SemiBold | `FS;Plus Jakarta Sans-semibold` |

### Type Scale

| Style | Font | Size | Line Height | Letter Spacing | Transform | Tag |
|---|---|---|---|---|---|---|
| `/Heading 1` | Plus Jakarta Sans SemiBold | `60px` | `1em` | `-0.04em` | none | `h1` |
| `/Heading 2` | Plus Jakarta Sans SemiBold | `44px` | `1.1em` | `-0.04em` | none | `h2` |
| `/Heading 3` | Plus Jakarta Sans SemiBold | `32px` | `1.1em` | `-0.04em` | none | `h3` |
| `/Heading 4` | Plus Jakarta Sans SemiBold | `24px` | `1.3em` | `-0.04em` | none | `h4` |
| `/Heading 5` | Plus Jakarta Sans SemiBold | `18px` | `1.4em` | `-0.04em` | none | `h5` |
| `/Body` | Inter Regular | `18px` | `1.4em` | `-0.04em` | none | `p` |
| `/Small Body` | Inter Regular | `16px` | `1.4em` | `-0.04em` | none | `p` |
| `/CTA` | Inter SemiBold | `14px` | `1.1em` | `-0.04em` | none | `p` |
| `/Tag` | Inter SemiBold | `14px` | `1.1em` | `+0.04em` | **uppercase** | `p` |
| `/Small Tag` | Inter SemiBold | `12px` | `1.1em` | `+0.04em` | **uppercase** | `p` |

**Note on paragraph spacing:**
- Headings 2–5: `paragraphSpacing: 40`
- Body / Small Body / CTA / Tag: `paragraphSpacing: 20`
- Heading 1: `paragraphSpacing: 0`

**Note on text balance:** `/Body` has `balance: true` (CSS `text-wrap: balance`).

---

## 3. Spacing & Layout

### Page Container

```
Max width:          1200px
Outer padding:      0px 40px   (horizontal, wraps all sections)
Desktop breakpoint: 1200px canvas width
Tablet breakpoint:  810px canvas width
Mobile breakpoint:  390px canvas width
```

### Section Anatomy

Every section follows this nesting pattern:

```
<Section>                          padding: 0px 40px (outer)
  <ContentContainer>               maxWidth: 1200px
                                   borderLeft + borderRight: 1px dashed /Border
    <Container>                    padding: 100px 40px (inner)
      <Headline>                   gap: 24px (horizontal, text + CTA)
        <TextContainer>            gap: 20px vertical
          <Tag />                  /Tag text style
          <Heading />              /Heading 2
          <Body />                 /Body
        </TextContainer>
        <Button />
      </Headline>
      <Content area />
    </Container>
  </ContentContainer>
</Section>
```

### Key Spacing Values

| Context | Value |
|---|---|
| Between sections (outer gap) | `14px` |
| Hero top padding | `200px` |
| Section inner vertical padding | `100px` top + `100px` bottom |
| Section inner horizontal padding | `40px` |
| Headline gap (text ↔ button) | `24px` |
| Text block internal gap | `16px` – `20px` |
| Tag + heading group gap | `8px` |
| Card grid gap | `16px` |
| Card internal padding | `28px` (Role), `20px` (Testimonial), `32px` (Content) |
| Footer nav column gap | `34px` |
| Footer link row gap | `16px` |
| Nav bar padding | `20px 40px` |
| Footer content top padding | `100px` |

---

## 4. Border Radius

| Element | Value | Notes |
|---|---|---|
| Role card | `16px` | |
| Testimonial card | `24px` | |
| Content/process card | `20px` | |
| Primary button | `10px` | All button variants |
| Secondary button | `10px` | |
| Form submit button | `28px` | Pill shape |
| Tag badge (Featured, etc.) | `24px` | Semi-pill |
| Company logo container | `52px` | Full circle (52×52px) |
| Avatar image | `68px` | Full circle (64×64px image) |
| Divider line | — | `height: 2px`, color `/Border` |

---

## 5. Borders & Dividers

```
Section content edge borders:
  borderWidth: 0px 1px 0px 1px   (left and right only)
  borderStyle: dashed
  borderColor: rgba(255, 255, 255, 0.2)

Card dividers:
  height: 2px
  backgroundColor: /Border  →  rgba(255, 255, 255, 0.2)

Tag badge border:
  none (background-only treatment)
```

---

## 6. Component Patterns

### Button — Primary (`/Brand/Primary`)

```
backgroundColor: rgb(54, 94, 255)
borderRadius:    10px
padding:         12px
layout:          horizontal stack, center alignment
gap:             4px  (icon + label)
text style:      /CTA
```

### Button — Secondary (`/Bg/CTA`)

```
backgroundColor: rgb(18, 18, 18)
borderRadius:    10px
padding:         12px
text style:      /CTA
```

### Button — Hover state

```
backgroundColor: rgb(26, 26, 26)   (/Bg/Hover)
```

### Button — Nav Link

```
backgroundColor: none
borderRadius:    0px
padding:         0px
text style:      /CTA
```

### Form Submit Button

```
backgroundColor: rgb(54, 94, 255)   (/Brand/Primary)
borderRadius:    28px               (pill)
padding:         12px 16px
text style:      /Tag               (uppercase, semibold)
States:
  Hover:    /Brand/Secondary  →  rgb(77, 112, 255)
  Disabled: opacity 0.5
  Success:  rgb(0, 194, 36)
  Error:    rgb(255, 34, 68)
```

### Role Card

```
backgroundColor: rgba(255, 255, 255, 0.04)   (/Bg/Secondary)
borderRadius:    16px
padding:         28px
size:            380px × 324px
internal gap:    28px vertical
logo container:  52×52px, circle, rgba(255,255,255,0.1)
tag badge:       rgba(121, 137, 217, 0.08) bg, borderRadius 24px, padding 8px 12px
divider:         2px, /Border
```

### Testimonial Card

```
backgroundColor: rgba(255, 255, 255, 0.04)
borderRadius:    24px
padding:         20px
internal gap:    28px vertical
avatar:          64×64px, borderRadius 68px
```

### Content / Process Card

```
backgroundColor: rgba(255, 255, 255, 0.04)   (/Bg/Secondary)
borderRadius:    20px
padding:         32px
width:           384px
internal gap:    20px vertical
step label:      /Small Tag
title:           /Heading 3
body:            /Small Body
```

### Navigation Header

```
position:        fixed
max-width:       1200px
padding:         20px 40px
layout:          horizontal, space-between, center aligned
logo font:       Plus Jakarta Sans SemiBold (wordmark, not image)
breakpoints:     Desktop 1200px / Tablet 986px / Mobile 390px
```

### Footer

```
outer padding:   0px 40px
content padding: 100px 40px 0px 40px
border:          left + right 1px dashed /Border
layout:          horizontal space-between (logo+bio | link columns)
bio text style:  /Body
link columns:    3 groups × vertical stack, gap 16px
bottom bar:      padding 20px, centered, /Small Body text
```

---

## 7. Grid Patterns

| Section | Columns | Gap | Row height |
|---|---|---|---|
| Role cards | 3 | `16px` | auto |
| Testimonials | 2 | `16px` | auto |
| Recruiters | 3 | `16px` | auto |

All grids use `gridColumnWidthType: minmax` with `gridColumnMinWidth: 50px`.

---

## 8. Shadows & Visual Effects

- No explicit `box-shadow` tokens defined in the project.
- Depth is achieved with **background opacity layering**: cards use `rgba(255,255,255,0.04)` against a `rgb(0,0,0)` base.
- Decorative blur/glow elements exist in the Hero and Footer (rotated, absolutely positioned blurred shapes) — do not replicate these in code unless building exact parity.

---

## 9. Responsive Breakpoints

| Name | Canvas Width | Outer Padding |
|---|---|---|
| Desktop | `1200px` | `0px 40px` |
| Tablet | `810px` | `0px 20px` |
| Mobile | `390px` | `0px 16px` |

---

## 10. Design Principles (inferred)

1. **Dark-first.** Pure black (`#000`) base with near-transparent white overlays for cards and surfaces. Never use pure white backgrounds.
2. **Dashed borders as structure.** Section content areas use `1px dashed rgba(255,255,255,0.2)` on left/right edges to frame content without heavy visual weight.
3. **Tight, negative letter-spacing on all display text.** All headings use `-0.04em`. CTA/label text uses `-0.04em`. Only tags/labels going uppercase use `+0.04em`.
4. **Consistent 100px vertical rhythm.** Top and bottom padding of content containers is consistently `100px`, creating breathing room between sections.
5. **Brand blue is reserved for primary actions.** `#365EFF` only appears on primary CTAs, form submits, and accent elements — never as a background color for containers.
6. **Uppercase tags as section labels.** Every section opens with a small uppercase `/Tag` or `/Small Tag` label above the heading (e.g. "process", "recruiting", "featured roles").
7. **Two font families, clear roles.** Plus Jakarta Sans = identity/headings. Inter = all body copy, UI labels, CTAs.
