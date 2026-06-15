type ConversionEventName = 'hero_cta_click' | 'trial_start_click' | 'lead_submit' | 'whatsapp_click'

type TrackingPayload = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    dataLayer?: TrackingPayload[]
    fbq?: (...args: unknown[]) => void
    gtag?: (...args: unknown[]) => void
  }
}

export function trackConversionEvent(
  eventName: ConversionEventName,
  payload: TrackingPayload = {},
) {
  window.dataLayer?.push({ event: eventName, ...payload })
  window.gtag?.('event', eventName, payload)
  window.fbq?.('trackCustom', eventName, payload)
}
