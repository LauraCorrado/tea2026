import type { InteractiveHeroArea } from "@/components/features";

export const heroAreas = [
  {
    id: "fruizione-accessibile",
    title: "Fruizione accessibile",
    description:
      "Tecnologie e soluzioni multisensoriali per rendere il patrimonio culturale più accessibile e inclusivo.",
    href: "/chi-siamo#fruizione-accessibile",
    color: "orange",
  },

  {
    id: "imaging-multispettrale",
    title: "Imaging Multispettrale",
    description:
      "Tecnologie di acquisizione e analisi avanzata delle immagini applicate allo studio e alla conservazione del patrimonio.",
    href: "/chi-siamo#imaging-multispettrale",
    color: "green",
  },

  {
    id: "edutainment-gamification",
    title: "Edutainment e Gamification",
    description:
      "Esperienze digitali e interattive che uniscono apprendimento, gioco e coinvolgimento dell'utente.",
    href: "/chi-siamo#edutainment-gamification",
    color: "blue",
  },

  {
    id: "consulenza-statistica",
    title: "Consulenza statistica",
    description:
      "Analisi e interpretazione dei dati a supporto della ricerca, della valutazione e dei processi decisionali.",
    href: "/chi-siamo#consulenza-statistica",
    color: "red",
  },
] satisfies readonly InteractiveHeroArea[];