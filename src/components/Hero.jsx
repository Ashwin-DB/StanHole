import React from "react";
import AnimatedItem from "./AnimatedItem";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <AnimatedItem>
          <h1 className="hero-title">Welcome to Stanhole Trading & Projects</h1>
        </AnimatedItem>
        <AnimatedItem>
          <p className="hero-text">
            Stanhole Trading and Projects (Pty) Ltd is a black-owned South African company
            specializing in low, medium, and high voltage systems, electrical cabling,
            stringing, earthing, and equipment installation.
          </p>
        </AnimatedItem>

        {/* Buttons */}
        <AnimatedItem>
          <div className="hero-buttons">
            <a href="#services" className="hero-btn">Our Services</a>
            <a href="#contact" className="hero-btn hero-btn-secondary">Contact Us</a>
          </div>
        </AnimatedItem>
      </div>
    </section>
  );
}

export default Hero;
