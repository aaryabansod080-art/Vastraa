import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDw8_j68Up_dVuR4RVBT7uwVNKyZapBI5E",
  authDomain: "vastraa-5234d.firebaseapp.com",
  projectId: "vastraa-5234d",
  storageBucket: "vastraa-5234d.firebasestorage.app",
  messagingSenderId: "173469888237",
  appId: "1:173469888237:web:1651baa7f543b7222ba6e4",
  measurementId: "G-DPNHWVDF4Z"
};

const app = initializeApp(firebaseConfig);

// 🔥 Authentication export
export const auth = getAuth(app);

export default app;