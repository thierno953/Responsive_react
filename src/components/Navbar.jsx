import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import {scroller} from 'react-scroll';
import { Link } from "react-router-dom";

function Navbar({ changeTheme, currentTheme }) {
  const [navState, setNavState] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavState(false));

  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
        duration: 800,
        delay: 50,
        smooth: true,
        offset: -80
    })
}

  return (
    <nav>
      <div className="container py-3 mx-3">
        <div className="brand">
          <span>THB</span>
          <span className="dot">.</span>
        </div>
        <div className="links-container" onClick={(e) => e.stopPropagation()}>
          <div className="toggle">
            {navState ? (
              <MdClose onClick={() => setNavState(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavState(true);
                }}
              />
            )}
            <div onClick={changeTheme}>
              {currentTheme === "dark" ? (
                <ImSun className="sun" />
              ) : (
                <BsFillMoonFill className="moon" />
              )}
            </div>
          </div>
          <div className={`links ${navState ? "responsive-toggle" : ""}`}>
            <ul>
           

              <li onClick={() => scrollToElement('Home')}>
                   <Link to='/' onClick={() => setNavState(false)}>Home</Link>
               </li>
               <li onClick={() => scrollToElement('Choose')}>
                   <Link to='/' onClick={() => setNavState(false)}>Choose</Link>
               </li>
               <li onClick={() => scrollToElement('Services')}>
                   <Link to='/' onClick={() => setNavState(false)}>Services</Link>
               </li>
         

               <li onClick={() => scrollToElement('Recommend')}>
                   <Link to='/' onClick={() => setNavState(false)}>Recommend</Link>
               </li>
              
               <li onClick={() => scrollToElement('Categories')}>
                   <Link to='/' onClick={() => setNavState(false)}>Categories</Link>
               </li>
               <li onClick={() => scrollToElement('Products')}>
                   <Link to='/' onClick={() => setNavState(false)}>Products</Link>
               </li>
               <li onClick={() => scrollToElement('Promo')}>
                   <Link to='/' onClick={() => setNavState(false)}>Promo</Link>
               </li>
               
              <li onClick={changeTheme} className="color-mode">
                {currentTheme === "dark" ? (
                  <ImSun className="sun" />
                ) : (
                  <BsFillMoonFill className="moon" />
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
