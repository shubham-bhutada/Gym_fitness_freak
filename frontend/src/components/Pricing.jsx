import { Check } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import price from "../assets/pricing.jpg"
// import price from "../assets/img6.jpg";


const Pricing = () => {
  const pricing = [
    {
      imgUrl: price,
      title: "QUARTERLY",
      price: 10000,
      length: 3,
    },
    {
      imgUrl: price,
      title: "HEAL_YEARLY",
      price: 18000,
      length: 6,
    },
    {
      imgUrl: price,
      title: "YEARLY",
      price: 30000,
      length: 12,
    },
  ];
  return (
    <section className="pricing">
      <h1>ELITE EDGE FITNESS PLANS</h1>
      <div className="wrapper">
        {pricing.map((element) => {
          return (
            <div className="card" key={element.title}>
              <img src={element.imgUrl} alt={element.title} />
              <div className="title">
                <h1>{element.title}</h1>
                <h1>PACKAGE</h1>
                <h3>₹ {element.price}/-</h3>
                <p>For {element.length} Months</p>
              </div>
              <div className="description">
                <p>
                  <Check /> Equipment
                </p>
                <p>
                  <Check /> All Day Fre Training
                </p>
                <p>
                  <Check /> Free Restroom
                </p>
                <p>
                  <Check /> 24/7 Skilled Support
                </p>
                <p>
                  <Check /> 20 Days Freezing Option
                </p>
                <Link to={"/"}>Join Now</Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
