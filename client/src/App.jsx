import { Route, Routes } from "react-router";
import { routes } from "./routes/routes";

function App() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.name} path={route.path} element={route.component} />
      ))}
    </Routes>
  );
}

export default App;
