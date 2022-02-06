import React from "react";
import { HiArrowSmRight } from "react-icons/hi";
import service1 from "../images/logo-search-grid-desktop.png";
import service2 from "../images/logo-search-grid-desktop.png";
import service3 from "../images/logo-search-grid-desktop (1).png";
import service4 from "../images/logo.png";
function Services() {
  return (
    <div className="services-container mx-3 py-3">
      <div className="container">
        <div className="service one">
        <div className="image">
            <img src={service1} alt="service" />
          </div>
          <h4>Frontend</h4>
          <p> Html & Css</p>
          <button>Learn More</button>
         
        </div>
        <div className="service two">
          <div className="content">
            <h4>Frontend</h4>
            <p>
              React <HiArrowSmRight />
            </p>
          </div>
          <div className="image">
            <img src={service2} alt="service" />
          </div>
        </div>
        <div className="service three">
          <div className="image">
            <img src={service3} alt="service" />
          </div>
          <div className="content">
            <h4>Backend</h4>
            <p>
              NodeJS <HiArrowSmRight />
            </p>
          </div>
        </div>
        <div className="service four">
        <h4>Backend</h4>
          <p>ExpressJS</p>
          <p>
            MongoDB && Sql <HiArrowSmRight />
          </p>
          <div className="image">
            <img src={service4} alt="service" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;