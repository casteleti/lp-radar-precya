import { solutionBenefits, solutionInputs } from '../../data/landing'
import {
  ButtonPrimary,
  Card,
  Container,
  IconWrapper,
  Motion,
  SectionSubtitle,
  SectionTitle,
} from '../ui'

export function SolutionSection() {
  return (
    <section id="solucao" className="py-14 md:py-20" aria-labelledby="solution-title">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Motion>
            <SectionTitle eyebrow="Solução" id="solution-title">
              O Precya transforma a confusão financeira em uma resposta clara.
            </SectionTitle>
            <SectionSubtitle>
              Sem planilha. Sem fórmula. Sem precisar entender de finanças. Você informa o
              procedimento e o Precya calcula tudo em tempo real.
            </SectionSubtitle>
            <ButtonPrimary href="#demo" className="mt-7 w-full sm:w-auto">
              Simular meu primeiro procedimento grátis
            </ButtonPrimary>
            <p className="text-caption mt-3 font-medium text-text-secondary">
              Veja o impacto antes de responder no WhatsApp.
            </p>
          </Motion>

          <div className="grid gap-4 md:grid-cols-2">
            <Motion>
              <Card elevated>
                <h3 className="text-xl font-semibold text-text-primary">Você informa</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {solutionInputs.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-lilac/80 px-3 py-2 text-sm font-medium text-primary-dark"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            </Motion>

            <Motion delay={120}>
              <Card elevated>
                <h3 className="text-xl font-semibold text-text-primary">O Precya entrega</h3>
                <ul className="mt-5 space-y-4">
                  {solutionBenefits.map((item) => (
                    <li
                      key={item.title}
                      className="flex items-start gap-3 text-sm font-medium text-text-secondary"
                    >
                      <IconWrapper tone="success" className="mt-0.5 h-7 w-7 rounded-lg">
                        <CheckIcon />
                      </IconWrapper>
                      <span>
                        <span className="block font-semibold text-text-primary">{item.title}</span>
                        <span className="mt-1 block text-caption text-text-secondary">
                          {item.description}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Motion>
          </div>
        </div>
      </Container>
    </section>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none">
      <path
        d="m5 10.3 3.1 3.1L15 6.6"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
