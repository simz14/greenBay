import React, { useContext, useState } from "react";
import {
  FormControl,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import styled from "styled-components";
import { Container } from "../components/Container";
import { CartContext } from "../context/CartContext";
import { ProductsContext } from "../context/ProductsContext";
import ProductInfo from "./Products/components/ProductInfo";
import { vlidateSellData } from "../utils/validation";
import { CategoriesContext } from "../context/CategoriesContext";

const SellContainer = styled.div``;

const SellWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const FormWrapper = styled(FormGroup)`
  width: 70%;
  margin: auto;
  padding: 1rem;
  border: 1.5px solid #ffffff;
  box-shadow: 0px 7px 23px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  gap: 1rem;
  margin-top: 0;
`;

const PreviewWrapper = styled.div`
  justify-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 70%;
  & p {
    overflow-wrap: anywhere;
  }
`;

const EmptyImage = styled.div`
  width: 100%;
  height: 15rem;
  box-shadow: 0px 7px 23px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  background-color: #fbfbfb;
`;

const EmptyField = styled.div`
  width: 100%;
  height: 2rem;
  box-shadow: 0px 7px 23px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  background-color: #fbfbfb;
`;

const PreviewImg = styled.img`
  width: 15rem;
  height: 15rem;
  object-fit: cover;
  border-radius: 15px;
`;

const Sell = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState();
  const [price, setPrice] = useState(null);
  const [categoryId, setCategoryId] = useState(null);
  const [category, setCategory] = useState("");
  const [showAddedProduct, setShowAddedProduct] = useState(false);
  const [urlErrorMsg, setUrlErrorMsg] = useState("");
  const [priceErrorMsg, setPriceErrorMsg] = useState("");
  const { cartItems } = useContext(CartContext);
  const { products, setProducts } = useContext(ProductsContext);
  const { categories } = useContext(CategoriesContext);

  const handleChange = (value, setstate) => {
    setstate(value);
  };

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (err) {
      return false;
    }
  };

  const isValidPrice = (price) => {
    if (price > 0 && price % 1 === 0) {
      return true;
    } else {
      return false;
    }
  };

  const handleCLickSell = async () => {
    const id = products.at(-1).id;
    setProducts((prev) => [
      ...prev,
      {
        id: id + 1,
        categoryId: categoryId,
        title: title,
        description: description,
        thumbnail: thumbnail,
        price: Number(price),
      },
    ]);
  };

  console.log(categoryId);
  return (
    <SellContainer>
      <Header cartItems={cartItems} />
      <Container>
        <SellWrapper>
          {showAddedProduct && (
            <ProductInfo
              item={{ thumbnail, title, description, price }}
              setShow={() => setShowAddedProduct((prev) => !prev)}
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
              onChange={(e) => handleChange(e.target.value, setThumbnail)}
              id="outlined-basic"
              label="Photo"
              variant="outlined"
              onBlur={() =>
                isValidUrl(thumbnail)
                  ? setUrlErrorMsg("")
                  : setUrlErrorMsg("Url is not correct")
              }
              helperText={urlErrorMsg}
              required
            />
            <TextField
              onChange={(e) => handleChange(e.target.value, setPrice)}
              id="outlined-basic"
              label="Price"
              variant="outlined"
              type="number"
              onBlur={() =>
                isValidPrice(price)
                  ? setPriceErrorMsg("")
                  : setPriceErrorMsg("Price is not correct")
              }
              helperText={priceErrorMsg}
              required
            />

            <FormControl required id="demo-simple-select-label" fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                onChange={(e) => {
                  setCategoryId(e.target.value), setCategory(e.target.value);
                }}
                value={category}
              >
                {categories &&
                  categories.map((category) => {
                    return (
                      <MenuItem
                        key={category.id}
                        name={category.category}
                        value={category.id}
                      >
                        {category.category}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>

            <Button
              disabled={vlidateSellData(title, description, thumbnail, price)}
              onClick={() => {
                handleCLickSell();
                setShowAddedProduct((prev) => !prev);
              }}
              buttonName={"Sell"}
            />
          </FormWrapper>

          <PreviewWrapper>
            <h2>Preview</h2>
            {thumbnail ? (
              <PreviewImg src={thumbnail} />
            ) : (
              <EmptyImage></EmptyImage>
            )}
            {title ? <p>{title}</p> : <EmptyField></EmptyField>}
            {description ? <p>{description}</p> : <EmptyField></EmptyField>}
            {price ? <p>{price + "€"}</p> : <EmptyField></EmptyField>}
          </PreviewWrapper>
        </SellWrapper>
      </Container>
      <Footer />
    </SellContainer>
  );
};
export default Sell;
