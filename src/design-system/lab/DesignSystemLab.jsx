import { useState } from "react";
import {
  Palette,
  Type,
  MousePointerClick,
  Box,
  Keyboard,
  Table,
  PanelsTopLeft,
  UserCircle,
  Settings,
} from "lucide-react";

import Button from "../components/Button";
import ColorsPage from "../foundations/Colors";
import ButtonsPage from "../foundations/Buttons";
import { appConfig } from "../../config/appConfig";
import TypographyPage from "../foundations/Typography";
import "./DesignSystemLab.css";

const sections = [
  { id: "colors", label: "Cores", icon: Palette },
  { id: "typography", label: "Tipografia", icon: Type },
  { id: "buttons", label: "Buttons", icon: MousePointerClick },
  { id: "cards", label: "Cards", icon: Box },
  { id: "inputs", label: "Inputs", icon: Keyboard },
  { id: "tables", label: "Tables", icon: Table },
  { id: "modals", label: "Modals", icon: PanelsTopLeft },
  { id: "avatar", label: "Avatar", icon: UserCircle },
  { id: "tokens", label: "Tokens", icon: Settings },
];



export default function DesignSystemLab() {
  const [activeSection, setActiveSection] = useState("colors");

const currentSection = {
  colors: <ColorsPage />,
  typography: <TypographyPage />,
  buttons: <ButtonsPage />,
};

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
              <button
                key={section.id}
                className={`ids-lab__nav-item ${
                  activeSection === section.id ? "is-active" : ""
                }`}
                onClick={() => setActiveSection(section.id)}
              >
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

        <section className="ids-lab__content">
          {currentSection[activeSection] || (
            <section className="ids-lab__panel">
              <h3>Em construção</h3>
              <p>Esta seção será adicionada em breve.</p>
            </section>
          )}
        </section>
      </main>
    </div>
  );
}