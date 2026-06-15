import { ButtonPrimary } from './ButtonPrimary'

export function MobileStickyCTA() {
  return (
    <div className="safe-bottom fixed inset-x-0 bottom-0 z-50 border-t border-border/80 bg-background/92 px-4 pt-3 shadow-[0_-18px_48px_rgb(29_24_54_/_0.10)] backdrop-blur-xl md:hidden">
      <div className="mx-auto flex max-w-md items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-microcopy font-extrabold text-text-primary">Teste gratis</p>
          <p className="truncate text-microcopy text-text-secondary">
            Sem cartao. Em poucos minutos.
          </p>
        </div>
        <ButtonPrimary href="#preco" className="min-h-11 shrink-0 rounded-lg px-4 py-2.5 text-xs">
          Comecar
        </ButtonPrimary>
      </div>
    </div>
  )
}
