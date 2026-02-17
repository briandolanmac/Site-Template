import HomePageClient from "./components/home/HomePageClient";
import { generatePageMetadata } from "./components/SeoHead";
import StructuredData from "./components/StructuredData";
import faqData from "./data/home/FaqSection.json";
import testimonialsData from "./data/home/TestimonialsSection.json";

export const metadata = generatePageMetadata("/");

function getAllReviews() {
  const reviews: { quote: string; author: string; role: string }[] = [];
  testimonialsData.groups.forEach((group) => {
    group.items.forEach((item) => {
      reviews.push({ quote: item.quote, author: item.author, role: item.role });
    });
  });
  return reviews;
}

export default function Home() {
  return (
    <>
      <StructuredData
        pageType="home"
        pagePath="/"
        faqItems={faqData.items}
        reviews={getAllReviews()}
      />
      <HomePageClient />
    </>
  );
}
