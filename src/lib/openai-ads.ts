export type OpenAIAdsProperties = Record<string, unknown>;

declare global {
  interface Window {
    oaiq?: ((...args: unknown[]) => void) & { q?: unknown[][] };
  }
}

const SENSITIVE_PROPERTY_PATTERN = /(name|email|phone|call|recording|transcript)/i;

/**
 * Measures a non-sensitive advertising conversion without ever blocking navigation.
 */
export function trackOpenAIConversion(
  eventName: string,
  properties: OpenAIAdsProperties = {},
): void {
  if (typeof window === "undefined" || typeof window.oaiq !== "function") return;

  try {
    const safeProperties = Object.fromEntries(
      Object.entries(properties).filter(([key]) => !SENSITIVE_PROPERTY_PATTERN.test(key)),
    );
    window.oaiq("measure", eventName, safeProperties);
  } catch {
    // Advertising measurement must never interrupt the user's destination.
  }
}

export function trackGooglePlayCta(): void {
  trackOpenAIConversion("lead_created", { type: "customer_action" });
}

