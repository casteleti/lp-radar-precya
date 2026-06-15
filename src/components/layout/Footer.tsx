import { Container } from '../ui'

const links = ['Politica de Privacidade', 'Termos de Uso', 'Contato', 'Instagram', 'WhatsApp']

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/72">
      <Container className="py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <a href="#main-content" aria-label="Precya" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary-dark text-sm font-extrabold text-white">
              P
            </span>
            <span className="font-extrabold text-text-primary">Precya</span>
          </a>

          <nav aria-label="Links do rodape" className="flex flex-wrap gap-x-5 gap-y-2">
            {links.map((link) => (
              <a
                key={link}
                href="#final-cta"
                className="text-caption font-bold text-text-secondary hover:text-primary"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
        <p className="text-microcopy mt-6 text-text-secondary">
          Precya. Landing page estatica para validacao de conversao.
        </p>
      </Container>
    </footer>
  )
}
