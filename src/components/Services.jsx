import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import AnimatedItem from "./AnimatedItem";
import picture from '../assets/IMG_5722.jpg';

function Services() {
  const services = [
    { iconClass: "fas fa-cogs", text: "PLC Programming including SCADA, Component Supply, Installation, and Maintenance (SIEMENS, SCHNEIDER, ALLEN BRADLEY, ABB)" },
    { iconClass: "fas fa-sliders-h", text: "VSD and Soft Starter Programming and Installation" },
    { iconClass: "fas fa-tachometer-alt", text: "Sensors, Flow Meters, Scales Installation" },
    { iconClass: "fas fa-network-wired", text: "Network Communication and Automation" },
    { iconClass: "fas fa-bolt", text: "Transformer Service, Maintenance, and Installation" },
    { iconClass: "fas fa-tools", text: "Plant Maintenance and Repairs" },
    { iconClass: "fas fa-plug", text: "Switchgear Services, Inspection, and Installation" },
    { iconClass: "fas fa-building", text: "Building New Substations up to 11kV and Commissioning" },
    { iconClass: "fas fa-plug", text: "Installation and Repair of MV and LV Cables" },
    { iconClass: "fas fa-tools", text: "MCC and Substations Refurbishment" },
    { iconClass: "fas fa-fence", text: "Installation of Substation Fence" },
    { iconClass: "fas fa-city", text: "Electrification of Rural and Urban Areas" },
    { iconClass: "fas fa-school", text: "Electrification of Schools, Clinics, Offices and Hospitals" },
    { iconClass: "fas fa-bolt", text: "Connection of Prepaid and Conventional Meters" },
    { iconClass: "fas fa-battery-full", text: "Installation of Electrical Power Backup Generator and Protection" },
    { iconClass: "fas fa-file-alt", text: "Issue Electrical COC Single Phase and Three Phase" },
    { iconClass: "fas fa-tools", text: "Maintenance and Repair of All Types of Electrical Installations" },
    { iconClass: "fas fa-school", text: "Installation of School Electrical Workshops" },
    { iconClass: "fas fa-fan", text: "Air Conditioner Service, Maintenance, Repairs and Installation" },
  ];

  return (
    <section id="services">
      <div className="container service-section-card">
        <AnimatedItem className="animate-item">
          <h2 className="section-title">Products & Services</h2>
        </AnimatedItem>

        <div className="split-layout reverse">
          <div className="split-content service-list-card">
            <ul className="services-list">
              {services.map((service, index) => (
                <AnimatedItem
                  key={index}
                  className="animate-item"
                  style={{ transitionDelay: `${index * 0.05}s` }}
                >
                  <li>
                    <i className={service.iconClass}></i> {service.text}
                  </li>
                </AnimatedItem>
              ))}
            </ul>
          </div>

          <AnimatedItem className="split-image animate-item">
            <img src={picture} alt="Electrical Services" />
          </AnimatedItem>
        </div>
      </div>
    </section>
  );
}

export default Services;
