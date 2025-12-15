import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        black: '#000000',
        white: '#FFFFFF',

        // Grey Scale (Motion Gradient)
        grey: {
          50: '#F5F5F5',
          100: '#E8E8E8',
          200: '#D4D4D4',
          300: '#BDBDBD',
          400: '#9E9E9E',
          500: '#808080',
          600: '#5C5C5C',
          700: '#404040',
          800: '#2D2D2D',
          900: '#1A1A1A',
        },

        // Accent Colors
        accent: {
          primary: '#3B82F6',
          secondary: '#06B6D4',
          success: '#10B981',
          warning: '#F59E0B',
        },

        // Background Colors
        bg: {
          primary: '#000000',
          secondary: '#0A0A0A',
          tertiary: '#1A1A1A',
          light: '#FFFFFF',
          'light-secondary': '#F5F5F5',
          card: '#141414',
          'card-hover': '#1F1F1F',
        },

        // Text Colors
        text: {
          primary: '#FFFFFF',
          secondary: '#BDBDBD',
          tertiary: '#808080',
          inverse: '#000000',
          'on-light': '#1A1A1A',
        },

        // Border Colors
        border: {
          primary: '#2D2D2D',
          secondary: '#404040',
          light: '#E8E8E8',
          accent: '#3B82F6',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'var(--font-inter)', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      fontSize: {
        // Display Sizes
        'display-xl': ['4.5rem', { lineHeight: '1.25', letterSpacing: '-0.025em' }],
        'display-lg': ['3.75rem', { lineHeight: '1.25', letterSpacing: '-0.025em' }],
        'display-md': ['3rem', { lineHeight: '1.375', letterSpacing: '-0.025em' }],
        'display-sm': ['2.25rem', { lineHeight: '1.375', letterSpacing: '0em' }],
      },
      backgroundImage: {
        'gradient-motion': 'linear-gradient(135deg, #2D2D2D 0%, #5C5C5C 25%, #9E9E9E 50%, #D4D4D4 75%, #FFFFFF 100%)',
        'gradient-dark': 'linear-gradient(180deg, #000000 0%, #1A1A1A 100%)',
        'gradient-accent': 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)',
        'gradient-overlay': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.3)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.4)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.5)',
        'xl': '0 20px 25px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
};

export default config;
