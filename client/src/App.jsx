import { Route, Routes } from "react-router";
import Landing from "./screens/Landing";

function App() {
  return (
    <Routes>
      <Route key="Landing" exact path="/" element={<Landing />} />
    </Routes>
  );
}

export default App;
