import React from "react";
import AnimatedItem from "./AnimatedItem";
import '@fortawesome/fontawesome-free/css/all.min.css'; // make sure Font Awesome CSS is imported

function InfoCards() {
  const companyValues = [
    "Honesty",
    "Respect",
    "Trust & Client Satisfaction",
    "Equal Opportunities",
    "Community Involvement",
    "Women Empowerment",
    "Integrity",
  ];

  const objectives = [
    "Form strategic alliances to promote Stanhole Trading & Projects.",
    "Provide high-quality services while remaining profitable.",
    "Improve employee performance through training and professional development.",
    "Ensure quality workmanship and continuous improvement.",
    "Comply with all relevant laws.",
  ];

  const shortTermGoals = [
    "Be the preferred choice for service requirements.",
    "Provide efficient and timely services.",
    "Adapt to changing business requirements.",
    "Offer tailor-made, cost-effective tour packages.",
  ];

  const longTermGoals = [
    "Maintain current status while growing profitably.",
    "Create job opportunities for South African communities.",
    "Ensure compliance with employment equity and statutory acts.",
  ];

  const renderList = (items) =>
    items.map((item, index) => (
      <AnimatedItem
        key={index}
        className="animate-item"
        style={{ transitionDelay: `${index * 0.1}s` }}
      >
        <li>{item}</li>
      </AnimatedItem>
    ));

  return (
    <section id="info-cards">
      <div className="container big-card">
        <div className="card-grid">

          {/* Company Values */}
          <AnimatedItem className="info-card values-card">
            <AnimatedItem className="animate-item">
              <h3>
                <i className="fas fa-heart"></i> Company Values
              </h3>
            </AnimatedItem>
            <ul>{renderList(companyValues)}</ul>
            <AnimatedItem className="animate-item" style={{ transitionDelay: `${companyValues.length * 0.1}s` }}>
              <p>
                Our goal is to serve all cultures and be recognized as a premier provider within our provincial radius.
              </p>
            </AnimatedItem>
          </AnimatedItem>

          {/* Objectives */}
          <AnimatedItem className="info-card objectives-card">
            <AnimatedItem className="animate-item">
              <h3>
                <i className="fas fa-bullseye"></i> Objectives
              </h3>
            </AnimatedItem>
            <ul>{renderList(objectives)}</ul>
          </AnimatedItem>

          {/* Short-Term Goals */}
          <AnimatedItem className="info-card short-term-card">
            <AnimatedItem className="animate-item">
              <h3>
                <i className="fas fa-road"></i> Short-Term Goals
              </h3>
            </AnimatedItem>
            <ul>{renderList(shortTermGoals)}</ul>
          </AnimatedItem>

          {/* Long-Term Goals */}
          <AnimatedItem className="info-card long-term-card">
            <AnimatedItem className="animate-item">
              <h3>
                <i className="fas fa-chart-line"></i> Long-Term Goals
              </h3>
            </AnimatedItem>
            <ul>{renderList(longTermGoals)}</ul>
          </AnimatedItem>

        </div>
      </div>
    </section>
  );
}

export default InfoCards;
