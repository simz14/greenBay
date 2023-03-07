import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../../components/Container";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Product from "./Product";
import FilterForm from "./FilterForm";
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
  align-items: center;
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

  const [price, setPrice] = useState([0, 1000]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    categories && setFilteredCategories(categories);
    products &&
      setFilteredProducts(() =>
        products.map((product) => {
          return { ...product, isShown: true };
        })
      );
  }, [products, categories]);

  const filterHandler = (e) => {
    console.log(filteredCategories);
    setFilteredCategories(
      filteredCategories.map((category) => {
        if (category.id == e.target.value) {
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
      <Header showAuth={false} cartItems={cartItems} />
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
