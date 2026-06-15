type BrandLogoProps = {
  compact?: boolean
}

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-2xl border border-white/70 bg-lilac shadow-soft">
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.95),transparent_35%),linear-gradient(135deg,rgba(199,184,255,0.95),rgba(246,234,216,0.78))]" />
        <span className="relative text-sm font-semibold text-primary-dark">P</span>
      </span>
      {!compact ? (
        <span className="leading-none">
          <span className="block text-base font-semibold tracking-[-0.01em] text-text-primary">
            Radar Precya
          </span>
          <span className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-text-secondary">
            smart pricing
          </span>
        </span>
      ) : null}
    </span>
  )
}
