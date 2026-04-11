import { Link, useLocation } from 'react-router-dom';
import { caseStudyColumnClass, caseStudyNavPaddingXClass } from '../caseStudyLayout';
import { isHomeNavActive, isWorkNavActive, mainNavInlineClass } from '../mainNav';

/**
 * In-flow case study header: same shell and link styles as Home / Work (`Design17537`, `Design16955`),
 * with the case study page background (`#fdfcfb`).
 */
export function CaseStudyMainNav() {
  const { pathname } = useLocation();
  const homeNav = isHomeNavActive(pathname);
  const workNav = isWorkNavActive(pathname);

  return (
    <div className="relative flex w-full shrink-0 flex-col items-start border-b border-solid border-[#e8dfd0] bg-[#fdfcfb] pb-px" data-name="Navigation">
      <div
        className={`${caseStudyColumnClass} ${caseStudyNavPaddingXClass} relative flex h-[80px] w-full shrink-0 items-center justify-between`}
        data-name="Container"
      >
        <Link to="/home" className="relative h-[40px] shrink-0" data-name="Link">
          <div className="flex size-full items-center gap-3 border-0 border-transparent bg-clip-padding">
            <div className="relative size-[40px] shrink-0 rounded-full bg-[#432060]" data-name="Navigation">
              <div className="flex size-full items-center justify-center px-[14.82px]">
                <p className="font-['Georgia:Italic',sans-serif] text-[20px] leading-[28px] text-[#fdfcfb] not-italic">J</p>
              </div>
            </div>
            <p className="font-['Georgia:Italic',sans-serif] text-[24px] leading-[32px] text-[#432060] italic">Jess</p>
          </div>
        </Link>
        <nav className="relative flex h-[40px] shrink-0 items-center justify-end gap-8" aria-label="Primary">
          <Link to="/home" className={mainNavInlineClass(homeNav)} style={{ fontVariationSettings: "'opsz' 14" }}>
            Home
          </Link>
          <Link to="/work" className={mainNavInlineClass(workNav)} style={{ fontVariationSettings: "'opsz' 14" }}>
            Work
          </Link>
        </nav>
      </div>
    </div>
  );
}
