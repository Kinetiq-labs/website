"use client";

import Link from "next/link";
import { useState } from "react";

// Calendly TypeScript declaration
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Blogs", href: "/blogs" },
  { name: "Products", href: "/products" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openCalendly = () => {
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/nex-gen-3023/meeting"
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo and Book Meeting together */}
        <div className="navbar-left">
          <Link href="/" className="navbar-logo">
            <span className="logo-kinet">kinet</span>
            <span className="logo-iq">iq</span>
          </Link>

          {/* Book Meeting Button - Desktop */}
          <button className="book-meeting-btn" onClick={openCalendly}>
            Book a Meeting
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="navbar-links">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="nav-link">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${mobileMenuOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <button
              className="mobile-book-meeting-btn"
              onClick={() => {
                openCalendly();
                setMobileMenuOpen(false);
              }}
            >
              Book a Meeting
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
