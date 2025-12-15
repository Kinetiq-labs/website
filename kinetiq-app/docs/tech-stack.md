# Kinetiq Website - Tech Stack (LOCKED)
**Professional Automation Agency Portfolio**

---

## 🔒 FINAL TECH STACK

### Core Framework
- **Next.js 14** (App Router) - React framework with SSR/SSG
- **React 18** - UI component library
- **TypeScript** - Type-safe development

### Styling
- **Tailwind CSS** - Utility-first CSS framework
  - Custom color palette (black/grey/blue theme)
  - Custom typography (Inter + Space Grotesk)
  - Responsive design utilities

### Animation Libraries

#### 2D Animations
- **Framer Motion** - Advanced React animation library
  - Page transitions
  - Scroll-triggered animations
  - UI element animations (buttons, cards, text)
  - Hover effects and micro-interactions

#### 3D Graphics & Animations
- **Three.js** - WebGL 3D rendering engine
- **React Three Fiber (R3F)** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for R3F
- **@react-three/postprocessing** (optional) - Visual effects (bloom, glow)

### Typography
- **Inter** (Google Fonts) - Primary font (body, UI)
- **Space Grotesk** (Google Fonts) - Display font (headings)
- **JetBrains Mono** - Monospace font (code, technical)

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

### Deployment
- **Vercel** - Hosting and deployment (free tier)
- **Git** - Version control

---

## 📁 Project Structure

```
website/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Homepage
│   ├── portfolio/
│   │   └── page.tsx            # Portfolio page
│   ├── services/
│   │   └── page.tsx            # Services page
│   ├── about/
│   │   └── page.tsx            # About page
│   └── contact/
│       └── page.tsx            # Contact page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   ├── 3d/
│   │   ├── HeroScene.tsx       # 3D hero background
│   │   ├── LogoAnimation.tsx   # 3D animated logo
│   │   └── PortfolioCard3D.tsx # 3D portfolio cards
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Section.tsx
│   └── animations/
│       ├── FadeIn.tsx
│       ├── SlideIn.tsx
│       └── ScrollReveal.tsx
├── public/
│   ├── Logo/
│   │   ├── kinetiq_black.png
│   │   ├── kinetiq_white.png
│   │   └── kinetiq_white.gif
│   └── images/
├── styles/
│   ├── globals.css             # Global styles + Tailwind
│   └── animations.css          # Custom animations
├── lib/
│   └── utils.ts                # Utility functions
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── next.config.js              # Next.js configuration
└── package.json                # Dependencies
```

---

## 🎨 Key Features

### 1. 3D Hero Section
- Three.js animated background
- Floating spheres matching logo gradient
- Mouse-interactive elements
- Smooth transitions
- "ALWAYS IN MOTION" tagline with 3D effects

### 2. Responsive Design
- Mobile-first approach
- Simplified 3D on mobile devices
- Touch-optimized interactions
- Performance-optimized for all devices

### 3. Smooth Animations
- Framer Motion page transitions
- Scroll-triggered reveals
- Hover effects on portfolio items
- Micro-interactions throughout

### 4. Portfolio Showcase
- 3D card presentations
- Interactive project previews
- Smooth navigation
- Filter/category system

### 5. Performance Optimized
- Code splitting
- Lazy loading for 3D scenes
- Image optimization (Next.js)
- Fast page loads

---

## 📦 Dependencies

### Production Dependencies
```json
{
  "next": "^14.0.0",
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "framer-motion": "^11.0.0",
  "three": "^0.160.0",
  "@react-three/fiber": "^8.15.0",
  "@react-three/drei": "^9.95.0",
  "tailwindcss": "^3.4.0"
}
```

### Development Dependencies
```json
{
  "typescript": "^5.3.0",
  "@types/react": "^18.0.0",
  "@types/node": "^20.0.0",
  "@types/three": "^0.160.0",
  "eslint": "^8.0.0",
  "eslint-config-next": "^14.0.0",
  "prettier": "^3.0.0",
  "autoprefixer": "^10.4.0",
  "postcss": "^8.4.0"
}
```

---

## 🎯 3D Implementation Strategy

### Priority 3D Sections (Week 1)
1. ✅ **Hero Section** - Main 3D animated background
2. ✅ **Portfolio Cards** - 3D interactive showcase
3. ⚠️ **About Section** - Subtle 3D elements (if time permits)

### Framer Motion Sections
- All page transitions
- Text reveals
- Button animations
- Card hover effects
- Mobile animations (lighter than 3D)

### Performance Guidelines
- 3D scenes lazy-loaded
- WebGL fallbacks for unsupported devices
- Reduced complexity on mobile
- Total 3D bundle < 500KB

---

## 🚀 Development Phases

### Phase 1: Setup (Day 1)
- Initialize Next.js project
- Install all dependencies
- Configure Tailwind with custom theme
- Set up TypeScript
- Configure fonts (Inter, Space Grotesk)
- Project structure setup

### Phase 2: Core Layout (Day 1-2)
- Navbar component
- Footer component
- Page routing
- Basic responsive layout

### Phase 3: 3D Hero (Day 2-3)
- Three.js scene setup
- Animated logo spheres
- Interactive background
- Performance optimization

### Phase 4: Content Pages (Day 3-4)
- Homepage content
- Services section
- About page
- Contact form

### Phase 5: Portfolio (Day 4-5)
- 3D portfolio cards
- Project details
- Filtering system
- Smooth navigation

### Phase 6: Animations (Day 5-6)
- Framer Motion integration
- Scroll animations
- Page transitions
- Micro-interactions

### Phase 7: Polish (Day 6-7)
- Mobile optimization
- Performance testing
- Cross-browser testing
- SEO optimization
- Final deployment

---

## 🎨 Design Philosophy

**"ALWAYS IN MOTION"**
- Constant but smooth animations
- 3D elements that respond to user interaction
- Dark theme with light accents
- Professional and modern
- Tech-forward aesthetic
- Clean and minimalist

---

## ✅ Success Criteria

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Fast load times (< 3 seconds)
- ✅ Smooth 60fps animations
- ✅ Accessible (WCAG AA)
- ✅ SEO optimized
- ✅ Cross-browser compatible
- ✅ Professional design quality
- ✅ 3D hero section working
- ✅ Portfolio showcase complete
- ✅ Contact form functional

---

## 📝 Notes

- TypeScript for type safety and better development experience
- Component-based architecture for reusability
- Custom Tailwind configuration for brand consistency
- Performance monitoring throughout development
- Mobile-first approach with progressive enhancement
- 3D used strategically (not on every section)

---

**Status:** 🔒 LOCKED AND READY TO BUILD
**Timeline:** 7 Days
**Deployment:** Vercel (Free)
**Start Date:** Ready to begin immediately

---

**Next Steps:**
1. Initialize Next.js project
2. Install dependencies
3. Configure Tailwind + Fonts
4. Set up project structure
5. Start building components
