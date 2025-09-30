import React from "react";
import AnimatedItem from "./AnimatedItem";
import "@fortawesome/fontawesome-free/css/all.min.css";

import placeholderImg from "../assets/profile_placeholder.png";

function OurTeam() {
  const team = [
    {
      role: "Shareholder & Management",
      name: "Stanley Maphuti Mashita",
      qualifications: [
        "National Diploma: Electrical Engineering (VUT)",
        "N4 Mechanical Engineering",
        "Section 13 Trade Certificate (MQA) - Electrician",
        "Wireman’s License (Installation Electrician Three Phase)",
        "HT (Medium Voltage) Certificate",
        "SDP – First Line Managing Skills Programme",
        "Occupational Health and Safety Activities Certificate",
        "PLC Maintenance Service 1, 2 & 3",
      ],
      equity: "100%",
      race: "African",
      gender: "Male",
      age: 35,
      image: placeholderImg,
    },
    {
      role: "Sub-Contractor (Engineer)",
      name: "John Tebe Mokoena",
      qualifications: [
        "National Senior Certificate",
        "BSc (Elec-Mech) Eng, University of Cape Town (Pr.Eng 2003)",
        "Diploma Project Management: Damelin",
        "ECSA Registered",
      ],
      equity: "100%",
      race: "African",
      gender: "Male",
      image: placeholderImg,
    },
  ];

  return (
    <section id="our-team">
      <div className="container">
        <AnimatedItem>
          <h2 className="section-title">Our Team</h2>
        </AnimatedItem>

        <div className="team-grid">
          {team.map((member, index) => (
            <AnimatedItem
              key={index}
              className="team-card animate-item"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <AnimatedItem className="animate-item">
                <div className="team-photo">
                  <img src={member.image} alt={member.name} />
                </div>
              </AnimatedItem>

              <AnimatedItem className="animate-item" style={{ transitionDelay: "0.05s" }}>
                <h3>{member.role}</h3>
              </AnimatedItem>

              <AnimatedItem className="animate-item" style={{ transitionDelay: "0.1s" }}>
                <h4>{member.name}</h4>
              </AnimatedItem>

              <AnimatedItem className="animate-item" style={{ transitionDelay: "0.15s" }}>
                <ul>
                  {member.qualifications.map((q, i) => (
                    <AnimatedItem key={i} className="animate-item" style={{ transitionDelay: `${i * 0.05}s` }}>
                      <li>{q}</li>
                    </AnimatedItem>
                  ))}
                </ul>
              </AnimatedItem>

              
            </AnimatedItem>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
