import { generatePageMetadata } from "../components/SeoHead";
import StructuredData from "../components/StructuredData";
import PageLayout from "../components/PageLayout";
import pageData from "../data/pages/FundingOptionsPage.json";

export const metadata = generatePageMetadata("/funding-options");

export default function FundingOptionsPage() {
  const { hero, fundingSchemes, helpSection, cta } = pageData;

  return (
    <PageLayout>
      <StructuredData pageType="default" pagePath="/funding-options" />
      <section
        style={{
          background: "linear-gradient(135deg, #2B475C 0%, #112F5B 50%, #007a54 100%)",
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold">{fundingSchemes.title}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {fundingSchemes.items.map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl shadow-md border"
                style={{ borderColor: "var(--gray-200)", background: "var(--bg-primary)" }}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold mb-6">
                {helpSection.title}
              </h2>
              {helpSection.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-gray-600 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
              <a
                href={helpSection.button.href}
                className="inline-block mt-4"
                style={{
                  background: "var(--teal)",
                  color: "#fff",
                  padding: "0.875rem 2rem",
                  borderRadius: "0.5rem",
                  fontWeight: 700,
                }}
              >
                {helpSection.button.label}
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {helpSection.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-xl text-center"
                  style={{ background: "var(--bg-primary)", boxShadow: "var(--shadow-sm)" }}
                >
                  <div className="text-2xl font-extrabold mb-1 text-brand">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          background: "linear-gradient(135deg, #2B475C 0%, #112F5B 50%, #007a54 100%)",
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
