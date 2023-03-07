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
  const { products } = useContext(ProductsContext);
  const { categories } = useContext(CategoriesContext);
  const { cartItems } = useContext(CartContext);

  const [price, setPrice] = useState([0, 1000]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    products &&
      setFilteredProducts(() =>
        products.map((product) => {
          return { ...product, isShown: true };
        })
      );
    categories && setFilteredCategories(categories);
  }, [products, categories]);

  const filterHandler = (e) => {
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
    <PorductsWrapper>
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

          <Content>
            {filteredProducts.map(
              (item) =>
                item.isShown &&
                item.price >= price[0] &&
                item.price <= price[1] && <Product key={item.id} item={item} />
            )}
          </Content>
        </ProductsWrapper>
      </Container>
      <Footer />
    </PorductsWrapper>
  );
};

export default Products;
