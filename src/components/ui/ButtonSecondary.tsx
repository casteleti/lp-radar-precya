import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type BaseProps = {
  children: ReactNode
  className?: string
  icon?: ReactNode
}

type ButtonSecondaryProps =
  | (BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never })
  | (BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })

export function ButtonSecondary({ children, className, icon, ...props }: ButtonSecondaryProps) {
  const classes = cn(
    'inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-bold text-primary-dark shadow-soft transition duration-300',
    'hover:-translate-y-0.5 hover:border-primary-light hover:bg-primary-light/10',
    'active:translate-y-0 active:bg-primary-light/20',
    'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-bright/20',
    className,
  )

  if (typeof props.href === 'string') {
    const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

    return (
      <a className={classes} {...anchorProps}>
        <span>{children}</span>
        {icon}
      </a>
    )
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>

  return (
    <button className={classes} type="button" {...buttonProps}>
      <span>{children}</span>
      {icon}
    </button>
  )
}
