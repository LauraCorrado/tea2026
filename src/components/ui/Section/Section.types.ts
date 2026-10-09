import type { HTMLAttributes, ReactNode } from "react";

export type SectionVariant =
  | "default"
  | "alternative"
  | "blue"
  | "green"
  | "orange"
  | "red";

export type SectionSpacing = "sm" | "md" | "lg";

export type SectionReveal = "up" | "left" | "right";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  variant?: SectionVariant;
  spacing?: SectionSpacing;
  animate?: boolean;
  reveal?: SectionReveal;
}