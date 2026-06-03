/** Shared motion timing — matches SoftAppear / case study scroll polish. */
export const motionSeparatorDrawMs = 900;

/** Brief wash on scroll-to-anchor targets (Jump to Solution). */
export const motionScrollHighlightClass = 'case-study-scroll-highlight';

export function pulseScrollTarget(el: HTMLElement) {
  el.classList.remove(motionScrollHighlightClass);
  // Force reflow so re-triggering the same target replays the animation.
  void el.offsetWidth;
  el.classList.add(motionScrollHighlightClass);
  window.setTimeout(() => el.classList.remove(motionScrollHighlightClass), 1400);
}
