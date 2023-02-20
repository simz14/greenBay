import { Route, Routes } from "react-router";
import Landing from "./screens/Landing";
import Register from "./screens/Register";

function App() {
  return (
    <Routes>
      <Route key="Landing" exact path="/" element={<Landing />} />
      <Route key="Register" path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
