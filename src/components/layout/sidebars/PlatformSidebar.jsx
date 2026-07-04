import { NavLink } from "react-router-dom";
import {
  Home,
  Users,
  Boxes,
  KeyRound,
  UserCog,
  Palette,
} from "lucide-react";

const menu = [
  { label: "Dashboard", path: "/", icon: Home },
  { label: "Clientes", path: "/clientes", icon: Users },
  { label: "Produtos", path: "/produtos", icon: Boxes },
  { label: "Licenças", path: "/licencas", icon: KeyRound },
  { label: "Usuários", path: "/usuarios", icon: UserCog },
  { label: "White Label", path: "/white-label", icon: Palette },
  { label: "Design System", path: "/design-system", icon: Palette },
];

export default function PlatformSidebar() {
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
      <h2>IImpacto Platform</h2>

      <hr style={{ borderColor: "rgba(255,255,255,.15)" }} />

      <nav style={{ marginTop: 24 }}>
        {menu.map((item) => {
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
      </nav>
    </aside>
  );
}