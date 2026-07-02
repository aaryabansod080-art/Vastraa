import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const placeOrder = () => {
    if (!form.name || !form.address || !form.phone || !form.pincode) {
      alert("Please fill all fields");
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
      id: Date.now(),
      user: form,
      items: cart,
      total: cart.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
      ),
      date: new Date().toLocaleString(),
    };

    orders.push(newOrder);

    localStorage.setItem("orders", JSON.stringify(orders));
    localStorage.removeItem("cart");

    navigate("/success");
  };

  return (
    <div
      style={{
        padding: "50px",
        minHeight: "100vh",
        background: "#fdf6f0",
        background: "linear-gradient(to bottom, #fdf6f0, #fff)"
      }}
    >
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: "20px",
          padding: "10px 20px",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>

      <h1 style={{ marginBottom: "30px" }}>
        Checkout
      </h1>

      <div
        style={{
          maxWidth: "500px",
          background: "white",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={form.pincode}
          onChange={handleChange}
          style={inputStyle}
        />

        <button
          onClick={placeOrder}
          style={{
            width: "100%",
            padding: "15px",
            background: "black",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  fontSize: "16px",
};

export default Checkout;