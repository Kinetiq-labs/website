# Kinetiq Font Structure
**Professional Typography System - "ALWAYS IN MOTION"**

---

## Font Families

### Primary Font: **Inter**
- **Usage:** Body text, UI elements, buttons, forms
- **Weights:** 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold), 800 (ExtraBold), 900 (Black)
- **Why:** Clean, highly legible, excellent for interfaces, modern and professional
- **Source:** Google Fonts

### Display Font: **Space Grotesk**
- **Usage:** Headlines, hero text, section titles, large displays
- **Weights:** 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- **Why:** Geometric, tech-forward, distinctive character, perfect for impact
- **Source:** Google Fonts

### Monospace Font: **JetBrains Mono** (or Fira Code)
- **Usage:** Code snippets, technical details, tags
- **Why:** Developer-focused, excellent readability, professional
- **Fallback:** System monospace fonts

---

## Typography Scale

### Display Sizes (Hero/Large Headlines)
| Class | Size (Desktop) | Size (Mobile) | Usage |
|-------|----------------|---------------|-------|
| `.display-xl` | 72px (4.5rem) | 32px (2rem) | Main hero headline |
| `.display-lg` | 60px (3.75rem) | 30px (1.875rem) | Secondary hero |
| `.display-md` | 48px (3rem) | 28px (1.75rem) | Section heroes |
| `.display-sm` | 36px (2.25rem) | 24px (1.5rem) | Sub-heroes |

### Heading Sizes
| Element | Size (Desktop) | Size (Mobile) | Weight |
|---------|----------------|---------------|--------|
| `h1` | 48px (3rem) | 32px (2rem) | Bold (700) |
| `h2` | 36px (2.25rem) | 28px (1.75rem) | Bold (700) |
| `h3` | 30px (1.875rem) | 24px (1.5rem) | SemiBold (600) |
| `h4` | 24px (1.5rem) | 20px (1.25rem) | SemiBold (600) |
| `h5` | 20px (1.25rem) | 20px (1.25rem) | SemiBold (600) |
| `h6` | 18px (1.125rem) | 18px (1.125rem) | Medium (500) |

### Body Sizes
| Class | Size | Usage |
|-------|------|-------|
| `.text-xl` | 20px (1.25rem) | Lead paragraphs, important text |
| `.text-lg` | 18px (1.125rem) | Subtitles, feature descriptions |
| `.text-base` | 16px (1rem) | Standard body text |
| `.text-sm` | 14px (0.875rem) | Captions, metadata |
| `.text-xs` | 12px (0.75rem) | Fine print, labels |

---

## Font Weights

| Variable | Value | Name | Usage |
|----------|-------|------|-------|
| `--font-light` | 300 | Light | Subtle text, decorative |
| `--font-regular` | 400 | Regular | Body text, paragraphs |
| `--font-medium` | 500 | Medium | Emphasized body text |
| `--font-semibold` | 600 | SemiBold | Subheadings, important UI |
| `--font-bold` | 700 | Bold | Headings, CTAs |
| `--font-extrabold` | 800 | ExtraBold | Special emphasis |
| `--font-black` | 900 | Black | Maximum impact |

---

## Line Heights

| Variable | Value | Usage |
|----------|-------|-------|
| `--leading-none` | 1 | Tight display text |
| `--leading-tight` | 1.25 | Headlines, titles |
| `--leading-snug` | 1.375 | Subheadings |
| `--leading-normal` | 1.5 | Standard body text |
| `--leading-relaxed` | 1.625 | Long-form content |
| `--leading-loose` | 2 | Extra breathing room |

---

## Letter Spacing

| Variable | Value | Usage |
|----------|-------|-------|
| `--tracking-tighter` | -0.05em | Large display text |
| `--tracking-tight` | -0.025em | Headlines |
| `--tracking-normal` | 0em | Body text |
| `--tracking-wide` | 0.025em | Small headings |
| `--tracking-wider` | 0.05em | Uppercase text |
| `--tracking-widest` | 0.1em | Labels, tags |

---

## Special Text Styles

### Eyebrow Text
```css
.eyebrow
```
- **Size:** 12px
- **Weight:** SemiBold (600)
- **Transform:** UPPERCASE
- **Spacing:** Widest (0.1em)
- **Color:** Accent Blue
- **Usage:** Section labels, category tags

### Lead Paragraph
```css
.lead
```
- **Size:** 20px
- **Weight:** Regular (400)
- **Line Height:** Relaxed (1.625)
- **Color:** Secondary text
- **Usage:** Opening paragraphs, introductions

