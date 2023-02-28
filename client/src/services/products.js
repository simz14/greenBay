export const fetchProducts = async () => {
  const products = await fetch("https://dummyjson.com/products");
  return products;
};
