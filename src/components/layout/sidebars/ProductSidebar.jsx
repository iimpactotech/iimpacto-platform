import { NavLink } from "react-router-dom";
import { Home } from "lucide-react";
import { usePlatform } from "../../../platform/hooks/usePlatform";
import { axeProductConfig } from "../../../products/axe/config/product.config";

const productConfigs = {
  axe: axeProductConfig,
};

export default function ProductSidebar() {
  const { activeProduct } = usePlatform();

  const productConfig = productConfigs[activeProduct?.id];

  if (!productConfig) {
    return null;
  }

  return (
    <aside
      style={{
        width: 260,
        background: "var(--ii-color-bg-secondary)",
        borderRight: "1px solid rgba(200,155,60,.18)",
        color: "#FFF",
        padding: 20,
      }}
    >
      <h2>{productConfig.name}</h2>

      <small
        style={{
          color: "var(--ii-color-text-secondary)",
          display: "block",
          marginBottom: 12,
        }}
      >
        v{productConfig.version}
      </small>

      <hr style={{ borderColor: "rgba(255,255,255,.15)" }} />

      <nav style={{ marginTop: 24 }}>
        {productConfig.menu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.label}
              to={item.path}
              style={({ isActive }) => ({
                display: "flex",
                alignItems: "center",
                gap: 12,
                color: "#FFF",
                textDecoration: "none",
                padding: "12px 8px",
                borderRadius: 8,
                marginBottom: 4,
                background: isActive
                  ? "rgba(200,155,60,.18)"
                  : "transparent",
              })}
            >
              <Icon size={20} />
              {item.label}
            </NavLink>
          );
        })}

        <hr
          style={{
            borderColor: "rgba(255,255,255,.15)",
            margin: "16px 0",
          }}
        />

        <NavLink
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#FFF",
            textDecoration: "none",
            padding: "12px 8px",
            borderRadius: 8,
          }}
        >
          <Home size={20} />
          Hub da Plataforma
        </NavLink>
      </nav>
    </aside>
  );
}