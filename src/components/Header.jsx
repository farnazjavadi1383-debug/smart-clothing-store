import { useState, useEffect } from "react";
import { FiSearch, FiPhone, FiShoppingCart, FiUser } from "react-icons/fi";
import { PiCoatHangerBold } from "react-icons/pi";function Header({setPage, setInventoryPage}) {
  const menu = [
    "خانه",
    "محصولات",
    "دسته‌بندی‌ها",
    "مدیریت انبار",
    "سفارش‌ها",
    "گزارش‌ها",
    "کاربران",
    "تنظیمات",
  ];
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 42);
    
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  return (
<div className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="headerLeft">

  <div className="logoBox">
<PiCoatHangerBold size={40} color="#D4AF37" /></div>

<div className="logoText">
  <h2>انبار پوشاک</h2>
  <span>Clothing Store</span>
</div>
</div>

<nav className="headerMenu">

<a 
href="#"
className="active"
onClick={()=>setPage("home")}
>
خانه
</a>


<a
href="#"
onClick={()=>setPage("products")}
>
محصولات
</a>


<a href="#">
دسته‌بندی‌ها
</a>


<a 
href="#"
onClick={()=>setInventoryPage(true)}
>
مدیریت انبار
</a>


<a href="#">
سفارش‌ها
</a>


<a href="#">
تنظیمات
</a>


</nav>
      <div className="headerSearch">

  <FiSearch className="searchIcon"/>

  <input
    type="text"
    placeholder="جستجو در محصولات، برندها و دسته‌بندی‌ها..."
  />

</div>

      <div className="headerActions">

  <div className="actionIcon">
    <FiShoppingCart size={22} />
    <div className="actionIcon glow"></div>
  </div>

  <div className="actionIcon">
    <FiPhone size={22} />
    <div className="actionIcon glow"></div>
</div>

  <div className="userBox">

    <FiUser size={20} />

    <div>
      <strong>ورود و </strong>
      <small>ثبت نام</small>
    </div>

  </div>

</div>

    </div>
  );
}

export default Header;