import accreditationsData from "../../data/home/AccreditationsSection.json";

const AccreditationsSection = () => {
  if (!accreditationsData.enabled) return null;

  return (
    <section className="partners-strip accreditations">
    <div className="container">
      <p className="partners-title">{accreditationsData.title}</p>
      <div className="partners-logos color">
        {accreditationsData.logos.map((logo) => (
          <img key={logo.src} src={logo.src} alt={logo.alt} />
        ))}
      </div>
    </div>
    </section>
  );
};

export default AccreditationsSection;
