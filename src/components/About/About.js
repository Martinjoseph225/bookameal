import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./About.css";
const About = (props) => {
  const closeAbout = () => {
    props.sethiddenAbout(!props.hiddenAbout);
  };
  return (
    <div className={props.hiddenAbout ? "hidden-page" : "about-page"}>
      <div className="about-des">About Us</div>
      <div className="text">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
          nesciunt officiis animi magnam quaerat magni tempora! Velit ipsam
          impedit dolores animi iusto laboriosam quibusdam optio sint est
          sapiente, fugiat reiciendis.
        </p>
      </div>

      <Router>
        <Link to="/" className="about-close" onClick={closeAbout}>
          Go To Home
        </Link>
      </Router>
    </div>
  );
};

export default About;
