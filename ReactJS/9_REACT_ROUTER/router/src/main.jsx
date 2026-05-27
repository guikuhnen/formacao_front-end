import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// 1 - Configurando o Router
import {
  createBrowserRouter,
  RouterProvider,
  Router,
  Navigate,
} from "react-router-dom";
import Contact from "./routes/Contact.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import Home from "./routes/Home.jsx";

// 7 - Rota dinâmica
import Product from "./routes/Product.jsx";
// 8 - nested routes
import Info from "./routes/Info.jsx";
// 9 - Search params
import Search from "./routes/Search.jsx";

const router = createBrowserRouter([
  {
    path: "/", //home
    element: <App />,
    // 2 - Página de Erro
    errorElement: <ErrorPage />,
    // 3 - Componente base
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // 7 - Rota dinâmica
      {
        path: "products/:id",
        element: <Product />,
      },
      // 8 - nested routes
      {
        path: "products/:id/info",
        element: <Info />,
      },
      // 9 - Search params
      {
        path: "search",
        element: <Search />,
      },
      // 10 - Redirect
      {
        path: "teste",
        element: <Navigate to="/" />,
      },
    ],
  },
  // {
  //   path: "contact",
  //   element: <Contact />,
  // },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* 1 - Configurando o Router */}
    <RouterProvider router={router} />
  </StrictMode>,
);
