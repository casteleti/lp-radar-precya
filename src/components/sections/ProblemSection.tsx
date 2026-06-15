import { problemCards } from '../../data/landing'
import { Card, Container, Motion, SectionSubtitle, SectionTitle } from '../ui'

export function ProblemSection() {
  return (
    <section className="bg-lilac/28 py-14 md:py-20" aria-labelledby="problem-title">
      <Container>
        <Motion>
          <SectionTitle eyebrow="Problema" id="problem-title">
            A maioria das clinicas da desconto sem saber se ainda esta lucrando.
          </SectionTitle>
          <SectionSubtitle>
            Quando a decisao depende de pressa, intuicao ou conversa no WhatsApp, a margem costuma
            ficar invisivel.
          </SectionSubtitle>
        </Motion>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problemCards.map((item, index) => (
            <Motion key={item} delay={index * 70}>
              <Card className="h-full">
                <span
                  className="grid h-10 w-10 place-items-center rounded-xl bg-danger/10 text-danger"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none">
                    <path
                      d="m5.5 5.5 9 9m0-9-9 9"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2.4"
                    />
                  </svg>
                </span>
                <p className="mt-5 text-lg font-semibold text-text-primary">{item}</p>
              </Card>
            </Motion>
          ))}
        </div>
      </Container>
    </section>
  )
}
