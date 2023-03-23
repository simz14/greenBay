export const fetchCategories = async () => {
  const response = new Promise((res, rej) => {
    res([
      {
        category: "smartphones",
        id: 1,
        image:
          "https://image.coolblue.nl/transparent/max/422x390/content/1d5ff4d5652882a021151ff15bbdbdd0",
      },
      {
        category: "skincare",
        id: 4,
        image:
          "https://cdn.shopify.com/s/files/1/0062/2516/6418/products/5_grande.png?v=1663111780",
      },
      {
        category: "laptops",
        id: 2,
        image:
          "https://media.cnn.com/api/v1/images/stellar/prod/221110144914-best-laptops-2022-lead-image-cnnu.jpg?c=original",
      },
      {
        category: "fragrances",
        id: 3,
        image:
          "https://www.loccitane.com/dw/image/v2/BDQL_PRD/on/demandware.static/-/Library-Sites-OCC_SharedLibrary/default/dwa2626b7c/images/CLP/women_fragrances_module.jpg?sw=670&sh=424",
      },
      {
        category: "home-decoration",
        id: 6,
        image:
          "https://media.istockphoto.com/id/1182454657/photo/bohemian-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=qw37MGIiTL_jML3_Tbm4bM-jNLCrocSWj7DanhBr_bY=",
      },
      { category: "groceries", id: 5 },
      { category: "furniture", id: 7 },
      { category: "tops", id: 8 },
      { category: "womens-dresses", id: 9 },
      { category: "womens-shoes", id: 10 },
      { category: "mens-shirts", id: 11 },
      { category: "mens-shoes", id: 12 },
      { category: "mens-watches", id: 13 },
      { category: "womens-watches", id: 14 },
      { category: "womens-bags", id: 15 },
      { category: "womens-jewellery", id: 16 },
      { category: "sunglasses", id: 17 },
      { category: "automotive", id: 18 },
      { category: "motorcycle", id: 19 },
      { category: "lighting", id: 20 },
    ]);
  });
  return response;
};
