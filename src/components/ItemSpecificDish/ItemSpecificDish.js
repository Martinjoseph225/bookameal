import React, { useContext, useState, useEffect } from "react";
import Cart from "../Cart/Cart";

import "./ItemSpecificDish.css";

const ItemSpecificDish = ({ val }) => {
  const icon = (
    <img
      className="back-image"
      src="data:image/jpeg;base64,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"
      alt="test"
    />
  );
  const [dish, setDish] = useState([]);
  const [hiddenCart, sethiddenCart] = useState(true);
  const [dishName, setDishName] = useState("");
  const [order, setOrder] = useState([]);
  const orderFood = (meal) => {
    setOrder([...order, meal]);
    sethiddenCart(false);
  };
  const handleCart = () => {
    sethiddenCart(!hiddenCart);
  };

  // console.log("oders", order);
  async function getDishes(value) {
    const API_URL = `https:www.themealdb.com/api/json/v1/1/filter.php?c=${value}`;
    let response = await fetch(API_URL);
    let singleDishData = await response.json();
    setDish(singleDishData.meals);
  }
  useEffect(() => {
    getDishes(val);
    setDishName(val);
  }, [val]);
  //   console.log("datadish", dish);

  let SpecificDish = dish?.map((item) => {
    return (
      <div className="item-specific">
        <li className="item-specific-li">
          {item.strMeal}
          <img className="image" src={item.strMealThumb} />
        </li>
        <div className="order-food">
          <button
            className="order-button"
            onClick={() => orderFood(item.strMeal)}
          >
            Add
          </button>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="specific-dish">
        <div className={dishName ? "dishname" : "dishname-hidden"}>
          {dishName} Dishes
        </div>
        <div className="bgc">
          <ul className="dish-list">{SpecificDish}</ul>
        </div>
        <div className="cart" onClick={handleCart}>
          Cart
        </div>
      </div>
      <div>
        {!hiddenCart && (
          <Cart
            hiddenCart={hiddenCart}
            sethiddenCart={sethiddenCart}
            order={order}
            setOrder={setOrder}
          />
        )}
      </div>
    </div>
  );
};

export default ItemSpecificDish;
