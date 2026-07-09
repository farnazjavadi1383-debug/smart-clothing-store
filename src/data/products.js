// =========================
// IMPORT IMAGES
// =========================

// مردانه
import men1 from "../assets/images/men/men1.jfif";
import men2 from "../assets/images/men/men2.jfif";
import men3 from "../assets/images/men/men3.jfif";
import men4 from "../assets/images/men/men4.jfif";
import men5 from "../assets/images/men/men5.jfif";
import men6 from "../assets/images/men/men6.jfif";
import men7 from "../assets/images/men/men7.jfif";
import men8 from "../assets/images/men/men8.jfif";
import men9 from "../assets/images/men/men9.jfif";
import men10 from "../assets/images/men/men10.jfif";

// زنانه
import women1 from "../assets/images/women/women1.jpg";
import women2 from "../assets/images/women/women2.jfif";
import women3 from "../assets/images/women/women3.jfif";
import women4 from "../assets/images/women/women4.jpg";
import women5 from "../assets/images/women/women5.jpg";
import women6 from "../assets/images/women/women6.jpg";
import women7 from "../assets/images/women/women7.jfif";
import women8 from "../assets/images/women/women8.jpg";
import women9 from "../assets/images/women/women9.jpg";
import women10 from "../assets/images/women/women10.jpg";

// بچگانه
import kids1 from "../assets/images/kids/kids1.jfif";
import kids2 from "../assets/images/kids/kids2.jfif";
import kids3 from "../assets/images/kids/kids3.jpg";
import kids4 from "../assets/images/kids/kids4.jpg";
import kids5 from "../assets/images/kids/kids5.jpg";
import kids6 from "../assets/images/kids/kids6.jfif";
import kids7 from "../assets/images/kids/kids7.jfif";
import kids8 from "../assets/images/kids/kids8.jfif";
import kids9 from "../assets/images/kids/kids9.jfif";
import kids10 from "../assets/images/kids/kids10.jfif";

const products = [
    // =========================
  // مردانه (1 تا 10)
  // =========================

  { id: 1, image: men1, name: "تی‌شرت قهوه‌ای", category: "مردانه", type: "تی‌شرت", color: "قهوه‌ای", size: "L", stock: 20, price: 890000 },
  { id: 2, image: men2, name: "پیراهن خردلی", category: "مردانه", type: "پیراهن", color: "خردلی", size: "L", stock: 15, price: 780000 },
  { id: 3, image: men3, name: "هودی سبز مردانه", category: "مردانه", type: "هودی", color: "سبز", size: "XL", stock: 18, price: 990000 },
  { id: 4, image: men4, name: "شلوار جین آبی", category: "مردانه", type: "شلوار", color: "آبی", size: "32", stock: 25, price: 1250000 },
  { id: 5, image: men5, name: "کت تک خاکستری", category: "مردانه", type: "کت", color: "خاکستری", size: "L", stock: 7, price: 2850000 },
  { id: 6, image: men6, name: "پولشرت سفید", category: "مردانه", type: "پولشرت", color: "سفید", size: "XL", stock: 9, price: 3200000 },
  { id: 7, image: men7, name: "سویشرت مشکی مردانه", category: "مردانه", type: "سویشرت", color: "مشکی", size: "L", stock: 16, price: 990000 },
  { id: 8, image: men8, name: "کاپشن سرمه‌ای مردانه", category: "مردانه", type: "کاپشن", color: "سرمه‌ای", size: "M", stock: 22, price: 650000 },
  { id: 9, image: men9, name: "شلوار کتان کرم مردانه", category: "مردانه", type: "کتان", color: "کرم", size: "L", stock: 19, price: 780000 },
  { id: 10, image: men10, name: "بافت یقه گرد مشکی مردانه", category: "مردانه", type: "بافت", color: "مشکی", size: "XL", stock: 11, price: 1750000 },

  // =========================
  // زنانه (11 تا 15)
  // =========================

  { id: 11, image: women1, name: "کت سبز زنانه", category: "زنانه", type: "کت", color: "سبز", size: "40", stock: 12, price: 2100000 },
  { id: 12, image: women2, name: "مانتو مشکی بلند", category: "زنانه", type: "مانتو", color: "مشکی", size: "38", stock: 8, price: 2950000 },
  { id: 13, image: women3, name: "شومیز سفید", category: "زنانه", type: "شومیز", color: "سفید", size: "38", stock: 18, price: 890000 },
  { id: 14, image: women4, name: "شومیز عروسکی", category: "زنانه", type: "شومیز", color: "صورتی", size: "38", stock: 14, price: 980000 },
  { id: 15, image: women5, name: "دامن بلند مشکی", category: "زنانه", type: "دامن", color: "مشکی", size: "40", stock: 10, price: 1100000 },
  // =========================
  // زنانه (ادامه)
  // =========================

  { id: 16, image: women6, name: "هودی قهوه‌ای زنانه", category: "زنانه", type: "هودی", color: "قهوه‌ای", size: "L", stock: 14, price: 980000 },
  { id: 17, image: women7, name: "شلوار بوت‌کات زنانه", category: "زنانه", type: "شلوار", color: "آبی", size: "30", stock: 15, price: 1390000 },
  { id: 18, image: women8, name: "بافت زنانه", category: "زنانه", type: "بافت", color: "کرم", size: "M", stock: 20, price: 870000 },
  { id: 19, image: women9, name: "لباس مجلسی بلند سفید", category: "زنانه", type: "لباس مجلسی", color: "سفید", size: "40", stock: 11, price: 1950000 },
  { id: 20, image: women10, name: "مانتو صورتی", category: "زنانه", type: "مانتو ", color: "صورتی", size: "38", stock: 6, price: 4500000 },

  // =========================
  // بچگانه
  // =========================

  { id: 21, image: kids1, name: "تی‌شرت پسرانه آبی", category: "بچگانه", type: "تی‌شرت", color: "آبی", size: "10", stock: 18, price: 330000 },
  { id: 22, image: kids2, name: "تی‌شرت دخترانه صورتی", category: "بچگانه", type: "تی‌شرت", color: "صورتی", size: "8", stock: 20, price: 320000 },
  { id: 23, image: kids3, name: "هودی بچگانه صورتی", category: "بچگانه", type: "هودی", color: "صورتی", size: "10", stock: 15, price: 690000 },
  { id: 24, image: kids4, name: "شلوار بچگانه", category: "بچگانه", type: "شلوار", color: "آبی", size: "10", stock: 13, price: 620000 },
  { id: 25, image: kids5, name: "ست ورزشی بچگانه", category: "بچگانه", type: "ست ورزشی", color: "سرمه‌ای", size: "10", stock: 12, price: 980000 },
  { id: 26, image: kids6, name: "کاپشن بچگانه", category: "بچگانه", type: "کاپشن", color: "قرمز", size: "10", stock: 8, price: 1350000 },
  { id: 27, image: kids7, name: "لباس دخترانه سفید", category: "بچگانه", type: "لباس", color: "سفید", size: "8", stock: 9, price: 790000 },
  { id: 28, image: kids8, name: "سویشرت بچگانه", category: "بچگانه", type: "سویشرت", color: "طوسی", size: "10", stock: 17, price: 650000 },
  { id: 29, image: kids9, name: "بافت و دامن دخترانه", category: "بچگانه", type: "ست", color: "صورتی", size: "8", stock: 10, price: 890000 },
  { id: 30, image: kids10, name: "پیراهن پسرانه", category: "بچگانه", type: "پیراهن", color: "آبی", size: "10", stock: 14, price: 720000 }
];

export default products;