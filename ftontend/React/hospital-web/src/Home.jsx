import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">AFS</div>

        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/doctors">Doctors</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>AFS Specialized Eye Care Center</h1>
        <p>Quality Eye Care for Everyone</p>

        <button className="btn">
          Book Appointment
        </button>
      </section>

      {/* Features */}
      <section className="features">
        <div className="feature-card">
          <h3>👁 Eye Care</h3>
        </div>

        <div className="feature-card">
          <h3>👨‍⚕️ Specialists</h3>
        </div>

        <div className="feature-card">
          <h3>🚑 Emergency</h3>
        </div>
      </section>

      {/* Services */}
      <section className="services">
        <h2>Our Services</h2>

        <div className="service-container">
          <div className="service-card">Eye Exam</div>
          <div className="service-card">Cataract</div>
          <div className="service-card">Glaucoma</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          © 2026 AFS Specialized Eye Care Center
        </p>
      </footer>
    </div>
  );
}

export default Home;