import { useAccessibility } from "@/hooks/useAccessibility";

import { ReadingGuide } from "./ReadingGuide";
import { ReadingMask } from "./ReadingMask";

export function AccessibilityOverlay() {
  const { settings } = useAccessibility();

  return (
    <>
      {settings.readingGuide && <ReadingGuide />}
      {settings.readingMask && <ReadingMask />}
    </>
  );
}