import type { InteractiveHeroArea } from "./InteractiveHero.types";

export interface HeroInfoPanelProps {
    area: InteractiveHeroArea;
    onClose: () => void;
}