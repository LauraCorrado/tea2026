import { Outlet, useNavigation } from "react-router";

import { Header, Footer, OptionBanner, BackToTop } from "@/components/layout";

import { LoadingState } from "@/components/ui";

export function PageLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      <Header />

      <main className="pt-16">
        {isLoading ? (
          <div
            className="
              flex
              min-h-[calc(100svh-4rem)]
              items-center
              justify-center
            "
          >
            <LoadingState size="lg" label="Caricamento..." />
          </div>
        ) : (
          <Outlet />
        )}
      </main>

      <Footer />

      <OptionBanner />
      <BackToTop />
    </>
  );
}