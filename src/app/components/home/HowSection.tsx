import howData from "../../data/home/HowSection.json";

const HowSection = () => {
  if (!howData.enabled) return null;

  return (
    <section className="section section-light how-section">
    <div className="container">
      <p className="section-eyebrow">{howData.eyebrow}</p>
      <h2 className="section-title">{howData.title}</h2>
      <p className="section-sub">{howData.subtitle}</p>
      <div className="how-grid">
        {howData.steps.map((step) => (
          <div key={step.number} className="how-step">
            <span className="how-num">{step.number}</span>
            <div className="how-icon">{step.icon}</div>
            <span className="how-time">{step.time}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            <ul>
              {step.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="how-cta">
        <a href={howData.cta.href} className="btn btn-primary">
          {howData.cta.label}
        </a>
      </div>
    </div>
    </section>
  );
};

export default HowSection;
