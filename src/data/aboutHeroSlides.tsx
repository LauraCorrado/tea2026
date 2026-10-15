import type { AboutHeroSlide } from "@/components/features";

import testHero from "@/assets/images/decorative/testHero.webp";
import testProgetto1 from "@/assets/images/decorative/testProgetto1.webp";
import testProgetto3 from "@/assets/images/decorative/testProgetto3.webp";

export const aboutHeroSlides = [
  {
    id: "slide1",

    title: (
      <>
        In un mondo di <span className="text-tea-blue">tecnologia</span>, noi
        vendiamo <span className="text-tea-green">poesia</span>
      </>
    ),

    description: (
      <>
        TEA porta la tecnologia dentro un{" "}
        <strong>orizzonte umano, sensibile e creativo</strong>. L’innovazione
        diventa uno strumento per costruire esperienze capaci di emozionare,
        coinvolgere e trasformare idee in qualcosa da vivere. La poesia
        restituisce centralità all’esperienza umana.
      </>
    ),

    image: {
      src: testProgetto3,
      alt: "Attività e progetti TEA",
    },
  },

  {
    id: "slide2",

    title: (
      <>
        Un’evoluzione lunga <span className="text-tea-orange">30 anni</span>
      </>
    ),

    description: (
      <>
        TEA nasce nel 1996 dalla consulenza statistica e da un principio che
        accompagna tutta la sua storia:{" "}
        <strong>dietro ogni dato esiste una storia da raccontare</strong>. Nel
        tempo questo approccio incontra il mondo dei beni culturali, dando
        origine a soluzioni come <strong className="italic">@MMIRA</strong> per
        l’Imaging Multispettrale e il restauro virtuale e, dal 2015,{" "}
        <strong className="italic">AIVES</strong> per l’accessibilità
        multisensoriale. Da qui prende forma un percorso sempre più orientato
        all’accessibilità e al Design for All.
      </>
    ),

    image: {
      src: testHero,
      alt: "Attività e progetti TEA",
    },
  },

  {
    id: "slide3",

    title: (
      <>
        Nuove <span className="text-tea-red">storie da scoprire</span>
      </>
    ),

    description: (
      <>
        Oggi TEA continua a progettare soluzioni capaci di abbattere le barriere
        e rendere{" "}
        <strong>cultura, conoscenza ed esperienze accessibili a tutti</strong>.
      </>
    ),

    image: {
      src: testProgetto1,
      alt: "Attività di ricerca e sviluppo TEA",
    },
  },
] satisfies AboutHeroSlide[];