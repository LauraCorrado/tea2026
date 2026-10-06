import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

import { AccessibilityProvider } from "@/accessibility";
import { AccessibilityOverlay } from "@/components/features/AccessibilityOverlay";
import { router } from "@/routes/router";
import "@/styles/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AccessibilityProvider>
      <RouterProvider router={router} />
      <AccessibilityOverlay />
    </AccessibilityProvider>
  </StrictMode>,
);