# Kinetiq Brand Theme Guide

## Brand Overview
**Kinetiq - Always in Motion**

A bold, minimal brand using pure black and white with subtle gray accents for motion effects.

---

## 🎨 Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| **Black** | `#000000` | Primary color (dark mode bg, light mode text) |
| **White** | `#FFFFFF` | Primary color (light mode bg, dark mode text) |

### Accent Grays (Logo Circles)
| Name | Hex | Usage |
|------|-----|-------|
| **Gray Light** | `#B5B5B5` | First motion circle |
| **Gray Medium** | `#888888` | Second motion circle, "iq" text |
| **Gray Dark** | `#555555` | Third motion circle |

---

## ✍️ Typography

### Font Family
- **Primary**: `Inter`, system-ui, sans-serif
- **Display**: `Space Grotesk`, sans-serif

### Type Scale
| Name | Size | Weight |
|------|------|--------|
| Hero | 72px | Bold (700) |
| H1 | 48px | Bold (700) |
| H2 | 36px | Semibold (600) |
| H3 | 24px | Medium (500) |
| Body | 16px | Regular (400) |
| Small | 14px | Regular (400) |

---

## 🌐 CSS Variables

```css
:root {
  /* Colors */
  --black: #000000;
  --white: #FFFFFF;
  --gray-light: #B5B5B5;
  --gray: #888888;
  --gray-dark: #555555;
  
  /* Typography */
  --font-primary: 'Inter', system-ui, sans-serif;
  --font-display: 'Space Grotesk', sans-serif;
}
```

---

## 📋 Usage

### Dark Mode
- Background: Black
- Text: White
- Accents: Gray shades

### Light Mode
- Background: White
- Text: Black
- Accents: Gray shades

---

## 🖼️ Logo Files
- `/public/kinetiq/` - Logo variants

**Tagline**: *Always in Motion*
