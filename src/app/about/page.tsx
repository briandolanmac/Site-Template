import type { Metadata } from "next";
import PageLayout from "../components/PageLayout";

export const metadata: Metadata = {
  title: "About Us | Infinite Energy",
  description: "Learn about Infinite Energy, Ireland's trusted solar energy company based in Carlow. SEAI registered, Safe Electric certified, and Carlow Business Award winners 2024 & 2025.",
};

export default function AboutPage() {
  return (
    <PageLayout>
      <section
        style={{
          background: "linear-gradient(135deg, #009968 0%, #007a54 50%, #112F5B 100%)",
          color: "#fff",
          padding: "5rem 0 4rem",
        }}
      >
        <div className="container text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4 opacity-80">
            Who We Are
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            About Infinite Energy
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Your sustainability partner — helping homeowners and businesses across Ireland
            save money while reducing their carbon footprint.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 mb-2">
                Our Story
              </p>
              <h2 className="text-3xl font-extrabold mb-6">
                Powering Ireland&apos;s Green Future
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Based in Carlow and serving all of Ireland, Infinite Energy was founded with a
                clear mission: to make renewable energy accessible and affordable for every Irish
                home and business. We are proud Certified Sigenergy Installers, SEAI Registered,
                and Safe Electric Certified.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                With over 1,000 successful installations and 100+ five-star reviews, we have
                built a reputation for quality workmanship, transparent pricing, and exceptional
                customer service. Our team of qualified engineers and electricians bring years of
                expertise to every project.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We are honoured to have won the Carlow Business Awards in both 2024 and 2025,
                recognising our commitment to excellence and community impact.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/team.jpg"
                alt="The Infinite Energy team"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 mb-2">
              Why Choose Us
            </p>
            <h2 className="text-3xl font-extrabold">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality First",
                desc: "We use only premium components and follow best-practice installation standards. Every system is designed to deliver maximum performance for decades.",
                icon: "⭐",
              },
              {
                title: "Customer Focus",
                desc: "From initial consultation to aftercare, we guide you through every step. Our 100+ five-star reviews speak to the experience we deliver.",
                icon: "🤝",
              },
              {
                title: "Sustainability",
                desc: "We are passionate about reducing Ireland's carbon emissions. Every solar panel we install helps create a cleaner, greener future for generations to come.",
                icon: "🌱",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 shadow-md text-center"
                style={{ background: "var(--bg-primary)" }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 mb-2">
              Our Credentials
            </p>
            <h2 className="text-3xl font-extrabold">Trusted &amp; Certified</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "SEAI Registered", icon: "✅" },
              { label: "Safe Electric Certified", icon: "🔒" },
              { label: "Certified Sigenergy Installers", icon: "🏆" },
              { label: "Carlow Business Awards 2024 & 2025", icon: "🥇" },
            ].map((cert) => (
              <div
                key={cert.label}
                className="rounded-xl p-6 text-center shadow-sm border"
                style={{ borderColor: "var(--gray-200)", background: "var(--bg-primary)" }}
              >
                <div className="text-3xl mb-3">{cert.icon}</div>
                <p className="font-semibold text-sm">{cert.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          background: "linear-gradient(135deg, #009968 0%, #007a54 50%, #112F5B 100%)",
          color: "#fff",
          padding: "4rem 0",
        }}
      >
        <div className="container text-center">
          <h2 className="text-3xl font-extrabold mb-4">
            Ready to Start Your Solar Journey?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-xl mx-auto">
            Get a free, no-obligation quote from our expert team today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/quote-builder"
              className="btn btn-cta"
              style={{
                background: "#fff",
                color: "#009968",
                padding: "0.875rem 2rem",
                borderRadius: "0.5rem",
                fontWeight: 700,
              }}
            >
              Get Free Quote
            </a>
            <a
              href="/contact"
              style={{
                border: "2px solid #fff",
                color: "#fff",
                padding: "0.875rem 2rem",
                borderRadius: "0.5rem",
                fontWeight: 700,
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
