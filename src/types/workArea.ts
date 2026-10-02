import type { BadgeColor } from "@/components/ui/Badge/Badge.types";

export type WorkArea =
  | "analisi-statistica"
  | "fruizione-accessibile"
  | "imaging-multispettrale"
  | "edutainment-gamification"

export const workAreaConfig: Record<WorkArea,
  {
    label: string;
    color: BadgeColor;
  }> = {
  "analisi-statistica": {
    label: "Analisi statistica",
    color: "red"
  },
  "fruizione-accessibile": {
    label: "Fruizione accessibile",
    color: "orange"
  },
  "imaging-multispettrale": {
    label: "Imaging multispettrale",
    color: "green"
  },
  "edutainment-gamification": {
    label: "Edutainment e gamification",
    color: "blue"
  }
}