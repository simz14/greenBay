import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import Button from "../components/Button";
import { fetchProducts } from "../services/products";

const FormContainer = styled.div`
  position: relative;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -9999;
`;

const FormWrapper = styled.div`
  background-color: white;
  padding: 2rem;
  border: 1.5px solid #ffffff;
  box-shadow: 0px 7px 23px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
`;
const Box = styled(FormControlLabel)`
  font-size: 0.5rem;
`;
const FilterForm = () => {
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetchProducts();
      const data = await response.json();
      let categories = [];
      data.products.map((product) => {
        if (!categories.includes(product.category)) {
          categories.push(product.category);
        }
      });
      setCategories(categories);
    };
    getProducts();
  }, []);

  return (
    <FormContainer>
      <FormWrapper>
        <FormGroup>
          <label>Categories</label>
          {categories.map((category) => {
            return (
              <Box
                key={Math.random() * 7}
                control={<Checkbox sx={{ color: "#73c69c" }} />}
                label={category}
                sx={{ fontSize: 0.5 }}
              />
            );
          })}
        </FormGroup>
        <Button buttonName="Filter" />
      </FormWrapper>
    </FormContainer>
  );
};

export default FilterForm;
