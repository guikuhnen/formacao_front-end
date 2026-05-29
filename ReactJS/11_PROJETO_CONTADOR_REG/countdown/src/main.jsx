import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";

//#region Pages
import Countdown from "./routes/Countdown";
import Home from "./routes/Home";
//#endregion

import { CountdownProvider } from "./context/CountdownContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/countdown",
        element: <Countdown />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CountdownProvider>
      <RouterProvider router={router} />
    </CountdownProvider>
  </StrictMode>,
);
