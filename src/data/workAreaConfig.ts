import type { BadgeColor } from "@/components/ui/Badge/Badge.types";
import type { WorkArea } from "@/types/workArea";

export const workAreaConfig: Record<
  WorkArea,
  {
    label: string;
    color: BadgeColor;
  }
> = {
  "consulenza-statistica": {
    label: "Consulenza statistica",
    color: "red",
  },

  "fruizione-accessibile": {
    label: "Fruizione accessibile",
    color: "orange",
  },

  "imaging-multispettrale": {
    label: "Imaging multispettrale",
    color: "green",
  },

  "edutainment-gamification": {
    label: "Edutainment e gamification",
    color: "blue",
  },
};