import { Card } from './Card'

type TestimonialCardProps = {
  quote: string
  name: string
  role: string
}

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <Card elevated className="relative overflow-hidden">
      <div
        className="absolute right-5 top-4 text-5xl font-extrabold leading-none text-primary-light/30"
        aria-hidden="true"
      >
        "
      </div>
      <blockquote className="text-body relative text-text-primary">{quote}</blockquote>
      <figcaption className="mt-5 border-t border-border pt-4">
        <p className="font-extrabold text-text-primary">{name}</p>
        <p className="text-caption text-text-secondary">{role}</p>
      </figcaption>
    </Card>
  )
}
