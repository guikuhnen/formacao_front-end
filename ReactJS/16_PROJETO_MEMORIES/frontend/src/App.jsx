import { Outlet } from "react-router-dom";
import "./App.css";

//#region Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
