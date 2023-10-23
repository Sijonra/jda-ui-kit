import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import BadgePage from "./pages/BadgePage/BadgePage.tsx";
import ButtonPage from "./pages/ButtonPage/ButtonPage.tsx";
import CardPage from "./pages/CardPage/CardPage.tsx";
import HeadingPage from "./pages/HeadingPage/HeadingPage.tsx";
import ParagraphPage from "./pages/ParagraphPage/ParagraphPage.tsx";
import TextPage from "./pages/TextPage/TextPage.tsx";
import ToastPage from "./pages/ToastPage/ToastPage.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/vite-react-router/",
    element: <App />,
  },
  {
    path: "/button",
    element: <ButtonPage />,
  },
  {
    path: "/card",
    element: <CardPage />,
  },
  {
    path: "/badge",
    element: <BadgePage />,
  },
  {
    path: "/heading",
    element: <HeadingPage />,
  },
  {
    path: "/paragraph",
    element: <ParagraphPage />,
  },
  {
    path: "/text",
    element: <TextPage />,
  },
  {
    path: "/toast",
    element: <ToastPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
