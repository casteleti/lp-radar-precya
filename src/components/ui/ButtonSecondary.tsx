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
    'inline-flex min-h-13 items-center justify-center gap-2 rounded-[1.15rem] border border-white/80 bg-surface/74 px-5 py-3.5 text-sm font-semibold text-primary-dark shadow-soft transition duration-300 backdrop-blur',
    'hover:-translate-y-0.5 hover:border-primary-light/50 hover:bg-white/92',
    'active:translate-y-0 active:bg-primary-light/20',
    'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-bright/18',
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
