import { ButtonPrimary, Container } from '../ui'

const navItems = [
  { href: '#solucao', label: 'Solucao' },
  { href: '#demo', label: 'Demo' },
  { href: '#preco', label: 'Preco' },
  { href: '#faq', label: 'FAQ' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/86 backdrop-blur-xl">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
      >
        Ir para o conteudo
      </a>
      <Container className="flex min-h-16 items-center justify-between gap-4">
        <a href="#main-content" aria-label="Precya" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-sm font-extrabold text-white shadow-soft">
            P
          </span>
          <span className="text-lg font-extrabold text-text-primary">Precya</span>
        </a>

        <nav aria-label="Navegacao principal" className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center rounded-full px-2 text-sm font-bold text-text-secondary transition hover:bg-primary-light/10 hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <ButtonPrimary href="#preco" className="min-h-11 px-4 py-2 text-xs sm:text-sm">
          Teste gratis
        </ButtonPrimary>
      </Container>
    </header>
  )
}
