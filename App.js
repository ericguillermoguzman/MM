import * as React from "react";

import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import Layout from './pages/Layout';
import Manga from './pages/Manga';
import Home from './pages/Home';
import Contact from './pages/Contact'
import Support from './pages/Support'
import Publisher from './pages/Publisher'

const router = createBrowserRouter([
  {
    // Layout is just the header
    path: "/",
    element: <Layout />, 
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/manga",
        element: <Manga/>,
        // children: [
        //   {
        //     path: "manga/:id",
        //     Component: <ImageView/>,
        //   },
        // ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/support",
        element: <Support />,
      },
    ],
  },
  {
  path: "/publisher",
  element: <Publisher />
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}