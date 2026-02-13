import type { Metadata } from "next";
import PageLayout from "../components/PageLayout";

export const metadata: Metadata = {
  title: "Battery Storage Solutions | Green-House Renewables",
  description: "Home battery storage systems by Sigenergy. Store excess solar energy, reduce grid dependence, and power your home day and night. Certified Sigenergy Installers.",
};

export default function BatteryStoragePage() {
  return (
    <PageLayout>
      <section
        style={{
          background: "linear-gradient(135deg, #112F5B 0%, #009968 50%, #007a54 100%)",
          color: "#fff",
          padding: "5rem 0 4rem",
        }}
      >
        <div className="container text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4 opacity-80">
            Energy Storage
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Home Battery Storage
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Store your solar energy and use it when you need it most. Certified Sigenergy
            battery systems for maximum independence.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#009968" }}>
                Sigenergy Battery Systems
              </p>
              <h2 className="text-3xl font-extrabold mb-6">
                Power Your Home Day &amp; Night
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Without battery storage, excess solar energy generated during the day is
                exported to the grid. A home battery stores this energy so you can use it in
                the evening and at night — when electricity costs are highest.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                As Certified Sigenergy Installers, we provide cutting-edge battery systems
                that integrate seamlessly with your solar panels. Sigenergy batteries are
                known for their reliability, efficiency, and sleek design.
              </p>
              <p className="text-gray-600 leading-relaxed">
                A typical home battery can store 5-15kWh of energy, enough to power your home
                through the evening and overnight. Combined with solar panels, you can achieve
                up to 90% energy independence.
              </p>
            </div>
            <div>
              <img
                src="/images/case-studies/battery_storage.webp"
                alt="Home battery storage system"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold">Benefits of Battery Storage</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Energy Independence", desc: "Reduce your reliance on the grid and protect against rising energy prices", icon: "🔋" },
              { title: "Use Solar at Night", desc: "Store daytime solar energy and use it in the evening when you need it most", icon: "🌙" },
              { title: "Backup Power", desc: "Keep essential appliances running during power outages with battery backup", icon: "⚡" },
              { title: "Smart Management", desc: "Intelligent energy management optimises when to store, use, or export energy", icon: "🧠" },
              { title: "Maximise Savings", desc: "Use more of your own solar energy instead of buying expensive grid electricity", icon: "💰" },
              { title: "Future Proof", desc: "Scalable systems that can grow with your energy needs over time", icon: "🔄" },
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
          background: "linear-gradient(135deg, #112F5B 0%, #009968 50%, #007a54 100%)",
          color: "#fff",
          padding: "4rem 0",
        }}
      >
        <div className="container text-center">
          <h2 className="text-3xl font-extrabold mb-4">
            Add Battery Storage to Your Home
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-xl mx-auto">
            Whether you already have solar panels or are starting fresh, we can design the
            perfect battery storage solution for your home.
          </p>
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
        </div>
      </section>
    </PageLayout>
  );
}
