import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type BadgeTone = 'primary' | 'success' | 'warning' | 'danger' | 'neutral'

const toneClasses: Record<BadgeTone, string> = {
  primary: 'bg-lilac/75 text-primary-dark ring-white/80',
  success: 'bg-success/10 text-success ring-success/20',
  warning: 'bg-warning/12 text-[#8a5b00] ring-warning/25',
  danger: 'bg-danger/10 text-danger ring-danger/20',
  neutral: 'bg-surface text-text-secondary ring-border',
}

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode
  tone?: BadgeTone
}

export function Badge({ children, tone = 'primary', className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex w-fit items-center rounded-full px-3.5 py-1.5 text-microcopy font-semibold uppercase tracking-[0.14em] ring-1 backdrop-blur',
        toneClasses[tone],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
