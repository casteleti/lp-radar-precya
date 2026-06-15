import { useState } from 'react'
import {
  ButtonSecondary,
  Container,
  DiscountMockup,
  Motion,
  SectionSubtitle,
  SectionTitle,
} from '../ui'

const discountOptions = [10, 25, 35]

export function DemoSection() {
  const [discount, setDiscount] = useState(25)

  return (
    <section id="demo" className="bg-surface/55 py-14 md:py-20" aria-labelledby="demo-title">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Motion>
            <SectionTitle eyebrow="Demonstracao" id="demo-title">
              Veja o impacto do desconto antes de responder a paciente.
            </SectionTitle>
            <SectionSubtitle>
              Esta demo e visual e nao usa backend. Ela mostra como a decisao fica mais clara quando
              lucro, margem e alerta aparecem juntos.
            </SectionSubtitle>
            <div
              className="mt-7 flex gap-2"
              role="group"
              aria-label="Selecionar desconto da demonstracao"
            >
              {discountOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  aria-pressed={discount === option}
                  onClick={() => setDiscount(option)}
                  className={`min-h-12 rounded-xl px-4 py-3 text-sm font-extrabold transition ${
                    discount === option
                      ? 'bg-primary text-white shadow-soft'
                      : 'border border-border/80 bg-surface/88 text-primary-dark hover:border-primary-light hover:bg-white'
                  }`}
                >
                  {option}%
                </button>
              ))}
            </div>
            <ButtonSecondary href="#preco" className="mt-5 w-full sm:w-auto">
              Quero testar com meus procedimentos
            </ButtonSecondary>
          </Motion>

          <Motion variant="scale-in" delay={120}>
            <DiscountMockup discount={discount} />
          </Motion>
        </div>
      </Container>
    </section>
  )
}
