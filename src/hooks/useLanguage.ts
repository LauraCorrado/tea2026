import { useContext } from "react";

import { LanguageContext } from "@/localization/LanguageProvider";

export function useLanguage() {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error(
            "useLanguage deve essere usato all'interno di LanguageProvider!",
        );
    }

    return context;
}