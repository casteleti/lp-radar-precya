import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type BadgeTone = 'primary' | 'success' | 'warning' | 'danger' | 'neutral'

const toneClasses: Record<BadgeTone, string> = {
  primary: 'bg-primary-light/18 text-primary-dark ring-primary-light/35',
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
        'inline-flex w-fit items-center rounded-full px-3 py-1 text-microcopy font-bold uppercase tracking-[0.12em] ring-1',
        toneClasses[tone],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}
