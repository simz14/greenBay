import React from "react";
import { Route, Routes } from "react-router";
import Landing from "./screens/Landing";
import Login from "./screens/Login";
import Register from "./screens/Register";
import { UserProvider } from "./context/UserContext";
import { PrivateRoute } from "./components/PrivateRoute";
import Home from "./screens/Home";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <Routes>
          <Route key="Landing" exact path="/" element={<Landing />} />
          <Route key="Register" path="/register" element={<Register />} />
          <Route key="Login" path="/login" element={<Login />} />

          <Route
            key="Home"
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
        </Routes>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
