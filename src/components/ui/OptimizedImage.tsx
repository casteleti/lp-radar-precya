import type { ImgHTMLAttributes } from 'react'

type OptimizedImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  priority?: boolean
}

export function OptimizedImage({
  priority = false,
  loading,
  decoding,
  ...props
}: OptimizedImageProps) {
  return (
    <img
      loading={loading ?? (priority ? 'eager' : 'lazy')}
      decoding={decoding ?? 'async'}
      {...props}
    />
  )
}
