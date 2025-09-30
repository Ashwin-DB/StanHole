import React from "react";
import AboutImage from "../assets/IMG_5732.jpg";
import AnimatedItem from "./AnimatedItem";

function About() {
  return (
    <section id="about">
      <div className="container">
        {/* Section Title */}
        <AnimatedItem className="animate-item">
          <h1 className="section-title-about">About Stanhole Trading & Projects</h1>
        </AnimatedItem>

        <div className="about-top-image">
          {/* Optional image animation */}
          <AnimatedItem className="animate-item">
            {/* <img src={AboutImage} alt="About Stanhole Trading & Projects" /> */}
          </AnimatedItem>

          <div className="about-cards">
            {/* About Us Card */}
            <div className="about-card">
              <AnimatedItem className="animate-item" style={{ transitionDelay: "0.1s" }}>
                <h2><i className="fa-solid fa-file"></i> About Us</h2>
              </AnimatedItem>
              <AnimatedItem className="animate-item" style={{ transitionDelay: "0.15s" }}>
                <p>
                  Stanhole Trading and Projects (Pty) Ltd is a 100% black-owned South African company specializing in low, medium, and high voltage electrical systems. They focus on electrical cabling, stringing, earthing, and equipment installation, with principals involved in every project to ensure efficient, cost-effective outcomes. Their qualified staff operate under an ISO 9000 quality system and also provide routine maintenance on existing electrical installations.
                </p>
              </AnimatedItem>
            </div>

            {/* Mission Card */}
            <div className="about-card">
              <AnimatedItem className="animate-item" style={{ transitionDelay: "0.2s" }}>
                <h2><i className="fa-solid fa-bullseye"></i> Mission</h2>
              </AnimatedItem>
              <AnimatedItem className="animate-item" style={{ transitionDelay: "0.25s" }}>
                <p>
                  To be a leading provider of energy generation, maintenance, and other services, serving individuals and business communities efficiently while leveraging our highly professional staff for industrial and corporate electrical solutions.
                </p>
              </AnimatedItem>
            </div>

            {/* Vision Card */}
            <div className="about-card">
              <AnimatedItem className="animate-item" style={{ transitionDelay: "0.3s" }}>
                <h2><i className="fa-solid fa-eye"></i> Vision</h2>
              </AnimatedItem>
              <AnimatedItem className="animate-item" style={{ transitionDelay: "0.35s" }}>
                <p>
                  To exceed customer expectations and provide the highest level of service to suppliers and clients while sustaining long-term relationships.
                </p>
              </AnimatedItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
