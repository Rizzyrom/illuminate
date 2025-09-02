interface HeroProps {
  data: {
    badge: string;
    title: string;
    subtitle: string;
    stats: Array<{
      number: string;
      label: string;
    }>;
    cta: {
      primaryText: string;
      primaryLink: string;
      secondaryText: string;
      secondaryLink: string;
    };
  };
}

export default function Hero({ data }: HeroProps) {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's an anchor link to a section on the same page
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            {data.badge}
          </div>
          <h1 className="hero-title">
            We <span className="illuminate">illuminate</span><br />
            the path to<br />
            exponential growth
          </h1>
          <p className="hero-subtitle">
            {data.subtitle}
          </p>
          <div className="hero-stats">
            {data.stats.map((stat, index) => (
              <div key={index} className="stat">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="hero-cta-group">
            <a 
              href={data.cta.primaryLink} 
              className="btn-primary"
              onClick={(e) => handleLinkClick(e, data.cta.primaryLink)}
            >
              {data.cta.primaryText}
            </a>
            <a 
              href={data.cta.secondaryLink} 
              className="btn-text"
              onClick={(e) => handleLinkClick(e, data.cta.secondaryLink)}
            >
              {data.cta.secondaryText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}