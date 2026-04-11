/** Anchor for “Jump to Solution” / in-page prototype navigation on case study pages. */
export const CASE_STUDY_PROTOTYPE_ID = 'case-study-prototype';

export function scrollToCaseStudyPrototype() {
  document.getElementById(CASE_STUDY_PROTOTYPE_ID)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}
