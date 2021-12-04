import React, { useState, useEffect } from "react";

export const AllMenuContext = React.createContext();

export const AllMenus = (props) => {
  let [loading, setLoading] = useState(true);
  let [menu, setMenu] = useState([]);
  async function getALLTheMenus() {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
    let response = await fetch(API_URL);
    let data = await response.json();
    setMenu(data.categories);
    setLoading(false);
  }
  useEffect(() => {
    getALLTheMenus();
  }, []);
  return (
    <AllMenuContext.Provider value={menu}>
      {!loading ? (
        props.children
      ) : (
        <div className="loader">
          <h1>Loading</h1>
        </div>
      )}
    </AllMenuContext.Provider>
  );
};
