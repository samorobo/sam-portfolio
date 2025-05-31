import React from 'react';
import './CertificateMarquee.css';

const CertificateMarquee = ({ certificates }) => {
  return (
    <section className="certification-section">
      <h1 className="sectionTitle">Certifications</h1>
      <div className="marquee">
        <div className="marquee-content">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-item">
              <img src={cert.image} alt={cert.name} />
              <p>{cert.name}</p>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {certificates.map((cert, index) => (
            <div key={`dup-${index}`} className="certificate-item">
              <img src={cert.image} alt={cert.name} />
              <p>{cert.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateMarquee;
