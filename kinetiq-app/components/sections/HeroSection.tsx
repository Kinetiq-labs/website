'use client';

import { Suspense } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamically import 3D scene with no SSR
const HeroScene = dynamic(() => import('@/components/3d/HeroScene'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-dark" />,
});

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* 3D Background */}
      <Suspense fallback={<div className="absolute inset-0 bg-gradient-dark" />}>
        <HeroScene />
      </Suspense>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-overlay pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Eyebrow */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="eyebrow"
            >
              PROFESSIONAL AUTOMATION AGENCY
            </motion.span>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-display font-bold text-5xl md:text-6xl lg:text-7xl xl:text-display-lg text-white mb-6 leading-tight"
            >
              ALWAYS IN{' '}
              <span className="text-gradient-accent">MOTION</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              We build intelligent automation solutions that transform your business operations and drive continuous innovation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="#portfolio"
                className="px-8 py-4 bg-gradient-accent text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 min-w-[200px]"
              >
                View Our Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 min-w-[200px]"
              >
                Get Started
              </a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
              <div className="flex flex-col items-center gap-2 animate-float">
                <span className="text-xs text-text-tertiary uppercase tracking-widest">
                  Scroll
                </span>
                <div className="w-6 h-10 border-2 border-text-tertiary rounded-full flex items-start justify-center p-2">
                  <div className="w-1 h-2 bg-text-tertiary rounded-full animate-bounce" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
