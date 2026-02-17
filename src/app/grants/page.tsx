import { generatePageMetadata } from "../components/SeoHead";
import StructuredData from "../components/StructuredData";
import PageLayout from "../components/PageLayout";

export const metadata = generatePageMetadata("/grants");

export default function GrantsPage() {
  return (
    <PageLayout>
      <StructuredData pageType="default" pagePath="/grants" />
      <section
        style={{
          background: "linear-gradient(135deg, #007a54 0%, #009968 50%, #112F5B 100%)",
          color: "#fff",
          padding: "5rem 0 4rem",
        }}
      >
        <div className="container text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4 opacity-80">
            Save With SEAI
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            SEAI Grants for Solar Panels
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Take advantage of up to €2,100 in SEAI grants and 0% VAT on residential solar
            panel installations across Ireland.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="page-eyebrow">
                Grant Details
              </p>
              <h2 className="text-3xl font-extrabold mb-6">
                How Much Can You Save?
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                The Sustainable Energy Authority of Ireland (SEAI) provides generous grants to
                homeowners who install solar PV systems. The grant covers a significant portion
                of your installation costs, making solar energy more affordable than ever.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                In addition to the SEAI grant, residential solar panel installations benefit
                from 0% VAT, further reducing the overall cost. Combined with energy savings
                of up to 70%, solar panels pay for themselves within a few years.
              </p>
              <p className="text-gray-600 leading-relaxed">
                As SEAI Registered installers, Green-House Renewables handles the entire grant
                application process on your behalf — so you can sit back and enjoy the savings.
              </p>
            </div>
            <div className="space-y-6">
              {[
                {
                  title: "Up to €2,100",
                  desc: "SEAI grant available for residential solar PV installations",
                  icon: "💰",
                },
                {
                  title: "0% VAT",
                  desc: "No VAT charged on residential solar panel installations in Ireland",
                  icon: "🏷️",
                },
                {
                  title: "We Handle Everything",
                  desc: "Green-House Renewables manages your full SEAI grant application process",
                  icon: "📋",
                },
                {
                  title: "Fast Turnaround",
                  desc: "Grant approval typically takes 4-6 weeks with our streamlined process",
                  icon: "⚡",
                },
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
            <p className="page-eyebrow">
              Eligibility
            </p>
            <h2 className="text-3xl font-extrabold">Who Can Apply?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Homeowners", desc: "Your home must have been built and occupied before 2021", icon: "🏠" },
              { title: "BER Assessment", desc: "A BER assessment after works is required as part of the process", icon: "📊" },
              { title: "SEAI Installer", desc: "Works must be carried out by an SEAI registered installer like us", icon: "✅" },
              { title: "Property Type", desc: "Detached, semi-detached, terraced houses, and apartments qualify", icon: "🏘️" },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl p-6 text-center shadow-sm"
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
            <h2 className="text-3xl font-extrabold">How It Works</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Get a Quote", desc: "Contact us for a free, no-obligation assessment and quote" },
              { step: "2", title: "Grant Application", desc: "We submit your SEAI grant application on your behalf" },
              { step: "3", title: "Installation", desc: "Our certified team installs your solar PV system" },
              { step: "4", title: "Receive Grant", desc: "SEAI pays your grant directly after installation" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4"
                  style={{ background: "var(--teal)" }}
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

      <section
        style={{
          background: "linear-gradient(135deg, #007a54 0%, #009968 50%, #112F5B 100%)",
          color: "#fff",
          padding: "4rem 0",
        }}
      >
        <div className="container text-center">
          <h2 className="text-3xl font-extrabold mb-4">
            Claim Your €2,100 SEAI Grant Today
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-xl mx-auto">
            Let our team handle the grant process from start to finish.
          </p>
          <a
            href="/quote-builder"
            style={{
              background: "#fff",
              color: "var(--teal)",
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
