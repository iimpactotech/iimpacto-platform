import Button from "../design-system/components/Button";

export default function DesignSystemPage() {
  return (
    <div>
      <h1>IImpacto Design System</h1>
      <p>Laboratório visual de componentes da IImpacto Tech.</p>

      <section style={{ marginTop: 32 }}>
        <h2>Buttons</h2>

        <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>
    </div>
  );
}