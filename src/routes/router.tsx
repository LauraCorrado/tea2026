import { createBrowserRouter } from "react-router";

import { Home } from "@/pages/Home";
import { NotFound } from "@/pages/NotFound";
import { PageLayout } from "@/components/layout/PageLayout";

import { playgroundRoute } from "@/routes/dev/PlaygroundRouter";

export const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },

  playgroundRoute,
]);