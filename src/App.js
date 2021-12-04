import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FoodSite from "./components/FoodSite/FoodSite";
import About from "./components/About/About";
import { useState } from "react";
import { Link, Switch } from "react-router-dom";
import Contactus from "./components/Contactus/Contactus";
import Fullapp from "./components/Fullapp/Fullapp";

function App() {
  return (
    <div className="App">
      <Fullapp />
    </div>
  );
}

export default App;
