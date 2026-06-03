import type { CaseStudySlug } from './caseStudyNav';

/** Per-project body text color for CaseStudyTripletCards. */
export const CASE_STUDY_TRIPLET_BODY: Record<CaseStudySlug, string> = {
  'capital-one': 'text-[#3a7992] text-[18px]',
  cmsx: 'text-[#432060] text-[18px]',
  'rethink-food': 'text-[#b5923c] text-[18px]',
  act: 'text-[#432060] text-[18px]',
  'info-2300': 'text-[#816451] text-[18px]',
  kenvue: 'text-[#b5923c] text-[18px]',
};

export function caseStudyTripletBodyClass(
  slug: CaseStudySlug,
  override?: string,
): string {
  return override ?? CASE_STUDY_TRIPLET_BODY[slug];
}
