import type { HTMLAttributes, ReactNode } from "react";

export interface StatCounterProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  value: number;
  label: ReactNode;

  description?: ReactNode;

  prefix?: string;
  suffix?: string;

  duration?: number;
}