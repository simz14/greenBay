import { fetchCategories } from "./categories";

export const fetchProducts = async () => {
  const allProducts = await fetch("https://dummyjson.com/products?limit=100");
  const data = await allProducts.json();
  return data;
};
