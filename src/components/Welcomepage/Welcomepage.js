import React from "react";
import Headers from "../Icon/Icon";
import "./Welcomepage.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "../About/About";
import Contactus from "../Contactus/Contactus";
import App from "../../App";
import Cart from "../Cart/Cart";
const Welcomepage = () => {
  return (
    <>
      <div className="landing-page">
        <div className="delicious-meals">Delicious Meals</div>

        <div className="quotes">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
          veniam esse delectus soluta suscipit reiciendis porro excepturi
          exercitationem harum tenetur laudantium debitis atque quo modi
          nesciunt, accusamus dolorum mollitia doloribus.
        </div>
      </div>
    </>
  );
};

export default Welcomepage;
