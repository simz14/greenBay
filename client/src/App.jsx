import React from "react";
import { Route, Routes } from "react-router";
import Landing from "./screens/Landing";
import Login from "./screens/Login";
import Register from "./screens/Register";
import { ProductsProvider } from "./context/ProductsContext";
import { UserProvider } from "./context/UserContext";
import { PrivateRoute } from "./components/PrivateRoute";
import { CartProvider } from "./context/CartContext";
import { CategoriesProvider } from "./context/CategoriesContext";
import Products from "./screens/Products/Products";

import About from "./screens/About";
import Home from "./screens/Home";
import Sell from "./screens/Sell";

function App() {
  return (
    <CategoriesProvider>
      <ProductsProvider>
        <UserProvider>
          <CartProvider>
            <Routes>
              <Route key="Landing" exact path="/" element={<Landing />} />
              <Route key="Register" path="/register" element={<Register />} />
              <Route key="Login" path="/login" element={<Login />} />
              <Route key="About" path="/about" element={<About />} />
              <Route key="Home" path="/home" element={<Home />} />
              <Route key="Sell" path="/sell" element={<Sell />} />

              <Route
                key="Products"
                path="/products"
                element={
                  <PrivateRoute>
                    <Products />
                  </PrivateRoute>
                }
              />
            </Routes>
          </CartProvider>
        </UserProvider>
      </ProductsProvider>
    </CategoriesProvider>
  );
}

export default App;
