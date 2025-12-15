'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" ref={ref} className="section-padding bg-bg-primary relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-transparent to-accent-secondary/10 pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="eyebrow"
          >
            GET STARTED
          </motion.span>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-text-secondary mb-10 leading-relaxed"
          >
            Let's discuss how our automation solutions can help you achieve your goals.
            Get in touch with our team today for a free consultation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="mailto:contact@kinetiq.com"
              className="px-8 py-4 bg-gradient-accent text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 min-w-[200px]"
            >
              Contact Us
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 min-w-[200px]"
            >
              Learn More
            </a>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 pt-12 border-t border-border-primary"
          >
            <p className="text-text-tertiary text-sm mb-4">
              Or reach us directly at
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-text-secondary">
              <a
                href="mailto:contact@kinetiq.com"
                className="hover:text-accent-primary transition-colors duration-200 flex items-center gap-2"
              >
                <span>📧</span>
                <span>contact@kinetiq.com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="hover:text-accent-primary transition-colors duration-200 flex items-center gap-2"
              >
                <span>📞</span>
                <span>+1 (234) 567-890</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
