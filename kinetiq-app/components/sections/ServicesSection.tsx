'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    title: 'Process Automation',
    description: 'Streamline your workflows with intelligent automation that eliminates repetitive tasks and boosts efficiency.',
    icon: '⚡',
  },
  {
    title: 'AI Integration',
    description: 'Harness the power of artificial intelligence to make smarter decisions and unlock new possibilities.',
    icon: '🤖',
  },
  {
    title: 'Custom Development',
    description: 'Tailored software solutions built specifically for your unique business requirements and goals.',
    icon: '💻',
  },
  {
    title: 'Digital Transformation',
    description: 'Modernize your operations with cutting-edge technology and future-proof your business.',
    icon: '🚀',
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" ref={ref} className="section-padding bg-bg-primary">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="eyebrow">OUR SERVICES</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            What We Do
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Comprehensive automation solutions designed to propel your business forward
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-bg-card border border-border-primary rounded-2xl p-8 hover:bg-bg-card-hover hover:border-accent-primary transition-all duration-300 hover:scale-105"
            >
              {/* Icon */}
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="font-display font-semibold text-2xl md:text-3xl text-white mb-4">
                {service.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {service.description}
              </p>

              {/* Hover Gradient Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
