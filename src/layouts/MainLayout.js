export function renderLayout() {
  return `
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
          <button class="menu-item active"><i data-lucide="home"></i> Início</button>
          <button class="menu-item"><i data-lucide="calendar-days"></i> Rituais</button>
          <button class="menu-item"><i data-lucide="scroll-text"></i> Biblioteca</button>
          <button class="menu-item"><i data-lucide="package"></i> Materiais</button>
          <button class="menu-item"><i data-lucide="bar-chart-3"></i> Relatórios</button>
          <button class="menu-item"><i data-lucide="settings"></i> Configurações</button>
        </nav>
      </aside>

      <main class="main-content">
        <header class="topbar">
          <button class="icon-button mobile-menu">
            <i data-lucide="menu"></i>
          </button>

          <div>
            <h2>Início</h2>
            <p>Organização é também um ato de fé e respeito.</p>
          </div>
        </header>

        <section id="page-content" class="page-content"></section>
      </main>
    </div>
  `
}