import { trackingConfig } from '../../data/tracking'

export function TrackingScripts() {
  if (!trackingConfig.enabled) {
    return null
  }

  return <>{/* Add Meta Pixel, GTM and GA4 snippets here when IDs are approved. */}</>
}
