/**
 * Case study pages: external decks / Notion + ordered “next project” navigation.
 */

export const CASE_STUDY_ORDER = [
  'capital-one',
  'cmsx',
  'rethink-food',
  'act',
  'info-2300',
  'kenvue',
] as const;

export type CaseStudySlug = (typeof CASE_STUDY_ORDER)[number];

/** Full presentation (Slides) or case study (Notion) — opens in a new tab */
export const CASE_STUDY_DOC_URL: Record<CaseStudySlug, string> = {
  'capital-one':
    'https://docs.google.com/presentation/d/1Vf1jK5bKg1xQTzSH9okZd5IKZVrqmqg1N7OaHNhTFTM/edit?usp=sharing',
  cmsx:
    'https://dazzling-valley-f74.notion.site/CMSX-Groups-and-Grading-Page-Re-Design-2ccf340bd37380c7ab32d693eb31b164',
  'rethink-food':
    'https://dazzling-valley-f74.notion.site/ReThink-Food-Case-Study-2c4f340bd373803a879df4fb12253dcc?pvs=74',
  act: 'https://dazzling-valley-f74.notion.site/ACT-Case-Study-28ff340bd3738090b93af89113911e93',
  'info-2300':
    'https://docs.google.com/presentation/d/1YA7jiZ3CdFd5MHlmk-nxXaanpn6OEiNTHu1u9l73gRo/edit?usp=sharing',
  kenvue:
    'https://docs.google.com/presentation/d/1NGt7OKWyrLkZfRvtegXwxuRB1SVVRyE97_QOKpO91x8/edit?usp=sharing',
};

/** Label when a case study appears as the “next project” link */
export const CASE_STUDY_NEXT_LABEL: Record<CaseStudySlug, string> = {
  'capital-one': 'Capital One — B2B enterprise platform →',
  cmsx: 'CMSX: Redesigning high-stakes grading flows →',
  'rethink-food': 'ReThink Food · H4I — Mapping meal distribution across NYC →',
  act: 'ACT · H4I — Internet safety flashcard deck →',
  'info-2300': 'INFO 2300 — Webtoon review catalog →',
  kenvue: 'Kenvue — IT service desk & survey insights →',
};

export function nextCaseStudyAfter(slug: CaseStudySlug): { to: string; label: string } {
  const i = CASE_STUDY_ORDER.indexOf(slug);
  const next = CASE_STUDY_ORDER[(i + 1) % CASE_STUDY_ORDER.length];
  return { to: `/case-studies/${next}`, label: CASE_STUDY_NEXT_LABEL[next] };
}
