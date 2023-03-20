import { Container } from "../../../components/Container";
import React, { useRef } from "react";
import styled from "styled-components";
import FilterForm from "./FilterForm";
import { CiCircleRemove } from "react-icons/ci";

const FilterCompWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  position: fixed;
  bottom: -100%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
  animation: smooth-appear 2.5s ease forwards;

  @keyframes smooth-appear {
    to {
      top: 0px;
      bottom: 100%;
    }
  }

  @media (max-width: 700px) {
    .css-j204z7-MuiFormControlLabel-root .MuiFormControlLabel-label {
      font-size: 13px;
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
  position: relative;
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 10rem;
    border: 1px solid #fff;
  }
`;

const StyledIcon = styled(CiCircleRemove)`
  display: flex;
  width: 1rem;
  height: 1rem;
  justify-self: end;
  position: absolute;
  right: 0rem;
  padding: 0.5rem;
  z-index: 9;
  cursor: pointer;
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
    <Container>
      <FilterCompWrapper onClick={(e) => checkClickOutside(e)}>
        <BcgClick ref={ref}></BcgClick>
        <FormBox>
          <StyledIcon onClick={() => setShowFilterComp(false)} />
          <FilterForm
            price={price}
            setPrice={handleChangePirce}
            filteredProducts={filteredProducts}
            filteredCategories={filteredCategories}
            filterHandler={filterHandler}
          />
        </FormBox>
      </FilterCompWrapper>
    </Container>
  );
};

export default FilterComp;
