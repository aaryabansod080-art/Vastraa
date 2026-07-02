import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);

  // 🔁 Load cart from localStorage
  useEffect(() => {
    const storedCart =
      JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  // 🔁 Sync helper
  const updateCart = (updatedCart) => {
    setCartItems(updatedCart);
    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  // ❌ Remove item
  const removeItem = (index) => {
    const updated = cartItems.filter(
      (_, i) => i !== index
    );
    updateCart(updated);
  };

  // ➕ Increase qty
  const increaseQty = (index) => {
    const updated = [...cartItems];
    updated[index].qty = (updated[index].qty || 1) + 1;
    updateCart(updated);
  };

  // ➖ Decrease qty
  const decreaseQty = (index) => {
    const updated = [...cartItems];

    if ((updated[index].qty || 1) > 1) {
      updated[index].qty -= 1;
      updateCart(updated);
    }
  };

  // 💰 Total price
  const total = cartItems.reduce(
    (sum, item) =>
      sum +
      Number(item.price) * (item.qty || 1),
    0
  );

  return (
    <div
      style={{
        padding: "40px",
        background: "#fdf6f0",
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #fdf6f0, #fff)"
      }}
    >
      {/* Back Button */}
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

      <h1 style={{ textAlign: "center" }}>
        🛍️ My Cart
      </h1>

      {cartItems.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            marginTop: "80px",
          }}
        >
          <h2>Your Cart Is Empty 😢</h2>

          <button
            onClick={() => navigate("/shop")}
            style={{
              background: "linear-gradient(to right, #000, #333)",
              color: "white",
              border: "none",
              padding: "12px 20px",
              borderRadius: "10px",
              cursor: "pointer",
              transition: "0.3s"
            }}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                background: "white",
                padding: "20px",
                marginBottom: "20px",
                borderRadius: "20px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  borderRadius: "15px",
                }}
              />

              <div style={{ flex: 1 }}>
                <h3>{item.name}</h3>

                <p style={{ fontWeight: "bold" }}>
                  ₹{item.price}
                </p>

                {/* Quantity Controls */}
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    marginTop: "10px",
                    alignItems: "center",
                  }}
                >
                  <button
                    onClick={() => decreaseQty(index)}
                  >
                    -
                  </button>

                  <span>
                    {item.qty || 1}
                  </span>

                  <button
                    onClick={() => increaseQty(index)}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => removeItem(index)}
                style={{
                  background: "#ff4d4d",
                  color: "white",
                  border: "none",
                  padding: "10px 18px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total Section */}
          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "20px",
              marginTop: "30px",
            }}
          >
            <h2>Total: ₹{total}</h2>

            <button
              onClick={() =>
                navigate("/checkout")
              }
              style={{
                width: "100%",
                marginTop: "15px",
                padding: "15px",
                background: "black",
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Proceed To Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;