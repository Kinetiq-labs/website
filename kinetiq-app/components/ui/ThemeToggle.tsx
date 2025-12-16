'use client';

import { useState } from 'react';

interface ThemeToggleProps {
  onThemeChange: (isDark: boolean) => void;
}

export default function ThemeToggle({ onThemeChange }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(true); // Default to dark mode

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    onThemeChange(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      {isDark ? (
        // Sun icon for light mode
        <svg
          className="w-6 h-6 text-yellow-300 group-hover:text-yellow-400 transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        // Moon icon for dark mode
        <svg
          className="w-6 h-6 text-gray-700 group-hover:text-gray-900 transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </button>
  );
}
