import { useMemo, useState } from "react";

import { ArchiveFilters, Timeline } from "@/components/features";

import {
  Button,
  Container,
  EmptyState,
  PageHero,
  Section,
  SectionHeader,
  StatCounter,
} from "@/components/ui";

import testHero from "@/assets/images/decorative/testHero.webp";
import testProgetto2 from "@/assets/images/decorative/testProgetto2.webp";

/* //! DATI TEMPORANEI */

const stats = [
  {
    id: "lorem",
    value: 120,
    suffix: "+",
    label: "Lorem ipsum",
    description: "Dolor sit amet",
  },
  {
    id: "ipsum",
    value: 65,
    suffix: "+",
    label: "Ipsum dolor",
    description: "Consectetur adipiscing",
  },
  {
    id: "dolor",
    value: 30,
    suffix: "+",
    label: "Dolor sit",
    description: "Sed do eiusmod",
  },
  {
    id: "amet",
    value: 18,
    suffix: "+",
    label: "Amet lorem",
    description: "Tempor incididunt",
  },
  {
    id: "elit",
    value: 12,
    suffix: "+",
    label: "Lorem elit",
    description: "Ut labore",
  },
];

const works = [
  {
    id: "work-1",
    title: "Lorem ipsum dolor sit amet",
    year: 2026,
    area: "fruizione-accessibile",
    client: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: {
      src: testProgetto2,
      alt: "",
    },
  },
  {
    id: "work-2",
    title: "Consectetur adipiscing elit",
    year: 2025,
    area: "imaging-multispettrale",
    client: "Dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    image: {
      src: testHero,
      alt: "",
    },
  },
  {
    id: "work-3",
    title: "Sed do eiusmod tempor",
    year: 2024,
    area: "edutainment-gamification",
    client: "Consectetur lorem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate.",
    image: {
      src: testProgetto2,
      alt: "",
    },
  },
  {
    id: "work-4",
    title: "Incididunt ut labore",
    year: 2023,
    area: "consulenza-statistica",
    client: "Ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident.",
    image: {
      src: testHero,
      alt: "",
    },
  },
  {
    id: "work-5",
    title: "Ut enim ad minim veniam",
    year: 2022,
    area: "fruizione-accessibile",
    client: "Lorem amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis autem vel eum iure reprehenderit.",
    image: {
      src: testProgetto2,
      alt: "",
    },
  },
  {
    id: "work-6",
    title: "Quis nostrud exercitation",
    year: 2021,
    area: "imaging-multispettrale",
    client: "Dolor ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas.",
    image: {
      src: testHero,
      alt: "",
    },
  },
  {
    id: "work-7",
    title: "Ullamco laboris nisi",
    year: 2020,
    area: "edutainment-gamification",
    client: "Amet lorem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est qui dolorem ipsum.",
    image: {
      src: testProgetto2,
      alt: "",
    },
  },
  {
    id: "work-8",
    title: "Duis aute irure dolor",
    year: 2019,
    area: "consulenza-statistica",
    client: "Ipsum amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At vero eos et accusamus et iusto odio dignissimos.",
    image: {
      src: testHero,
      alt: "",
    },
  },
];

const areaOptions = [
  {
    value: "fruizione-accessibile",
    label: "Lorem ipsum",
  },
  {
    value: "imaging-multispettrale",
    label: "Dolor sit amet",
  },
  {
    value: "edutainment-gamification",
    label: "Consectetur",
  },
  {
    value: "consulenza-statistica",
    label: "Adipiscing elit",
  },
];

const yearOptions = Array.from(new Set(works.map((item) => item.year)))
  .sort((a, b) => b - a)
  .map((year) => ({
    value: String(year),
    label: String(year),
  }));

