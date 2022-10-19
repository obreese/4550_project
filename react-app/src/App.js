import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Home from "./components/HomeDefault";
import Search from "./components/Search";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
