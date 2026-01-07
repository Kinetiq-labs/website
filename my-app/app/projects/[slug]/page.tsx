"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, use } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ProjectData {
    slug: string;
    title: string;
    tagline: string;
    description: string[];
    timeline: {
        duration: string;
        months: string[];
    };
    screenshots: string[];
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
        ]
    }
];

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const project = projectsData.find((p) => p.slug === slug);
    const timelineRef = useRef<HTMLDivElement>(null);

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

                {/* Screenshots */}
                <section className="project-screenshots-section">
                    <h2 className="section-subheading">Screenshots</h2>
                    <div className="screenshots-grid">
                        {project.screenshots.map((src, index) => (
                            <div key={index} className="screenshot-wrapper">
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
                </section>
            </div>
        </main>
    );
}
