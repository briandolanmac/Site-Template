import type { Metadata } from "next";
import PageLayout from "../components/PageLayout";

export const metadata: Metadata = {
  title: "Solar Panels Ireland | Green-House Renewables",
  description: "Residential solar PV systems installed across Ireland. Up to €2,100 SEAI grant, 0% VAT. Save up to 70% on electricity bills with Green-House Renewables.",
};

export default function SolarPanelsPage() {
  return (
    <PageLayout>
      <section
        style={{
          background: "linear-gradient(135deg, #007a54 0%, #009968 50%, #00b377 100%)",
          color: "#fff",
          padding: "5rem 0 4rem",
        }}
      >
        <div className="container text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4 opacity-80">
            Residential Solar
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Solar Panels for Your Home
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Generate your own clean electricity, reduce your bills by up to 70%, and increase
            your property value with a premium solar PV system.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#009968" }}>
                Why Solar PV?
              </p>
              <h2 className="text-3xl font-extrabold mb-6">
                Power Your Home with Sunshine
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Solar PV panels convert sunlight into electricity for your home. Even in
                Ireland&apos;s climate, solar panels generate significant energy — enough to
                reduce your electricity bills by up to 70% per year.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                With the SEAI grant of up to €2,100 and 0% VAT, there has never been a better
                time to invest in solar. Combined with the microgeneration scheme, you can even
                sell excess electricity back to the grid.
              </p>
              <ul className="space-y-3">
                {[
                  "Save up to 70% on electricity bills",
                  "Up to €2,100 SEAI grant available",
                  "0% VAT on residential installations",
                  "25+ year panel warranty",
                  "Increase your property value",
                  "Sell excess energy back to the grid",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span style={{ color: "#009968" }} className="font-bold mt-0.5">✓</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="/images/hero/hero-residential-new.jpg"
                alt="Solar panels installed on a residential home"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#009968" }}>
              Our Process
            </p>
            <h2 className="text-3xl font-extrabold">From Consultation to Installation</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Free Survey", desc: "Our experts assess your roof, energy usage, and design the optimal system" },
              { step: "2", title: "Custom Design", desc: "We design a bespoke solar PV system tailored to your home and needs" },
              { step: "3", title: "Professional Install", desc: "Our certified electricians install your system in just 1-2 days" },
              { step: "4", title: "Start Saving", desc: "Your system goes live and you immediately start generating free electricity" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4"
                  style={{ background: "#009968" }}
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
            <h2 className="text-3xl font-extrabold">What&apos;s Included</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Premium Solar Panels", desc: "Tier 1 panels with 25+ year performance warranty and maximum efficiency", icon: "☀️" },
              { title: "Hybrid Inverter", desc: "High-efficiency inverters that convert solar energy for home use and battery storage", icon: "🔌" },
              { title: "Full Monitoring", desc: "Real-time monitoring app so you can track your energy generation and savings", icon: "📱" },
              { title: "SEAI Grant Handling", desc: "We manage your complete SEAI grant application from start to finish", icon: "📋" },
              { title: "Certified Installation", desc: "Installed by Safe Electric certified electricians to the highest standards", icon: "🔒" },
              { title: "Aftercare Support", desc: "Ongoing support and maintenance to ensure your system performs optimally", icon: "🛠️" },
            ].map((item) => (
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
          background: "linear-gradient(135deg, #007a54 0%, #009968 50%, #00b377 100%)",
          color: "#fff",
          padding: "4rem 0",
        }}
      >
        <div className="container text-center">
          <h2 className="text-3xl font-extrabold mb-4">
            Ready to Go Solar?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-xl mx-auto">
            Get a free, no-obligation quote and start saving on your energy bills today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/quote-builder"
              style={{
                background: "#fff",
                color: "#009968",
                padding: "0.875rem 2rem",
                borderRadius: "0.5rem",
                fontWeight: 700,
                display: "inline-block",
              }}
            >
              Get Free Quote
            </a>
            <a
              href="/grants"
              style={{
                border: "2px solid #fff",
                color: "#fff",
                padding: "0.875rem 2rem",
                borderRadius: "0.5rem",
                fontWeight: 700,
                display: "inline-block",
              }}
            >
              Learn About Grants
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
