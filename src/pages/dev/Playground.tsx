import { Button } from "@/components/ui";

export function Playground() {
  return (
    <main className="min-h-screen bg-white p-10">
      <h1 className="mb-8 text-3xl font-bold">Test</h1>

      <section className="space-y-6">
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
    </main>
  );
}