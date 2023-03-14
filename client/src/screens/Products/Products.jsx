import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../components/Container";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Product from "./components/Product";
import FilterForm from "./components/FilterForm";
import { CartContext } from "../../context/CartContext";
import { ProductsContext } from "../../context/ProductsContext";
import { CategoriesContext } from "../../context/CategoriesContext";
import { CircularProgress } from "@mui/material";

const ProductsContainer = styled.div`
  width: 100%;
`;

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
const ProductsBox = styled.div`
  min-height: 100vh;
  display: grid;
  grid-column: 2/4;
  justify-content: center;
`;
const Content = styled.div`
  display: grid;
  grid-column: 2/5;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
`;
const Products = () => {
  const { products, loading } = useContext(ProductsContext);
  const { categories } = useContext(CategoriesContext);
  const { cartItems } = useContext(CartContext);

  const [price, setPrice] = useState([0, 2000]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const params = useParams();
  const categoryId = params.categoryId;

  useEffect(() => {
    categories &&
      setFilteredCategories(() =>
        categories.map((category) => {
          if (category.id == categoryId) {
            return { ...category, checked: true };
          }
          return category;
        })
      );

    if (filteredProducts.length > 0) {
      const max = filteredProducts
        .sort((a, b) => a.price - b.price)
        .at(-1).price;
      setPrice([0, max]);
    }
    console.log(price);

    products &&
      setFilteredProducts(() =>
        products.map((product) => {
          if (categoryId) {
            if (product.categoryId == categoryId) {
              return { ...product, isShown: true };
            }
            return { ...product, isShown: false };
          }
          return { ...product, isShown: true };
        })
      );
  }, [products, categories]);

  const filterHandler = (value) => {
    setFilteredCategories(
      filteredCategories.map((category) => {
        if (category.id == value) {
          category.checked = !category.checked;
        }
        return category;
      })
    );

    setFilteredProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (
          filteredCategories.find(
            (category) => category.id == product.categoryId && category.checked
          )
        ) {
          return { ...product, isShown: true };
        }
        return { ...product, isShown: false };
      })
    );

    // If all unchecked to show all products
    let all = true;
    filteredCategories.map((category) => {
      if (category.checked) {
        all = false;
      }
    });
    all &&
      setFilteredProducts((prev) =>
        prev.map((product) => {
          return { ...product, isShown: true };
        })
      );
  };

  const handleChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <ProductsContainer>
      <Header cartItems={cartItems} />
      <Container>
        <ProductsWrapper>
          <FilterForm
            price={price}
            setPrice={handleChange}
            filteredProducts={filteredProducts}
            filteredCategories={filteredCategories}
            setCategories={filterHandler}
          />
          <ProductsBox>
            {loading ? (
              <CircularProgress sx={{ color: "#73c69c" }} />
            ) : (
              <Content>
                {filteredProducts.map(
                  (item) =>
                    item.isShown &&
                    item.price >= price[0] &&
                    item.price <= price[1] && (
                      <Product key={item.id} item={item} />
                    )
                )}
              </Content>
            )}
          </ProductsBox>
        </ProductsWrapper>
      </Container>
      <Footer />
    </ProductsContainer>
  );
};

export default Products;
