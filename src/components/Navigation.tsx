interface NavigationProps {
  data: {
    logo: string;
    menuItems: Array<{
      label: string;
      href: string;
    }>;
    cta: {
      text: string;
      href: string;
    };
  };
}

export default function Navigation({ data }: NavigationProps) {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's an anchor link to a section on the same page
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // For external pages like strategy.html, work.html etc., we'll let them navigate normally
    // In a real implementation, these would be converted to Next.js pages
  };

  return (
    <header>
      <nav>
        <div className="container">
          <div className="nav-container">
            <a href="#" className="logo-text">
              {data.logo}
            </a>
            <ul className="nav-menu">
              {data.menuItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a 
              href={data.cta.href}
              onClick={(e) => handleNavClick(e, data.cta.href)}
              className="nav-cta"
            >
              {data.cta.text}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}