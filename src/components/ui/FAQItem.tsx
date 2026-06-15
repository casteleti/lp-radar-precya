import { useState } from 'react'
import { cn } from '../../lib/cn'

type FAQItemProps = {
  question: string
  answer: string
  defaultOpen?: boolean
}

export function FAQItem({ question, answer, defaultOpen = false }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="rounded-[1.25rem] border border-white/80 bg-white/74 shadow-soft backdrop-blur">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-text-primary transition hover:text-primary"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span>{question}</span>
        <span
          className={cn(
            'grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary-light/16 text-primary transition',
            isOpen && 'rotate-45',
          )}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      {isOpen ? <p className="text-caption px-5 pb-5 text-text-secondary">{answer}</p> : null}
    </div>
  )
}
