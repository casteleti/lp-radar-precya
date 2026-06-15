import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  elevated?: boolean
}

export function Card({ children, elevated = false, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-border bg-surface p-5',
        elevated ? 'shadow-card' : 'shadow-soft',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
