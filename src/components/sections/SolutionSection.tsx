import { solutionBenefits, solutionInputs } from '../../data/landing'
import {
  ButtonPrimary,
  Container,
  Motion,
  ProductMockup,
  SectionSubtitle,
  SectionTitle,
} from '../ui'

const resultLabels = [
  'Preço mínimo seguro',
  'Lucro real',
  'Margem protegida',
  'Comissão calculada',
  'Impacto do desconto',
  'Clareza financeira',
]

export function SolutionSection() {
  return (
    <section
      id="solucao"
      className="relative overflow-hidden bg-surface-warm py-16 md:py-24"
      aria-labelledby="solution-title"
    >
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute right-[-10rem] top-24 h-96 w-96 rounded-full bg-primary-light/28 blur-3xl" />
      <div className="absolute bottom-12 left-[-8rem] h-72 w-72 rounded-full bg-[#DDE8D8]/80 blur-3xl" />

      <Container>
        <div className="relative">
          <Motion className="mx-auto max-w-3xl text-center">
            <SectionTitle eyebrow="Solução" id="solution-title">
              O Precya transforma a confusão financeira em uma resposta clara.
            </SectionTitle>
            <SectionSubtitle>
              Sem planilha. Sem fórmula. Sem precisar entender de finanças. Você informa o
              procedimento e o Precya calcula tudo em tempo real.
            </SectionSubtitle>
          </Motion>

          <div className="mt-11 grid gap-6 lg:grid-cols-[0.82fr_1.05fr_0.92fr] lg:items-center">
            <Motion>
              <div className="rounded-[2rem] bg-[#F6EFEA]/80 p-5 shadow-soft ring-1 ring-white/70 md:p-6">
                <StageHeader number="01" title="Você informa" icon={<InputIcon />} />
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {solutionInputs.map((item, index) => (
                    <span
                      key={item}
                      className="rounded-full bg-white/78 px-4 py-2.5 text-sm font-semibold text-primary-dark shadow-soft ring-1 ring-white/80"
                      style={{ transitionDelay: `${index * 35}ms` }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <p className="text-caption mt-5 text-text-secondary">
                  Dados simples do atendimento entram sem aparência de formulário pesado.
                </p>
              </div>
            </Motion>

            <Motion delay={110} variant="scale-in">
              <div className="relative">
                <FlowArrow className="left-[-2.5rem] top-1/2 hidden -translate-y-1/2 rotate-[-8deg] lg:block" />
                <FlowArrow className="right-[-2.5rem] top-1/2 hidden -translate-y-1/2 rotate-[8deg] scale-x-[-1] lg:block" />
                <FlowArrow className="left-1/2 top-[-1.5rem] -translate-x-1/2 rotate-90 lg:hidden" />
                <FlowArrow className="bottom-[-1.5rem] left-1/2 -translate-x-1/2 rotate-90 lg:hidden" />

                <div className="relative rounded-[2.5rem] bg-gradient-to-br from-primary-dark via-primary to-primary-bright p-[1px] shadow-premium">
                  <div className="rounded-[2.45rem] bg-white/72 p-4 backdrop-blur-xl">
                    <div className="mb-4 flex items-center justify-between px-2 pt-1">
                      <div>
                        <p className="text-microcopy font-semibold uppercase tracking-[0.18em] text-primary">
                          02 · Precya processa
                        </p>
                        <h3 className="mt-1 text-2xl font-semibold text-text-primary">
                          Inteligência trabalhando
                        </h3>
                      </div>
                      <span
                        className="grid h-13 w-13 place-items-center rounded-[1.25rem] bg-primary text-white shadow-soft"
                        aria-hidden="true"
                      >
                        <ProcessIcon />
                      </span>
                    </div>
                    <ProductMockup
                      compact
                      className="float-soft max-w-full border-white/90 bg-white/82"
                    />
                  </div>
                </div>
              </div>
            </Motion>

            <Motion delay={180}>
              <div className="rounded-[2rem] bg-[#EEF6EB]/88 p-5 shadow-soft ring-1 ring-white/70 md:p-6">
                <StageHeader number="03" title="Você recebe" icon={<ResultIcon />} />
                <div className="mt-6 grid gap-3">
                  {resultLabels.map((label, index) => {
                    const benefit = solutionBenefits[index]

                    return (
                      <div
                        key={label}
                        className="flex items-center gap-3 rounded-[1.15rem] bg-white/72 px-3.5 py-3 ring-1 ring-white/80"
                      >
                        <span
                          className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-success/10 text-success"
                          aria-hidden="true"
                        >
                          <CheckIcon />
                        </span>
                        <div className="min-w-0">
                          <p className="font-semibold leading-snug text-text-primary">
                            {benefit?.title ?? label}
                          </p>
                          <p className="text-microcopy mt-0.5 text-text-secondary">{label}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </Motion>
          </div>

          <Motion delay={230}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
              <ButtonPrimary href="#demo" className="w-full sm:w-auto sm:px-7">
                Simular meu primeiro procedimento grátis
              </ButtonPrimary>
              <p className="text-caption max-w-xs text-text-secondary">
                Veja o impacto antes de responder no WhatsApp.
              </p>
            </div>
          </Motion>
        </div>
      </Container>
    </section>
  )
}

function StageHeader({
  number,
  title,
  icon,
}: {
  number: string
  title: string
  icon: React.ReactNode
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-microcopy font-semibold uppercase tracking-[0.18em] text-text-secondary">
          {number}
        </p>
        <h3 className="mt-1 text-2xl font-semibold text-text-primary">{title}</h3>
      </div>
      <span
        className="grid h-13 w-13 shrink-0 place-items-center rounded-[1.25rem] bg-white/78 text-primary-dark shadow-soft ring-1 ring-white/80"
        aria-hidden="true"
      >
        {icon}
      </span>
    </div>
  )
}

function FlowArrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 44"
      className={`absolute z-10 h-11 w-28 text-primary-light ${className ?? ''}`}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 23c28-18 61-18 96-2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path
        d="m96 10 15 15-20 8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  )
}

function InputIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <path
        d="M5 6.5h14M5 12h10M5 17.5h7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.9"
      />
      <path
        d="M17 15.5 19.5 18 22 14"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.9"
      />
    </svg>
  )
}

function ProcessIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <path
        d="M12 3.5v3M12 17.5v3M20.5 12h-3M6.5 12h-3M18 6l-2.1 2.1M8.1 15.9 6 18M18 18l-2.1-2.1M8.1 8.1 6 6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function ResultIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <path
        d="m5 13 4 4L19 7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M4.5 5.5h15v13h-15v-13Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
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
