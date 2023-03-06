import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Product from "../components/Product";
import FilterForm from "../components/FilterForm";
import { CartContext } from "../context/CartContext";
import { ProductsContext } from "../context/ProductsContext";
import { CategoriesContext } from "../context/CategoriesContext";

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
  const { minMax, setMinMax, products } = useContext(ProductsContext);
  const { categories, setCategories } = useContext(CategoriesContext);
  const { cartItems } = useContext(CartContext);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    let checked = [];
    categories.map((category) => {
      if (category.checked && !checked.includes(category.id)) {
        checked.push(category.id);
      }
    });

    setFilters(checked);
  }, [categories]);

  return (
    <PorductsWrapper>
      <Header showAuth={false} cartItems={cartItems} />
      <Container>
        <ProductsWrapper>
          <FilterForm categories={categories} setCategories={setCategories} />

          <Content>
            {products.map((item) => {
              if (filters.length < 1) {
                return <Product key={item.id} item={item} />;
              } else {
                if (filters.includes(item.categoryId)) {
                  return <Product key={item.id} item={item} />;
                }
              }
            })}
          </Content>
        </ProductsWrapper>
      </Container>
      <Footer />
    </PorductsWrapper>
  );
};

export default Products;
