"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import testimonialsData from "../../data/home/TestimonialsSection.json";

const TestimonialsSection = () => {
  if (!testimonialsData.enabled) return null;

  const allItems = testimonialsData.groups.flatMap((group) =>
    group.items.map((item) => ({ ...item, tone: group.tone }))
  );

  return (
    <section className="section section-light testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <div className="rating-badge">
            <span className="stars">{testimonialsData.ratingStars}</span>
            <span className="rating-text">{testimonialsData.ratingLabel}</span>
          </div>
          <h2 className="section-title">{testimonialsData.title}</h2>
          <p className="section-sub">{testimonialsData.subtitle}</p>
        </div>

        <TestimonialsCarousel items={allItems} />

        <div className="testimonials-cta">
          <a
            href={testimonialsData.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-teal"
          >
            {testimonialsData.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
};

interface CarouselItem {
  company: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  variant: string;
  tone: string;
}

function TestimonialsCarousel({ items }: { items: CarouselItem[] }) {
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

  const maxIndex = Math.max(0, items.length - visibleCount);

  const scrollTo = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(clamped);
    if (trackRef.current) {
      const cardWidth = trackRef.current.scrollWidth / items.length;
      trackRef.current.scrollTo({ left: cardWidth * clamped, behavior: "smooth" });
    }
  }, [maxIndex, items.length]);

  const prev = () => scrollTo(currentIndex - 1);
  const next = () => scrollTo(currentIndex + 1);

  return (
    <div className="testimonials-carousel">
      <button
        className="carousel-arrow carousel-arrow-left"
        onClick={prev}
        disabled={currentIndex === 0}
        aria-label="Previous reviews"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>

      <div className="testimonials-track-wrapper">
        <div
          className="testimonials-track"
          ref={trackRef}
        >
          {items.map((item, i) => (
            <div
              key={`${item.author}-${i}`}
              className={`testimonial-card ${item.variant}`}
            >
              <div className="testimonial-top">
                {item.company ? (
                  <span className="company-badge">{item.company}</span>
                ) : null}
                <span className={`quote-icon ${item.tone === "aqua" ? "aqua" : ""}`}>
                  {testimonialsData.quoteMark}
                </span>
              </div>
              <div className={`stars ${item.variant === "b2b" ? "small" : ""}`}>
                {testimonialsData.ratingStars}
              </div>
              <p className="testimonial-text">
                {testimonialsData.quoteMark}{item.quote}{testimonialsData.quoteMark}
              </p>
              <div className="testimonial-author">
                <div className={`author-avatar ${item.variant}`}>{item.avatar}</div>
                <div>
                  <strong>{item.author}</strong>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="carousel-arrow carousel-arrow-right"
        onClick={next}
        disabled={currentIndex >= maxIndex}
        aria-label="Next reviews"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </button>

      <div className="carousel-dots">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            className={`carousel-dot ${i === currentIndex ? "active" : ""}`}
            onClick={() => scrollTo(i)}
            aria-label={`Go to review ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default TestimonialsSection;
