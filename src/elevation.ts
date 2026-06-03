/**
 * Depth / elevation tokens (portfolio polish — level 1).
 *
 * - **Page** — `bg-[#f5f2eb]` (home/work) or `bg-[#fdfcfb]` (case studies); no shadow.
 * - **Raised** — cards, bento tiles, insight triplets; warm diffused shadow + subtle edge.
 * - **Nav** — solid bar + hairline border (no blur/translucency — avoids harsh bands).
 */

/** Raised surfaces: home bento, work cards (compact), interactive tiles. */
export const elevationRaised =
  'border border-solid border-[var(--color-border-subtle)] bg-[var(--color-surface-card)] shadow-[0_1px_2px_rgba(44,37,32,0.04),0_4px_22px_rgba(67,32,96,0.045)]';

/** Hover / focus depth for clickable raised cards. */
export const elevationRaisedHover =
  'transition-[border-color,box-shadow] duration-300 ease-out hover:border-[#cfc3b0] hover:shadow-[0_2px_6px_rgba(44,37,32,0.05),0_10px_36px_rgba(67,32,96,0.07)] focus-visible:ring-2 focus-visible:ring-[#845482] focus-visible:ring-offset-2';

/** Home portfolio grid tiles (raised + hover + focus ring). */
export const portfolioTileChrome = `${elevationRaised} outline-none hover:z-10 focus-visible:z-10 ${elevationRaisedHover}`;

/** Whisper shadow — tight, low opacity (no blur/translucency on the bar itself). */
const navWhisperShadow = 'shadow-[0_1px_2px_rgba(44,37,32,0.04)]';

/** Home / work nav (`#f5f2eb`) — solid bar + hairline border. */
export const navShellDefault =
  `border-b border-solid border-[var(--color-border-subtle)] bg-[var(--color-surface-paper)] pb-px ${navWhisperShadow}`;

/** Case study nav (`#fdfcfb`) — same treatment, paper background. */
export const navShellPaper =
  `border-b border-solid border-[var(--color-border-subtle)] bg-[var(--color-surface-case-study)] pb-px ${navWhisperShadow}`;
