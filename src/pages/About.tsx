import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

import { AboutHero, CaseStudyCard } from "@/components/features";

import { Button, Container, Modal, Section, SectionHeader } from "@/components/ui";

import { aboutHeroSlides } from "@/data/aboutHeroSlides";
import { DEFAULT_AREA, macroAreas } from "@/data/macroAreas";
import { workAreaConfig } from "@/data/workAreaConfig";

import type { WorkArea } from "@/types/workArea";

const areaButtonClasses = {
  red: `
    border-site-red
    hover:bg-site-red
    hover:text-site-on-red
    aria-pressed:bg-site-red
    aria-pressed:text-site-on-red
  `,

  orange: `
    border-site-orange
    hover:bg-site-orange
    hover:text-site-on-orange
    aria-pressed:bg-site-orange
    aria-pressed:text-site-on-orange
  `,

  blue: `
    border-site-blue
    hover:bg-site-blue
    hover:text-site-on-blue
    aria-pressed:bg-site-blue
    aria-pressed:text-site-on-blue
  `,

  green: `
    border-site-green
    hover:bg-site-green
    hover:text-site-on-green
    aria-pressed:bg-site-green
    aria-pressed:text-site-on-green
  `,
} as const;

function getAreaFromHash(hash: string): WorkArea {
  const id = hash.replace("#", "");
  const area = macroAreas.find((area) => area.id === id);

  return area?.id ?? DEFAULT_AREA;
}

