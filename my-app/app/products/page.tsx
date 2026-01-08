export default function ProductsPage() {
    const products = [
        {
            number: "01",
            title: "Synapse",
            description: "Document Intelligent System for Large Corpus"
        },
        {
            number: "02",
            title: "Khedma AI",
            description: "Job Searching and Applying Automation Tool"
        },
        {
            number: "03",
            title: "Agentic Web Navigator",
            description: "AI-Powered Web Navigation and Automation Agent"
        },
    ];

    return (
        <main className="projects-page">
            <div className="projects-page-container">
                <h1 className="projects-page-heading">Products</h1>
                <div className="projects-page-divider"></div>

                <div className="projects-page-list">
                    {products.map((product) => (
                        <div key={product.number} className="projects-page-row">
                            <span className="projects-page-number">{product.number}</span>
                            <div className="projects-page-info">
                                <h2 className="projects-page-title">{product.title}</h2>
                                <p className="projects-page-description">{product.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
