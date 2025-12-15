'use client';

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Contact', href: '#contact' },
    ],
    services: [
      { name: 'Process Automation', href: '#services' },
      { name: 'AI Integration', href: '#services' },
      { name: 'Custom Development', href: '#services' },
      { name: 'Consulting', href: '#services' },
    ],
    social: [
      { name: 'LinkedIn', href: '#' },
      { name: 'Twitter', href: '#' },
      { name: 'GitHub', href: '#' },
      { name: 'Email', href: 'mailto:contact@kinetiq.com' },
    ],
  };

  return (
    <footer className="bg-bg-secondary border-t border-border-primary">
      <div className="container-custom py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo-white.png"
                  alt="Kinetiq Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-display font-bold text-xl text-white">
                kinetiq
              </span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed">
              Professional automation solutions for modern businesses. Always in motion.
            </p>
            <p className="text-xs font-mono uppercase tracking-wider text-accent-primary">
              ALWAYS IN MOTION
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-accent-primary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-accent-primary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">Connect</h3>
            <ul className="space-y-2">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-accent-primary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border-primary">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-text-tertiary text-sm">
              © {currentYear} Kinetiq. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                href="#"
                className="text-text-tertiary hover:text-text-primary text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-text-tertiary hover:text-text-primary text-sm transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
