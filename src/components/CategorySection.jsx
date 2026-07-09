import { FiArrowLeft } from "react-icons/fi";

import menImg from "../assets/images/categories/men.png";
import womenImg from "../assets/images/categories/women.png";
import kidsImg from "../assets/images/categories/kids.png";
import saleImg from "../assets/images/categories/sale.png";

export default function CategorySection() {

  const categories = [
    
    { title: "تخفیف‌ها", image: saleImg },
    { title: "زنانه", image: womenImg },
    { title: "بچگانه", image: kidsImg },
    { title: "مردانه", image: menImg },

  ];

  return (
    <section className="categorySection">

      {categories.map((item, index) => (

        <div className="categoryCard" key={index}>

          <img
            src={item.image}
            alt={item.title}
            className="categoryImage"
          />

          <div className="categoryOverlay">

            <h2>{item.title}</h2>

            <span>مشاهده همه</span>

            <button>
              <FiArrowLeft />
            </button>

          </div>

        </div>

      ))}

    </section>
  );
}