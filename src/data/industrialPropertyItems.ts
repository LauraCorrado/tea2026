import type { PatentAccordionProps } from "@/components/features";

export type IndustrialPropertyItem = Pick<
    PatentAccordionProps,
    | "type"
    | "typeLabel"
    | "name"
    | "number"
    | "year"
    | "description"
    | "nationalizations"
    | "documentationUrl"
    | "pdfUrl"
>;

export const patents: IndustrialPropertyItem[] = [
    {
        type: "national-patent",

        name:
            "Sistema integrato di acquisizione e contemporanea ricostruzione delle immagini e del modello 3D di un documento e relativo metodo",

        number: "102015000024824",

        year: 2017,
    },

    {
        type: "national-patent",

        name:
            "Sistema di movimentazione di un dispositivo di acquisizione",

        number: "102015000024845",

        year: 2017,
    },

    {
        type: "national-patent",

        name:
            "Sistema di movimentazione per la fruizione multisensoriale delle opere d’arte",

        number: "102016000013443",

        year: 2018,

        description:
            "NOTA: Brevetto nazionale non rinnovato, con tutela mantenuta attraverso il brevetto europeo convalidato in Italia.",
    },

    {
        type: "international-patent",

        typeLabel: "Domanda internazionale PCT",

        name:
            "Handling System for the Multi-Sensory Fruition of Artworks",

        number: "PCT/IB2017/050665",

        year: 2017,

        description:
            "Domanda internazionale presentata attraverso la procedura PCT e successivamente proseguita attraverso la nazionalizzazione nei Paesi selezionati.",

        nationalizations: [
            {
                country: "Italia",
                number: "502021000003794",
                year: 2021,
            },
            {
                country: "Francia",
                number: "EP 3413760",
                year: 2020,
            },
            {
                country: "Germania",
                number: "EP 3413760",
                year: 2020,
            },
            {
                country: "Cina",
                number: "CN 108601463",
                year: 2020,
            },
            {
                country: "Giappone",
                number: "6925639",
                year: 2021,
            },
        ],
    },

    {
        type: "national-patent",

        typeLabel: "Brevetto nazionale per modello di utilità",

        name:
            "Opera d’arte fruibile in modalità multisensoriale",

        number: "202022000003873",

        year: 2024,
    },

    {
        type: "national-patent",

        name:
            "Sistema multisensoriale per la fruizione di opere d’arte e relativo metodo di produzione",

        number: "102023000018969",

        year: 2025,
    },
]

export const trademarks: IndustrialPropertyItem[] = [
    {
        type: "community-trademark",

        typeLabel: "Marchio comunitario denominativo",

        name: "AIVES",

        number: "015058654",

        year: 2016,

        description:
            "Domanda N. 015058654 presentata il 30/01/2016. Attestato di concessione N. 015058654 del 17/05/2016.",
    },

    {
        type: "community-trademark",

        typeLabel: "Marchio comunitario figurativo",

        name: "AI",

        number: "015061286",

        year: 2017,

        description:
            "Domanda N. 015061286 presentata il 30/01/2016. Attestato di concessione N. 015061286 del 04/09/2017.",
    },
];

export const designs: IndustrialPropertyItem[] = [
    {
        type: "design",

        typeLabel: "Design comunitario",

        name: "Design europeo AIVES",

        number: "007694542-0001",

        year: 2020,

        description:
            "Domanda N. 007694542 presentata il 14/02/2020. Certificato di registrazione N. 007694542-0001 del 14/02/2020.",
    },
]