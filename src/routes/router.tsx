import { createBrowserRouter } from "react-router";

import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Skills } from "@/pages/Skills";
import { ResDev } from "@/pages/ResDev";
import { Works } from "@/pages/Works";
import { Contacts } from "@/pages/Contacts";
import { NotFound } from "@/pages/NotFound";
import { CookiePolicy } from "@/pages/policy/CookiePolicy";
import { PrivacyPolicy } from "@/pages/policy/PrivacyPolicy";
import { GenderEquality } from "@/pages/policy/GenderEquality";
// import { AccessibilityStatement } from "@/pages/policy/AccessibilityStatement";
import { PageLayout } from "@/components/layout/PageLayout";

import { playgroundRoute } from "@/routes/dev/PlaygroundRouter";

export const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        handle: {
          title: "Home",
        },
      },
      {
        path: "/about",
        element: <About />,
        handle: {
          title: "Chi siamo",
        },
      },
      {
        path: "/skills",
        element: <Skills />,
        handle: {
          title: "Le nostre competenze",
        },
      },
      {
        path: "/res-dev",
        element: <ResDev />,
        handle: {
          title: "Ricerca & Sviluppo",
        },
      },
      {
        path: "/works",
        element: <Works />,
        handle: {
          title: "I nostri lavori",
        },
      },
      {
        path: "/contacts",
        element: <Contacts />,
        handle: {
          title: "Contatti",
        },
      },
      {
        path: "/cookie-policy",
        element: <CookiePolicy />,
        handle: {
          title: "Cookie Policy",
        },
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
        handle: {
          title: "Privacy Policy",
        },
      },
      {
        path: "/gender-equality",
        element: <GenderEquality />,
        handle: {
          title: "Parità di Genere",
        },
      },
      // {
      //   path: "/accessibility-statement",
      //   element: <AccessibilityStatement />,
      //   handle: {
      //     title: "Dichiarazione di accessibilità"
      //   }
      // },
      {
        path: "*",
        element: <NotFound />,
        handle: {
          title: "Pagina non trovata",
        },
      },
    ],
  },

  playgroundRoute,
]);