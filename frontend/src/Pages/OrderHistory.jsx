import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("orders")) || [];

    setOrders(data);
  }, []);

  return (
    <div
      style={{
        padding: "40px",
        minHeight: "100vh",
        background: "#fdf6f0",
      }}
    >
      <button
        onClick={() => navigate(-1)}
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "10px",
          marginBottom: "20px",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>

      <h1>📦 My Orders</h1>

      {orders.length === 0 ? (
        <h2>No Orders Yet 😢</h2>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "15px",
              marginTop: "20px",
            }}
          >
            <h3>Order ID: {order.id}</h3>

            <p>Date: {order.date}</p>

            <p>
              Total: ₹{order.total}
            </p>

            <h4>Products:</h4>

            {order.items.map((item, index) => (
              <p key={index}>
                {item.name} × {item.qty || 1}
              </p>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default OrderHistory;