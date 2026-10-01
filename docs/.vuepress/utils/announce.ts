/**
 * Shared polite live region for short status messages (WCAG 4.1.3), e.g.
 * "Copied to clipboard". One region per page, created on first use and kept
 * in <body> so it exists before its text changes.
 */
let region: HTMLElement | null = null;
let clearTimer: ReturnType<typeof setTimeout> | undefined;

export function ensureLiveRegion(): HTMLElement | null {
  if (typeof document === 'undefined') return null;
  if (region && region.isConnected) return region;
  region = document.createElement('div');
  region.className = 'sr-only';
  region.setAttribute('role', 'status');
  region.setAttribute('aria-live', 'polite');
  region.setAttribute('aria-atomic', 'true');
  document.body.appendChild(region);
  return region;
}

export function announce(message: string): void {
  const el = ensureLiveRegion();
  if (!el) return;
  // Clear first so repeating the same message is announced again.
  el.textContent = '';
  if (clearTimer) clearTimeout(clearTimer);
  setTimeout(() => {
    el.textContent = message;
    clearTimer = setTimeout(() => {
      if (el.textContent === message) el.textContent = '';
    }, 3000);
  }, 50);
}

/** Copy text and announce the result. Resolves true on success. */
export async function copyText(text: string): Promise<boolean> {
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard API unavailable');
    await navigator.clipboard.writeText(text);
    announce('Copied to clipboard');
    return true;
  } catch {
    announce('Copy failed');
    return false;
  }
}
