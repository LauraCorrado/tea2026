import { Button } from "@/components/ui";
import { useAccessibility } from "@/hooks/useAccessibility";

import type { AccessibilityControlsProps } from "./AccessibilityControls.types";

export function AccessibilityControls({
  className = "",
}: AccessibilityControlsProps) {
  const { settings, updateSetting, resetSettings, applyPreset } =
    useAccessibility();

  return (
    <div
      className={`
        mt-6
        space-y-10
        text-site-text
        ${className}
      `}
    >
      {/* PRESET */}
      <section>
        <div className="mb-4">
          <h3 className="text-lg font-semibold tracking-tight text-site-text">
            Preset
          </h3>

          <p className="mt-1 text-sm leading-relaxed text-site-muted">
            Applica rapidamente una configurazione predefinita
          </p>
        </div>

        <div className="grid gap-3">
          <Button
            variant="secondary"
            color="blue"
            size="sm"
            onClick={() => applyPreset("lowVision")}
          >
            Supporto per ipovisione
          </Button>

          <Button
            variant="secondary"
            color="orange"
            size="sm"
            onClick={() => applyPreset("cognitiveSupport")}
          >
            Supporto cognitivo e alla lettura
          </Button>

          <Button
            variant="secondary"
            color="green"
            size="sm"
            onClick={() => applyPreset("reducedDistractions")}
          >
            Riduzione distrazioni
          </Button>

          <Button
            variant="secondary"
            color="red"
            size="sm"
            onClick={() => applyPreset("senior")}
          >
            Supporto per persone anziane
          </Button>
        </div>
      </section>

      {/* AVANZATE */}
      <section>
        <div className="mb-6 border-t border-site-border pt-6">
          <h3 className="text-lg font-semibold tracking-tight text-site-text">
            Impostazioni avanzate
          </h3>

          <p className="mt-1 text-sm leading-relaxed text-site-muted">
            Agisci sulle singole configurazioni
          </p>
        </div>

        <div className="space-y-8">
          {/* COLORI */}
          <section>
            <h4 className="font-semibold text-site-text">
              Colori e animazioni
            </h4>

            <div className="mt-4 grid gap-3">
              <AccessibilityToggle
                label="Riduzione movimento e trigger visivi"
                checked={settings.reduceMotion}
                onChange={(checked) =>
                  updateSetting("reduceMotion", checked)
                }
              />

              <AccessibilityToggle
                label="Modalità notte"
                checked={settings.darkMode}
                onChange={(checked) =>
                  updateSetting("darkMode", checked)
                }
              />
            </div>
          </section>

          {/* CONTENUTI */}
          <section>
            <h4 className="font-semibold text-site-text">
              Contenuti
            </h4>

            <div className="mt-4 space-y-5">
              <AccessibilityToggle
                label="Evidenzia titoli"
                checked={settings.highlightHeadings}
                onChange={(checked) =>
                  updateSetting("highlightHeadings", checked)
                }
              />

              <AccessibilityRange
                label="Dimensione caratteri"
                value={settings.fontScale}
                min={80}
                max={140}
                step={5}
                suffix="%"
                onChange={(value) =>
                  updateSetting("fontScale", value)
                }
              />

              <AccessibilityRange
                label="Interlinea"
                value={settings.lineHeight}
                min={1.2}
                max={2}
                step={0.1}
                onChange={(value) =>
                  updateSetting("lineHeight", value)
                }
              />

              <AccessibilityRange
                label="Spaziatura lettere"
                value={settings.letterSpacing}
                min={0}
                max={0.2}
                step={0.01}
                suffix="em"
                onChange={(value) =>
                  updateSetting("letterSpacing", value)
                }
              />
            </div>
          </section>

          {/* ORIENTAMENTO */}
          <section>
            <h4 className="font-semibold text-site-text">
              Orientamento nella pagina
            </h4>

            <div className="mt-4 grid gap-3">
              <AccessibilityToggle
                label="Grande cursore nero"
                checked={settings.largeCursor}
                onChange={(checked) =>
                  updateSetting("largeCursor", checked)
                }
              />

              <AccessibilityToggle
                label="Maschera per la lettura"
                checked={settings.readingMask}
                onChange={(checked) =>
                  updateSetting("readingMask", checked)
                }
              />

              <AccessibilityToggle
                label="Guida per lettura"
                checked={settings.readingGuide}
                onChange={(checked) =>
                  updateSetting("readingGuide", checked)
                }
              />
            </div>
          </section>
        </div>
      </section>

      <div
        className="
          flex
          flex-wrap
          items-center
          gap-3
          border-t
          border-site-border
          pt-5
        "
      >
        <Button
          variant="secondary"
          color="black"
          size="sm"
          onClick={resetSettings}
        >
          Reset
        </Button>

        <Button
          as="a"
          href="/dichiarazione-accessibilita"
          variant="primary"
          color="blue"
          size="sm"
        >
          Dichiarazione di accessibilità
        </Button>
      </div>
    </div>
  );
}

