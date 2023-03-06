import { createContext, useContext, useEffect, useState } from "react";
import { fetchProducts } from "../services/products";
import { CategoriesContext } from "./CategoriesContext";

export const ProductsContext = createContext(null);

export const ProductsProvider = (props) => {
  const [minMax, setMinMax] = useState([]);
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

    if (products.length > 0) {
      let checked = [];

      categories.map((category) => {
        if (category.checked) {
          checked.push(category.id);
        }
      });

      if (checked.length > 0) {
        let filtered = [];
        products.map((product) => {
          if (checked.includes(product.categoryId)) {
            filtered.push(product);
          }
        });

        console.log(filtered);
        if (filtered.length > 0) {
          setMinMax([
            filtered.sort((a, b) => a.price - b.price)[0].price,
            filtered.sort((a, b) => a.price - b.price)[filtered.length - 1]
              .price,
          ]);
        }
      }
    }
  }, [categories]);

  return (
    <ProductsContext.Provider
      value={{ minMax, setMinMax, products, setProducts }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};
