import whyChooseData from "../../data/home/WhyChooseSection.json";

const WhyChooseSection = () => {
  if (!whyChooseData.enabled) return null;

  return (
    <section className="section section-dark why-choose">
    <div className="container">
      <p className="section-eyebrow">{whyChooseData.eyebrow}</p>
      <h2 className="section-title">{whyChooseData.title}</h2>
      <p className="section-subtitle" style={{ color: "rgba(255,255,255,0.85)" }}>{whyChooseData.description}</p>
      <div className="grid-2" style={{ marginTop: "3rem" }}>
        <div className="why-img">
          <img src={whyChooseData.image.src} alt={whyChooseData.image.alt} />
          <div className="why-award">
            <span>{whyChooseData.award.icon}</span>
            <div>
              <p className="award-title">{whyChooseData.award.title}</p>
              <p className="award-sub">{whyChooseData.award.subtitle}</p>
            </div>
          </div>
        </div>
        <div className="why-content">
          <div className="why-trust">
            {whyChooseData.trustItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="why-stats">
            {whyChooseData.stats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
          <a href={whyChooseData.cta.href} className="btn btn-primary">
            {whyChooseData.cta.label}
          </a>
        </div>
      </div>
    </div>
    </section>
  );
};

export default WhyChooseSection;
