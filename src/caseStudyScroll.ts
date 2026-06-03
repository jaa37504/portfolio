/** Anchor for “Jump to Solution” / in-page prototype navigation on case study pages. */
export const CASE_STUDY_PROTOTYPE_ID = 'case-study-prototype';

/** CMSX Phase II — Final Prototype section anchor. */
export const CASE_STUDY_PROTOTYPE_PHASE2_ID = 'case-study-prototype-phase2';

export function scrollToCaseStudyPrototype() {
  document.getElementById(CASE_STUDY_PROTOTYPE_ID)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

export function scrollToCaseStudyPhase2Prototype() {
  document.getElementById(CASE_STUDY_PROTOTYPE_PHASE2_ID)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}
