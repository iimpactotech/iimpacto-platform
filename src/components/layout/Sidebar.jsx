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
  { label: "Dashboard", icon: Home },
  { label: "Casas", icon: Building2 },
  { label: "Pessoas", icon: Users },
  { label: "Rituais", icon: CalendarDays },
  { label: "Materiais", icon: Package },
  { label: "Biblioteca", icon: BookOpen },
  { label: "Relatórios", icon: BarChart3 },
  { label: "Administração", icon: Settings },
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
          <Icon size={20} />

          return (
            <button
              key={item.label}
              onClick={() => alert(`Abrir: ${item.label}`)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 12,
                background: "transparent",
                color: "#FFF",
                border: "none",
                padding: "12px 8px",
                cursor: "pointer",
                fontSize: 16,
                textAlign: "left",
              }}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}