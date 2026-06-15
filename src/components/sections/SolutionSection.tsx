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
            <SectionTitle eyebrow="Solucao" id="solution-title">
              O Precya transforma decisoes financeiras confusas em numeros claros.
            </SectionTitle>
            <SectionSubtitle>
              Voce informa os dados do procedimento e recebe uma leitura simples sobre preco minimo,
              margem e impacto do desconto.
            </SectionSubtitle>
            <ButtonPrimary href="#demo" className="mt-7 w-full sm:w-auto">
              Simular meu primeiro procedimento
            </ButtonPrimary>
          </Motion>

          <div className="grid gap-4 md:grid-cols-2">
            <Motion>
              <Card elevated>
                <h3 className="text-xl font-extrabold text-text-primary">Voce informa</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {solutionInputs.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-primary-light/16 px-3 py-2 text-sm font-bold text-primary-dark"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            </Motion>

            <Motion delay={120}>
              <Card elevated>
                <h3 className="text-xl font-extrabold text-text-primary">O Precya entrega</h3>
                <ul className="mt-5 space-y-3">
                  {solutionBenefits.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm font-bold text-text-secondary"
                    >
                      <IconWrapper tone="success" className="h-7 w-7 rounded-lg">
                        <CheckIcon />
                      </IconWrapper>
                      {item}
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
