import testimonialsData from "../../data/home/TestimonialsSection.json";

const TestimonialsSection = () => {
  if (!testimonialsData.enabled) return null;

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

      {testimonialsData.groups.map((group) => (
        <div key={group.label}>
          <div className={`testimonials-divider ${group.tone === "aqua" ? "aqua" : ""}`}>
            <span>{group.label}</span>
          </div>
          <div className="testimonials-grid">
            {group.items.map((item) => (
              <div key={`${item.author}-${item.quote}`} className={`testimonial-card ${item.variant}`}>
                <div className="testimonial-top">
                  {"company" in item && item.company ? (
                    <span className="company-badge">{item.company}</span>
                  ) : null}
                  <span className={`quote-icon ${group.tone === "aqua" ? "aqua" : ""}`}>
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
      ))}

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

export default TestimonialsSection;
