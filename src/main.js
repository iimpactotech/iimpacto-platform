import './styles/variables.css'
import './styles/theme.css'
import './styles/layout.css'
import './styles/components.css'
import './styles/animations.css'

import { createIcons, Home, ScrollText, Package, CalendarDays, BarChart3, Settings, Menu, PlusCircle } from 'lucide'

createIcons({
  icons: {
    Home,
    ScrollText,
    Package,
    CalendarDays,
    BarChart3,
    Settings,
    Menu,
    PlusCircle
  }
})

const app = document.querySelector('#app')

app.innerHTML = `
  <div class="app-shell">
    <aside class="sidebar">
      <div class="brand">
        <div class="brand-logo">TT</div>
        <div>
          <h1>Templo Tatuy</h1>
          <span>Gestão Ritualística</span>
        </div>
      </div>

      <nav class="menu">
        <button class="menu-item active" data-page="inicio"><i data-lucide="home"></i> Início</button>
        <button class="menu-item" data-page="rituais"><i data-lucide="calendar-days"></i> Rituais</button>
        <button class="menu-item" data-page="modelos"><i data-lucide="scroll-text"></i> Modelos</button>
        <button class="menu-item" data-page="materiais"><i data-lucide="package"></i> Materiais</button>
        <button class="menu-item" data-page="relatorios"><i data-lucide="bar-chart-3"></i> Relatórios</button>
        <button class="menu-item" data-page="configuracoes"><i data-lucide="settings"></i> Configurações</button>
      </nav>
    </aside>

    <main class="main-content">
      <header class="topbar">
        <button class="icon-button mobile-menu"><i data-lucide="menu"></i></button>
        <div>
          <h2 id="page-title">Início</h2>
          <p>Organização é também um ato de fé e respeito.</p>
        </div>
      </header>

      <section id="page-content" class="page-content"></section>
    </main>
  </div>
`

const pages = {
  inicio: `
    <section class="hero-card">
      <div>
        <span class="eyebrow">Sistema Templo Tatuy</span>
        <h3>Organize rituais, materiais e modelos com simplicidade.</h3>
        <p>Fluxo pensado para pessoas iniciantes, com organização profissional por trás.</p>
      </div>
      <button class="primary-button"><i data-lucide="plus-circle"></i> Criar Ritual</button>
    </section>

    <div class="quick-grid">
      <article class="quick-card">
        <i data-lucide="calendar-days"></i>
        <h4>Novo Ritual</h4>
        <p>Escolha um modelo, informe data e participantes.</p>
      </article>

      <article class="quick-card">
        <i data-lucide="scroll-text"></i>
        <h4>Modelos</h4>
        <p>Cadastre listas padrão como Ebô Exu, Egum e outras.</p>
      </article>

      <article class="quick-card">
        <i data-lucide="package"></i>
        <h4>Materiais</h4>
        <p>Controle materiais únicos usados em várias listas.</p>
      </article>

      <article class="quick-card">
        <i data-lucide="bar-chart-3"></i>
        <h4>Relatórios</h4>
        <p>Gere resumo por data e lista consolidada de compras.</p>
      </article>
    </div>
  `,
  rituais: `<div class="empty-page"><h3>Rituais</h3><p>Em breve: assistente para criação de ritual.</p></div>`,
  modelos: `<div class="empty-page"><h3>Modelos</h3><p>Em breve: cadastro de modelos ritualísticos.</p></div>`,
  materiais: `<div class="empty-page"><h3>Materiais</h3><p>Em breve: cadastro de materiais.</p></div>`,
  relatorios: `<div class="empty-page"><h3>Relatórios</h3><p>Em breve: relatório por data e consolidado.</p></div>`,
  configuracoes: `<div class="empty-page"><h3>Configurações</h3><p>Em breve: backup, tema e preferências.</p></div>`
}

function renderPage(page) {
  document.querySelector('#page-content').innerHTML = pages[page]
  document.querySelector('#page-title').textContent =
    document.querySelector(`[data-page="${page}"]`).textContent.trim()

  document.querySelectorAll('.menu-item').forEach(item => item.classList.remove('active'))
  document.querySelector(`[data-page="${page}"]`).classList.add('active')

  createIcons()
}

document.querySelectorAll('.menu-item').forEach(button => {
  button.addEventListener('click', () => renderPage(button.dataset.page))
})

renderPage('inicio')