export const sellProduct = async (data) => {
  const [title, description, price, category, image] = data;
  fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: title,
      description: description,
      price: price,
      category: category,
      image: image,
    }),
  })
    .then((res) => res.json())
    .then(console.log);
};
