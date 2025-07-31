import React from 'react';

function ClientsPerformance() {
  return (
    <>
      {/* Key Clients Section */}
      <section className="content-section clients-section">
        <div className="section-content">
          <h3>KEY CLIENTS</h3>
          <p className="section-description">
            QPC serves early to mid-stage organizations that rely heavily on SaaS tools but lack the internal IT 
            capacity to integrate them. Our ideal clients range from 20 to 1,000 employees, and include:
          </p>
          <ul className="clients-list">
            <li>Professional Services Firms (legal, consulting, marketing)</li>
            <li>Healthcare IT Startups and Medical Service Networks</li>
            <li>Government Contractors and Public Sector Non-Profits</li>
            <li>Logistics and Fulfillment Companies</li>
            <li>Manufacturers navigating digital transformation</li>
          </ul>
        </div>
      </section>

      {/* Past Performance Section */}
      <section className="content-section performance-section">
        <div className="section-content">
          <h3>PAST PERFORMANCE</h3>
          <p className="section-description">
            QPC has delivered high-impact outcomes for clients across multiple industries by focusing on 
            integration, automation, and AI enablement. Select engagements include:
          </p>
          
          <div className="performance-items">
            <div className="performance-item">
              <h4>Legalese (LegalTech | SaaS Startup)</h4>
              <p><strong>Supported Legalese's successful $150K capital raise by rebuilding their investor-facing 
              product suite.</strong></p>
              <ul>
                <li>Our team redesigned the backend architecture and simplified the user experience to highlight core 
                product value and reduce onboarding friction.</li>
              </ul>
            </div>

            <div className="performance-item">
              <h4>CPM Solutions (Industrial & Safety Equipment | BPO Partner)</h4>
              <ul>
                <li>Enabled CPM Solutions to scale operations and refocus internal resources by providing a process 
                outsourcing (BPO) solution.</li>
                <li>QPC streamlined back-office operations by taking over repetitive, time-intensive tasks while ensuring 
                real-time competitiveness.</li>
              </ul>
            </div>

            <div className="performance-item">
              <h4>MA Consulting (Management Consulting | Professional Services)</h4>
              <ul>
                <li>Helped MA Consulting automate its client onboarding and service delivery processes while 
                enhancing data security and compliance.</li>
                <li>QPC modernized operations by integrating SaaS tools and implementing secure automation 
                workflows tailored to the firm's growth goals. Secured compliance and scalability.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ClientsPerformance;
