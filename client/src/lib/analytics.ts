
// Google Analytics utility functions

/**
 * Initializes Google Analytics
 * @param measurementId The Google Analytics measurement ID (G-XXXXXXXXXX)
 */
export const initializeGoogleAnalytics = (measurementId: string): void => {
  // Add Google Analytics script dynamically
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.async = true;
  document.head.appendChild(script);

  // Initialize the dataLayer and configure GA
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  gtag('js', new Date());
  gtag('config', measurementId);

  // Add to window object for TypeScript
  window.gtag = gtag;
};

/**
 * Track a custom event in Google Analytics
 * @param eventName The name of the event to track
 * @param eventParams Additional parameters for the event
 */
export const trackEvent = (eventName: string, eventParams?: Record<string, any>): void => {
  if (window.gtag) {
    window.gtag('event', eventName, eventParams);
  } else {
    console.warn('Google Analytics not initialized');
  }
};

// Declare gtag for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
