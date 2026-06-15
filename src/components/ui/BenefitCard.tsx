import type { ReactNode } from 'react'
import { Card } from './Card'

type BenefitCardProps = {
  icon?: ReactNode
  title: string
  description: string
}

export function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <Card className="flex gap-4">
      {icon ? <div className="mt-1 shrink-0 text-primary">{icon}</div> : null}
      <div>
        <h3 className="text-base font-semibold text-text-primary">{title}</h3>
        <p className="text-caption mt-1 text-text-secondary">{description}</p>
      </div>
    </Card>
  )
}
