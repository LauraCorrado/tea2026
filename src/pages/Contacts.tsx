import { useState, type FormEvent } from "react";

import { Clock, Mail, MapPin, Phone } from "lucide-react";

import {
  Accordion,
  Button,
  Container,
  PageHero,
  Section,
  SectionHeader,
  SocialLinks,
} from "@/components/ui";

import { teaSocialLinks } from "@/data/socialLinks";

import testHero from "@/assets/images/decorative/testHero.webp";

type FormStatus = "idle" | "loading" | "success" | "error";

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

  return (
    <>
      {/* //! HERO */}
      <PageHero
        title="Hai un’idea? Iniziamo a costruirla insieme!"
        subtitle="Ogni progetto nasce da un’esigenza, da un’intuizione o da una domanda. Raccontaci la tua: possiamo partire da lì per costruire insieme una soluzione adatta al contesto."
        backgroundImage={testHero}
        overlay="dark"
      />

      {/* //! RECAPITI E FORM */}
      <Section variant="default" reveal="up">
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
              <SectionHeader eyebrow="Contatti" title="Recapiti" />

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
                eyebrow="Scrivici"
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

                {/* FEEDBACK */}
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

              <div
                className="
                  mt-10
                  border-t
                  border-site-border
                  pt-8
                "
              >
                <h3
                  className="
                    text-xl
                    font-semibold
                  "
                >
                  Vuoi chiederci altro?
                </h3>

                <p
                  className="
                    mt-3
                    leading-relaxed
                    text-site-muted
                  "
                >
                  Per candidature, interviste, collaborazioni, richieste
                  informative o qualsiasi altra esigenza, puoi scriverci
                  direttamente a{" "}
                  <a
                    href="mailto:info@teacz.com"
                    className="
                      font-semibold
                      text-site-blue
                      underline-offset-4

                      hover:underline
                    "
                  >
                    info@teacz.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* //! FAQ */}
      <Section variant="blue" reveal="up">
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