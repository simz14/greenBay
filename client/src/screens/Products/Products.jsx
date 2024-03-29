import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../components/Container";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import Product from "./components/Product";
import FilterForm from "./components/FilterForm";
import { CartContext } from "../../context/CartContext";
import { ProductsContext } from "../../context/ProductsContext";
import { CategoriesContext } from "../../context/CategoriesContext";
import {
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { BsFilterLeft } from "react-icons/bs";
import FilterComp from "./components/FilterComponent";

const StyledFormControl = styled(FormControl)`
  display: grid;
  width: 30%;
  justify-self: flex-end;
  grid-column: 1/4;
  grid-row: 1/2;
  & .MuiSelect-select {
    padding: 1rem;
  }
`;

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  margin-bottom: auto;
  margin-top: 5rem;
  & .filtersScreenLess900 {
    display: none;
  }

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr;

    .filtersScreenLess900 {
      display: grid;
      width: 2rem;
      height: 2rem;
      cursor: pointer;
    }
  }
`;
const ProductsBox = styled.div`
  min-height: 100vh;
  display: grid;
  grid-column: 2/4;
  justify-content: center;
  @media (max-width: 900px) {
    display: grid;
    grid-column: 1/3;
  }
`;
const Content = styled.div`
  display: grid;
  grid-column: 2/5;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
  gap: 1rem;
  margin-bottom: auto;

  @media (max-width: 650px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }

  @media (max-width: 450px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const StyledFilterForm = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
`;

const FilterCompWrapper = styled.div`
  @media (min-width: 900px) {
    display: none;
  }
`;

const StyledFilterIcon = styled(BsFilterLeft)`
  display: grid;
  grid-column: 1/2;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  grid-row: 1/2;
  align-self: center;
`;
const Products = () => {
  const { products, loading } = useContext(ProductsContext);
  const { categories } = useContext(CategoriesContext);
  const { cartItems } = useContext(CartContext);
  const [price, setPrice] = useState([0, 2000]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [orderOfProducts, setOrderOfProducts] = useState("");
  const [showFilterComp, setShowFilterComp] = useState(false);

  const params = useParams();
  const categoryId = params.categoryId;

  useEffect(() => {
    categories &&
      setFilteredCategories(() =>
        categories.map((category) => {
          if (category.id == categoryId) {
            return { ...category, checked: true };
          } else {
            return { ...category, checked: false };
          }
        })
      );

    if (filteredProducts.length > 0) {
      const max = filteredProducts
        .sort((a, b) => a.price - b.price)
        .at(-1).price;
      setPrice([0, max]);
    }

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
    setFilteredCategories((prev) =>
      prev.map((category) => {
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
    if (filteredProducts.length > 0) {
      const max = filteredProducts
        .sort((a, b) => a.price - b.price)
        .at(-1).price;
      setPrice([0, max]);
    }

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

  const handleChangePirce = (e) => {
    setPrice(e.target.value);
  };

  const sortProducts = (e) => {
    setOrderOfProducts(e);
    if (e === "high") {
      setFilteredProducts((prev) => prev.sort((a, b) => b.price - a.price));
    } else {
      setFilteredProducts((prev) => prev.sort((a, b) => a.price - b.price));
    }
  };

  return (
    <Container>
      <Header cartItems={cartItems} />
      <ProductsWrapper className="productsWrapper">
        <StyledFormControl>
          <InputLabel>Order by</InputLabel>
          <Select
            label="OrderOfProducts"
            value={orderOfProducts}
            onChange={(e) => {
              sortProducts(e.target.value);
            }}
          >
            <MenuItem value={"high"}>Price from high</MenuItem>
            <MenuItem value={"low"}>Price from low</MenuItem>
          </Select>
        </StyledFormControl>

        <StyledFilterForm>
          <FilterForm
            price={price}
            setPrice={handleChangePirce}
            filteredProducts={filteredProducts}
            filteredCategories={filteredCategories}
            filterHandler={filterHandler}
          />
        </StyledFilterForm>

        <StyledFilterIcon
          className={"filtersScreenLess900"}
          onClick={() => setShowFilterComp((prev) => !prev)}
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
        <FilterCompWrapper>
          {showFilterComp && (
            <FilterComp
              price={price}
              handleChangePirce={handleChangePirce}
              filteredProducts={filteredProducts}
              filteredCategories={filteredCategories}
              filterHandler={filterHandler}
              setShowFilterComp={setShowFilterComp}
            />
          )}
        </FilterCompWrapper>
      </ProductsWrapper>

      <Footer />
    </Container>
  );
};

export default Products;
