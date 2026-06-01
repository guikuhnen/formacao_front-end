import "./App.css";

// 1 - config react router, sem links
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Routes
import Home from "./routes/Home";
import About from "./routes/About";
import Products from "./routes/Products";

// 2 - adicionando links
// components
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <h1>Context</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
