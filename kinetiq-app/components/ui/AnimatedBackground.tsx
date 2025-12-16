'use client';

import { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  isDark: boolean;
}

export default function AnimatedBackground({ isDark }: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      time += 0.001;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient based on theme
      if (isDark) {
        // Dark mode: Grey to black gradient
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);

        gradient.addColorStop(0, '#5B8680');    // Grey-teal
        gradient.addColorStop(0.2, '#6F6B66');  // Medium grey
        gradient.addColorStop(0.4, '#53504D');  // Darker grey
        gradient.addColorStop(0.6, '#383633');  // Dark grey
        gradient.addColorStop(0.8, '#1C1B1A');  // Very dark grey
        gradient.addColorStop(1, '#000000');    // Pure black

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      } else {
        // Light mode: Subtle gradient
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);

        gradient.addColorStop(0, 'rgba(220, 220, 225, 1)');
        gradient.addColorStop(0.5, 'rgba(211, 211, 211, 1)');
        gradient.addColorStop(1, 'rgba(200, 200, 210, 1)');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
