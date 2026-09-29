import { ChevronLeft, ChevronRight } from "lucide-react";
import { IconButton } from "../IconButton";

interface CarouselControlsProps {
  currentIndex: number;
  total: number;
  onPrevious: () => void;
  onNext: () => void;
  canPrevious: boolean;
  canNext: boolean;
  showArrows: boolean;
  showCounter: boolean;
}

export function CarouselControls({
  currentIndex,
  total,
  onPrevious,
  onNext,
  canPrevious,
  canNext,
  showArrows,
  showCounter,
}: CarouselControlsProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      {showArrows && (
        <div className="flex gap-2">
          <IconButton
            animation="glow"
            icon={<ChevronLeft size={18} />}
            label="Slide precedente"
            disabled={!canPrevious}
            onClick={onPrevious}
          />

          <IconButton
            animation="glow"
            icon={<ChevronRight size={18} />}
            label="Slide successiva"
            disabled={!canNext}
            onClick={onNext}
          />
        </div>
      )}

      {showCounter && (
        <span className="text-sm font-medium">
          {currentIndex + 1} / {total}
        </span>
      )}
    </div>
  );
}