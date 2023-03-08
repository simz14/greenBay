import React, { useContext, useState } from "react";
import { FormGroup, TextField } from "@mui/material";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styled from "styled-components";
import { Container } from "../components/Container";
import { CartContext } from "../context/CartContext";
import ProductInfo from "./Products/components/ProductInfo";

const SellContainer = styled.div``;
const FormWrapper = styled(FormGroup)`
  width: 50%;
  margin: auto;
  padding: 1rem;
  border: 1.5px solid #ffffff;
  box-shadow: 0px 7px 23px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  gap: 1rem;
`;
const Sell = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("https://url.com");
  const [price, setPrice] = useState(10);
  const [showAddedProduct, setShowAddedProduct] = useState(false);
  const { cartItems } = useContext(CartContext);

  const handleChange = (value, setstate) => {
    setstate((prev) => (prev = value));
  };

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (err) {
      return false;
    }
  };

  const handleCLickSell = () => {
    console.log(showAddedProduct);
    setShowAddedProduct((prev) => !prev);
  };
  return (
    <SellContainer>
      <Header showAuth={false} cartItems={cartItems} />
      <Container>
        {showAddedProduct && (
          <ProductInfo
            item={{ image, title, description, price }}
            setShow={handleCLickSell}
          />
        )}
        <FormWrapper>
          <TextField
            onChange={(e) => handleChange(e.target.value, setTitle)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            required
          />
          <TextField
            onChange={(e) => handleChange(e.target.value, setDescription)}
            id="outlined-basic"
            label="Description"
            variant="outlined"
            required
          />
          <TextField
            onChange={(e) => handleChange(e.target.value, setImage)}
            id="outlined-basic"
            label="Photo"
            variant="outlined"
            helperText={isValidUrl(image) ? "" : "URL is not correct"}
            required
          />
          <TextField
            onChange={(e) => handleChange(e.target.value, setPrice)}
            id="outlined-basic"
            label="Price"
            variant="outlined"
            type="number"
            helperText={
              price > 0 && price % 1 === 0 ? "" : "Price is not correct"
            }
            required
          />
          <Button onClick={() => handleCLickSell()} buttonName={"Sell"} />
        </FormWrapper>
      </Container>
      <Footer />
    </SellContainer>
  );
};
export default Sell;
