import React from "react";
import compare1 from "../images/undraw_mobile_development_re_wwsn.svg";
import compare2 from "../images/undraw_navigator_a479.svg";
import compare3 from "../images/undraw_warning_cyit.svg";
import compare4 from "../images/undraw_road_sign_re_3kc3.svg";
import { BsChevronDown } from "react-icons/bs";
function Products() {
  const products = [
    {
      image: compare1,
      name: "Html & Css",
    },
    {
      image: compare2,
      name: "React & Redux",
    },
    {
      image: compare3,
      name: "NodeJS",
    },
    {
      image: compare4,
      name: "ExpressJS",
    },
  ];
  return (
    <div className="products-container mx-3 py-3">
      <div className="container">
        <div className="title-container">
          <h2>Compare the Product</h2>
          <button>New Comparison</button>
        </div>
        <div className="products">
          {products.map(({ image, name}, index) => {
            return (
              <div className="product" key={index}>
                <div className="image">
                  <img src={image} alt="Product" />
                </div>
                <h4>{name}</h4>
                <BsChevronDown />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;