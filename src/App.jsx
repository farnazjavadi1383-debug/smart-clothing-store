import {
  FaInstagram,
  FaTelegramPlane,
  FaLinkedinIn,
  FaTwitter
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsTagsFill } from "react-icons/bs";
import { FiArrowLeft } from "react-icons/fi";
import { BsPercent } from "react-icons/bs";
import CategorySection from "./components/CategorySection";
import Features from "./components/Features";
import Header from "./components/Header";
import "@fontsource/vazirmatn";
import { useState, useEffect } from "react";
import products from "./data/products";
import Hero from "./components/Hero";
import TopBar from "./components/TopBar";
import "./App.css";
console.log("APP RUNNING");

function App() {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState("home");
  const [sort, setSort] = useState("");
  const [inventoryPage, setInventoryPage] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [stockFilter, setStockFilter] = useState("همه");
  const [category, setCategory] = useState("همه");
  const [styleFilter, setStyleFilter] = useState("all");
  const [occasionFilter, setOccasionFilter] = useState("all");
  const [fabricFilter, setFabricFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [timeLeft, setTimeLeft] = useState("");

  const menuItems = [
    "داشبورد",
    "محصولات",
    "دسته‌بندی‌ها",
    "انبار",
    "ورود کالا",
    "خروج کالا",
    "گزارش‌ها",
    "تنظیمات"
  ];

  useEffect(() => {

    const updateTimer = () => {

      const now = new Date();
      const end = new Date();

      end.setHours(24, 0, 0, 0);

      const diff = end - now;

      if (diff <= 0) {
        setTimeLeft("پایان تخفیف");
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(
        `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
      );

    };

    updateTimer();

    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  

  }, []);
  if(page === "detail"){

return(

<div className="productDetailPage">


<button
className="backBtn"
onClick={()=>setPage("products")}
>
← بازگشت به محصولات
</button>



<div className="detailContainer">


<div className="detailImage">

<img
src={selectedProduct.image}
alt={selectedProduct.name}
/>

</div>



<div className="detailInfo">


<span className="detailBrand">
Clothing Store
</span>


<h1>
{selectedProduct.name}
</h1>



<div className="detailPrice">

{selectedProduct.price.toLocaleString()} تومان

</div>



<div className="detailStock">

{
selectedProduct.stock > 5 ?

"🟢 موجود در انبار"

:

selectedProduct.stock > 0 ?

"🟡 موجودی محدود"

:

"🔴 ناموجود"

}

</div>



<div className="detailLine"></div>



<h3>
مشخصات محصول
</h3>


<p>
این محصول از کالکشن جدید فروشگاه انبار پوشاک است.
مناسب استفاده روزمره با کیفیت بالا.
</p>



<div className="detailActions">

<button>
افزودن به سفارش
</button>


<button
onClick={()=>setPage("products")}
>
بازگشت
</button>


</div>


</div>


</div>


</div>

)

}
if(inventoryPage){

return(

<div className="inventoryPage">

<h1>
مدیریت انبار پوشاک
</h1>

<p>
کنترل موجودی و وضعیت کالاهای فروشگاه
</p>



<div className="inventoryStats">

<h2 className="tableTitle">
لیست کالاهای انبار
</h2>

<table className="inventoryTable">

<thead>

<tr>

<th>تصویر</th>

<th>نام محصول</th>

<th>موجودی</th>

<th>قیمت</th>

<th>وضعیت</th>

</tr>

</thead>

<tbody>

{
products.map((item)=>(

<tr key={item.id}>

<td>

<img
src={item.image}
alt={item.name}
className="tableImage"
/>

</td>

<td>
{item.name}
</td>

<td>
{item.stock}
</td>

<td>

{item.price.toLocaleString()} تومان

</td>

<td>

{
item.stock>5 ?

<span className="greenStatus">
موجود
</span>

:

item.stock>0 ?

<span className="yellowStatus">
کم موجود
</span>

:

<span className="redStatus">
ناموجود
</span>

}

</td>

</tr>

))
}

</tbody>

</table> 

<div className="inventoryCard">

<h2>
548
</h2>

<span>
📦 کل کالاها
</span>

</div>



<div className="inventoryCard">

<h2>
245M
</h2>

<span>
💰 ارزش انبار
</span>

</div>



<div className="inventoryCard">

<h2>
8
</h2>

<span>
🟡 کم موجود
</span>

</div>



<div className="inventoryCard">

<h2>
3
</h2>

<span>
🔴 ناموجود
</span>

</div>


</div>
</div>

)

}
if(page === "products"){
 const filteredProducts = products.filter((item)=>{
  const stockMatch =
stockFilter==="همه" ||

(stockFilter==="موجود" && item.stock > 5) ||

(stockFilter==="کم" && item.stock > 0 && item.stock <=5) ||

(stockFilter==="ناموجود" && item.stock ===0);

const searchMatch =
item.name.includes(searchTerm);


const categoryMatch =
category==="همه" || item.category===category;


return searchMatch && categoryMatch && stockMatch;
});
const sortedProducts = [...filteredProducts].sort((a,b)=>{

if(sort==="cheap"){
return a.price - b.price;
}

if(sort==="expensive"){
return b.price - a.price;
}

return 0;

});
return(

<div className="productsPage">
<div className="inventoryTopBar">


</div>
<div className="productsHeader">
<button
  className="backBtn"
  onClick={() => setPage("home")}
>
← بازگشت
</button>
  <div className="productsTitle">

    <h1>محصولات</h1>

    <p>مدیریت و کنترل موجودی تمام محصولات فروشگاه</p>

  </div>

  <button
    className="addProductBtn"
    onClick={() => setPage("addProduct")}
  >
    + افزودن محصول
  </button>

</div>


<div className="productsToolbar">


<input 
type="text"
placeholder="جستجوی محصول..."
className="searchProduct"

value={searchTerm}

onChange={(e)=>{
setSearchTerm(e.target.value)
}}

/>


<select 
className="sortProduct"
value={sort}
onChange={(e)=>setSort(e.target.value)}
>
<option value="">
مرتب سازی
</option>

<option value="cheap">
ارزان‌ترین
</option>

<option value="expensive">
گران‌ترین
</option>

<option value="new">
جدیدترین
</option>
</select>


</div>


<div className="filterButtons">

<button className="filterChip active">
📦 همه محصولات
</button>

<button className="filterChip">
🟢 موجود
</button>

<button className="filterChip">
🟡 کم موجود
</button>

<button className="filterChip">
🔴 ناموجود
</button>

<button className="filterChip">
 مردانه
</button>

<button className="filterChip">
 زنانه
</button>

<button className="filterChip">
 بچگانه
</button>

</div>



<div className="productsGrid">


{
sortedProducts.map((item)=>(

<div
className="productCard"
key={item.id}

onClick={()=>{

setSelectedProduct(item);

setPage("detail");

}}

>

<div className="productImage">

<img 
src={item.image}
alt={item.name}
/>

</div>


<div className="productInfo">


<h3>
{item.name}
</h3>


<span>
موجودی انبار: {item.stock} عدد
</span>
{
item.stock > 5 && 
<span className="stockGreen">
🟢 موجود
</span>
}


{
item.stock > 0 && item.stock <=5 &&
<span className="stockYellow">
🟡 کم موجود
</span>
}


{
item.stock ===0 &&
<span className="stockRed">
🔴 ناموجود
</span>
}


<div className="priceBox">

<strong>
{item.price.toLocaleString()} تومان
</strong>

</div>


</div>


</div>


))

}


</div>


</div>

)

}
  return (
<div style={styles.page}>

      <TopBar />

      {/* OVERLAY */}

      {/* DRAWER */}
      <div
        style={{
          ...styles.drawer,
          transform: open ? "translateX(0)" : "translateX(-100%)"
        }}
      >
        <div style={styles.drawerHeader}>🧥 انبار پوشاک</div>

        {menuItems.map((item, i) => (
  <div
    key={i}
    style={styles.menuItem}
    onClick={() => {

      if(item === "محصولات"){
        setPage("products");
      }

    }}
  >
    {item}
  </div>
))}
      </div>

      {/* HEADER */}
<Header 
setPage={setPage}
setInventoryPage={setInventoryPage}
/>      <Hero />

      <Features />

      <CategorySection />
    <div className="todayOffer">


    <div className="offerGlow"></div>

    <div className="offerIconLeft">
        <BsTagsFill />
    </div>

    <div className="offerCenter">

        <h2>تخفیف‌های امروز</h2>

        <span className="offerText">
            پایان تخفیف تا
        </span>

        <div className="offerTimer">
    {timeLeft}
</div>

    </div>

    <div className="offerIconRight">
        <BsTagsFill />
    </div>

</div>
<section className="newProducts">

  <div className="sectionHeader">

    <div className="sectionTitle">
      <h2>جدیدترین محصولات</h2>
      <p>جدیدترین کالکشن فروشگاه</p>
    </div>

    <button 
className="seeAllBtn"
onClick={()=>setPage("products")}
>
 مشاهده همه
</button>

  </div>

  <div className="newProductsGrid">

    {products.slice(0,4).map((item)=>(

      <div className="productCard" key={item.id}>

        <div className="productImage">

  <img src={item.image} alt={item.name}/>

  <span className="newBadge">
    NEW
  </span>
  <button className="quickView">
    مشاهده محصول
</button>

</div>

<div className="productInfo">
  

  <h3>{item.name}</h3>

  <div className="priceBox">

    <span className="newPrice">
      {item.price.toLocaleString()} تومان
    </span>

  </div>

</div>
        <div className="productInfo">

    <div className="productTop">

        <h3>{item.name}</h3>

    </div>

    <span className="brandName">

        Clothing Store

    </span>

  
</div>
      </div>

    ))}

  </div>

</section>

<section className="popularProducts">

<div className="sectionHeader">

<div className="sectionTitle">

<h2>

پربازدیدترین محصولات

</h2>

<p>

محبوب‌ترین انتخاب مشتریان فروشگاه

</p>

</div>

<button 
className="seeAllBtn"
onClick={()=>setPage("products")}
>
 مشاهده همه
</button>
</div>
<div className="newProductsGrid">

{

products

.filter(item => [11,14,18,24].includes(item.id))

.map((item)=>(

<div className="productCard popularCard" key={item.id}>

<div className="productImage">

<img src={item.image} alt={item.name}/>


<button className="quickView">

مشاهده محصول

</button>

</div>

<div className="productInfo">

<h3>{item.name}</h3>

<div className="priceBox">

<span className="newPrice">

{item.price.toLocaleString()} تومان

</span>

</div>

</div>

</div>

))

}

</div>

</section>
<section className="controlCenter">

<div className="controlHeader">

<span className="controlMini">

CONTROL CENTER

</span>

<h2>

 مرکز کنترل انبار

</h2>

<p>

وضعیت لحظه‌ای فروشگاه و موجودی انبار

</p>

</div>

<div className="controlBody">

<div className="controlLeft">

<div className="statusCard">

<h3>548</h3>

<span>کالای موجود</span>

</div>

<div className="statusCard">

<h3>245M</h3>

<span>ارزش انبار</span>

</div>

<div className="statusCard">

<h3>+18</h3>

<span>ورودی امروز</span>

</div>

<div className="statusCard">

<h3>8</h3>

<span>کم موجود</span>

</div>

</div>

<div className="controlRight">
  <div className="warningPanel">

<h3>
🚨 هشدارهای فوری انبار
</h3>

<div className="warningItem red">
<span>🔴</span>
<p>فقط ۲ عدد مانتو صورتی باقی مانده</p>
</div>

<div className="warningItem yellow">
<span>🟡</span>
<p>موجودی هودی سبز مردانه رو به اتمام است</p>
</div>

<div className="warningItem green">
<span>🟢</span>
<p>امروز ۲۰ کالا وارد انبار شد</p>
</div>

</div>

<h3>

موجودی دسته‌بندی‌ها

</h3>

<div className="chartItem">

<span> مردانه</span>

<div className="chartBar">

<div
className="chartFill men">

</div>

</div>

<span>120</span>

</div>

<div className="chartItem">

<span> زنانه</span>

<div className="chartBar">

<div
className="chartFill women">

</div>

</div>

<span>210</span>

</div>

<div className="chartItem">

<span> بچگانه</span>

<div className="chartBar">

<div
className="chartFill kids">

</div>

</div>

<span>218</span>

</div>

</div>

</div>

</section>

      
<footer className="footer">

<div className="trustSection">

<div className="trustItem">
<img src="/images/enamad.jfif" alt="enamad" />
<p>نماد اعتماد الکترونیکی</p>
</div>

<div className="trustItem">
<img src="/images/ecunion.jfif" alt="ecunion" /><p>عضو اتحادیه کشوری</p>
</div>

<div className="trustItem">

<img src="/images/Payment_security.png" alt="secure" />
<p>پرداخت امن</p>

</div>
</div>

<div className="footerContainer">

<div className="footerCol">

<h3>درباره ما</h3>

<p>

سیستم مدیریت هوشمند انبار پوشاک با هدف
بهینه‌سازی فرآیندهای انبارداری و مدیریت
حرفه‌ای کسب‌وکار طراحی شده است.

</p>

<div className="socialIcons">

<a href="#">
<FaInstagram />
</a>

<a href="#">
<FaTelegramPlane />
</a>

<a href="#">
<FaLinkedinIn />
</a>

<a href="#">
<FaTwitter />
</a>

</div>
</div>

<div className="footerCol">

<h3>دسترسی سریع</h3>

<ul>

<li>صفحه اصلی</li>

<li>محصولات</li>

<li>دسته‌بندی‌ها</li>

<li>انبار</li>

<li>گزارش‌ها</li>

</ul>

</div>

<div className="footerCol">

<h3>خدمات مشتریان</h3>

<ul>

<li>سوالات متداول</li>

<li>راهنمای خرید</li>

<li>شرایط بازگشت کالا</li>

<li>پیگیری سفارش</li>

<li>تماس با ما</li>

</ul>

</div>

<div className="footerCol">

<h3>اطلاعات تماس</h3>

<p>📍  اصفهان </p>

<p>☎ 031-12345678</p>

<p>✉ info@anbarposhak.com</p>

<p>🕒 شنبه تا پنجشنبه 9 الی 18</p>

</div>

</div>

<div className="footerBottom">

© 2026 تمامی حقوق محفوظ است | انبار پوشاک

</div>

</footer>

      {/* 🔥 BOTTOM NAVBAR */}
      <nav style={styles.bottomNav}>

        <div style={styles.navItem}>
          <div style={styles.iconOutline}>🏠</div>
          <span>خانه</span>
        </div>

        <div style={styles.navItem}>
          <div style={styles.iconOutline}>♡</div>
          <span>علاقمندی</span>
        </div>

        <div style={styles.navItem}>
          <div style={styles.iconOutline}>☷</div>
          <span>دسته‌بندی</span>
        </div>

        <div style={styles.navItem}>
          <div style={styles.iconOutline}>👤</div>
          <span>پروفایل</span>
        </div>

      </nav>

    </div>
  );
}

function Card({ name, stock, price, image }) {
  return (
    <div style={styles.card}>
      
      <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          borderRadius: "10px",
          marginBottom: "10px"
        }}
      />

      <h3 style={{ margin: "5px 0" }}>{name}</h3>

      <p style={{ margin: "3px 0" }}>
        موجودی: {stock}
      </p>

      <p style={{ margin: "3px 0", color:"#d4af37", fontWeight:"bold" }}>
        {price.toLocaleString()} تومان
      </p>

    </div>
  );
}

export default App;

/* ---------------- STYLES ---------------- */

const styles = {

  page: {
    fontFamily: "'Vazirmatn', Tahoma, Arial",
    fontWeight: "600",
    background: "#f4f4f4",
    minHeight: "100vh",
    width: "100vw",
    margin: 0,
    paddingBottom: "70px" // 🔥 مهم برای نوار پایین
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 30px",
    background: "#fff",
    borderBottom: "2px solid #d4af37",
    position: "sticky",
    top: 0,
    zIndex: 10
  },

  leftHeader: {
    display: "flex",
    alignItems: "center",
    gap: "12px"
  },

  burger: {
    fontSize: "26px",
    cursor: "pointer"
  },
  logo: {
    fontWeight: "900",
    fontSize: "20px"
  },

  searchBox: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    background: "#f2f2f2",
    padding: "6px 12px",
    borderRadius: "25px",
    width: "320px"
  },

  searchIcon: {
    color: "#888"
  },

  search: {
    border: "none",
    outline: "none",
    background: "transparent",
    width: "100%"
  },

  actions: {
    display: "flex",
    alignItems: "center",
    gap: "18px"
  },
  icon: {
    position: "relative",
    fontSize: "18px"
  },
 badge: {
    position: "absolute",
    top: "-6px",
    right: "-8px",
    background: "red",
    color: "white",
    fontSize: "10px",
    borderRadius: "50%",
    padding: "2px 5px"
  },

  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.5)"
  },

  drawer: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "280px",
    height: "100vh",
    background: "#111",
    color: "white",
    padding: "20px",
    transition: "0.3s ease"
  },

  drawerHeader: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "20px"
  },

  menuItem: {
    padding: "12px",
    borderBottom: "1px solid #333"
  },

  hero: {
    margin: "20px",
    padding: "30px",
    background: "linear-gradient(135deg, #111, #333)",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    borderRadius: "15px"
  },

  heroBox: {
    width: "160px",
    height: "160px",
    background: "#444",
    borderRadius: "10px"
  },

  btn: {
    marginTop: "10px",
    padding: "10px 18px",
    background: "#d4af37",
    border: "none",
    borderRadius: "25px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "15px",
    padding: "20px"
  },

  card: {
    background: "white",
    padding: "15px",
    borderRadius: "12px"
  },

  /* 🔥 BOTTOM NAV */
  bottomNav: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "65px",
    background: "#fff",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderTop: "1px solid #ddd"
  },

  navItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "12px",
    gap: "3px",
    cursor: "pointer"
  },

  iconOutline: {
    fontSize: "18px",
    color: "#111"
  }
};