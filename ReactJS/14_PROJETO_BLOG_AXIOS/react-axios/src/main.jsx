//#region react
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//#endregion

//#region  static
import App from "./App.jsx";
import "./index.css";
//#endregion

//#region routes
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Admin from "./routes/Admin.jsx";
import EditPost from "./routes/EditPost.jsx";
import Home from "./routes/Home.jsx";
import NewPost from "./routes/NewPost.jsx";
import Post from "./routes/Post.jsx";
//#endregion

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/new",
        element: <NewPost />,
      },
      {
        path: "/posts/:id",
        element: <Post />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/posts/edit/:id",
        element: <EditPost />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
