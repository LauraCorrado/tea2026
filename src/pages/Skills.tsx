import { useNavigate } from "react-router";

import { CompetenceCard, CompetenceGrid } from "@/components/features";

import {
  Button,
  Container,
  PageHero,
  Section,
  SectionHeader,
} from "@/components/ui";

import { competences } from "@/data/skills";

import testHero from "@/assets/images/decorative/testHero.webp";

export function Skills() {
  const navigate = useNavigate();

  return (
    <>
      <PageHero
        title="Competenze integrate, soluzioni uniche"
        subtitle="Tecnologie, creatività e conoscenze che dialogano per trasformare idee complesse in progetti concreti"
        backgroundImage={testHero}
        overlay="orange"
      />

      <Section variant="default">
        <Container size="full">
          <SectionHeader
            eyebrow="Le nostre competenze"
            title="Un patrimonio multidisciplinare"
            align="center"
          />

          <div
            className="
              mx-auto
              mt-6
              max-w-3xl
              space-y-4

              text-center
              text-lg
              leading-relaxed
              text-site-muted
            "
          >
            <p>
              In trent’anni di attività abbiamo affrontato sfide complesse,
              diversificato i nostri ambiti di intervento e ampliato
              progressivamente le nostre competenze.
            </p>

            <p>
              Discipline, tecnologie e conoscenze sviluppate internamente
              dialogano tra loro per dare vita a soluzioni originali nei campi
              dell’accessibilità, della cultura e dell’innovazione.
            </p>
          </div>

          <CompetenceGrid>
            {competences.map((competence) => (
              <CompetenceCard
                key={competence.id}
                title={competence.title}
                description={competence.description}
                image={competence.image}
                color={competence.color}
              />
            ))}
          </CompetenceGrid>
        </Container>
      </Section>

      <Section variant="orange" reveal="left">
        <Container>
          <div
            className="
              grid
              items-center
              gap-8

              lg:grid-cols-[1fr_auto]
              lg:gap-16
            "
          >
            <SectionHeader
              eyebrow="Proprietà intellettuale"
              title="Dalla ricerca a soluzioni proprietarie"
              description="
                Le competenze maturate nel tempo hanno portato TEA a sviluppare
                tecnologie e soluzioni proprietarie, alcune delle quali tutelate
                da brevetti. Un patrimonio di conoscenze nato dall'attività di
                ricerca e trasformato in strumenti concreti.
              "
            />

            <div
              className="
                flex
                justify-center

                lg:justify-end
              "
            >
              <Button
                color="black"
                onClick={() => navigate("/research-development#brevetti")}
              >
                Scopri i nostri brevetti
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}