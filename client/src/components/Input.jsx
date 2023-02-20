import styled from "styled-components";

const StyledInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0 10px 25px;
  margin: 1rem 0 1rem 0;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
`;

const Input = ({ onChange, value, type, placeholder }) => {
  return (
    <div>
      <StyledInput
        onChange={onChange}
        value={value}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
