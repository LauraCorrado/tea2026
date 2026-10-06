import { useState } from "react";
import { SlidersHorizontal, X, Mail, Phone } from "lucide-react";
import { IoAccessibilitySharp, IoLanguage, IoCall } from "react-icons/io5";
import { AccessibilityControls } from "@/components/features";
import { IconButton, LangSelector, Accordion } from "@/components/ui";
import { languages } from "@/data/languages.ts";

export function OptionBanner() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("it");
  return (
    <>
      <div
        className="
          fixed
          right-4
          top-1/2
          z-40
          -translate-y-1/2
        "
      >
        <IconButton
          icon={<SlidersHorizontal size={20} />}
          label="Apri le opzioni del sito"
          size="lg"
          animation="draw"
          aria-expanded={open}
          aria-controls="site-options"
          onClick={() => setOpen(true)}
          className="
            bg-white
            shadow-lg
          "
        />
      </div>

      {open && (
        <button
          type="button"
          aria-label="Chiudi le opzioni"
          onClick={() => setOpen(false)}
          className="
            fixed
            inset-0
            z-40
            bg-black/20
            backdrop-blur-[2px]
          "
        />
      )}

      <aside
        id="site-options"
        aria-label="Opzioni del sito"
        aria-hidden={!open}
        className={`
          fixed
          right-0
          top-0
          z-50

          flex
          h-dvh
          w-full
          max-w-md
          flex-col

          bg-white
          shadow-2xl

          transition-transform
          duration-300
          ease-out

          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-black/10
            p-5
          "
        >
          <div>
            <h2
              className="
                mt-1
                text-xl
                font-semibold
                tracking-tight
                text-tea-black
              "
            >
              Opzioni rapide
            </h2>
          </div>

          <IconButton
            icon={<X size={20} />}
            label="Chiudi le opzioni"
            animation="rotate"
            onClick={() => setOpen(false)}
          />
        </div>
        <div
          className="
    flex-1
    space-y-4
    overflow-y-auto
    p-5
  "
        >
          <Accordion
            title={
              <div className="flex items-center gap-3">
                <IoLanguage
                  size={20}
                  className="text-tea-green"
                  aria-hidden="true"
                />

                <span className="font-semibold tracking-wide text-tea-black">
                  Cambia lingua
                </span>
              </div>
            }
          >
            <LangSelector
              languages={languages}
              value={language}
              onChange={setLanguage}
              placement="bottom"
            />
          </Accordion>

          <Accordion
            defaultOpen
            title={
              <div className="flex items-center gap-3">
                <IoAccessibilitySharp
                  size={20}
                  className="text-tea-orange"
                  aria-hidden="true"
                />

                <span className="font-semibold tracking-wide text-tea-black">
                  Regolazioni per l'accessibilità
                </span>
              </div>
            }
          >
            <p
              className="
        text-md
        leading-relaxed
        text-black/60
      "
            >
              Personalizza le modalità di visualizzazione del sito in base alle
              tue esigenze e preferenze.
            </p>

            <AccessibilityControls />
          </Accordion>

          <Accordion
            title={
              <div className="flex items-center gap-3">
                <IoCall size={20} className="text-tea-red" aria-hidden="true" />

                <span className="font-semibold tracking-wide text-tea-black">
                  Contatti rapidi
                </span>
              </div>
            }
          >
            <div className="flex items-center gap-3">
              <IconButton
                as="a"
                href="mailto:info@teacz.com?cc=elena@teacz.com"
                icon={<Mail size={18} />}
                label="Invia una email a TEA"
                animation="glow"
              />

              <span className="text-sm text-black/70">
                info@teacz.com / elena@teacz.com
              </span>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <IconButton
                as="a"
                href="tel:+393493056593"
                icon={<Phone size={18} />}
                label="Contatta TEA telefonicamente"
                animation="glow"
              />

              <span className="text-sm text-black/70">+39 349.3056593</span>
            </div>
          </Accordion>
        </div>
      </aside>
    </>
  );
}