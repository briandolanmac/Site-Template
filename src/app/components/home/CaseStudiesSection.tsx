import caseStudiesData from "../../data/home/CaseStudiesSection.json";

const CaseStudiesSection = () => {
  if (!caseStudiesData.enabled) return null;

  return (
    <section className="section case-studies">
    <div className="container">
      <p className="section-eyebrow">{caseStudiesData.eyebrow}</p>
      <h2 className="section-title">{caseStudiesData.title}</h2>
      <p className="section-sub">{caseStudiesData.subtitle}</p>
      <div className="case-grid">
        {caseStudiesData.cards.map((card) => (
          <div key={card.title} className="case-card">
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
              <a href={card.cta.href} className="case-cta">
                {card.cta.label}
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="case-cta-wrap">
        <a href={caseStudiesData.footerCta.href} className="btn btn-primary">
          {caseStudiesData.footerCta.label}
        </a>
      </div>
    </div>
    </section>
  );
};

export default CaseStudiesSection;
