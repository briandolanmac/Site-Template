import PageLayout from "../components/PageLayout";
import pageData from "../data/pages/BatteryStoragePage.json";
import { generatePageMetadata } from "../components/SeoHead";
import StructuredData from "../components/StructuredData";
import RelatedServices from "../components/RelatedServices";

export const metadata = generatePageMetadata("/battery-storage");

export default function BatteryStoragePage() {
  const { hero, about, benefits, cta } = pageData;

  return (
    <PageLayout>
      <StructuredData pageType="service" pagePath="/battery-storage" serviceName="Battery Storage Installation" />
      <section
        style={{
          background: "linear-gradient(135deg, #112F5B 0%, #009968 50%, #007a54 100%)",
          color: "#fff",
          padding: "5rem 0 4rem",
        }}
      >
        <div className="container text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4 opacity-80">
            {hero.eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            {hero.title}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            {hero.subtitle}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="page-eyebrow">
                {about.eyebrow}
              </p>
              <h2 className="text-3xl font-extrabold mb-6">
                {about.title}
              </h2>
              {about.paragraphs.map((p, i) => (
                <p key={i} className={`text-gray-600 leading-relaxed ${i < about.paragraphs.length - 1 ? "mb-4" : ""}`}>{p}</p>
              ))}
            </div>
            <div>
              <img
                src={about.image.src}
                alt={about.image.alt}
                className="rounded-2xl shadow-lg w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold">{benefits.title}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.items.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl shadow-sm text-center"
                style={{ background: "var(--bg-primary)" }}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices currentPath="/battery-storage" />

      <section
        style={{
          background: "linear-gradient(135deg, #112F5B 0%, #009968 50%, #007a54 100%)",
          color: "#fff",
          padding: "4rem 0",
        }}
      >
        <div className="container text-center">
          <h2 className="text-3xl font-extrabold mb-4">
            {cta.title}
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-xl mx-auto">
            {cta.subtitle}
          </p>
          <a
            href={cta.primaryButton.href}
            style={{
              background: "#fff",
              color: "var(--teal)",
              padding: "0.875rem 2rem",
              borderRadius: "0.5rem",
              fontWeight: 700,
              display: "inline-block",
            }}
          >
            {cta.primaryButton.label}
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
