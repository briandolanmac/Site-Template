import type { Metadata } from "next";
import PageLayout from "../components/PageLayout";

export const metadata: Metadata = {
  title: "Business Funding & SSAP Grants | Green-House Renewables",
  description: "Business funding options for commercial solar including SSAP grants, accelerated capital allowances, and SEAI support schemes. Reduce upfront costs for your business.",
};

export default function FundingOptionsPage() {
  return (
    <PageLayout>
      <section
        style={{
          background: "linear-gradient(135deg, #2B475C 0%, #112F5B 50%, #007a54 100%)",
          color: "#fff",
          padding: "5rem 0 4rem",
        }}
      >
        <div className="container text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4 opacity-80">
            Business Grants
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Business Funding Options
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Discover grants, tax incentives, and funding support available for commercial
            solar installations in Ireland.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold">Available Funding Schemes</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "SEAI Support Scheme for Renewable Heat (SSRH)",
                desc: "Grants for businesses investing in renewable energy systems. The scheme provides financial support to help businesses transition to cleaner energy sources and reduce operating costs.",
                icon: "🏛️",
              },
              {
                title: "Accelerated Capital Allowances (ACA)",
                desc: "Write off 100% of the cost of qualifying energy-efficient equipment in year one against your corporation tax. This significantly reduces the effective cost of your solar investment.",
                icon: "📊",
              },
              {
                title: "SEAI Community & Business Grants",
                desc: "SEAI offers various grant programmes for businesses and community energy projects. Our team stays up to date with all available schemes to maximise your funding.",
                icon: "💶",
              },
              {
                title: "Commercial Finance Options",
                desc: "We work with leading finance providers to offer flexible commercial lending solutions. Asset finance, leasing, and green loans are all available for qualifying businesses.",
                icon: "🏦",
              },
            ].map((item) => (
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
                We Help You Access Every Euro Available
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Navigating business grants and funding schemes can be complex. Our team has
                extensive experience helping businesses access all available funding, ensuring
                you minimise your upfront investment.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We provide a comprehensive breakdown of all applicable grants, tax incentives,
                and finance options as part of your free consultation — so you can make an
                informed decision with full visibility of costs and savings.
              </p>
              <a
                href="/contact"
                className="inline-block mt-4"
                style={{
                  background: "#009968",
                  color: "#fff",
                  padding: "0.875rem 2rem",
                  borderRadius: "0.5rem",
                  fontWeight: 700,
                }}
              >
                Speak to Our Team
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "100%", label: "ACA Tax Write-Off" },
                { value: "3-5yr", label: "Typical Payback" },
                { value: "50%", label: "Bill Reduction" },
                { value: "25yr+", label: "Panel Warranty" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-xl text-center"
                  style={{ background: "var(--bg-primary)", boxShadow: "var(--shadow-sm)" }}
                >
                  <div className="text-2xl font-extrabold mb-1" style={{ color: "#009968" }}>{stat.value}</div>
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
            Let&apos;s Find the Right Funding for Your Business
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-xl mx-auto">
            Contact us for a free consultation and funding assessment.
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
            Get in Touch
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
