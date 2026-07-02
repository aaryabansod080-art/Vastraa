function Hero() {
  return (
    <div style={{
      height: "90vh",
      background:
        "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1610030469983-98e550d6193c') center/cover",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      color: "white"
    }}>
      <h1 style={{ fontSize: "4rem", color: "#d4af37" }}>
        Elegance Woven For You
      </h1>

      <button style={{
        marginTop: "20px",
        padding: "15px 35px",
        background: "#d4af37",
        border: "none",
        borderRadius: "8px"
      }}>
        Shop Now
      </button>
    </div>
  );
}

export default Hero;