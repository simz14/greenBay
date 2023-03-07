import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Container } from "@mui/material";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";
import { CategoriesContext } from "../context/CategoriesContext";
import { ProductsContext } from "../context/ProductsContext";
import { BiRightArrowAlt } from "react-icons/bi";

const HomeContainer = styled.div``;
const CategoryContent = styled.div`
  margin: 1rem;
  padding: 1rem;
`;
const ProductImageWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const ProductImage = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  border-radius: 50%;
`;
const ArrowIcon = styled(BiRightArrowAlt)`
  display: flex;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
`;
const Home = () => {
  const { cartItems } = useContext(CartContext);
  const { categories, setCategories } = useContext(CategoriesContext);
  const { products } = useContext(ProductsContext);
  const navigate = useNavigate();

  const handleClickCategory = (categoryId) => {
    setCategories(
      categories.map((category) => {
        if (category.id == categoryId) {
          category.checked = !category.checked;
        }
        return category;
      })
    );
    navigate("/products");
  };

  return (
    <HomeContainer>
      <Header showAuth={false} cartItems={cartItems} />
      <Container>
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
              <ArrowIcon onClick={() => handleClickCategory(category.id)} />
            </CategoryContent>
          );
        })}
      </Container>
      <Footer />
    </HomeContainer>
  );
};
export default Home;
