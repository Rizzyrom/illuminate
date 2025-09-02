interface AboutProps {
  data: {
    title: string;
    descriptions: string[];
    image?: string;
  };
}

export default function About({ data }: AboutProps) {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <div className="about-pattern"></div>
          </div>
          <div className="about-text">
            <h2 className="about-title">
              {data.title.split('.').map((line, index) => (
                <span key={index}>
                  {line.trim()}
                  {index < data.title.split('.').length - 1 ? '.' : ''}
                  {index < data.title.split('.').length - 1 ? <br /> : ''}
                </span>
              ))}
            </h2>
            {data.descriptions.map((description, index) => (
              <p key={index} className="about-description">
                {description}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}