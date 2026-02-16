import type { Metadata } from "next";
import PageLayout from "../components/PageLayout";

export const metadata: Metadata = {
  title: "Finance Options | Solar Path",
  description: "Affordable solar panel finance through our Finance Ireland partnership. Spread the cost with flexible payment plans. Go solar with no large upfront cost.",
};

export default function FinancePage() {
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
            Affordable Solar
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Finance Your Solar Installation
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Go solar with flexible payment plans through our partnership with Finance Ireland.
            No large upfront cost required.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#F5A623" }}>
                Finance Ireland Partnership
              </p>
              <h2 className="text-3xl font-extrabold mb-6">
                Spread the Cost of Solar
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We have partnered with Finance Ireland to offer affordable payment plans for
                your solar installation. This means you can start saving on your energy bills
                immediately without a large upfront investment.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                With competitive interest rates and flexible terms, your monthly repayments
                can often be less than your current electricity bill savings — meaning solar
                pays for itself from day one.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Apply online in minutes and receive a decision quickly. Our team will guide
                you through every step of the finance application process.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { title: "Flexible Terms", desc: "Choose repayment terms from 3 to 10 years to suit your budget", icon: "📅" },
                { title: "Competitive Rates", desc: "Low interest rates through our Finance Ireland partnership", icon: "💶" },
                { title: "Quick Approval", desc: "Apply online and get a decision within minutes", icon: "⚡" },
                { title: "No Hidden Fees", desc: "Transparent pricing with no hidden charges or setup fees", icon: "✅" },
              ].map((item) => (
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
            <h2 className="text-3xl font-extrabold">How Solar Finance Works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Get Your Quote", desc: "We provide a free quote for your solar installation including all costs" },
              { step: "2", title: "Apply for Finance", desc: "Complete a quick online application with Finance Ireland for instant approval" },
              { step: "3", title: "Start Saving", desc: "Your system is installed and you begin saving on energy bills immediately" },
            ].map((item) => (
              <div key={item.step} className="text-center p-8 rounded-2xl shadow-sm" style={{ background: "var(--bg-primary)" }}>
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4"
                  style={{ background: "#0B1D3A" }}
                >
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
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
            Go Solar Today — Pay Over Time
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-xl mx-auto">
            Get a free quote and explore our flexible finance options.
          </p>
          <a
            href="/quote-builder"
            style={{
              background: "#fff",
              color: "#F5A623",
              padding: "0.875rem 2rem",
              borderRadius: "0.5rem",
              fontWeight: 700,
              display: "inline-block",
            }}
          >
            Get Free Quote
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
