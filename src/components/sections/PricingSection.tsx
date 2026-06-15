import { pricingFeatures } from '../../data/landing'
import { Badge, ButtonPrimary, Card, Container, Motion, SectionSubtitle, SectionTitle } from '../ui'

export function PricingSection() {
  return (
    <section id="preco" className="py-14 md:py-20" aria-labelledby="pricing-title">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Motion>
            <SectionTitle eyebrow="Preco" id="pricing-title">
              Menos que o valor perdido em um desconto errado.
            </SectionTitle>
            <SectionSubtitle>
              Uma decisao de desconto sem margem clara pode custar mais do que uma ferramenta
              simples para proteger seus procedimentos.
            </SectionSubtitle>
          </Motion>

          <Motion variant="scale-in" delay={120}>
            <Card elevated className="border-primary-light/50 ring-1 ring-primary-light/20">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <Badge>Plano Profissional</Badge>
                  <h3 className="mt-4 text-2xl font-semibold text-text-primary">
                    Precya Profissional
                  </h3>
                  <p className="text-caption mt-2 text-text-secondary">
                    Para clinicas que querem simular procedimentos com mais seguranca.
                  </p>
                </div>
                <p className="text-left sm:text-right">
                  <span className="block text-4xl font-semibold text-text-primary">R$ XX</span>
                  <span className="text-caption font-medium text-text-secondary">/mes</span>
                </p>
              </div>

              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {pricingFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm font-medium text-text-secondary"
                  >
                    <span
                      className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-success/10 text-success"
                      aria-hidden="true"
                    >
                      <CheckIcon />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <ButtonPrimary href="#final-cta" className="w-full">
                  Comecar teste gratis
                </ButtonPrimary>
                <div className="mt-3 flex flex-wrap justify-center gap-2 text-microcopy font-semibold text-text-secondary">
                  <span className="rounded-full bg-background px-3 py-1.5">
                    Cancele quando quiser
                  </span>
                  <span className="rounded-full bg-background px-3 py-1.5">Sem cartao</span>
                </div>
              </div>
            </Card>
          </Motion>
        </div>
      </Container>
    </section>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
      <path
        d="M3.5 8.2 6.7 11.4 12.7 4.8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
