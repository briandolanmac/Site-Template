import Image from "next/image";
import heroData from "../../data/home/HeroSection.json";

const HeroSection = () => {
  if (!heroData.enabled) return null;

  return (
    <section className="hero">
    <div className="hero-bg">
      <Image src={heroData.image.src} alt={heroData.image.alt} fill priority sizes="100vw" style={{ objectFit: "cover" }} />
      <div className="hero-overlay" style={{ opacity: (heroData.overlayOpacity ?? 5) / 5 }}></div>
    </div>

    <div className="hero-floats">
      <div className="hero-award">
        <span className="award-icon">{heroData.floatAward.icon}</span>
        <div>
          <p className="award-label">{heroData.floatAward.label}</p>
          <p className="award-title">
            {heroData.floatAward.titleLines[0]}
            <br />
            {heroData.floatAward.titleLines[1]}
          </p>
        </div>
      </div>
      <div className="hero-stats-float">
        <div className="stats-float-icon">{heroData.floatStats.icon}</div>
        <div>
          <p className="stats-float-value">{heroData.floatStats.value}</p>
          <p className="stats-float-label">{heroData.floatStats.label}</p>
        </div>
        <div className="stars">{heroData.floatStats.stars} <span>{heroData.floatStats.reviews}</span></div>
      </div>
      <div className="hero-cert">
        <span className="cert-icon">{heroData.floatCert.icon}</span>
        <div>
          <p className="cert-title">{heroData.floatCert.title}</p>
          <p className="cert-sub">{heroData.floatCert.sub}</p>
        </div>
      </div>
    </div>

    <div className="hero-content container">
      <div className="hero-text">
        {(heroData as any).showEyebrow !== false && (
        <div className="eyebrow-wrap">
          <span className="pulse"></span>
          <span className="eyebrow">{heroData.eyebrow}</span>
        </div>
        )}
        <h1 className="hero-headline">
          {heroData.headlineLines[0]}
          <br />
          {heroData.headlineLines[1]}
          <br />
          <span className="gradient-text">{heroData.headlineHighlight}</span>
        </h1>
        <p className="hero-sub">{heroData.subheading}</p>
        <div className="hero-ctas">
          <a href={heroData.cta[1].href} className="btn btn-primary">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
              <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
              <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
            </svg>
            {heroData.cta[1].label} <span className="arrow">{heroData.ctaArrow}</span>
          </a>
          <a href={heroData.cta[0].href} className="btn btn-outline">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            {heroData.cta[0].label} <span className="arrow">{heroData.ctaArrow}</span>
          </a>
        </div>
        <div className="hero-badges">
          {heroData.badges.filter((b) => b.trim()).map((badge, i) => (
            <span key={i}>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              {badge}
            </span>
          ))}
        </div>
        <div className="hero-mobile-stats">
          {heroData.mobileStats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="scroll-indicator">
      <span>{heroData.scrollLabel}</span>
      <div className="scroll-mouse">
        <div className="scroll-dot"></div>
      </div>
    </div>
    </section>
  );
};

export default HeroSection;
