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
    <section id="demo" className="bg-champagne/18 py-14 md:py-20" aria-labelledby="demo-title">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Motion>
            <SectionTitle eyebrow="Demonstração" id="demo-title">
              Imagine: a paciente acabou de pedir desconto no WhatsApp. Você tem 3 minutos para
              responder.
            </SectionTitle>
            <SectionSubtitle>
              Com o Precya aberto, você move o slider de desconto e vê, em tempo real, o impacto no
              lucro, o valor mínimo que pode aceitar e se a margem ainda está protegida.
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
                  className={`min-h-12 rounded-[1rem] px-4 py-3 text-sm font-semibold transition ${
                    discount === option
                      ? 'bg-primary text-white shadow-soft'
                      : 'border border-white/80 bg-white/70 text-primary-dark hover:border-primary-light/70 hover:bg-white'
                  }`}
                >
                  {option}%
                </button>
              ))}
            </div>
            <ButtonSecondary href="#preco" className="mt-5 w-full sm:w-auto">
              Simular meu primeiro procedimento grátis
            </ButtonSecondary>
            <p className="text-caption mt-4 text-text-secondary">
              Exatamente assim. Simples. Em segundos. Na palma da mão.
            </p>
          </Motion>

          <Motion variant="scale-in" delay={120}>
            <DiscountMockup discount={discount} />
          </Motion>
        </div>
      </Container>
    </section>
  )
}
