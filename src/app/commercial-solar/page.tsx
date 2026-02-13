import type { Metadata } from "next";
import PageLayout from "../components/PageLayout";

export const metadata: Metadata = {
  title: "Commercial Solar Solutions | Green-House Renewables",
  description: "Commercial and business solar PV installations across Ireland. Reduce operating costs, meet sustainability targets, and benefit from SSAP grants. 1000+ installations completed.",
};

export default function CommercialSolarPage() {
  return (
    <PageLayout>
      <section
        style={{
          background: "linear-gradient(135deg, #12222E 0%, #112F5B 50%, #009968 100%)",
          color: "#fff",
          padding: "5rem 0 4rem",
        }}
      >
        <div className="container text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4 opacity-80">
            Business Solutions
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Commercial Solar Solutions
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Reduce operating costs and meet your sustainability targets with a commercial
            solar PV system designed for your business.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#009968" }}>
                Solar for Business
              </p>
              <h2 className="text-3xl font-extrabold mb-6">
                Cut Energy Costs &amp; Boost Sustainability
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Commercial energy costs are one of the biggest overheads for Irish businesses.
                A solar PV system can reduce your electricity bills by up to 50%, with typical
                payback periods of 3-5 years.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We work with businesses of all sizes — from small offices and retail units to
                large industrial facilities and data centres. Our team designs bespoke systems
                that maximise your roof space and energy generation.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With SSAP grants available for businesses and accelerated capital allowances,
                the financial case for commercial solar has never been stronger.
              </p>
            </div>
            <div>
              <img
                src="/images/hero/hero-commercial.png"
                alt="Commercial solar installation"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold">Why Businesses Choose Solar</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Reduce Overheads", desc: "Cut electricity costs by up to 50% and protect against future price rises", icon: "📉" },
              { title: "Fast ROI", desc: "Typical payback period of 3-5 years with decades of free energy after", icon: "💰" },
              { title: "Tax Benefits", desc: "Accelerated capital allowances let you write off 100% of the cost in year one", icon: "🏛️" },
              { title: "ESG Compliance", desc: "Meet sustainability targets and improve your Environmental, Social & Governance profile", icon: "🌍" },
              { title: "Brand Value", desc: "Demonstrate your commitment to sustainability to customers and stakeholders", icon: "⭐" },
              { title: "Minimal Disruption", desc: "Professional installation with minimal impact on your daily business operations", icon: "🔧" },
            ].map((item) => (
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

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold">Trusted by Leading Businesses</h2>
            <p className="text-gray-600 mt-2">We have completed 1,000+ installations for businesses across Ireland</p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center opacity-60">
            {[
              "/images/logos/glanbia-1.webp",
              "/images/logos/aviva-2.webp",
              "/images/logos/avolon-1.webp",
              "/images/logos/bk-1.webp",
              "/images/logos/londis-2.webp",
              "/images/logos/mor-1.webp",
            ].map((src) => (
              <img key={src} src={src} alt="Client logo" className="mx-auto h-12 object-contain" />
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          background: "linear-gradient(135deg, #12222E 0%, #112F5B 50%, #009968 100%)",
          color: "#fff",
          padding: "4rem 0",
        }}
      >
        <div className="container text-center">
          <h2 className="text-3xl font-extrabold mb-4">
            Get a Commercial Solar Quote
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-xl mx-auto">
            Our team will assess your business premises and design a system that delivers
            maximum savings and ROI.
          </p>
          <a
            href="/contact"
            style={{
              background: "#fff",
              color: "#009968",
              padding: "0.875rem 2rem",
              borderRadius: "0.5rem",
              fontWeight: 700,
              display: "inline-block",
            }}
          >
            Talk to Our Team
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
