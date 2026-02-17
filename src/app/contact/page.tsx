import type { Metadata } from "next";
import PageLayout from "../components/PageLayout";

export const metadata: Metadata = {
  title: "Contact Us | Green-House Renewables",
  description: "Get in touch with Green-House Renewables. Call +353 1 207 0006 or email info@green-house.ie. Based in Blackrock, Dublin, serving all of Ireland.",
};

export default function ContactPage() {
  return (
    <PageLayout>
      <section
        style={{
          background: "linear-gradient(135deg, #009968 0%, #00b377 50%, #007a54 100%)",
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
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      style={{ borderColor: "var(--gray-300)", background: "var(--bg-primary)" }}
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      style={{ borderColor: "var(--gray-300)", background: "var(--bg-primary)" }}
                      placeholder="Smith"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    style={{ borderColor: "var(--gray-300)", background: "var(--bg-primary)" }}
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    style={{ borderColor: "var(--gray-300)", background: "var(--bg-primary)" }}
                    placeholder="087 123 4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Service Interested In</label>
                  <select
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    style={{ borderColor: "var(--gray-300)", background: "var(--bg-primary)" }}
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg text-white font-bold text-lg"
                  style={{ background: "var(--teal)" }}
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
                      content: "+353 1 207 0006",
                      href: "tel:+35312070006",
                    },
                    {
                      icon: "✉️",
                      title: "Email",
                      content: "info@green-house.ie",
                      href: "mailto:info@green-house.ie",
                    },
                    {
                      icon: "📍",
                      title: "Location",
                      content: "Deansgrange Business Park, Blackrock, Dublin",
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
                          <a href={item.href} className="text-brand hover:underline">
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
                      <span className="text-brand">✓</span> {cert}
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
                    background: "var(--teal)",
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
