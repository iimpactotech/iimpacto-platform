import { usePlatform } from "../../../platform/hooks/usePlatform";
import { NavLink } from "react-router-dom";
import {
  Home,
  Building2,
  Users,
  CalendarDays,
  Package,
  BookOpen,
  BarChart3,
  Settings,
} from "lucide-react";

const menu = [
  { label: "Dashboard", path: "/products/axe", icon: Home },
  { label: "Casas", path: "/products/axe/casas", icon: Building2 },
  { label: "Pessoas", path: "/products/axe/pessoas", icon: Users },
  { label: "Rituais", path: "/products/axe/rituais", icon: CalendarDays },
  { label: "Materiais", path: "/products/axe/materiais", icon: Package },
  { label: "Biblioteca", path: "/products/axe/biblioteca", icon: BookOpen },
  { label: "Relatórios", path: "/products/axe/relatorios", icon: BarChart3 },
  { label: "Administração", path: "/products/axe/configuracoes", icon: Settings },

  // Separador lógico
  { label: "-", path: "#", icon: null },

  { label: "Hub da Plataforma", path: "/", icon: Home },
];

export default function AxeSidebar() {
  const { activeProduct } = usePlatform();

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
      <h2>{activeProduct?.name ?? "Produto"}</h2>

      <small
        style={{
          color: "var(--ii-color-text-secondary)",
          display: "block",
          marginBottom: 12,
        }}
      >
        v{activeProduct?.version ?? "0.0.0"}
      </small>

      <hr style={{ borderColor: "rgba(255,255,255,.15)" }} />

      <nav style={{ marginTop: 24 }}>
        {menu.map((item, index) => {
          if (item.label === "-") {
            return (
              <hr
                key={index}
                style={{
                  borderColor: "rgba(255,255,255,.15)",
                  margin: "16px 0",
                }}
              />
            );
          }

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
              {Icon && <Icon size={20} />}
              {item.label}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}