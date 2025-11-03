import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./RootLayout";
import CreateWord from "./pages/home/CreateWord";
import Collection from "./pages/collection/Collection";
import FlashCard from "./pages/flashcard/FlashCard";

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
      {
        path: "/flashcards",
        element: <FlashCard />,
      },
      {
        path: "/modify-word/:wordId",
        element: <CreateWord />,
      }
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
