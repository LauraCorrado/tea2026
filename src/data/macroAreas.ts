import type { WorkArea } from "@/types/workArea";
import type { MacroArea } from "@/types/about";

import testHero from "@/assets/images/decorative/testHero.webp";
import testProgetto1 from "@/assets/images/decorative/testProgetto1.webp";
import testProgetto2 from "@/assets/images/decorative/testProgetto2.webp";
import testProgetto3 from "@/assets/images/decorative/testProgetto3.webp";

export const DEFAULT_AREA: WorkArea =
  "fruizione-accessibile";

export const macroAreas: MacroArea[] = [
  {
    id: "fruizione-accessibile",

    details: [
      {
        id: "introduzione",
        title: "Esperienze da vivere con tutti i sensi",
        description:
          "Non esiste un solo modo di vivere la cultura. Per questo sviluppiamo esperienze interattive, multimateriche e multisensoriali che rendono il patrimonio culturale più accessibile e coinvolgente.",
        image: {
          src: testProgetto1,
          alt: "",
        },
        imagePosition: "right",
      },
      {
        id: "approfondimento",
        description:
          "Le modalità di fruizione che progettiamo sono pensate per un pubblico ampio e diversificato, con particolare attenzione all’accessibilità per le persone con disabilità sensoriali.",
        image: {
          src: testHero,
          alt: "",
        },
        imagePosition: "left",
        cta: {
          label: "Contattaci",
          to: "/contacts",
        },
      },
    ],

    caseStudy: {
      title: "AIVES",
      description:
        "Breve introduzione ad AIVES da mostrare nella card del caso studio.",

      image: {
        src: testProgetto2,
        alt: "",
      },

      modal: {
        eyebrow: "Fruizione accessibile",
        period: "Dal 2015",
        description:
          "Qui inserisco il testo completo dedicato ad AIVES",

        image: {
          src: testProgetto2,
          alt: "",
        },

        gallery: [
          {
            src: testHero,
            alt: "",
          },
          {
            src: testProgetto1,
            alt: "",
          },
          {
            src: testProgetto3,
            alt: "",
          },
        ],

        content:
          "Qui posso inserire eventuali informazioni aggiuntive sul progetto",

        actions: [
          {
            label: "Visita AIVES",
            to: "https://www.aives.eu/",
            external: true,
          },
        ],
      },
    },
  },

  {
    id: "imaging-multispettrale",

    details: [
      {
        id: "introduzione",
        title: "Rendere visibile l’invisibile",
        description:
          "L’imaging multispettrale è una tecnica di indagine ottica non invasiva per l’acquisizione di documenti, dipinti o altri manufatti utilizzando diverse bande della luce, tra cui infrarosso e ultravioletto. Permette così di far emergere dettagli invisibili a occhio nudo e raccogliere informazioni utili sullo stato di conservazione dell’opera, senza comprometterne lo stato di salute.",
        image: {
          src: testProgetto2,
          alt: "",
        },
        imagePosition: "right",
      },

      {
        id: "approfondimento",
        description:
          "Realizziamo indagini multispettrali in loco per musei, biblioteche e archivi, utili a evidenziare palinsesti cancellati, analizzare testi nascosti, migliorare la leggibilità dei documenti e rimuovere virtualmente macchie e alterazioni. Le immagini acquisite possono inoltre essere elaborate attraverso tecniche di restauro virtuale.",
        image: {
          src: testHero,
          alt: "",
        },
        imagePosition: "left",
        cta: {
          label: "Guarda un esempio",
          to: "https://www.youtube.com/watch?v=NOFuecf_msE",
          external: true,
        },
      },
    ],

    caseStudy: {
      title: "@MMIRA",
      description:
        "Qui si aggiunge un testo introduttivo sul software ammira e la cta apre la modale di progetto per l'approfondimento (usando Modal component)",
      image: {
        src: testHero,
        alt: "",
      },

      modal: {
        eyebrow: "Imaging Multispettrale",
        period: "Dal 2015",
        description:
          "Qui inserisco il testo completo dedicato ad @mmira",

        image: {
          src: testProgetto2,
          alt: "",
        },

        gallery: [
          {
            src: testHero,
            alt: "",
          },
          {
            src: testProgetto1,
            alt: "",
          },
          {
            src: testProgetto3,
            alt: "",
          },
        ],

        content:
          "Qui posso inserire eventuali informazioni aggiuntive sul progetto",
      },
    },
  },

  {
    id: "edutainment-gamification",

    details: [
      {
        id: "introduzione",
        title: "Imparare giocando",
        description:
          "Progettiamo soluzioni di edutainment e gamification che trasformano contenuti culturali, educativi e divulgativi in esperienze interattive e coinvolgenti. Giochi e strumenti digitali sono sviluppati su misura in base al contesto, ai contenuti e al pubblico.",
        image: {
          src: testProgetto3,
          alt: "",
        },
        imagePosition: "right",
        cta: {
          label: "Guarda un'anteprima",
          to: "https://www.youtube.com/watch?v=InCfMp5-xuM",
          external: true
        },
      }
    ],

    caseStudy: {
      title: "Game LABS",
      description:
        "Qui si aggiunge un testo introduttivo su game labs per s severina e la cta apre la modale di progetto per l'approfondimento (usando Modal component)",
      image: {
        src: testProgetto1,
        alt: "",
      },
      modal: {
        eyebrow: "Edutainment e gamification",
        period: "DA SCRIVERE",
        description:
          "Qui inserisco il testo completo dedicato al GameLabs",

        image: {
          src: testProgetto2,
          alt: "",
        },

        gallery: [
          {
            src: testHero,
            alt: "",
          },
          {
            src: testProgetto1,
            alt: "",
          },
          {
            src: testProgetto3,
            alt: "",
          },
        ],

        content:
          "Qui posso inserire eventuali informazioni aggiuntive sul progetto",
      },
    },
  },

  {
    id: "consulenza-statistica",

    details: [
      {
        id: "introduzione",
        title: "Dai numeri alle informazioni",
        description:
          "Trasformiamo dati complessi in informazioni utili attraverso analisi statistiche e strumenti GIS e WebGIS, supportando decisioni, pianificazione e gestione del territorio. Partiamo dalla raccolta e organizzazione dei dati per elaborarli, analizzarli e interpretarli attraverso le tecniche statistiche più adatte al contesto e agli obiettivi di ogni progetto.",
        image: {
          src: testHero,
          alt: "",
        },
        imagePosition: "right",
      },
      {
        id: "approfondimento",
        description:
          "Realizziamo indagini ad hoc, analisi di mercato, studi di fattibilità, ricerche socio-economiche, interviste e focus group, affiancando enti pubblici e imprese nella comprensione dei fenomeni che devono osservare e valutare.",
        image: {
          src: testHero,
          alt: "",
        },
        imagePosition: "left",
        cta: {
          label: "Contattaci",
          to: "/contacts",
        },
      },
    ],

    caseStudy: {
      title: "LOREM",
      description:
        "Qui si aggiunge un testo introduttivo su un particolare lavoro legato alla consulenza statistica o al web gis e la cta apre la modale di progetto.",
      image: {
        src: testProgetto3,
        alt: "",
      },
      modal: {
        eyebrow: "Consulenza statistica",
        period: "DA SCRIVERE",
        description:
          "Qui inserisco il testo completo dedicato al lavoro scelto",

        image: {
          src: testProgetto2,
          alt: "",
        },

        gallery: [
          {
            src: testHero,
            alt: "",
            caption: "prova caption"
          },
          {
            src: testProgetto1,
            alt: "",
          },
          {
            src: testProgetto3,
            alt: "",
          },
        ],

        content:
          "Qui posso inserire eventuali informazioni aggiuntive sul progetto",
      },
    },
  },
]