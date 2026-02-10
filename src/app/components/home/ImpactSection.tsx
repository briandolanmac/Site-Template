import impactData from "../../data/home/ImpactSection.json";

const ImpactSection = () => {
  if (!impactData.enabled) return null;

  return (
    <section className="impact-section">
    <div className="container">
      <h2 className="impact-title">
        {impactData.title} <span>{impactData.titleHighlight}</span>
      </h2>
      <div className="impact-grid">
        {impactData.items.map((item) => (
          <div key={item.label} className="impact-item">
            <div className="impact-icon">{item.icon}</div>
            <span className="impact-value">{item.value}</span>
            <span className="impact-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default ImpactSection;
