import React from "react";
import "./About.css";
import bannerImage from "./images/banner.jpg";
import teamMember1 from "./images/team1.jpg";
import teamMember2 from "./images/team2.jpg";
import teamMember3 from "./images/team3.jpg";

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={bannerImage} alt="About Us" className="hero-image" />
        <h1>About Us</h1>
      </div>

      {/* About Section */}
      <div className="about-content">
        <h2>Our Mission</h2>
        <p>
          We strive to create innovative solutions that improve lives and drive
          progress. Our team is dedicated to delivering high-quality products
          and services that make a difference.
        </p>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src={teamMember1} alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src={teamMember2} alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Lead Developer</p>
          </div>
          <div className="team-member">
            <img src={teamMember3} alt="Team Member 3" />
            <h3>Michael Johnson</h3>
            <p>UX Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
