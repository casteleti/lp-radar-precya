import { ButtonPrimary, ButtonSecondary, Container, Motion } from '../ui'

export function FinalCTASection() {
  return (
    <section id="final-cta" className="py-14 md:py-20" aria-labelledby="final-cta-title">
      <Container>
        <Motion variant="scale-in">
          <div className="overflow-hidden rounded-[2rem] border border-primary-light/40 bg-primary-dark p-7 text-white shadow-card md:p-12">
            <div className="max-w-3xl">
              <p className="text-microcopy font-extrabold uppercase tracking-[0.16em] text-primary-light">
                Proximo passo
              </p>
              <h2 id="final-cta-title" className="text-headline mt-4 font-extrabold">
                Pare de decidir descontos no improviso.
              </h2>
              <p className="text-body mt-4 text-white/78">
                Use o Precya para enxergar margem, lucro e desconto antes de responder sua paciente.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonPrimary
                href="#preco"
                className="bg-white text-primary-dark hover:bg-primary-light/90 hover:text-primary-dark"
              >
                Quero testar o Precya
              </ButtonPrimary>
              <ButtonSecondary
                href="https://wa.me/5500000000000"
                className="border-white/20 bg-white/8 text-white hover:bg-white/14"
              >
                Falar no WhatsApp
              </ButtonSecondary>
            </div>
          </div>
        </Motion>
      </Container>
    </section>
  )
}
