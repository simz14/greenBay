import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Container } from "@mui/material";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";
import { CategoriesContext } from "../context/CategoriesContext";
import { ProductsContext } from "../context/ProductsContext";
import { UserContext } from "../context/UserContext";
import { BiRightArrowAlt } from "react-icons/bi";

const HomeContainer = styled.div``;
const CategoryContent = styled.div``;
const ProductImageWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const Greeting = styled.h3`
  color: #73c69c;
  border: 1px solid #73c69c;
  width: 10%;
  padding: 1rem;
  border-radius: 10px;
`;
const ProductImage = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  border-radius: 50%;
`;
const SeeAll = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const ArrowIcon = styled(BiRightArrowAlt)`
  display: flex;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
`;
const Home = () => {
  const { cartItems } = useContext(CartContext);
  const { categories } = useContext(CategoriesContext);
  const { products } = useContext(ProductsContext);
  const { username } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClickCategory = () => {
    navigate("/products");
  };

  return (
    <HomeContainer>
      <Header showAuth={false} cartItems={cartItems} />
      <Container>
        <Greeting>Hello {username}!</Greeting>
        {categories.map((category) => {
          return (
            <CategoryContent key={category.id}>
              <h2>{category.category}</h2>
              <ProductImageWrapper>
                {products.map((product) => {
                  if (product.categoryId === category.id) {
                    return (
                      <ProductImage key={product.id} src={product.images[0]} />
                    );
                  }
                })}
              </ProductImageWrapper>
              <SeeAll>
                {" "}
                <p>See all</p>
                <ArrowIcon onClick={() => handleClickCategory()} />
              </SeeAll>
            </CategoryContent>
          );
        })}
      </Container>
      <Footer />
    </HomeContainer>
  );
};
export default Home;
