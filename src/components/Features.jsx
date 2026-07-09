import {
  FiTruck,
  FiRefreshCw,
  FiShield,
  FiHeadphones
} from "react-icons/fi";

export default function Features() {

  const items = [
    {
      icon: <FiHeadphones />,
      title: "پشتیبانی ۲۴ ساعته",
      sub: "پاسخگوی شما هستیم"
    },
    {
      icon: <FiRefreshCw />,
      title: "ضمانت بازگشت",
      sub: "۷ روز مهلت بازگشت کالا"
    },
    {
      icon: <FiShield />,
      title: "پرداخت امن",
      sub: "درگاه بانکی کاملاً امن"
    },
    {
        icon: <FiTruck />,
      title: "ارسال رایگان",
      sub: "خریدهای بالای 3 میلیون تومان"
    }
  ];

  return (
    <section className="features">

      {items.map((item, index) => (
        <div className="featureCard" key={index}>

          <div className="featureCircle">
            {item.icon}
          </div>

          <div className="featureInfo">
            <h3>{item.title}</h3>
            <p>{item.sub}</p>
          </div>

        </div>
      ))}

    </section>
  );
}