import { generatePageMetadata } from "../components/SeoHead";
import StructuredData from "../components/StructuredData";
import PageLayout from "../components/PageLayout";
import pageData from "../data/pages/PrivacyPolicyPage.json";

export const metadata = generatePageMetadata("/privacy-policy");

export default function PrivacyPolicyPage() {
  const { hero, sections, lastUpdated } = pageData;

  return (
    <PageLayout>
      <StructuredData pageType="default" pagePath="/privacy-policy" />
      <section
        style={{
          background: "linear-gradient(135deg, #2B475C 0%, #12222E 50%, #112F5B 100%)",
          color: "#fff",
          padding: "5rem 0 4rem",
        }}
      >
        <div className="container text-center">
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
          <div className="prose prose-lg max-w-none space-y-8">
            {sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-2xl font-extrabold mb-4">{section.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  {section.body}
                  {section.contactEmail && (
                    <>{" "}<a href={`mailto:${section.contactEmail}`} className="text-brand hover:underline">{section.contactEmail}</a>{" "}or call{" "}<a href={`tel:${section.contactPhone?.replace(/\s/g, "")}`} className="text-brand hover:underline">{section.contactPhone}</a>.</>
                  )}
                </p>
                {section.bullets && (
                  <ul className="space-y-2 text-gray-600">
                    {section.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="text-brand mt-1">•</span> {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div
              className="p-6 rounded-xl mt-8"
              style={{ background: "var(--bg-secondary)" }}
            >
              <p className="text-sm text-gray-500">
                {lastUpdated}
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
