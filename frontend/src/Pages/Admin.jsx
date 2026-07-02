import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
  });

  // FETCH PRODUCTS
  useEffect(() => {
    const user = JSON.parse(
      localStorage.getItem("user")
    );

  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // HANDLE INPUT
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ADD PRODUCT
  const addProduct = async () => {
    await fetch("http://localhost:5000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    alert("Product Added ✅");

    window.location.reload();
  };

  // DELETE PRODUCT
  const deleteProduct = async (id) => {
    await fetch(
      `http://localhost:5000/api/products/${id}`,
      {
        method: "DELETE",
      }
    );

    alert("Deleted ❌");
    window.location.reload();
  };

  return (
    <div
      style={{
        padding: "40px",
        minHeight: "100vh",
        background: "#fdf6f0",
        color: "black",
      }}
    >
      <h1>🧑‍💻 Admin Panel</h1>

      {/* FORM */}
      <div
        style={{
          background: "white",
          borderRadius: "15px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
        }}
      >
        <input
          name="name"
          placeholder="Product Name"
          onChange={handleChange}
        />
        <select
          name="category"
          onChange={handleChange}
          style={{
            display: "block",
            marginTop: "10px",
            marginBottom: "10px",
            padding: "8px",
          }}
        >
          <option value="">Select Category</option>
          <option value="Boys">Boys</option>
          <option value="Girls">Girls</option>
          <option value="Baby">Baby</option>
          <option value="Winter">Winter</option>
        </select>
        <input
          name="price"
          placeholder="Price"
          onChange={handleChange}
        />

        <input
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />

        <button onClick={addProduct}>
          Add Product
        </button>
      </div>

      {/* PRODUCT LIST */}
      {products.map((p) => (
        <div
          key={p._id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
            borderBottom: "1px solid #ccc",
          }}
        >
          <span>
            {p.name} - ₹{p.price}
          </span>

          <button
            onClick={() => deleteProduct(p._id)}
            style={{ color: "red" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Admin;