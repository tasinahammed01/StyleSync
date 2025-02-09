import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./Routes/Routes";
import { RouterProvider } from "react-router";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
