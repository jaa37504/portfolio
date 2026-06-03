import { Link, useLocation } from 'react-router-dom';
import { CASE_STUDY_VERTICAL_STAGGER_ITEM, CaseStudyStagger } from '../components/SoftAppear';
import { WorkProjectCard } from '../components/WorkProjectCard';
import { WORK_PAGE_PROJECTS } from '../data/workPagePortfolio';
import { isHomeNavActive, isWorkNavActive, mainNavInlineClass } from '../mainNav';

const ALL_CASE_STUDIES_URL =
  'https://dazzling-valley-f74.notion.site/Projects-28ff340bd37380a1a2c8d7538078ec86?pvs=74';

export default function PersonalWebsiteDesignPortfolio() {
  const { pathname } = useLocation();
  const homeNav = isHomeNavActive(pathname);
  const workNav = isWorkNavActive(pathname);

  return (
    <div className="relative w-full" data-node-id="450:17537" data-name="Personal Website Design Portfolio">
      {/*
        Main column must stay in normal flow (not position:absolute). Absolute children contribute
        no height, so with flex main minus min-h-screen the page collapsed to ~0px and only the
        footer was visible.
      */}
      <div
        className="relative mx-auto flex w-full max-w-[1056px] flex-col items-start gap-[80px] bg-[#f5f2eb] pb-8 sm:pb-12"
        data-node-id="450:17538"
        data-name="RootLayout"
      >
        <div className="relative w-full min-w-0 shrink-0 bg-[#f5f2eb]" data-node-id="450:17539" data-name="ProjectDetail">
          <div className="relative flex w-full min-w-0 flex-col items-start bg-clip-padding px-4 pt-[128px] sm:px-8 md:px-12 lg:px-[48px]">
            <div className="content-stretch relative flex w-full min-w-0 flex-col gap-12 items-start pt-8 sm:gap-[96px] sm:pt-10 lg:pt-12" data-node-id="450:17540">
              <div className="relative flex w-full min-w-0 shrink-0 items-center justify-center px-2" data-node-id="450:17541" data-name="Heading 1">
                <h1 className="text-center font-['Libre_Baskerville:Italic',sans-serif] text-[clamp(2.25rem,7vw,3.75rem)] font-normal italic leading-[1.15] text-[#432060]" data-node-id="450:17542">
                  My Work
                </h1>
              </div>
              <div className="relative flex w-full min-w-0 flex-col items-start gap-16 sm:gap-[72px]">
                <CaseStudyStagger
                  className="content-stretch flex w-full min-w-0 flex-col gap-8 items-start sm:gap-[32px]"
                  data-node-id="450:17543"
                  itemClassName={CASE_STUDY_VERTICAL_STAGGER_ITEM}
                  initialDelayMs={120}
                  staggerMs={220}
                  variant="subtle"
                >
                  {WORK_PAGE_PROJECTS.map((project) => (
                    <WorkProjectCard key={project.id} project={project} />
                  ))}
                </CaseStudyStagger>
                <div className="relative flex w-full min-w-0 shrink-0 items-center justify-center">
                  <a
                    href={ALL_CASE_STUDIES_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative shrink-0 rounded-[16777200px] bg-[#432060] px-[40px] py-[10px]"
                  >
                    <p
                      className="font-['DM_Sans:Medium',sans-serif] relative shrink-0 text-center text-[16px] font-medium leading-[24px] text-[#fdfcfb] sm:whitespace-nowrap"
                      style={{ fontVariationSettings: "'opsz' 14" }}
                    >
                      View all case studies
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute top-0 left-1/2 z-10 flex h-[81px] w-screen max-w-none -translate-x-1/2 flex-col items-stretch border-b border-solid border-[#e8dfd0] bg-[#f5f2eb] pb-px"
        data-node-id="450:17711"
        data-name="Navigation"
      >
        <div
          className="relative mx-auto flex h-[80px] w-full max-w-[1056px] shrink-0 items-center justify-between px-4 sm:px-8 md:px-12 lg:px-[64px]"
          data-node-id="450:17712"
          data-name="Container"
        >
          <Link to="/home" className="relative h-[40px] shrink-0" data-node-id="450:17713" data-name="Link">
            <div className="flex size-full items-center gap-3 border-0 border-transparent bg-clip-padding">
              <div className="relative size-[40px] shrink-0 rounded-full bg-[#432060]" data-node-id="450:17714" data-name="Navigation">
                <div className="flex size-full items-center justify-center px-[14.82px]">
                  <p
                    className="font-['Georgia:Italic',sans-serif] text-[20px] leading-[28px] text-[#fdfcfb] not-italic"
                    data-node-id="450:17716"
                  >
                    J
                  </p>
                </div>
              </div>
              <p
                className="font-['Georgia:Italic',sans-serif] text-[24px] leading-[32px] text-[#432060] italic"
                data-node-id="450:17718"
              >
                Jess
              </p>
            </div>
          </Link>
          <nav className="relative flex h-[40px] shrink-0 items-center justify-end gap-8" aria-label="Primary" data-node-id="450:17719">
            <Link
              to="/home"
              className={mainNavInlineClass(homeNav)}
              data-node-id="450:17721"
              style={{ fontVariationSettings: "'opsz' 14" }}
            >
              Home
            </Link>
            <Link
              to="/work"
              className={mainNavInlineClass(workNav)}
              data-node-id="450:17725"
              style={{ fontVariationSettings: "'opsz' 14" }}
            >
              Work
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}