import React from "react";
import { Route, Routes } from "react-router";
import Login from "./screens/Login";
import Register from "./screens/Register";
import { ProductsProvider } from "./context/ProductsContext";
import { UserProvider } from "./context/UserContext";
import { PrivateRoute } from "./components/PrivateRoute";
import { CartProvider } from "./context/CartContext";
import { CategoriesProvider } from "./context/CategoriesContext";
import Products from "./screens/Products/Products";

import About from "./screens/About";
import Home from "./screens/Home/Home";
import Sell from "./screens/Sell";
import CartScreen from "./screens/Cart/Cart";
import Profile from "./screens/Profile/Profile";
import { PurchasesProvider } from "./context/PurchasesContext";

function App() {
  return (
    <PurchasesProvider>
      <CategoriesProvider>
        <ProductsProvider>
          <UserProvider>
            <CartProvider>
              <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Home />} />
                <Route
                  path="/sell"
                  element={
                    <PrivateRoute>
                      <Sell />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/products"
                  element={
                    <PrivateRoute>
                      <Products />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/products/:categoryId"
                  element={
                    <PrivateRoute>
                      <Products />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/cart"
                  element={
                    <PrivateRoute>
                      <CartScreen />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <PrivateRoute>
                      <Profile />
                    </PrivateRoute>
                  }
                />
              </Routes>
            </CartProvider>
          </UserProvider>
        </ProductsProvider>
      </CategoriesProvider>
    </PurchasesProvider>
  );
}

export default App;
