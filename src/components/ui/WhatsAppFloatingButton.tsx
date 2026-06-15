const WHATSAPP_URL = 'https://wa.me/5500000000000'

export function WhatsAppFloatingButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir conversa no WhatsApp"
      className="fixed bottom-24 right-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-success text-white shadow-card transition hover:-translate-y-0.5 hover:bg-[#248f55] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-success/20 md:bottom-5 md:h-14 md:w-14"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 md:h-6 md:w-6" fill="none" aria-hidden="true">
        <path
          d="M7.4 19.2 4 20l.9-3.2A8.2 8.2 0 1 1 7.4 19.2Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.1 8.7c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.3.1.5-.1.7l-.4.5c.6 1 1.4 1.8 2.5 2.4l.5-.5c.2-.2.4-.2.7-.1l1.4.6c.3.1.4.3.4.6v.5c0 .3-.1.5-.4.7-.4.2-.9.4-1.5.3-2.9-.4-5.4-2.7-6.1-5.5-.2-.7 0-1.2.2-1.6Z"
          fill="currentColor"
        />
      </svg>
    </a>
  )
}
