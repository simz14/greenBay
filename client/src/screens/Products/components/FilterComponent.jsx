import React from "react";
import styled from "styled-components";
import FilterForm from "./FilterForm";

const FilterCompWrapper = styled.div`
  z-index: 9999;

  width: 45rem;
  height: 35rem;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: center;
  padding: 20px;
  @keyframes smooth-appear {
    to {
      bottom: 20px;
      opacity: 1;
    }
  }

  padding: 20px;
  position: fixed;
  bottom: -100%;
  opacity: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
  animation: smooth-appear 1s ease forwards;
`;

const FilterComp = ({
  price,
  handleChangePirce,
  filteredProducts,
  filteredCategories,
  filterHandler,
}) => {
  return (
    <FilterCompWrapper>
      <FilterForm
        price={price}
        setPrice={handleChangePirce}
        filteredProducts={filteredProducts}
        filteredCategories={filteredCategories}
        setCategories={filterHandler}
      />
    </FilterCompWrapper>
  );
};

export default FilterComp;
