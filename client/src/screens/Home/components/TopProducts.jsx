import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ProductsContext } from "../../../context/ProductsContext";
import Product from "../../Products/components/Product";

const TopProductsWrapper = styled.div`
  display: flex;
`;

const TopProducts = () => {
  const { products } = useContext(ProductsContext);
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    const sorted = products.sort((a, b) => b.rating - a.rating);
    setTopProducts(sorted.slice(0, 5));
  }, [products]);

  console.log(topProducts);
  return (
    <TopProductsWrapper>
      {topProducts.map((product) => {
        return <Product key={product.id} item={product} />;
      })}
    </TopProductsWrapper>
  );
};

export default TopProducts;
