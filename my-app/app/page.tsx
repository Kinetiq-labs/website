"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import SplitText from "./components/SplitText";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";



gsap.registerPlugin(ScrollTrigger, useGSAP);


const domains = [
  {
    title: "Agentic AI",
    description:
      "Autonomous AI agents that execute complex tasks, make decisions, and adapt to achieve your business goals independently.",
  },
  {
    title: "Generative AI",
    description:
      "Create compelling content, designs, and solutions powered by cutting-edge generative models tailored for your needs.",
  },
  {
    title: "Modern Software Solutions",
    description:
      "Scalable, cloud-native applications built with the latest technologies to drive your digital transformation forward.",
  },
  {
    title: "Web Design",
    description:
      "Stunning, responsive websites that captivate users and deliver exceptional experiences across all devices.",
  },
  {
    title: "Autonomous Intelligence",
    description:
      "Self-learning systems that continuously optimize operations and unlock new possibilities for your enterprise.",
  },
];

const reviews = [
  {
    text: "Working with KINETIQ was a smooth and reassuring experience. They clearly understood our vision for an online Quran academy and translated it into a clean, easy-to-use website for students and teachers. The platform runs reliably, and the team was responsive throughout the development process. We're happy with the outcome and appreciate their attention to detail and commitment to quality.",
    name: "Hammad Sarwar",
    project: "Learn Quran Global",
    email: "virk75507@gmail.com"
  },
  {
    text: "KINETIQ developed a custom desktop application for our jewelry business to manage khata records efficiently. The system simplified our daily operations and reduced manual errors. They listened carefully to our requirements and delivered a solution that fits our workflow. The software is practical, stable, and has made record-keeping much easier for our team.",
    name: "Qaisar Abbas",
    project: "Records",
    email: "qaisar7414@gmail.com"
  }
];

