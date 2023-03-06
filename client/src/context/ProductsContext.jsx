import { createContext, useEffect, useState } from "react";
import { fetchCategories } from "../services/categories";
import { fetchProducts } from "../services/products";

export const ProductsContext = createContext([]);

export const ProductsProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const data = await fetchCategories();
      setCategories(data);
    };

    const returnId = (product) => {
      for (let i = 0; i < categories.length; i++) {
        if (categories[i].category === product.category) {
          return categories[i].id;
        }
      }
    };

    const getProducts = async () => {
      const response = await fetchProducts();
      setProducts(
        response.products.map((product) => {
          return {
            ...product,
            catgoryId: () => returnId(product),
          };
        })
      );
    };
    getCategories();
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {props.children}
    </ProductsContext.Provider>
  );
};
