import React, { useEffect, useState } from "react";
import { getAllProducts } from "../api/api";

export const TestContext = React.createContext();

export default function Test(props) {

    const state = {
        title: "401d15",
        twitter: 'xpsbox'
    }

  const [products, setProducts] = useState("");
  const [error, setError] = useState("");

  const loadItems = async () => {
    await getAllProducts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };
    
      useEffect(() => {
    console.log("iiiiiiii", products);
    loadItems();
  }, []);
    return (
        <TestContext.Provider value={products}>
            {props.children}
        </TestContext.Provider>
    )
}