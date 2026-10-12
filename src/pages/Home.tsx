import { useNavigate } from "react-router";

import {
  Button,
  Container,
  Section,
  SectionHeader,
  Logo,
} from "@/components/ui";
import { InteractiveHero, ProductCard } from "@/components/features";

import { heroAreas } from "@/data/heroAreas";

// prove
import testHero from "@/assets/images/decorative/testHero.webp";
import testProgetto1 from "@/assets/images/decorative/testProgetto1.webp";
import testProgetto2 from "@/assets/images/decorative/testProgetto2.webp";
import testProgetto3 from "@/assets/images/decorative/testProgetto3.webp";
const ISO9001_CERTIFICATE_URL =
  "/documents/certification/certificate_15387_TEA_SRL_2024.pdf";
const GENDER_EQUALITY_CERTIFICATE_URL = "/documents/certification/PROVA.pdf";

export function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* //! HERO */}
      <InteractiveHero
        videoSrc="/videos/testRec.mp4" // * DA MODIFICARE CON VIDEO CORRETTO
        videoPoster={testHero}
        eyebrow="Territorio, Economia, Ambiente e Arte"
        title="Storie da scoprire"
        description="Ricerca e tecnologia per comprendere, valorizzare e rendere accessibili storie, contesti, territori"
        areas={heroAreas}
      />

      {/* //! BENVENUTO */}
      <Section variant="alternative" reveal="up">
        <Container>
          <SectionHeader
            eyebrow="Benvenuti"
            title="Tecnologia, ricerca e cultura da oltre 30 anni"
            description="TEA è una PMI innovativa multisettoriale che integra competenze diverse per sviluppare soluzioni accessibili e inclusive"
            align="center"
          />

          <div className="mx-auto flex max-w-3xl flex-col items-center space-y-6">
            <p className="max-w-3xl text-center text-xl leading-relaxed text-site-muted">
              Dall’imaging multispettrale all’edutainment, ricerca e tecnologia
              diventano strumenti per conoscere, valorizzare e rendere
              accessibile il patrimonio
            </p>

            <Button color="blue" onClick={() => navigate("/about")}>
              Scopri di più
            </Button>
          </div>
        </Container>
      </Section>

      {/* //! RICERCA E SVILUPPO */}
      <Section variant="default" reveal="left">
        <Container
          className="
      lg:grid
      lg:grid-cols-2
      lg:grid-rows-[auto_1fr]
      lg:items-start
      lg:gap-x-14
      lg:gap-y-8
      lg:space-y-0
    "
        >
          <SectionHeader
            eyebrow="Ricerca & Sviluppo"
            title="Innovare per il futuro"
            className="
        lg:col-start-1
        lg:row-start-1
      "
          />

          <div
            className="
    space-y-6

    lg:col-start-1
    lg:row-start-2
  "
          >
            <p className="text-lg leading-relaxed text-site-muted">
              Come PMI innovativa, TEA fa della Ricerca & Sviluppo un motore per
              progettare tecnologie e soluzioni proprietarie.
            </p>

            <p className="text-lg leading-relaxed text-site-muted">
              Dall’imaging multispettrale alla fruizione multisensoriale, la
              ricerca ha dato origine a{" "}
              <span className="text-site-blue">
                brevetti, tecnologie e soluzioni sviluppate internamente
              </span>
              .
            </p>

            <div className="flex flex-wrap gap-3">
              <Button color="blue" onClick={() => navigate("/res-dev")}>
                Approfondisci
              </Button>

              <Button
                color="blue"
                variant="secondary"
                onClick={() => navigate("/res-dev#patents")}
              >
                I nostri brevetti
              </Button>
            </div>
          </div>

          <div
            className="
        overflow-hidden
        rounded-2xl

        lg:col-start-2
        lg:row-start-1
        lg:row-span-2
        lg:self-center
      "
          >
            <img
              src={testProgetto1}
              alt="Immagine segnaposto per Ricerca e Sviluppo"
              loading="lazy"
              className="
          aspect-4/3
          w-full
          object-cover
        "
            />
          </div>
        </Container>
      </Section>

      {/* //! PRODOTTI */}
      <Section id="products" variant="alternative" reveal="up">
        <Container>
          <SectionHeader
            eyebrow="I prodotti di punta"
            title="Ricerca che diventa esperienza"
            align="center"
            description="Soluzioni nate dalla ricerca di TEA per rendere il patrimonio più accessibile e coinvolgente"
          />

          <div className="space-y-16 lg:space-y-20">
            <ProductCard
              side="right"
              accent="red"
              logo={<Logo brand="aives" size="lg" />}
              image={{
                src: testProgetto2,
                alt: "Immagine segnaposto per AIVES",
              }}
              description={
                <p>
                  Esplorare l’arte con tutti i sensi, attraverso un’esperienza
                  multisensoriale accessibile e coinvolgente.
                </p>
              }
              action={
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="primary"
                    color="red"
                    size="sm"
                    onClick={() => navigate("/about#fruizione-accessibile")}
                  >
                    Scopri di più
                  </Button>

                  <Button
                    as="a"
                    variant="secondary"
                    href="https://www.aives.eu/"
                    target="_blank"
                    rel="noreferrer"
                    color="red"
                    size="sm"
                  >
                    Visita il sito ufficiale
                  </Button>
                </div>
              }
            />

            <ProductCard
              side="left"
              accent="orange"
              logo={<Logo brand="ammira" size="lg" />}
              image={{
                src: testProgetto3,
                alt: "Immagine segnaposto per @MMIRA",
              }}
              description={
                <p>
                  Rendere visibile l’invisibile attraverso imaging
                  multispettrale e restauro virtuale di documenti antichi e
                  danneggiati
                </p>
              }
              action={
                <Button
                  color="orange"
                  variant="secondary"
                  size="sm"
                  onClick={() => navigate("/about#imaging-multispettrale")}
                >
                  Scopri @MMIRA
                </Button>
              }
            />
          </div>
        </Container>
      </Section>

      {/* //! AFFIDATI A NOI */}
      <Section variant="default" reveal="left">
        <Container>
          <SectionHeader
            eyebrow="Qualità e responsabilità"
            title="Competenze su cui contare"
            description="Competenza tecnica, approccio multidisciplinare e ricerca accompagnano ogni progetto, dall’idea alla realizzazione e alla valutazione dei risultati"
          />

          <div className="mx-auto flex max-w-3xl flex-col items-center space-y-6">
            <p className="max-w-3xl text-center text-xl leading-relaxed text-site-muted">
              Affidarsi a TEA significa scegliere un partner capace di
              trasformare cultura, conoscenza e innovazione in esperienze
              accessibili, inclusive e ad alto valore progettuale
            </p>
          </div>

          <div
            className="
              grid
              gap-8
              md:grid-cols-2
            "
          >
            <article
              className="
                rounded-2xl
                border-site-border border-2
                p-6
                md:p-8
              "
            >
              <div className="space-y-6">
                <a
                  href={ISO9001_CERTIFICATE_URL}
                  download
                  aria-label="Scarica il certificato ISO 9001:2015"
                  className="
    flex
    min-h-36
    items-center
    justify-center
  "
                >
                  <Logo
                    brand="rina9001"
                    size="xl"
                    className="
      transition-transform
      duration-300
      hover:scale-105
    "
                  />
                </a>

                <div className="space-y-3">
                  <h3 className="text-2xl">Qualità certificata ISO 9001</h3>

                  <p className="leading-relaxed text-site-muted">
                    TEA adotta un Sistema di Gestione per la Qualità certificato
                    secondo la norma ISO 9001:2015, a garanzia di processi
                    strutturati, affidabilità e miglioramento continuo.
                  </p>
                </div>

                <Button
                  as="a"
                  href={ISO9001_CERTIFICATE_URL}
                  download
                  aria-label="Scarica il certificato ISO 9001:2015"
                  color="blue"
                  size="sm"
                >
                  Scarica il certificato
                </Button>
              </div>
            </article>

            <article
              className="
                rounded-2xl
                border-site-border border-2
                p-6
                md:p-8
              "
            >
              <div className="space-y-6">
                <a
                  href={GENDER_EQUALITY_CERTIFICATE_URL}
                  download
                  aria-label="Scarica il certificato Parità di Genere UNI/PdR 125:2022"
                  className="block"
                >
                  <img
                    src={testHero}
                    alt="Segnaposto logo certificazione parità di genere"
                    loading="lazy"
                    className="
                      h-28
                      w-full
                      object-contain
                    "
                  />
                </a>

                <div className="space-y-3">
                  <h3 className="text-2xl">
                    Certificazione Parità di Genere UNI/PdR 125:2022
                  </h3>

                  <p className="leading-relaxed text-site-muted">
                    TEA promuove un ambiente di lavoro fondato su pari
                    opportunità, valorizzazione delle competenze e rispetto
                    delle differenze, favorendo percorsi di crescita e
                    partecipazione equi
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button
                    as="a"
                    href={GENDER_EQUALITY_CERTIFICATE_URL}
                    aria-label="Scarica il certificato Parità di Genere UNI/PdR 125:2022"
                    download
                    color="red"
                    size="sm"
                  >
                    Scarica il certificato
                  </Button>

                  <Button
                    variant="secondary"
                    color="red"
                    size="sm"
                    onClick={() => navigate("/gender-equality")}
                  >
                    Leggi la politica
                  </Button>
                </div>
              </div>
            </article>
          </div>
        </Container>
      </Section>

      {/* //! CONTATTI */}
      <Section variant="blue" reveal="up">
        <Container>
          <SectionHeader title="Parliamo del tuo progetto" />

          <div className="max-w-3xl space-y-6">
            <p className="text-lg leading-relaxed">
              Raccontaci il progetto, l’obiettivo o anche solo il punto da cui
              vuoi partire.
            </p>
            <p className="text-lg leading-relaxed">
              Mettiamo a disposizione competenze diverse per capire insieme
              quale strada può avere più senso.
            </p>

            <Button color="white" onClick={() => navigate("/contacts")}>
              Contattaci
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}