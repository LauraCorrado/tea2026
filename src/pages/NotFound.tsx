import { Link } from "react-router";

export function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">404</h1>

      <p>Pagina non trovata</p>

      <Link
        to="/"
        className="text-tea-blue underline"
      >
        Torna alla Home
      </Link>
    </main>
  );
}