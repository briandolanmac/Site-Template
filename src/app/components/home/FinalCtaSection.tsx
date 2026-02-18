import finalCtaData from "../../data/home/FinalCtaSection.json";
import { getVoltfloUrl } from "../../lib/siteSettings";

const FinalCtaSection = () => {
  if (!finalCtaData.enabled) return null;

  return (
    <section className="final-cta" id="contact-section">
    <div className="container">
      <h2 className="final-cta-title">{finalCtaData.title}</h2>
      <p className="final-cta-sub">{finalCtaData.subtitle}</p>
      <div className="final-cta-btns">
        {finalCtaData.buttons.map((button) => (
          <a
            key={button.label}
            href={button.variant === "primary" ? getVoltfloUrl() : button.href}
            className={button.variant === "primary" ? "btn btn-white" : "btn btn-outline-white"}
          >
            {button.label}
          </a>
        ))}
      </div>
    </div>
    </section>
  );
};

export default FinalCtaSection;
