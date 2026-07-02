import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase.js";

const Profile = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = async () => {
    await signOut(auth);
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#2a0148,#5a2b85)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px"
      }}
    >
      <div
        style={{
          width: "400px",
          background: "white",
          borderRadius: "25px",
          padding: "35px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.25)"
        }}
      >
        <div
          style={{
            fontSize: "70px",
            marginBottom: "15px"
          }}
        >
          👤
        </div>

        <h2
          style={{
            color: "#2a0148",
            marginBottom: "10px"
          }}
        >
          {user?.email?.split("@")[0]}
        </h2>

        <p
          style={{
            color: "gray",
            marginBottom: "25px"
          }}
        >
          {user?.email}
        </p>

        <button
          onClick={() => navigate(-1)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "12px",
            border: "none",
            borderRadius: "10px",
            background: "#5a2b85",
            color: "white",
            cursor: "pointer"
          }}
        >
          ← Back
        </button>

        <button
          onClick={logout}
          style={{
            width: "100%",
            padding: "12px",
            border: "none",
            borderRadius: "10px",
            background: "#e63946",
            color: "white",
            cursor: "pointer"
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;