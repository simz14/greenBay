export const fetchProducts = async () => {
  const products = await fetch("https://dummyjson.com/products?limit=200");
  return products;
};
