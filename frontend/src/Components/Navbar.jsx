import { useNavigate } from "react-router-dom";
  import { signOut } from "firebase/auth";
  import { auth } from "../Firebase.js";


function Navbar() {
  const navigate = useNavigate();
  
  const user = 
JSON.parse(localStorage.getItem("user"));

  const logout = async () => {
    await signOut(auth);
    localStorage.removeItem("user");
    window.location.reload();
  };
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "25px 60px",
        color: "white",
      }}
    >
      <div
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        <h2 style={{ fontSize: "28px" }}>Vastraa</h2>
        <p style={{ fontSize: "12px", letterSpacing: "2px" }}>
          Tiny Trends
        </p>
      </div>

      <ul
        style={{
          display: "flex",
          gap: "35px",
          listStyle: "none",
          cursor: "pointer",
        }}
      >
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/shop")}>Shop</li>
        <li onClick={() => navigate("/about")}>About</li>
        <li onClick={() => navigate("/collections")}>Collections</li>
        <li onClick={() => navigate("/contact")}>Contact</li>

        {user ? (
          <>
            <span>👤 {user.email}</span>

            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <button onClick={() => navigate("/login")}>
            Login
          </button>
        )}
      </ul>

      <div
        style={{
          display: "flex",
          gap: "20px",
          fontSize: "22px",
          cursor: "pointer",
        }}
      >
        <span onClick={() => navigate("/profile")}>👤</span>
        <span onClick={() => navigate("/cart")}>🛍️</span>
      </div>
      

    </nav>


  );
}

export default Navbar;