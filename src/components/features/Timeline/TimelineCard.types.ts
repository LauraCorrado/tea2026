import type { HTMLAttributes } from "react";

import type { TimelineItem } from "./Timeline.types";

export interface TimelineCardProps
    extends Omit<HTMLAttributes<HTMLElement>, "onClick"> {
    item: TimelineItem;
    onClick: (item: TimelineItem) => void;
}