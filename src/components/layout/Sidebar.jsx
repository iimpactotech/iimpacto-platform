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
  Palette,
} from "lucide-react";

const menuItems = [
  { label: "Dashboard", path: "/", icon: Home },
  { label: "Casas", path: "/casas", icon: Building2 },
  { label: "Pessoas", path: "/pessoas", icon: Users },
  { label: "Rituais", path: "/rituais", icon: CalendarDays },
  { label: "Materiais", path: "/materiais", icon: Package },
  { label: "Biblioteca", path: "/biblioteca", icon: BookOpen },
  { label: "Relatórios", path: "/relatorios", icon: BarChart3 },
  { label: "Administração", path: "/configuracoes", icon: Settings },
  { label: "Design System", path: "/design-system", icon: Palette },
];

export default function Sidebar() {
  return (
    <aside
      style={{
        width: 260,
        background: "#0B4A38",
        color: "#FFF",
        padding: 20,
      }}
    >
      <h2>Axé de IImpacto</h2>

      <hr style={{ borderColor: "rgba(255,255,255,.3)" }} />

      <nav style={{ marginTop: 24 }}>
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.label}
              to={item.path}
              style={({ isActive }) => ({
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 12,
                color: "#FFF",
                textDecoration: "none",
                padding: "12px 8px",
                fontSize: 16,
                borderRadius: 8,
                background: isActive ? "rgba(255,255,255,.16)" : "transparent",
                marginBottom: 4,
              })}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}