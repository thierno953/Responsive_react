import React from "react";
import recommend1 from "../images/undraw_going_up_re_86kg.svg";
import recommend2 from "../images/undraw_in_the_office_re_jtgc.svg";
import recommend3 from "../images/undraw_interview_re_e5jn.svg";
import recommend4 from "../images/undraw_mobile_development_re_wwsn.svg";

function Recommend() {
  const data = [
    {
      image: recommend1,
      text: "I like to develop my ideas.",
    },
    {
      image: recommend2,
      text: "I like to develop my ideas, work in a team and I always try to bring my points of view.",
    },
    {
      image: recommend3,
      text: "Always passionate about the web.",
    },
    {
      image: recommend4,
      text: "je souhaite mettre mes compétences au service d'une entreprise à la culture innovante.",
    },
  ];

  return (
    <div className="recommend-container mx-3 py-3">
      <div className="container">
        <div className="title-container">
          <h2>Team working</h2>
        </div>
        <div className="categories">
          {data.map(({ image, text }, index) => {
            return (
              <div className="category" key={index}>
                <img src={image} alt="Category" />
                <h4>{text}</h4>
              </div>
            );
          })}
        </div>
        <button>Show All</button>
      </div>
    </div>
  );
}

export default Recommend;