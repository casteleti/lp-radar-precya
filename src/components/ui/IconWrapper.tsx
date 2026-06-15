import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type IconWrapperProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  tone?: 'primary' | 'success' | 'warning' | 'danger' | 'neutral'
}

const toneClasses = {
  primary: 'bg-primary-light/18 text-primary-dark ring-primary-light/30',
  success: 'bg-success/10 text-success ring-success/20',
  warning: 'bg-warning/12 text-[#8a5b00] ring-warning/25',
  danger: 'bg-danger/10 text-danger ring-danger/20',
  neutral: 'bg-background text-text-secondary ring-border',
}

export function IconWrapper({ children, tone = 'primary', className, ...props }: IconWrapperProps) {
  return (
    <div
      className={cn(
        'inline-flex h-11 w-11 items-center justify-center rounded-xl ring-1',
        toneClasses[tone],
        className,
      )}
      aria-hidden="true"
      {...props}
    >
      {children}
    </div>
  )
}
