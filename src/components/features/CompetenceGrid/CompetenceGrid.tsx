import type { ReactNode } from "react";

interface CompetenceGridProps {
  children: ReactNode;
}

export function CompetenceGrid({ children }: CompetenceGridProps) {
  return (
    <div
      className="
        my-8
        mx-auto
        max-w-5xl

        columns-1
        gap-5

        sm:columns-2
        lg:columns-3
      "
    >
      {children}
    </div>
  );
}
