import type { Metadata } from "next";
import PageLayout from "../components/PageLayout";

export const metadata: Metadata = {
  title: "Our Projects & Case Studies | Infinite Energy",
  description: "View our portfolio of 1,000+ solar installations across Ireland. Residential, commercial, and industrial case studies from Infinite Energy.",
};

export default function ProjectsPage() {
  return (
    <PageLayout>
      <section
        style={{
          background: "linear-gradient(135deg, #0d9488 0%, #065f46 100%)",
          color: "#fff",
          padding: "5rem 0 4rem",
        }}
      >
        <div className="container text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4 opacity-80">
            Our Portfolio
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Projects &amp; Case Studies
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Over 1,000 successful installations across Ireland — from family homes to
            major commercial facilities.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold">Featured Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Residential Solar Installation",
                category: "Residential",
                desc: "Complete solar PV system with battery storage for a family home in Carlow. 10 panels generating 4.2kW with Sigenergy battery.",
                image: "/images/case-studies/residential.webp",
              },
              {
                title: "Modern Home Solar System",
                category: "Residential",
                desc: "Contemporary home fitted with a 6kW solar PV system. Integrated with smart home energy management for maximum savings.",
                image: "/images/case-studies/modern_home.webp",
              },
              {
                title: "Battery Storage Retrofit",
                category: "Residential",
                desc: "Sigenergy battery storage added to an existing solar installation, increasing energy self-consumption from 40% to 85%.",
                image: "/images/case-studies/battery_storage.webp",
              },
              {
                title: "Vantage Data Center",
                category: "Commercial",
                desc: "Large-scale commercial solar installation for Vantage Data Centers, significantly reducing their carbon footprint and energy costs.",
                image: "/images/case-studies/vantage_data_center.webp",
              },
              {
                title: "MSD Ireland",
                category: "Commercial",
                desc: "Major commercial solar deployment for MSD pharmaceutical facility, contributing to their global sustainability targets.",
                image: "/images/case-studies/msd.webp",
              },
              {
                title: "Uisce Éireann",
                category: "Commercial",
                desc: "Solar PV installation for Uisce Éireann, helping Ireland's water utility reduce operational energy costs and carbon emissions.",
                image: "/images/case-studies/UISCE.webp",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="rounded-2xl overflow-hidden shadow-md"
                style={{ background: "var(--bg-primary)" }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span
                    className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
                    style={{
                      background: project.category === "Commercial" ? "#dbeafe" : "#d1fae5",
                      color: project.category === "Commercial" ? "#1e40af" : "#065f46",
                    }}
                  >
                    {project.category}
                  </span>
                  <h3 className="font-bold text-lg mt-3 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "1,000+", label: "Installations" },
              { value: "100+", label: "5-Star Reviews" },
              { value: "26", label: "Counties Served" },
              { value: "15MW+", label: "Capacity Installed" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-extrabold text-teal-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          background: "linear-gradient(135deg, #0d9488 0%, #10b981 100%)",
          color: "#fff",
          padding: "4rem 0",
        }}
      >
        <div className="container text-center">
          <h2 className="text-3xl font-extrabold mb-4">
            Your Project Could Be Next
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-xl mx-auto">
            Join over 1,000 happy customers across Ireland.
          </p>
          <a
            href="/quote-builder"
            style={{
              background: "#fff",
              color: "#0d9488",
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
