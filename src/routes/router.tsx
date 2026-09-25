import { createBrowserRouter } from "react-router";
import { Home } from "@/pages/Home";
import { NotFound } from "@/pages/NotFound";
import { playgroundRoute } from "@/routes/dev/PlaygroundRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  playgroundRoute,

  {
    path: "*",
    element: <NotFound />,
  },
])