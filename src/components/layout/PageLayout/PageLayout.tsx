import { Outlet } from "react-router";

import { Header } from "@/components/layout/Header";
import { OptionBanner } from "@/components/layout/OptionBanner";

export function PageLayout() {
  return (
    <>
      <Header />

      <main className="pt-16" >
        <Outlet />
      </main>

      <OptionBanner />
    </>
  );
}