import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Contactus.css";
const Contactus = (props) => {
  const closeAbout = () => {
    props.sethiddenContact(!props.hiddenContact);
  };
  return (
    <div className={props.hiddenContact ? "hidden-page" : "about-page"}>
      <div className="contact">Contact Us</div>
      <div className="container-contact">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
          dolorem perspiciatis dolor nihil hic nemo ipsum, quia accusantium
          expedita ea vero perferendis unde ipsa beatae corporis? Dicta nisi
          doloremque aliquid.
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

export default Contactus;
