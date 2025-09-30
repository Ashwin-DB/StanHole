import React from "react";

function FloatingActionBar() {
  return (
    <div className="floating-action-bar">
      <a href="#home" className="fab-icon arrow-up">
        <i className="fa-solid fa-arrow-up"></i>
      </a>
      <a href="tel:+27837360290" className="fab-icon phone">
        <i className="fa-solid fa-phone"></i>
      </a>
      <a href="mailto:info@stanhole.co.za" className="fab-icon email">
        <i className="fa-regular fa-envelope"></i>
      </a>
    </div>
  );
}

export default FloatingActionBar;
