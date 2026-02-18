"use client";
import { useState } from "react";
import caseStudiesData from "../../data/home/CaseStudiesSection.json";

const CaseStudiesSection = () => {
  if (!caseStudiesData.enabled) return null;

  const cards = caseStudiesData.cards;
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(cards.length / perPage);

  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const next = () => setPage((p) => (p + 1) % totalPages);

  const visibleCards = cards.slice(page * perPage, page * perPage + perPage);

  return (
    <section id="case-studies" className="section case-studies">
      <div className="container">
        <p className="section-eyebrow">{caseStudiesData.eyebrow}</p>
        <h2 className="section-title">{caseStudiesData.title}</h2>
        <p className="section-sub">{caseStudiesData.subtitle}</p>
        <div className="case-carousel-wrapper">
          <button className="case-carousel-arrow case-carousel-arrow-left" onClick={prev} aria-label="Previous projects">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
          </button>
          <div className="case-grid">
            {visibleCards.map((card) => (
              <a key={card.title} href={card.cta.href} className="case-card case-card-link">
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
          <button className="case-carousel-arrow case-carousel-arrow-right" onClick={next} aria-label="Next projects">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
        {totalPages > 1 && (
          <div className="case-carousel-dots">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                className={`case-carousel-dot ${i === page ? "active" : ""}`}
                onClick={() => setPage(i)}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudiesSection;
