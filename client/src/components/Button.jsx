import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #73c69c;
  border: none;
  border-radius: 10px;
  padding: 0.5rem;
  cursor: pointer;
  transition: 0.5s ease;
  &:hover {
    background-color: #50856b;
    transition: 0.5s ease;
  }
  @media (max-width: 510px) {
    font-size: x-small;
  }
`;

const Button = ({ buttonName }) => {
  return (
    <div>
      <StyledButton>{buttonName}</StyledButton>
    </div>
  );
};
export default Button;
