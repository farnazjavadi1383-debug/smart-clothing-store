import StatCard from "./StatCard";

function Dashboard() {
  return (
    <div style={{ padding: "25px" }}>
      <h1>داشبورد مدیریت انبار پوشاک</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <StatCard
          title="تعداد محصولات"
          value="30"
          color="#2563eb"
          icon="📦"
        />

        <StatCard
          title="موجودی کل"
          value="425"
          color="#16a34a"
          icon="🏬"
        />

        <StatCard
          title="سفارش‌های امروز"
          value="18"
          color="#d97706"
          icon="🛒"
        />

        <StatCard
          title="هشدار موجودی"
          value="7"
          color="#dc2626"
          icon="⚠️"
        />
      </div>
    </div>
  );
}

export default Dashboard;