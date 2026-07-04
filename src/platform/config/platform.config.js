export const platformConfig = {
  id: "iimpacto-platform",
  name: "IImpacto Platform",
  company: "IImpacto Tech",
  version: "0.1.0-alpha",
  environment: "development",

  defaultProduct: null,

  products: [
    {
      id: "axe",
      name: "Axé de IImpacto",
      status: "development",
      version: "0.1.0-alpha",
      category: "Gestão Religiosa",
      route: "/products/axe",
    },
    {
      id: "consultor",
      name: "Portal Consultor",
      status: "planned",
      version: "0.0.0",
      category: "Consultoria",
      route: "/products/consultor",
    },
    {
      id: "etl-studio",
      name: "ETL Studio",
      status: "planned",
      version: "0.0.0",
      category: "Integrações",
      route: "/products/etl-studio",
    },
    {
      id: "rm-smart-reports",
      name: "RM Smart Reports",
      status: "planned",
      version: "0.0.0",
      category: "Relatórios TOTVS RM",
      route: "/products/rm-smart-reports",
    },
    {
      id: "site",
      name: "Site Institucional",
      status: "planned",
      version: "0.0.0",
      category: "Institucional",
      route: "/products/site",
    },
  ],
};