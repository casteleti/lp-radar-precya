import { Badge, ButtonPrimary, ButtonSecondary, Container, Motion, ProductMockup } from '../ui'

export function HeroSection() {
  return (
    <section
      className="overflow-hidden pb-14 pt-10 sm:pt-14 lg:pb-20 lg:pt-20"
      aria-labelledby="hero-title"
    >
      <Container className="grid items-center gap-9 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
        <div>
          <Badge>Precificacao inteligente para clinicas esteticas</Badge>
          <h1
            id="hero-title"
            className="text-hero mt-5 max-w-4xl text-balance font-extrabold text-text-primary"
          >
            Descubra em segundos quanto voce pode dar de desconto sem prejudicar seu lucro.
          </h1>
          <p className="text-body mt-5 max-w-2xl text-pretty text-text-secondary">
            O Precya calcula automaticamente preco minimo, margem, lucro, comissao e impacto do
            desconto para voce parar de decidir no feeling.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonPrimary href="#preco" className="w-full sm:w-auto sm:px-7">
              Quero testar gratis
            </ButtonPrimary>
            <ButtonSecondary href="#demo" className="w-full sm:w-auto">
              Ver demo visual
            </ButtonSecondary>
          </div>

          <div className="mt-5 flex flex-wrap gap-2 text-caption font-bold text-text-secondary">
            <span className="rounded-full border border-border/70 bg-surface/80 px-3 py-2">
              Sem cartao
            </span>
            <span className="rounded-full border border-border/70 bg-surface/80 px-3 py-2">
              Configuracao em poucos minutos
            </span>
          </div>
        </div>

        <Motion variant="scale-in" delay={120}>
          <div className="relative mx-auto w-full max-w-[27rem]">
            <div className="absolute -right-8 top-8 h-40 w-40 rounded-full bg-primary-light/20 blur-3xl" />
            <div className="absolute -bottom-6 left-4 h-28 w-28 rounded-full bg-primary/10 blur-3xl" />
            <ProductMockup />
          </div>
        </Motion>
      </Container>
    </section>
  )
}
