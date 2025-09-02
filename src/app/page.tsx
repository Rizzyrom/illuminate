"use client";
import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Process from "../components/Process";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

// SECURITY: Static data only - NO TinaCMS client access for public visitors
const staticPageData = {
  navigation: {
    logo: "Illuminate Avenue",
    menuItems: [
      { label: "Strategy", href: "#services" },
      { label: "Work", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "About", href: "#about" },
      { label: "Insights", href: "#contact" }
    ],
    cta: { text: "Connect With Us", href: "#contact" }
  },
  hero: {
    badge: "Shining a Light on Businesses",
    title: "We illuminate the path to exponential growth",
    subtitle: "20+ years orchestrating transformative marketing strategies for global brands. No cookie-cutter solutions. No empty promises. Just strategic brilliance that delivers measurable impact.",
    stats: [
      { number: "$1B+", label: "Revenue Generated" },
      { number: "20+", label: "Years Experience" },
      { number: "Elite", label: "Industry Experts" }
    ],
    cta: {
      primaryText: "Start Your Transformation",
      primaryLink: "#contact",
      secondaryText: "View Case Studies",
      secondaryLink: "#about"
    }
  },
  services: {
    badge: "Strategic Capabilities",
    title: "Beyond campaigns. We architect empires.",
    subtitle: "We don't just run ads. We architect comprehensive marketing ecosystems that drive sustainable growth at enterprise scale.",
    serviceList: [
      {
        name: "Strategy",
        subtitle: "Executive Team Advisory",
        description: "Executive advisory for marketing transformation. We align your entire marketing ecosystem with business objectives.",
        features: ["Executive strategy sessions", "Market opportunity analysis", "Competitive positioning", "Growth roadmap development"]
      },
      {
        name: "Brand Renaissance",
        subtitle: "Complete Brand Evolution",
        description: "Complete brand evolution from strategy to execution. Position your brand for market leadership.",
        features: ["Brand strategy & architecture", "Visual identity systems", "Voice & messaging frameworks", "Market positioning"]
      },
      {
        name: "Experience Architecture",
        subtitle: "Digital Transformation Projects",
        description: "Architect integrated digital experiences that convert at every touchpoint across the customer journey.",
        features: ["Customer journey mapping", "MarTech stack optimization", "Omnichannel orchestration", "Experience optimization"]
      },
      {
        name: "Growth Engine Optimization",
        subtitle: "Revenue System Redesign",
        description: "Design and optimize the entire revenue engine from lead generation through customer retention.",
        features: ["Revenue model optimization", "Sales & marketing alignment", "Conversion rate optimization", "Customer lifetime value"]
      },
      {
        name: "Intelligence-Led Growth",
        subtitle: "Analytics & Optimization Programs",
        description: "Transform data into competitive advantage with advanced analytics and predictive modeling.",
        features: ["Advanced analytics setup", "Predictive modeling", "Performance dashboards", "ROI optimization"]
      },
      {
        name: "AI & Automation Integration",
        subtitle: "Future-Forward Marketing Systems",
        description: "Implement cutting-edge AI and automation solutions to scale your marketing operations while maintaining personalized customer experiences.",
        features: ["AI-powered personalization", "Marketing automation workflows", "Predictive customer analytics", "Intelligent content optimization"]
      }
    ]
  },
  process: {
    title: "Partnership. Not just another project.",
    subtitle: "We're selective about who we work with. This ensures we're both the right partners, it's the right project, and there's a strong opportunity for effectiveness.",
    steps: [
      {
        number: "01",
        title: "Assessment",
        description: "We evaluate your business challenges and growth potential to ensure we're the right fit for your transformation goals."
      },
      {
        number: "02",
        title: "Planning",
        description: "We align on vision, resources, and success metrics to create a clear roadmap for your marketing transformation."
      },
      {
        number: "03",
        title: "Execution",
        description: "We execute the strategy with precision, deploying our capabilities to deliver measurable results and competitive advantage."
      }
    ]
  },
  about: {
    title: "No BS. No bait & switch. Just strategic excellence.",
    descriptions: [
      "We're not your typical consultancy. The same senior strategists who develop your vision are the ones who oversee execution. We don't upsell services you don't need. And we're radically transparent about everything we do.",
      "With 20+ years leading transformative projects for industry leaders, we bring enterprise-level thinking to every engagement. Your business isn't generic—your marketing strategy shouldn't be either."
    ],
    image: "/images/about-pattern.svg"
  },
  contact: {
    title: "Ready to illuminate your potential?",
    subtitle: "Let's discuss your transformation. Share your challenges and goals."
  }
};

export default function Home() {
  useEffect(() => {
    // Header scroll effect
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (header) {
        if (window.scrollY > 50) {
          header.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        } else {
          header.style.boxShadow = 'none';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation data={staticPageData.navigation} />
      <Hero data={staticPageData.hero} />
      <Services data={staticPageData.services} />
      <Process data={staticPageData.process} />
      <About data={staticPageData.about} />
      <Contact data={staticPageData.contact} />
      <Footer />
    </div>
  );
}