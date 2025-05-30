import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.scss";
import { Movie } from "./screens/movie";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Movie />
  </StrictMode>
);
