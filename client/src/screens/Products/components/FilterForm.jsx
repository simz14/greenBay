import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import Accordion from "@mui/material/Accordion";
import { AccordionSummary, Slider, Typography } from "@mui/material";
import { MdKeyboardArrowDown } from "react-icons/md";
import { getMinMax } from "../../../utils/minMax";

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
const FilterForm = ({
  price,
  setPrice,
  filteredProducts,
  filteredCategories,
  setCategories,
}) => {
  return (
    <FormContainer>
      <FormWrapper>
        <Accordion sx={{ padding: 1 }}>
          <AccordionSummary
            expandIcon={<MdKeyboardArrowDown />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Categories</Typography>
          </AccordionSummary>
          <FormGroup>
            {filteredCategories.map((category) => {
              return (
                <Box
                  key={Math.random() * 7}
                  onChange={(e) => setCategories(e.target.value)}
                  checked={category.checked}
                  control={<Checkbox sx={{ color: "#73c69c" }} />}
                  label={category.category}
                  value={category.id}
                  sx={{ fontSize: 0.5 }}
                />
              );
            })}
          </FormGroup>
        </Accordion>
        <Accordion sx={{ padding: 1 }}>
          <AccordionSummary
            expandIcon={<MdKeyboardArrowDown />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Price</Typography>
          </AccordionSummary>
          <Slider
            step={5}
            min={getMinMax(filteredProducts).min}
            max={getMinMax(filteredProducts).max}
            value={price}
            onChange={setPrice}
            valueLabelDisplay="auto"
            size="small"
            sx={{ color: "#73c69c" }}
          />
        </Accordion>
      </FormWrapper>
    </FormContainer>
  );
};

export default FilterForm;
