import { Link } from 'react-router-dom';
import { CaseStudyMainNav } from '../components/CaseStudyMainNav';
import { CmsxLaptopVideoFrame } from '../components/CmsxLaptopVideoFrame';
import { CASE_STUDY_DOC_URL, nextCaseStudyAfter } from '../data/caseStudyNav';
import {
  caseStudyArticlePaddingXClass,
  caseStudyColumnClass,
  caseStudyHeroStackGapClass,
  caseStudyHeroTopPaddingClass,
  caseStudySectionPaddingYClass,
} from '../caseStudyLayout';
import {
  CASE_STUDY_VERTICAL_STAGGER_ITEM,
  CaseStudySection,
  CaseStudyStagger,
  SoftAppearOnce,
} from '../components/SoftAppear';

/** Full-width stagger step that centers shrink-wrapped children (fixes left shift from `w-full` wrappers). */
function infoDesignProcessStaggerItem(index: number) {
  return index === 0
    ? `${CASE_STUDY_VERTICAL_STAGGER_ITEM} flex justify-center`
    : CASE_STUDY_VERTICAL_STAGGER_ITEM;
}

/**
 * Schema diagram cards use fixed `h-[336.22px]`. Do not use `CASE_STUDY_CARD_STAGGER_ITEM` here — its
 * `md:[&>*]:h-full` makes children resolve to 100% of an auto-height parent and collapses the row,
 * so the following section overlaps the diagram.
 */
const INFO_SCHEMA_CARD_STAGGER_ITEM =
  'min-h-0 min-w-0 flex-[1_0_0] basis-0 w-full [&>*]:min-h-0';

/** Figma 450:19417 — case study hero (laptop / admin portal) + video poster */
const imgImage31 = "https://www.figma.com/api/mcp/asset/1b5dfe7c-5cc5-49ba-a9d0-172ccc96feaf";
/** Figma 450:19473 — Consumer flow sketch (wireframe image) */
const imgConsumerPersonaWireframe =
  'https://www.figma.com/api/mcp/asset/9ae4b85c-4248-4e77-a6ab-1b2d0567aa9d';
/** Figma 450:19475 — Admin flow sketch (wireframe image) */
const imgAdminPersonaWireframe =
  'https://www.figma.com/api/mcp/asset/aa8bc8e1-2b9d-4953-8f15-07e8566e9cd8';
