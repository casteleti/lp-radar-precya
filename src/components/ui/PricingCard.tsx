import type { ReactNode } from 'react'
import { Badge } from './Badge'
import { ButtonPrimary } from './ButtonPrimary'
import { ButtonSecondary } from './ButtonSecondary'
import { Card } from './Card'

type PricingCardProps = {
  title: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
  badge?: string
  ctaLabel: string
}

export function PricingCard({
  title,
  price,
  description,
  features,
  highlighted = false,
  badge,
  ctaLabel,
}: PricingCardProps) {
  const Button = highlighted ? ButtonPrimary : ButtonSecondary

  return (
    <Card
      elevated={highlighted}
      className={highlighted ? 'border-primary-light ring-2 ring-primary-light/25' : undefined}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-extrabold text-text-primary">{title}</h3>
          <p className="text-caption mt-2 text-text-secondary">{description}</p>
        </div>
        {badge ? <Badge>{badge}</Badge> : null}
      </div>
      <p className="mt-6 text-4xl font-extrabold text-text-primary">{price}</p>
      <Button className="mt-6 w-full" aria-label={ctaLabel}>
        {ctaLabel}
      </Button>
      <ul className="mt-6 space-y-3 text-sm text-text-secondary">
        {features.map((feature) => (
          <li key={feature} className="flex gap-3">
            <CheckIcon />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}

function CheckIcon(): ReactNode {
  return (
    <span
      className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-success/10 text-success"
      aria-hidden="true"
    >
      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
        <path
          d="M3.5 8.2 6.7 11.4 12.7 4.8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}
