import { Route, Routes } from "react-router";
import Landing from "./screens/Landing";
import Login from "./screens/Login";
import Register from "./screens/Register";
import { UserProvider } from "./context/UserContext";
import { PrivateRoute } from "./components/PrivateRoute";
import Home from "./screens/Home";

function App() {
  return (
    <UserProvider>
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
    </UserProvider>
  );
}

export default App;
