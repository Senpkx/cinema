import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.scss";
import { Layout } from "./screens/layout/layout";
import { MovieList } from "./screens/movieList/movieList";
import { MovieProvider } from "./hooks/MovieListContex";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Movie } from "./screens/movie/movie";
import { Home } from "./screens/home/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MovieProvider>
        <Layout />
      </MovieProvider>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "list",
        element: <MovieList />,
      },
      {
        path: "movie",
        element: <Movie />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
