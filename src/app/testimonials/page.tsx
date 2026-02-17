import type { Metadata } from "next";
import PageLayout from "../components/PageLayout";

export const metadata: Metadata = {
  title: "Customer Testimonials | Green-House Renewables",
  description: "Read 100+ five-star reviews from happy Green-House Renewables customers across Ireland. See why homeowners and businesses trust us for solar installations.",
};

export default function TestimonialsPage() {
  return (
    <PageLayout>
      <section
        style={{
          background: "linear-gradient(135deg, #112F5B 0%, #009968 50%, #00b377 100%)",
          color: "#fff",
          padding: "5rem 0 4rem",
        }}
      >
        <div className="container text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4 opacity-80">
            Customer Reviews
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            What Our Customers Say
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Over 100 five-star reviews from homeowners and businesses across Ireland.
            Don&apos;t just take our word for it.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Seán O'Brien",
                location: "Carlow",
                rating: 5,
                text: "Brilliant service from start to finish. The team were professional, tidy, and explained everything clearly. Our electricity bills have dropped by over 60% since installation. Couldn't recommend them enough!",
                service: "Solar PV & Battery",
              },
              {
                name: "Mary Fitzgerald",
                location: "Kilkenny",
                rating: 5,
                text: "We were unsure about solar at first, but Green-House Renewables made the whole process so easy. They handled the SEAI grant application, and the installation was done in just one day. Absolutely delighted with the results.",
                service: "Solar PV",
              },
              {
                name: "Patrick Walsh",
                location: "Wexford",
                rating: 5,
                text: "Had solar panels and a Sigenergy battery installed. The monitoring app is fantastic — I can see exactly how much energy we're generating and saving. The team were excellent throughout.",
                service: "Solar PV & Battery",
              },
              {
                name: "Aoife Murphy",
                location: "Dublin",
                rating: 5,
                text: "From the initial survey to the final handover, everything was handled with care. The panels look great on our roof and we're already seeing significant savings. Highly recommend Green-House Renewables.",
                service: "Solar PV",
              },
              {
                name: "Dermot Kavanagh",
                location: "Laois",
                rating: 5,
                text: "We had an EV charger and solar panels installed at the same time. Now we charge our car for free with solar energy! The savings are incredible. Professional team, great communication.",
                service: "Solar PV & EV Charger",
              },
              {
                name: "Ciara Brennan",
                location: "Waterford",
                rating: 5,
                text: "As a business owner, I was looking to reduce our energy costs. Green-House Renewables designed a system that cut our bills in half. The installation caused zero disruption to our operations. Top class.",
                service: "Commercial Solar",
              },
              {
                name: "Tomás Ryan",
                location: "Tipperary",
                rating: 5,
                text: "Excellent experience all round. Competitive pricing, quality panels, and the lads who did the install were friendly and professional. Our neighbours have since booked with them too!",
                service: "Solar PV",
              },
              {
                name: "Niamh Doyle",
                location: "Wicklow",
                rating: 5,
                text: "The battery storage has been a game changer. We barely use any grid electricity now. Green-House Renewables explained all the options clearly and helped us choose the right system for our home.",
                service: "Battery Storage",
              },
              {
                name: "Michael Kelly",
                location: "Cork",
                rating: 5,
                text: "We got quotes from five different companies. Green-House Renewables were the most knowledgeable and their quote was very competitive. The installation quality is superb. Very happy customers.",
                service: "Solar PV & Battery",
              },
            ].map((review, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl shadow-md border"
                style={{ borderColor: "var(--gray-200)", background: "var(--bg-primary)" }}
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="text-amber-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-sm">{review.name}</p>
                    <p className="text-gray-500 text-xs">{review.location}</p>
                  </div>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: "#e0f2fe", color: "#0284c7" }}
                  >
                    {review.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" style={{ background: "var(--bg-secondary)" }}>
        <div className="container text-center">
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto mb-8">
            <div>
              <div className="text-3xl font-extrabold" style={{ color: "#009968" }}>100+</div>
              <div className="text-sm text-gray-600">5-Star Reviews</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold" style={{ color: "#009968" }}>1,000+</div>
              <div className="text-sm text-gray-600">Installations</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold" style={{ color: "#009968" }}>4.9</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          background: "linear-gradient(135deg, #112F5B 0%, #009968 50%, #00b377 100%)",
          color: "#fff",
          padding: "4rem 0",
        }}
      >
        <div className="container text-center">
          <h2 className="text-3xl font-extrabold mb-4">
            Join Our Happy Customers
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-xl mx-auto">
            Get a free quote and see why over 1,000 Irish homes and businesses trust
            Green-House Renewables.
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
