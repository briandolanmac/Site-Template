import type { Metadata } from "next";
import PageLayout from "../components/PageLayout";
import pageData from "../data/pages/SolarPanelsPage.json";

export const metadata: Metadata = {
  title: "Solar Panels Ireland | Green-House Renewables",
  description: "Residential solar PV systems installed across Ireland. Up to €2,100 SEAI grant, 0% VAT. Save up to 70% on electricity bills with Green-House Renewables.",
};

export default function SolarPanelsPage() {
  const { hero, whySolar, process, included, cta } = pageData;

  return (
    <PageLayout>
      <section
        style={{
          background: "linear-gradient(135deg, #0B1D3A, #162D50, #1a3a5c)",
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
              <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#F5A623" }}>
                {whySolar.eyebrow}
              </p>
              <h2 className="text-3xl font-extrabold mb-6">
                {whySolar.title}
              </h2>
              {whySolar.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-600 mb-4 leading-relaxed">{p}</p>
              ))}
              <ul className="space-y-3">
                {whySolar.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span style={{ color: "#F5A623" }} className="font-bold mt-0.5">✓</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src={whySolar.image.src}
                alt={whySolar.image.alt}
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#F5A623" }}>
              {process.eyebrow}
            </p>
            <h2 className="text-3xl font-extrabold">{process.title}</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {process.steps.map((item) => (
              <div key={item.step} className="text-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4"
                  style={{ background: "#0B1D3A" }}
                >
                  {item.step}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold">{included.title}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {included.items.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl shadow-sm border text-center"
                style={{ borderColor: "var(--gray-200)", background: "var(--bg-primary)" }}
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
          background: "linear-gradient(135deg, #0B1D3A, #162D50, #1a3a5c)",
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
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={cta.primaryButton.href}
              style={{
                background: "#fff",
                color: "#F5A623",
                padding: "0.875rem 2rem",
                borderRadius: "0.5rem",
                fontWeight: 700,
                display: "inline-block",
              }}
            >
              {cta.primaryButton.label}
            </a>
            {cta.secondaryButton && (
              <a
                href={cta.secondaryButton.href}
                style={{
                  border: "2px solid #fff",
                  color: "#fff",
                  padding: "0.875rem 2rem",
                  borderRadius: "0.5rem",
                  fontWeight: 700,
                  display: "inline-block",
                }}
              >
                {cta.secondaryButton.label}
              </a>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
