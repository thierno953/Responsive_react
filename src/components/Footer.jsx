import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  const data = [
    {
      type: "Frontend",
      subTypes: [
        "Html",
        "Css",
        "JavaScript",
        "React",
       
      ],
    },
    {
      type: "Backend",
      subTypes: [
        "NodeJS",
        "ExpressJS",
        "MongDB",
        "MySql",
      ],
    },
    {
      type: "Company",
      subTypes: ["About", "Terms"],
    },
    {
      type: "More",
      subTypes: ["Documentation", "Information"],
    },
  ];

  return (
    <footer className="py-3 mx-3">
      <div className="brand-container">
        <div className="brand">
          <span>THB</span>
          <span className="dot">.</span>
        </div>
        <p className="description">
        thiernobarry554@gmail.com
        </p>
        <p className="description">
        04 66 24 01 03
        </p>

      
      </div>
      <div className="links">
        {data.map(({ type, subTypes }, index) => {
          return (
            <div className="link" key={index}>
              <h3 className="title">{type}</h3>
              <ul>
                {subTypes.map((type, index) => (
                  <li key={index}>
                    <Link to="/">{type}</Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </footer>
  );
}

export default Footer;