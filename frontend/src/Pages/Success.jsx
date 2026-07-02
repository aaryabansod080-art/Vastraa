import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();

  const orderId = "ORD" + Math.floor(Math.random() * 1000000);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#fdf6f0",
        flexDirection: "column",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
          maxWidth: "500px",
        }}
      >
        <h1 style={{ fontSize: "40px" }}>🎉 Order Placed!</h1>

        <p style={{ marginTop: "15px", fontSize: "18px" }}>
          Thank you for your purchase.
        </p>

        <p style={{ marginTop: "10px" }}>
          <b>Order ID:</b> {orderId}
        </p>

        <p style={{ marginTop: "10px", color: "gray" }}>
          You will receive confirmation soon.
        </p>

        <button
          onClick={() => navigate("/")}
          style={{
            marginTop: "25px",
            padding: "12px 20px",
            border: "none",
            background: "black",
            color: "white",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;