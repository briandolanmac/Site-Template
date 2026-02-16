import type { Metadata } from "next";
import PageLayout from "../components/PageLayout";

export const metadata: Metadata = {
  title: "Get a Free Quote | Green-House Renewables",
  description: "Get a free, no-obligation quote for solar panels, battery storage, or EV chargers. Serving all of Ireland with SEAI grants available.",
};

export default function QuoteBuilderPage() {
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
            Free Quote
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Get Your Free Solar Quote
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Tell us about your property and energy needs, and we&apos;ll provide a
            tailored quote — completely free and with no obligation.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <div
            className="rounded-2xl shadow-lg p-8 md:p-12"
            style={{ background: "var(--bg-primary)" }}
          >
            <h2 className="text-2xl font-extrabold mb-8 text-center">
              Tell Us About Your Project
            </h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    style={{ borderColor: "var(--gray-300)", background: "var(--bg-primary)" }}
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    style={{ borderColor: "var(--gray-300)", background: "var(--bg-primary)" }}
                    placeholder="087 123 4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  style={{ borderColor: "var(--gray-300)", background: "var(--bg-primary)" }}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Eircode / Address *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  style={{ borderColor: "var(--gray-300)", background: "var(--bg-primary)" }}
                  placeholder="R93 AB12 or full address"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">What are you interested in? *</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Solar Panels",
                    "Battery Storage",
                    "EV Charger",
                    "Commercial Solar",
                  ].map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-3 p-4 rounded-lg border cursor-pointer hover:border-amber-500 transition-colors"
                      style={{ borderColor: "var(--gray-300)" }}
                    >
                      <input type="checkbox" className="w-4 h-4 accent-amber-500" />
                      <span className="text-sm font-medium">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Property Type</label>
                <select
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  style={{ borderColor: "var(--gray-300)", background: "var(--bg-primary)" }}
                >
                  <option value="">Select property type</option>
                  <option value="detached">Detached House</option>
                  <option value="semi-detached">Semi-Detached House</option>
                  <option value="terraced">Terraced House</option>
                  <option value="bungalow">Bungalow</option>
                  <option value="apartment">Apartment</option>
                  <option value="commercial">Commercial Property</option>
                  <option value="farm">Farm / Agricultural</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Average Monthly Electricity Bill
                </label>
                <select
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  style={{ borderColor: "var(--gray-300)", background: "var(--bg-primary)" }}
                >
                  <option value="">Select range</option>
                  <option value="under-100">Under €100</option>
                  <option value="100-150">€100 – €150</option>
                  <option value="150-200">€150 – €200</option>
                  <option value="200-300">€200 – €300</option>
                  <option value="300-plus">€300+</option>
                  <option value="commercial">Commercial (€500+)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Additional Details
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  style={{ borderColor: "var(--gray-300)", background: "var(--bg-primary)" }}
                  placeholder="Any additional information about your property or requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-lg text-white font-bold text-lg"
                style={{ background: "#0B1D3A" }}
              >
                Get My Free Quote
              </button>

              <p className="text-center text-sm text-gray-500">
                No obligation. We&apos;ll get back to you within 24 hours.
              </p>
            </form>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { icon: "⚡", title: "Fast Response", desc: "We respond to all enquiries within 24 hours" },
              { icon: "🏠", title: "Free Site Survey", desc: "No-obligation home assessment included" },
              { icon: "💰", title: "SEAI Grant", desc: "We handle your grant application for you" },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
