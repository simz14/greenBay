import React from "react";
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
  width: 100%;
`;
const StyledAccordion = styled(Accordion)`
  width: 100%;
  @media (max-width: 900px) {
    padding: 0.5rem;
    .MuiFormGroup-root {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 600px) {
    .MuiFormGroup-root {
      grid-template-columns: 1fr;
    }
  }
`;
const StyledFormGroup = styled(FormGroup)`
  padding: 0 16px;
  & span {
    font-size: 15px;
  }
`;

const FilterForm = ({
  price,
  setPrice,
  filteredProducts,
  filteredCategories,
  filterHandler,
}) => {
  return (
    <FormContainer>
      <FormWrapper>
        <StyledAccordion defaultExpanded={true}>
          <AccordionSummary expandIcon={<MdKeyboardArrowDown />}>
            <Typography>Categories</Typography>
          </AccordionSummary>
          <StyledFormGroup>
            {filteredCategories.map((category) => {
              return (
                <FormControlLabel
                  key={category.id}
                  control={
                    <Checkbox
                      checked={category.checked}
                      value={category.id}
                      sx={{ color: "#73c69c" }}
                      onChange={(e) => filterHandler(e.target.value)}
                    />
                  }
                  label={category.category}
                />
              );
            })}
          </StyledFormGroup>
        </StyledAccordion>
        <Accordion defaultExpanded={true}>
          <AccordionSummary expandIcon={<MdKeyboardArrowDown />}>
            <Typography>Price</Typography>
          </AccordionSummary>
          <Slider
            step={5}
            min={getMinMax(filteredProducts).min}
            max={getMinMax(filteredProducts).max}
            value={price}
            onChange={setPrice}
            valueLabelDisplay="auto"
            size="13px"
            sx={{ color: "#73c69c" }}
          />
        </Accordion>
      </FormWrapper>
    </FormContainer>
  );
};

export default FilterForm;
