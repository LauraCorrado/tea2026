import { useContext } from "react";

import { AccessibilityContext } from "@/accessibility/AccessibilityProvider";

export function useAccessibility() {
    const context = useContext(AccessibilityContext);

    if (!context) {
        throw new Error(
            "useAccessibility deve essere usato all'interno di AccessibilityProvider",
        );
    }

    return context;
}