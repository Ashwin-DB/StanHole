import React from "react";
import AnimatedItem from "./AnimatedItem";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome CSS

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-container">

        {/* Facility Management */}
        <AnimatedItem className="footer-section">
          <h3>Facility Management</h3>
          <p><strong>Head Office:</strong> 61 Bergrivier Drive, Terenure, Kempton Park, 1619</p>
          <p><strong>Branches:</strong></p>
          <ul>
            <li>10074 Ditloung, Lephalele</li>
            <li>902 Makgodu, Moletji, Polokwane</li>
            <li>19 Sagittarius Avenue, Witbank</li>
            <li>8989 Tamboville, Pretoria</li>
          </ul>
        </AnimatedItem>

        {/* Contact Info */}
        <AnimatedItem className="footer-section">
          <h3>Contact Us</h3>
          <p>
            <i className="fas fa-mobile-alt"></i> Cell: 
            <a href="tel:+27837360290"> +27 83 736 0290</a>
          </p>
          <p>
            <i className="fas fa-phone"></i> Phone: 
            <a href="tel:+27795022030"> +27 79 502 2030</a>
          </p>
          <p>
            <i className="fas fa-envelope"></i> Email: 
            <a href="mailto:info@stanhole.co.za"> info@stanhole.co.za</a>
          </p>
        </AnimatedItem>

        {/* Quick Links */}
        <AnimatedItem className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#industries">Industries</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </AnimatedItem>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025 Stanhole Trading & Projects (Pty) Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
