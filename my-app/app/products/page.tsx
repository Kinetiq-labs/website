import Link from "next/link";

interface Product {
    number: string;
    title: string;
    description: string;
    slug: string;
}

export default function ProductsPage() {
    const products: Product[] = [
        {
            number: "01",
            title: "Synapse",
            description: "RAG-Based Knowledge & Analytics Platform",
            slug: "synapse"
        },
        {
            number: "02",
            title: "Khedmi AI",
            description: "AI-Driven Autonomous Career Assistant",
            slug: "khedmi-ai"
        },
        {
            number: "03",
            title: "Agentic Web Navigator",
            description: "AI-Powered Web Navigation and Automation Agent",
            slug: "agentic-web-navigator"
        },
    ];

    return (
        <main className="projects-page">
            <div className="projects-page-container">
                <h1 className="projects-page-heading">Products</h1>
                <div className="projects-page-divider"></div>

                <div className="projects-page-list">
                    {products.map((product) => (
                        <Link href={`/products/${product.slug}`} key={product.slug} className="projects-page-row-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="projects-page-row">
                                <span className="projects-page-number">{product.number}</span>
                                <div className="projects-page-info">
                                    <h2 className="projects-page-title">{product.title}</h2>
                                    <p className="projects-page-description">{product.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
