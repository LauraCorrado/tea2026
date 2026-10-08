import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

import { LanguageProvider } from "./localization/LanguageProvider";
import { AccessibilityProvider } from "@/accessibility";
import { AccessibilityOverlay } from "@/components/features/AccessibilityOverlay";
import { router } from "@/routes/router";
import "@/styles/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AccessibilityProvider>
      <LanguageProvider>
        <RouterProvider router={router} />
        <AccessibilityOverlay />
      </LanguageProvider>
    </AccessibilityProvider>
  </StrictMode>,
);
