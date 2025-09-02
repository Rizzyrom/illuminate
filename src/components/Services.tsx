interface ServicesProps {
  data: {
    badge: string;
    title: string;
    subtitle: string;
    serviceList: Array<{
      name: string;
      subtitle: string;
      description: string;
      features: string[];
    }>;
  };
}

export default function Services({ data }: ServicesProps) {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">{data.badge}</div>
          <h2 className="section-title">
            {data.title.split('.').map((line, index) => (
              <span key={index}>
                {line.trim()}
                {index === 0 ? '.' : ''}
                <br />
              </span>
            ))}
          </h2>
          <p className="section-subtitle">
            {data.subtitle}
          </p>
        </div>
        
        <div className="services-grid">
          {data.serviceList.map((service, index) => (
            <div key={index} className="service-card">
              <h3 className="service-name">{service.name}</h3>
              <p className="service-subtitle">{service.subtitle}</p>
              <p className="service-description">
                {service.description}
              </p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}