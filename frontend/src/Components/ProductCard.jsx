function ProductCard({ name, price, image }) {
  return (
    <div style={{
      background: "#1a1a1a",
      padding: "20px",
      borderRadius: "15px",
      textAlign: "center",
      transition: "0.3s"
    }}>
      <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          borderRadius: "12px"
        }}
      />

      <h3>{name}</h3>
      <p style={{ color: "#d4af37" }}>₹{price}</p>

      <button style={{
        background: "#d4af37",
        border: "none",
        padding: "10px 20px",
        borderRadius: "8px"
      }}>
        Buy Now
      </button>
    </div>
  );
}

export default ProductCard;