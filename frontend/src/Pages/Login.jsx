import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification
} from "firebase/auth";
import { auth } from "../Firebase.js";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  // 🔥 LOGIN
  const handleLogin = async () => {
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);

      // check email verification
      // if (!userCred.user.emailVerified) {
        // setMsg("⚠️ Email verify karo (OTP link check karo)");
        // return;
      // }

      // save user
      localStorage.setItem("user", JSON.stringify(userCred.user));

      setMsg("Login successful ✅");

      window.location.href = "/";
    } catch (err) {
      console.log("Firebase Error:", err);
      setMsg("❌ Wrong email or password");
    }
  };

  // 🔥 SIGNUP
  const handleSignup = async () => {
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);

      await sendEmailVerification(userCred.user);

      setMsg("📩 OTP email bhej diya hai, check karo aur verify karo");
    } catch (err) {
      setMsg("❌ Signup failed");
    }
  };

  return (
    <div style={{ padding: "40px", maxWidth: "400px", margin: "auto" }}>
      <h2>Login / Signup</h2>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", margin: "10px 0", padding: "10px", width: "100%" }}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", margin: "10px 0", padding: "10px", width: "100%" }}
      />

      <button onClick={handleLogin} style={{ marginRight: "10px", padding: "10px" }}>
        Login
      </button>

      <button onClick={handleSignup} style={{ padding: "10px" }}>
        Sign Up
      </button>

      <p style={{ marginTop: "15px", color: "red" }}>{msg}</p>
    </div>
  );
};

export default Login;