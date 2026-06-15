import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type SectionSubtitleProps = HTMLAttributes<HTMLParagraphElement> & {
  children: ReactNode
}

export function SectionSubtitle({ children, className, ...props }: SectionSubtitleProps) {
  return (
    <p className={cn('text-body mt-4 max-w-2xl text-text-secondary', className)} {...props}>
      {children}
    </p>
  )
}
