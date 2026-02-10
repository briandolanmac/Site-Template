import partnersData from "../../data/home/PartnersStripSection.json";

const PartnersStripSection = () => {
  if (!partnersData.enabled) return null;

  return (
    <section className="partners-strip">
    <div className="container">
      <p className="partners-title">{partnersData.title}</p>
      <div className="partners-logos">
        {partnersData.logos.map((logo) => (
          <img key={logo.src} src={logo.src} alt={logo.alt} />
        ))}
      </div>
    </div>
    </section>
  );
};

export default PartnersStripSection;
