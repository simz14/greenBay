export const getMinMax = (filteredProducts) => {
  const products = filteredProducts.filter((product) => product.isShown);
  const sortedProducts =
    products.length > 0 ? products.sort((a, b) => a.price - b.price) : false;

  if (sortedProducts) {
    return { min: sortedProducts[0].price, max: sortedProducts.at(-1).price };
  }
  return { min: 0, max: 1000 };
};
