import PageLayout from "../components/PageLayout";
import pageData from "../data/pages/EvChargersPage.json";
import { generatePageMetadata } from "../components/SeoHead";
import StructuredData from "../components/StructuredData";
import { getVoltfloUrl } from "../lib/siteSettings";

export const metadata = generatePageMetadata("/ev-chargers");

export default function EvChargersPage() {
  const { hero, about, business, cta } = pageData;

  return (
    <PageLayout>
      <StructuredData pageType="service" pagePath="/ev-chargers" serviceName="EV Charger Installation" />
      <section
        style={{
          background: "linear-gradient(135deg, #009968 0%, #112F5B 50%, #12222E 100%)",
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
              {about.contentBlocks.map((block, i) => (
                <div key={i} className="mb-5">
                  <h3 className="font-bold text-lg mb-1" style={{ color: "var(--text-primary)" }}>{block.subHeading}</h3>
                  <p className="text-gray-600 leading-relaxed">{block.paragraph}</p>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {about.features.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-6 rounded-xl shadow-sm border"
                  style={{ borderColor: "var(--gray-200)", background: "var(--bg-primary)" }}
                >
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold">{business.title}</h2>
            <p className="text-gray-600 mt-2">{business.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {business.items.map((item) => (
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

      <section
        style={{
          background: "linear-gradient(135deg, #009968 0%, #112F5B 50%, #12222E 100%)",
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
            href={getVoltfloUrl()}
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
