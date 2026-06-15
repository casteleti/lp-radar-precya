import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const sizeClasses = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
}

export function Container({ children, size = 'lg', className, ...props }: ContainerProps) {
  return (
    <div
      className={cn('mx-auto w-full px-4 sm:px-5 md:px-8', sizeClasses[size], className)}
      {...props}
    >
      {children}
    </div>
  )
}
