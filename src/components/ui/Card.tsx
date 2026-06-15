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
        'rounded-[1.65rem] border border-white/70 bg-surface/78 p-5 backdrop-blur',
        elevated ? 'shadow-card' : 'shadow-soft',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
