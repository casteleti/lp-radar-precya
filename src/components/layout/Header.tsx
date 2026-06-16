import { BrandLogo, ButtonPrimary, Container } from '../ui'

const navItems = [
  { href: '#solucao', label: 'Solução' },
  { href: '#demo', label: 'Demo' },
  { href: '#preco', label: 'Preço' },
  { href: '#faq', label: 'FAQ' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/70 bg-background/78 backdrop-blur-xl">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
      >
        Ir para o conteudo
      </a>
      <Container className="flex min-h-16 items-center justify-between gap-4">
        <a href="#main-content" aria-label="Radar Precya" className="flex items-center">
          <BrandLogo />
        </a>

        <nav aria-label="Navegacao principal" className="hidden items-center gap-4 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center rounded-full px-3 text-sm font-medium text-text-secondary transition hover:bg-lilac/70 hover:text-primary-dark"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <ButtonPrimary
          href="#preco"
          className="!min-h-10 rounded-full px-4 py-2 text-xs font-semibold sm:text-sm"
        >
          Teste grátis
        </ButtonPrimary>
      </Container>
    </header>
  )
}
