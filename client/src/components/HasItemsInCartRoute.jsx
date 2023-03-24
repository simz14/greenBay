import React, { useContext } from "react";
import { Navigate } from "react-router";
import { CartContext } from "../context/CartContext";

export function HasItemsInCartRoute({ children }) {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems.length);
  if (cartItems.length < 1) {
    return <Navigate to="/products" />;
  }
  return children;
}
