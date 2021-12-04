import React, { useState, useEffect } from "react";
import "./Order.css";
const Order = ({ order, setOrder }) => {
  const [dishOrder, setDishOrder] = useState(false);
  useEffect(() => {
    if (order.length > 0) {
      setDishOrder(true);
    }
  }, [order]);
  const clearOrder = () => {
    setOrder([]);
    setDishOrder(false);
  };

  const takeOrder = (billOrder) => {
    const bill = Math.floor(Math.random() * 100);
    if (billOrder.length > 0) {
      var billuser = prompt(`You have placed the order \n Please pay ${bill}$`);
      billuser == bill
        ? alert("Order Placed")
        : billuser > bill
        ? alert(
            `Order Placed.Here is your balance ${billuser - bill}$. \nThankyou`
          )
        : alert(`Please pay ${bill - billuser}$ more to complete the payment`);
    } else {
      alert("Order List is empty");
    }
  };
  // console.log("My ", dishOrder);
  let yourOrder = order.map((item) => {
    return <li className="order-id">{item}</li>;
  });
  return (
    <div className={dishOrder ? "order" : "order-hidden"}>
      <div className="heading">Order List</div>
      <div>{yourOrder}</div>
      <button className="order-button" onClick={() => takeOrder(order)}>
        Take Order
      </button>
      <button className="order-button" onClick={clearOrder}>
        Clear Order
      </button>
    </div>
  );
};

export default Order;
