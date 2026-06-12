import { Outlet } from "react-router-dom";
import "./App.css";

//#region components
import Navbar from "./components/Navbar";
//#endregion

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}

export default App;
