import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../components/Container";
import Header from "../components/Header";
import { fetchProducts } from "../services/products";

const ContentWrapper = styled.div``;

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchProducts();
      const data = await response.json();
      setProducts(data.products);
    };
    fetchData();
  }, []);
  console.log(products);
  return (
    <div>
      <Header showAuth={false} />
      <Container>
        <ContentWrapper>
          {products.map((item) => {
            return (
              <div>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <span>{item.price}</span>
              </div>
            );
          })}
        </ContentWrapper>
      </Container>
    </div>
  );
};

export default Home;
