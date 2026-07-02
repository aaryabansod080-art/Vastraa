import React from "react";
import { Link } from "react-router-dom";

function Collection() {
  const collections = [
    {
      title: "Baby Collection",
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4",
    },
    {
      title: "Girls Fashion",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
    },
    {
      title: "Boys Casual",
      image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4",
    },
    {
      title: "Winter Kids Wear",
      image: "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f0f1a",
        color: "white",
        padding: "40px",
      }}
    >
      <Link to="/" style={{ color: "#b57cff", fontSize: "20px" }}>
        ← Back
      </Link>

      <h1 style={{ textAlign: "center", margin: "30px 0" }}>
        Our Collections
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "25px",
        }}
      >
        {collections.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#1c1c2e",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 8px 20px rgba(181,124,255,0.2)",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
              }}
            />
            <h2 style={{ padding: "20px", textAlign: "center" }}>
              {item.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collection;