export function renderHome() {
  return `
    <section class="hero-card">
      <div>
        <span class="eyebrow">Sistema Templo Tatuy</span>
        <h3>Organize rituais, materiais e modelos com simplicidade.</h3>
        <p>Fluxo pensado para pessoas iniciantes, com organização profissional por trás.</p>
      </div>

      <button class="primary-button">
        <i data-lucide="plus-circle"></i>
        Criar Ritual
      </button>
    </section>

    <div class="quick-grid">
      <article class="quick-card">
        <i data-lucide="calendar-days"></i>
        <h4>Novo Ritual</h4>
        <p>Escolha um modelo, informe data e participantes.</p>
      </article>

      <article class="quick-card">
        <i data-lucide="scroll-text"></i>
        <h4>Biblioteca Ritualística</h4>
        <p>Cadastre modelos como Ebô Exu, Egum e outros.</p>
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
  `
}