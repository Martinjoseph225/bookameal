import React, { useState } from "react";
import { Link, Switch, BrowserRouter as Router, Route } from "react-router-dom";
import About from "../About/About";
import Cart from "../Cart/Cart";
import Contactus from "../Contactus/Contactus";
import FoodSite from "../FoodSite/FoodSite";
const Fullapp = () => {
  const [hiddenAbout, sethiddenAbout] = useState(true);
  const [hiddenContact, sethiddenContact] = useState(true);

  const handleAbout = () => {
    sethiddenAbout(!hiddenAbout);
  };
  const handleContact = () => {
    sethiddenContact(!hiddenContact);
  };

  const [orderCart, setOrderCart] = useState("");
  return (
    <div>
      <FoodSite />
      <Router>
        <Link to="/bookameal" className="home">
          Home
        </Link>
        <Link to="/bookameal/about" className="about" onClick={handleAbout}>
          About
        </Link>
        <Link
          to="/bookameal/contactus"
          className="contact-us"
          onClick={handleContact}
        >
          Contact Us
        </Link>
        {/* <Link to="/cart" className="cart" onClick={handleCart}>
          Cart
        </Link> */}
        <Switch>
          <Route path="/bookameal/about">
            <About hiddenAbout={hiddenAbout} sethiddenAbout={sethiddenAbout} />
          </Route>
          <Route path="/bookameal/contactus">
            <Contactus
              hiddenContact={hiddenContact}
              sethiddenContact={sethiddenContact}
            />
          </Route>
          {/* <Route path="/cart">
            <Cart hiddenCart={hiddenCart} sethiddenCart={sethiddenCart} />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
};

export default Fullapp;
