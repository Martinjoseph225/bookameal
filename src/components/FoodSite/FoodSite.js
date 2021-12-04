import React from "react";

import { AllMenus } from "../context/AllMenuContext";
import Items from "../items/Items";

import Welcomepage from "../Welcomepage/Welcomepage";

const FoodSite = () => {
  return (
    <div>
      <Welcomepage />
      <AllMenus>
        <Items />
      </AllMenus>

      {/* <ItemSpecificDish /> */}
    </div>
  );
};

export default FoodSite;
