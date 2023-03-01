import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { fetchProducts } from "../services/products";
import Product from "../components/Product";
import { CartContext } from "../context/CartContext";

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Home = () => {
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

  return (
    <div>
      <Header showAuth={false} cartItems={cartItems} />
      <Container>
        <ContentWrapper>
          {products.map((item) => {
            return <Product key={item.id} item={item} />;
          })}
        </ContentWrapper>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
