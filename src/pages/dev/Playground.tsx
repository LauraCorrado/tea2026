import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { Button, IconButton, Section } from "@/components/ui";

export function Playground() {
  return (
    <main className="min-h-screen bg-white">
      <h1 className="mb-8 text-3xl font-bold px-10 pt-10 text-center text-tea-red">
        Test <span className="text-tea-orange">componenti</span>{" "}
        <span className="text-tea-green">TEA</span>
        <span className="text-tea-blue">!</span>
      </h1>

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

      {/* BUTTONS */}
      <section className="space-y-6 p-10">
        <h2 className="text-2xl font-semibold">Buttons</h2>

        <div className="flex flex-wrap gap-4">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
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