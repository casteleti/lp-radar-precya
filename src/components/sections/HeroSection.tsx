import { Badge, ButtonPrimary, ButtonSecondary, Container, Motion, ProductMockup } from '../ui'

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden pb-14 pt-10 sm:pt-14 lg:pb-20 lg:pt-20"
      aria-labelledby="hero-title"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_20%_18%,rgba(199,184,255,0.24),transparent_28rem),radial-gradient(circle_at_86%_16%,rgba(246,234,216,0.72),transparent_24rem)]" />
      <Container className="relative grid items-center gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:gap-14">
        <div>
          <Badge>✨ Precificação inteligente para clínicas estéticas</Badge>
          <h1
            id="hero-title"
            className="text-hero mt-5 max-w-4xl text-balance font-semibold tracking-[-0.015em] text-text-primary"
          >
            Sua agenda está cheia. Mas você sabe quanto realmente sobra?
          </h1>
          <p className="text-body mt-5 max-w-2xl text-pretty text-text-secondary">
            A maioria das clínicas fatura bem e ainda assim sente que o dinheiro some. O Precya
            mostra, em segundos, se você está lucrando de verdade ou pagando para trabalhar.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonPrimary href="#preco" className="w-full sm:w-auto sm:px-7">
              Quero testar grátis
            </ButtonPrimary>
            <ButtonSecondary href="#demo" className="w-full sm:w-auto">
              Ver demo visual
            </ButtonSecondary>
          </div>

          <div className="mt-5 flex flex-wrap gap-2 text-caption font-medium text-text-secondary">
            <span className="rounded-full border border-white/80 bg-surface/70 px-3 py-2 shadow-soft backdrop-blur">
              Sem cartão de crédito
            </span>
            <span className="rounded-full border border-white/80 bg-surface/70 px-3 py-2 shadow-soft backdrop-blur">
              Começa em menos de 5 minutos
            </span>
          </div>
          <div className="mt-5 rounded-[1.25rem] border border-white/80 bg-white/62 p-4 shadow-soft backdrop-blur">
            <p className="text-caption font-medium text-text-primary">
              +1.200 simulações já realizadas por clínicas estéticas
            </p>
            <p className="text-caption mt-2 text-text-secondary">
              ★★★★★ “Finalmente entendi minha margem de verdade.” — Dra. Ana Paula, SP
            </p>
          </div>
        </div>

        <Motion variant="scale-in" delay={120}>
          <div className="float-soft relative mx-auto w-full max-w-[27.5rem]">
            <div className="absolute -right-8 top-8 h-44 w-44 rounded-full bg-primary-light/24 blur-3xl" />
            <div className="absolute -bottom-7 left-3 h-32 w-32 rounded-full bg-champagne/70 blur-3xl" />
            <ProductMockup />
          </div>
        </Motion>
      </Container>
    </section>
  )
}
