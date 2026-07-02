import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f0f1a",
        color: "white",
        padding: "40px",
      }}
    >
      {/* Back Button */}
      <Link
        to="/"
        style={{
          color: "#b57cff",
          fontSize: "20px",
          textDecoration: "none",
        }}
      >
        ← Back
      </Link>

      {/* Hero Section */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <img
          src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9"
          alt="Kids Fashion"
          style={{
            width: "100%",
            maxHeight: "350px",
            objectFit: "cover",
            borderRadius: "20px",
          }}
        />
        <h1 style={{ marginTop: "20px", fontSize: "42px" }}>
          About Vastraa Kids
        </h1>
        <p style={{ color: "#ccc", fontSize: "18px" }}>
          Premium Fashion for Little Stars ✨
        </p>
      </div>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "25px",
          marginTop: "50px",
        }}
      >
        <div
          style={{
            background: "#1c1c2e",
            padding: "25px",
            borderRadius: "20px",
          }}
        >
          <h2 style={{ color: "#b57cff" }}>Our Mission</h2>
          <p>
            Stylish, comfortable and affordable clothing designed specially for
            kids.
          </p>
        </div>

        <div
          style={{
            background: "#1c1c2e",
            padding: "25px",
            borderRadius: "20px",
          }}
        >
          <h2 style={{ color: "#b57cff" }}>Quality First</h2>
          <p>
            Soft premium fabrics that keep children comfortable all day long.
          </p>
        </div>

        <div
          style={{
            background: "#1c1c2e",
            padding: "25px",
            borderRadius: "20px",
          }}
        >
          <h2 style={{ color: "#b57cff" }}>Trendy Designs</h2>
          <p>
            Cute and modern collections crafted for every special occasion.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        style={{
          marginTop: "50px",
          background: "#1c1c2e",
          padding: "30px",
          borderRadius: "20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#b57cff" }}>Why Choose Us?</h2>
        <p style={{ fontSize: "17px", color: "#ddd" }}>
          At Vastraa Kids, we blend fashion with comfort to create outfits that
          make every child shine with confidence.
        </p>
      </div>
    </div>
  );
}

export default About;