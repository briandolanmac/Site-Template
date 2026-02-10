import servicesData from "../../data/home/ServicesSection.json";

const ServicesSection = () => {
  if (!servicesData.enabled) return null;

  return (
    <section className="section section-light">
    <div className="container">
      <p className="section-eyebrow teal">{servicesData.eyebrow}</p>
      <h2 className="section-title dark">{servicesData.title}</h2>
      <p className="section-sub dark">{servicesData.subtitle}</p>
      <div className="services-grid">
        {servicesData.cards.map((card) => (
          <a key={card.cta.href} href={card.cta.href} className="service-card-lg">
            <div className="service-card-img">
              <img src={card.image.src} alt={card.image.alt} />
            </div>
            <div className="service-card-body">
              <span className="service-card-sub">{card.tag}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <ul>
                {card.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <div className="service-card-cta">
                <strong>{card.cta.value}</strong> {card.cta.label}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
    </section>
  );
};

export default ServicesSection;
