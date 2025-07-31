import React, { useEffect } from 'react';
import './index.css';
import qpcLogo from './qpc_logojpg.jpg';

function App() {
  useEffect(() => {
    // Handle scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all content sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => observer.observe(section));

    // Parallax effect for hero section
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector('.hero-section');
      if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="parallax-container">
      {/* Hero Section with Parallax Background */}
      <section className="hero-section parallax-layer">
        <div className="hero-content">
          <div className="logo-container">
            <img src={qpcLogo} alt="QPC Logo" className="qpc-logo" />
            <div className="company-title">
              <h1>QUANTUM PULSE</h1>
              <h2>CONSULTING</h2>
            </div>
          </div>
          <h2 className="capabilities-title">CAPABILITIES STATEMENT</h2>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="content-section overview-section">
        <div className="section-content">
          <h3>COMPANY OVERVIEW</h3>
          <p>
            Quantum Pulse Consulting (QPC) delivers innovative, mission-aligned digital solutions tailored for government and enterprise environments. Specializing in advanced technology integration, AI-driven systems, and secure infrastructure design, QPC helps organizations navigate complex digital transformations with precision and agility.
          </p>
        </div>
      </section>

      {/* Corporate Data Section */}
      <section className="content-section corporate-section">
        <div className="section-content">
          <h3>CORPORATE DATA</h3>
          <div className="corporate-data">
            <div className="data-item">
              <strong>Company Name:</strong> Quantum Pulse Consulting L.L.C
            </div>
            <div className="data-item">
              <strong>Address:</strong> 4303 Harvard Rd, Detroit, MI 48224
            </div>
            <div className="data-item">
              <strong>UEI:</strong> F3NAFB89CN78
            </div>
            <div className="data-item">
              <strong>CAGE Code:</strong> 13D58
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="content-section differentiators-section">
        <div className="section-content">
          <h3>DIFFERENTIATORS</h3>
          <ul className="differentiators-list">
            <li>Agile and adaptable team focused on scalable, future-ready solutions</li>
            <li>Deep understanding of compliance frameworks required in federal contracts</li>
            <li>Hybrid consulting model with hands-on engineering and strategic guidance</li>
            <li>Proven ability to operate lean while delivering enterprise-grade systems</li>
          </ul>
        </div>
      </section>

      {/* Core Competencies Section */}
      <section className="content-section competencies-section">
        <div className="section-content">
          <h3>CORE COMPETENCIES</h3>
          <ul className="competencies-list">
            <li>Custom software development and system design</li>
            <li>Cloud architecture and migration support (AWS, Azure, GCP)</li>
            <li>Cybersecurity consulting and compliance alignment (NIST, FedRAMP)</li>
            <li>AI/ML integration for intelligent automation and data insights</li>
            <li>Full-stack web and mobile application development</li>
            <li>IT infrastructure support and digital modernization services</li>
          </ul>
        </div>
      </section>

      {/* NAICS Codes Section */}
      <section className="content-section naics-section">
        <div className="section-content">
          <h3>NAICS CODES</h3>
          <div className="naics-grid">
            <div className="naics-item">
              <strong>541512</strong> – Computer Systems Design Services
            </div>
            <div className="naics-item">
              <strong>518210</strong> – Computing Infrastructure Providers, Data Processing, Web Hosting, and Related Services
            </div>
            <div className="naics-item">
              <strong>541330</strong> – Engineering Services
            </div>
            <div className="naics-item">
              <strong>541430</strong> – Graphic Design Services
            </div>
            <div className="naics-item">
              <strong>541511</strong> – Custom Computer Programming Services
            </div>
            <div className="naics-item">
              <strong>541513</strong> – Computer Facilities Management Services
            </div>
            <div className="naics-item">
              <strong>541519</strong> – Other Computer Related Services
            </div>
            <div className="naics-item">
              <strong>541611</strong> – Administrative Management and General Management Consulting Services
            </div>
            <div className="naics-item">
              <strong>541618</strong> – Other Management Consulting Services
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="content-section contact-section">
        <div className="section-content">
          <h3>POINT OF CONTACT</h3>
          <div className="contact-info">
            <div className="contact-person">
              <h4>Rasheed Ali</h4>
              <p>Managing Director</p>
            </div>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <a href="mailto:gov.contracts@qpc.tech">gov.contracts@qpulse.tech</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <a href="tel:+17342199062">(734) 219-9062</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🌐</span>
                <a href="https://www.qpulse.tech" target="_blank" rel="noopener noreferrer">www.qpulse.tech</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <div className="footer-content">
          <div className="footer-contact">
            <p>+1 734 219 9062</p>
            <p>inquire@qpulse.tech</p>
          </div>
          <div className="footer-social">
            <p>quantumpulseconsulting</p>
          </div>
          <div className="footer-website">
            <p>www.qpulse.tech</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
