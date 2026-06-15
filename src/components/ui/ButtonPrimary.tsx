import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type BaseProps = {
  children: ReactNode
  className?: string
  icon?: ReactNode
}

type ButtonPrimaryProps =
  | (BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never })
  | (BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })

export function ButtonPrimary({ children, className, icon, ...props }: ButtonPrimaryProps) {
  const classes = cn(
    'inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-extrabold text-white shadow-soft transition duration-300',
    'hover:-translate-y-0.5 hover:bg-primary-bright hover:shadow-premium',
    'active:translate-y-0 active:bg-primary-dark',
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
