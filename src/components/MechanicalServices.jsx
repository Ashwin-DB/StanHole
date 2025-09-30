import React from "react";
import AnimatedItem from "./AnimatedItem";
import "@fortawesome/fontawesome-free/css/all.min.css"; // make sure Font Awesome is imported

function MechanicalServices() {
  const services = [
    { icon: "fas fa-fan", name: "HVAC" },
    { icon: "fas fa-snowflake", name: "Air Conditioning" },
    { icon: "fas fa-wind", name: "Heat & Ventilation" },
    { icon: "fas fa-water", name: "Fluid Mechanics" },
    { icon: "fas fa-cogs", name: "Pumps & Motors" },
    { icon: "fas fa-industry", name: "Crushers & Feeders" },
    { icon: "fas fa-layer-group", name: "Vibrating Screens" },
  ];

  return (
    <section id="mechanical-services">
      <AnimatedItem className="animate-item">
        <h3 className="section-subtitle">
          Mechanical (Supply, Maintenance & Installation)
        </h3>
      </AnimatedItem>

      <div className="service-icons">
        {services.map((service, index) => (
          <AnimatedItem
            key={index}
            className="service-item animate-item"
            style={{ transitionDelay: `${index * 0.05}s` }}
          >
            <div className="icon-circle">
              <i className={service.icon}></i>
            </div>
            <p>{service.name}</p>
          </AnimatedItem>
        ))}
      </div>
    </section>
  );
}

export default MechanicalServices;
