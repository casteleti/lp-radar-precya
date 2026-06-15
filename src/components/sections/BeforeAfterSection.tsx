import { afterItems, beforeItems } from '../../data/landing'
import { Card, Container, Motion, SectionSubtitle, SectionTitle } from '../ui'

export function BeforeAfterSection() {
  return (
    <section className="py-14 md:py-20" aria-labelledby="before-after-title">
      <Container>
        <Motion>
          <SectionTitle eyebrow="Antes e depois" id="before-after-title">
            Da decisao no improviso para uma resposta clara em segundos.
          </SectionTitle>
          <SectionSubtitle>
            A mudanca nao e ter mais planilhas. E enxergar o que protege o lucro antes de conceder o
            desconto.
          </SectionSubtitle>
        </Motion>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <ComparisonCard title="Antes" items={beforeItems} tone="danger" />
          <ComparisonCard title="Depois" items={afterItems} tone="success" />
        </div>
      </Container>
    </section>
  )
}

function ComparisonCard({
  title,
  items,
  tone,
}: {
  title: string
  items: string[]
  tone: 'danger' | 'success'
}) {
  return (
    <Motion delay={tone === 'success' ? 120 : 0}>
      <Card elevated className={tone === 'success' ? 'border-success/25' : 'border-danger/20'}>
        <h3 className="text-2xl font-semibold text-text-primary">{title}</h3>
        <ul className="mt-5 space-y-3">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 text-sm font-medium text-text-secondary"
            >
              <span
                className={`grid h-7 w-7 shrink-0 place-items-center rounded-full ${
                  tone === 'success' ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'
                }`}
                aria-hidden="true"
              >
                {tone === 'success' ? '+' : '-'}
              </span>
              {item}
            </li>
          ))}
        </ul>
      </Card>
    </Motion>
  )
}
