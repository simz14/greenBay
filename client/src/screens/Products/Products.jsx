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
import {
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { BsFilterLeft } from "react-icons/bs";
import FilterComp from "./components/FilterComponent";

const ProductsContainer = styled.div`
  width: 100%;
`;

const StyledFormControl = styled(FormControl)`
  display: grid;
  width: 30%;
  justify-self: flex-end;
  grid-column: 1/4;
  & .MuiSelect-select {
    padding: 1rem;
  }
`;

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
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

  @media (max-width: 650px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }

  @media (max-width: 450px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const FiltersBoxesWrapper = styled.div`
  display: flex;

  grid-column: 1/3;
  justify-content: space-between;
  align-items: center;
`;
const StyledFilterForm = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
`;

const StyledFilterIcon = styled(BsFilterLeft)`
  display: grid;
  grid-column: 1/2;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
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
    <ProductsContainer>
      <Header cartItems={cartItems} />
      <Container>
        <ProductsWrapper className="productsWrapper">
          <FiltersBoxesWrapper>
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
          </FiltersBoxesWrapper>

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
        </ProductsWrapper>
      </Container>
      <Footer />
    </ProductsContainer>
  );
};

export default Products;
