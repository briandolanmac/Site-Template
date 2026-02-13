import type { Metadata } from "next";
import PageLayout from "../components/PageLayout";

export const metadata: Metadata = {
  title: "EV Charger Installation | Infinite Energy",
  description: "Professional EV charger installation for homes and businesses across Ireland. SEAI grant available. Charge your electric vehicle with solar energy.",
};

export default function EvChargersPage() {
  return (
    <PageLayout>
      <section
        style={{
          background: "linear-gradient(135deg, #009968 0%, #112F5B 50%, #12222E 100%)",
          color: "#fff",
          padding: "5rem 0 4rem",
        }}
      >
        <div className="container text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4 opacity-80">
            Electric Vehicle Charging
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            EV Charger Installation
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Charge your electric vehicle at home or work with a professionally installed
            EV charger. Pair with solar panels for free motoring.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#009968" }}>
                Home EV Charging
              </p>
              <h2 className="text-3xl font-extrabold mb-6">
                Charge at Home, Save Every Day
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                A home EV charger is up to 3x faster than a standard plug socket and far
                safer for daily use. Our Safe Electric certified electricians install your
                charger to the highest safety standards.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Pair your EV charger with a solar PV system and charge your car with free,
                clean energy from your roof. This combination can save you thousands per year
                compared to petrol or diesel.
              </p>
              <p className="text-gray-600 leading-relaxed">
                SEAI grants are available for home EV charger installations, further reducing
                the cost of making the switch to electric driving.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { title: "Fast Charging", desc: "Up to 7.4kW home chargers — fully charge overnight", icon: "⚡" },
                { title: "Solar Compatible", desc: "Integrate with your solar panels for free charging", icon: "☀️" },
                { title: "Smart Features", desc: "Schedule charging, monitor usage, and optimise costs via app", icon: "📱" },
                { title: "SEAI Grant", desc: "Grants available for home EV charger installations", icon: "💰" },
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
            <h2 className="text-3xl font-extrabold">Business EV Charging</h2>
            <p className="text-gray-600 mt-2">
              We also install commercial EV charging stations for workplaces, car parks,
              and public locations.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Workplace Charging", desc: "Provide charging for employees and visitors at your business premises", icon: "🏢" },
              { title: "Fleet Charging", desc: "Charge your company fleet vehicles efficiently and cost-effectively", icon: "🚐" },
              { title: "Public Charging", desc: "Install public EV chargers for retail, hospitality, and leisure venues", icon: "🅿️" },
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

      <section
        style={{
          background: "linear-gradient(135deg, #009968 0%, #112F5B 50%, #12222E 100%)",
          color: "#fff",
          padding: "4rem 0",
        }}
      >
        <div className="container text-center">
          <h2 className="text-3xl font-extrabold mb-4">
            Get an EV Charger Installed
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-xl mx-auto">
            Fast, professional installation by certified electricians. Contact us today.
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
            Get a Quote
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
