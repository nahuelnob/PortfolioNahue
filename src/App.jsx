import "./App.css";
import { Route, Routes } from "react-router";
import Banner from "./Components/Banner/Banner.jsx";
import Portfolio from "./views/Portfolio/Portfolio.jsx";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Portfolio/>}/>
        <Route path="/banner" element={<Banner/>}/>
      </Routes>
    </div>
  );
}

export default App;