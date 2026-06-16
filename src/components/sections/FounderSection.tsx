import { Card, Container, Motion, SectionSubtitle, SectionTitle } from '../ui'

export function FounderSection() {
  return (
    <section className="bg-lilac/28 py-14 md:py-20" aria-labelledby="founder-title">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Motion>
            <SectionTitle eyebrow="Humanização" id="founder-title">
              Criado para quem atende, cuida e ainda precisa cuidar do financeiro.
            </SectionTitle>
            <SectionSubtitle>
              Clínicas estéticas não precisam de mais um sistema pesado. Precisam de clareza rápida,
              na hora certa, sem julgamento. Sem linguagem financeira complicada. Sem ERP. Sem
              planilha.
            </SectionSubtitle>
          </Motion>

          <Motion variant="scale-in" delay={120}>
            <Card elevated className="overflow-hidden p-0">
              <div className="aspect-[4/3] bg-lilac/70 p-6">
                <div className="flex h-full flex-col justify-between rounded-[1.65rem] border border-white/80 bg-white/72 p-5 shadow-soft backdrop-blur">
                  <div className="flex items-center gap-4">
                    <div className="grid h-16 w-16 place-items-center rounded-2xl bg-primary text-2xl font-semibold text-white">
                      P
                    </div>
                    <div>
                      <p className="font-semibold text-text-primary">Depoimento de cliente</p>
                      <p className="text-caption text-text-secondary">Camila R., esteticista, MG</p>
                    </div>
                  </div>
                  <p className="text-body text-text-secondary">
                    “Antes eu dava desconto no feeling e ficava na dúvida se tinha feito certo.
                    Agora eu respondo a paciente com o número na mão.”
                  </p>
                </div>
              </div>
            </Card>
          </Motion>
        </div>
      </Container>
    </section>
  )
}
