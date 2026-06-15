import { problemCards } from '../../data/landing'
import { Card, Container, Motion, SectionSubtitle, SectionTitle } from '../ui'

export function ProblemSection() {
  return (
    <section className="bg-surface/55 py-14 md:py-20" aria-labelledby="problem-title">
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
                  className="grid h-10 w-10 place-items-center rounded-xl bg-danger/10 text-lg"
                  aria-hidden="true"
                >
                  x
                </span>
                <p className="mt-5 text-lg font-extrabold text-text-primary">{item}</p>
              </Card>
            </Motion>
          ))}
        </div>
      </Container>
    </section>
  )
}
