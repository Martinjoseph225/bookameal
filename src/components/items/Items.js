import React, { useContext } from "react";
import { useState } from "react";
import { AllMenuContext } from "../context/AllMenuContext";
import ItemSpecificDish from "../ItemSpecificDish/ItemSpecificDish";
import "./Items.css";
const Items = () => {
  const [val, setVal] = useState("");
  const category = useContext(AllMenuContext);
  const [showItem, setShowItem] = useState(false);
  const showCategory = (itemCategory) => {
    setShowItem(true);
    setVal(itemCategory);
  };

  let foodcategory = category.map((item) => {
    return (
      <ul className="list">
        <li className="lilist" onClick={() => showCategory(item.strCategory)}>
          {item.strCategory}
          <img src={item.strCategoryThumb} className="image" />
        </li>
      </ul>
    );
  });

  return (
    <div className="category">
      <div className="selectdish">Select Dish Category</div>
      <div className="container-first">{foodcategory}</div>

      <div className="container">
        <ItemSpecificDish val={val} />
      </div>
    </div>
  );
};

export default Items;
