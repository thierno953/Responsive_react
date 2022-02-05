import React, { useEffect, useState } from 'react';
import "./scss/index.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Categories from './components/ Categories';
import Services from './components/Services.';
import Home from './components/Home';
import Recommend from './components/Recommend';
import Choose from './components/Choose';
import Products from './components/Products';
import Promo from './components/Promo';
import scrollreveal from "scrollreveal";
import ScrollTop from './components/ScrollTop';
import { Element } from "react-scroll";

function App() {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 1000,
        reset: false,
      });
      sr.reveal(
        `
        nav,
        .home,
        .services-container,
        .categories-container,
        .recommend-container,
        .choose-us-container,
        .products-container,
        .promo-container,
        footer
    `,
        {
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);
  window.setTimeout(() => {
    const home = document.getElementsByClassName("home");
    home[0].style.transform = "none";
  }, 1500);

  return (
    <Router>
    <div data-theme={theme} className="app">
    <ScrollTop />
    <Navbar changeTheme={changeTheme} currentTheme={theme} />
    <Element className="Home">
        <Route exact path="/" component={Home} />
    </Element>
    <Element className="Choose">
        <Route exact path="/" component={Choose} />
    </Element>
    <Element className="Services">
        <Route exact path="/" component={Services} />
    </Element>

    <Element className="Recommend">
        <Route exact path="/" component={Recommend} />
    </Element>
    <Element className="Categories">
        <Route exact path="/" component={Categories} />
    </Element>
    <Element className="Products">
        <Route exact path="/" component={Products} />
    </Element>
    <Element className="Promo">
        <Route exact path="/" component={Promo} />
    </Element>
    <Footer />
  </div>
  </Router>
  );
}

export default App;
