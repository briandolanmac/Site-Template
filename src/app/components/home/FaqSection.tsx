import faqData from "../../data/home/FaqSection.json";

const FaqSection = () => {
  if (!faqData.enabled) return null;

  return (
    <section className="section section-gray faq-section">
    <div className="container">
      <p className="section-eyebrow teal">{faqData.eyebrow}</p>
      <h2 className="section-title dark">{faqData.title}</h2>
      <p className="section-sub dark">{faqData.subtitle}</p>
      <div className="faq-list">
        {faqData.items.map((item) => (
          <details key={item.question} className="faq-item">
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
    </section>
  );
};

export default FaqSection;
