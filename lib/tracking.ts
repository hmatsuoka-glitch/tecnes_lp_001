// LINE応募ボタンのクリック計測ユーティリティ
// TikTok Pixel (Contact) と GA4 (line_click) の両方を発火する。
// PII（メール・電話）は送信しない。

declare global {
  interface Window {
    ttq?: {
      track: (event: string, params?: Record<string, unknown>) => void;
      page?: () => void;
      load?: (id: string) => void;
      [key: string]: unknown;
    };
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackLineClick(): void {
  if (typeof window === 'undefined') return;

  // TikTok Pixel: Contact
  try {
    if (window.ttq && typeof window.ttq.track === 'function') {
      window.ttq.track('Contact', {
        content_name: 'LINE誘導',
        content_category: 'Recruit',
        description: 'tecnes-line-cta',
      });
    }
  } catch {
    /* 計測失敗で導線を止めない */
  }

  // GA4: line_click
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'line_click', {
        event_category: 'Recruit',
        event_label: 'tecnes_line_official',
      });
    }
  } catch {
    /* 計測失敗で導線を止めない */
  }
}
