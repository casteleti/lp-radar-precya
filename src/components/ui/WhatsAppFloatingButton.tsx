import { trackConversionEvent } from '../../lib/tracking'

const WHATSAPP_URL = 'https://wa.me/5500000000000'

export function WhatsAppFloatingButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir conversa no WhatsApp"
      onClick={() => trackConversionEvent('whatsapp_click')}
      className="fixed bottom-4 right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-precya-primary text-sm font-bold text-white shadow-soft transition hover:bg-precya-primary-dark focus:outline-none focus:ring-2 focus:ring-precya-primary focus:ring-offset-2"
    >
      WA
    </a>
  )
}
