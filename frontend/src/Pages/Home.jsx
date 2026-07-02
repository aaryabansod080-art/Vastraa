import { useNavigate } from "react-router-dom";

function Home() {
  const user =
    JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Poppins,sans-serif;
        }

        .home{
          min-height:100vh;
          width:100%;
          background:linear-gradient(135deg,#2a0148,#5a2b85);
          color:white;
        }

        .navbar{
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:25px 60px;
        }

        .logo{
          cursor:pointer;
        }

        .logo h2{
          font-size:28px;
        }

        .logo p{
          font-size:12px;
          letter-spacing:2px;
        }

        .nav-links{
          display:flex;
          gap:35px;
          list-style:none;
        }

        .nav-links li,
        .icons span{
          cursor:pointer;
          transition:0.3s;
        }

        .nav-links li:hover,
        .icons span:hover,
        .logo:hover{
          color:#ffd6ff;
          transform:scale(1.08);
        }

        .icons{
          display:flex;
          gap:20px;
          font-size:22px;
        }

        .hero{
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:40px 70px;
          min-height:85vh;
        }

        .hero-text h1{
          font-size:120px;
          text-shadow:0 0 25px rgba(255,255,255,0.9);
        }

        .hero-text h3{
          letter-spacing:8px;
          margin-top:15px;
          color:white;
        }

        .line{
          width:80px;
          height:3px;
          background:white;
          margin:25px 0;
        }

        .hero-text p{
          color:white;
          font-size:24px;
        }

        .hero-image img{
          width:600px;
          border-radius:20px;
        }
      `}</style>

      <div className="home">
        <nav className="navbar">
          <div className="logo" onClick={() => navigate("/")}>
            <h2>Vastraa</h2>
            <p>Tiny Trends</p>
          </div>

          <ul className="nav-links">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/shop")}>Shop</li>
            <li onClick={() => navigate("/about")}>About</li>
            <li onClick={() => navigate("/collections")}>Collections</li>
            <li onClick={() => navigate("/contact")}>Contact</li>

          </ul>

          <div className="icons">
            {user ? (
              <span onClick={() => navigate("/profile")}>
                👤
              </span>
            ) : (
              <span onClick={() => navigate("/login")}>
                Login
              </span>
            )}

            <span onClick={() => navigate("/cart")}>🛍️</span>
          </div>
        </nav>

        <section className="hero">
          <div className="hero-text">
            <h1>Vastraa</h1>
            <h3>VASTRAA TINY TRENDS ✦</h3>
            <div className="line"></div>
            <p>Premium baby & kids fashion collection</p>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b"
              alt="Fashion Banner"
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;