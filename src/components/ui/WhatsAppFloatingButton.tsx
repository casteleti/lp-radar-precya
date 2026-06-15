const WHATSAPP_URL = 'https://wa.me/5500000000000'

export function WhatsAppFloatingButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir conversa no WhatsApp"
      className="fixed bottom-4 right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-sm font-extrabold text-white shadow-card transition hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-bright/20"
    >
      WA
    </a>
  )
}
