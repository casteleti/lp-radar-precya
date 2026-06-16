import { invisiblePainItems, problemCards } from '../../data/landing'
import { Container, Motion, SectionSubtitle, SectionTitle } from '../ui'

export function ProblemSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#F6EFEA] py-16 md:py-24"
      aria-labelledby="problem-title"
    >
      <div className="absolute left-[-8rem] top-[-10rem] h-80 w-80 rounded-full bg-[#E8C9CF]/55 blur-3xl" />
      <div className="absolute bottom-0 right-[-7rem] h-72 w-72 rounded-full bg-champagne/80 blur-3xl" />

      <Container>
        <div className="relative grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <Motion>
            <SectionTitle eyebrow="Problema" id="problem-title">
              Você dá desconto, atende bem, trabalha muito. E no fim do mês... o caixa não fecha.
            </SectionTitle>
            <SectionSubtitle>
              Não é falta de paciente. Não é falta de esforço. É que a maioria das clínicas
              precifica no feeling e descobre o prejuízo tarde demais.
            </SectionSubtitle>

            <div className="mt-8 space-y-4">
              {invisiblePainItems.map((item, index) => (
                <Motion key={item} delay={index * 55}>
                  <div className="group flex items-start gap-4">
                    <span
                      className="grid h-12 w-12 shrink-0 place-items-center rounded-[1.1rem] bg-white/70 text-[#9A6470] shadow-soft ring-1 ring-white/80 transition group-hover:-translate-y-0.5 group-hover:bg-white"
                      aria-hidden="true"
                    >
                      {problemIcons[index] ?? <AlertIcon />}
                    </span>
                    <p className="text-body pt-2 font-medium text-text-primary">{item}</p>
                  </div>
                </Motion>
              ))}
            </div>

            <Motion delay={180}>
              <p className="text-body mt-9 max-w-2xl border-l-2 border-[#E8C9CF] pl-5 text-text-secondary">
                Se alguma dessas frases soa familiar, você não está sozinha. E existe uma saída mais
                simples do que você imagina.
              </p>
            </Motion>
          </Motion>

          <Motion delay={120} variant="scale-in">
            <div
              className="relative rounded-[2.2rem] border border-white/65 bg-white/42 p-5 shadow-premium backdrop-blur-xl md:p-7"
              aria-label="Jornada visual do problema de precificação"
            >
              <div className="absolute -right-4 -top-5 hidden h-24 w-24 rounded-full bg-[#E8C9CF]/55 blur-2xl md:block" />
              <div className="mb-6 flex items-center justify-between gap-5">
                <div>
                  <p className="text-microcopy font-semibold uppercase tracking-[0.18em] text-[#9A6470]">
                    Causa → consequência
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-text-primary">
                    O prejuízo não aparece de uma vez.
                  </h3>
                </div>
                <span
                  className="hidden h-16 w-16 shrink-0 place-items-center rounded-[1.35rem] bg-[#E8C9CF]/65 text-[#7D4A56] ring-1 ring-white/70 sm:grid"
                  aria-hidden="true"
                >
                  <CalculatorIcon />
                </span>
              </div>

              <ol className="relative space-y-0">
                {problemCards.map((item, index) => (
                  <li key={item} className="relative flex gap-4 pb-7 last:pb-0">
                    {index < problemCards.length - 1 ? (
                      <span
                        className="absolute left-6 top-12 h-[calc(100%-3rem)] w-px bg-gradient-to-b from-[#E8C9CF] to-primary-light/40"
                        aria-hidden="true"
                      />
                    ) : null}
                    <span
                      className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-surface text-primary-dark shadow-soft ring-1 ring-white/80"
                      aria-hidden="true"
                    >
                      {journeyIcons[index] ?? <AlertIcon />}
                    </span>
                    <div className="min-w-0 rounded-[1.35rem] bg-white/56 px-4 py-3 ring-1 ring-white/70 backdrop-blur-sm">
                      <span className="text-microcopy font-semibold uppercase tracking-[0.14em] text-text-secondary">
                        Passo {index + 1}
                      </span>
                      <p className="mt-1 text-lg font-semibold leading-snug text-text-primary">
                        {item}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Motion>
        </div>
      </Container>
    </section>
  )
}

const problemIcons = [<PhoneIcon />, <ClockIcon />, <MoneyIcon />, <AlertIcon />]
const journeyIcons = [<PhoneIcon />, <MoneyIcon />, <ClockIcon />, <AlertIcon />]

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <path
        d="M8 5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-3A2.5 2.5 0 0 1 8 18.5v-13Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M11 17.5h2" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      <path d="M10.7 7.4h2.6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7.5V12l3 2" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  )
}

function MoneyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <path d="M4 7.5h16v9H4v-9Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
      <path
        d="M8 12h.01M16 12h.01M12 14.3a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function CalculatorIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
      <path
        d="M7 3.8h10A2.2 2.2 0 0 1 19.2 6v12A2.2 2.2 0 0 1 17 20.2H7A2.2 2.2 0 0 1 4.8 18V6A2.2 2.2 0 0 1 7 3.8Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8 8h8M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  )
}

function AlertIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
      <path
        d="M12 4.5 21 19H3L12 4.5Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path d="M12 10v4M12 17h.01" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  )
}
