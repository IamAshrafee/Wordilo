import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./RootLayout";
import CreateWord from "./pages/home/CreateWord";
import Collection from "./pages/collection/Collection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <CreateWord /> },
      {
        path: "/create",
        element: <CreateWord />,
      },
      {
        path: "/collection",
        element: <Collection />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
