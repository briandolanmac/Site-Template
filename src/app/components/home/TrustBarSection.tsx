import trustBarData from "../../data/home/TrustBarSection.json";

const TrustBarSection = () => {
  if (!trustBarData.enabled) return null;

  return (
    <section className="trust-bar">
    <div className="container trust-bar-inner">
      <div>
        <p className="trust-bar-title">{trustBarData.title}</p>
        <p className="trust-bar-sub">{trustBarData.subtitle}</p>
      </div>
      <div className="trust-bar-badges">
        {trustBarData.badges.map((badge) => (
          <span key={badge}>{badge}</span>
        ))}
      </div>
    </div>
    </section>
  );
};

export default TrustBarSection;
