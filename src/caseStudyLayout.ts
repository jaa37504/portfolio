/**
 * Case study pages sit inside DesignFrame `max-w-[1100px]`.
 * Home / Work nav (Design16955, Design17537): `max-w-[1056px]` + responsive horizontal padding (matches below).
 * Nav + article share the same horizontal inset so the bar lines up with the body column.
 */

/** Centered content column (matches Home / Work `max-w-[1056px]` strip). */
export const caseStudyColumnClass = 'mx-auto w-full min-w-0 max-w-[1056px]';

/** Same horizontal padding as Home / Work nav strips (`Design16955`, `Design17537`). */
export const caseStudyNavPaddingXClass = 'px-4 sm:px-8 md:px-12 lg:px-[64px]';

/**
 * Article body — same inset as the nav row so breadcrumbs and body text line up with logo / links.
 * Slightly tighter on phones; aligns `sm`+ with Home / Work horizontal rhythm.
 */
export const caseStudyArticlePaddingXClass = 'px-4 sm:px-8 md:px-8 lg:px-[64px]';

/** Space below fixed nav on case study first column (replaces fixed `pt-[48px]`). */
export const caseStudyHeroTopPaddingClass = 'pt-8 sm:pt-10 lg:pt-12';

/** Main vertical gap in the hero / first column stack (replaces fixed `gap-[48px]`). */
export const caseStudyHeroStackGapClass = 'gap-8 sm:gap-10 lg:gap-12';

/** Section blocks: vertical padding (replaces ubiquitous `py-[24px]`). */
export const caseStudySectionPaddingYClass = 'py-5 sm:py-6 lg:py-8';

/** Replaces fixed Figma widths so copy and labels shrink on narrow viewports. */
export const caseStudyTextColumnClass = 'w-full max-w-[680px] min-w-0';

/** Wide body / diagram column (e.g. 864px artboards). */
export const caseStudyWideColumnClass = 'w-full max-w-[864px] min-w-0';
