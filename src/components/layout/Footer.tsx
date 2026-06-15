export function Footer() {
  return (
    <footer className="border-t border-precya-border bg-white/60">
      <div className="section-shell flex flex-col gap-3 py-8 text-sm text-precya-muted md:flex-row md:items-center md:justify-between">
        <p>Precya. Estrutura inicial da landing page.</p>
        <nav aria-label="Links auxiliares" className="flex gap-4">
          <a href="#faq">Duvidas</a>
          <a href="#final-cta">Contato</a>
        </nav>
      </div>
    </footer>
  )
}
