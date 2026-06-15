import { Card, Container, Motion, SectionSubtitle, SectionTitle } from '../ui'

export function FounderSection() {
  return (
    <section className="bg-lilac/28 py-14 md:py-20" aria-labelledby="founder-title">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Motion>
            <SectionTitle eyebrow="Humanizacao" id="founder-title">
              Feito para clinicas que precisam decidir rapido, sem planilhas complicadas.
            </SectionTitle>
            <SectionSubtitle>
              A experiencia foi pensada para quem precisa responder pacientes, organizar
              procedimentos e preservar margem sem virar especialista em financas.
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
                      <p className="font-semibold text-text-primary">Espaco para foto ou video</p>
                      <p className="text-caption text-text-secondary">
                        fundadora, mockup futuro ou prova humana
                      </p>
                    </div>
                  </div>
                  <p className="text-body text-text-secondary">
                    Um bloco reservado para conectar tecnologia com acolhimento e decisao pratica.
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
