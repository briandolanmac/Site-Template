import type { Metadata } from "next";
import PageLayout from "../components/PageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Infinite Energy",
  description: "Read the Infinite Energy privacy policy. Learn how we collect, use, and protect your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <PageLayout>
      <section
        style={{
          background: "linear-gradient(135deg, #475569 0%, #64748b 50%, #94a3b8 100%)",
          color: "#fff",
          padding: "5rem 0 4rem",
        }}
      >
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            How Infinite Energy collects, uses, and protects your personal data.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-extrabold mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                Infinite Energy (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. We are based in Carlow, Ireland, and operate in accordance with the General Data Protection Regulation (GDPR) and the Irish Data Protection Act 2018.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold mb-4">2. Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                We may collect the following personal information:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2"><span style={{ color: "#06b6d4" }} className="mt-1">•</span> Name, email address, phone number, and postal address when you contact us or request a quote</li>
                <li className="flex items-start gap-2"><span style={{ color: "#06b6d4" }} className="mt-1">•</span> Property details including Eircode, property type, and energy usage information</li>
                <li className="flex items-start gap-2"><span style={{ color: "#06b6d4" }} className="mt-1">•</span> Technical data such as your IP address, browser type, and device information</li>
                <li className="flex items-start gap-2"><span style={{ color: "#06b6d4" }} className="mt-1">•</span> Usage data about how you interact with our website</li>
                <li className="flex items-start gap-2"><span style={{ color: "#06b6d4" }} className="mt-1">•</span> Cookie data as described in our Cookie Policy</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                We use the information we collect for the following purposes:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2"><span style={{ color: "#06b6d4" }} className="mt-1">•</span> To provide quotes, arrange site surveys, and deliver our solar installation services</li>
                <li className="flex items-start gap-2"><span style={{ color: "#06b6d4" }} className="mt-1">•</span> To process SEAI grant applications on your behalf</li>
                <li className="flex items-start gap-2"><span style={{ color: "#06b6d4" }} className="mt-1">•</span> To communicate with you about your enquiry, project, or aftercare</li>
                <li className="flex items-start gap-2"><span style={{ color: "#06b6d4" }} className="mt-1">•</span> To improve our website and services</li>
                <li className="flex items-start gap-2"><span style={{ color: "#06b6d4" }} className="mt-1">•</span> To comply with legal and regulatory obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold mb-4">4. Legal Basis for Processing</h2>
              <p className="text-gray-600 leading-relaxed">
                We process your personal data on the following legal bases: consent (when you submit a contact form or request a quote), contractual necessity (to provide our services), legitimate interests (to improve our services and communicate with you), and legal obligation (to comply with tax, safety, and regulatory requirements).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold mb-4">5. Data Sharing</h2>
              <p className="text-gray-600 leading-relaxed">
                We do not sell your personal data. We may share your information with: SEAI for grant processing, Finance Ireland for finance applications (with your consent), our installation partners and subcontractors, and regulatory bodies as required by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold mb-4">6. Data Retention</h2>
              <p className="text-gray-600 leading-relaxed">
                We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, including any legal, accounting, or reporting requirements. Typically, customer records are retained for 7 years after the completion of services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold mb-4">7. Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                Under GDPR, you have the following rights:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2"><span style={{ color: "#06b6d4" }} className="mt-1">•</span> Right to access your personal data</li>
                <li className="flex items-start gap-2"><span style={{ color: "#06b6d4" }} className="mt-1">•</span> Right to rectification of inaccurate data</li>
                <li className="flex items-start gap-2"><span style={{ color: "#06b6d4" }} className="mt-1">•</span> Right to erasure (&ldquo;right to be forgotten&rdquo;)</li>
                <li className="flex items-start gap-2"><span style={{ color: "#06b6d4" }} className="mt-1">•</span> Right to restrict processing</li>
                <li className="flex items-start gap-2"><span style={{ color: "#06b6d4" }} className="mt-1">•</span> Right to data portability</li>
                <li className="flex items-start gap-2"><span style={{ color: "#06b6d4" }} className="mt-1">•</span> Right to object to processing</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold mb-4">8. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at: <a href="mailto:info@infiniteenergy.ie" style={{ color: "#06b6d4" }} className="hover:underline">info@infiniteenergy.ie</a> or call <a href="tel:0599168075" style={{ color: "#06b6d4" }} className="hover:underline">059 916 8075</a>.
              </p>
            </div>

            <div
              className="p-6 rounded-xl mt-8"
              style={{ background: "var(--bg-secondary)" }}
            >
              <p className="text-sm text-gray-500">
                This policy was last updated in January 2025. We may update this policy from time to time. Any changes will be posted on this page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
