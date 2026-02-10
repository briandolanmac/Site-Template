import { Fragment } from "react";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import ServiceCardsSection from "./ServiceCardsSection";
import TrustBarSection from "./TrustBarSection";
import PartnersStripSection from "./PartnersStripSection";
import VideoSection from "./VideoSection";
import ServicesSection from "./ServicesSection";
import WhyChooseSection from "./WhyChooseSection";
import ImpactSection from "./ImpactSection";
import CaseStudiesSection from "./CaseStudiesSection";
import HowSection from "./HowSection";
import TestimonialsSection from "./TestimonialsSection";
import FaqSection from "./FaqSection";
import AccreditationsSection from "./AccreditationsSection";
import FinalCtaSection from "./FinalCtaSection";
import Footer from "./Footer";
import homePageData from "../../data/home/HomePage.json";

const sectionMap = {
  hero: <HeroSection />,
  serviceCards: <ServiceCardsSection />,
  trustBar: <TrustBarSection />,
  partnersStrip: <PartnersStripSection />,
  video: <VideoSection />,
  services: <ServicesSection />,
  whyChoose: <WhyChooseSection />,
  impact: <ImpactSection />,
  caseStudies: <CaseStudiesSection />,
  how: <HowSection />,
  testimonials: <TestimonialsSection />,
  faq: <FaqSection />,
  accreditations: <AccreditationsSection />,
  finalCta: <FinalCtaSection />
} as const;

type SectionKey = keyof typeof sectionMap;
const orderedSections = homePageData.order as string[];
const isSectionKey = (key: string): key is SectionKey => key in sectionMap;

const HomePage = () => (
  <div className="min-h-screen">
    {homePageData.sections.navigation && <Navigation />}

    <main>
      {orderedSections
        .filter((key): key is SectionKey =>
          isSectionKey(key) && homePageData.sections[key]
        )
        .map((key) => (
          <Fragment key={key}>{sectionMap[key]}</Fragment>
        ))}
    </main>

    {homePageData.sections.footer && <Footer />}
  </div>
);

export default HomePage;
