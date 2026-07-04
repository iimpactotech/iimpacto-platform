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

export const axeProductConfig = {
  id: "axe",
  name: "Axé de IImpacto",
  version: "0.1.0-alpha",
  category: "Gestão Religiosa",
  route: "/products/axe",

  menu: [
    { label: "Dashboard", path: "/products/axe", icon: Home },
    { label: "Casas", path: "/products/axe/casas", icon: Building2 },
    { label: "Pessoas", path: "/products/axe/pessoas", icon: Users },
    { label: "Rituais", path: "/products/axe/rituais", icon: CalendarDays },
    { label: "Materiais", path: "/products/axe/materiais", icon: Package },
    { label: "Biblioteca", path: "/products/axe/biblioteca", icon: BookOpen },
    { label: "Relatórios", path: "/products/axe/relatorios", icon: BarChart3 },
    { label: "Administração", path: "/products/axe/configuracoes", icon: Settings },
  ],
};