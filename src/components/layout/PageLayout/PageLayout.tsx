import { useEffect } from "react";
import { Outlet, useNavigation, useMatches } from "react-router";
import { Header, Footer, OptionBanner, BackToTop } from "@/components/layout";
import { LoadingState } from "@/components/ui";

interface RouteHandle {
  title?: string;
}

export function PageLayout() {
  const navigation = useNavigation();
  const matches = useMatches();
  const isLoading = navigation.state === "loading";

  useEffect(() => {
    const currentMatch = [...matches].reverse().find((match) => (match.handle as RouteHandle | undefined)?.title)
    const pageTitle = (currentMatch?.handle as RouteHandle | undefined)?.title;

    document.title = pageTitle ? `${pageTitle} | TEA Storie da Scoprire` : "TEA Storie da Scoprire"
  }, [matches])

  return (
    <>
      <Header />

      <main className="pt-28">
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