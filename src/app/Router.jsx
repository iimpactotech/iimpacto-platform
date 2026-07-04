import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import DesignSystemPage from "../pages/DesignSystemPage";
import {
  Building2,
  Users,
  CalendarDays,
  Package,
} from "lucide-react";
import Card from "../design-system/components/Card";

function DashboardPage() {
  return (
    <div>
      <h1 style={{ marginBottom: 8 }}>Dashboard</h1>
      <p style={{ color: "var(--ii-color-text-secondary)", marginBottom: 24 }}>
        Visão geral da plataforma Axé de IImpacto.
      </p>

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
        { index: true, element: <DashboardPage /> },
        { path: "casas", element: <CasasPage /> },
        { path: "pessoas", element: <PessoasPage /> },
        { path: "rituais", element: <RituaisPage /> },
        { path: "materiais", element: <MateriaisPage /> },
        { path: "biblioteca", element: <BibliotecaPage /> },
        { path: "relatorios", element: <RelatoriosPage /> },
        { path: "configuracoes", element: <ConfiguracoesPage /> },
        { path: "design-system", element: <DesignSystemPage /> },
      ],
    },
  ],
  {
    basename: "/axe-de-iimpacto",
  }
);