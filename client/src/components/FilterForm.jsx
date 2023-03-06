import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import Button from "../components/Button";
import { fetchProducts } from "../services/products";
import { fetchCategories } from "../services/categories";

const FormContainer = styled.div`
  position: relative;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
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

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetchCategories();
      setCategories(response);
    };
    getCategories();
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
                label={category.category}
                value={category.category}
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
