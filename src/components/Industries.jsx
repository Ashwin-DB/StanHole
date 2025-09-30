import React from "react";
import AnimatedItem from "./AnimatedItem";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Ensure Font Awesome is imported

function Industries() {
  const industries = [
    { icon: "fas fa-hard-hat", name: "Mining" },
    { icon: "fas fa-mountain", name: "Quarries" },
    { icon: "fas fa-industry", name: "Cement" },
    { icon: "fas fa-truck", name: "Ready Mix" },
    { icon: "fas fa-building", name: "Commercial" },
    { icon: "fas fa-industry", name: "Industrial" },
    { icon: "fas fa-home", name: "Residential" },
  ];

  return (
    <section id="industries">
      <div className="container">
        <AnimatedItem className="section-title animate-item">
          <h2>Industries Served</h2>
        </AnimatedItem>

        <div className="industry-tiles">
          {industries.map((industry, index) => (
            <AnimatedItem
              key={index}
              className="industry-card animate-item"
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              <i className={industry.icon}></i>
              <h4>{industry.name}</h4>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;
