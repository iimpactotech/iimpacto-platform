import { typography } from "./typography";

export default function TypographyPage() {
  return (
    <>
      <h2 style={{ marginBottom: 24 }}>🔤 Typography</h2>

      <div style={{ display: "grid", gap: 18 }}>
        {typography.map((item) => (
          <section key={item.token} className="ids-lab__panel">
            <p style={{ color: "var(--ii-color-primary)", fontWeight: 700 }}>
              {item.name}
            </p>

            <h3
              style={{
                fontSize: `var(${item.token})`,
                fontWeight: item.weight,
                marginTop: 12,
              }}
            >
              {item.sample}
            </h3>

            <p style={{ color: "var(--ii-color-text-secondary)", marginTop: 10 }}>
              {item.usage}
            </p>

            <div className="ids-lab__component-row">
              <code>{item.token}</code>
              <code>{item.size}</code>
              <code>weight {item.weight}</code>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}