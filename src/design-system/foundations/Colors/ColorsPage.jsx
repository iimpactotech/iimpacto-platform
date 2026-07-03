import { colors } from "./colors";
import ColorCard from "../../lab/components/ColorCard";

export default function ColorsPage() {
  return (
    <>
      <h2 style={{ marginBottom: 24 }}>🎨 Colors</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: 24
        }}
      >
        {colors.map((color) => (
          <ColorCard
            key={color.token}
            name={color.name}
            token={color.token}
            hex={color.hex}
            description={color.description}
          />
        ))}
      </div>
    </>
  );
}