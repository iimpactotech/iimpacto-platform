import { getGreeting } from "../../../packages/shared/utils/getGreeting";
import { userConfig } from "../../config/user.config";
import { Link } from "react-router-dom";
import {
  Users,
  Boxes,
  KeyRound,
  UserCog,
  Palette,
  Rocket,
} from "lucide-react";

import HeroHeader from "../../../design-system/components/HeroHeader";
import Card from "../../../design-system/components/Card";
import Button from "../../../design-system/components/Button";

export default function PlatformDashboard() {
  return (
    <div>
      <HeroHeader
        greeting={`${getGreeting()}, Alberto 👋`}
        title="Bem-vindo à IImpacto Platform"
        description="Ecossistema central para gestão de clientes, produtos, licenças, ambientes e configurações White Label."
        action={
          <Link to="/produtos">
            <Button>Explorar Produtos</Button>
          </Link>
        }
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 20,
        }}
      >
        <Card
          title="Clientes"
          value="0"
          subtitle="Base central"
          icon={<Users size={24} />}
        />

        <Link to="/produtos" style={{ textDecoration: "none" }}>
          <Card
            title="Produtos"
            value="5"
            subtitle="Axé, Consultor, ETL, Reports e Site"
            icon={<Boxes size={24} />}
            variant="info"
          />
        </Link>

        <Card
          title="Licenças"
          value="0"
          subtitle="Controle por cliente"
          icon={<KeyRound size={24} />}
          variant="warning"
        />

        <Card
          title="Usuários"
          value="0"
          subtitle="Acessos e permissões"
          icon={<UserCog size={24} />}
          variant="success"
        />

        <Card
          title="White Label"
          value="Ativo"
          subtitle="Personalização por cliente"
          icon={<Palette size={24} />}
          variant="primary"
        />

        <Card
          title="Versão"
          value="0.1.0"
          subtitle="Platform Foundation"
          icon={<Rocket size={24} />}
          variant="info"
        />
      </div>
    </div>
  );
}