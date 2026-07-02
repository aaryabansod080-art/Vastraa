import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f0f1a",
        color: "white",
        padding: "40px",
      }}
    >
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

      <div
        style={{
          maxWidth: "800px",
          margin: "50px auto",
          background: "#1c1c2e",
          padding: "40px",
          borderRadius: "25px",
          boxShadow: "0 8px 20px rgba(181,124,255,0.2)",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#b57cff" }}>
          Contact Vastraa Kids
        </h1>

        <p style={{ textAlign: "center", color: "#ccc" }}>
          We'd love to hear from you ✨
        </p>

        <div style={{ marginTop: "40px", lineHeight: "2" }}>
          <h3>📍 Address</h3>
          <p>Nagpur, Maharashtra, India</p>

          <h3>📞 Phone</h3>
          <p>+91 9373360649</p>

          <h3>📧 Email</h3>
          <p>support@vastraakids.com</p>

          <h3>🕒 Working Hours</h3>
          <p>Mon - Sat : 10 AM - 8 PM</p>
        </div>

        <button
          style={{
            width: "100%",
            marginTop: "30px",
            padding: "15px",
            background: "#b57cff",
            border: "none",
            borderRadius: "12px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </div>
    </div>
  );
}

export default Contact;