import type { ReactNode } from "react";

interface CompetenceGridProps {
  children: ReactNode;
}

export function CompetenceGrid({ children }: CompetenceGridProps) {
  return (
    <div
      className="
        mx-auto
        my-8
        grid
        max-w-5xl
        grid-cols-1
        gap-5

        sm:grid-cols-2
        lg:grid-cols-3
      "
    >
      {children}
    </div>
  );
}