import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { fetchProducts } from "../services/products";
import Product from "../components/Product";
import FilterForm from "../components/FilterForm";
import { CartContext } from "../context/CartContext";

const PorductsWrapper = styled.div`
  width: 100%;
`;

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const Content = styled.div`
  display: grid;
  grid-column: 2/5;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
`;
const Products = () => {
  const [products, setProducts] = useState([]);
  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchProducts();
      const data = await response.json();
      setProducts(data.products);
    };
    fetchData();
  }, []);
  /*products.map((item) => {
    console.log(item.category);
  });*/

  return (
    <PorductsWrapper>
      <Header showAuth={false} cartItems={cartItems} />
      <Container>
        <ProductsWrapper>
          <FilterForm />

          <Content>
            {products.map((item) => {
              return <Product key={item.id} item={item} />;
            })}
          </Content>
        </ProductsWrapper>
      </Container>
      <Footer />
    </PorductsWrapper>
  );
};

export default Products;
