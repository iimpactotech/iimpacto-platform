import { Link } from "react-router-dom";
import { Package, Users, FileText, Database, Globe } from "lucide-react";
import Card from "../../design-system/components/Card";
import Button from "../../design-system/components/Button";

export default function PlatformProducts() {
  return (
    <div>
      <h1 style={{ marginBottom: 8 }}>Produtos IImpacto</h1>

      <p style={{ color: "var(--ii-color-text-secondary)", marginBottom: 24 }}>
        Acesse e gerencie os produtos disponíveis na IImpacto Platform.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 20,
        }}
      >
        <div>
          <Card
            title="Axé de IImpacto"
            value="Em desenvolvimento"
            subtitle="Produto ativo"
            icon={<Package size={24} />}
          />
          <div style={{ marginTop: 12 }}>
            <Link to="/products/axe">
              <Button>Abrir Axé</Button>
            </Link>
          </div>
        </div>

        <Card
          title="Portal Consultor"
          value="Planejado"
          subtitle="Produto futuro"
          icon={<Users size={24} />}
          variant="info"
        />

        <Card
          title="RM Smart Reports"
          value="Planejado"
          subtitle="Produto futuro"
          icon={<FileText size={24} />}
          variant="success"
        />

        <Card
          title="ETL Studio"
          value="Planejado"
          subtitle="Produto futuro"
          icon={<Database size={24} />}
          variant="warning"
        />

        <Card
          title="Site Institucional"
          value="Planejado"
          subtitle="Produto futuro"
          icon={<Globe size={24} />}
          variant="info"
        />
      </div>
    </div>
  );
}