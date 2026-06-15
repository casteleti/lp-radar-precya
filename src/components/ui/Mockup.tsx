import { cn } from '../../lib/cn'

type ProductMockupProps = {
  compact?: boolean
  className?: string
}

export function ProductMockup({ compact = false, className }: ProductMockupProps) {
  return (
    <div
      className={cn(
        'relative mx-auto w-full max-w-[25rem] rounded-[2rem] border border-border bg-surface p-3 shadow-card',
        className,
      )}
      aria-label="Mockup visual do sistema Precya"
      role="img"
    >
      <div className="rounded-[1.5rem] border border-border bg-background p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-microcopy font-extrabold uppercase tracking-[0.14em] text-primary">
              Precya
            </p>
            <p className="mt-1 text-sm font-extrabold text-text-primary">Simulador de desconto</p>
          </div>
          <span className="rounded-full bg-success/10 px-3 py-1 text-microcopy font-extrabold text-success">
            Seguro
          </span>
        </div>

        <div className="mt-5 rounded-2xl bg-surface p-4 shadow-soft">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-microcopy font-bold text-text-secondary">Preco minimo</p>
              <p className="mt-1 text-3xl font-extrabold text-text-primary">R$ 287</p>
            </div>
            <div className="text-right">
              <p className="text-microcopy font-bold text-text-secondary">Margem</p>
              <p className="mt-1 text-xl font-extrabold text-success">42%</p>
            </div>
          </div>
          <div className="mt-4 h-2 rounded-full bg-border">
            <div className="h-full w-[68%] rounded-full bg-primary" />
          </div>
        </div>

        <div className={cn('mt-4 grid gap-3', compact ? 'grid-cols-1' : 'grid-cols-2')}>
          {[
            ['Desconto', '25%'],
            ['Lucro', 'R$ 94'],
            ['Comissao', 'R$ 48'],
            ['Status', 'Aprovado'],
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl border border-border bg-surface p-3">
              <p className="text-microcopy font-bold text-text-secondary">{label}</p>
              <p className="mt-1 font-extrabold text-text-primary">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

type DiscountMockupProps = {
  discount: number
}

export function DiscountMockup({ discount }: DiscountMockupProps) {
  const profit = Math.max(148 - discount * 3.4, 12)
  const margin = Math.max(48 - discount * 0.85, 8)
  const isRisk = discount >= 35

  return (
    <div className="rounded-[1.75rem] border border-border bg-surface p-5 shadow-card">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-microcopy font-extrabold uppercase tracking-[0.14em] text-primary">
            Demo visual
          </p>
          <h3 className="mt-1 text-xl font-extrabold text-text-primary">Impacto do desconto</h3>
        </div>
        <span
          className={cn(
            'rounded-full px-3 py-1 text-microcopy font-extrabold',
            isRisk ? 'bg-warning/15 text-[#8a5b00]' : 'bg-success/10 text-success',
          )}
        >
          {isRisk ? 'Atencao' : 'Seguro'}
        </span>
      </div>

      <div className="mt-6">
        <div className="flex justify-between text-sm font-bold text-text-secondary">
          <span>Desconto</span>
          <span>{discount}%</span>
        </div>
        <div className="mt-3 h-3 rounded-full bg-border">
          <div className="h-full rounded-full bg-primary" style={{ width: `${discount * 2.4}%` }} />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <Metric
          label="Lucro estimado"
          value={`R$ ${Math.round(profit)}`}
          tone={isRisk ? 'warning' : 'success'}
        />
        <Metric
          label="Margem"
          value={`${Math.round(margin)}%`}
          tone={isRisk ? 'warning' : 'success'}
        />
      </div>

      <p className="text-caption mt-5 rounded-2xl bg-background p-4 text-text-secondary">
        {isRisk
          ? 'O desconto comeca a pressionar a margem. Vale revisar custos antes de responder.'
          : 'A margem segue protegida dentro deste exemplo de procedimento.'}
      </p>
    </div>
  )
}

function Metric({
  label,
  value,
  tone,
}: {
  label: string
  value: string
  tone: 'success' | 'warning'
}) {
  return (
    <div className="rounded-2xl border border-border bg-background p-4">
      <p className="text-microcopy font-bold text-text-secondary">{label}</p>
      <p
        className={cn(
          'mt-1 text-2xl font-extrabold',
          tone === 'success' ? 'text-success' : 'text-[#8a5b00]',
        )}
      >
        {value}
      </p>
    </div>
  )
}
