import { Outlet } from "react-router-dom";
import "./App.css";

//#region Components
import Navbar from "./components/Navbar";
//#endregion

//#region React Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//#endregion

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
