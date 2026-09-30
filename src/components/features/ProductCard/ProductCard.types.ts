import type { HTMLAttributes, ReactNode } from "react";

export type ProductCardAccent =
  | "blue"
  | "green"
  | "orange"
  | "red"
  | "black"
  | "white";

export type ProductCardSide = "left" | "right";

export interface ProductCardImage {
  src: string;
  alt: string;
}

export interface ProductCardProps
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  logo?: ReactNode;
  title?: ReactNode;
  description: ReactNode;
  image: ProductCardImage;
  action?: ReactNode;
  side?: ProductCardSide;
  accent?: ProductCardAccent;
}