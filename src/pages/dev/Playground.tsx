import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import {
  Button,
  Container,
  IconButton,
  Section,
  SectionHeader,
  PageHero,
} from "@/components/ui";
import testHero from "@/assets/images/test.webp";

export function Playground() {
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

        <div className="flex flex-wrap gap-4">
          <Button variant="primary" color="blue">
            Primary / Blue Primary
          </Button>
          <Button variant="secondary" color="blue">
            Secondary / Blue Secondary
          </Button>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button variant="primary" color="black">
            Black primary
          </Button>
          <Button variant="secondary" color="black">
            Black secondary
          </Button>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button variant="primary" color="green">
            Green primary
          </Button>
          <Button variant="secondary" color="green">
            Green secondary
          </Button>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button variant="primary" color="orange">
            Orange primary
          </Button>
          <Button variant="secondary" color="orange">
            Orange secondary
          </Button>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button variant="primary" color="red">
            Red primary
          </Button>
          <Button variant="secondary" color="red">
            Red secondary
          </Button>
        </div>
        <div className="flex flex-wrap gap-4 bg-gray-800 p-2">
          <Button variant="primary" color="white">
            White primary
          </Button>
          <Button variant="secondary" color="white">
            White secondary
          </Button>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>

        <div>
          <Button disabled>Disabled</Button>
        </div>
      </section>

      {/* BUTTONS CONTROLLO INTERFACCIA */}
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
    </main>
  );
}