"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import caseStudiesData from "../../data/home/CaseStudiesSection.json";

const CaseStudiesSection = () => {
  if (!caseStudiesData.enabled) return null;

  const cards = caseStudiesData.cards;

  return (
    <section id="case-studies" className="section case-studies">
      <div className="container">
        <p className="section-eyebrow">{caseStudiesData.eyebrow}</p>
        <h2 className="section-title">{caseStudiesData.title}</h2>
        <p className="section-sub">{caseStudiesData.subtitle}</p>
        <CaseStudiesCarousel cards={cards} />
      </div>
    </section>
  );
};

interface CaseCard {
  image: { src: string; alt: string };
  logo: { src: string; alt: string };
  sub: string;
  title: string;
  description: string;
  stats: { value: string; label: string; highlight?: boolean }[];
  cta: { label: string; href: string };
}

function CaseStudiesCarousel({ cards }: { cards: CaseCard[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const updateVisibleCount = useCallback(() => {
    const width = window.innerWidth;
    if (width < 640) setVisibleCount(1);
    else if (width < 768) setVisibleCount(2);
    else setVisibleCount(3);
  }, []);

  useEffect(() => {
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, [updateVisibleCount]);

  const maxIndex = Math.max(0, cards.length - visibleCount);

  const scrollTo = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(clamped);
    if (trackRef.current) {
      const cardWidth = trackRef.current.scrollWidth / cards.length;
      trackRef.current.scrollTo({ left: cardWidth * clamped, behavior: "smooth" });
    }
  }, [maxIndex, cards.length]);

  const prev = () => scrollTo(currentIndex - 1);
  const next = () => scrollTo(currentIndex + 1);

  return (
    <div className="case-carousel">
      <button
        className="carousel-arrow carousel-arrow-left"
        onClick={prev}
        disabled={currentIndex === 0}
        aria-label="Previous projects"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>

      <div className="case-track-wrapper">
        <div className="case-track" ref={trackRef}>
          {cards.map((card, i) => (
            <a key={i} href={card.cta.href} className="case-card case-card-link">
              <div className="case-img">
                <img src={card.image.src} alt={card.image.alt} />
                <div className="case-overlay"></div>
                <div className="case-logo">
                  <img src={card.logo.src} alt={card.logo.alt} />
                </div>
                <div className="case-info">
                  <span className="case-sub">{card.sub}</span>
                  <h3>{card.title}</h3>
                </div>
              </div>
              <div className="case-body">
                <p>{card.description}</p>
                <span className="case-cta">{card.cta.label}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <button
        className="carousel-arrow carousel-arrow-right"
        onClick={next}
        disabled={currentIndex >= maxIndex}
        aria-label="Next projects"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </button>

      {maxIndex > 0 && (
        <div className="carousel-dots">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${i === currentIndex ? "active" : ""}`}
              onClick={() => scrollTo(i)}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default CaseStudiesSection;
