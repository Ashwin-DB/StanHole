import React from "react";
import AnimatedItem from "./AnimatedItem";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Ensure Font Awesome is imported

function Contact() {
  return (
    <section id="contact">
      <div className="container contact-card">

        <AnimatedItem className="contact-info animate-item">
          <h2>Contact Us</h2>
          <p><strong>Head Office:</strong> 61 Bergrivier Drive, Terenure, Kempton Park, 1619</p>
          <p><strong>Branches:</strong></p>
          <ul>
            <li>10074 Ditloung, Lephalele</li>
            <li>902 Makgodu, Moletji, Polokwane</li>
            <li>19 Sagittarius Avenue, Witbank</li>
            <li>8989 Tamboville, Pretoria</li>
          </ul>
          <p><i className="fas fa-mobile-alt"></i> Cell: <a href="tel:+27837360290">+27 83 736 0290</a></p>
          <p><i className="fas fa-phone"></i> Phone: <a href="tel:+27795022030">+27 79 502 2030</a></p>
          <p><i className="fas fa-envelope"></i> Email: <a href="mailto:info@stanhole.co.za">info@stanhole.co.za</a></p>
        </AnimatedItem>

        <AnimatedItem className="contact-map animate-item" style={{ transitionDelay: "0.2s" }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.5605264373266!2d28.2214!3d-26.0804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9512a5ab1f5a73%3A0x8a4d58e34bdf0a3c!2s61%20Bergrivier%20Dr%2C%20Terenure%2C%20Kempton%20Park%2C%201619%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1693838472005!5m2!1sen!2sza&t=k" 
            width="100%" 
            height="350" 
            style={{ border: 0 }}
            allowFullScreen="" 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </AnimatedItem>

      </div>
    </section>
  );
}

export default Contact;
