/**
 * Case study pages sit inside DesignFrame `max-w-[1100px]`.
 * Home / Work nav (Design16955, Design17537): `max-w-[1056px]` + `px-[64px]` (centered).
 * Nav + article share the same horizontal inset so the bar lines up with the body column.
 */

/** Centered content column (matches Home / Work `max-w-[1056px]` strip). */
export const caseStudyColumnClass = 'mx-auto w-full min-w-0 max-w-[1056px]';

/** Same horizontal padding as Home / Work nav strips (`Design16955`, `Design17537`): `px-[64px]`. */
export const caseStudyNavPaddingXClass = 'px-[64px]';

/**
 * Article body — same inset as the nav row so breadcrumbs and body text line up with logo / links.
 * Below `sm`, use responsive padding so narrow viewports still breathe.
 */
export const caseStudyArticlePaddingXClass = 'px-4 sm:px-6 md:px-8 lg:px-[64px]';
