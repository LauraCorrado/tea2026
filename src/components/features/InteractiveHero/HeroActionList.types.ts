import type { InteractiveHeroArea } from "./InteractiveHero.types";

export interface HeroActionListProps {
    areas: readonly InteractiveHeroArea[];
    activeAreaId?: string;
    onSelect: (area: InteractiveHeroArea) => void;
}