export const trackingConfig = {
  enabled: import.meta.env.VITE_TRACKING_ENABLED === 'true',
  metaPixelId: import.meta.env.VITE_META_PIXEL_ID ?? '',
  gtmId: import.meta.env.VITE_GTM_ID ?? '',
  ga4Id: import.meta.env.VITE_GA4_ID ?? '',
} as const
