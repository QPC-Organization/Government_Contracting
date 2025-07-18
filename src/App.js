import React from 'react';
import './index.css';
import qpcLogo from './qpc_logojpg.jpg';

const scrollToSection = (e, id) => {
  e.preventDefault();
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

function App() {
  return (
    <>
      <header>
        <div className="container header-flex">
          <div className="logo-title">
            <img src={qpcLogo} alt="QPC Logo" className="qpc-logo" />
            <a href="https://www.qpulse.tech" target="_blank" rel="noopener noreferrer" className="company-name">
              Quantum Pulse Consulting
            </a>
          </div>
          <nav>
            <ul>
              <li><a href="#about" onClick={e => scrollToSection(e, 'about')}>About</a></li>
              <li><a href="#competencies" onClick={e => scrollToSection(e, 'competencies')}>Core Competencies</a></li>
              <li><a href="#differentiators" onClick={e => scrollToSection(e, 'differentiators')}>Differentiators</a></li>
              <li><a href="#naics" onClick={e => scrollToSection(e, 'naics')}>NAICS Codes</a></li>
              <li><a href="#contact" onClick={e => scrollToSection(e, 'contact')}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section id="about" className="section">
          <div className="container">
            <h2>About QPC</h2>
            <p>
              Quantum Pulse Consulting (QPC) delivers innovative, mission-aligned digital solutions tailored for government and enterprise environments. Specializing in advanced technology integration, AI-driven systems, and secure infrastructure design, QPC helps organizations navigate complex digital transformations with precision and agility.
            </p>
            <div className="corporate-data">
              <h3>Corporate Data</h3>
              <ul>
                <li><strong>Company:</strong> Quantum Pulse Consulting L.L.C</li>
                <li><strong>Address:</strong> 4303 Harvard Rd, Detroit, MI 48224</li>
                <li><strong>UEI:</strong> F3NAFB89CN78</li>
                <li><strong>CAGE Code:</strong> 13D58</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="competencies" className="section alt">
          <div className="container">
            <h2>Core Competencies</h2>
            <ul className="competencies-list">
              <li>Custom software development and system design</li>
              <li>Cloud architecture and migration support (AWS, Azure, GCP)</li>
              <li>Cybersecurity consulting and compliance alignment (NIST, FedRAMP)</li>
              <li>AI integration/Creation (Like what we're doing with legal ease)</li>
              <li>DevOps &amp; Infrastructure Automation</li>
              <li>Data Analytics &amp; Business Intelligence</li>
              <li>Application Modernization &amp; Legacy Migration</li>
              <li>AI/ML integration for intelligent automation and data insights</li>
              <li>Full-stack web and mobile application development</li>
              <li>IT infrastructure support and digital modernization services</li>
            </ul>
          </div>
        </section>
        <section id="differentiators" className="section">
          <div className="container">
            <h2>What Sets Us Apart</h2>
            <ul className="differentiators-list">
              <li>Agile and adaptable team focused on scalable, future-ready solutions</li>
              <li>Deep understanding of compliance frameworks required in federal contracts</li>
              <li>Hybrid consulting model with hands-on engineering and strategic guidance</li>
              <li>Proven ability to operate lean while delivering enterprise-grade systems</li>
              <li>Client-Centric, Outcome-Driven Culture</li>
            </ul>
          </div>
        </section>
        <section id="naics" className="section alt">
          <div className="container">
            <h2>NAICS Codes</h2>
            <ul className="naics-list">
              <li>541512 – Computer Systems Design Services</li>
              <li>518210 – Computing Infrastructure Providers, Data Processing, Web Hosting, and Related Services</li>
              <li>541330 – Engineering Services</li>
              <li>541430 – Graphic Design Services</li>
              <li>541511 – Custom Computer Programming Services</li>
              <li>541513 – Computer Facilities Management Services</li>
              <li>541519 – Other Computer Related Services</li>
              <li>541611 – Administrative Management and General Management Consulting Services</li>
              <li>541618 – Other Management Consulting Services</li>
            </ul>
          </div>
        </section>
        <section id="contact" className="section contact-section">
          <div className="container">
            <h2>Contact</h2>
            <ul className="contact-list">
              <li><strong>Point of Contact:</strong> Rasheed Ali, Managing Director</li>
              <li><strong>Email:</strong> <a href="mailto:gov.contracts@qpc.tech">gov.contracts@qpc.tech</a></li>
              <li><strong>Phone:</strong> <a href="tel:+17342199062">(734) 219-9062</a></li>
              <li><strong>Website:</strong> <a href="https://www.qpulse.tech" target="_blank" rel="noopener noreferrer">www.qpulse.tech</a></li>
            </ul>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2024 Quantum Pulse Consulting L.L.C. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