export function About() {
  const location = useLocation();
  const navigate = useNavigate();

  const [activeAreaId, setActiveAreaId] = useState<WorkArea>(() =>
    getAreaFromHash(location.hash),
  );

    const [projectOpen, setProjectOpen] = useState(false);

  useEffect(() => {
    setActiveAreaId(getAreaFromHash(location.hash));
  }, [location.hash]);

  const activeArea =
    macroAreas.find((area) => area.id === activeAreaId) ??
    macroAreas.find((area) => area.id === DEFAULT_AREA);

  if (!activeArea) {
    return null;
  }

  const activeAreaConfig = workAreaConfig[activeArea.id];

  function selectArea(areaId: WorkArea) {
  setProjectOpen(false);
  setActiveAreaId(areaId);

  navigate(
    {
      pathname: location.pathname,
      hash: areaId,
    },
    {
      replace: true,
    },
  );
}

  return (
    <>
      {/* //! HERO */}
      <AboutHero slides={aboutHeroSlides} />

      {/* //! MACRO-AREE */}
      <Section variant="default" reveal="up">
        <Container>
          <SectionHeader
            eyebrow="Cosa facciamo"
            title="Esplora le nostre attività"
            description="
              Quattro aree di lavoro, un unico approccio: unire ricerca, tecnologia e cultura
            "
            align="center"
          />

          <div
            role="group"
            aria-label="Seleziona un'area di attività"
            className="
              grid
              gap-3

              sm:grid-cols-2
              xl:grid-cols-4
            "
          >
            {macroAreas.map((area) => {
              const active = area.id === activeAreaId;

              const config = workAreaConfig[area.id];

              const buttonColorClass =
                areaButtonClasses[
                  config.color as keyof typeof areaButtonClasses
                ];

              return (
                <button
                  key={area.id}
                  id={area.id}
                  type="button"
                  aria-pressed={active}
                  aria-controls="macro-area-content"
                  onClick={() => selectArea(area.id)}
                  className={`
                    min-h-14
                    rounded-xl
                    border-2
                    px-5
                    py-3

                    text-center
                    font-semibold

                    transition-colors
                    duration-300

                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-site-blue
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-site-surface

                    ${buttonColorClass}
                  `}
                >
                  {config.label}
                </button>
              );
            })}
          </div>

          {/* //! AREA ATTIVA */}
          <div id="macro-area-content" aria-live="polite">
            {activeArea.details.map((detail, i) => {
              const imageLeft = detail.imagePosition === "left";
              const cta = detail.cta;
              const isLast = i === activeArea.details.length - 1;

              return (
                <div key={detail.id}>
                  <div
                    className="
          grid
          items-center
          gap-10
          py-10

          lg:grid-cols-2
          lg:gap-14
        "
                  >
                    {/* TESTO */}
                    <div
                      className={`
    space-y-6
    text-center
    lg:text-left
    ${imageLeft ? "lg:order-2" : "lg:order-1"}
  `}
                    >
                      <div className="space-y-4">
                        {i === 0 && (
                          <h2 className="text-3xl font-semibold md:text-4xl">
                            {activeAreaConfig.label}
                          </h2>
                        )}

                        {detail.title && (
                          <h3 className="text-2xl font-medium md:text-3xl">
                            {detail.title}
                          </h3>
                        )}

                        <p className="text-lg leading-relaxed text-site-muted">
                          {detail.description}
                        </p>
                      </div>

                      {cta && (
                        <div className="flex justify-center lg:justify-start">
                          {cta.external ? (
                            <Button
                              as="a"
                              href={cta.to}
                              target="_blank"
                              rel="noopener noreferrer"
                              color={activeAreaConfig.color}
                            >
                              {cta.label}
                            </Button>
                          ) : (
                            <Button
                              color={activeAreaConfig.color}
                              onClick={() => navigate(cta.to)}
                            >
                              {cta.label}
                            </Button>
                          )}
                        </div>
                      )}
                    </div>

                    {/* IMMAGINE */}
                    <div
                      className={`
            overflow-hidden
            rounded-2xl
            ${imageLeft ? "lg:order-1" : "lg:order-2"}
          `}
                    >
                      <img
                        src={detail.image.src}
                        alt={detail.image.alt}
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

                  {!isLast && (
                    <div
                      aria-hidden="true"
                      className="
            mx-auto
            my-4
            h-px
            w-20
            bg-site-border-strong
          "
                    />
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* //! CASI STUDIO */}
      <Section variant="alternative" reveal="left">
        <Container>
          <SectionHeader eyebrow={activeAreaConfig.label} title="Caso studio" />

          <CaseStudyCard
  image={activeArea.caseStudy.image}
  title={activeArea.caseStudy.title}
  description={activeArea.caseStudy.description}
  action={
    <Button
      variant="secondary"
      color={activeAreaConfig.color}
      size="sm"
      onClick={() => setProjectOpen(true)}
    >
      Approfondisci
    </Button>
  }
/>
<Modal
  open={projectOpen}
  onClose={() => setProjectOpen(false)}
  eyebrow={
    activeArea.caseStudy.modal.eyebrow ??
    activeAreaConfig.label
  }
  title={activeArea.caseStudy.title}
  period={activeArea.caseStudy.modal.period}
  description={activeArea.caseStudy.modal.description}
  image={activeArea.caseStudy.modal.image}
  gallery={activeArea.caseStudy.modal.gallery}
  size="lg"
  actions={
    activeArea.caseStudy.modal.actions?.length ? (
      <>
        {activeArea.caseStudy.modal.actions.map((action) =>
          action.external ? (
            <Button
              key={action.to}
              as="a"
              href={action.to}
              target="_blank"
              rel="noopener noreferrer"
              color={activeAreaConfig.color}
            >
              {action.label}
            </Button>
          ) : (
            <Button
              key={action.to}
              color={activeAreaConfig.color}
              onClick={() => {
                setProjectOpen(false);
                navigate(action.to);
              }}
            >
              {action.label}
            </Button>
          ),
        )}
      </>
    ) : undefined
  }
>
  {activeArea.caseStudy.modal.content && (
    <p>{activeArea.caseStudy.modal.content}</p>
  )}
</Modal>
        </Container>
      </Section>

      {/* //! CONTATTI */}
      <Section variant="green" reveal="left">
        <Container>
          <SectionHeader
            title="Hai un progetto da sviluppare?"
            description="
              Raccontaci la tua idea, il contesto e gli obiettivi. Possiamo aiutarti a individuare le competenze e le soluzioni più adatte per trasformarla in un progetto concreto
            "
          />
          <Button color="black" onClick={() => navigate("/contacts")}>
            Parliamone
          </Button>
        </Container>
      </Section>
    </>
  );
}
