import { createContext, useContext, useEffect, useState } from "react";
import { fetchProducts } from "../services/products";
import { CategoriesContext } from "./CategoriesContext";

export const ProductsContext = createContext(null);

export const ProductsProvider = (props) => {
  const [products, setProducts] = useState([]);
  const { categories } = useContext(CategoriesContext);

  const returnId = (product) => {
    let categoryID;
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].category === product.category) {
        categoryID = categories[i].id;
        break;
      }
    }
    return categoryID;
  };
  const getProducts = async () => {
    const response = await fetchProducts();
    setProducts(
      response.products.map((product) => {
        return {
          ...product,
          categoryId: returnId(product),
        };
      })
    );
  };

  useEffect(() => {
    getProducts();
  }, [categories]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {props.children}
    </ProductsContext.Provider>
  );
};
