function StatCard({ title, value, color, icon }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "15px",
        padding: "20px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "0.3s",
        cursor: "pointer",
      }}
    >
      <div>
        <p
          style={{
            margin: 0,
            color: "#777",
            fontSize: "14px",
          }}
        >
          {title}
        </p>

        <h2
          style={{
            marginTop: "10px",
            color: color,
          }}
        >
          {value}
        </h2>
      </div>

      <div
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: color,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "28px",
          color: "#fff",
        }}
      >
        {icon}
      </div>
    </div>
  );
}

export default StatCard;