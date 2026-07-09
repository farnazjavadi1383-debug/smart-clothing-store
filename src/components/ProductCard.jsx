function ProductCard({ product }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        transition: "0.3s",
      }}
    >
      <div
        style={{
          height: "220px",
          background: "#f4f4f4",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "60px",
        }}
      >
        👕
      </div>

      <div style={{ padding: "16px" }}>
        <h3 style={{ margin: 0 }}>{product.name}</h3>

        <p style={{ color: "#666" }}>
          دسته‌بندی: {product.category}
        </p>

        <p>رنگ: {product.color}</p>

        <p>سایز: {product.size}</p>

        <p>موجودی: {product.stock}</p>

        <h3 style={{ color: "#d4af37" }}>
          {product.price.toLocaleString()} تومان
        </h3>

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "15px",
          }}
        >
          <button>مشاهده</button>
          <button>ویرایش</button>
          <button>حذف</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;