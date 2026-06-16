import { ButtonPrimary, ButtonSecondary, Container, Motion } from '../ui'

export function FinalCTASection() {
  return (
    <section id="final-cta" className="py-14 md:py-20" aria-labelledby="final-cta-title">
      <Container>
        <Motion variant="scale-in">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-primary-dark p-7 text-white shadow-premium md:p-12">
            <div className="max-w-3xl">
              <p className="text-microcopy font-semibold uppercase tracking-[0.18em] text-primary-light">
                Próximo passo
              </p>
              <h2 id="final-cta-title" className="text-headline mt-4 font-semibold">
                Você já trabalhou demais sem saber quanto sobrava. Isso pode mudar hoje.
              </h2>
              <p className="text-body mt-4 text-white/78">
                O Precya não vai resolver tudo. Mas vai te dar o que você mais precisa agora:
                clareza, segurança e controle. Sem planilha. Sem ERP. Sem complexidade.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonPrimary
                href="#preco"
                className="bg-white text-primary-dark hover:bg-primary-light/90 hover:text-primary-dark"
              >
                Quero testar o Precya grátis
              </ButtonPrimary>
              <ButtonSecondary
                href="https://wa.me/5500000000000"
                className="border-white/20 bg-white/8 text-white hover:bg-white/14"
              >
                Falar no WhatsApp
              </ButtonSecondary>
            </div>
            <p className="text-caption mt-4 font-medium text-white/72">
              Sem cartão. Sem compromisso. Começa em menos de 5 minutos.
            </p>
          </div>
        </Motion>
      </Container>
    </section>
  )
}
