interface ProcessProps {
  data: {
    title: string;
    subtitle: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
    }>;
  };
}

export default function Process({ data }: ProcessProps) {
  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="how-it-works-title">{data.title}</h2>
        <p className="how-it-works-subtitle">
          {data.subtitle}
        </p>
        
        <div className="process-grid">
          {data.steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="process-number">{step.number}</div>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-description">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}