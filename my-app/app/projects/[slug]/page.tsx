"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, use, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LogoLoop from "@/app/components/LogoLoop";

gsap.registerPlugin(ScrollTrigger);

interface TechLogo {
    src: string;
    alt: string;
    title?: string;
}

interface ProjectData {
    slug: string;
    title: string;
    tagline: string;
    description: string[];
    features: string[];
    timeline: {
        duration: string;
        months: string[];
    };
    screenshots: string[];
    techStack: TechLogo[];
}

const projectsData: ProjectData[] = [
    {
        slug: "learn-quran-global",
        title: "Learn Quran Global",
        tagline: "Online Quran Academy Platform",
        description: [
            "Learn Quran Global is a comprehensive online platform designed to connect students with qualified Quran teachers from around the world. The platform provides a seamless learning experience with features tailored for both students and instructors.",
            "The system includes student registration, teacher profiles, class scheduling, progress tracking, and secure payment integration. The interface is designed to be intuitive and accessible, ensuring users of all ages can navigate the platform with ease.",
            "Built with modern web technologies, the platform emphasizes reliability, speed, and a clean user experience. Special attention was given to creating a respectful and focused learning environment for Quran education."
        ],
        timeline: {
            duration: "2 Months",
            months: ["November 2025", "December 2025"]
        },
        screenshots: [
            "/lqg/lqfg-1.png",
            "/lqg/lqg-2.png",
            "/lqg/lqg-3.png"
        ],
        techStack: [
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", alt: "Next.js", title: "Next.js" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React", title: "React" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript", title: "TypeScript" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", alt: "Tailwind CSS", title: "Tailwind CSS" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg", alt: "Supabase", title: "Supabase" }
        ],
        features: [
            "Student registration and profile management",
            "Qualified teacher profiles and scheduling",
            "Real-time class booking system",
            "Progress tracking and performance analytics",
            "Secure payment integration",
            "Intuitive interface for all ages"
        ]
    },
    {
        slug: "records",
        title: "Records",
        tagline: "Desktop Application for Jewelry Business",
        description: [
            "Records is a custom-built desktop application designed specifically for jewelry businesses to manage their khata (credit/debit) records efficiently. The application streamlines daily operations by providing an intuitive interface for tracking customer transactions.",
            "Key features include customer profile management, transaction history tracking, balance calculations, and detailed reporting. The system supports both credit and debit entries with automatic balance updates, making it easy to maintain accurate financial records.",
            "Built as a robust desktop solution, Records emphasizes data reliability and ease of use. The application was designed with input from actual jewelry business owners to ensure it meets real-world operational needs."
        ],
        timeline: {
            duration: "2 Months",
            months: ["October 2025", "November 2025"]
        },
        screenshots: [
            "/records/1.png",
            "/records/2.png",
            "/records/3.png",
            "/records/4.png"
        ],
        techStack: [
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg", alt: "Electron", title: "Electron" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React", title: "React" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript", title: "JavaScript" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg", alt: "SQLite", title: "SQLite" }
        ],
        features: [
            "Customer profile management",
            "Credit and debit transaction tracking",
            "Automatic balance calculations",
            "Detailed financial reporting",
            "Transaction history and search",
            "Data backup and recovery"
        ]
    },
    {
        slug: "construction-management-system",
        title: "Construction Management System",
        tagline: "Time Lapse Scope & Feature for Construction Site Review",
        description: [
            "The Construction Management System is an innovative solution designed to monitor and document construction site progress through automated time-lapse photography and computer vision technology. The system provides stakeholders with visual progress reports and intelligent analysis of construction activities.",
            "Key features include automated camera scheduling, time-lapse video generation, progress tracking dashboards, and AI-powered anomaly detection. The platform enables project managers to review site conditions remotely, identify potential issues early, and maintain comprehensive visual documentation throughout the project lifecycle.",
            "Built with a modern tech stack combining computer vision capabilities with web technologies, the system delivers real-time insights and historical analysis to streamline construction project oversight and improve decision-making."
        ],
        timeline: {
            duration: "Ongoing",
            months: ["October 2025", "Present"]
        },
        screenshots: [
            "/construction/WhatsApp Image 2025-10-09 at 7.36.09 PM.jpeg",
            "/construction/WhatsApp Image 2025-10-09 at 7.36.48 PM.jpeg",
            "/construction/WhatsApp Image 2025-10-09 at 7.37.08 PM.jpeg",
            "/construction/WhatsApp Image 2025-10-09 at 7.37.33 PM.jpeg",
            "/construction/WhatsApp Image 2025-10-09 at 7.37.53 PM.jpeg",
            "/construction/WhatsApp Image 2025-10-09 at 7.38.10 PM.jpeg",
            "/construction/WhatsApp Image 2025-10-09 at 7.38.36 PM.jpeg"
        ],
        techStack: [
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python", title: "Python" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg", alt: "Computer Vision", title: "Computer Vision (OpenCV)" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React", title: "React" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", alt: "Flask", title: "Flask" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg", alt: "Supabase", title: "Supabase" }
        ],
        features: [
            "Automated time-lapse photography",
            "AI-powered anomaly detection",
            "Progress tracking dashboards",
            "Remote site condition monitoring",
            "Visual documentation archive",
            "Real-time progress reports"
        ]
    },
    {
        slug: "live-chat-assistant",
        title: "Live Chat Assistant",
        tagline: "Real-time Customer Support Solution",
        description: [
            "Live Chat Assistant is a comprehensive real-time customer support platform designed to enhance customer engagement and streamline support operations. The system enables businesses to provide instant, personalized assistance to their customers through an intuitive chat interface.",
            "Key features include real-time messaging, automated responses, conversation history, agent assignment, and analytics dashboard. The platform supports multiple concurrent conversations, allowing support teams to efficiently manage customer inquiries while maintaining high-quality service standards.",
            "Built with modern web technologies, the Live Chat Assistant integrates seamlessly with existing business workflows and provides valuable insights into customer interactions, helping businesses improve their support strategies and customer satisfaction."
        ],
        timeline: {
            duration: "Ongoing",
            months: ["December 2025", "Present"]
        },
        screenshots: [
            "/Live_Chat_Assistant/WhatsApp Image 2026-01-08 at 3.16.22 PM.jpeg",
            "/Live_Chat_Assistant/WhatsApp Image 2026-01-08 at 3.16.22 PM (1).jpeg",
            "/Live_Chat_Assistant/WhatsApp Image 2026-01-08 at 3.16.23 PM.jpeg",
            "/Live_Chat_Assistant/WhatsApp Image 2026-01-08 at 3.16.23 PM (1).jpeg",
            "/Live_Chat_Assistant/WhatsApp Image 2026-01-08 at 3.16.23 PM (2).jpeg",
            "/Live_Chat_Assistant/WhatsApp Image 2026-01-08 at 3.16.23 PM (3).jpeg"
        ],
        techStack: [
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React", title: "React" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js", title: "Node.js" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript", title: "TypeScript" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg", alt: "Socket.io", title: "Socket.io" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg", alt: "Supabase", title: "Supabase" }
        ],
        features: [
            "Real-time messaging system",
            "Automated response templates",
            "Conversation history tracking",
            "Smart agent assignment",
            "Analytics and reporting dashboard",
            "Multi-conversation management"
        ]
    }
];

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const project = projectsData.find((p) => p.slug === slug);
    const timelineRef = useRef<HTMLDivElement>(null);
    const [currentScreenshot, setCurrentScreenshot] = useState(0);

    // Auto-timer for screenshot slider
    useEffect(() => {
        if (project && project.screenshots.length > 1) {
            const timer = setInterval(() => {
                setCurrentScreenshot(prev =>
                    prev === project.screenshots.length - 1 ? 0 : prev + 1
                );
            }, 3500);
            return () => clearInterval(timer);
        }
    }, [project]);

    useEffect(() => {
        if (timelineRef.current && project) {
            const items = timelineRef.current.querySelectorAll(".timeline-item");
            const line = timelineRef.current.querySelector(".timeline-line-fill");

            gsap.fromTo(
                line,
                { scaleY: 0 },
                {
                    scaleY: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: timelineRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                }
            );

            gsap.fromTo(
                items,
                { opacity: 0, x: -30 },
                {
                    opacity: 1,
                    x: 0,
                    stagger: 0.3,
                    duration: 0.6,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: timelineRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                }
            );
        }
    }, [project]);

    if (!project) {
        return notFound();
    }

    return (
        <main className="project-detail-page">
            <div className="project-detail-container">
                <Link href="/projects" className="back-link">
                    ← Back to Projects
                </Link>

                {/* Header */}
                <h1 className="project-detail-title">{project.title}</h1>
                <p className="project-detail-tagline">{project.tagline}</p>
                <div className="project-detail-divider"></div>

                {/* Description */}
                <section className="project-description-section">
                    {project.description.map((para, index) => (
                        <p key={index} className="project-description-text">
                            {para}
                        </p>
                    ))}
                </section>

                {/* Features */}
                {project.features.length > 0 && (
                    <section className="project-features-section">
                        <h2 className="section-subheading">Key Features</h2>
                        <div className="features-grid">
                            {project.features.map((feature, index) => (
                                <div key={index} className="feature-card">
                                    <span className="feature-number">{String(index + 1).padStart(2, '0')}</span>
                                    <p className="feature-text">{feature}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Timeline */}
                <section className="project-timeline-section">
                    <h2 className="section-subheading">Project Timeline</h2>
                    <p className="timeline-duration">Duration: {project.timeline.duration}</p>

                    <div className="timeline-container" ref={timelineRef}>
                        <div className="timeline-line">
                            <div className="timeline-line-fill"></div>
                        </div>
                        {project.timeline.months.map((month, index) => (
                            <div key={index} className="timeline-item">
                                <div className="timeline-dot"></div>
                                <span className="timeline-month">{month}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Screenshots Slider */}
                <section className="project-screenshots-section">

                    <div className="screenshots-slider-container">
                        <div
                            className="screenshots-slider"
                            style={{ transform: `translateX(-${currentScreenshot * 100}%)` }}
                        >
                            {project.screenshots.map((src, index) => (
                                <div key={index} className="screenshot-slide">
                                    <Image
                                        src={src}
                                        alt={`${project.title} screenshot ${index + 1}`}
                                        width={800}
                                        height={500}
                                        className="screenshot-image"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="screenshots-nav">
                        <button
                            className="screenshot-nav-btn"
                            onClick={() => setCurrentScreenshot(prev => prev === 0 ? project.screenshots.length - 1 : prev - 1)}
                        >
                            ←
                        </button>
                        <button
                            className="screenshot-nav-btn"
                            onClick={() => setCurrentScreenshot(prev => prev === project.screenshots.length - 1 ? 0 : prev + 1)}
                        >
                            →
                        </button>
                    </div>

                    {/* Dot Indicators */}
                    <div className="screenshots-dots">
                        {project.screenshots.map((_, i) => (
                            <button
                                key={i}
                                className={`screenshot-dot ${currentScreenshot === i ? 'active' : ''}`}
                                onClick={() => setCurrentScreenshot(i)}
                            />
                        ))}
                    </div>
                </section>

                {/* Tech Stack */}
                <section className="project-techstack-section">
                    <h2 className="section-subheading">Tech Stack</h2>
                    <div className="techstack-container">
                        <LogoLoop
                            logos={project.techStack}
                            speed={60}
                            logoHeight={40}
                            gap={48}
                            pauseOnHover={true}
                            fadeOut={true}
                            fadeOutColor="#ffffff"
                            ariaLabel="Technologies used in this project"
                        />
                    </div>
                </section>
            </div>
        </main>
    );
}
