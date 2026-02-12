import type { Metadata } from "next";
import PageLayout from "../components/PageLayout";

export const metadata: Metadata = {
  title: "Contact Us | Infinite Energy",
  description: "Get in touch with Infinite Energy. Call 059 916 8075 or email info@infiniteenergy.ie. Based in Carlow, serving all of Ireland.",
};

export default function ContactPage() {
  return (
    <PageLayout>
      <section
        style={{
          background: "linear-gradient(135deg, #0891b2 0%, #06b6d4 50%, #22d3ee 100%)",
          color: "#fff",
          padding: "5rem 0 4rem",
        }}
      >
        <div className="container text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4 opacity-80">
            Get in Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Ready to start your solar journey? Our friendly team is here to help.
            Get in touch today for a free, no-obligation consultation.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-extrabold mb-8">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      style={{ borderColor: "var(--gray-300)", background: "var(--bg-primary)" }}
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      style={{ borderColor: "var(--gray-300)", background: "var(--bg-primary)" }}
                      placeholder="Smith"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    style={{ borderColor: "var(--gray-300)", background: "var(--bg-primary)" }}
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    style={{ borderColor: "var(--gray-300)", background: "var(--bg-primary)" }}
                    placeholder="087 123 4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Service Interested In</label>
                  <select
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    style={{ borderColor: "var(--gray-300)", background: "var(--bg-primary)" }}
                  >
                    <option value="">Select a service</option>
                    <option value="solar-residential">Residential Solar Panels</option>
                    <option value="solar-commercial">Commercial Solar</option>
                    <option value="battery">Battery Storage</option>
                    <option value="ev-charger">EV Charger</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    style={{ borderColor: "var(--gray-300)", background: "var(--bg-primary)" }}
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg text-white font-bold text-lg"
                  style={{ background: "#06b6d4" }}
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-extrabold mb-8">Contact Information</h2>
                <div className="space-y-6">
                  {[
                    {
                      icon: "📞",
                      title: "Phone",
                      content: "059 916 8075",
                      href: "tel:0599168075",
                    },
                    {
                      icon: "✉️",
                      title: "Email",
                      content: "info@infiniteenergy.ie",
                      href: "mailto:info@infiniteenergy.ie",
                    },
                    {
                      icon: "📍",
                      title: "Location",
                      content: "Carlow, Ireland — Serving all of Ireland",
                      href: null,
                    },
                    {
                      icon: "🕐",
                      title: "Office Hours",
                      content: "Monday – Friday: 9:00am – 5:00pm",
                      href: null,
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4 items-start">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                        style={{ background: "#e0f2fe" }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">{item.title}</h3>
                        {item.href ? (
                          <a href={item.href} style={{ color: "#06b6d4" }} className="hover:underline">
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-gray-600">{item.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="p-6 rounded-2xl"
                style={{ background: "var(--bg-secondary)" }}
              >
                <h3 className="font-bold text-lg mb-3">Our Certifications</h3>
                <ul className="space-y-2">
                  {[
                    "SEAI Registered Installer",
                    "Safe Electric Certified",
                    "Certified Sigenergy Installers",
                    "Carlow Business Awards Winner 2024 & 2025",
                  ].map((cert) => (
                    <li key={cert} className="flex items-center gap-2 text-gray-600">
                      <span style={{ color: "#06b6d4" }}>✓</span> {cert}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="p-6 rounded-2xl"
                style={{ background: "#e0f2fe" }}
              >
                <h3 className="font-bold text-lg mb-2">Prefer a Quick Quote?</h3>
                <p className="text-gray-600 mb-4">
                  Use our online quote builder to get an instant estimate for your solar
                  installation.
                </p>
                <a
                  href="/quote-builder"
                  className="inline-block font-bold"
                  style={{
                    background: "#06b6d4",
                    color: "#fff",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "0.5rem",
                  }}
                >
                  Get Free Quote →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
