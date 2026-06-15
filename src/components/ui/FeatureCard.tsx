import type { ReactNode } from 'react'
import { Card } from './Card'
import { IconWrapper } from './IconWrapper'

type FeatureCardProps = {
  icon: ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="h-full transition duration-300 hover:-translate-y-1 hover:border-primary-light">
      <IconWrapper>{icon}</IconWrapper>
      <h3 className="mt-5 text-lg font-extrabold text-text-primary">{title}</h3>
      <p className="text-caption mt-2 text-text-secondary">{description}</p>
    </Card>
  )
}
