import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import FilterForm from "./FilterForm";

const FilterCompWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  position: fixed;
  bottom: -100%;
  opacity: 0.5;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
  animation: smooth-appear 2.5s ease forwards;

  @keyframes smooth-appear {
    to {
      top: 0px;
      bottom: 100%;
      opacity: 1;
    }
  }

  @media (max-width: 700px) {
    .css-j204z7-MuiFormControlLabel-root .MuiFormControlLabel-label {
      font-size: 10px;
    }
  }
`;

const BcgClick = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
`;
const FormBox = styled.div`
  height: 35rem;
  overflow-x: hidden;
  overflow-y: auto;
`;

const FilterComp = ({
  price,
  handleChangePirce,
  filteredProducts,
  filteredCategories,
  filterHandler,
  setShowFilterComp,
}) => {
  const ref = useRef(null);

  const checkClickOutside = (e) => {
    if (ref.current.contains(e.target)) {
      setShowFilterComp(false);
    }
  };
  return (
    <FilterCompWrapper onClick={(e) => checkClickOutside(e)}>
      <BcgClick ref={ref}></BcgClick>
      <FormBox>
        <FilterForm
          price={price}
          setPrice={handleChangePirce}
          filteredProducts={filteredProducts}
          filteredCategories={filteredCategories}
          filterHandler={filterHandler}
        />
      </FormBox>
    </FilterCompWrapper>
  );
};

export default FilterComp;