### Subtitle
```css
.subtitle
```
- **Size:** 18px
- **Weight:** Regular (400)
- **Color:** Secondary text
- **Usage:** Below headlines, descriptions

### Tagline
```css
.tagline
```
- **Font:** Monospace
- **Size:** 14px
- **Transform:** UPPERCASE
- **Spacing:** Wider (0.05em)
- **Usage:** "ALWAYS IN MOTION", technical labels

### Gradient Text
```css
.gradient-text
```
- **Background:** Accent gradient (Blue → Cyan)
- **Effect:** Transparent text fill
- **Usage:** Special emphasis, hero CTAs

### Motion Text
```css
.motion-text
```
- **Background:** Motion gradient (matching logo)
- **Effect:** Transparent text fill
- **Usage:** Brand-specific highlights

---

## Typography Hierarchy Examples

### Hero Section
```html
<span class="eyebrow">AUTOMATION AGENCY</span>
<h1 class="display-xl">ALWAYS IN MOTION</h1>
<p class="lead">We build intelligent automation solutions...</p>
```

### Section Header
```html
<span class="eyebrow">OUR SERVICES</span>
<h2 class="h2">What We Do</h2>
<p class="subtitle">Professional automation for modern businesses</p>
```

### Content Block
```html
<h3 class="h3">Process Automation</h3>
<p class="text-base">Transform your workflows with intelligent automation...</p>
```

### Feature Card
```html
<h4 class="h4 font-semibold">AI Integration</h4>
<p class="text-sm text-secondary">Seamlessly integrate AI into your systems</p>
```

---

## Responsive Behavior

### Breakpoints
- **Desktop (1024px+):** Full scale
- **Tablet (768px-1023px):** 80-90% scale
- **Mobile (480px-767px):** 65-75% scale
- **Small Mobile (<480px):** 50-60% scale

### Automatic Adjustments
- Display and heading sizes automatically scale down on smaller screens
- Line heights slightly increase on mobile for better readability
- Letter spacing adjusts to maintain visual balance

---

## Accessibility

### Minimum Font Sizes
- Body text: Never below 16px on desktop, 14px on mobile
- Interactive elements (buttons, links): Minimum 14px
- Labels and metadata: Minimum 12px

### Contrast Requirements
- Primary text on dark background: White `#FFFFFF` (21:1 contrast) ✓
- Secondary text on dark: Grey 300 `#BDBDBD` (11.5:1 contrast) ✓
- All combinations meet WCAG AA standards

### Focus States
- All interactive text elements have visible focus indicators
- 2px outline with 2px offset for keyboard navigation

---

## Implementation Guidelines

### HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="typography.css">
</head>
```

### Font Loading
Fonts are loaded via Google Fonts with `display=swap` for optimal performance.

### Best Practices
1. **Consistency:** Use the defined classes consistently throughout
2. **Hierarchy:** Maintain clear visual hierarchy with size and weight
3. **Readability:** Keep line length between 50-75 characters
4. **Contrast:** Ensure sufficient contrast for all text
5. **Responsive:** Test on multiple screen sizes
6. **Performance:** Limit font weights to only those used

---

## Font Pairing Rationale

**Inter + Space Grotesk** creates a modern, professional aesthetic:
- **Inter:** Neutral, highly functional, excellent for UI and body text
- **Space Grotesk:** Distinctive, geometric, perfect for creating visual impact in headlines
- **Contrast:** Sufficient difference to create hierarchy while maintaining cohesion
- **Tech-Forward:** Both fonts convey innovation and modernity, perfect for an automation agency

---

## Usage Examples by Section

### Navigation
- Logo: Space Grotesk Bold, 20px
- Menu items: Inter Medium, 16px
- CTA Button: Inter SemiBold, 14px, UPPERCASE

### Hero Section
- Main headline: Space Grotesk Bold, 72px
- Tagline: Monospace Medium, 14px, UPPERCASE
- Description: Inter Regular, 20px
- CTA: Inter SemiBold, 16px

### Portfolio
- Section title: Space Grotesk Bold, 48px
- Project title: Space Grotesk SemiBold, 30px
- Description: Inter Regular, 16px
- Tags: Inter Medium, 12px, UPPERCASE

### Footer
- Headings: Inter SemiBold, 18px
- Links: Inter Regular, 14px
- Copyright: Inter Regular, 12px

---

**File References:**
- CSS Implementation: [typography.css](typography.css)
- Color System: [colors.css](colors.css)
- Color Documentation: [color-palette.md](color-palette.md)
