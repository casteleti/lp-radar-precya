import { useEffect, useRef, useState } from 'react'

type UseRevealOnScrollOptions = {
  rootMargin?: string
  threshold?: number
  once?: boolean
}

export function useRevealOnScroll({
  rootMargin = '0px 0px -10% 0px',
  threshold = 0.12,
  once = true,
}: UseRevealOnScrollOptions = {}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current

    if (!element) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)

          if (once) {
            observer.unobserve(entry.target)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { rootMargin, threshold },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [once, rootMargin, threshold])

  return { ref, isVisible }
}
