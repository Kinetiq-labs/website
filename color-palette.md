# Kinetiq Color Palette
**Professional Automation Agency - "ALWAYS IN MOTION"**

---

## Primary Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Black | `#000000` | Primary background, text on light |
| White | `#FFFFFF` | Primary text on dark, light backgrounds |

---

## Grey Scale (Motion Gradient)
*Inspired by the circular motion in your logo*

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Grey 900 | `#1A1A1A` | `26, 26, 26` | Almost black, secondary bg |
| Grey 800 | `#2D2D2D` | `45, 45, 45` | Dark containers |
| Grey 700 | `#404040` | `64, 64, 64` | Borders, dividers |
| Grey 600 | `#5C5C5C` | `92, 92, 92` | Muted elements |
| Grey 500 | `#808080` | `128, 128, 128` | Medium grey, tertiary text |
| Grey 400 | `#9E9E9E` | `158, 158, 158` | Subtle text |
| Grey 300 | `#BDBDBD` | `189, 189, 189` | Secondary text on dark |
| Grey 200 | `#D4D4D4` | `212, 212, 212` | Light borders |
| Grey 100 | `#E8E8E8` | `232, 232, 232` | Very light backgrounds |
| Grey 50 | `#F5F5F5` | `245, 245, 245` | Off-white, subtle bg |

---

## Accent Colors
*For CTAs, highlights, and interactive elements*

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Primary Blue | `#3B82F6` | `59, 130, 246` | Primary CTA, links, highlights |
| Cyan | `#06B6D4` | `6, 182, 212` | Secondary accent, tech feel |
| Success Green | `#10B981` | `16, 185, 129` | Success states, confirmations |
| Warning Amber | `#F59E0B` | `245, 158, 11` | Warnings, attention |

---

## Color Combinations

### Dark Mode (Primary)
- **Background:** Black `#000000` or Grey 900 `#1A1A1A`
- **Text:** White `#FFFFFF` or Grey 300 `#BDBDBD`
- **Accents:** Primary Blue `#3B82F6`
- **Borders:** Grey 800 `#2D2D2D`

### Light Mode (Alternative)
- **Background:** White `#FFFFFF` or Grey 50 `#F5F5F5`
- **Text:** Grey 900 `#1A1A1A` or Grey 700 `#404040`
- **Accents:** Primary Blue `#3B82F6`
- **Borders:** Grey 100 `#E8E8E8`

### Hero Section
- **Background:** Black `#000000` with gradient overlay
- **Text:** White `#FFFFFF`
- **CTA Button:** Primary Blue `#3B82F6` → Cyan `#06B6D4` gradient
- **Motion Effect:** Grey scale gradient matching logo circles

---

## Gradients

### Motion Gradient (Logo-inspired)
```css
linear-gradient(135deg,
  #2D2D2D 0%,
  #5C5C5C 25%,
  #9E9E9E 50%,
  #D4D4D4 75%,
  #FFFFFF 100%
)
```

### Dark Gradient
```css
linear-gradient(180deg, #000000 0%, #1A1A1A 100%)
```

### Accent Gradient
```css
linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)
```

---

## Typography Pairing

### Recommended Font Combinations
1. **Modern Tech:**
   - Headings: `Inter` or `Montserrat` (Bold/ExtraBold)
   - Body: `Inter` or `Open Sans` (Regular/Medium)

2. **Professional Clean:**
   - Headings: `Poppins` (SemiBold/Bold)
   - Body: `Roboto` (Regular/Medium)

3. **Sleek Minimal:**
   - Headings: `Space Grotesk` (Bold)
   - Body: `Space Grotesk` (Regular)

---

## Usage Guidelines

### Backgrounds
- Main sections: Black `#000000`
- Cards/Containers: Grey 900 `#1A1A1A` or Grey 800 `#2D2D2D`
- Hover states: Grey 800 `#2D2D2D` → Grey 700 `#404040`

### Text Hierarchy
- **Primary:** White `#FFFFFF` (headings, important text)
- **Secondary:** Grey 300 `#BDBDBD` (body text, descriptions)
- **Tertiary:** Grey 500 `#808080` (metadata, captions)

### Interactive Elements
- **Buttons (Primary):** Blue `#3B82F6` bg, White text
- **Buttons (Secondary):** Transparent bg, Blue border, Blue text
- **Links:** Blue `#3B82F6`, hover → Cyan `#06B6D4`
- **Focus States:** Blue `#3B82F6` outline

### Borders & Dividers
- Subtle: Grey 800 `#2D2D2D`
- Medium: Grey 700 `#404040`
- Emphasis: Blue `#3B82F6`

---

## Accessibility

### WCAG AA Compliant Combinations
- White `#FFFFFF` on Black `#000000` - Contrast: 21:1 ✓
- White `#FFFFFF` on Grey 800 `#2D2D2D` - Contrast: 14.7:1 ✓
- Grey 300 `#BDBDBD` on Black `#000000` - Contrast: 11.5:1 ✓
- Blue `#3B82F6` on Black `#000000` - Contrast: 8.6:1 ✓
- Black `#1A1A1A` on White `#FFFFFF` - Contrast: 19.2:1 ✓

---

## Visual Identity

The color theme reflects Kinetiq's brand essence:
- **Black & Grey tones:** Professional, sophisticated, tech-forward
- **Motion gradient:** Dynamic progression, continuous innovation
- **Blue accents:** Trust, technology, forward-thinking
- **High contrast:** Clear, accessible, impactful

---

**File References:**
- CSS Variables: [colors.css](colors.css)
- Logo Files: [Logo/kinetiq_black.png](Logo/kinetiq_black.png), [Logo/kinetiq_white.png](Logo/kinetiq_white.png)
