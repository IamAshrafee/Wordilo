import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./RootLayout";
import CreateWord from "./pages/home/CreateWord";
import Collection from "./pages/collection/Collection";
import FlashCard from "./pages/flashcard/FlashCard";
import Profile from "./pages/user-profile/Profile";
import Login from "./pages/authentication/Login";
import SingUp from "./pages/authentication/SingUp";

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
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/signin",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SingUp />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
