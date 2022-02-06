import React from "react";
import category1 from "../images/green-and-white-stripe-sphere.png";
import category2 from "../images/logo-search-grid-desktop (1).png";
import category3 from "../images/logo-search-grid-desktop.png";
import category4 from "../images/logo.png";
import category5 from "../images/green-and-white-stripe-sphere.png";
import category6 from  "../images/logo.png";
import category7 from "../images/logo-search-grid-desktop.png";
import category8 from "../images/logo-search-grid-desktop (1).png";

function Categories() {
  const categories = [
    {
      image: category1,
      title: "Html",
    },
    {
      image: category2,
      title: "Css",
    },
    {
      image: category3,
      title: "JavaScript",
    },
    {
      image: category4,
      title: "React",
    },
    {
      image: category5,
      title: "NodeJS",
    },
    {
      image: category6,
      title: "ExpressJS",
    },
    {
      image: category7,
      title: "MongoBD",
    },
    {
      image: category8,
      title: "MySql",
    },
  ];

  return (
    <div className="categories-container mx-3 py-3">
      <div className="container">
        <div className="title-container">
          <h2>Categories</h2>
        </div>
        <div className="categories">
          {categories.map(({ image, title, description }, index) => {
            return (
              <div className="category" key={index}>
                <img src={image} alt="Category" />
                <h4>{title}</h4>
              </div>
            );
          })}
        </div>
        <button>Show All</button>
      </div>
    </div>
  );
}

export default Categories;