export function Works() {
  const [search, setSearch] = useState("");
  const [area, setArea] = useState("");
  const [year, setYear] = useState("");

  const hasActiveFilters = search.trim() !== "" || area !== "" || year !== "";

  const filteredWorks = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return works.filter((work) => {
      const searchableText = [
        work.title,
        work.description,
        work.client,
        work.area,
        String(work.year),
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !normalizedSearch || searchableText.includes(normalizedSearch);

      const matchesArea = !area || work.area === area;

      const matchesYear = !year || String(work.year) === year;

      return matchesSearch && matchesArea && matchesYear;
    });
  }, [area, search, year]);

  function clearFilters() {
    setSearch("");
    setArea("");
    setYear("");
  }

  return (
    <>
      {/* //! HERO */}
      <PageHero
        title="Il nostro percorso"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        backgroundImage={testHero}
        overlay="red"
      />

      {/* //! INTRODUZIONE + COUNTER */}
      <Section variant="default" reveal="up">
        <Container>
          <SectionHeader
            eyebrow="I nostri lavori"
            title="Più di 30 anni di innovazione"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />

          <p
            className="
              mt-6
              max-w-3xl
              text-lg
              leading-relaxed
              text-site-muted
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            vitae lorem sed lorem ullamcorper consequat. Integer posuere, arcu
            non luctus malesuada, justo erat feugiat mauris, vitae vulputate
            lorem ipsum at erat.
          </p>

          {/* //! CONTATORI */}
          <div
            className="
              mt-12
              rounded-2xl
              bg-site-surface-alt
              p-6

              md:p-8
            "
          >
            <div
              className="
                grid
                gap-8

                sm:grid-cols-2
                lg:grid-cols-5
              "
            >
              {stats.map((stat) => (
                <StatCounter
                  key={stat.id}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  description={stat.description}
                />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* //! TIMELINE */}
      <Section variant="alternative" reveal="left">
        <Container size="lg">
          <div className="px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Timeline"
              title="Lorem ipsum dolor sit amet"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scorri la linea del tempo per esplorare i contenuti."
            />
          </div>

          <Timeline items={works} autoScrollSpeed={20} className="mt-10" />
        </Container>
      </Section>

      {/* //! ARCHIVIO */}
      <Section variant="default" reveal="up">
        <Container>
          <SectionHeader
            eyebrow="Archivio"
            title="Cerca nel nostro archivio"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utilizza i filtri per esplorare i contenuti disponibili."
          />

          <ArchiveFilters
            className="mt-8"
            search={search}
            onSearchChange={setSearch}
            area={area}
            onAreaChange={setArea}
            areaOptions={areaOptions}
            year={year}
            onYearChange={setYear}
            yearOptions={yearOptions}
          />

          {hasActiveFilters && (
            <div className="mt-4 flex justify-end">
              <Button
                type="button"
                variant="secondary"
                color="red"
                size="sm"
                onClick={clearFilters}
              >
                Elimina tutti i filtri
              </Button>
            </div>
          )}

          {/* //! RISULTATI */}
          {filteredWorks.length === 0 ? (
            <EmptyState
              className="my-10"
              title="Nessun lavoro trovato"
              description="Lorem ipsum dolor sit amet. Prova a modificare i filtri o i termini di ricerca."
              action={
                hasActiveFilters ? (
                  <Button
                    type="button"
                    variant="secondary"
                    color="red"
                    size="sm"
                    onClick={clearFilters}
                  >
                    Elimina filtri
                  </Button>
                ) : undefined
              }
            />
          ) : (
            <div
              className="
                mt-10
                grid
                gap-6

                md:grid-cols-2
                xl:grid-cols-3
              "
            >
              {filteredWorks.map((work) => (
                <article
                  key={work.id}
                  className="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-site-border
                    bg-site-surface
                  "
                >
                  <div
                    className="
                      aspect-4/3
                      overflow-hidden
                    "
                  >
                    <img
                      src={work.image.src}
                      alt=""
                      loading="lazy"
                      className="
                        h-full
                        w-full
                        object-cover
                      "
                    />
                  </div>

                  <div className="p-6">
                    <div
                      className="
                        flex
                        items-center
                        justify-between
                        gap-4
                        text-sm
                      "
                    >
                      <span
                        className="
                          font-semibold
                          text-site-blue
                        "
                      >
                        {work.year}
                      </span>

                      <span className="text-site-soft">Lorem ipsum</span>
                    </div>

                    <h3
                      className="
                        mt-3
                        text-xl
                        font-semibold
                        text-site-text
                      "
                    >
                      {work.title}
                    </h3>

                    <p
                      className="
                        mt-3
                        line-clamp-3
                        leading-relaxed
                        text-site-muted
                      "
                    >
                      {work.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}