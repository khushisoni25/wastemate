import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      {/* Banner Section */}
      <section className="banner">
        <h1>Reduce Waste, Share Food</h1>
        <p>Join us in the movement to minimize food waste and help communities.</p>
      </section>

      {/* Cards Section */}
      <section className="card-container">
        <div className="card">
          <img src="rescue.png" /> 
          <h3>Rescue Food</h3>
          <p>Find surplus food at discounted prices.</p>
        </div>
        <div className="card">
        <img src="donate.jpg" /> 
          <h3>Donate Excess</h3>
          <p>Share excess food with those in need.</p>
        </div>
        <div className="card">
        <img src="eco.jpg" /> 
          <h3>Eco-Friendly</h3>
          <p>Reduce food waste and help the planet.</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What People Say</h2>
        <div className="testimonial">
          <p>"WasteMate helped me save money on groceries!" - Sarah</p>
        </div>
        <div className="testimonial">
          <p>"Great initiative! I love donating excess food easily." - Mark</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
