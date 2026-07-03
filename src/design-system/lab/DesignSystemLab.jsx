import { Palette, Type, MousePointerClick, Box, Keyboard, Table, PanelsTopLeft, UserCircle, Settings } from "lucide-react";
import Button from "../components/Button";
import { appConfig } from "../../config/appConfig";
import "./DesignSystemLab.css";

const sections = [
  { label: "Cores", icon: Palette },
  { label: "Tipografia", icon: Type },
  { label: "Buttons", icon: MousePointerClick },
  { label: "Cards", icon: Box },
  { label: "Inputs", icon: Keyboard },
  { label: "Tables", icon: Table },
  { label: "Modals", icon: PanelsTopLeft },
  { label: "Avatar", icon: UserCircle },
  { label: "Tokens", icon: Settings },
];

export default function DesignSystemLab() {
  return (
    <div className="ids-lab">
      <aside className="ids-lab__sidebar">
        <div className="ids-lab__brand">
          <div className="ids-lab__logo">II</div>
          <div>
            <strong>IImpacto</strong>
            <span>Design System</span>
          </div>
        </div>

        <nav className="ids-lab__nav">
          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <button key={section.label} className="ids-lab__nav-item">
                <Icon size={18} />
                <span>{section.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="ids-lab__footer">
          <strong>{appConfig.product.name}</strong>
          <span>v{appConfig.product.version}</span>
          <span>{appConfig.license.plan}</span>
          <small>Powered by {appConfig.company.name}</small>
        </div>
      </aside>

      <main className="ids-lab__main">
        <header className="ids-lab__header">
          <div>
            <h1>IImpacto Design System</h1>
            <p>Uma única identidade. Múltiplos produtos.</p>
          </div>

          <div className="ids-lab__badges">
            <span>DEV</span>
            <span>v{appConfig.product.version}</span>
          </div>
        </header>

        <section className="ids-lab__hero">
          <div>
            <span className="ids-lab__eyebrow">Platform Foundation</span>
            <h2>UI Lab</h2>
            <p>
              Laboratório visual para validar componentes, tokens e padrões da
              plataforma IImpacto Tech.
            </p>
          </div>
        </section>

        <section className="ids-lab__panel">
          <div className="ids-lab__panel-header">
            <div>
              <h3>Buttons</h3>
              <p>Primeiro componente oficial do IImpacto Design System.</p>
            </div>
          </div>

          <div className="ids-lab__component-row">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
            <Button disabled>Disabled</Button>
          </div>
        </section>
      </main>
    </div>
  );
}