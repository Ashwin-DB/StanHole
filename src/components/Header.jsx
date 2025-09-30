import React, { useState, useEffect } from "react";
import profilePic from '../assets/stanhole_logo.jpg';

function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Close menu on resize above 900px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) setMenuActive(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Track scroll position to set active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120; // offset for navbar height
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["home", "about", "services", "our-team", "contact"];

  return (
    <header>
      <nav id="navbar">
        <div className="logo-container">
          <a href="#home">
            <img src={profilePic} alt="logo" className="logo-img" />
          </a>
          <a href="#home" className="logo">STANHOLE TRADING & PROJECTS</a>
        </div>

        <div
          className={`hamburger ${menuActive ? "active" : ""}`}
          onClick={() => setMenuActive(!menuActive)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-menu ${menuActive ? "active" : ""}`}>
          {navItems.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={activeSection === section ? "active" : ""}
                onClick={() => setMenuActive(false)} // closes mobile menu on click
              >
                {section === "our-team" ? "OurTeam" : section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
