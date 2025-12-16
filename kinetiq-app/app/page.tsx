'use client';

import { Suspense, useState } from 'react';
import dynamic from 'next/dynamic';
import ThemeToggle from '@/components/ui/ThemeToggle';
import AnimatedBackground from '@/components/ui/AnimatedBackground';

// Dynamically import 3D scene with no SSR
const SolarSystem = dynamic(() => import('@/components/3d/SolarSystem'), {
  ssr: false,
  loading: () => <div className="w-full h-screen" />,
});

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Animated Background with Gradient and Noise */}
      <AnimatedBackground isDark={isDarkMode} />

      {/* Theme Toggle Button */}
      <ThemeToggle onThemeChange={setIsDarkMode} />

      {/* 3D Solar System */}
      <div className="relative z-10">
        <Suspense fallback={<div className="w-full h-screen" />}>
          <SolarSystem />
        </Suspense>
      </div>

      {/* Content can go here later */}
    </main>
  );
}
