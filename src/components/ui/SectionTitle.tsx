import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type SectionTitleProps = HTMLAttributes<HTMLHeadingElement> & {
  children: ReactNode
  eyebrow?: string
}

export function SectionTitle({ children, eyebrow, className, ...props }: SectionTitleProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 text-microcopy font-extrabold uppercase tracking-[0.16em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={cn('text-headline font-extrabold text-text-primary', className)} {...props}>
        {children}
      </h2>
    </div>
  )
}
