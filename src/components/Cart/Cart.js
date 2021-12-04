import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Order from "../Order/OrderFood";
import "./Cart.css";

const Cart = ({ hiddenCart, sethiddenCart, order, setOrder }) => {
  const img = (
    <img
      className="back-image"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3KeWql2sSJW9WhT7VSxOhgN1IzxV4ucqX3g&usqp=CAU"
      alt="test"
    />
  );
  const closeCart = () => {
    sethiddenCart(!hiddenCart);
  };
  const [dishOrder, setDishOrder] = useState(false);
  useEffect(() => {
    if (order.length > 0) {
      setDishOrder(true);
    }
  }, [order]);
  const clearOrder = () => {
    setOrder([]);
    sethiddenCart(true);
    setDishOrder(false);
  };

  // console.log("My ", dishOrder);
  let yourOrder = order.map((item) => {
    return <li className="order-id">{item}</li>;
  });
  return (
    <div>
      <div className={hiddenCart ? "hidden-cart" : "cart-page"}>
        <Router>
          <Link to="/" className="about-close" onClick={closeCart}>
            {img}
          </Link>
        </Router>
        {/* {yourOrder} */}

        <div className={dishOrder ? "order1" : "order-hidden"}>
          <div className="heading">Order List</div>
          <div>{yourOrder}</div>
          <button className="order-button">Take Order</button>
          <button className="order-button" onClick={clearOrder}>
            Clear Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
