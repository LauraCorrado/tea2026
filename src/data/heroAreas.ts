import type { InteractiveHeroArea } from "@/components/features";

export const heroAreas = [
  {
    id: "fruizione-accessibile",
    title: "Fruizione accessibile",
    description:
      "Progettiamo esperienze tattili, fisiche e interattive per rendere la cultura tangibile e coinvolgente attraverso i sensi.",
    href: "/about#fruizione-accessibile",
    color: "orange",
  },

  {
    id: "imaging-multispettrale",
    title: "Imaging Multispettrale",
    description:
      "Valorizziamo e ricostruiamo digitalmente il patrimonio attraverso tecnologie non invasive di Imaging Multispettrale e di Restauro Virtuale.",
    href: "/about#imaging-multispettrale",
    color: "green",
  },

  {
    id: "edutainment-gamification",
    title: "Edutainment e Gamification",
    description:
      "Trasformiamo l’apprendimento in un’esperienza attiva fondendo gioco, narrazione e interazione.",
    href: "/about#edutainment-gamification",
    color: "blue",
  },

  {
    id: "consulenza-statistica",
    title: "Consulenza statistica",
    description:
      "Trasformiamo il dato semplice e lo inseriamo in contesti strutturati.",
    href: "/about#consulenza-statistica",
    color: "red",
  },
] satisfies readonly InteractiveHeroArea[];