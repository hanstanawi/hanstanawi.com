const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID as string;

type TrackEvent = {
  action: string;
  category: string;
  label: string;
  value: string | number | boolean;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export function pageView(url: string) {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
}

/**
 * @description track event to GA
 * Docs: https://developers.google.com/analytics/devguides/collection/gtagjs/events
 * @param param0
 */
export function trackEvent({ action, category, label, value }: TrackEvent) {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
}
