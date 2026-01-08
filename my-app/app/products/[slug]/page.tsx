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

interface ProductData {
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

const productsData: ProductData[] = [
    {
        slug: "synapse",
        title: "Synapse",
        tagline: "RAG-Based Knowledge & Analytics Platform",
        description: [
            "Synapse is a RAG-based knowledge and analytics platform that enables organizations to search, analyze, and interact with large-scale document collections using AI.",
            "It allows organizations to create secure libraries by connecting data sources such as Google Drive and processing thousands of documents efficiently.",
            "The system combines keyword, semantic, and contextual retrieval to extract the most relevant information for any user query.",
            "An intelligent reasoning layer generates responses, insights, and visual analytics including summaries, charts, and reports from the retrieved data.",
            "Designed for scalability and multi-tenancy, Synapse ensures data isolation, security, and efficient GPU-accelerated processing for enterprise use."
        ],
        timeline: {
            duration: "Ongoing",
            months: ["September 2025", "Present"]
        },
        screenshots: [
            "/synapse/1.png",
            "/synapse/2.png",
            "/synapse/3.png"
        ],
        techStack: [
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python", title: "Python" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React", title: "React" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", alt: "Flask", title: "Flask" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg", alt: "Supabase", title: "Supabase" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", alt: "AWS", title: "AWS" },
            { src: "/langchain-logo.png", alt: "LangChain", title: "LangChain" },
            { src: "https://avatars.githubusercontent.com/u/130722866?s=200&v=4", alt: "LlamaIndex", title: "LlamaIndex" }
        ],
        features: [
            "Secure library creation with Google Drive integration",
            "Multi-modal retrieval: keyword, semantic, and contextual search",
            "AI-powered summaries, charts, and visual analytics",
            "Scalable multi-tenant architecture with data isolation",
            "GPU-accelerated document processing",
            "Enterprise-grade security and access controls"
        ]
    },
    {
        slug: "khedmi-ai",
        title: "Khedmi AI",
        tagline: "AI-Driven Autonomous Career Assistant",
        description: [
            "Khedmi AI is an AI-driven autonomous career assistant designed to revolutionize the job search and application process.",
            "The platform collects job listings across multiple platforms using intelligent web scraping, ensuring comprehensive coverage of available opportunities.",
            "It analyzes and ranks jobs using an AI-based FitScore algorithm, helping users identify the most suitable positions based on their skills and preferences.",
            "Khedmi AI automatically applies for relevant jobs through secure automation, saving users countless hours of manual application work.",
            "The system builds a Career DNA Profile that evolves with user experience and preferences, becoming more accurate over time.",
            "Users get access to comprehensive analytics, reports, and career growth visualizations to track their job search progress and career development."
        ],
        timeline: {
            duration: "Ongoing",
            months: ["October 2025", "Present"]
        },
        screenshots: [
            "/khedma/1.PNG",
            "/khedma/2.PNG",
            "/khedma/3.PNG",
            "/khedma/4.PNG",
            "/khedma/5.PNG"
        ],
        techStack: [
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python", title: "Python" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React", title: "React" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", alt: "Flask", title: "Flask" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg", alt: "Supabase", title: "Supabase" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", alt: "AWS", title: "AWS" },
            { src: "/langchain-logo.png", alt: "LangChain", title: "LangChain" },
            { src: "https://avatars.githubusercontent.com/u/130722866?s=200&v=4", alt: "LlamaIndex", title: "LlamaIndex" }
        ],
        features: [
            "Intelligent web scraping across multiple job platforms",
            "AI-based FitScore algorithm for job ranking",
            "Automated job application submission",
            "Dynamic Career DNA Profile that evolves over time",
            "Comprehensive analytics and career growth visualizations",
            "Personalized job recommendations based on preferences"
        ]
    },
    {
        slug: "agentic-web-navigator",
        title: "Agentic Web Navigator",
        tagline: "AI-Powered Intelligent Web Browser",
        description: [
            "Agentic Web Navigator is an AI-powered web browser that integrates Large Language Models (LLMs) to enable intelligent and natural web interaction. The objective is to move beyond static automation or chatbots and create a browser where users can navigate, search, extract, and perform actions on the web using natural language commands.",
            "The system allows users to communicate with the browser in simple language. For instance, users can say, 'Find me a hotel room in Islamabad and book the cheapest one,' or 'Summarize this article,' and the browser will interpret, execute, and confirm these actions safely. Instead of users providing URLs, the system itself acts as a fully functional web environment with integrated intelligence.",
            "The AI Browser combines LLM reasoning capabilities with automated browsing control. The system utilizes HTML parsing, DOM inspection, and web scraping techniques to extract and interpret page elements. Later enhancements involve visual recognition of web components and reinforcement learning for adaptive interaction.",
            "A central focus of the project is safety and user trust. Before executing any significant web action (e.g., booking, form submission, checkout), the browser requests explicit confirmation from the user. This human-in-the-loop mechanism ensures ethical use and prevents unintended or unsafe operations. The system maintains contextual awareness across multiple pages and tabs to provide a seamless and coherent browsing experience.",
            "Beyond implementation, this project has a strong research dimension. It enables investigation into how LLMs interpret web content, how effectively they can perform complex web actions, and how user confirmation affects safety and usability. The results contribute to emerging research in human-AI collaboration, safe autonomous agents, and conversational web navigation."
        ],
        timeline: {
            duration: "Ongoing",
            months: ["November 2025", "Present"]
        },
        screenshots: [
            "/navigator/1.png",
            "/navigator/2.png",
            "/navigator/3.png"
        ],
        techStack: [
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python", title: "Python" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React", title: "React" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", alt: "Flask", title: "Flask" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg", alt: "Supabase", title: "Supabase" },
            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", alt: "AWS", title: "AWS" },
            { src: "/langchain-logo.png", alt: "LangChain", title: "LangChain" },
            { src: "https://avatars.githubusercontent.com/u/130722866?s=200&v=4", alt: "LlamaIndex", title: "LlamaIndex" }
        ],
        features: [
            "Natural language web navigation and interaction",
            "LLM-powered intent understanding and task execution",
            "Human-in-the-loop safety confirmation for critical actions",
            "Multi-tab contextual awareness and session management",
            "Automated form filling, booking, and data extraction",
            "Visual recognition and adaptive reinforcement learning"
        ]
    }
];

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const product = productsData.find((p) => p.slug === slug);
    const timelineRef = useRef<HTMLDivElement>(null);
    const [currentScreenshot, setCurrentScreenshot] = useState(0);

    // Auto-timer for screenshot slider
    useEffect(() => {
        if (product && product.screenshots.length > 1) {
            const timer = setInterval(() => {
                setCurrentScreenshot(prev =>
                    prev === product.screenshots.length - 1 ? 0 : prev + 1
                );
            }, 3500);
            return () => clearInterval(timer);
        }
    }, [product]);

    useEffect(() => {
        if (timelineRef.current && product) {
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
    }, [product]);

    if (!product) {
        return notFound();
    }

    return (
        <main className="project-detail-page">
            <div className="project-detail-container">
                <Link href="/products" className="back-link">
                    ← Back to Products
                </Link>

                {/* Header */}
                <h1 className="project-detail-title">{product.title}</h1>
                <p className="project-detail-tagline">{product.tagline}</p>
                <div className="project-detail-divider"></div>

                {/* Description */}
                <section className="project-description-section">
                    {product.description.map((para, index) => (
                        <p key={index} className="project-description-text">
                            {para}
                        </p>
                    ))}
                </section>

                {/* Features */}
                {product.features.length > 0 && (
                    <section className="project-features-section">
                        <h2 className="section-subheading">Key Features</h2>
                        <div className="features-grid">
                            {product.features.map((feature, index) => (
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
                    <h2 className="section-subheading">Product Timeline</h2>
                    <p className="timeline-duration">Status: {product.timeline.duration}</p>

                    <div className="timeline-container" ref={timelineRef}>
                        <div className="timeline-line">
                            <div className="timeline-line-fill"></div>
                        </div>
                        {product.timeline.months.map((month, index) => (
                            <div key={index} className="timeline-item">
                                <div className="timeline-dot"></div>
                                <span className="timeline-month">{month}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Screenshots Slider - Only show if screenshots exist */}
                {product.screenshots.length > 0 && (
                    <section className="project-screenshots-section">

                        <div className="screenshots-slider-container">
                            <div
                                className="screenshots-slider"
                                style={{ transform: `translateX(-${currentScreenshot * 100}%)` }}
                            >
                                {product.screenshots.map((src, index) => (
                                    <div key={index} className="screenshot-slide">
                                        <Image
                                            src={src}
                                            alt={`${product.title} screenshot ${index + 1}`}
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
                                onClick={() => setCurrentScreenshot(prev => prev === 0 ? product.screenshots.length - 1 : prev - 1)}
                            >
                                ←
                            </button>
                            <button
                                className="screenshot-nav-btn"
                                onClick={() => setCurrentScreenshot(prev => prev === product.screenshots.length - 1 ? 0 : prev + 1)}
                            >
                                →
                            </button>
                        </div>

                        {/* Dot Indicators */}
                        <div className="screenshots-dots">
                            {product.screenshots.map((_, i) => (
                                <button
                                    key={i}
                                    className={`screenshot-dot ${currentScreenshot === i ? 'active' : ''}`}
                                    onClick={() => setCurrentScreenshot(i)}
                                />
                            ))}
                        </div>
                    </section>
                )}

                {/* Tech Stack - Only show if tech stack exists */}
                {product.techStack.length > 0 && (
                    <section className="project-techstack-section">
                        <h2 className="section-subheading">Tech Stack</h2>
                        <div className="techstack-container">
                            <LogoLoop
                                logos={product.techStack}
                                speed={60}
                                logoHeight={40}
                                gap={48}
                                pauseOnHover={true}
                                fadeOut={true}
                                fadeOutColor="#ffffff"
                                ariaLabel="Technologies used in this product"
                            />
                        </div>
                    </section>
                )}
            </div>
        </main>
    );
}
