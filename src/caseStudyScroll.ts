import { pulseScrollTarget } from './motion';

/** Anchor for “Jump to Solution” / in-page prototype navigation on case study pages. */
export const CASE_STUDY_PROTOTYPE_ID = 'case-study-prototype';

/** CMSX Phase II — Final Prototype section anchor. */
export const CASE_STUDY_PROTOTYPE_PHASE2_ID = 'case-study-prototype-phase2';

function scrollToAnchor(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  pulseScrollTarget(el);
}

export function scrollToCaseStudyPrototype() {
  scrollToAnchor(CASE_STUDY_PROTOTYPE_ID);
}

export function scrollToCaseStudyPhase2Prototype() {
  scrollToAnchor(CASE_STUDY_PROTOTYPE_PHASE2_ID);
}
