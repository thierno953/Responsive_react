import React from "react";
import home from "../images/undraw_by_my_car_ttge.svg";
function Home() {
  return (
    <div className="home">
      <div className="container mx-3 py-3">
        <div className="title-container">
          <h2>WEB DEVELOPER FRONTEND & BACKEND</h2>
          <p>Thierno Mamadou Barry</p>
        </div>
        <div className="extra-image">
          <img src={home} alt="Home" />
        </div>
      </div>
    </div>
  );
}

export default Home;