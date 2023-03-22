import React, { useContext, useRef, useState } from "react";
import {
  FormControl,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { CartContext } from "../../context/CartContext";
import { ProductsContext } from "../../context/ProductsContext";
import { validateSellData } from "../../utils/validation";
import { CategoriesContext } from "../../context/CategoriesContext";
import SuggestionList from "./SuggestionList";
import SellImg from "../../assets/sellingImg.webp";
import PopUp from "../../components/PopUp";

const SellContainer = styled.div``;

const SellWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 5rem;

  & .heading {
    display: grid;
    grid-column: 1/3;
    justify-content: center;
    @media (max-width: 500px) {
      font-size: 18px;
    }
  }

  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
  }
  & .MuiFormGroup-root {
    display: grid;
  }

  & .gotYourBack {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column: 1 / 3;
    align-items: center;
    justify-items: center;

    & img {
      object-fit: cover;
      width: 100%;
      height: 21rem;
    }

    @media (max-width: 650px) {
      font-size: 11px;
      & img {
        height: 15rem;
      }
    }

    @media (max-width: 400px) {
      font-size: 10px;
      & img {
        height: 12rem;
      }
    }
  }
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
  width: 100%;
  display: flex;
  justify-content: center;
`;

const PreviewBox = styled.div`
  justify-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 75%;
  align-self: self-start;
  & p {
    overflow-wrap: anywhere;
  }
`;

const EmptyImage = styled.div`
  width: 100%;
  height: 15rem;
  box-shadow: rgb(214 209 209) 0px 7px 23px;
  backdrop-filter: blur(10px);
  border-radius: 15px;
  background-color: #fbfbfb;
`;

const EmptyField = styled.div`
  width: 100%;
  height: 2rem;
  box-shadow: rgb(214 209 209) 0px 7px 23px;
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

const ErrorMsg = styled.p`
  display: flex;
  justify-self: center;
  color: red;
`;

const Sell = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [price, setPrice] = useState(0);
  const [categoryId, setCategoryId] = useState(null);
  const [category, setCategory] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { cartItems } = useContext(CartContext);
  const { products, setProducts } = useContext(ProductsContext);
  const { categories } = useContext(CategoriesContext);
  const [successAdding, setSuccessAdding] = useState(false);

  const handleChange = (value, setstate) => {
    setstate(value);
  };

  const handleCLickSell = async () => {
    try {
      const result = validateSellData(
        title,
        description,
        thumbnail,
        price,
        categoryId
      );
      if (result) {
        setErrorMsg("");
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
        setTitle("");
        setDescription("");
        setThumbnail("");
        setPrice(0);
        setCategory("");
        setSuccessAdding(true);
      }
    } catch (e) {
      setErrorMsg(e.message);
    }
  };

  return (
    <SellContainer>
      <Header cartItems={cartItems} />
      <Container>
        <SellWrapper>
          <PopUp
            showHandler={setSuccessAdding}
            show={successAdding}
            title={"Your product has been added"}
          />

          <div className="gotYourBack">
            <div>
              <h2>You've got this.</h2>
              <h2>We've got your back.</h2>
            </div>
            <img src={SellImg} />
          </div>
          <SuggestionList />
          <h1 className="heading">Here you can add your item for sale </h1>
          <FormWrapper>
            <TextField
              value={title}
              onChange={(e) => handleChange(e.target.value, setTitle)}
              id="outlined-basic"
              label="Name"
              variant="outlined"
              required
            />
            <TextField
              value={description}
              onChange={(e) => handleChange(e.target.value, setDescription)}
              id="outlined-basic"
              label="Description"
              variant="outlined"
              maxRows={2}
              required
            />
            <TextField
              value={thumbnail}
              onChange={(e) => handleChange(e.target.value, setThumbnail)}
              id="outlined-basic"
              label="Photo"
              variant="outlined"
              required
            />
            <TextField
              value={price}
              onChange={(e) => handleChange(e.target.value, setPrice)}
              id="outlined-basic"
              label="Price"
              variant="outlined"
              type="number"
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

            {errorMsg.length > 0 && <ErrorMsg>{errorMsg}</ErrorMsg>}
            <Button
              onClick={() => {
                handleCLickSell();
              }}
              buttonName={"Sell"}
            />
          </FormWrapper>

          <PreviewWrapper>
            <PreviewBox>
              {thumbnail ? (
                <PreviewImg src={thumbnail} />
              ) : (
                <EmptyImage></EmptyImage>
              )}
              {title ? <p>{title}</p> : <EmptyField></EmptyField>}
              {description ? <p>{description}</p> : <EmptyField></EmptyField>}
              {price ? <p>{price + "€"}</p> : <EmptyField></EmptyField>}
            </PreviewBox>
          </PreviewWrapper>
        </SellWrapper>
      </Container>
      <Footer />
    </SellContainer>
  );
};
export default Sell;