interface AccessibilityToggleProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

function AccessibilityToggle({
  label,
  checked,
  onChange,
}: AccessibilityToggleProps) {
  return (
    <label
      className="
        flex
        cursor-pointer
        items-center
        justify-between
        gap-4

        rounded-lg

        border
        border-site-border

        p-3

        text-site-text

        transition-colors

        hover:border-site-blue
        hover:bg-site-blue/80
        hover:text-site-on-blue
      "
    >
      <span className="text-sm font-medium">
        {label}
      </span>

      <input
        type="checkbox"
        checked={checked}
        onChange={(event) =>
          onChange(event.target.checked)
        }
        className="
          size-4
          accent-site-blue
        "
      />
    </label>
  );
}

interface AccessibilityRangeProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  suffix?: string;
  onChange: (value: number) => void;
}

function AccessibilityRange({
  label,
  value,
  min,
  max,
  step,
  suffix = "",
  onChange,
}: AccessibilityRangeProps) {
  return (
    <label className="block">
      <div
        className="
          mb-2
          flex
          items-center
          justify-between
          gap-4
        "
      >
        <span className="text-sm font-medium">
          {label}
        </span>

        <span className="text-xs text-site-soft">
          {value}
          {suffix}
        </span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) =>
          onChange(Number(event.target.value))
        }
        className="
          w-full
          accent-site-blue
        "
      />
    </label>
  );
}

{
  /* // ? REGOLARE ESPERIENZA DI NAVIGAZIONE:
              
              - SUPPORTO PER IPOVISIONE (AUMENTO CONTRASTO)
              - ADHDH FRIENDLY (RIDUZIONE DISTRAZIONI)
              - SUPPORTO COGNITIVO E ALLA LETTURA (SEMPLIFICAZIONE NAVIGAZIONE E LETTURA)
              - PERSONE ANZIANE (MIGLIORAMENTO VISIBILITà E COMFORT DI LETTURA)
    // ? REGOLARE I COLORI:
              - MODALITA NOTTE
              - SICUREZZA EPILESSIA (RIDUZIONE MOVIMENTO E TRIGGER VISIVI)
    // ? REGOLARE I CONTENUTI:
              - SCALA CONTENUTI
              - EVIDENZIA TITOLI
              - REGOLA DIMENSIONE CARATTERI
              - REGOLA LINE-HEIGHT
              - REGOLA SPAZIATURA TRA LE LETTERE       
    // ? REGOLARE L'ORIENTAMENTO:
              - GRANDE CURSORE NERO
              - MASCHERA PER LA LETTURA
              - GUIDA ALLA LETTURA.
              
              TUTTO CON TASTO DI RESET E CTA CHE RIMANDERà A UNA PAGINA "DICHIARAZIONE DI ACCESSIBILITÀ" PER ORA INESISTENTE */
}