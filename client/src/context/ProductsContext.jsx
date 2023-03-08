import { createContext, useContext, useEffect, useState } from "react";

import { CategoriesContext } from "./CategoriesContext";

export const ProductsContext = createContext(null);

export const ProductsProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
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
    try {
      setLoading(true);
      const allProducts = await fetch(
        "https://dummyjson.com/products?limit=50"
      );
      const data = await allProducts.json();

      setProducts(
        data.products.map((product) => {
          return {
            ...product,
            categoryId: returnId(product),
          };
        })
      );
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, [categories]);

  return (
    <ProductsContext.Provider value={{ products, setProducts, loading }}>
      {props.children}
    </ProductsContext.Provider>
  );
};
