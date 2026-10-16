import testHero from "@/assets/images/decorative/testHero.webp";
import testProgetto1 from "@/assets/images/decorative/testProgetto1.webp";
import testProgetto2 from "@/assets/images/decorative/testProgetto2.webp";
import testProgetto3 from "@/assets/images/decorative/testProgetto3.webp";

export const competences = [
    {
        id: "data-analytics-statistics",
        title: "Data Analytics & Statistics",
        description:
            "Analisi univariate e multivariate, interpretazione e modellazione dei dati per trasformare informazioni complesse in conoscenza utile e supportare ricerca, valutazione e processi decisionali.",
        color: "red",
        image: {
            src: testProgetto1,
            alt: "Analisi e visualizzazione di dati statistici",
        },
    },

    {
        id: "gis-webgis",
        title: "GIS & WebGIS",
        description:
            "Progettazione di GIS (Sistemi Informativi Geografici) che integrano dati geografici e informazioni descrittive per analizzare e rappresentare il territorio. I WebGIS rendono questi sistemi consultabili online attraverso mappe interattive e strumenti personalizzati, utili per pianificazione, servizi e valorizzazione territoriale.",
        color: "green",
        image: {
            src: testProgetto2,
            alt: "Mappatura digitale e sistemi GIS",
        },
    },

    {
        id: "cultural-heritage-technologies",
        title: "Cultural Heritage Technologies",
        description:
            "Tecnologie applicate alla conservazione e alla valorizzazione del patrimonio culturale, dalle indagini diagnostiche non invasive al restauro virtuale e alla progettazione di nuove modalità di fruizione.",
        color: "orange",
        image: {
            src: testProgetto3,
            alt: "Tecnologie applicate al patrimonio culturale",
        },
    },

    {
        id: "project-management",
        title: "Project Management",
        description:
            "Affiancamento a imprese ed enti pubblici lungo l’intero ciclo di vita di un progetto: dallo studio di fattibilità e dalla redazione della proposta alla ricerca di finanziamenti, fino a monitoraggio, rendicontazione, comunicazione e valutazione dei risultati.",
        color: "blue",
        image: {
            src: testHero,
            alt: "Coordinamento e gestione di progetto",
        },
    },

    {
        id: "digital-design",
        title: "Digital Design",
        description:
            "Progettazione di interfacce, esperienze e prodotti digitali con attenzione a usabilità, accessibilità, gerarchia delle informazioni e coerenza tra contenuti, identità visiva e tecnologia.",
        color: "red",
        image: {
            src: testProgetto1,
            alt: "Progettazione di interfacce ed esperienze digitali",
        },
    },

    {
        id: "visual-storytelling",
        title: "Visual Storytelling",
        description:
            "Progettazione di narrazioni visive e multimediali capaci di raccontare progetti, opere, luoghi e altri contenuti in maniera coinvolgente e immediata.",
        color: "green",
        image: {
            src: testProgetto2,
            alt: "Narrazione attraverso immagini e contenuti multimediali",
        },
    },

    {
        id: "web-development",
        title: "Web Development",
        description:
            "Progettazione e sviluppo di siti e web app accessibili, responsive e conformi agli standard, con particolare attenzione alla fruibilità tramite tecnologie assistive e alla valorizzazione dei contenuti.",
        color: "blue",
        image: {
            src: testHero,
            alt: "Sviluppo di siti e piattaforme web",
        },
    },

    {
        id: "interactive-media-development",
        title: "Interactive Media Development",
        description:
            "Sviluppo di applicazioni multimediali interattive, applicativi desktop e mobile e serious game, che trasformano contenuti culturali, educativi e scientifici in modalità di fruizione attive e coinvolgenti.",
        color: "orange",
        image: {
            src: testProgetto3,
            alt: "Esperienze digitali interattive e gamification",
        },
    },

    {
        id: "digital-fabrication",
        title: "Digital Fabrication",
        description:
            "Trasformazione di modelli e progetti digitali in oggetti fisici attraverso tecnologie di fabbricazione digitale, integrando progettazione, prototipazione e processi produttivi automatizzati.",
        color: "blue",
        image: {
            src: testProgetto1,
            alt: "Fabbricazione digitale e prototipazione",
        },
    },

    {
        id: "artigianato-artistico",
        title: "Artigianato artistico",
        description:
            "Lavorazioni manuali e competenze artigianali applicate alla realizzazione di elementi, supporti e manufatti personalizzati, utilizzando tecniche tradizionali e progettazione contemporanea.",
        color: "red",
        image: {
            src: testProgetto2,
            alt: "Lavorazione artigianale di materiali e manufatti",
        },
    },
] as const