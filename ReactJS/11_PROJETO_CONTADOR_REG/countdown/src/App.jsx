import { Outlet } from "react-router-dom";
import "./App.css";
import NewYear from "./assets/newyear.jpg";
import { CountdownContext } from "./context/CountdownContext";
import { useContext } from "react";

function App() {
  const { event } = useContext(CountdownContext);

  let eventImage = null;
  if (event) eventImage = event.image;
  else eventImage = NewYear;

  return (
    <div className="app" style={{ backgroundImage: `url(${eventImage})` }}>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
