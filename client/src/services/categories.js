export const fetchCategories = async () => {
  const categories = await fetch("https://dummyjson.com/products/categories");
  const data = await categories.json();
  let dataAndId = [];
  for (let i = 0; i < data.length; i++) {
    dataAndId.push({ id: i + 1, category: data[i], checked: false });
  }
  return dataAndId;
};
