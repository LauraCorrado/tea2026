import type { HTMLAttributes, ReactNode } from "react";

export type CardVariant =
  | "default"
  | "outlined"
  | "elevated";

export type CardPadding =
  | "sm"
  | "md"
  | "lg";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: CardVariant;
  padding?: CardPadding;
  badges?: ReactNode[];
}