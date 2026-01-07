import Link from "next/link";

export default function ProjectsPage() {
    const projects = [
        { number: "01", title: "Learn Quran Global", description: "Online Quran Academy Platform", slug: "learn-quran-global" },
        { number: "02", title: "Records", description: "Desktop Application for Jewelry Business", slug: "records" },
        { number: "03", title: "Construction Management System", description: "Project Management for Construction", slug: "construction-management-system" },
        { number: "04", title: "Live Chat Assistant", description: "Real-time Customer Support Solution", slug: "live-chat-assistant" },
    ];

    return (
        <main className="projects-page">
            <div className="projects-page-container">
                <h1 className="projects-page-heading">Projects</h1>
                <div className="projects-page-divider"></div>

                <div className="projects-page-list">
                    {projects.map((project) => (
                        <Link href={`/projects/${project.slug}`} key={project.number} className="projects-page-row-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="projects-page-row">
                                <span className="projects-page-number">{project.number}</span>
                                <div className="projects-page-info">
                                    <h2 className="projects-page-title">{project.title}</h2>
                                    <p className="projects-page-description">{project.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
