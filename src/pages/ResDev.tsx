import { Link } from "react-router";

import testHero from "@/assets/images/decorative/testHero.webp";
import testProgetto2 from "@/assets/images/decorative/testProgetto2.webp";

import { PatentAccordion } from "@/components/features";

import {
  Button,
  Container,
  PageHero,
  Section,
  SectionHeader,
} from "@/components/ui";

import {
  designs,
  patents,
  trademarks,
  type IndustrialPropertyItem,
} from "@/data/industrialPropertyItems";

interface PropertyAccordionGridProps {
  items: IndustrialPropertyItem[];
}

function PropertyAccordionGrid({ items }: PropertyAccordionGridProps) {
  return (
    <>
      <div className="space-y-5 lg:hidden">
        {items.map((item) => (
          <PatentAccordion key={`${item.type}-${item.number}`} {...item} />
        ))}
      </div>

      <div className="hidden gap-5 lg:grid lg:grid-cols-2">
        <div className="flex flex-col gap-5">
          {items
            .filter((_, index) => index % 2 === 0)
            .map((item) => (
              <PatentAccordion key={`${item.type}-${item.number}`} {...item} />
            ))}
        </div>

        <div className="flex flex-col gap-5">
          {items
            .filter((_, index) => index % 2 !== 0)
            .map((item) => (
              <PatentAccordion key={`${item.type}-${item.number}`} {...item} />
            ))}
        </div>
      </div>
    </>
  );
}

export function ResDev() {
  return (
    <>
      <PageHero
        title="Ricerca e Sviluppo"
        subtitle="Dalla ricerca nascono nuove soluzioni per affrontare sfide complesse"
        action={
          <Button variant="primary" color="white" as="a" href="#brevetti">
            I brevetti
          </Button>
        }
        backgroundImage={testHero}
        overlay="blue"
      />

      <Section variant="alternative" reveal="up">
        <Container>
          <div
            className="
              grid
              items-center
              gap-10

              lg:grid-cols-2
              lg:gap-16
            "
          >
            <div>
              <SectionHeader
                eyebrow="Ricerca & Sviluppo"
                title="Innovare per il futuro"
                description="
                  TEA è una PMI innovativa che ha fatto della ricerca uno degli elementi centrali del proprio percorso di crescita.
                "
              />

              <div
                className="
                  mt-6
                  space-y-4
                  text-lg
                  leading-relaxed
                  text-site-muted
                "
              >
                <p>
                  Fin dalla nascita, l’attività di Ricerca & Sviluppo è alla
                  base della progettazione di prodotti, servizi e tecnologie
                  proprietarie.
                </p>

                <p>
                  Nel tempo l’attività di R&S ha attraversato ambiti diversi,
                  dall’<strong>Imaging Multispettrale</strong> alla{" "}
                  <strong>fruizione multisensoriale</strong>, trasformando
                  ricerca applicata e competenze interne in soluzioni concrete e
                  tutelate attraverso strumenti di proprietà industriale.
                </p>

                <p>
                  I prodotti di punta frutto di questa attività sono{" "}
                  <Link
                    to="/about#imaging-multispettrale"
                    className="
                      text-site-green
                      underline-offset-4

                      hover:underline

                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-site-green
                      focus-visible:ring-offset-2
                      focus-visible:ring-offset-site-surface
                    "
                  >
                    @MMIRA
                  </Link>{" "}
                  e{" "}
                  <Link
                    to="/about#fruizione-accessibile"
                    className="
                      text-site-red
                      underline-offset-4

                      hover:underline

                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-site-orange
                      focus-visible:ring-offset-2
                      focus-visible:ring-offset-site-surface
                    "
                  >
                    AIVES
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div
              className="
                overflow-hidden
                rounded-2xl
              "
            >
              <img
                src={testProgetto2}
                alt=""
                loading="lazy"
                className="
                  aspect-4/3
                  h-full
                  w-full
                  object-cover
                "
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section id="brevetti" variant="default" reveal="up">
        <Container>
          <SectionHeader
            eyebrow="Proprietà industriale"
            title="L’innovazione certificata"
            description="
              Il reparto Ricerca & Sviluppo di TEA progetta e ingegnerizza
              internamente soluzioni hardware e software nate per affrontare
              sfide complesse nei campi dell’accessibilità, della cultura e
              dell’interazione con la materia.
            "
          />

          <div className="mt-12 space-y-16">
            <div>
              <h3
                className="
        mb-6
        text-2xl
        font-semibold
        tracking-wide
      "
              >
                Brevetti
              </h3>

              <PropertyAccordionGrid items={patents} />
            </div>

            <div>
              <h3
                className="
        mb-6
        text-2xl
        font-semibold
        tracking-wide
      "
              >
                Marchi comunitari
              </h3>

              <PropertyAccordionGrid items={trademarks} />
            </div>

            <div>
              <h3
                className="
        mb-6
        text-2xl
        font-semibold
        tracking-wide
      "
              >
                Design
              </h3>

              <PropertyAccordionGrid items={designs} />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}