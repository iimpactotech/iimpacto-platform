import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import DesignSystemPage from "../pages/DesignSystemPage";

function DashboardPage() {
  return <h1>Dashboard</h1>;
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