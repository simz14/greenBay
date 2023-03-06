import React from "react";
import styled from "styled-components";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import Accordion from "@mui/material/Accordion";
import { AccordionSummary, Slider, Typography } from "@mui/material";
import { MdKeyboardArrowDown } from "react-icons/md";

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
const FilterForm = ({ setCategories, categories }) => {
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
            {categories.map((category) => {
              return (
                <Box
                  key={Math.random() * 7}
                  onChange={(e) =>
                    setCategories(
                      categories.map((category) => {
                        if (category.id == e.target.value) {
                          category.checked = !category.checked;
                        }
                        return category;
                      })
                    )
                  }
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
            getAriaLabel={() => "Temperature range"}
            defaultValue={175}
            min={0}
            max={250}
            valueLabelDisplay="auto"
          />
        </Accordion>
      </FormWrapper>
    </FormContainer>
  );
};

export default FilterForm;
