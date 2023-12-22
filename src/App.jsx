import "./App.css";
import { Route, Routes } from "react-router";
import Portfolio from "./views/Portfolio/Portfolio.jsx";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