const imgImage41 = "https://www.figma.com/api/mcp/asset/4fd67fc0-891b-4682-9fb5-2919a0c46b1f";
const imgImage42 = "https://www.figma.com/api/mcp/asset/42459bbf-f541-4b61-a41c-cd0c4c1b25ce";
const imgImage35 = "https://www.figma.com/api/mcp/asset/add8c7b9-c6d5-446d-8398-6b49bf563362";
const imgImage36 = "https://www.figma.com/api/mcp/asset/8082fffc-e4e1-42bf-a771-6dd8b6db6744";
const imgImage37 = "https://www.figma.com/api/mcp/asset/b7a363e1-818e-48f6-8e39-2c3f90d5c5e0";
export default function PersonalWebsiteDesignPortfolio() {
  const docUrl = CASE_STUDY_DOC_URL['info-2300'];
  const nextProject = nextCaseStudyAfter('info-2300');

  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-node-id="450:19366" data-name="Personal Website Design Portfolio">
      <CaseStudyMainNav />
      <div
        className={`relative flex shrink-0 flex-col items-start bg-[#fdfcfb] ${caseStudyColumnClass}`}
        data-node-id="450:19382"
        data-name="RootLayout"
      >
        <div className="relative w-full min-w-0 shrink-0 bg-[#fdfcfb]" data-node-id="450:19383" data-name="ProjectDetail">
          <div
            className={`relative flex size-full flex-col items-start gap-8 border-0 border-transparent bg-clip-padding ${caseStudyArticlePaddingXClass}`}
          >
            <div
              className={`content-stretch flex flex-col items-start relative shrink-0 w-full ${caseStudyHeroStackGapClass} ${caseStudyHeroTopPaddingClass}`}
              data-node-id="450:19384"
            >
              <SoftAppearOnce className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-node-id="450:19385">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19386" data-name="Section - HERO">
                  <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-node-id="450:19387">
                    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="450:19388" data-name="Container">
                      <Link
                        to="/work"
                        className="content-stretch flex flex-col items-start relative shrink-0 no-underline"
                        data-node-id="450:19389"
                        data-name="Link"
                      >
                        <div className="capitalize flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a2472] text-[0px] tracking-[0.52px] whitespace-nowrap" data-node-id="450:19390" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="text-[14px]">
                            <span className="leading-[22.1px]">← A</span>
                            <span className="leading-[22.1px] lowercase">LL</span>
                            <span className="leading-[22.1px]">{` projects`}</span>
                          </p>
                        </div>
                      </Link>
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="450:19391" data-name="Container">
                        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[13px] whitespace-nowrap" data-node-id="450:19392" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[22.1px]">/</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="450:19393" data-name="Container">
                        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:19394" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[22.1px]">INFO 2300</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="450:19395" data-name="Heading 2">
                      <p className="flex-[1_0_0] font-['Libre_Baskerville:Italic',sans-serif] italic leading-[1.12] min-h-px min-w-px relative text-[#432060] text-[clamp(2rem,7vw,3.75rem)] whitespace-normal break-words" data-node-id="450:19396">
                        INFO 2300
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border-[#ddd8d0] border-b border-solid content-stretch flex flex-col gap-5 items-start pb-[30px] pt-[29px] relative shrink-0 w-full xl:flex-row xl:items-center xl:justify-between" data-node-id="450:19397" data-name="Border">
                  <div className="relative shrink-0 w-full lg:w-auto" data-node-id="450:19398" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative size-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19399" data-name="Label">
                        <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[12px] tracking-[0.88px] uppercase whitespace-nowrap" data-node-id="450:19400" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[18.7px]">Role</p>
                        </div>
                      </div>
                      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[14px] whitespace-normal" data-node-id="450:19401" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[23.8px]">Full-Stack Developer + Designer</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full lg:w-auto" data-node-id="450:19402" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative size-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="450:19403" data-name="Label">
                        <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[12px] tracking-[0.88px] uppercase whitespace-nowrap" data-node-id="450:19404" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[18.7px]">Course</p>
                        </div>
                      </div>
                      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[14px] whitespace-normal" data-node-id="450:19405" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[23.8px]">Cornell INFO 2300</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full lg:w-[325px]" data-node-id="450:19406" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
                      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[19px] justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[12px] tracking-[0.88px] uppercase w-full" data-node-id="450:19407" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[18.7px]">Type</p>
                      </div>
                      <div className="content-stretch flex flex-wrap gap-[8px] h-auto items-start relative shrink-0 w-full" data-node-id="450:19408" data-name="ProjectDetail">
                        <div className="bg-[#e6deda] h-[24px] relative rounded-[16777200px] shrink-0" data-node-id="450:19409" data-name="Text">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[16px] py-[4px] relative size-full">
                            <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#816451] text-[12px] whitespace-nowrap" data-node-id="450:19410" style={{ fontVariationSettings: "'opsz' 14" }}>
                              Full Stack
                            </p>
                          </div>
                        </div>
                        <div className="bg-[#e6deda] h-[24px] relative rounded-[16777200px] shrink-0" data-node-id="450:19411" data-name="Text">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[16px] py-[4px] relative size-full">
                            <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#816451] text-[12px] whitespace-nowrap" data-node-id="450:19412" style={{ fontVariationSettings: "'opsz' 14" }}>
                              Database
                            </p>
                          </div>
                        </div>
                        <div className="bg-[#e5e4e1] h-[24px] relative rounded-[16777200px] shrink-0" data-node-id="450:19413" data-name="Text">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[16px] py-[4px] relative size-full">
                            <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#999181] text-[12px] whitespace-nowrap" data-node-id="450:19414" style={{ fontVariationSettings: "'opsz' 14" }}>
                              Mobile
                            </p>
                          </div>
                        </div>
                        <div className="bg-[#e5e4e1] h-[24px] relative rounded-[16777200px] shrink-0" data-node-id="450:19415" data-name="Text">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[16px] py-[4px] relative size-full">
                            <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#999181] text-[12px] whitespace-nowrap" data-node-id="450:19416" style={{ fontVariationSettings: "'opsz' 14" }}>
                              Web
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              {/* Hero: static laptop — live prototype video only in #case-study-prototype (450:19704). */}
              <div
                className="relative h-[min(417px,70vw)] w-full min-h-[240px] shrink-0 overflow-hidden rounded-[24px] bg-[#e3dfd6] sm:h-[417px]"
                data-node-id="450:19417"
                data-name="Container"
              >
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[24px]">
                  <div className="absolute inset-0 rounded-[24px] bg-[#e3dfd6]" />
                  <img
                    alt=""
                    className="absolute size-full max-w-none rounded-[24px] object-contain"
                    src={imgImage31}
                  />
                </div>
              </div>
            </SoftAppearOnce>
            </div>
            <CaseStudySection
              className="content-stretch flex flex-col gap-[16px] items-start py-5 sm:py-6 lg:py-8 relative shrink-0 w-full"
              data-node-id="450:19421"
              data-name="Section - OVERVIEW"
            >
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:19422">
                <div className="content-stretch flex flex-col items-start w-full max-w-[680px] min-w-0 relative shrink-0" data-node-id="450:19423" data-name="Container">
                  <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:19424" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[25.5px]">Overview</p>
                  </div>
                </div>
                <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="450:19425" data-name="Container">
                  <div className="flex-[1_0_0] min-h-px min-w-px relative" data-node-id="450:19426" data-name="Heading 1">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                      <p className="flex-[1_0_0] font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-h-px min-w-px relative text-[#845482] text-[32px]" data-node-id="450:19427">
                        Designing and building a full-stack recommendation platform for webtoons
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[3.01px] relative shrink-0 w-full" data-node-id="450:19428" data-name="Container">
                <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[16px] w-full whitespace-pre-wrap" data-node-id="450:19429" style={{ fontVariationSettings: "'opsz' 14" }}>
                  <p className="leading-[25.5px] mb-0">{`INFO 2300 tasked students with building a catalog-style full-stack web app from scratch over three months. `}</p>
                  <p className="leading-[25.5px] mb-0">&nbsp;</p>
                  <p className="leading-[25.5px] mb-0">Using PHP, SQL, session authentication, and role-based access, I created a full-stack webtoon recommendation platform with genre filtering, content management, and an admin system.</p>
                  <p className="leading-[25.5px] mb-0">&nbsp;</p>
                  <p className="leading-[25.5px]">{`This project is on my portfolio not because it's my most visual work, but because it's evidence of something more valuable: I understand both sides of the design-to- development handoff from personal experience.`}</p>
                </div>
              </div>
            </CaseStudySection>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:19430" data-name="Separator" />
            <CaseStudySection
              animated={false}
              className="content-stretch flex flex-col items-start relative shrink-0 w-full"
              data-node-id="450:19431"
              data-name="Section - THE DUAL USER PROBLEM"
            >
              <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-node-id="450:19432">
                <SoftAppearOnce className="w-full shrink-0">
                  <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="450:19433">
                    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-node-id="450:19434">
                      <div className="content-stretch flex flex-col items-start w-full max-w-[680px] min-w-0 relative shrink-0" data-node-id="450:19435" data-name="Container">
                        <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:19436" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[25.5px]">The Design Space</p>
                        </div>
                      </div>
                      <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="450:19437" data-name="Container">
                        <div className="flex-[1_0_0] min-h-px min-w-px relative" data-node-id="450:19438" data-name="Heading 1">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                            <p className="flex-[1_0_0] font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-h-px min-w-px relative text-[#845482] text-[32px]" data-node-id="450:19439">
                              Designing for the consumer and the admin
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-node-id="450:19440" data-name="Container">
                      <div className="flex flex-col font-['DM_Sans:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#7a7060] text-[16px] w-full" data-node-id="450:19441" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[26.25px]">The site had two distinct user types with different needs and permissions.</p>
                      </div>
                    </div>
                  </div>
                </SoftAppearOnce>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19442">
                  <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="450:19443">
                    {/* Figma 450:19444 — row layout; no stagger wrappers (they collapsed wireframe image columns) */}
                    <div
                      className="content-stretch flex w-full shrink-0 flex-row gap-[16px] items-start justify-center lg:gap-[24px] lg:items-center"
                      data-node-id="450:19444"
                    >
                      <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex min-h-0 min-w-0 w-full flex-[1_0_0] flex-col gap-[8px] items-start self-stretch pb-[33px] pt-[49px] px-[33px] relative rounded-[18px]" data-node-id="450:19445" data-name="Background+Border">
                        <div className="relative shrink-0 w-full" data-node-id="450:19446" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.8px] relative size-full">
                            <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.4px] uppercase w-full" data-node-id="450:19447" style={{ fontVariationSettings: "'opsz' 14" }}>
                              <p className="leading-[23.8px]">Consumer</p>
                            </div>
                          </div>
                        </div>
                        <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#816451] text-[20px] w-full" data-node-id="450:19448" style={{ fontVariationSettings: "'opsz' 14" }}>
                          Mia Lee, 19
                        </p>
                        <div className="opacity-65 relative shrink-0 w-full" data-node-id="450:19449" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                            <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[14px] whitespace-nowrap" data-node-id="450:19450" style={{ fontVariationSettings: "'opsz' 14" }}>
                              <p className="leading-[22.1px]">College student · Webtoon reader</p>
                            </div>
                          </div>
                        </div>
                        <div className="opacity-50 relative shrink-0 w-full" data-node-id="450:19451" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                            <div className="capitalize flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[14px] tracking-[0.88px] whitespace-nowrap" data-node-id="450:19452" style={{ fontVariationSettings: "'opsz' 14" }}>
                              <p className="leading-[18.7px]">Behaviors</p>
                            </div>
                          </div>
                        </div>
                        <div className="relative shrink-0 w-full" data-node-id="450:19453" data-name="List">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
                            <div className="content-stretch flex gap-[8px] items-start opacity-85 relative shrink-0 w-full" data-node-id="450:19454" data-name="Item">
                              <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:19455" data-name="Margin">
                                <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:19456" data-name="Background" />
                              </div>
                              <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#1c1c1c] text-[14px]" data-node-id="450:19457" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[21px]">Reads webtoons on her phone</p>
                              </div>
                            </div>
                            <div className="content-stretch flex gap-[8px] items-start opacity-85 relative shrink-0 w-full" data-node-id="450:19458" data-name="Item">
                              <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:19459" data-name="Margin">
                                <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:19460" data-name="Background" />
                              </div>
                              <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#1c1c1c] text-[14px]" data-node-id="450:19461" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[21px]">Discovers new series through webtoon comments</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="opacity-50 relative shrink-0 w-full" data-node-id="450:19462" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                            <div className="capitalize flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[14px] tracking-[0.88px] whitespace-nowrap" data-node-id="450:19463" style={{ fontVariationSettings: "'opsz' 14" }}>
                              <p className="leading-[18.7px]">Goals</p>
                            </div>
                          </div>
                        </div>
                        <div className="relative shrink-0 w-full" data-node-id="450:19464" data-name="List">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
                            <div className="content-stretch flex gap-[8px] items-start opacity-85 relative shrink-0 w-full" data-node-id="450:19465" data-name="Item">
                              <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:19466" data-name="Margin">
                                <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:19467" data-name="Background" />
                              </div>
                              <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#1c1c1c] text-[14px]" data-node-id="450:19468" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[21px]">Quickly find recommendations that match her taste</p>
                              </div>
                            </div>
                            <div className="content-stretch flex gap-[8px] items-start opacity-85 relative shrink-0 w-full" data-node-id="450:19469" data-name="Item">
                              <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:19470" data-name="Margin">
                                <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:19471" data-name="Background" />
                              </div>
                              <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#1c1c1c] text-[14px]" data-node-id="450:19472" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[21px]">Explore new genres</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="relative min-h-[180px] w-[42%] min-w-[120px] max-w-[220px] self-stretch overflow-hidden rounded-[16px] border border-solid border-[#ddd8d0] sm:min-h-[200px] sm:min-w-[140px] sm:max-w-[260px] lg:min-h-[220px] lg:w-full lg:min-w-0 lg:max-w-none lg:flex-[1_0_0]"
                        data-node-id="450:19473"
                        data-name="image 31"
                      >
                        <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[16px]">
                          <div className="absolute inset-0 rounded-[16px] bg-white" />
                          <div className="absolute inset-0 overflow-hidden rounded-[16px]">
                            <img
                              alt="Consumer user flow wireframe sketch"
                              className="absolute size-full max-w-none object-contain object-left object-top"
                              src={imgConsumerPersonaWireframe}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="content-stretch flex w-full shrink-0 flex-row gap-[24px] h-auto items-center justify-center"
                      data-node-id="450:19474"
                    >
                      <div className="relative min-h-[220px] w-full min-w-0 flex-[1_0_0] self-stretch overflow-hidden rounded-[18px] border border-solid border-[#ddd8d0]" data-node-id="450:19475" data-name="image 31">
                        <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[18px]">
                          <div className="absolute inset-0 rounded-[18px] bg-white" />
                          <img
                            alt="Admin portal flow wireframe sketch"
                            className="absolute size-full max-w-none rounded-[18px] object-contain object-left object-top"
                            src={imgAdminPersonaWireframe}
                          />
                        </div>
                      </div>
                      <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex min-h-0 min-w-0 w-full flex-[1_0_0] flex-col gap-[8px] items-start self-stretch pb-[33px] pt-[49px] px-[33px] relative rounded-[18px]" data-node-id="450:19476" data-name="Background+Border">
                        <div className="relative shrink-0 w-full" data-node-id="450:19477" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.8px] relative size-full">
                            <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.4px] uppercase w-full" data-node-id="450:19478" style={{ fontVariationSettings: "'opsz' 14" }}>
                              <p className="leading-[23.8px]">Admin</p>
                            </div>
                          </div>
                        </div>
                        <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[28px] min-w-full relative shrink-0 text-[#816451] text-[20px] w-[min-content]" data-node-id="450:19479" style={{ fontVariationSettings: "'opsz' 14" }}>
                          Aaron Kim, 22
                        </p>
                        <div className="opacity-65 relative shrink-0 w-full" data-node-id="450:19480" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                            <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2d2d2d] text-[14px] whitespace-nowrap" data-node-id="450:19481" style={{ fontVariationSettings: "'opsz' 14" }}>
                              <p className="leading-[22.1px]">College student · Curator</p>
                            </div>
                          </div>
                        </div>
                        <div className="opacity-50 relative shrink-0 w-full" data-node-id="450:19482" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                            <div className="capitalize flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[14px] tracking-[0.88px] whitespace-nowrap" data-node-id="450:19483" style={{ fontVariationSettings: "'opsz' 14" }}>
                              <p className="leading-[18.7px]">Behaviors</p>
                            </div>
                          </div>
                        </div>
                        <div className="relative shrink-0 w-full" data-node-id="450:19484" data-name="List">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
                            <div className="content-stretch flex gap-[8px] items-start opacity-85 relative shrink-0 w-full" data-node-id="450:19485" data-name="Item">
                              <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:19486" data-name="Margin">
                                <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:19487" data-name="Background" />
                              </div>
                              <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#1c1c1c] text-[14px]" data-node-id="450:19488" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[21px]">Reads extensively and wants to share recommendations</p>
                              </div>
                            </div>
                            <div className="content-stretch flex gap-[8px] items-start opacity-85 relative shrink-0 w-full" data-node-id="450:19489" data-name="Item">
                              <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:19490" data-name="Margin">
                                <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:19491" data-name="Background" />
                              </div>
                              <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#1c1c1c] text-[14px]" data-node-id="450:19492" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[21px]">Leaves reviews but reaches a limited audience</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="opacity-50 relative shrink-0" data-node-id="450:19493" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                            <div className="capitalize flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[14px] tracking-[0.88px] whitespace-nowrap" data-node-id="450:19494" style={{ fontVariationSettings: "'opsz' 14" }}>
                              <p className="leading-[18.7px]">Goals</p>
                            </div>
                          </div>
                        </div>
                        <div className="relative shrink-0 w-full" data-node-id="450:19495" data-name="List">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
                            <div className="content-stretch flex gap-[8px] items-start opacity-85 relative shrink-0 w-full" data-node-id="450:19496" data-name="Item">
                              <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:19497" data-name="Margin">
                                <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:19498" data-name="Background" />
                              </div>
                              <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#1c1c1c] text-[14px]" data-node-id="450:19499" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[21px]">Easily add, edit, and manage recommendations</p>
                              </div>
                            </div>
                            <div className="content-stretch flex gap-[8px] items-start opacity-85 relative shrink-0 w-full" data-node-id="450:19500" data-name="Item">
                              <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:19501" data-name="Margin">
                                <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:19502" data-name="Background" />
                              </div>
                              <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#1c1c1c] text-[14px]" data-node-id="450:19503" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[21px]">Maintain a curated space that encourages discovery</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CaseStudySection>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:19504" data-name="Separator" />
            <CaseStudySection
              className="content-stretch flex flex-col gap-[24px] items-start py-5 sm:py-6 lg:py-8 relative shrink-0 w-full"
              data-node-id="450:19505"
              data-name="Section - THE DUAL USER PROBLEM"
            >
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:19506">
                <div className="content-stretch flex flex-col items-start w-full max-w-[680px] min-w-0 relative shrink-0" data-node-id="450:19507" data-name="Container">
                  <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:19508" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[25.5px]">System Design</p>
                  </div>
                </div>
                <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="450:19509" data-name="Container">
                  <div className="flex-[1_0_0] min-h-px min-w-px relative" data-node-id="450:19510" data-name="Heading 1">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                      <p className="flex-[1_0_0] font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-h-px min-w-px relative text-[#845482] text-[32px]" data-node-id="450:19511">
                        The schema behind every UI decision
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start pt-[8px] relative shrink-0 w-full" data-node-id="450:19512" data-name="Container">
                <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7060] text-[16px] w-full" data-node-id="450:19513" style={{ fontVariationSettings: "'opsz' 14" }}>
                  <p className="leading-[26.25px]">Before writing a single line of HTML, I designed the relational database schema. This forced me to think about what data the UI actually needed to expose, and which filtering and display patterns were even possible given the data model.</p>
                </div>
                <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7060] text-[16px] w-full" data-node-id="450:19514" data-name="Container">
                  <p className="leading-[28.8px]" data-node-id="450:19515">
                    The three-table structure (webtoons → webtoon_tags → tags) enabled multi-tag filtering on the consumer side and informed exactly what form fields the admin portal needed. The{' '}
                    <span
                      className="inline align-baseline rounded-[4px] bg-[#ede6f5] px-[6px] py-px font-['Inter:Regular',sans-serif] text-[15px] not-italic leading-[25.2px] text-[#5c3d7a]"
                      data-node-id="450:19518"
                      data-name="Code"
                    >
                      UNIQUE(webtoon_id, tag_id)
                    </span>{' '}
                    constraint on the join table meant duplicate tags were a database-level concern, not a UI validation problem.
                  </p>
                </div>
              </div>
              <CaseStudyStagger
                className="content-stretch flex flex-row gap-[24px] items-stretch relative shrink-0 w-full"
                data-node-id="450:19520"
                data-name="Container"
                itemClassName={INFO_SCHEMA_CARD_STAGGER_ITEM}
                staggerMs={65}
                variant="subtle"
              >
                <div className="bg-[#3a3731] h-[336.22px] min-h-px min-w-px relative rounded-[14px]" data-node-id="450:19521" data-name="Background">
                  <div className="absolute border-[rgba(255,255,255,0.1)] border-b border-solid h-[33.09px] left-[24px] right-[23.67px] top-[24px]" data-node-id="450:19522" data-name="HorizontalBorder">
                    <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[23px] justify-center leading-[0] left-0 not-italic text-[#c4aee0] text-[10.7px] top-[10.5px] tracking-[1.04px] uppercase w-[70.93px]" data-node-id="450:19523">
                      <p className="leading-[22.1px]">webtoons</p>
                    </div>
                  </div>
                  <div className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid content-stretch flex h-[27px] items-start justify-between left-[24px] pb-[6px] pr-[0.02px] pt-[5px] right-[23.67px] top-[71.09px]" data-node-id="450:19524" data-name="HorizontalBorder">
                    <div className="relative self-stretch shrink-0" data-node-id="450:19525" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap" data-node-id="450:19526">
                          <p className="leading-[15.4px]">id</p>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-80 relative self-stretch shrink-0" data-node-id="450:19527" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c4aee0] text-[10.8px] whitespace-nowrap" data-node-id="450:19528">
                          <p className="leading-[15.4px]">INTEGER</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative self-stretch shrink-0" data-node-id="450:19529" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[9.4px] text-[rgba(255,255,255,0.4)] text-right whitespace-nowrap" data-node-id="450:19530">
                          <p className="leading-[14px]">PK AUTOINCREMENT</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid content-stretch flex h-[27px] items-start justify-between left-[24px] pb-[6px] pr-[0.02px] pt-[5px] right-[23.67px] top-[97.48px]" data-node-id="450:19531" data-name="HorizontalBorder">
                    <div className="min-w-[33px] relative self-stretch shrink-0" data-node-id="450:19532" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-w-[inherit] relative size-full">
                        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap" data-node-id="450:19533">
                          <p className="leading-[15.4px]">title</p>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-80 relative self-stretch shrink-0" data-node-id="450:19534" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c4aee0] text-[10.5px] whitespace-nowrap" data-node-id="450:19535">
                          <p className="leading-[15.4px]">TEXT</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative self-stretch shrink-0" data-node-id="450:19536" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[9.5px] text-[rgba(255,255,255,0.4)] text-right whitespace-nowrap" data-node-id="450:19537">
                          <p className="leading-[14px]">NOT NULL</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid content-stretch flex h-[27px] items-start justify-between left-[24px] pb-[6px] pt-[5px] right-[23.67px] top-[123.87px]" data-node-id="450:19538" data-name="HorizontalBorder">
                    <div className="relative self-stretch shrink-0" data-node-id="450:19539" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap" data-node-id="450:19540">
                          <p className="leading-[15.4px]">author</p>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-80 relative self-stretch shrink-0" data-node-id="450:19541" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c4aee0] text-[10.5px] whitespace-nowrap" data-node-id="450:19542">
                          <p className="leading-[15.4px]">TEXT</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative self-stretch shrink-0" data-node-id="450:19543" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[9.5px] text-[rgba(255,255,255,0.4)] text-right whitespace-nowrap" data-node-id="450:19544">
                          <p className="leading-[14px]">NOT NULL</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid content-stretch flex h-[27px] items-start justify-between left-[24px] pb-[6px] pt-[5px] right-[23.67px] top-[150.26px]" data-node-id="450:19545" data-name="HorizontalBorder">
                    <div className="relative self-stretch shrink-0" data-node-id="450:19546" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap" data-node-id="450:19547">
                          <p className="leading-[15.4px]">review</p>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-80 relative self-stretch shrink-0" data-node-id="450:19548" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c4aee0] text-[10.5px] whitespace-nowrap" data-node-id="450:19549">
                          <p className="leading-[15.4px]">TEXT</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative self-stretch shrink-0" data-node-id="450:19550" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[9.5px] text-[rgba(255,255,255,0.4)] text-right whitespace-nowrap" data-node-id="450:19551">
                          <p className="leading-[14px]">NOT NULL</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid content-stretch flex h-[27px] items-start justify-between left-[24px] pb-[6px] pr-[0.02px] pt-[5px] right-[23.67px] top-[176.65px]" data-node-id="450:19552" data-name="HorizontalBorder">
                    <div className="relative self-stretch shrink-0" data-node-id="450:19553" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap" data-node-id="450:19554">
                          <p className="leading-[15.4px]">rating</p>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-80 relative self-stretch shrink-0" data-node-id="450:19555" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c4aee0] text-[10.8px] whitespace-nowrap" data-node-id="450:19556">
                          <p className="leading-[15.4px]">INTEGER</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative self-stretch shrink-0" data-node-id="450:19557" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.4)] text-right whitespace-nowrap" data-node-id="450:19558">
                          <p className="leading-[14px]">CHECK (1–5)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid content-stretch flex h-[27px] items-start justify-between left-[24px] pb-[6px] pr-[0.02px] pt-[5px] right-[23.67px] top-[203.04px]" data-node-id="450:19559" data-name="HorizontalBorder">
                    <div className="relative self-stretch shrink-0" data-node-id="450:19560" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap" data-node-id="450:19561">
                          <p className="leading-[15.4px]">file_name</p>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-80 relative self-stretch shrink-0" data-node-id="450:19562" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c4aee0] text-[10.5px] whitespace-nowrap" data-node-id="450:19563">
                          <p className="leading-[15.4px]">TEXT</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative self-stretch shrink-0" data-node-id="450:19564" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[9.5px] text-[rgba(255,255,255,0.4)] text-right whitespace-nowrap" data-node-id="450:19565">
                          <p className="leading-[14px]">NOT NULL</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid content-stretch flex h-[27px] items-start justify-between left-[24px] pb-[6px] pt-[5px] right-[23.67px] top-[229.43px]" data-node-id="450:19566" data-name="HorizontalBorder">
                    <div className="relative self-stretch shrink-0" data-node-id="450:19567" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap" data-node-id="450:19568">
                          <p className="leading-[15.4px]">file_ext</p>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-80 relative self-stretch shrink-0" data-node-id="450:19569" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c4aee0] text-[10.5px] whitespace-nowrap" data-node-id="450:19570">
                          <p className="leading-[15.4px]">TEXT</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative self-stretch shrink-0" data-node-id="450:19571" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[9.5px] text-[rgba(255,255,255,0.4)] text-right whitespace-nowrap" data-node-id="450:19572">
                          <p className="leading-[14px]">NOT NULL</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid content-stretch flex h-[27px] items-start justify-between left-[24px] pb-[6px] pr-[0.02px] pt-[5px] right-[23.67px] top-[255.82px]" data-node-id="450:19573" data-name="HorizontalBorder">
                    <div className="min-w-[52.810001373291016px] relative self-stretch shrink-0" data-node-id="450:19574" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-w-[inherit] relative size-full">
                        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap" data-node-id="450:19575">
                          <p className="leading-[15.4px]">citation</p>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-80 relative self-stretch shrink-0" data-node-id="450:19576" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c4aee0] text-[10.5px] whitespace-nowrap" data-node-id="450:19577">
                          <p className="leading-[15.4px]">TEXT</p>
                        </div>
                      </div>
                    </div>
                    <div className="min-w-[48px] relative self-stretch shrink-0" data-node-id="450:19578" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end min-w-[inherit] relative size-full">
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.4)] text-right whitespace-nowrap" data-node-id="450:19579">
                          <p className="leading-[14px]">optional</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex h-[24px] items-start left-[24px] py-[5px] right-[23.67px] top-[288.21px]" data-node-id="450:19580" data-name="Container">
                    <div className="content-stretch flex flex-col items-end min-w-[126px] relative self-stretch shrink-0" data-node-id="450:19581" data-name="Container">
                      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(196,174,224,0.6)] text-right whitespace-nowrap" data-node-id="450:19582">
                        <p className="leading-[14px]">UNIQUE(title, author)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#3a3731] h-[336.22px] min-h-px min-w-px relative rounded-[14px]" data-node-id="450:19583" data-name="Background">
                  <div className="absolute border-[rgba(255,255,255,0.1)] border-b border-solid h-[33.09px] left-[24px] right-[23.67px] top-[24px]" data-node-id="450:19584" data-name="HorizontalBorder">
                    <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[23px] justify-center leading-[0] left-0 not-italic text-[#c4aee0] text-[11.9px] top-[10.5px] tracking-[1.04px] uppercase w-[35.58px]" data-node-id="450:19585">
                      <p className="leading-[22.1px]">tags</p>
                    </div>
                  </div>
                  <div className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid content-stretch flex h-[27px] items-start justify-between left-[24px] pb-[6px] pr-[0.02px] pt-[5px] right-[23.67px] top-[71.09px]" data-node-id="450:19586" data-name="HorizontalBorder">
                    <div className="relative self-stretch shrink-0" data-node-id="450:19587" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap" data-node-id="450:19588">
                          <p className="leading-[15.4px]">id</p>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-80 relative self-stretch shrink-0" data-node-id="450:19589" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c4aee0] text-[10.8px] whitespace-nowrap" data-node-id="450:19590">
                          <p className="leading-[15.4px]">INTEGER</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative self-stretch shrink-0" data-node-id="450:19591" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[9.4px] text-[rgba(255,255,255,0.4)] text-right whitespace-nowrap" data-node-id="450:19592">
                          <p className="leading-[14px]">PK AUTOINCREMENT</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid content-stretch flex h-[27px] items-start justify-between left-[24px] pb-[6px] pr-[0.02px] pt-[5px] right-[23.67px] top-[97.48px]" data-node-id="450:19593" data-name="HorizontalBorder">
                    <div className="relative self-stretch shrink-0" data-node-id="450:19594" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[9.8px] text-white whitespace-nowrap" data-node-id="450:19595">
                          <p className="leading-[15.4px]">name</p>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-80 relative self-stretch shrink-0" data-node-id="450:19596" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c4aee0] text-[10.5px] whitespace-nowrap" data-node-id="450:19597">
                          <p className="leading-[15.4px]">TEXT</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative self-stretch shrink-0" data-node-id="450:19598" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[9.8px] text-[rgba(255,255,255,0.4)] text-right whitespace-nowrap" data-node-id="450:19599">
                          <p className="leading-[14px]">NOT NULL UNIQUE</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute border-[rgba(255,255,255,0.08)] border-solid border-t content-stretch flex flex-col gap-[6px] items-start left-[24px] pt-[16px] right-[23.67px] top-[143.87px]" data-node-id="450:19600" data-name="HorizontalBorder">
                    <div className="relative shrink-0 w-full" data-node-id="450:19601" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.69px] relative size-full">
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[rgba(196,174,224,0.7)] w-full" data-node-id="450:19602">
                          <p className="leading-[18.7px]">Seed values</p>
                        </div>
                      </div>
                    </div>
                    <div className="h-[51px] relative shrink-0 w-full" data-node-id="450:19603" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                        <div className="absolute bg-[rgba(196,174,224,0.15)] bottom-[28px] content-stretch flex flex-col items-start left-0 px-[8px] py-[3px] rounded-[4px] top-0" data-node-id="450:19604" data-name="Overlay">
                          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c4aee0] text-[9.1px] whitespace-nowrap" data-node-id="450:19605">
                            <p className="leading-[17px]">Comedy</p>
                          </div>
                        </div>
                        <div className="absolute bg-[rgba(196,174,224,0.15)] bottom-[28px] content-stretch flex flex-col items-start left-[57px] px-[8px] py-[3px] rounded-[4px] top-0" data-node-id="450:19606" data-name="Overlay">
                          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c4aee0] text-[9.7px] whitespace-nowrap" data-node-id="450:19607">
                            <p className="leading-[17px]">Drama</p>
                          </div>
                        </div>
                        <div className="absolute bg-[rgba(196,174,224,0.15)] bottom-[28px] content-stretch flex flex-col items-start left-[108px] px-[8px] py-[3px] rounded-[4px] top-0" data-node-id="450:19608" data-name="Overlay">
                          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c4aee0] text-[10px] whitespace-nowrap" data-node-id="450:19609">
                            <p className="leading-[17px]">Fantasy</p>
                          </div>
                        </div>
                        <div className="absolute bg-[rgba(196,174,224,0.15)] bottom-[28px] content-stretch flex flex-col items-start left-[171px] min-w-[76px] px-[8px] py-[3px] rounded-[4px] top-0" data-node-id="450:19610" data-name="Overlay">
                          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c4aee0] text-[10px] whitespace-nowrap" data-node-id="450:19611">
                            <p className="leading-[17px]">Historical</p>
                          </div>
                        </div>
                        <div className="absolute bg-[rgba(196,174,224,0.15)] bottom-0 content-stretch flex flex-col items-start left-0 px-[8px] py-[3px] rounded-[4px] top-[28px]" data-node-id="450:19612" data-name="Overlay">
                          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c4aee0] text-[9.5px] whitespace-nowrap" data-node-id="450:19613">
                            <p className="leading-[17px]">Romance</p>
                          </div>
                        </div>
                        <div className="absolute bg-[rgba(196,174,224,0.15)] bottom-0 content-stretch flex flex-col items-start left-[63px] min-w-[64px] px-[8px] py-[3px] rounded-[4px] top-[28px]" data-node-id="450:19614" data-name="Overlay">
                          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c4aee0] text-[10px] whitespace-nowrap" data-node-id="450:19615">
                            <p className="leading-[17px]">Thriller</p>
                          </div>
                        </div>
                        <div className="absolute bg-[rgba(196,174,224,0.15)] bottom-0 content-stretch flex flex-col items-start left-[132px] min-w-[94px] px-[8px] py-[3px] rounded-[4px] top-[28px]" data-node-id="450:19616" data-name="Overlay">
                          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c4aee0] text-[10px] whitespace-nowrap" data-node-id="450:19617">
                            <p className="leading-[17px]">Slice of Life</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#3a3731] h-[336.22px] min-h-px min-w-px relative rounded-[14px]" data-node-id="450:19618" data-name="Background">
                  <div className="absolute border-[rgba(255,255,255,0.1)] border-b border-solid h-[33.09px] left-[24px] right-[23.66px] top-[24px]" data-node-id="450:19619" data-name="HorizontalBorder">
                    <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[23px] justify-center leading-[0] left-0 not-italic text-[#c4aee0] text-[11.2px] top-[10.5px] tracking-[1.04px] uppercase w-[106.29px]" data-node-id="450:19620">
                      <p className="leading-[22.1px]">webtoon_tags</p>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex flex-col items-start left-[24px] pb-[0.69px] right-[23.66px] top-[70.09px]" data-node-id="450:19621" data-name="Container">
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[rgba(196,174,224,0.6)] whitespace-nowrap" data-node-id="450:19622">
                      <p className="leading-[18.7px]">Join table</p>
                    </div>
                  </div>
                  <div className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid content-stretch flex h-[28px] items-start justify-between left-[24px] py-[6px] right-[23.66px] top-[102.78px]" data-node-id="450:19623" data-name="HorizontalBorder">
                    <div className="relative self-stretch shrink-0" data-node-id="450:19624" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap" data-node-id="450:19625">
                          <p className="leading-[15.4px]">id</p>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-80 relative self-stretch shrink-0" data-node-id="450:19626" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c4aee0] text-[10.8px] whitespace-nowrap" data-node-id="450:19627">
                          <p className="leading-[15.4px]">INTEGER</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative self-stretch shrink-0" data-node-id="450:19628" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[9.4px] text-[rgba(255,255,255,0.4)] text-right whitespace-nowrap" data-node-id="450:19629">
                          <p className="leading-[14px]">PK AUTOINCREMENT</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid content-stretch flex h-[27px] items-start justify-between left-[24px] pb-[6px] pr-[0.02px] pt-[5px] right-[23.66px] top-[130.17px]" data-node-id="450:19630" data-name="HorizontalBorder">
                    <div className="relative self-stretch shrink-0" data-node-id="450:19631" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap" data-node-id="450:19632">
                          <p className="leading-[15.4px]">webtoon_id</p>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-80 relative self-stretch shrink-0" data-node-id="450:19633" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c4aee0] text-[10.8px] whitespace-nowrap" data-node-id="450:19634">
                          <p className="leading-[15.4px]">INTEGER</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative self-stretch shrink-0" data-node-id="450:19635" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.4)] text-right whitespace-nowrap" data-node-id="450:19636">
                          <p className="leading-[14px]">FK → webtoons</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid content-stretch flex h-[27px] items-start justify-between left-[24px] pb-[6px] pt-[5px] right-[23.66px] top-[156.56px]" data-node-id="450:19637" data-name="HorizontalBorder">
                    <div className="relative self-stretch shrink-0" data-node-id="450:19638" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap" data-node-id="450:19639">
                          <p className="leading-[15.4px]">tag_id</p>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-80 relative self-stretch shrink-0" data-node-id="450:19640" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c4aee0] text-[10.8px] whitespace-nowrap" data-node-id="450:19641">
                          <p className="leading-[15.4px]">INTEGER</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative self-stretch shrink-0" data-node-id="450:19642" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
                        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.4)] text-right whitespace-nowrap" data-node-id="450:19643">
                          <p className="leading-[14px]">FK → tags</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-[rgba(196,174,224,0.08)] content-stretch flex flex-col gap-[3px] items-start left-[24px] p-[10px] right-[23.66px] rounded-[6px] top-[196.95px]" data-node-id="450:19644" data-name="Overlay">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19645" data-name="Container">
                      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(196,174,224,0.6)] w-full" data-node-id="450:19646">
                        <p className="leading-[17px]">Constraint</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pb-[0.69px] relative shrink-0 w-full" data-node-id="450:19647" data-name="Container">
                      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c4aee0] text-[11px] w-full" data-node-id="450:19648">
                        <p className="leading-[18.7px]">UNIQUE(webtoon_id, tag_id)</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pt-px relative shrink-0 w-full" data-node-id="450:19649" data-name="Container">
                      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(196,174,224,0.5)] w-full" data-node-id="450:19650">
                        <p className="leading-[17px] mb-0">Prevents duplicate tag assignments at the</p>
                        <p className="leading-[17px]">DB level</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CaseStudyStagger>
            </CaseStudySection>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:19651" data-name="Separator" />
            <CaseStudySection
              className={`content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full ${caseStudySectionPaddingYClass}`}
              data-node-id="450:19652"
            >
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="450:19653">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:19654">
                  <div className="content-stretch flex flex-col items-start w-full max-w-[680px] min-w-0 relative shrink-0" data-node-id="450:19655" data-name="Container">
                    <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:19656" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[25.5px]">Design process</p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="450:19657" data-name="Container">
                    <div className="relative min-h-px min-w-px flex-[1_0_0]" data-node-id="450:19658" data-name="Heading 1">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                        <p className="min-h-px min-w-px flex-[1_0_0] font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] relative text-[#845482] text-[32px]" data-node-id="450:19659">
                          Designing and Prototyping in HTML and CSS
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-node-id="450:19660" data-name="Container">
                  <div className="flex w-full max-w-[680px] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7060] text-[16px]" data-node-id="450:19661" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[26.25px]">For this project development and iteration worked hand in hand. With HTML components and CSS styling I was able to play around with structure, visual design, and user experience and instantly view and test these changes.</p>
                  </div>
                </div>
              </div>
              <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] relative shrink-0 text-[#816451] text-[24px] text-center w-full" data-node-id="450:19662">
                Consumer Side
              </p>
              <CaseStudyStagger
                className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
                data-node-id="450:19663"
                itemClassName={infoDesignProcessStaggerItem}
                staggerMs={65}
                variant="subtle"
              >
                <div className="content-stretch flex gap-[16px] items-end relative shrink-0" data-node-id="450:19664">
                  <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0" data-node-id="450:19665">
                    <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#555] text-[16px] text-center w-[min-content]" data-node-id="450:19666" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[19.5px]">Landing/View All Page</p>
                    </div>
                    <div className="border border-[#ddd8d0] border-solid h-[400px] relative rounded-[4px] shrink-0 w-[252px]" data-node-id="450:19667" data-name="image 41">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgImage41} />
                    </div>
                  </div>
                  <div className="flex flex-row items-end self-stretch">
                    <div className="content-stretch flex flex-col gap-[16px] h-full items-center justify-center relative shrink-0" data-node-id="450:19668">
                      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#555] text-[16px] text-center w-[min-content]" data-node-id="450:19669" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[19.5px]">Review Detail Page</p>
                      </div>
                      <div className="border border-[#ddd8d0] border-solid h-[399px] relative rounded-[4px] shrink-0 w-[260px]" data-node-id="450:19670" data-name="image 42">
                        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[4px]">
                          <img alt="" className="absolute h-[100.25%] left-[-0.06%] max-w-none top-[-0.29%] w-[100.12%]" src={imgImage42} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start py-[16px] relative shrink-0 w-full" data-node-id="450:19671">
                  <div className="bg-[#ede7f8] border-[#6b46a0] border-l-2 border-solid content-stretch flex flex-col gap-[4px] items-start p-[16px] relative rounded-br-[16px] rounded-tr-[16px] shrink-0 w-full" data-node-id="450:19672">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19673" data-name="Heading 5">
                      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#432060] text-[14px] w-full" data-node-id="450:19674" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[25.5px]">Why Mobile?</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19675">
                      <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="450:19676" data-name="Container">
                        <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#555] text-[14px]" data-node-id="450:19677" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[19.5px]">Consumers primarily read webtoons on their phones, making mobile the most natural place to discover recommendations.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CaseStudyStagger>
              <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] relative shrink-0 text-[#816451] text-[24px] text-center w-full" data-node-id="450:19678">
                Admin Portal
              </p>
              <CaseStudyStagger
                className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
                data-node-id="450:19679"
                itemClassName={infoDesignProcessStaggerItem}
                staggerMs={65}
                variant="subtle"
              >
                <div className="content-stretch flex flex-col gap-[16px] items-start justify-end relative shrink-0 w-full max-w-[528px]" data-node-id="450:19680">
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:19681">
                    <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555] text-[16px] text-center w-full" data-node-id="450:19682" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[19.5px]">Landing Admin Home</p>
                    </div>
                    <div className="aspect-[1720/915] border border-[#ddd8d0] border-solid relative rounded-[8px] shrink-0 w-full" data-node-id="450:19683" data-name="image 35">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
                        <img alt="" className="absolute h-[100.89%] left-0 max-w-none top-[-0.87%] w-full" src={imgImage35} />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:19684">
                    <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#555] text-[16px] text-center w-full" data-node-id="450:19685" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[19.5px]">Edit + Insert Entry</p>
                    </div>
                    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:19686">
                      <div className="aspect-[762/616] border border-[#ddd8d0] border-solid flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-node-id="450:19687" data-name="image 35">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgImage36} />
                      </div>
                      <div className="aspect-[738/612] border border-[#ddd8d0] border-solid flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-node-id="450:19688" data-name="image 36">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgImage37} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start py-[16px] relative shrink-0 w-full" data-node-id="450:19689">
                  <div className="bg-[#ede7f8] border-[#6b46a0] border-l-2 border-solid content-stretch flex flex-col gap-[4px] items-start p-[16px] relative rounded-br-[16px] rounded-tr-[16px] shrink-0 w-full" data-node-id="450:19690">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19691" data-name="Heading 5">
                      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#432060] text-[14px] w-full" data-node-id="450:19692" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[25.5px]">Why Web?</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19693">
                      <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="450:19694" data-name="Container">
                        <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#555] text-[14px]" data-node-id="450:19695" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[19.5px]">Admin workflows, like writing reviews and managing content, are better suited for desktop, where longer and more complex tasks are easier to complete.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CaseStudyStagger>
            </CaseStudySection>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:19696" data-name="Separator" />
            <CaseStudySection
              id="case-study-prototype"
              className="content-stretch flex scroll-mt-8 flex-col gap-[32px] items-start py-5 sm:py-6 lg:py-8 relative shrink-0 w-full"
              data-node-id="450:19697"
            >
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19698">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19699">
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:19700">
                    <div className="content-stretch flex flex-col items-start w-full max-w-[680px] min-w-0 relative shrink-0" data-node-id="450:19701" data-name="Container">
                      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:19702" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[25.5px]">Live Site</p>
                      </div>
                    </div>
                    <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-w-full relative shrink-0 text-[#845482] text-[32px] w-[min-content]" data-node-id="450:19703">
                      Deployed locally
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="relative flex min-h-[320px] w-full shrink-0 items-center justify-center overflow-hidden rounded-[24px] bg-[#e3dfd6] px-3 py-8 sm:min-h-[417px] sm:px-6"
                data-node-id="450:19704"
                data-name="Container"
              >
                {/* Figma 522:21904 — laptop + 16:9 viewport; frame centered in panel */}
                <div className="flex w-full items-center justify-center">
                  <CmsxLaptopVideoFrame
                    variant="caseStudyLiveSite"
                    posterSrc={imgImage31}
                    videoSrc="/videos/info-2300-web.mp4"
                    className="pointer-events-none shrink-0"
                  />
                </div>
              </div>
            </CaseStudySection>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:19708" data-name="Separator" />
            <CaseStudySection
              className="content-stretch flex flex-col gap-[24px] items-start py-5 sm:py-6 lg:py-8 relative shrink-0 w-full"
              data-node-id="450:19709"
              data-name="Section - CONSTRAINTS"
            >
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="450:19710">
                <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="450:19711">
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:19712">
                    <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:19713" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[25.5px]">Reflections</p>
                    </div>
                    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="450:19714" data-name="Container">
                      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-node-id="450:19715" data-name="Heading 1">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                          <p className="flex-[1_0_0] font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-h-px min-w-px relative text-[#845482] text-[32px]" data-node-id="450:19716">
                            Things you only learn by building
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-node-id="450:19717" data-name="Container">
                    <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7060] text-[16px] w-full" data-node-id="450:19718" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[26.25px]">{`Designing and building simultaneously surfaces decisions that never appear in a Figma file. Here's what the implementation process taught me that changed how I approach design work.`}</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-full" data-node-id="450:19719" data-name="Container">
                  <CaseStudyStagger
                    className="grid w-full grid-cols-2 gap-4"
                    data-node-id="450:19720"
                    itemClassName="min-h-0 min-w-0 [&>*]:h-full"
                  >
                    <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[12px] h-full items-start min-h-px min-w-px p-[24px] relative rounded-[16px]" data-node-id="450:19721" data-name="Background+Border">
                        <div className="bg-[#ede7f8] content-stretch flex items-center justify-center pb-[5.84px] pt-[4.16px] relative rounded-[10px] shrink-0 size-[40px]" data-node-id="450:19722" data-name="Background">
                          <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[22px] whitespace-nowrap" data-node-id="450:19723" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[37.4px]">🔐</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19724" data-name="Heading 4">
                          <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] w-full" data-node-id="450:19725" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[25.5px]">Authentication changes every page</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19726" data-name="Container">
                          <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7060] text-[14px] w-full" data-node-id="450:19727" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[20.8px]">Building session authentication meant designing access control across the entire system not just the login screen.</p>
                          </div>
                        </div>
                      </div>
                    <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[12px] h-full items-start min-h-px min-w-px p-[24px] relative rounded-[16px]" data-node-id="450:19728" data-name="Background+Border">
                        <div className="bg-[#ede7f8] content-stretch flex items-center justify-center pb-[5.84px] pt-[4.16px] relative rounded-[10px] shrink-0 size-[40px]" data-node-id="450:19729" data-name="Background">
                          <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[22px] whitespace-nowrap" data-node-id="450:19730" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[37.4px]">📁</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19731" data-name="Heading 4">
                          <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] w-full" data-node-id="450:19732" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[25.5px]">{`File uploads are a UX problem `}</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start pb-[0.885px] relative shrink-0 w-full" data-node-id="450:19733" data-name="Container">
                          <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7060] text-[14px] w-full" data-node-id="450:19734" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[20.8px]">Handling uploads (validation, storage, display) surfaced edge cases not visible in wireframes.</p>
                          </div>
                        </div>
                      </div>
                    <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[12px] h-full items-start min-h-px min-w-px p-[24px] relative rounded-[16px]" data-node-id="450:19735" data-name="Background+Border">
                        <div className="bg-[#ede7f8] content-stretch flex items-center justify-center pb-[5.84px] pt-[4.16px] relative rounded-[10px] shrink-0 size-[40px]" data-node-id="450:19736" data-name="Background">
                          <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[22px] whitespace-nowrap" data-node-id="450:19737" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[37.4px]">✅</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19738" data-name="Heading 4">
                          <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] w-full" data-node-id="450:19739" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[25.5px]">Server-side validation is a design surface</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start pb-[0.885px] relative shrink-0 w-full" data-node-id="450:19740" data-name="Container">
                          <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7060] text-[14px] w-full" data-node-id="450:19741" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[20.8px]">Validation isn’t just backend logic, it defines the user experience.</p>
                          </div>
                        </div>
                      </div>
                    <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[12px] h-full items-start min-h-px min-w-px p-[24px] relative rounded-[16px]" data-node-id="450:19742" data-name="Background+Border">
                        <div className="bg-[#ede7f8] content-stretch flex items-center justify-center pb-[5.84px] pt-[4.16px] relative rounded-[10px] shrink-0 size-[40px]" data-node-id="450:19743" data-name="Background">
                          <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[22px] whitespace-nowrap" data-node-id="450:19744" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[37.4px]">🏷️</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19745" data-name="Heading 4">
                          <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] w-full" data-node-id="450:19746" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[25.5px]">The join table made multi-select filtering possible</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start pb-[0.885px] relative shrink-0 w-full" data-node-id="450:19747" data-name="Container">
                          <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7060] text-[14px] w-full" data-node-id="450:19748" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[20.8px]">The relational schema directly shaped the user experience.</p>
                          </div>
                        </div>
                      </div>
                  </CaseStudyStagger>
                </div>
              </div>
              <div className="bg-[#ede7f8] border-[#6b46a0] border-l-3 border-solid content-stretch flex flex-col items-start pb-[18px] pl-[27px] pr-[24px] pt-[23.05px] relative rounded-br-[16px] rounded-tr-[16px] shrink-0 w-full" data-node-id="450:19749" data-name="Background+VerticalBorder">
                <div className="relative shrink-0 w-full" data-node-id="450:19750" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3d1f6e] text-[14px] w-full" data-node-id="450:19751" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[23.1px]">Sitting on the engineering side of a handoff permanently changes how you write design specs. You start documenting the edge cases, not just the happy path.</p>
                    </div>
                  </div>
                </div>
              </div>
            </CaseStudySection>
            <div className="content-stretch flex flex-col items-center pt-[40px] relative shrink-0 w-full" data-node-id="450:19751-doc">
              <a
                href={docUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#432060] content-stretch flex items-center justify-center px-[40px] py-[10px] relative rounded-[16777200px] shrink-0 no-underline"
                data-node-id="450:19751-a"
                data-name="Presentation"
              >
                <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                  View Full Presentation
                </p>
              </a>
            </div>
            <div className="content-stretch flex gap-[12px] items-center justify-end pt-[96px] pb-16 relative shrink-0 w-full" data-node-id="450:19752" data-name="Container">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="450:19753" data-name="Container">
                <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:19754" style={{ fontVariationSettings: "'opsz' 14" }}>
                  <p className="leading-[22.1px]">Next Project :</p>
                </div>
              </div>
              <Link
                to={nextProject.to}
                className="content-stretch flex flex-col items-start relative shrink-0 no-underline"
                data-node-id="450:19755"
                data-name="Link"
              >
                <div className="capitalize flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a2472] text-[14px] tracking-[0.52px] whitespace-nowrap" data-node-id="450:19756" style={{ fontVariationSettings: "'opsz' 14" }}>
                  <p className="leading-[22.1px]">{nextProject.label}</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}