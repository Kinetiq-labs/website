'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: 'Enterprise Workflow Automation',
    category: 'Process Automation',
    description: 'Automated complex approval processes reducing processing time by 85%.',
    tags: ['Python', 'RPA', 'Azure'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'AI-Powered Analytics Dashboard',
    category: 'AI Integration',
    description: 'Real-time business intelligence platform with predictive analytics capabilities.',
    tags: ['React', 'TensorFlow', 'AWS'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Supply Chain Optimization',
    category: 'Custom Development',
    description: 'End-to-end inventory management system with ML-based demand forecasting.',
    tags: ['Node.js', 'MongoDB', 'ML'],
    color: 'from-green-500 to-teal-500',
  },
  {
    title: 'Customer Service Chatbot',
    category: 'AI Integration',
    description: 'Intelligent chatbot handling 10k+ customer queries daily with 95% accuracy.',
    tags: ['NLP', 'GPT', 'FastAPI'],
    color: 'from-orange-500 to-red-500',
  },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="portfolio" ref={ref} className="section-padding bg-bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="eyebrow">OUR WORK</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Portfolio
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Transforming businesses through innovative automation solutions
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-bg-card border border-border-primary rounded-2xl overflow-hidden hover:border-accent-primary transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              {/* Gradient Header */}
              <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-300">
                    📊
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent-primary mb-2 block">
                  {project.category}
                </span>
                <h3 className="font-display font-semibold text-2xl text-white mb-3 group-hover:text-gradient-accent transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-bg-tertiary border border-border-primary text-text-secondary text-sm rounded-full group-hover:border-accent-primary group-hover:text-accent-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-transparent border-2 border-accent-primary text-accent-primary font-semibold rounded-full hover:bg-accent-primary hover:text-white transition-all duration-300"
          >
            See More Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
