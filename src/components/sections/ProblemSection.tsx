import { invisiblePainItems, problemCards } from '../../data/landing'
import { Card, Container, Motion, SectionSubtitle, SectionTitle } from '../ui'

export function ProblemSection() {
  return (
    <section className="bg-lilac/28 py-14 md:py-20" aria-labelledby="problem-title">
      <Container>
        <Motion>
          <SectionTitle eyebrow="Problema" id="problem-title">
            Você dá desconto, atende bem, trabalha muito. E no fim do mês... o caixa não fecha.
          </SectionTitle>
          <SectionSubtitle>
            Não é falta de paciente. Não é falta de esforço. É que a maioria das clínicas precifica
            no feeling e descobre o prejuízo tarde demais.
          </SectionSubtitle>
        </Motion>

        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {invisiblePainItems.map((item, index) => (
            <Motion key={item} delay={index * 55}>
              <div className="rounded-[1.2rem] border border-white/80 bg-white/64 px-4 py-3 text-caption font-medium text-text-secondary shadow-soft backdrop-blur">
                {item}
              </div>
            </Motion>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

        <Motion delay={180}>
          <p className="text-body mt-8 max-w-3xl text-text-secondary">
            Se alguma dessas frases soa familiar, você não está sozinha. E existe uma saída mais
            simples do que você imagina.
          </p>
        </Motion>
      </Container>
    </section>
  )
}
