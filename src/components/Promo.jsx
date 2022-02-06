import React from "react";
import promo from "../images/undraw_going_up_re_86kg.svg";
function Promo() {
  return (
    <div className="promo-container">
      <div className="container mx-3 py-3">
        <div className="content">
          <div className="title-container">
            <h2>Enter your e-mail</h2>
            <p>
            I always give customers a promotion for their loyalty. Just subscribe 
            </p>
          </div>
          <div className="subscribe-container">
            <input type="email" placeholder="Email@gmail.com" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="promo-image">
          <img src={promo} alt="Promo" />
        </div>
      </div>
    </div>
  );
}

export default Promo;