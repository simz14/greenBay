import React from "react";
import { Route, Routes } from "react-router";
import Login from "./screens/Login";
import Register from "./screens/Register";
import { ProductsProvider } from "./context/ProductsContext";
import { UserProvider } from "./context/UserContext";
import { CartProvider } from "./context/CartContext";
import { CategoriesProvider } from "./context/CategoriesContext";
import Products from "./screens/Products/Products";
import About from "./screens/About";
import Home from "./screens/Home/Home";
import Sell from "./screens/Sell/Sell";
import CartScreen from "./screens/Cart/Cart";
import Profile from "./screens/Profile/Profile";
import { PurchasesProvider } from "./context/PurchasesContext";
import { SellingItemsProvider } from "./context/SellingItems";
import Order from "./screens/Order/Order";
import { PrivateRoute } from "./components/PrivateRoute";
import { HasItemsInCartRoute } from "./components/HasItemsInCartRoute";

function App() {
  return (
    <SellingItemsProvider>
      <PurchasesProvider>
        <CategoriesProvider>
          <ProductsProvider>
            <UserProvider>
              <CartProvider>
                <Routes>
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />

                  <Route
                    path="/about"
                    element={
                      <PrivateRoute>
                        <About />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/"
                    element={
                      <PrivateRoute>
                        <Home />
                      </PrivateRoute>
                    }
                  />
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
                  <Route
                    path="/order"
                    element={
                      <HasItemsInCartRoute>
                        <Order />
                      </HasItemsInCartRoute>
                    }
                  />
                </Routes>
              </CartProvider>
            </UserProvider>
          </ProductsProvider>
        </CategoriesProvider>
      </PurchasesProvider>
    </SellingItemsProvider>
  );
}
export default App;
