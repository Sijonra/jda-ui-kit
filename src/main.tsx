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
    path: "/jda-ui-kit/",
    element: <App />,
  },
  {
    path: "/jda-ui-kit/button",
    element: <ButtonPage />,
  },
  {
    path: "/jda-ui-kit/card",
    element: <CardPage />,
  },
  {
    path: "/jda-ui-kit/badge",
    element: <BadgePage />,
  },
  {
    path: "/jda-ui-kit/heading",
    element: <HeadingPage />,
  },
  {
    path: "/jda-ui-kit/paragraph",
    element: <ParagraphPage />,
  },
  {
    path: "/jda-ui-kit/text",
    element: <TextPage />,
  },
  {
    path: "/jda-ui-kit/toast",
    element: <ToastPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
