import type { HTMLAttributes, ReactNode } from 'react'
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll'
import { cn } from '../../lib/cn'

type MotionVariant = 'fade-up' | 'fade-in' | 'scale-in'

type MotionProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  delay?: number
  variant?: MotionVariant
}

const variantClasses: Record<MotionVariant, string> = {
  'fade-up': 'motion-fade-up',
  'fade-in': 'motion-fade-in',
  'scale-in': 'motion-scale-in',
}

export function Motion({
  children,
  className,
  delay = 0,
  variant = 'fade-up',
  style,
  ...props
}: MotionProps) {
  const { ref, isVisible } = useRevealOnScroll()

  return (
    <div
      ref={ref}
      className={cn('animate-ready', variantClasses[variant], isVisible && 'animate-in', className)}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...props}
    >
      {children}
    </div>
  )
}
