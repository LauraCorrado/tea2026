import { useState, type FormEvent } from "react";

import { Clock, Mail, MapPin, Phone } from "lucide-react";

import {
  Accordion,
  Button,
  Container,
  EmptyState,
  PageHero,
  Section,
  SectionHeader,
  SocialLinks,
} from "@/components/ui";

import { teaSocialLinks } from "@/data/socialLinks";

import testHero from "@/assets/images/decorative/testHero.webp";

type FormStatus = "idle" | "loading" | "success" | "error";

type CareerFormStatus = "idle" | "loading" | "success" | "error";

interface JobOpening {
  id: string;
  title: string;
  description: string;

  location: string;

  salaryRange?: string;
  ccnlLevel?: string;

  contract?: string;
  schedule?: string;
  workMode?: string;

  skills?: string[];
}

const contactNavigation = [
  {
    href: "#recapiti",
    label: "Recapiti",
  },
  {
    href: "#careers",
    label: "Lavora con noi",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
] as const;

/*
 * Per ora non inserisco posizioni fittizie
 */
// const jobOpenings: JobOpening[] = [];
const jobOpenings: JobOpening[] = [
  {
    id: "jr-frontend-developer",
    title: "Junior Front-end Developer",
    description:
      "La risorsa collaborerà alla progettazione e allo sviluppo di interfacce web responsive e accessibili, contribuendo alla realizzazione di siti, applicazioni e prodotti digitali.",
    location: "Catanzaro",
    salaryRange: "22.000 €",
    ccnlLevel: "CCNL Terziario – Livello 3",
    contract: "Tempo determinato con possibilità di rinnovo",
    schedule: "Part-time, 24 ore settimanali",
    workMode: "Modalità ibrida o concordabile in base alle esigenze",
    skills: [
      "React e TypeScript",
      "Tailwind CSS",
      "Git e GitHub",
      "Conoscenza dei principi di accessibilità web",
      "Redazione documentazione tecnica e reportistica",
    ],
  },
  {
    id: "business-analyst",
    title: "Business Analyst",
    description:
      "La risorsa supporterà il business plan e ne controllerà l'impatto in termini di gestione del cambiamento. Analizzerà esigenze di mercato e le tradurrà in soluzioni ICT",
    location: "Catanzaro",
    salaryRange: "30.000 € – 35.000 €",
    ccnlLevel: "CCNL Terziario – Livello 2",
    contract: "Tempo indeterminato",
    schedule: "Full-time, 40 ore settimanali",
    workMode: "In sede",
    skills: [
      "Oracle / MySQL / PostgreSQL",
      "Microsoft Power BI o altri software equivalenti di Business Intelligence e Data Visualization",
      "Redazione di docmentazione tecnica e reportistica",
      "Ottime capacità organizzative",
      "Buona conoscenza della lingua inglese (almeno B1)",
    ],
  },
];

const fieldClasses = `
  w-full
  rounded-lg
  border
  border-site-border
  bg-site-surface
  px-4
  py-3

  text-site-text

  transition-colors

  placeholder:text-site-soft

  hover:border-site-border-strong

  focus:border-site-blue
  focus:outline-none
  focus:ring-2
  focus:ring-site-blue/20
`;

const faqItems = [
  {
    id: "inizio-progetto",
    question: "Da dove si parte quando ci proponi un progetto?",
    answer:
      "Ci racconti l’esigenza, il contesto e l’obiettivo. Da lì valutiamo insieme quali competenze e soluzioni possono essere più adatte.",
  },
  {
    id: "prime-fasi",
    question: "Possiamo coinvolgervi anche nelle prime fasi di un’idea?",
    answer:
      "Sì. Non è necessario arrivare con un progetto già definito: possiamo intervenire anche nelle fasi iniziali di analisi, progettazione e sviluppo.",
  },
  {
    id: "multidisciplinari",
    question: "Seguite anche progetti multidisciplinari?",
    answer:
      "Certamente! Le attività possono integrare varie competenze - tecnologiche, progettuali, creative, statistiche e di ricerca.",
  },
  {
    id: "incontro",
    question: "È possibile richiedere un incontro conoscitivo online?",
    answer:
      "Puoi contattarci attraverso il modulo qui sopra o via e-mail per concordare un primo confronto. Ti risponderemo il prima possibile!",
  },
  {
    id: "collaborazioni",
    question: "Accettate collaborazioni con enti, università e aziende?",
    answer:
      "Sì. TEA può collaborare con soggetti pubblici e privati nell’ambito di progetti, attività di ricerca, sviluppo e sperimentazione.",
  },
] as const;

export function Contacts() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [careerStatus, setCareerStatus] = useState<CareerFormStatus>("idle");
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT; // todo AGGIUNGERE

    if (!endpoint) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const formData = new FormData(form);

      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Errore durante l'invio del form");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  async function handleCareerSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const endpoint = import.meta.env.VITE_CAREERS_FORM_ENDPOINT; // todo AGGIUNGERE

    if (!endpoint) {
      setCareerStatus("error");
      return;
    }

    setCareerStatus("loading");

    try {
      const formData = new FormData(form);

      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Errore durante l'invio della candidatura");
      }

      form.reset();

      setCareerStatus("success");
    } catch {
      setCareerStatus("error");
    }
  }

  return (
    <>
      {/* //! HERO */}
      <PageHero
        title="Entriamo in contatto"
        subtitle="Che tu voglia proporre un progetto, avviare una collaborazione o candidarti per entrare nel team, questo è il punto di partenza"
        backgroundImage={testHero}
        overlay="dark"
      />

      {/* //! NAVIGAZIONE INTERNA */}
      <div
        className="
    border-b
    border-site-border
    bg-site-surface
  "
      >
        <Container>
          <nav
            aria-label="Navigazione pagina Contatti"
            className="
        flex
        gap-3
        overflow-x-auto
        py-5
      "
          >
            {contactNavigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="
            shrink-0
            rounded-full
            border
            border-site-border
            bg-site-surface-alt
            px-5
            py-2

            text-sm
            font-semibold
            text-site-text

            transition-colors

            hover:border-site-blue
            hover:text-site-blue

            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-site-blue
            focus-visible:ring-offset-2
            focus-visible:ring-offset-site-surface
          "
              >
                {item.label}
              </a>
            ))}
          </nav>
        </Container>
      </div>

      {/* //! RECAPITI E FORM */}
      <Section id="recapiti" variant="default" reveal="up">
        <Container>
          <div
            className="
              grid
              gap-14

              lg:grid-cols-[0.8fr_1.2fr]
              lg:gap-20
            "
          >
            <div>
              <SectionHeader eyebrow="Recapiti" title="Come puoi contattarci" />

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <Mail
                    size={22}
                    aria-hidden="true"
                    className="
                      mt-1
                      shrink-0
                      text-site-blue
                    "
                  />

                  <div>
                    <p className="font-semibold">Email</p>

                    <div
                      className="
                        mt-1
                        flex
                        flex-col
                        items-start
                        gap-1
                      "
                    >
                      <a
                        href="mailto:info@teacz.com"
                        className="
                          text-site-muted
                          underline-offset-4

                          hover:text-site-blue
                          hover:underline
                        "
                      >
                        info@teacz.com
                      </a>

                      <a
                        href="mailto:elena@teacz.com"
                        className="
                          text-site-muted
                          underline-offset-4

                          hover:text-site-blue
                          hover:underline
                        "
                      >
                        elena@teacz.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin
                    size={22}
                    aria-hidden="true"
                    className="
                      mt-1
                      shrink-0
                      text-site-red
                    "
                  />

                  <div>
                    <p className="font-semibold">Sede</p>

                    <p className="mt-1 text-site-muted">
                      C.da Santa Domenica, 48E | 88100 - Catanzaro
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone
                    size={22}
                    aria-hidden="true"
                    className="
                      mt-1
                      shrink-0
                      text-site-green
                    "
                  />

                  <div>
                    <p className="font-semibold">Telefono</p>

                    <a
                      href="tel:+393493056593"
                      className="
                        mt-1
                        block
                        text-site-muted
                        underline-offset-4

                        hover:text-site-blue
                        hover:underline
                      "
                    >
                      +39 349.3056593
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock
                    size={22}
                    aria-hidden="true"
                    className="
                      mt-1
                      shrink-0
                      text-site-orange
                    "
                  />

                  <div>
                    <p className="font-semibold">Orari d’ufficio</p>

                    <p className="mt-1 text-site-muted">
                      Lun – Ven, 09.00 – 18.00
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <p className="mb-4 font-semibold">Seguici</p>

                <SocialLinks links={teaSocialLinks} />
              </div>

              <div
                className="
                  mt-10
                  aspect-video
                  overflow-hidden
                  rounded-xl
                  bg-site-surface-alt
                "
              >
                <iframe
                  src="https://www.google.com/maps?q=38.9175924,16.6163593&z=16&output=embed"
                  title="Sede TEA - Contrada Santa Domenica 48E, Catanzaro"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                  allowFullScreen
                />
              </div>
            </div>

            <div>
              <SectionHeader
                eyebrow="Idee e progetti"
                title="Parlaci del tuo progetto"
                description="Raccontaci da dove vuoi partire. Ti ricontatteremo per trovare insieme le possibili soluzioni"
              />

              <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="subject"
                    className="
                      mb-2
                      block
                      font-semibold
                    "
                  >
                    Oggetto
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    autoComplete="off"
                    className={fieldClasses}
                    placeholder="Inserisci un oggetto sintetico per il tuo messaggio"
                  />
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="
                      mb-2
                      block
                      font-semibold
                    "
                  >
                    Nome
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className={fieldClasses}
                  />
                </div>

                <div
                  className="
                    grid
                    gap-5

                    sm:grid-cols-2
                  "
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="
                        mb-2
                        block
                        font-semibold
                      "
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className={fieldClasses}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="
                        mb-2
                        block
                        font-semibold
                      "
                    >
                      Telefono{" "}
                      <span className="font-normal text-site-soft">
                        (facoltativo)
                      </span>
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className={fieldClasses}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="
                      mb-2
                      block
                      font-semibold
                    "
                  >
                    Raccontaci la tua idea
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={7}
                    placeholder="Di cosa hai bisogno?"
                    className={`
                      ${fieldClasses}
                      resize-y
                    `}
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    required
                    className="
                      mt-1
                      h-4
                      w-4
                      shrink-0
                      accent-site-blue
                    "
                  />

                  <label
                    htmlFor="privacy"
                    className="
                      text-sm
                      leading-relaxed
                      text-site-muted
                    "
                  >
                    Acconsento al trattamento dei dati personali secondo quanto
                    indicato nella{" "}
                    <a
                      href="/privacy-policy"
                      className="
                        text-site-blue
                        underline-offset-4

                        hover:underline
                      "
                    >
                      Privacy Policy
                    </a>{" "}
                    <span className="text-site-red">*</span>.
                  </label>
                </div>

                <div aria-live="polite" aria-atomic="true">
                  {status === "success" && (
                    <p
                      className="
                        rounded-lg
                        bg-site-green/10
                        p-4
                        text-sm
                        font-medium
                        text-site-green
                      "
                    >
                      Grazie, il tuo messaggio è stato inviato. Ti
                      ricontatteremo appena possibile.
                    </p>
                  )}

                  {status === "error" && (
                    <p
                      className="
                        rounded-lg
                        bg-site-red/10
                        p-4
                        text-sm
                        font-medium
                        text-site-red
                      "
                    >
                      Non è stato possibile inviare il messaggio. Riprova oppure
                      scrivici direttamente a info@teacz.com.
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  color="blue"
                  disabled={status === "loading"}
                >
                  {status === "loading"
                    ? "Invio in corso..."
                    : "Invia la tua idea"}
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </Section>

      {/* //! LAVORA CON NOI */}
      <Section
        id="careers"
        variant="alternative"
        reveal="up"
        className="scroll-mt-28"
      >
        <Container>
          <SectionHeader
            eyebrow="Careers"
            title="Lavora con noi"
            description="Siamo sempre interessati a conoscere nuove persone che vogliono far parte di TEA!"
          />

          <div
            className="
        mt-12
        grid
        gap-14

        lg:grid-cols-[1.1fr_0.9fr]
        lg:gap-20
      "
          >
            {/* //! POSIZIONI APERTE */}
            <div>
              <h3
                className="
            text-2xl
            font-semibold
            text-site-text
          "
              >
                Posizioni aperte
              </h3>

              <p
                className="
            mt-3
            leading-relaxed
            text-site-muted
          "
              >
                Consulta le opportunità attualmente disponibili
              </p>

              {jobOpenings.length === 0 ? (
                <EmptyState
                  className="mt-8"
                  title="Nessuna posizione aperta"
                  description="Al momento non sono presenti selezioni attive. Puoi comunque inviarci una candidatura spontanea"
                />
              ) : (
                <div className="mt-8 space-y-4">
                  {jobOpenings.map((job) => (
                    <Accordion key={job.id} title={job.title}>
                      <div className="space-y-5">
                        <p
                          className="
                      leading-relaxed
                      text-site-muted
                    "
                        >
                          {job.description}
                        </p>

                        <dl
                          className="
                      grid
                      gap-4

                      sm:grid-cols-2
                    "
                        >
                          <div>
                            <dt
                              className="
                          text-sm
                          font-semibold
                          text-site-text
                        "
                            >
                              Sede
                            </dt>

                            <dd
                              className="
                          mt-1
                          text-sm
                          text-site-muted
                        "
                            >
                              {job.location}
                            </dd>
                          </div>

                          {job.salaryRange && (
                            <div>
                              <dt
                                className="
                            text-sm
                            font-semibold
                            text-site-text
                          "
                              >
                                RAL
                              </dt>

                              <dd
                                className="
                            mt-1
                            text-sm
                            text-site-muted
                          "
                              >
                                {job.salaryRange}
                              </dd>
                            </div>
                          )}

                          {job.ccnlLevel && (
                            <div>
                              <dt
                                className="
                            text-sm
                            font-semibold
                            text-site-text
                          "
                              >
                                Inquadramento
                              </dt>

                              <dd
                                className="
                            mt-1
                            text-sm
                            text-site-muted
                          "
                              >
                                {job.ccnlLevel}
                              </dd>
                            </div>
                          )}

                          {job.contract && (
                            <div>
                              <dt
                                className="
                            text-sm
                            font-semibold
                            text-site-text
                          "
                              >
                                Contratto
                              </dt>

                              <dd
                                className="
                            mt-1
                            text-sm
                            text-site-muted
                          "
                              >
                                {job.contract}
                              </dd>
                            </div>
                          )}

                          {job.schedule && (
                            <div>
                              <dt
                                className="
                            text-sm
                            font-semibold
                            text-site-text
                          "
                              >
                                Orario
                              </dt>

                              <dd
                                className="
                            mt-1
                            text-sm
                            text-site-muted
                          "
                              >
                                {job.schedule}
                              </dd>
                            </div>
                          )}

                          {job.workMode && (
                            <div>
                              <dt
                                className="
                            text-sm
                            font-semibold
                            text-site-text
                          "
                              >
                                Modalità di lavoro
                              </dt>

                              <dd
                                className="
                            mt-1
                            text-sm
                            text-site-muted
                          "
                              >
                                {job.workMode}
                              </dd>
                            </div>
                          )}
                        </dl>

                        {job.skills && job.skills.length > 0 && (
                          <div>
                            <p
                              className="
                            text-sm
                            font-semibold
                            text-site-text
                          "
                            >
                              Competenze richieste
                            </p>

                            <ul
                              className="
                            mt-2
                            list-disc
                            space-y-1
                            pl-5
                            text-sm
                            text-site-muted
                          "
                            >
                              {job.skills.map((skill) => (
                                <li key={skill}>{skill}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        <Button
                          type="button"
                          color="blue"
                          onClick={() => {
                            setSelectedJob(job);

                            requestAnimationFrame(() => {
                              document
                                .getElementById("career-form")
                                ?.scrollIntoView({
                                  behavior: "smooth",
                                  block: "start",
                                });
                            });
                          }}
                        >
                          Candidati per questa posizione
                        </Button>
                      </div>
                    </Accordion>
                  ))}
                </div>
              )}
            </div>

            {/* //! CANDIDATURA SPONTANEA / candidatura */}
            <div id="career-form" className="scroll-mt-28">
              <h3
                className="
    text-2xl
    font-semibold
    text-site-text
  "
              >
                {selectedJob
                  ? "Candidati per questa posizione"
                  : "Candidatura spontanea"}
              </h3>

              <p
                className="
            mt-3
            leading-relaxed
            text-site-muted
          "
              >
                {selectedJob ? (
                  <>
                    Stai inviando la tua candidatura per{" "}
                    <strong className="text-site-green">
                      {selectedJob.title}
                    </strong>
                    .
                  </>
                ) : (
                  <>
                    Non trovi una posizione adatta al tuo profilo? Inviaci il
                    tuo curriculum e raccontaci brevemente le tue competenze!
                  </>
                )}
              </p>
              {selectedJob && (
                <Button
                  type="button"
                  variant="secondary"
                  color="green"
                  size="sm"
                  className="mt-4"
                  onClick={() => setSelectedJob(null)}
                >
                  Passa alla candidatura spontanea
                </Button>
              )}

              <form className="mt-8 space-y-5" onSubmit={handleCareerSubmit}>
                <input
                  type="hidden"
                  name="position"
                  value={selectedJob?.title ?? "Candidatura spontanea"}
                />
                <div>
                  <label
                    htmlFor="career-name"
                    className="
                mb-2
                block
                font-semibold
              "
                  >
                    Nome e cognome
                  </label>

                  <input
                    id="career-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className={fieldClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="career-email"
                    className="
                mb-2
                block
                font-semibold
              "
                  >
                    Email
                  </label>

                  <input
                    id="career-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={fieldClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="career-message"
                    className="
                mb-2
                block
                font-semibold
              "
                  >
                    Presentazione{" "}
                    <span
                      className="
                  font-normal
                  text-site-soft
                "
                    >
                      (facoltativa)
                    </span>
                  </label>

                  <textarea
                    id="career-message"
                    name="message"
                    rows={5}
                    placeholder="Raccontaci brevemente il tuo profilo"
                    className={`
                ${fieldClasses}
                resize-y
              `}
                  />
                </div>

                <div>
                  <label
                    htmlFor="career-cv"
                    className="
                mb-2
                block
                font-semibold
              "
                  >
                    Curriculum vitae
                  </label>

                  <input
                    id="career-cv"
                    name="cv"
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    className={`
                ${fieldClasses}

                file:mr-4
                file:rounded-md
                file:border-0
                file:bg-site-surface-alt
                file:px-4
                file:py-2
                file:font-semibold
                file:text-site-text
              `}
                  />

                  <p
                    className="
                mt-2
                text-sm
                text-site-soft
              "
                  >
                    Formati accettati: PDF, DOC, DOCX
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="career-privacy"
                    name="privacy"
                    type="checkbox"
                    required
                    className="
                mt-1
                h-4
                w-4
                shrink-0
                accent-site-blue
              "
                  />

                  <label
                    htmlFor="career-privacy"
                    className="
                text-sm
                leading-relaxed
                text-site-muted
              "
                  >
                    Dichiaro di aver preso visione dell’informativa sul
                    trattamento dei dati personali contenuta nella{" "}
                    <a
                      href="/privacy-policy"
                      className="
                  text-site-blue
                  underline-offset-4

                  hover:underline
                "
                    >
                      Privacy Policy
                    </a>
                    <span className="text-site-red"> *</span>
                  </label>
                </div>

                <div aria-live="polite" aria-atomic="true">
                  {careerStatus === "success" && (
                    <p
                      className="
                  rounded-lg
                  bg-site-green/10
                  p-4
                  text-sm
                  font-medium
                  text-site-green
                "
                    >
                      La candidatura è stata inviata correttamente.
                    </p>
                  )}

                  {careerStatus === "error" && (
                    <p
                      className="
                  rounded-lg
                  bg-site-red/10
                  p-4
                  text-sm
                  font-medium
                  text-site-red
                "
                    >
                      Non è stato possibile inviare la candidatura. Riprova più
                      tardi.
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  color="blue"
                  disabled={careerStatus === "loading"}
                >
                  {careerStatus === "loading"
                    ? "Invio in corso..."
                    : "Invia candidatura"}
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </Section>
      {/* //! FAQ */}
      <Section id="faq" variant="blue" reveal="up">
        <Container>
          <SectionHeader
            title="Domande frequenti"
            description="Alcune informazioni utili per capire come nasce e come sviluppiamo le collaborazioni"
            align="center"
          />

          <div
            className="
        mx-auto
        mt-10
        max-w-4xl
        space-y-4
      "
          >
            {faqItems.map((item) => (
              <Accordion key={item.id} title={item.question}>
                <p
                  className="
              leading-relaxed
              text-site-muted
            "
                >
                  {item.answer}
                </p>
              </Accordion>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}