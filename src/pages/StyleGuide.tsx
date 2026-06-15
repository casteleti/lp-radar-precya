import {
  Badge,
  BenefitCard,
  ButtonPrimary,
  ButtonSecondary,
  Card,
  Container,
  FAQItem,
  FeatureCard,
  IconWrapper,
  Motion,
  PricingCard,
  SectionSubtitle,
  SectionTitle,
  TestimonialCard,
} from '../components/ui'

const colors = [
  ['Primary Dark', '#2E1A73'],
  ['Primary', '#5E3ECF'],
  ['Primary Bright', '#7C4DFF'],
  ['Primary Light', '#B79CFF'],
  ['Background', '#FAF9F8'],
  ['Surface', '#FFFFFF'],
  ['Text Primary', '#1D1836'],
  ['Text Secondary', '#6F6790'],
  ['Success', '#2BAE66'],
  ['Warning', '#F5A623'],
  ['Danger', '#E65A5A'],
  ['Border', '#ECE7F6'],
]

const spacing = [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96]
const radii = [
  ['sm', '8px'],
  ['md', '12px'],
  ['lg', '16px'],
  ['xl', '20px'],
  ['2xl', '28px'],
]

export function StyleGuide() {
  return (
    <main className="min-h-svh pb-20">
      <section className="border-b border-border bg-surface/70 py-10 backdrop-blur">
        <Container>
          <Badge>Design System</Badge>
          <h1 className="text-hero mt-5 max-w-4xl font-extrabold text-text-primary">
            Precya visual foundation
          </h1>
          <p className="text-body mt-5 max-w-2xl text-text-secondary">
            Guia temporario para validar tokens, componentes, estados e movimento antes da
            construcao da landing page.
          </p>
        </Container>
      </section>

      <StyleSection eyebrow="Tokens" title="Cores">
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {colors.map(([name, value]) => (
            <Card key={name} className="p-4">
              <div
                className="h-20 rounded-xl border border-border"
                style={{ backgroundColor: value }}
              />
              <p className="mt-4 font-extrabold text-text-primary">{name}</p>
              <p className="text-caption font-medium text-text-secondary">{value}</p>
            </Card>
          ))}
        </div>
      </StyleSection>

      <StyleSection eyebrow="Tokens" title="Tipografia">
        <div className="space-y-5">
          <TypeSample label="Hero" className="text-hero font-extrabold" />
          <TypeSample label="Headline" className="text-headline font-extrabold" />
          <TypeSample label="Subheadline" className="text-subheadline font-bold" />
          <TypeSample label="Body" className="text-body" />
          <TypeSample label="Caption" className="text-caption" />
          <TypeSample
            label="Microcopy"
            className="text-microcopy font-bold uppercase tracking-[0.12em]"
          />
        </div>
      </StyleSection>

      <StyleSection eyebrow="Tokens" title="Espacamento, radius e sombras">
        <div className="grid gap-6 lg:grid-cols-3">
          <Card>
            <h3 className="font-extrabold">Spacing</h3>
            <div className="mt-5 space-y-3">
              {spacing.map((value) => (
                <div key={value} className="flex items-center gap-3">
                  <span className="w-10 text-microcopy font-bold text-text-secondary">
                    {value}px
                  </span>
                  <span className="h-3 rounded-full bg-primary-light" style={{ width: value }} />
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <h3 className="font-extrabold">Radius</h3>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {radii.map(([name, value]) => (
                <div
                  key={name}
                  className="border border-border bg-primary-light/18 p-4"
                  style={{ borderRadius: value }}
                >
                  <p className="font-bold">{name}</p>
                  <p className="text-caption text-text-secondary">{value}</p>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <h3 className="font-extrabold">Shadows</h3>
            <div className="mt-5 space-y-4">
              <div className="rounded-xl border border-border bg-surface p-5 shadow-soft">soft</div>
              <div className="rounded-xl border border-border bg-surface p-5 shadow-card">card</div>
              <div
                className="rounded-xl border border-border bg-surface p-5"
                style={{ boxShadow: 'var(--shadow-focus)' }}
              >
                focus
              </div>
            </div>
          </Card>
        </div>
      </StyleSection>

      <StyleSection eyebrow="Components" title="Botoes e badges">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <Card>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonPrimary>Acao principal</ButtonPrimary>
              <ButtonSecondary>Acao secundaria</ButtonSecondary>
              <ButtonPrimary aria-disabled="true" className="pointer-events-none opacity-55">
                Estado inativo
              </ButtonPrimary>
            </div>
          </Card>
          <Card>
            <div className="flex flex-wrap gap-2">
              <Badge>Primary</Badge>
              <Badge tone="success">Success</Badge>
              <Badge tone="warning">Warning</Badge>
              <Badge tone="danger">Danger</Badge>
              <Badge tone="neutral">Neutral</Badge>
            </div>
          </Card>
        </div>
      </StyleSection>

      <StyleSection eyebrow="Components" title="Cards e iconografia">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<MiniIcon />}
            title="FeatureCard"
            description="Componente para recursos explicados com clareza e hierarquia visual leve."
          />
          <BenefitCard
            icon={<MiniIcon />}
            title="BenefitCard"
            description="Componente compacto para beneficios diretos e leitura rapida em mobile."
          />
          <Card elevated>
            <IconWrapper tone="success">
              <MiniIcon />
            </IconWrapper>
            <h3 className="mt-5 font-extrabold">Card elevado</h3>
            <p className="text-caption mt-2 text-text-secondary">
              Superficie premium com borda suave e sombra controlada.
            </p>
          </Card>
        </div>
      </StyleSection>

      <StyleSection eyebrow="Components" title="Prova, FAQ e pricing">
        <div className="grid gap-5 lg:grid-cols-3">
          <TestimonialCard
            quote="Exemplo de texto curto para validar ritmo, contraste e espaco interno."
            name="Nome exemplo"
            role="Perfil exemplo"
          />
          <div className="space-y-3">
            <FAQItem
              question="Pergunta exemplo"
              answer="Resposta exemplo para validar o acordeon e os estados de abertura."
              defaultOpen
            />
            <FAQItem
              question="Outra pergunta"
              answer="Resposta compacta para verificar altura e leitura."
            />
          </div>
          <PricingCard
            title="Plano exemplo"
            description="Descricao curta para validar composicao."
            price="R$ --"
            badge="Popular"
            highlighted
            ctaLabel="Acao exemplo"
            features={['Item de valor', 'Item de seguranca', 'Item de suporte']}
          />
        </div>
      </StyleSection>

      <StyleSection eyebrow="Motion" title="Animacoes">
        <div className="grid gap-5 md:grid-cols-3">
          <Motion>
            <Card>
              <h3 className="font-extrabold">Fade Up</h3>
              <p className="text-caption mt-2 text-text-secondary">Entrada vertical discreta.</p>
            </Card>
          </Motion>
          <Motion variant="fade-in" delay={90}>
            <Card>
              <h3 className="font-extrabold">Fade In</h3>
              <p className="text-caption mt-2 text-text-secondary">Aparecimento simples.</p>
            </Card>
          </Motion>
          <Motion variant="scale-in" delay={180}>
            <Card>
              <h3 className="font-extrabold">Scale In</h3>
              <p className="text-caption mt-2 text-text-secondary">Escala sutil para detalhes.</p>
            </Card>
          </Motion>
        </div>
      </StyleSection>
    </main>
  )
}

function StyleSection({
  children,
  eyebrow,
  title,
}: {
  children: React.ReactNode
  eyebrow: string
  title: string
}) {
  return (
    <section className="py-12 md:py-16" aria-labelledby={title.toLowerCase().replaceAll(' ', '-')}>
      <Container>
        <SectionTitle eyebrow={eyebrow} id={title.toLowerCase().replaceAll(' ', '-')}>
          {title}
        </SectionTitle>
        <SectionSubtitle>
          Bloco de validacao visual para consistencia, acessibilidade e reuso.
        </SectionSubtitle>
        <div className="mt-8">{children}</div>
      </Container>
    </section>
  )
}

function TypeSample({ label, className }: { label: string; className: string }) {
  return (
    <Card className="p-5">
      <p className="text-microcopy mb-3 font-bold uppercase tracking-[0.12em] text-primary">
        {label}
      </p>
      <p className={className}>Texto exemplo para validar escala e leitura.</p>
    </Card>
  )
}

function MiniIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M5 12.5 9.2 16.7 19 6.8"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
