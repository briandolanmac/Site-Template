import seoData from "../data/seo.json";

interface RelatedServicesProps {
  currentPath: string;
}

export default function RelatedServices({ currentPath }: RelatedServicesProps) {
  const relatedServices = seoData.services.filter(
    (s) => s.url !== currentPath
  );

  if (relatedServices.length === 0) return null;

  return (
    <section className="py-16 md:py-20" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <div className="text-center mb-10">
          <p className="page-eyebrow">Explore More</p>
          <h2 className="text-3xl font-extrabold" style={{ color: "var(--text-primary)" }}>
            Our Other Services
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedServices.map((service) => (
            <a
              key={service.url}
              href={service.url}
              className="block p-6 rounded-xl shadow-sm border transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              style={{
                borderColor: "var(--gray-200)",
                background: "var(--bg-primary)",
              }}
            >
              <h3 className="font-bold text-lg mb-2" style={{ color: "var(--text-primary)" }}>
                {service.name}
              </h3>
              <p className="text-sm mb-3" style={{ color: "var(--text-secondary)" }}>
                {service.description}
              </p>
              <span className="text-sm font-semibold" style={{ color: "var(--teal)" }}>
                Learn more →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
