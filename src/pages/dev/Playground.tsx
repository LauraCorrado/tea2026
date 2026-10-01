import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import {
  Button,
  Container,
  IconButton,
  Section,
  SectionHeader,
  PageHero,
  Card,
  Modal,
  Carousel,
  Badge,
  Logo,
  SocialLinks,
  LangSelector,
  LoadingState,
  SearchInput,
  Select,
  EmptyState,
} from "@/components/ui";
import {
  ProductCard,
  CaseStudyCard,
  CompetenceCard,
} from "@/components/features";
import testHero from "@/assets/images/testHero.webp";
import testProgetto1 from "@/assets/images/testProgetto1.webp";
import testProgetto2 from "@/assets/images/testProgetto2.webp";
import testProgetto3 from "@/assets/images/testProgetto3.webp";
import { useState } from "react";
import type { WorkArea } from "@/types/workArea";
import { workAreaConfig } from "@/types/workArea";
import { teaSocialLinks } from "@/data/socialLinks";
import { languages } from "@/data/languages";
import { PatentAccordion } from "@/components/features/PatentAccordion/PatentAccordion";
import { CompetenceGrid } from "@/components/features/CompetenceGrid/CompetenceGrid";

export function Playground() {
  //! State per la modale
  const [modalOpen, setModalOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);
  //! state per lingua
  const [language, setLanguage] = useState("it");
  //! state per search input e select
  const [search, setSearch] = useState("");
  //! state per select
  const [area, setArea] = useState<WorkArea | "">("");

  //! items carosello
  const carouselItems = [
    {
      title: "Prima slide",
      text: "Contenuto della prima slide",
    },
    {
      title: "Seconda slide",
      text: "Contenuto della seconda slide",
    },
    {
      title: "Terza slide",
      text: "Contenuto della terza slide",
    },
  ];
  const carouselImages = [
    {
      src: testHero,
      alt: "Esempio immagine uno",
    },
    {
      src: testProgetto2,
      alt: "Esempio immagine due",
    },
    {
      src: testProgetto3,
      alt: "Esempio immagine tre",
    },
  ];
  const projectItems = [
    {
      title: "Esempio Progetto 1",
      period: "2024 — 2025",
      description:
        "Breve descrizione del primo progetto presentato nel carosello.",
      image: testProgetto1,
    },
    {
      title: "Esempio Progetto 2",
      period: "2020 — 2021",
      description:
        "Breve descrizione del secondo progetto presentato nel carosello.",
      image: testProgetto2,
    },
    {
      title: "Esempio Progetto 3",
      period: "2020",
      description:
        "Breve descrizione del terzo progetto presentato nel carosello.",
      image: testProgetto3,
    },
  ];
  const testimonialItems = [
    {
      quote:
        "Un approccio capace di unire tecnologia, progettazione e attenzione all'esperienza.",
      author: "Mario Rossi",
      role: "Direttore presso La Repubblica",
    },
    {
      quote:
        "La collaborazione ha permesso di trasformare un'idea complessa in una soluzione concreta.",
      author: "Paolo Bianchi",
      role: "Arcidiocesi di Milano",
    },
    {
      quote:
        "Un progetto costruito attraverso competenze diverse e un confronto continuo.",
      author: "Laura Corrado",
      role: "Sviluppatore presso Google",
    },
  ];
  const certificazioniPremi = [
    {
      eyebrow: "Parità di Genere",
      title: "Certificazione Parità di Genere",
      text: "TEA ha ottenuto la Certificazione per la Parità di Genere a conferma del nostro impegno per un ambiente di lavoro equo, inclusivo e privo di discriminazioni.",
      actionLabel: "Leggi la Politica",
    },
    {
      eyebrow: "Certificazione ISO 9001",
      title: "Sistema di Gestione per la Qualità",
      text: "In un'ottica di miglioramento continuo e trasparenza, la nostra azienda ha adottato un Sistema di Gestione per la Qualità certificato secondo la norma UNI EN ISO 9001:2015. Questo impegno ci permette di ottimizzare ogni processo interno, garantendo ai nostri clienti standard qualitativi elevati, affidabilità e una costante attenzione alle loro esigenze.",
      actionLabel: "Scarica il certificato",
    },
    {
      eyebrow: "Donne innovatrici",
      title: 'Concorso Donne Innovatrici "2010"',
      text: "Elena Console, CEO di TEA srl, spicca tra le dieci vincitrici del concorso “Donne Innovatrici”, proposte ed idee innovative delle imprenditrici calabresi, promosso dall’Unioncamere Calabria e dalla rete europea EEN (Enterprise Europe Network).",
    },
  ];

  //! finti lavori per prova badge
  const playgroundWorks: {
    title: string;
    description: string;
    areas: WorkArea[];
  }[] = [
    {
      title: "Progetto Accessibilità Museale",
      description:
        "Ricerca di mercato e creazione esperienza multisensoriale e multimaterica dedicata alla fruizione accessibile del patrimonio culturale.",
      //uso qui le aree del workArea che ho creato
      areas: ["fruizione-accessibile", "analisi-statistica"],
    },
    {
      title: "Percorso gastronomico di Napoli",
      description:
        "Piattaforma per la consultazione e la visualizzazione dei migliori ristoranti del territorio di Napoli.",
      areas: ["analisi-statistica"],
    },
    {
      title: "Restauro virtuale documenti del Museo Nome Falso",
      description:
        "Attività di acquisizione e studio attraverso tecniche di imaging e lavorazione in digitale per il restauro dei documenti acquisiti.",
      areas: ["imaging-multispettrale"],
    },
    {
      title: "Esperienza educativa interattiva",
      description:
        "Percorso digitale progettato attraverso dinamiche di gioco e contenuti narrativi.",
      areas: ["edutainment-gamification"],
    },
  ];
  //! prova aree
  const areaOptions = Object.entries(workAreaConfig).map(([value, config]) => ({
    value,
    label: config.label,
  }));

  return (
    <main className="min-h-screen bg-white">
      <h1 className="mb-8 text-3xl font-bold px-10 pt-10 text-center text-tea-red">
        Test <span className="text-tea-orange">componenti</span>{" "}
        <span className="text-tea-green">TEA</span>
        <span className="text-tea-blue">!</span>
      </h1>

      {/* PAGE HERO */}
      <h2 className="text-2xl font-semibold p-10">Esempi Page Hero</h2>
      <PageHero
        title="Overlay blue"
        subtitle="Lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        backgroundImage={testHero}
        overlay="blue"
        action={
          <>
            <Button variant="primary" color="white">
              Scopri di più
            </Button>
            <Button variant="secondary" color="white">
              Contattaci
            </Button>
          </>
        }
      />
      <PageHero
        title="Overlay dark"
        subtitle="Lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        backgroundImage={testHero}
        overlay="dark"
        action={
          <>
            <Button variant="primary" color="orange">
              Scopri di più
            </Button>
            <Button variant="secondary" color="orange">
              Contattaci
            </Button>
          </>
        }
      />
      <PageHero
        title="Overlay green"
        subtitle="Lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        backgroundImage={testHero}
        overlay="green"
        action={
          <>
            <Button variant="primary" color="black">
              Scopri di più
            </Button>
            <Button variant="secondary" color="white">
              Contattaci
            </Button>
          </>
        }
      />
      <PageHero
        title="Overlay orange"
        subtitle="Lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        backgroundImage={testHero}
        overlay="orange"
      />
      <PageHero
        title="Overlay red"
        subtitle="Lorem ipsum dolor sit amet lorem ipsum dolor sit amet"
        backgroundImage={testHero}
        overlay="red"
      />

      {/* SEZIONI */}
      <h2 className="text-2xl font-semibold p-10">Sezioni</h2>
      <div className="flex">
        <Section spacing="sm">
          <h2>Default section with SM space</h2>
        </Section>
        <Section spacing="md">
          <h2>Default section with MD space</h2>
        </Section>
        <Section spacing="lg">
          <h2>Default section with LG space</h2>
        </Section>
      </div>
      <div className="flex">
        <Section variant="alternative">
          <h2>Alternative section with DEFAULT space (MD)</h2>
        </Section>

        <Section variant="blue">
          <h2>Alternative section with DEFAULT space (MD)</h2>
        </Section>
      </div>
      <div className="flex">
        <Section variant="green">
          <h2>Green section</h2>
        </Section>

        <Section variant="orange">
          <h2>Orange section</h2>
        </Section>

        <Section variant="red">
          <h2>Red section</h2>
        </Section>
      </div>

      {/* SEZIONI CON CONTAINER */}
      <h2 className="text-2xl font-semibold p-10">Container</h2>
      <Section variant="alternative">
        <Container size="sm">
          <div className="bg-white p-4">Container SM</div>
        </Container>
      </Section>

      <Section variant="blue">
        <Container size="md">
          <div className="bg-white/10 p-4">Container MD</div>
        </Container>
      </Section>

      <Section variant="green">
        <Container size="lg">
          <div className="bg-white/10 p-4">Container LG</div>
        </Container>
      </Section>

      <Section variant="red">
        <Container size="xl">
          <div className="bg-white/20 p-4">Container XL</div>
        </Container>
      </Section>
      <Section variant="orange">
        <Container size="full">
          <div className="bg-white/10 p-4">Container FULL</div>
        </Container>
      </Section>

      {/* SECTION HEADER */}
      <h2 className="p-10 text-2xl font-semibold">Section Header</h2>

      <Section variant="alternative">
        <Container>
          <SectionHeader
            eyebrow="esempio eyebrow"
            title="Titolo (allineamento left - default)"
            description="Lorem ipsum dolor sit amet. Urna tempor pulvinar vivamus fringilla lacus nec metus. Iaculis massa nisl malesuada lacinia integer nunc posuere."
          />
        </Container>
      </Section>

      <Section variant="green">
        <Container>
          <SectionHeader
            eyebrow="esempio eyebrow"
            title="Titolo (allineamento center)"
            description=" Nisl malesuada lacinia integer nunc posuere ut hendrerit."
            align="center"
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            title="Titolo (allineamento right)"
            description="Pretium tellus duis convallis tempus leo eu aenean SENZA EYEBROW. "
            align="right"
          />
        </Container>
      </Section>

      <Section variant="alternative">
        <Container>
          <SectionHeader
            eyebrow={
              <>
                <span className="font-bold">Esempio eye</span>
                <span className="text-tea-red hover:underline">brow</span>{" "}
                CUSTOM
              </>
            }
            title={
              <>
                Titolo <span className="text-tea-green">custom</span>
              </>
            }
            description={
              <>
                Questo è un esempio di{" "}
                <span className="italic tracking-widest text-tea-green">
                  descrizione
                </span>{" "}
                customizzata.
              </>
            }
            align="center"
          />
        </Container>
      </Section>

      {/* BUTTONS */}
      <section className="space-y-6 p-10">
        <h2 className="text-2xl font-semibold">Buttons</h2>

        <Container size="full">
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" color="blue">
              Primary / Blue Primary
            </Button>
            <Button variant="secondary" color="blue">
              Secondary / Blue Secondary
            </Button>
          </div>
        </Container>

        <Container size="full">
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" color="black">
              Black primary
            </Button>
            <Button variant="secondary" color="black">
              Black secondary
            </Button>
          </div>
        </Container>

        <Container size="full">
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" color="green">
              Green primary
            </Button>
            <Button variant="secondary" color="green">
              Green secondary
            </Button>
          </div>
        </Container>

        <Container size="full">
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" color="orange">
              Orange primary
            </Button>
            <Button variant="secondary" color="orange">
              Orange secondary
            </Button>
          </div>
        </Container>

        <Container size="full">
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" color="red">
              Red primary
            </Button>
            <Button variant="secondary" color="red">
              Red secondary
            </Button>
          </div>
        </Container>

        <Container size="full">
          <div className="flex flex-wrap gap-4 bg-gray-800 p-2">
            <Button variant="primary" color="white">
              White primary
            </Button>
            <Button variant="secondary" color="white">
              White secondary
            </Button>
          </div>
        </Container>

        <Container size="full">
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </Container>

        <Container size="full">
          <Button disabled>Disabled</Button>
        </Container>
      </section>

      {/* BUTTONS CONTROLLO INTERFACCIA */}
      <Section variant="alternative">
        <Container size="full">
          <section className="space-y-6 p-10">
            <h2 className="text-2xl font-semibold">
              Icone - rotate, draw, glow, none
            </h2>
            <div className="flex flex-wrap items-center gap-4">
              <IconButton
                icon={<X size={18} />}
                label="Chiudi"
                animation="rotate"
              />
              <IconButton
                icon={<Menu size={18} />}
                label="Apri menu"
                animation="draw"
              />
              <IconButton
                icon={<ChevronLeft size={18} />}
                label="Indietro"
                animation="glow"
              />
              <IconButton
                icon={<ChevronRight size={18} />}
                label="Avanti"
                disabled
              />
            </div>
          </section>
        </Container>
      </Section>

      {/* CARD */}
      <Section variant="default">
        <Container size="full">
          <SectionHeader title="Cards" />
          <Card className="my-3">
            <h3 className="text-xl font-semibold">Card base</h3>
            <p className="mt-2 text-sm opacity-70">
              Contenuto libero all'interno della card
            </p>
            <Button variant="primary" color="red" size="sm" className="my-3">
              Esempio
            </Button>
          </Card>

          <Card className="my-3" variant="outlined">
            <h3 className="text-xl font-semibold">Card outlined</h3>
            <p className="mt-2 text-sm opacity-70">Variante con bordo</p>
            <Button variant="primary" color="black" size="sm" className="my-3">
              Esempio
            </Button>
          </Card>

          <Card className="my-3" variant="elevated" padding="lg">
            <h3 className="text-xl font-semibold">Card elevated</h3>
            <p className="mt-2 text-sm opacity-70">
              Variante con ombra e padding maggiore
            </p>
            <Button
              variant="secondary"
              color="green"
              size="sm"
              className="my-3"
            >
              Esempio
            </Button>
          </Card>
        </Container>
      </Section>

      {/* MODALE */}
      <Section variant="default">
        <Container size="full">
          <SectionHeader title="Modale" description="Esempio di modale" />
          <div className="my-3 flex flex-wrap gap-3">
            <Button color="orange" onClick={() => setModalOpen(true)}>
              Apri modal semplice
            </Button>

            <Button color="blue" onClick={() => setProjectOpen(true)}>
              Apri modal progetto
            </Button>
          </div>

          <Modal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            title="Esempio modale - HEADER"
          >
            <p>Contenuto libero per una modale informativa semplice.</p>
          </Modal>

          <Modal
            open={projectOpen}
            onClose={() => setProjectOpen(false)}
            eyebrow="Modale per progetto"
            title="Titolo progetto"
            period="Apr 2010 — Gen 2011"
            description="Descrizione breve progetto"
            image={{
              src: testHero,
              alt: "Anteprima del progetto",
            }}
            gallery={[
              {
                src: testProgetto2,
                alt: "Dettaglio del progetto",
              },
              {
                src: testProgetto3,
                alt: "Attività del progetto",
              },
              {
                src: testProgetto1,
                alt: "Attività del progetto",
              },
              {
                src: testProgetto2,
                alt: "Attività del progetto",
              },
              {
                src: testHero,
                alt: "Attività del progetto",
              },
            ]}
            actions={
              <>
                <Button color="blue">Visita il progetto</Button>

                <Button variant="secondary" color="blue">
                  Approfondisci
                </Button>
              </>
            }
          >
            <p>Qui posso inserire eventuali altre note sul progetto...</p>
          </Modal>
        </Container>
      </Section>

      {/* CAROSELLO */}
      <Section variant="alternative">
        <Container size="sm">
          <SectionHeader
            align="center"
            title="Caroselli"
            description="Esempi del componente Carousel con tipologie di contenuto differenti"
          />

          <div className="mt-10 space-y-16">
            {/* Semplice */}
            <div>
              <h3 className="mb-4 text-xl font-semibold">Carosello semplice</h3>

              <Carousel
                items={carouselItems}
                renderItem={(item) => (
                  <Card variant="outlined" padding="lg">
                    <h3 className="text-2xl font-semibold">{item.title}</h3>

                    <p className="mt-2 opacity-70">{item.text}</p>
                  </Card>
                )}
              />
            </div>

            {/* Immagini */}
            <div>
              <h3 className="mb-4 text-xl font-semibold">
                Carosello di immagini
              </h3>

              <Carousel
                items={carouselImages}
                renderItem={(item) => (
                  <div className="aspect-video overflow-hidden rounded-xl">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
              />
            </div>

            {/* Progetti */}
            <div>
              <h3 className="mb-4 text-xl font-semibold">
                Esempio per progetti con Card, img e Btn
              </h3>

              <Carousel
                items={projectItems}
                renderItem={(item) => (
                  <Card
                    variant="outlined"
                    padding="sm"
                    className="overflow-hidden"
                  >
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="aspect-4/3 overflow-hidden rounded-lg">
                        <img
                          src={item.image}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="flex flex-col justify-center p-4">
                        <p className="text-sm font-medium text-tea-blue">
                          {item.period}
                        </p>

                        <h3 className="mt-2 text-2xl font-semibold">
                          {item.title}
                        </h3>

                        <p className="mt-3 leading-relaxed opacity-70">
                          {item.description}
                        </p>

                        <div className="mt-6">
                          <Button variant="secondary" color="red" size="sm">
                            Approfondisci
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                )}
              />
            </div>

            {/* Testimonianze */}
            <div>
              <h3 className="mb-4 text-xl font-semibold">
                Carosello per testimonianze con Card
              </h3>

              <Carousel
                items={testimonialItems}
                renderItem={(item) => (
                  <Card
                    variant="elevated"
                    padding="lg"
                    className="mx-auto max-w-3xl my-3"
                  >
                    <blockquote className="text-xl leading-relaxed">
                      “{item.quote}”
                    </blockquote>

                    <div className="mt-6">
                      <p className="font-semibold">{item.author}</p>

                      <p className="text-sm opacity-60">{item.role}</p>
                    </div>
                  </Card>
                )}
              />
            </div>

            {/* Contenuti editoriali */}
            <div>
              <h3 className="mb-4 text-xl font-semibold">
                Carosello per contenuti editoriali con Card e Btn
              </h3>

              <Carousel
                items={certificazioniPremi}
                renderItem={(item) => (
                  <Card variant="outlined" padding="lg">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-tea-orange">
                      {item.eyebrow}
                    </p>

                    <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-2xl leading-relaxed opacity-70">
                      {item.text}
                    </p>

                    {item.actionLabel && (
                      <div className="mt-6">
                        <Button variant="secondary" color="orange" size="sm">
                          {item.actionLabel}
                        </Button>
                      </div>
                    )}
                  </Card>
                )}
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* BADGE */}
      <Section variant="alternative">
        <Container size="full">
          <SectionHeader
            title="Card con aree di lavoro"
            description="Esempi di card associate a una o più aree."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {playgroundWorks.map((work) => (
              <Card
                key={work.title}
                variant="outlined"
                padding="lg"
                badges={work.areas.map((area) => {
                  const { label, color } = workAreaConfig[area];

                  return (
                    <Badge key={area} color={color}>
                      {label}
                    </Badge>
                  );
                })}
              >
                <h3 className="text-2xl font-semibold">{work.title}</h3>

                <p className="mt-3 leading-relaxed opacity-70">
                  {work.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* LOGO */}
      <Section variant="default">
        <Container size="lg">
          <SectionHeader
            title="Logo"
            description="Varianti e dimensioni del logo TEA"
          />

          <div className="mt-8 space-y-8">
            <div>
              <p className="mb-4 text-sm font-semibold">Default</p>

              <Logo variant="default" size="lg" />
            </div>

            <div className="bg-tea-black p-8">
              <p className="mb-4 text-sm font-semibold text-white">Negative</p>

              <Logo variant="negative" size="lg" />
            </div>

            <div>
              <p className="mb-4 text-sm font-semibold">Sizes</p>

              <div className="flex flex-wrap items-end gap-8">
                <Logo size="sm" />
                <Logo size="md" />
                <Logo size="lg" />
                <Logo size="xl" />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SOCIAL LINKS */}
      <Section variant="default">
        <Container size="full">
          <SectionHeader
            title="Social Links"
            description="Collegamenti ai canali social rappresentati tramite icone."
          />

          <div className="mt-8 space-y-8">
            <div>
              <p className="mb-4 font-semibold">Small</p>

              <SocialLinks links={teaSocialLinks} size="sm" />
            </div>

            <div>
              <p className="mb-4 font-semibold">Medium</p>

              <SocialLinks links={teaSocialLinks} size="md" />
            </div>

            <div>
              <p className="mb-4 font-semibold">Large</p>

              <SocialLinks links={teaSocialLinks} size="lg" />
            </div>
          </div>
        </Container>
      </Section>

      {/* LOCALIZZAZIONE */}
      <Section variant="alternative">
        <Container size="full">
          <SectionHeader title="Localizzazione" />
          <LangSelector
            className="my-3"
            languages={languages}
            value={language}
            onChange={setLanguage}
          />
        </Container>
      </Section>

      {/* LOADING STATE */}
      <Section>
        <Container size="full">
          <SectionHeader
            title="Loading States"
            description="Stato visivo utilizzato durante il caricamento di dati o contenuti"
          />

          <div className="mt-8 flex flex-wrap items-center gap-12">
            <LoadingState size="sm" />

            <LoadingState size="md" label="Caricamento contenuti..." />

            <LoadingState size="lg" label="Caricamento risultati..." />
          </div>
        </Container>
      </Section>

      {/* SEARCH INPUT, SELECT e NOT FOUND */}
      <Section variant="alternative">
        <Container size="full">
          <SectionHeader
            title="Controlli di ricerca"
            description="Campo di ricerca testuale e campo select"
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <SearchInput
              value={search}
              onChange={setSearch}
              placeholder="Ricerca un nostro lavoro"
              helperText={
                search
                  ? `Ricerca corrente: ${search}`
                  : "Nessuna ricerca testuale"
              }
            />

            <Select
              options={areaOptions}
              value={area}
              onChange={(value) => setArea(value as WorkArea | "")}
              placeholder="Seleziona ambito..."
            />
          </div>

          <EmptyState
            className="my-3"
            title="Nessun lavoro trovato"
            description="Prova a modificare i filtri o i termini di ricerca."
            action={
              <Button variant="secondary" color="red" size="sm">
                Elimina filtri
              </Button>
            }
          />
        </Container>
      </Section>

      {/* PRODUCT CARD */}
      <Section>
        <Container size="lg">
          <SectionHeader
            eyebrow="Aives e Ammira"
            title="Product cards"
            align="center"
          />
          <div className="space-y-20 my-3">
            <ProductCard
              side="right"
              accent="red"
              image={{
                src: testProgetto3,
                alt: "Esperienza multisensoriale AIVES",
              }}
              title="AIVES"
              description={
                <>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolor, beatae. Sapiente facilis et nesciunt cum, repudiandae
                  odio odit, vero tempore blanditiis, qui dolorum quis sit quod
                  porro accusamus atque. Minus.
                </>
              }
              action={
                <Button color="red" size="sm">
                  Scopri AIVES
                </Button>
              }
            />

            <ProductCard
              side="left"
              accent="green"
              image={{
                src: testHero,
                alt: "Analisi multispettrale del progetto @MMIRA",
              }}
              title="@MMIRA"
              description={
                <>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolores accusantium, quae fuga perspiciatis eligendi adipisci
                  magnam facere ipsam aliquid maxime. Assumenda nobis quam saepe
                  ut rem suscipit consectetur tenetur id?
                </>
              }
              action={
                <Button color="green" size="sm">
                  Scopri @MMIRA
                </Button>
              }
            />
          </div>
        </Container>
      </Section>

      {/* CASE STUDY */}
      <Section variant="alternative">
        <Container size="md">
          <SectionHeader title="Case Study cards" />
          <CaseStudyCard
            className="my-3"
            image={{
              src: testHero,
              alt: "MuDiMa",
            }}
            badges={[
              <Badge key="accessibilita" color="orange">
                Gamification
              </Badge>,
            ]}
            title="MuDiMa"
            description="Esperienza ludica al Museo Diocesano Matronei Altamura, pensato per bambini. Lorem ipsum dolor sit amet."
            action={
              <Button variant="secondary" color="orange" size="sm">
                Approfondisci
              </Button>
            }
          />
          <CaseStudyCard
            imagePosition="right"
            className="my-3"
            image={{
              src: testProgetto2,
              alt: "Studio di Fattibilità",
            }}
            badges={[
              <Badge key="management" color="blue">
                Project Management
              </Badge>,
              <Badge key="statistica" color="red">
                Data Analysis
              </Badge>,
            ]}
            title="Studio di Fattibilità"
            description="Miglioramento della conoscenza del territorio attraverso un'adeguata azione di monitoraggio e implementazione sicurezza fisica."
          />
        </Container>
      </Section>

      {/* BREVETTI */}
      <Section variant="default">
        <Container size="md">
          <SectionHeader title="Brevetti" />
          <div className="space-y-3">
            <PatentAccordion
              type="international-patent"
              name="Sistema multisensoriale per la fruizione culturale"
              number="WO 2026 / 000000"
              year={2026}
              description="Descrizione sintetica del brevetto e del problema affrontato."
              pdfUrl="/documents/brevetto.pdf"
            />

            <PatentAccordion
              type="community-trademark"
              name="AIVES"
              number="EU 000000000"
              year={2024}
              documentationUrl="https://example.com"
            />

            <PatentAccordion
              type="international-patent"
              name="Sistema multisensoriale per la fruizione culturale"
              number="WO 2026 / 000000"
              year={2026}
              description="Descrizione sintetica del brevetto e del problema affrontato."
              pdfUrl="/documents/brevetto.pdf"
            />
          </div>
        </Container>
      </Section>

      {/* COMPETENZE */}
      <Section variant="alternative">
        <Container size="full">
          <SectionHeader title="Competenze Card" align="center" />
          <CompetenceGrid>
            <CompetenceCard
              title="Data Analytics & Statistics"
              color="red"
              image={{
                src: testProgetto1,
                alt: "Visualizzazione di dati e analisi statistiche",
              }}
              description={
                <>
                  Analisi, interpretazione e modellazione dei dati per
                  trasformare informazioni complesse in conoscenza utile,
                  supportando ricerca, valutazione e processi decisionali.
                </>
              }
            />

            <CompetenceCard
              title="GIS & WebGIS"
              color="green"
              image={{
                src: testProgetto2,
                alt: "Mappatura digitale e sistemi GIS",
              }}
              description={
                <>
                  Progettazione di sistemi GIS e WebGIS per organizzare,
                  visualizzare e interrogare dati geografici, rendendo leggibili
                  relazioni territoriali e informazioni complesse.
                </>
              }
            />
            <CompetenceCard
              title="Project Management"
              image={{
                src: testProgetto3,
                alt: "Coordinamento e gestione di progetto",
              }}
              description={
                <>
                  Pianificazione, coordinamento e monitoraggio di progetti
                  complessi, mettendo in relazione competenze diverse,
                  obiettivi, tempi, risorse e partner.
                </>
              }
            />
            <CompetenceCard
              title="Software Development"
              color="orange"
              image={{
                src: testHero,
                alt: "Sviluppo di soluzioni software e applicazioni digitali",
              }}
              description={
                <>
                  Progettazione e sviluppo di applicazioni, piattaforme e
                  strumenti digitali su misura, con attenzione a usabilità,
                  accessibilità e integrazione con tecnologie e contenuti.
                </>
              }
            />
            <CompetenceCard
              title="Visual Storytelling"
              color="orange"
              image={{
                src: testProgetto2,
                alt: "L'arte di raccontare una storia attraverso l'uso di immagini",
              }}
              description={
                <>
                  Creazione di contenuti visivi e multimediali per raccontare
                  storie, concetti o informazioni in modo coinvolgente e
                  memorabile, utilizzando immagini, video, grafica e design.
                </>
              }
            />

            <CompetenceCard
              title="Digital Fabrication & Craftsmanship"
              color="blue"
              image={{
                src: testHero,
                alt: "Progettazione e realizzazione di oggetti fisici attraverso tecnologie digitali e processi artigianali",
              }}
              description={
                <>
                  Combinazione di tecnologie digitali e competenze artigianali
                  per progettare e realizzare oggetti fisici, utilizzando
                  strumenti come stampa 3D, taglio laser e lavorazione manuale
                  per creare prodotti unici e personalizzati.e e realizzare
                  oggetti fisici, utilizzando strumenti come stampa 3D, taglio
                  laser e lavorazione manuale per creare prodotti unici e
                  personalizzati.
                </>
              }
            />
          </CompetenceGrid>
        </Container>
      </Section>
    </main>
  );
}