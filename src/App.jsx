import "./App.css";
import { Route, Routes } from "react-router";
import Banner from "./Components/Banner/Banner.jsx";
import Portfolio from "./views/Portfolio/Portfolio.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";
import About from "./Components/About/About.jsx";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Portfolio/>}/>
      </Routes>
    </div>
  );
}

export default App;