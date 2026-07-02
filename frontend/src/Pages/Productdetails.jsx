import React from "react";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();

  const product = JSON.parse(
    localStorage.getItem("selectedProduct")
  );

  const addToCart = () => {
    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    alert("Added To Cart ✅");
  };

  if (!product) {
    return <h1>No Product Found</h1>;
  }

  return (
    <div
      style={{
        padding: "50px",
        minHeight: "100vh",
        background: "#fdf6f0"
      }}
    >
      <button
        onClick={() => navigate("/shop")}
        style={{
          padding: "10px 20px",
          marginBottom: "30px"
        }}
      >
        ← Back To Shop
      </button>

      <div
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "center"
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "400px",
            borderRadius: "20px"
          }}
        />

        <div>
          <h1>{product.name}</h1>

          <h2>₹{product.price}</h2>

          <button
            onClick={addToCart}
            style={{
              padding: "15px 30px",
              background: "black",
              color: "white",
              border: "none",
              borderRadius: "10px"
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;