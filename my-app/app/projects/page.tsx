import Link from "next/link";

interface Project {
    number: string;
    title: string;
    description: string;
    slug: string;
}

export default function ProjectsPage() {
    const completedProjects: Project[] = [
        { number: "01", title: "Learn Quran Global", description: "Online Quran Academy Platform", slug: "learn-quran-global" },
        { number: "02", title: "Records", description: "Desktop Application for Jewelry Business", slug: "records" },
    ];

    const ongoingProjects: Project[] = [
        { number: "01", title: "Construction Management System", description: "Project Management for Construction", slug: "construction-management-system" },
        { number: "02", title: "Live Chat Assistant", description: "Real-time Customer Support Solution", slug: "live-chat-assistant" },
    ];

    const renderProjectList = (projects: Project[]) => (
        <div className="projects-page-list">
            {projects.map((project) => (
                <Link href={`/projects/${project.slug}`} key={project.slug} className="projects-page-row-link" style={{ textDecoration: 'none', color: 'inherit' }}>
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
    );

    return (
        <main className="projects-page">
            <div className="projects-page-container">
                <h1 className="projects-page-heading">Projects</h1>
                <div className="projects-page-divider"></div>

                {/* Completed Projects Section */}
                <section className="projects-section-group">
                    <h2 className="projects-section-title">Completed Projects</h2>
                    {renderProjectList(completedProjects)}
                </section>

                {/* Ongoing Projects Section */}
                <section className="projects-section-group">
                    <h2 className="projects-section-title">Ongoing Projects</h2>
                    {renderProjectList(ongoingProjects)}
                </section>
            </div>
        </main>
    );
}
