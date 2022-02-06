import React from "react";
import choose from "../images/undraw_going_up_re_86kg.svg";
import choose1 from "../images/choose1.png";
import choose2 from "../images/choose2.png";
import choose3 from "../images/choose3.png";
import choose4 from "../images/choose4.png";

function Chooseus() {
  const data = [
    {
      image: choose1,
      title: "PERSONAL STYLE",
      description: "Producing quality work is a priority for me",
    },
    {
      image: choose2,
      title: "I COULD BE MORE EFFECTIVE",
      description: " I listen to ideas, suggestions and comments",
    },
    {
      image: choose3,
      title: "MY WAY OF MANAGING MY ENERGY",
      description:
        " I channel my energy into finding my bearings and establishing reliable benchmarks.",
    },
    {
      image: choose4,
      title: "PROBLEMS I CAN HANDLE",
      description:
        "Brilliant from an intellectual point of view, I tend to easily adapt concepts that were initially foreign.",
    },
  ];
  return (
    <div className="choose-us-container mx-3 py-3">
      <div className="container">
        <div className="title-container">
          <h2>Why this blog ?</h2>
          <p>
            This blog was created to share my experiences in the world of
            technology and my experience as a junior web developer. Learn best
            practices and develop my skills. Basically, you will find
            information about my extensive skills needed as a web developer. I
            try, as far as possible, to bring something concrete from my daily
            life.
          </p>
        </div>
        <div className="content">
          <div className="choose-us">
            {data.map(({ image, title, description }, index) => {
              return (
                <div className="choose" key={index}>
                  <img src={image} alt="choose" />
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              );
            })}
          </div>
          <div className="delivery">
            <img src={choose} alt="delivery" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chooseus;
