# Kinetiq Website

**Professional Automation Agency Portfolio**

> "ALWAYS IN MOTION"

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Custom Theme)
- **2D Animations:** Framer Motion
- **3D Graphics:** Three.js + React Three Fiber + @react-three/drei
- **Fonts:** Inter (Body) + Space Grotesk (Display)
- **Deployment:** Vercel

## Features

✅ **3D Hero Section** - Interactive animated spheres matching the Kinetiq logo gradient
✅ **Responsive Design** - Mobile-first approach, optimized for all devices
✅ **Smooth Animations** - Framer Motion transitions and scroll effects
✅ **Professional UI** - Custom color palette and typography system
✅ **Portfolio Showcase** - Interactive project cards with hover effects
✅ **SEO Optimized** - Meta tags, semantic HTML, performance optimized

## Project Structure

```
kinetiq-app/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Navigation with mobile menu
│   │   └── Footer.tsx      # Footer with links
│   ├── sections/
│   │   ├── HeroSection.tsx      # 3D hero with CTA
│   │   ├── ServicesSection.tsx  # Services grid
│   │   ├── PortfolioSection.tsx # Portfolio showcase
│   │   └── CTASection.tsx       # Contact section
│   └── 3d/
│       └── HeroScene.tsx   # Three.js 3D animation
├── public/
│   ├── logo-white.png      # Logo for dark backgrounds
│   └── logo-black.png      # Logo for light backgrounds
└── styles/                 # Additional styles

```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Custom Theme

The website uses a custom Tailwind configuration with:

### Colors
- **Black/White/Grey scale** (10 shades)
- **Accent colors** (Blue, Cyan, Green, Amber)
- **Semantic colors** (Background, Text, Border)

### Typography
- **Display:** Space Grotesk (Headlines, Hero)
- **Body:** Inter (UI, Content)
- **Monospace:** JetBrains Mono (Code, Tags)

### Animations
- **3D:** Three.js spheres with gradient colors
- **2D:** Framer Motion page/scroll animations
- **CSS:** Custom keyframe animations

## Performance

- **Code Splitting:** Automatic via Next.js
- **3D Lazy Loading:** Dynamic imports with no SSR
- **Image Optimization:** Next.js Image component
- **Font Loading:** Google Fonts with display=swap

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel
3. Auto-deploy on push

```bash
vercel
```

### Other Platforms

Build static export:
```bash
npm run build
```

Deploy the `.next` folder to your hosting provider.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

**Note:** 3D features require WebGL support. Fallbacks provided for unsupported browsers.

## Development Notes

### Adding New Pages

Create new page in `app/` directory:
```tsx
// app/about/page.tsx
export default function About() {
  return <div>About Page</div>
}
```

### Adding New Components

Create components in `components/` directory:
```tsx
// components/ui/Button.tsx
export default function Button({ children }) {
  return <button className="...">{children}</button>
}
```

### Modifying 3D Scene

Edit `components/3d/HeroScene.tsx`:
- Adjust sphere positions
- Change colors
- Modify animation speeds
- Add new 3D elements

### Customizing Colors

Edit `tailwind.config.ts`:
```ts
colors: {
  accent: {
    primary: '#YOUR_COLOR',
  }
}
```

## Troubleshooting

### 3D Scene Not Rendering
- Check WebGL support in browser
- Clear cache and rebuild
- Check console for Three.js errors

### Build Errors
- Run `npm install` to ensure dependencies are installed
- Clear `.next` folder: `rm -rf .next`
- Rebuild: `npm run build`

### Performance Issues
- Reduce 3D complexity on mobile
- Optimize images
- Check Network tab for large assets

## License

© 2025 Kinetiq. All rights reserved.

## Contact

- Email: contact@kinetiq.com
- Website: [kinetiq.com](https://kinetiq.com)

---

**Built with ❤️ by the Kinetiq team**
