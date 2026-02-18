import { generatePageMetadata } from "../components/SeoHead";
import StructuredData from "../components/StructuredData";
import PageLayout from "../components/PageLayout";
import pageData from "../data/pages/QuoteBuilderPage.json";

export const metadata = generatePageMetadata("/quote-builder");

export default function QuoteBuilderPage() {
  const { hero, form, bottomCards } = pageData;

  return (
    <PageLayout>
      <StructuredData pageType="default" pagePath="/quote-builder" />
      <section
        style={{
          background: "linear-gradient(135deg, #009968 0%, #00b377 50%, #007a54 100%)",
          color: "#fff",
          padding: "5rem 0 4rem",
        }}
      >
        <div className="container text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4 opacity-80">
            {hero.eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            {hero.title}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            {hero.subtitle}
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
              {form.heading}
            </h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">{form.fields.fullName.label}</label>
                  <input
                    type={form.fields.fullName.type}
                    required
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    style={{ borderColor: "var(--gray-300)", background: "var(--bg-primary)" }}
                    placeholder={form.fields.fullName.placeholder}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">{form.fields.phone.label}</label>
                  <input
                    type={form.fields.phone.type}
                    required
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    style={{ borderColor: "var(--gray-300)", background: "var(--bg-primary)" }}
                    placeholder={form.fields.phone.placeholder}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">{form.fields.email.label}</label>
                <input
                  type={form.fields.email.type}
                  required
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  style={{ borderColor: "var(--gray-300)", background: "var(--bg-primary)" }}
                  placeholder={form.fields.email.placeholder}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">{form.fields.eircode.label}</label>
                <input
                  type={form.fields.eircode.type}
                  required
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  style={{ borderColor: "var(--gray-300)", background: "var(--bg-primary)" }}
                  placeholder={form.fields.eircode.placeholder}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">{form.interests.label}</label>
                <div className="grid grid-cols-2 gap-3">
                  {form.interests.options.map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-3 p-4 rounded-lg border cursor-pointer hover:border-emerald-500 transition-colors"
                      style={{ borderColor: "var(--gray-300)" }}
                    >
                      <input type="checkbox" className="w-4 h-4 accent-cyan-600" />
                      <span className="text-sm font-medium">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">{form.propertyType.label}</label>
                <select
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  style={{ borderColor: "var(--gray-300)", background: "var(--bg-primary)" }}
                >
                  <option value="">{form.propertyType.placeholder}</option>
                  {form.propertyType.options.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  {form.electricityBill.label}
                </label>
                <select
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  style={{ borderColor: "var(--gray-300)", background: "var(--bg-primary)" }}
                >
                  <option value="">{form.electricityBill.placeholder}</option>
                  {form.electricityBill.options.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  {form.fields.additionalDetails.label}
                </label>
                <textarea
                  rows={form.fields.additionalDetails.rows}
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  style={{ borderColor: "var(--gray-300)", background: "var(--bg-primary)" }}
                  placeholder={form.fields.additionalDetails.placeholder}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-lg text-white font-bold text-lg"
                style={{ background: "#009968" }}
              >
                {form.submitButton}
              </button>

              <p className="text-center text-sm text-gray-500">
                {form.disclaimer}
              </p>
            </form>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {bottomCards.map((item) => (
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
