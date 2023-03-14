import { useContext } from "react";
import styled from "styled-components";
import { CategoriesContext } from "../../../context/CategoriesContext";
import { useNavigate } from "react-router";

const ProductImageWrapper = styled.div`
  display: flex;
  gap: 0.5rem;

  & img {
    border-radius: 15px;
    height: 8rem;
    width: 100%;
    object-fit: cover;
    margin: auto;
    overflow: hidden;
    filter: brightness(50%);
    cursor: pointer;
    transition: transform 0.2s;
  }
  & img:hover {
    transform: scale(0.9);
  }
  @media (max-width: 550px) {
    & img {
      height: 4rem;
    }
  }
`;

const CategoriesComp = () => {
  const { categories } = useContext(CategoriesContext);
  const navigate = useNavigate();

  return (
    <ProductImageWrapper>
      {categories.slice(0, 5).map((category) => {
        return (
          <img
            key={category.id}
            onClick={() => navigate(`/products/${category.id}`)}
            src={category.image}
          />
        );
      })}
    </ProductImageWrapper>
  );
};

export default CategoriesComp;
