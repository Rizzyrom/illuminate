"use client";
import { useState } from "react";

interface ContactProps {
  data: {
    title: string;
    subtitle: string;
  };
}

export default function Contact({ data }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    website: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message. We'll be in touch soon.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-content">
          <h2 className="contact-title">
            {data.title.split(' ').map((word, index, words) => {
              if (word === 'potential?' && index === words.length - 1) {
                return (
                  <span key={index}>
                    <br />
                    {word}
                  </span>
                );
              }
              return word + ' ';
            })}
          </h2>
          <p className="contact-subtitle">
            {data.subtitle}
          </p>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="form-input" 
                  placeholder="Your name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="form-input" 
                  placeholder="your@email.com" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="company">Company</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  className="form-input" 
                  placeholder="Company name" 
                  value={formData.company}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="phone">Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  className="form-input" 
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="website">Website</label>
                <input 
                  type="url" 
                  id="website" 
                  name="website" 
                  className="form-input" 
                  placeholder="https://your-website.com"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="budget">Budget Range</label>
                <select 
                  id="budget" 
                  name="budget" 
                  className="form-input"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="">Select budget</option>
                  <option value="50k-100k">$50K - $100K</option>
                  <option value="100k-250k">$100K - $250K</option>
                  <option value="250k-500k">$250K - $500K</option>
                  <option value="500k+">$500K+</option>
                </select>
              </div>
            </div>
            
            <div className="form-row full-width">
              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  className="form-textarea" 
                  placeholder="Tell us about your project and how we can help illuminate your path to success" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-buttons">
              <button type="submit" className="form-submit">Send Message</button>
              <span className="form-note">We&apos;ll respond within 24 hours</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}