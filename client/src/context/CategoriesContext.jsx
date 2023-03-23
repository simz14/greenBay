import { createContext, useEffect, useState } from "react";
import { fetchCategories } from "../services/categories";

export const CategoriesContext = createContext({
  categories: [],
  setCategories: () => {},
});

export const CategoriesProvider = (props) => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const data = await fetchCategories();
    setCategories(data);
  };
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories, setCategories }}>
      {props.children}
    </CategoriesContext.Provider>
  );
};
