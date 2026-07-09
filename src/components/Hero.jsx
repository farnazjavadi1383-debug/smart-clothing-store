import { useState, useEffect } from "react";

import b1 from "../assets/images/banners/banner1.png";
import b2 from "../assets/images/banners/banner2.png";
import b3 from "../assets/images/banners/banner3.png";
import b5 from "../assets/images/banners/banner5.png";
import b6 from "../assets/images/banners/banner6.png";
import b7 from "../assets/images/banners/banner7.png";

const slides = [b1, b2, b3, b5, b6, b7];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((p) => (p + 1) % slides.length);
    }, 4000);

    return () => clearInterval(t);
  }, []);

  return (
    <div
  className="hero"
  style={{
    position: "relative",
    width: "100%",
    overflow: "hidden",
    marginTop: "20px"
  }}
>

      <img
  src={slides[index]}
  alt="hero"
  style={{
    width: "100%",
    height: "420px",
    objectFit: "cover",
    objectPosition: "center top",
    borderRadius: "18px",
    filter: "brightness(.97)"
  }}
/>

      <div
  key={index}
  className="heroText"
  style={{
  position: "absolute",
  left: "90px",
  top: "50%",
  transform: "translateY(-50%)",
  maxWidth: "500px",
  color: "#111"
}}
>

  <div
    style={{
  fontFamily: "Vazirmatn",
  fontSize: "20px",
  fontWeight: "900",
fontFamily: "Vazirmatn, sans-serif",
color: "#866213",
marginBottom: "12px",
    }}
  >
    کالکشن جدید
  </div>

  <h1
    style={{
  fontFamily: "Vazirmatn",
  fontSize: "58px",
  fontWeight: "900",
fontFamily: "Vazirmatn, sans-serif",
WebkitTextStroke: "0.3px #111",
letterSpacing: "-1px",
textShadow: "0 2px 8px rgba(0,0,0,.08)",
  lineHeight: "70px",
  margin: "0 0 18px",
  color: "#111"
}}
  >
    {index === 0 && "استایل مردانه"}
    {index === 1 && "استایل زنانه"}
    {index === 2 && "استایل بچگانه"}
    {index === 3 && "استایل زنانه"}
    {index === 4 && "استایل بچگانه"}
    {index === 5 && "استایل اسپرت مردانه"}
  </h1>

  <p
    style={{
  fontFamily: "Vazirmatn",
  fontSize: "20px",
  lineHeight: "42px",
  color: "#333",
  fontWeight: "500",
  marginBottom: "35px"
}}
  >
   <>
جدیدترین مدل‌های پوشاک با بهترین کیفیت
<br />
برای فروشگاه و مدیریت انبار پوشاک
</>
  </p>

  <button
    style={{
    background: "#111",
    color: "#fff",
    border: "none",
    padding: "18px 42px",
    borderRadius: "50px",
    fontSize: "17px",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: "0 12px 30px rgba(0,0,0,.18)",
    transition: "0.3s"
}}
  >
    مشاهده محصولات 
  </button>

</div>

      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={i === index ? "dot active" : "dot"}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
      <button
  className="arrow left"
  onClick={() =>
    setIndex(index === 0 ? slides.length - 1 : index - 1)
  }
>
  ❮
</button>

<button
  className="arrow right"
  onClick={() =>
    setIndex((index + 1) % slides.length)
  }
>
  ❯
</button>

    </div>
  );
}