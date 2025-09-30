import React from "react";
import AnimatedItem from "./AnimatedItem";
import edza from '../assets/edza.webp';
import afrisam from '../assets/afrisam.jpg';
import mca from '../assets/mca.png';
import oncology from '../assets/oncology_clinic.png';
import dolomite from '../assets/dolomite.png';
import gauteng_dep from '../assets/gauteng_dept.jpg';

function Clients() {
  const clients = [
    afrisam,
    dolomite,
    mca,
    oncology,
    edza,
    gauteng_dep,
  ];

  return (
    <section id="clients">
      <div className="container">
        <AnimatedItem className="animate-item">
          <h2 className="section-title">Clients & Projects</h2>
        </AnimatedItem>

        <div className="clients-grid">
          {clients.map((image, index) => (
            <AnimatedItem
              key={index}
              className="client-card animate-item"
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              <img src={image} alt={`Client ${index + 1}`} />
            </AnimatedItem>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
