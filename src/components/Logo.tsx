/** Brand colours taken from the COMO MD TRADING sign. */
export const brand = {
  ink: '#2F56B4',
  facetBlue: '#3E74D6',
  facetTeal: '#3DB3AA',
  facetSky: '#2A9BE8',
};

/** The three-facet hexagon mark (pointy-top hexagon in a 100×100 box). */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" focusable="false">
      <polygon fill={brand.facetSky} points="50,71.6 50,2 8.43,26 8.43,42.8" />
      <polygon fill={brand.facetTeal} points="50,71.6 70.78,86 91.57,74 91.57,26 50,2" />
      <polygon fill={brand.facetBlue} points="70.78,86 50,98 8.43,74 8.43,42.8 50,71.6" />
    </svg>
  );
}

const wordmark = {
  fontFamily: "'Marcellus', 'Optima', 'Candara', serif",
  color: brand.ink,
  WebkitTextStroke: `0.02em ${brand.ink}`,
} as const;

/**
 * Hexagon + "COMO MD TRADING" (+ the "Ask for anything, anytime" line when `tagline`).
 * Always laid out left to right, also on Arabic pages.
 */
export function LogoLockup({ tagline = false, compact = false }: { tagline?: boolean; compact?: boolean }) {
  if (tagline) {
    return (
      <span dir="ltr" lang="en" className="inline-flex items-center gap-3.5">
        <LogoMark className="h-14 w-14 shrink-0" />
        <span className="flex flex-col items-center leading-none">
          <span style={{ ...wordmark, letterSpacing: '0.04em' }} className="whitespace-nowrap text-[26px]">
            COMO MD TRADING
          </span>
          <span style={{ ...wordmark, WebkitTextStroke: '0', letterSpacing: '0.06em' }} className="mt-1.5 whitespace-nowrap text-[11.5px]">
            “ASK FOR ANYTHING, ANYTIME”
          </span>
        </span>
      </span>
    );
  }
  return (
    <span dir="ltr" lang="en" className="inline-flex items-center gap-2.5">
      <LogoMark className="h-8 w-8 shrink-0" />
      <span style={{ ...wordmark, letterSpacing: '0.04em' }} className="whitespace-nowrap text-[18px] leading-none">
        COMO MD
        {!compact && <span className="hidden min-[380px]:inline"> TRADING</span>}
      </span>
    </span>
  );
}
