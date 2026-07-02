import { all } from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const [category, setcategory] = useState("ALL");

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("Products:", data);
        setProducts(data);
      })
      .catch((err) => console.log("Error:", err));
  }, []);

  const addToCart = (product) => {
    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existingIndex = cart.findIndex(
      (item) => item._id === product._id
    );

    if (existingIndex !== -1) {
      cart[existingIndex].qty =
        (cart[existingIndex].qty || 1) + 1;
    } else {
      cart.push({ ...product, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added to Cart 🛒");
  };

  return (
    <div
      style={{
        padding: "40px",
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom, #fdf6f0, #ffffff)",
      }}

    >
      <button
        onClick={() => navigate(-1)}
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          marginBottom: "20px",
          background: "black",
          color: "white",
        }}
      >
        ← Back
      </button>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "40px",
        }}
      >
        Kids Corner 🧸
      </h1>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "20px",
          borderRadius: "10px",
          border: "1px solid #ccc",
        }}
      />

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
          flexWrap: "wrap",
        }}
      >
        {["All", "Boys", "Girls", "Baby", "Winter"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            style={{
              padding: "10px 15px",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              background: category === cat ? "black" : "#ddd",
              color: category === cat ? "white" : "black",
            }}
          >
            {cat}
          </button>
        ))}
      </div>


      {/* DEBUG */}
      <h3>Total Products: {products.length}</h3>
      <pre>
        {JSON.stringify(products, null, 2)}
      </pre>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
        }}
      >
        {products
          .filter(
            (product) =>
              product?.name
                ?.toLowerCase()
                .includes(search.toLowerCase()) &&
              (category === "All" ||
                product?.category === category)
          )
          .map((product) => (
            <div
              key={product._id}
              style={{
                background: "white",
                borderRadius: "20px",
                padding: "20px",
                boxShadow:
                  "0 10px 25px rgba(0,0,0,0.1)",
                transition: "0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
              (e.currentTarget.style.transform =
                "scale(1.03)")
              }
              onMouseLeave={(e) =>
              (e.currentTarget.style.transform =
                "scale(1)")
              }
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "15px",
                }}
              />

              <h2>{product.name}</h2>

              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                ₹{product.price}
              </p>

              <button
                onClick={() => addToCart(product)}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "none",
                  background: "black",
                  color: "white",
                  borderRadius: "10px",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              >
                Add To Cart 🛒
              </button>

              <button
                onClick={() => {
                  localStorage.setItem(
                    "selectedProduct",
                    JSON.stringify(product)
                  );
                  navigate("/productdetail");
                }}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "none",
                  background: "#555",
                  color: "white",
                  borderRadius: "10px",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              >
                View Product 👁️
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shop;