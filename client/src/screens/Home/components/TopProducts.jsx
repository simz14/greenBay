import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ProductsContext } from "../../../context/ProductsContext";
import Product from "../../Products/components/Product";

const TopProductsWrapper = styled.div`
  display: grid;
  grid-template-columns:
    minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)
    minmax(0, 1fr);
  gap: 1rem;
  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }
`;

const TopProducts = () => {
  const { products } = useContext(ProductsContext);
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    const sorted = products.sort((a, b) => b.rating - a.rating);
    setTopProducts(sorted.slice(0, 6));
  }, [products]);

  return (
    <TopProductsWrapper>
      {topProducts.map((product) => {
        return <Product key={product.id} item={product} />;
      })}
    </TopProductsWrapper>
  );
};

export default TopProducts;
