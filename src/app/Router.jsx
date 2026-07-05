import PlatformDashboard from "../platform/hub/dashboard";
import HeroHeader from "../design-system/components/HeroHeader";
import { getGreeting } from "../packages/shared/utils/getGreeting";
import { userConfig } from "../platform/config/user.config";
import Button from "../design-system/components/Button";
import Card from "../design-system/components/Card";
import {
  Building2,
  Users,
  CalendarDays,
  Package,
} from "lucide-react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import DesignSystemPage from "../pages/DesignSystemPage";
import PlatformProducts from "../platform/produtos";

function DashboardPage() {
  return (
    <div>
       <HeroHeader
        greeting={`${getGreeting()}, ${userConfig.name} 👋`}
        title="Bem-vindo ao Axé de IImpacto"
        description="Gerencie casas, pessoas, rituais, materiais e atendimentos em uma única plataforma."
        action={<Button>Novo Atendimento</Button>}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 20,
        }}
      >
        <Card
          title="Casas de Religião"
          value="128"
          subtitle="+12 este mês"
          icon={<Building2 size={24} />}
        />

        <Card
          title="Pessoas"
          value="487"
          subtitle="+23 cadastros"
          icon={<Users size={24} />}
          variant="info"
        />

        <Card
          title="Rituais"
          value="84"
          subtitle="5 agendados hoje"
          icon={<CalendarDays size={24} />}
          variant="success"
        />

        <Card
          title="Materiais"
          value="325"
          subtitle="+45 itens"
          icon={<Package size={24} />}
          variant="warning"
        />
      </div>
    </div>
  );
}

function CasasPage() {
  return <h1>Casas de Religião</h1>;
}

function PessoasPage() {
  return <h1>Pessoas</h1>;
}

function RituaisPage() {
  return <h1>Rituais</h1>;
}

function MateriaisPage() {
  return <h1>Materiais</h1>;
}

function BibliotecaPage() {
  return <h1>Biblioteca</h1>;
}

function RelatoriosPage() {
  return <h1>Relatórios</h1>;
}

function ConfiguracoesPage() {
  return <h1>Administração</h1>;
}

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
children: [
  { index: true, element: <PlatformDashboard /> },

  { path: "clientes", element: <h1>Clientes</h1> },
  { path: "produtos", element: <PlatformProducts /> },
  { path: "licencas", element: <h1>Licenças</h1> },
  { path: "usuarios", element: <h1>Usuários</h1> },
  { path: "white-label", element: <h1>White Label</h1> },

 { path: "products/axe", element: <DashboardPage /> },
{ path: "products/axe/casas", element: <CasasPage /> },
{ path: "products/axe/pessoas", element: <PessoasPage /> },
{ path: "products/axe/rituais", element: <RituaisPage /> },
{ path: "products/axe/materiais", element: <MateriaisPage /> },
{ path: "products/axe/biblioteca", element: <BibliotecaPage /> },
{ path: "products/axe/relatorios", element: <RelatoriosPage /> },
{ path: "products/axe/configuracoes", element: <ConfiguracoesPage /> },
{ path: "design-system", element: <DesignSystemPage /> },
],
    },
  ],
  {
    basename: "/iimpacto-platform",
  }
);