export default function Home() {
  const [hoveredDomain, setHoveredDomain] = useState<number | null>(null);
  const [showUnderline1, setShowUnderline1] = useState(false);
  const [showUnderline2, setShowUnderline2] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowUnderline1(true), 1200);
    const timer2 = setTimeout(() => setShowUnderline2(true), 2000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);


  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".stackalicious-card");
      const navbar = document.querySelector(".navbar") as HTMLElement | null;

      // Calculate total scroll distance based on number of stops
      // More height = slower scroll / longer pauses
      const totalScrollHeight = window.innerHeight * (cards.length + 1);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${totalScrollHeight}`,
          scrub: 1, // Smooth scrubbing
          pin: true,
          snap: {
            snapTo: "labels", // Snap to labels defined in timeline
            duration: { min: 0.2, max: 0.8 }, // Snap duration
            delay: 0.2, // Wait a bit before snapping
            ease: "power2.inOut"
          }
        }
      });

      // Add 'START' label
      tl.addLabel("START");

      // Track stack offset - reset after each major section
      let stackOffset = 0;

      // Animate each card
      cards.forEach((card, i) => {
        const isAbout = card.classList.contains("about-section");
        const isProjects = card.classList.contains("projects-section");
        const isBlogs = card.classList.contains("blogs-section");
        const isProducts = card.classList.contains("products-section");
        const isReviews = card.classList.contains("reviews-section");

        // Major sections cover the screen (0px), dummy cards stack with offset
        let targetY: string;
        if (isAbout || isProjects || isBlogs || isProducts || isReviews) {
          targetY = "0px";
          stackOffset = 0; // Reset for next batch of dummy cards
        } else {
          targetY = `${stackOffset * 15}px`;
        }
        stackOffset++;

        // Add a "spacer" before animating the card if we want a "Hold" at the previous state?
        // Actually, just animating 'fromTo' takes time.
        // We add a label AFTER the animation completes, signifying "This section is now visible".

        const position = i === 0 ? undefined : "<+=0.15";

        tl.fromTo(card,
          { y: "100vh" },
          {
            y: targetY,
            ease: "power2.out",
            duration: 1
          },
          position
        );

        if (isAbout) {
          tl.addLabel("STOP_ABOUT");
          // Add a small pause in timeline to allow "resting"?
          // Snapping to label is enough. But adding empty duration makes the "snap zone" larger.
          tl.to({}, { duration: 0.5 });

          // Navbar Animation syncs with this
          if (navbar) {
            tl.to(navbar, {
              "--nav-bg": "#000000",
              "--nav-text": "#ffffff",
              "--nav-logo-kinet": "#ffffff",
              duration: 0.1
            }, "<");
          }
        }

        if (isProjects) {
          tl.addLabel("STOP_PROJECTS");
          tl.to({}, { duration: 0.5 });
        }

        // Check for blogs section (isBlogs already declared at top of forEach)
        if (isBlogs) {
          tl.addLabel("STOP_BLOGS");
          tl.to({}, { duration: 0.5 });
        }

        // Check for products section
        if (isProducts) {
          tl.addLabel("STOP_PRODUCTS");
          tl.to({}, { duration: 0.5 });
        }

        // Check for reviews section
        if (isReviews) {
          tl.addLabel("STOP_REVIEWS");
          tl.to({}, { duration: 0.5 });
        }
      });

    },
    { scope: containerRef }
  );






  return (
    <>
      <main className="home-page" ref={containerRef}>
        {/* Hero Section - Base */}
        <section className="hero-split section-panel" ref={heroRef}>
          {/* Top Logo */}
          <div className="top-logo">
            <Image
              src="/Kinetiq - 1 (1).png"
              alt="Kinetiq Logo"
              width={45}
              height={15}
              priority
            />
          </div>

          {/* Left Half */}
          <div className="hero-half hero-light">
            <div className="hero-headline">
              <div className="hero-statement">
                <SplitText text="Building" tag="span" className="hero-line" />
                <div className={`hero-link ${showUnderline1 ? "show-underline" : ""}`}>
                  <SplitText
                    text="Intelligent Systems"
                    tag="span"
                    className="hero-line hero-link-text"
                  />
                  <span className="arrow-icon">↗</span>
                </div>
              </div>

              <div className="hero-statement">
                <SplitText text="That Drive" tag="span" className="hero-line" />
                <div className={`hero-link ${showUnderline2 ? "show-underline" : ""}`}>
                  <SplitText
                    text="Businesses Forward"
                    tag="span"
                    className="hero-line hero-link-text"
                  />
                  <span className="arrow-icon">↗</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Half */}
          <div className="hero-half hero-dark">
            <div className="domains-container">
              {domains.map((domain, i) => (
                <div
                  key={domain.title}
                  className={`domain-card ${hoveredDomain === i ? "expanded" : ""}`}
                  onMouseEnter={() => setHoveredDomain(i)}
                  onMouseLeave={() => setHoveredDomain(null)}
                >
                  <h3 className="domain-title">{domain.title}</h3>
                  <div className="domain-content">
                    <p className="domain-desc">{domain.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stacked Cards */}
        <div
          className="cards-stack-wrapper"
          ref={cardsRef}
          style={{ pointerEvents: "none" }}
        >
          {/* Dummy Cards */}
          <div className="stackalicious-card card-gray-light"></div>
          <div className="stackalicious-card card-gray-medium"></div>
          <div className="stackalicious-card card-gray-dark"></div>

          {/* About */}
          <section className="stackalicious-card about-section">
            <div className="about-split-container">
              <div className="about-left">
                <h2 className="about-heading">About Kinetiq</h2>
              </div>
              <div className="about-divider"></div>
              <div className="about-right">
                <p className="about-text">
                  At KINETIQ, we build intelligent systems that create real impact.
                  Sitting at the intersection of agentic AI, automation, and modern
                  engineering, our innovation is guided by practical problem-solving.
                </p>
                <p className="about-text">
                  We design scalable, purpose-built solutions that integrate seamlessly
                  into workflows. By combining thoughtful engineering with continuous
                  experimentation, we deliver reliable technology that helps
                  organizations operate smarter and stay ready for what’s next.
                </p>
              </div>
            </div>
          </section>

          {/* Intermediate Dummies */}
          <div className="stackalicious-card card-inter-1"></div>
          <div className="stackalicious-card card-inter-2"></div>
          <div className="stackalicious-card card-inter-3"></div>

          {/* Recent Projects */}
          <section className="stackalicious-card projects-section">
            <div className="projects-split-container">
              <div className="projects-left">
                <h2 className="projects-heading">Recent Projects</h2>

                <Link href="/projects" className="view-more-btn">
                  View More
                </Link>
              </div>

              <div className="projects-divider"></div>

              <div className="projects-right">
                <div className="projects-grid">
                  <Link href="/projects/learn-quran-global" className="project-row-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="project-row">
                      <h3 className="project-title">01 Learn Quran Global</h3>
                    </div>
                  </Link>

                  <Link href="/projects/records" className="project-row-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="project-row">
                      <h3 className="project-title">02 Records</h3>
                    </div>
                  </Link>

                  <Link href="/projects/construction-management-system" className="project-row-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="project-row">
                      <h3 className="project-title">03 Construction Site Management</h3>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Intermediate Dummies (Projects to Blogs) */}
          <div className="stackalicious-card card-blogs-1"></div>
          <div className="stackalicious-card card-blogs-2"></div>
          <div className="stackalicious-card card-blogs-3"></div>

          {/* Tech Blogs */}
          <section className="stackalicious-card blogs-section">
            <div className="blogs-split-container">
              <div className="blogs-left">
                <h2 className="blogs-heading">Tech Blogs</h2>

                <Link href="/blogs" className="blogs-view-more-btn">
                  View More
                </Link>
              </div>

              <div className="blogs-divider"></div>

              <div className="blogs-right">
                <div className="blogs-grid">
                  <Link href="/blogs/building-scalable-software-in-the-age-of-ai" className="blog-row-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="blog-row">
                      <h3 className="blog-title">Building Scalable Software in the Age of AI: Lessons from Modern Web Development</h3>
                    </div>
                  </Link>

                  <Link href="/blogs/generative-ai-in-real-world-products" className="blog-row-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="blog-row">
                      <h3 className="blog-title">Generative AI in Real-World Products: Moving Beyond Chatbots</h3>
                    </div>
                  </Link>

                  <Link href="/blogs/from-automation-to-autonomy" className="blog-row-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="blog-row">
                      <h3 className="blog-title">From Automation to Autonomy: How Agentic AI Is Changing the Way Businesses Operate</h3>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Intermediate Dummies (Blogs to Products) */}
          <div className="stackalicious-card card-products-1"></div>
          <div className="stackalicious-card card-products-2"></div>
          <div className="stackalicious-card card-products-3"></div>

          {/* Products */}
          <section className="stackalicious-card products-section">
            <div className="products-split-container">
              <div className="products-left">
                <h2 className="products-heading">Products</h2>

                <Link href="/products" className="products-view-more-btn">
                  View More
                </Link>
              </div>

              <div className="products-divider"></div>

              <div className="products-right">
                <div className="products-grid">
                  <div className="product-row">
                    <h3 className="product-name">01 Synapse</h3>
                  </div>

                  <div className="product-row">
                    <h3 className="product-name">02 Khedma AI</h3>
                  </div>

                  <div className="product-row">
                    <h3 className="product-name">03 Agentic Web Navigator</h3>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Intermediate Dummies (Products to Reviews) */}
          <div className="stackalicious-card card-reviews-1"></div>
          <div className="stackalicious-card card-reviews-2"></div>
          <div className="stackalicious-card card-reviews-3"></div>

          {/* Reviews */}
          <section className="stackalicious-card reviews-section">
            <h2 className="reviews-heading">What Our Clients Say</h2>

            <div className="reviews-slider-container">
              <div
                className="reviews-slider"
                style={{ transform: `translateX(-${currentReview * 100}%)` }}
              >
                {reviews.map((review, i) => (
                  <div key={i} className="review-card">
                    <p className="review-text">&ldquo;{review.text}&rdquo;</p>
                    <div className="review-client">
                      <p className="review-client-name">{review.name}</p>
                      <p className="review-client-project">{review.project}</p>
                      <p className="review-client-email">{review.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reviews-nav">
              <button
                className="review-nav-btn"
                onClick={() => setCurrentReview(prev => prev === 0 ? reviews.length - 1 : prev - 1)}
              >
                ←
              </button>
              <button
                className="review-nav-btn"
                onClick={() => setCurrentReview(prev => prev === reviews.length - 1 ? 0 : prev + 1)}
              >
                →
              </button>
            </div>

            <div className="reviews-dots">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  className={`review-dot ${currentReview === i ? 'active' : ''}`}
                  onClick={() => setCurrentReview(i)}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
