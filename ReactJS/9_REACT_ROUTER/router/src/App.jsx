import "./App.css";

// 3 - Componente base
import { Outlet } from "react-router-dom";

// 4 - Link entre páginas
import Navbar from "./components/Navbar";

// 9 - Search params
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <>
      {/* 4 - Link entre páginas */}
      <Navbar />
      {/* 9 - Search params */}
      <SearchForm />
      {/* 3 - Componente base */}
      <Outlet />
      <p>Footer</p>
    </>
  );
}

export default App;
