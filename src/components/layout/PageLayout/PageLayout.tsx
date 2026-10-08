import { Outlet } from "react-router";

import { Header, Footer, OptionBanner } from "@/components/layout";

export function PageLayout() {
  return (
    <>
      <Header />

      <main className="pt-16">
        <Outlet />
      </main>

      <Footer />

      <OptionBanner />
    </>
  );
}