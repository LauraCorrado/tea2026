import type { ReactNode } from "react";

export interface CarouselProps<T> {
    items: T[];
    renderItem: (item: T, index: number) => ReactNode;
    loop?: boolean;
    showArrows?: boolean;
    showIndicators?: boolean;
    showCounter?: boolean;
    className?: string;
}