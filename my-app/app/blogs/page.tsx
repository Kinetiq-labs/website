import Link from "next/link";

export default function BlogsPage() {
    const blogs = [
        {
            number: "01",
            title: "Building Scalable Software in the Age of AI: Lessons from Modern Web Development",
            description: "Best practices for building AI-ready applications",
            slug: "building-scalable-software-in-the-age-of-ai"
        },
        {
            number: "02",
            title: "Generative AI in Real-World Products: Moving Beyond Chatbots",
            description: "Practical applications of generative AI in modern software",
            slug: "generative-ai-in-real-world-products"
        },
        {
            number: "03",
            title: "From Automation to Autonomy: How Agentic AI Is Changing the Way Businesses Operate",
            description: "Exploring the shift from traditional automation to autonomous AI systems",
            slug: "from-automation-to-autonomy"
        },
    ];

    return (
        <main className="projects-page">
            <div className="projects-page-container">
                <h1 className="projects-page-heading">Blogs</h1>
                <div className="projects-page-divider"></div>

                <div className="projects-page-list">
                    {blogs.map((blog) => (
                        <Link href={`/blogs/${blog.slug}`} key={blog.number} className="projects-page-row-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="projects-page-row">
                                <span className="projects-page-number">{blog.number}</span>
                                <div className="projects-page-info">
                                    <h2 className="projects-page-title">{blog.title}</h2>
                                    <p className="projects-page-description">{blog.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
