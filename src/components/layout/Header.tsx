export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-precya-border/70 bg-precya-bg/88 backdrop-blur">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-precya-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Ir para o conteudo
      </a>
      <div className="section-shell flex min-h-16 items-center justify-between gap-4">
        <a
          href="/"
          aria-label="Precya"
          className="text-lg font-semibold tracking-normal text-precya-ink"
        >
          Precya
        </a>
        <nav
          aria-label="Navegacao principal"
          className="hidden items-center gap-5 text-sm font-medium text-precya-muted md:flex"
        >
          <a href="#benefits">Beneficios</a>
          <a href="#simulator">Simulador</a>
          <a href="#pricing">Planos</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a
          href="#final-cta"
          className="rounded-full bg-precya-primary px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-precya-primary-dark focus:outline-none focus:ring-2 focus:ring-precya-primary focus:ring-offset-2"
        >
          Teste gratis
        </a>
      </div>
    </header>
  )
}
