import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { URL } from "../helpers/localhostURL";

export const ItemContext = createContext(
  undefined
);

export function ItemProvider({ children }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`${URL}/api/ads_platform`);
        
        setItems(response.data);
      } catch (err) {
        setError("fail");
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  return (
    <ItemContext.Provider value={{ items, loading, error }}>
      {children}
    </ItemContext.Provider>
  );
}

export const useItemContext = () => {
  const context = React.useContext(ItemContext);
  if (!context) {
    throw new Error("useContext must be used within ItemContext");
  }
  return context;
};