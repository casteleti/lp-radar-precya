import { Badge, ButtonPrimary, ButtonSecondary, Container, Motion, ProductMockup } from '../ui'

export function HeroSection() {
  return (
    <section className="overflow-hidden py-12 sm:py-16 lg:py-20" aria-labelledby="hero-title">
      <Container className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
        <Motion>
          <Badge>Precificacao inteligente para clinicas esteticas</Badge>
          <h1 id="hero-title" className="text-hero mt-5 max-w-4xl font-extrabold text-text-primary">
            Descubra em segundos quanto voce pode dar de desconto sem prejudicar seu lucro.
          </h1>
          <p className="text-body mt-5 max-w-2xl text-text-secondary">
            O Precya calcula automaticamente preco minimo, margem, lucro, comissao e impacto do
            desconto para voce parar de decidir no feeling.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonPrimary href="#preco" className="w-full sm:w-auto">
              Quero testar gratis
            </ButtonPrimary>
            <ButtonSecondary href="#demo" className="w-full sm:w-auto">
              Ver demo visual
            </ButtonSecondary>
          </div>

          <div className="mt-5 flex flex-wrap gap-3 text-caption font-bold text-text-secondary">
            <span className="rounded-full bg-surface px-3 py-2 shadow-soft">Sem cartao</span>
            <span className="rounded-full bg-surface px-3 py-2 shadow-soft">
              Configuracao em poucos minutos
            </span>
          </div>
        </Motion>

        <Motion variant="scale-in" delay={120}>
          <div className="relative">
            <div className="absolute -right-10 top-8 h-40 w-40 rounded-full bg-primary-light/24 blur-3xl" />
            <ProductMockup />
            <div className="mx-auto mt-4 w-[78%] rounded-[1.75rem] border border-border bg-surface p-3 shadow-soft md:hidden">
              <ProductMockup compact className="scale-[0.92] shadow-none" />
            </div>
          </div>
        </Motion>
      </Container>
    </section>
  )
}
