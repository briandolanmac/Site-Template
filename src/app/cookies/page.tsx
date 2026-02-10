import type { Metadata } from "next";
import PageLayout from "../components/PageLayout";

export const metadata: Metadata = {
  title: "Cookie Policy | Infinite Energy",
  description: "Learn about how Infinite Energy uses cookies on our website. Manage your cookie preferences.",
};

export default function CookiesPage() {
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
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Cookie Policy
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            How Infinite Energy uses cookies and similar technologies on our website.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-extrabold mb-4">What Are Cookies?</h2>
              <p className="text-gray-600 leading-relaxed">
                Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and give website owners useful information about how their site is being used.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold mb-4">How We Use Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Infinite Energy uses cookies for the following purposes:
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Essential Cookies",
                    desc: "These cookies are necessary for the website to function properly. They enable basic features like page navigation, secure access, and form submissions. The website cannot function without these cookies.",
                    required: true,
                  },
                  {
                    title: "Analytics Cookies",
                    desc: "We use analytics cookies to understand how visitors interact with our website. This helps us improve the site experience, identify popular content, and fix any issues. These cookies collect anonymous, aggregated data.",
                    required: false,
                  },
                  {
                    title: "Functional Cookies",
                    desc: "These cookies remember your preferences, such as your chosen theme or language settings, to provide a more personalised experience when you return to our site.",
                    required: false,
                  },
                  {
                    title: "Marketing Cookies",
                    desc: "These cookies may be set by our advertising partners. They are used to build a profile of your interests and show you relevant advertisements on other websites. They do not directly store personal data.",
                    required: false,
                  },
                ].map((cookie) => (
                  <div
                    key={cookie.title}
                    className="p-6 rounded-xl border"
                    style={{ borderColor: "var(--gray-200)", background: "var(--bg-primary)" }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-lg">{cookie.title}</h3>
                      {cookie.required && (
                        <span
                          className="text-xs font-semibold px-3 py-1 rounded-full"
                          style={{ background: "#d1fae5", color: "#065f46" }}
                        >
                          Required
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{cookie.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold mb-4">Third-Party Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                Some cookies on our website are set by third-party services that appear on our pages. We use third-party services for analytics, social media integration, and advertising. These third parties may set their own cookies subject to their own privacy policies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold mb-4">Managing Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                You can control and manage cookies in several ways:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2"><span className="text-teal-600 mt-1">•</span> Most browsers allow you to refuse or delete cookies through their settings</li>
                <li className="flex items-start gap-2"><span className="text-teal-600 mt-1">•</span> You can set your browser to notify you when a cookie is being set</li>
                <li className="flex items-start gap-2"><span className="text-teal-600 mt-1">•</span> You can delete cookies that have already been stored on your device</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                Please note that disabling cookies may affect the functionality of our website and your user experience.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold mb-4">Updates to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any updates will be posted on this page with a revised date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about our use of cookies, please contact us at <a href="mailto:info@infiniteenergy.ie" className="text-teal-600 hover:underline">info@infiniteenergy.ie</a> or call <a href="tel:0599168075" className="text-teal-600 hover:underline">059 916 8075</a>.
              </p>
            </div>

            <div
              className="p-6 rounded-xl mt-8"
              style={{ background: "var(--bg-secondary)" }}
            >
              <p className="text-sm text-gray-500">
                This Cookie Policy was last updated in January 2025.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
