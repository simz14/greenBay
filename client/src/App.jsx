import React from "react";
import { Route, Routes } from "react-router";
import Landing from "./screens/Landing";
import Login from "./screens/Login";
import Register from "./screens/Register";
import { UserProvider } from "./context/UserContext";
import { PrivateRoute } from "./components/PrivateRoute";
import Products from "./screens/Products";
import { CartProvider } from "./context/CartContext";
import About from "./screens/About";

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <Routes>
          <Route key="Landing" exact path="/" element={<Landing />} />
          <Route key="Register" path="/register" element={<Register />} />
          <Route key="Login" path="/login" element={<Login />} />
          <Route key="About" path="/about" element={<About />} />

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
  );
}

export default App;
