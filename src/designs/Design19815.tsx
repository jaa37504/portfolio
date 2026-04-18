import { Link } from 'react-router-dom';
import { CaseStudyMainNav } from '../components/CaseStudyMainNav';
import { CmsxLaptopVideoFrame } from '../components/CmsxLaptopVideoFrame';
import { CASE_STUDY_DOC_URL, nextCaseStudyAfter } from '../data/caseStudyNav';
import { scrollToCaseStudyPrototype } from '../caseStudyScroll';
import {
  caseStudyArticlePaddingXClass,
  caseStudyColumnClass,
  caseStudyHeroStackGapClass,
  caseStudyHeroTopPaddingClass,
  caseStudySectionPaddingYClass,
} from '../caseStudyLayout';
import {
  CASE_STUDY_CARD_STAGGER_ITEM_XL,
  CASE_STUDY_VERTICAL_STAGGER_ITEM,
  CaseStudySection,
  CaseStudyStagger,
  SoftAppearOnce,
} from '../components/SoftAppear';

const imgImage581 = "https://www.figma.com/api/mcp/asset/68c1a212-4cca-4d7e-ac62-17273637281b";
const imgImage21111 = "https://www.figma.com/api/mcp/asset/1c258669-4764-448c-b6f0-2da86912bd61";
const imgImage2441 = "https://www.figma.com/api/mcp/asset/c10465bb-0338-4ea8-9ef3-985277ae8d54";
const imgDropdownFiltersAndTags21 = "https://www.figma.com/api/mcp/asset/f77855a4-9c39-4b9d-85b1-3464336f03f5";
const imgFilterSidebar11 = "https://www.figma.com/api/mcp/asset/b87eb938-6db1-4f9d-9aed-b4bb246c4912";
const imgFilterModalPopup21 = "https://www.figma.com/api/mcp/asset/49640671-4d09-4bd5-a46f-837336a3211f";
const imgFilterBar121 = "https://www.figma.com/api/mcp/asset/77f111f5-30f0-45be-9f6b-2cd82773d9c9";
/** Figma 450:19869 — case study hero banner (map + filter bar) */
const imgHeroBanner19869 = "https://www.figma.com/api/mcp/asset/6d2fc213-c8f6-4ff5-b1f9-b11260402bf4";
const imgProperty1Variant211 = "https://www.figma.com/api/mcp/asset/5990ecac-bc8e-450f-90cb-bfd7c0ebfeb4";
const imgFrame239211 = "https://www.figma.com/api/mcp/asset/32597a0c-0402-4dc1-98b4-a3cf01f1ae99";
const imgFrame5411 = "https://www.figma.com/api/mcp/asset/fdedf740-0e98-4b7c-9f7e-74c485284101";
const imgProperty1Variant311 = "https://www.figma.com/api/mcp/asset/3942db35-94b3-4a11-b2fa-11844b9925eb";
const imgProperty1Default111 = "https://www.figma.com/api/mcp/asset/45bf6ed7-fb46-45c1-9819-bb01f9973227";
const imgFrame50211 = "https://www.figma.com/api/mcp/asset/3c2e01aa-b05e-4fa1-9976-9de84aa4b5bc";
const imgFrame42731967111 = "https://www.figma.com/api/mcp/asset/7641e2c6-4d57-4981-8257-6c840cbcc361";
const imgProperty1Variant4111 = "https://www.figma.com/api/mcp/asset/546626ec-f5a8-4880-91d1-390c0b8f9393";
const imgOpenFilterModal41 = "https://www.figma.com/api/mcp/asset/72151463-33cb-4d44-8d19-4fec5d34ed65";
export default function PersonalWebsiteDesignPortfolio() {
  const docUrl = CASE_STUDY_DOC_URL['rethink-food'];
  const nextProject = nextCaseStudyAfter('rethink-food');

  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-node-id="450:19815" data-name="Personal Website Design Portfolio">
      <CaseStudyMainNav />
      <div
        className={`relative flex shrink-0 flex-col items-start bg-[#fdfcfb] ${caseStudyColumnClass}`}
        data-node-id="450:19831"
        data-name="RootLayout"
      >
        <div className="relative w-full min-w-0 shrink-0 bg-[#fdfcfb]" data-node-id="450:19832" data-name="ProjectDetail">
          <div
            className={`relative flex size-full flex-col items-start gap-8 border-0 border-transparent bg-clip-padding ${caseStudyArticlePaddingXClass}`}
          >
            <SoftAppearOnce
              className={`content-stretch flex flex-col items-start relative shrink-0 w-full ${caseStudyHeroStackGapClass} ${caseStudyHeroTopPaddingClass}`}
              data-node-id="450:19833"
            >
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="450:19834" data-name="Section - HERO">
                <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-node-id="450:19835">
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="450:19836" data-name="Container">
                    <Link
                      to="/work"
                      className="content-stretch flex flex-col items-start relative shrink-0 no-underline"
                      data-node-id="450:19837"
                      data-name="Link"
                    >
                      <div className="capitalize flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a2472] text-[0px] tracking-[0.52px] whitespace-nowrap" data-node-id="450:19838" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="text-[14px]">
                          <span className="leading-[22.1px]">← A</span>
                          <span className="leading-[22.1px] lowercase">LL</span>
                          <span className="leading-[22.1px]">{` projects`}</span>
                        </p>
                      </div>
                    </Link>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="450:19839" data-name="Container">
                      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[13px] whitespace-nowrap" data-node-id="450:19840" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[22.1px]">/</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="450:19841" data-name="Container">
                      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:19842" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[22.1px]">ReThink Food</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="450:19843" data-name="Heading 2">
                    <p className="flex-[1_0_0] font-['Libre_Baskerville:Italic',sans-serif] italic leading-[1.12] min-h-px min-w-px relative text-[#432060] text-[clamp(2rem,7vw,3.75rem)] whitespace-normal break-words" data-node-id="450:19844">
                      ReThink Food · Hack4Impact
                    </p>
                  </div>
                </div>
                <div className="border-[#ddd8d0] border-b border-solid content-stretch flex flex-col gap-5 items-start pb-[30px] pt-[29px] relative shrink-0 w-full xl:flex-row xl:items-start xl:justify-between" data-node-id="450:19845" data-name="Border">
                  <div className="relative shrink-0 w-full lg:w-auto" data-node-id="450:19846" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative size-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19847" data-name="Label">
                        <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[12px] tracking-[0.88px] uppercase whitespace-nowrap" data-node-id="450:19848" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[18.7px]">Role</p>
                        </div>
                      </div>
                      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] whitespace-normal" data-node-id="450:19849" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[23.8px]">Product Designer · Product Manager</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full lg:w-auto" data-node-id="450:19850" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative size-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="450:19851" data-name="Label">
                        <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[12px] tracking-[0.88px] uppercase whitespace-nowrap" data-node-id="450:19852" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[18.7px]">TEAM</p>
                        </div>
                      </div>
                      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[14px] whitespace-normal" data-node-id="450:19853" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[23.8px]">2 TLs · 4 Devs · 3 Designers</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full lg:w-auto" data-node-id="450:19854" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative size-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19855" data-name="Label">
                        <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[12px] tracking-[0.88px] uppercase whitespace-nowrap" data-node-id="450:19856" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[18.7px]">Timeline</p>
                        </div>
                      </div>
                      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] whitespace-normal" data-node-id="450:19857" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[23.8px]">12 Months · 2025</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full lg:w-auto xl:max-w-[360px]" data-node-id="450:19858" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
                      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[19px] justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[12px] tracking-[0.88px] uppercase w-full" data-node-id="450:19859" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[18.7px]">Type</p>
                      </div>
                      <div className="content-stretch flex flex-wrap gap-[8px] h-auto items-start relative shrink-0 w-full" data-node-id="450:19860" data-name="ProjectDetail">
                        <div className="bg-[#f5e9c9] h-[24px] relative rounded-[16777200px] shrink-0" data-node-id="450:19861" data-name="Text">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[16px] py-[4px] relative size-full">
                            <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#b5923c] text-[12px] whitespace-nowrap" data-node-id="450:19862" style={{ fontVariationSettings: "'opsz' 14" }}>
                              Data Visualization
                            </p>
                          </div>
                        </div>
                        <div className="bg-[#d3e3e9] h-[24px] relative rounded-[16777200px] shrink-0" data-node-id="450:19863" data-name="Text">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[16px] py-[4px] relative size-full">
                            <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#3a7992] text-[12px] whitespace-nowrap" data-node-id="450:19864" style={{ fontVariationSettings: "'opsz' 14" }}>
                              Social Good
                            </p>
                          </div>
                        </div>
                        <div className="bg-[#e5e4e1] h-[24px] relative rounded-[16777200px] shrink-0" data-node-id="450:19865" data-name="Text">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[16px] py-[4px] relative size-full">
                            <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#999181] text-[12px] whitespace-nowrap" data-node-id="450:19866" style={{ fontVariationSettings: "'opsz' 14" }}>
                              Web
                            </p>
                          </div>
                        </div>
                        <div className="bg-[#e5e4e1] h-[24px] relative rounded-[16777200px] shrink-0" data-node-id="450:19867" data-name="Text">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[16px] py-[4px] relative size-full">
                            <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#999181] text-[12px] whitespace-nowrap" data-node-id="450:19868" style={{ fontVariationSettings: "'opsz' 14" }}>
                              0 → 1
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Hero: still image — prototype video in #case-study-prototype (450:20160). */}
              <div
                className="relative h-[min(417px,70vw)] w-full min-h-[240px] shrink-0 overflow-hidden rounded-[24px] bg-[#c9ac75] sm:h-[417px]"
                data-node-id="450:19869"
                data-name="Container"
              >
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[24px]">
                  <div className="absolute inset-0 rounded-[24px] bg-[#c9ac75]" />
                  <img
                    alt=""
                    className="absolute size-full max-w-none rounded-[24px] object-contain"
                    src={imgHeroBanner19869}
                  />
                </div>
              </div>
            </SoftAppearOnce>
            <CaseStudySection
              className="content-stretch flex flex-col gap-[16px] items-start py-5 sm:py-6 lg:py-8 relative shrink-0 w-full"
              data-node-id="450:19873"
              data-name="Section - OVERVIEW"
            >
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:19874">
                <div className="content-stretch flex flex-col items-start w-full max-w-[680px] min-w-0 relative shrink-0" data-node-id="450:19875" data-name="Container">
                  <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:19876" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[25.5px]">Overview</p>
                  </div>
                </div>
                <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="450:19877" data-name="Container">
                  <div className="flex-[1_0_0] min-h-px min-w-px relative" data-node-id="450:19878" data-name="Heading 1">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                      <p className="flex-[1_0_0] font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-h-px min-w-px relative text-[#845482] text-[32px]" data-node-id="450:19879">
                        Turning fragmented data into donor trust
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[3.01px] relative shrink-0 w-full" data-node-id="450:19880" data-name="Container">
                <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] w-full" data-node-id="450:19881" style={{ fontVariationSettings: "'opsz' 14" }}>
                  <p className="leading-[25.5px]">ReThink Food coordinates a network of restaurants and community organizations delivering nearly 30,000 meals per week across NYC, Miami, and Chicago. But critical information about where meals were produced, who received them, and what impact looked like was completely fragmented, making it challenging for donors to feel connected to their contribution.</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[3.01px] relative shrink-0 w-full" data-node-id="450:19882" data-name="Container">
                <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] w-full" data-node-id="450:19883" style={{ fontVariationSettings: "'opsz' 14" }}>
                  <p className="leading-[25.5px]">Working with Hack4Impact Cornell, I was brought in as product designer to help build an interactive map web platform that would transform this fragmented data into a transparent, trust-building experience for donors and administrators.</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[3.01px] relative shrink-0 w-full" data-name="Container">
                <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                  <p className="leading-[25.5px]">As Product Manager, I led two designers and drove product direction, feature prioritization, and execution.</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[40px] relative shrink-0" data-node-id="450:19884">
                <button
                  type="button"
                  onClick={scrollToCaseStudyPrototype}
                  className="cursor-pointer border-0 bg-[#845482] content-stretch flex items-end px-[40px] py-[10px] relative rounded-[16777200px] shrink-0"
                  data-node-id="450:19885"
                  data-name="Button"
                >
                  <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" data-node-id="450:19886" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Jump to Solution
                  </p>
                </button>
              </div>
            </CaseStudySection>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:19887" data-name="Separator" />
            <CaseStudySection
              className="content-stretch flex flex-col gap-[32px] items-start py-5 sm:py-6 lg:py-8 relative shrink-0 w-full"
              data-node-id="450:19888"
              data-name="Section - THE DUAL USER PROBLEM"
            >
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="450:19889">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:19890">
                  <div className="content-stretch flex flex-col items-start w-full max-w-[680px] min-w-0 relative shrink-0" data-node-id="450:19891" data-name="Container">
                    <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:19892" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[25.5px]">The Problem</p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="450:19893" data-name="Container">
                    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-node-id="450:19894" data-name="Heading 1">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                        <p className="flex-[1_0_0] font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-h-px min-w-px relative text-[#845482] text-[32px]" data-node-id="450:19895">
                          Information about where meals are produced, delivered, and needed most is fragmented.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[16px] w-full" data-node-id="450:19896" style={{ fontVariationSettings: "'opsz' 14" }}>
                  <p className="leading-[25.5px]">This...</p>
                </div>
              </div>
              <CaseStudyStagger
                className="content-stretch flex flex-row gap-[16px] h-auto items-stretch relative shrink-0 w-full"
                data-node-id="450:19897"
                itemClassName={CASE_STUDY_CARD_STAGGER_ITEM_XL}
              >
                <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[41px] pt-[49px] px-[41px] relative rounded-[18px] self-stretch" data-node-id="450:19898" data-name="Background+Border">
                  <div className="relative rounded-[18px] shrink-0 w-full" data-node-id="450:19899" data-name="Background+Border">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold gap-[12px] items-start pb-[24px] relative size-full">
                      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:19900" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[21px]">01</p>
                      </div>
                      <p className="leading-[28px] min-w-full relative shrink-0 text-[#b5923c] text-[18px] w-[min-content]" data-node-id="450:19901" style={{ fontVariationSettings: "'opsz' 14" }}>
                        Obscures impact and scale of donations and organization
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[41px] pt-[49px] px-[41px] relative rounded-[18px] self-stretch" data-node-id="450:19902" data-name="Background+Border">
                  <div className="relative rounded-[18px] shrink-0 w-full" data-node-id="450:19903" data-name="Background+Border">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold gap-[12px] items-start relative size-full">
                      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:19904" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[21px]">02</p>
                      </div>
                      <p className="leading-[28px] min-w-full relative shrink-0 text-[#b5923c] text-[18px] w-[min-content]" data-node-id="450:19905" style={{ fontVariationSettings: "'opsz' 14" }}>
                        Creates distrust and lack of transparency around operations and money usage
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[41px] pt-[49px] px-[41px] relative rounded-[18px] self-stretch" data-node-id="450:19906" data-name="Background+Border">
                  <div className="relative rounded-[18px] shrink-0 w-full" data-node-id="450:19907" data-name="Background+Border">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold gap-[12px] items-start pb-[24px] relative size-full">
                      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:19908" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[21px]">03</p>
                      </div>
                      <p className="leading-[28px] min-w-full relative shrink-0 text-[#b5923c] text-[18px] w-[min-content]" data-node-id="450:19909" style={{ fontVariationSettings: "'opsz' 14" }}>
                        Makes it difficult for donors to make informed decisions and discourages donation
                      </p>
                    </div>
                  </div>
                </div>
              </CaseStudyStagger>
            </CaseStudySection>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:19910" data-name="Separator" />
            <CaseStudySection
              className={`content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full ${caseStudySectionPaddingYClass}`}
              data-node-id="450:19911"
              data-name="Section - CONSTRAINTS"
            >
              <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-node-id="450:19912">
                <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="450:19913">
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:19914">
                    <div className="content-stretch flex flex-col items-start w-full max-w-[680px] min-w-0 relative shrink-0" data-node-id="450:19915" data-name="Container">
                      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:19916" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[25.5px]">User Research</p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="450:19917" data-name="Container">
                      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-node-id="450:19918" data-name="Heading 1">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                          <p className="flex-[1_0_0] font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-h-px min-w-px relative text-[#845482] text-[32px]" data-node-id="450:19919">
                            Users needed to understand impact at a glance
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-node-id="450:19920" data-name="Container">
                    <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7060] text-[16px] w-full whitespace-pre-wrap" data-node-id="450:19921" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[26.25px] mb-0">{`Due to privacy constraints, we couldn't interview ReThink donors directly. Instead I recruited 3 users with prior philanthropic giving experience and conducted structured interviews around donation motivation, trust signals, and what makes giving feel meaningful.`}</p>
                      <p className="leading-[26.25px] mb-0">&nbsp;</p>
                      <p className="leading-[26.25px]">I also conducted competitor research on a similar platform: Sharing Excess.</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full" data-node-id="450:19922">
                    <div className="aspect-[4096/1533] border border-[#ddd8d0] border-solid relative rounded-[4px] shrink-0 w-full" data-node-id="450:19923" data-name="image (58) 1">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgImage581} />
                    </div>
                    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-node-id="450:19924">
                      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-node-id="450:19925" data-name="Heading 4">
                        <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold h-[40px] justify-center leading-[0] relative shrink-0 text-[#432060] text-[16px] text-center w-[372px]" data-node-id="450:19926" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[40px]">Sharing Excess</p>
                        </div>
                      </div>
                      <div className="border border-[#ddd8d0] border-solid content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0 w-[500px]" data-node-id="450:19927">
                        <div className="aspect-[4096/1628] relative shrink-0 w-full" data-node-id="450:19928" data-name="image 21 (1) (1) 1">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage21111} />
                        </div>
                        <div className="aspect-[4096/2182] relative shrink-0 w-full" data-node-id="450:19929" data-name="image 24 (4) 1">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2441} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] relative shrink-0 text-[#b5923c] text-[24px] w-full" data-node-id="450:19930">
                  Key Insights
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-full" data-node-id="450:19931" data-name="Container">
                <CaseStudyStagger
                  className="content-stretch flex w-full flex-col gap-[16px] items-start justify-center relative shrink-0"
                  data-node-id="450:19932"
                  itemClassName={CASE_STUDY_VERTICAL_STAGGER_ITEM}
                  staggerMs={70}
                >
                  <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-col gap-[12px] items-start p-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="450:19933" data-name="Background+Border">
                    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="450:19934">
                      <div className="bg-[#ede7f8] content-stretch flex items-center justify-center pb-[5.84px] pt-[4.16px] relative rounded-[10px] shrink-0 size-[40px]" data-node-id="450:19935" data-name="Background">
                        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[24px] whitespace-nowrap" data-node-id="450:19936" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[40.8px]">💰</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-node-id="450:19937" data-name="Heading 4">
                        <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] w-full" data-node-id="450:19938" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[25.5px]">Financial transparency builds confidence</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19939" data-name="Container">
                      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7060] text-[14px] w-full" data-node-id="450:19940" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[20.8px]">Users want to see exactly where their dollars go — not just a mission statement. Quantified impact per dollar was the strongest trust signal.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-col gap-[12px] h-auto items-start p-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="450:19941" data-name="Background+Border">
                    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="450:19942">
                      <div className="bg-[#ede7f8] content-stretch flex items-center justify-center pb-[5.84px] pt-[4.16px] relative rounded-[10px] shrink-0 size-[40px]" data-node-id="450:19943" data-name="Background">
                        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[24px] whitespace-nowrap" data-node-id="450:19944" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[40.8px]">📈</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-node-id="450:19945" data-name="Heading 4">
                        <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] w-full" data-node-id="450:19946" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[25.5px]">{`Scale, progress & growth motivate action`}</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pb-[0.885px] relative shrink-0 w-full" data-node-id="450:19947" data-name="Container">
                      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7060] text-[14px] w-full" data-node-id="450:19948" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[20.8px]">Users evaluated organizations by their demonstrated scale and momentum. Stagnant or unclear metrics discouraged giving.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-col gap-[12px] h-auto items-start p-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="450:19949" data-name="Background+Border">
                    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="450:19950">
                      <div className="bg-[#ede7f8] content-stretch flex items-center justify-center pb-[5.84px] pt-[4.16px] relative rounded-[10px] shrink-0 size-[40px]" data-node-id="450:19951" data-name="Background">
                        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[24px] whitespace-nowrap" data-node-id="450:19952" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[40.8px]">🤝</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-node-id="450:19953" data-name="Heading 4">
                        <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] whitespace-normal" data-node-id="450:19954" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[25.5px]">Emotional connection drives donation decisions</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start pb-[0.885px] relative shrink-0 w-full" data-node-id="450:19955" data-name="Container">
                      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7060] text-[14px] w-full" data-node-id="450:19956" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[20.8px]">When donors felt personally connected to the communities being served, they were significantly more likely to give</p>
                      </div>
                    </div>
                  </div>
                </CaseStudyStagger>
              </div>
              <div className="bg-[#ede7f8] border-[#6b46a0] border-l-3 border-solid content-stretch flex flex-col items-start pb-[18px] pl-[27px] pr-[24px] pt-[23.05px] relative rounded-br-[16px] rounded-tr-[16px] shrink-0 w-full" data-node-id="450:19957" data-name="Background+VerticalBorder">
                <div className="relative shrink-0 w-full" data-node-id="450:19958" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3d1f6e] text-[14px] w-full" data-node-id="450:19959" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[23.1px]">
                        Trust drives donations, and trust comes from visibility.
                        <br aria-hidden="true" />
                        Users needed to understand not just where their money goes, but the scale and impact of their contribution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CaseStudySection>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:19960" data-name="Separator" />
            <CaseStudySection className="content-stretch flex flex-col items-start py-5 sm:py-6 lg:py-8 relative shrink-0 w-full" data-node-id="450:19961" data-name="Section - THE DUAL USER PROBLEM">
              <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-node-id="450:19962">
                <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="450:19963">
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:19964">
                    <div className="content-stretch flex flex-col items-start w-full max-w-[680px] min-w-0 relative shrink-0" data-node-id="450:19965" data-name="Container">
                      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:19966" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[25.5px]">EARLY Design Decisions</p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="450:19967" data-name="Container">
                      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-node-id="450:19968" data-name="Heading 1">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                          <p className="flex-[1_0_0] font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-h-px min-w-px relative text-[#845482] text-[32px]" data-node-id="450:19969">
                            Focusing the scope
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-node-id="450:19970" data-name="Container">
                    <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7060] text-[16px] w-full whitespace-pre-wrap" data-node-id="450:19971" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[26.25px] mb-0">We identified that donors want transparency and control in where there money is going and who its going to.</p>
                      <p className="leading-[26.25px]">{`To support this  I realized that our solution needed thoughtful and robust filtering capabilities.`}</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-node-id="450:19972">
                  <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[28px] relative shrink-0 text-[#b5923c] text-[20px] w-full" data-node-id="450:19973">
                    Filter Methods
                  </p>
                  <CaseStudyStagger
                    className="content-stretch flex min-h-0 flex-col gap-[16px] items-start relative shrink-0 w-full md:h-[420px] md:flex-row md:items-stretch"
                    data-node-id="450:19974"
                    data-name="Container"
                    itemClassName={CASE_STUDY_CARD_STAGGER_ITEM_XL}
                    staggerMs={65}
                  >
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-auto items-start min-h-px min-w-px overflow-clip relative rounded-[12px] md:h-full" data-node-id="450:19975" data-name="Background+Border">
                      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-node-id="450:19976" data-name="Background">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[4px] py-[30.56px] relative size-full">
                          <div className="aspect-[818/42] border border-[#e8dfd0] border-solid flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-node-id="450:19977" data-name="Dropdown Filters and Tags (2) 1">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgDropdownFiltersAndTags21} />
                          </div>
                        </div>
                      </div>
                      <div className="bg-white border-2 border-[#2d6a4f] border-solid flex-[1_0_0] min-h-px min-w-px relative rounded-[18px] w-full" data-node-id="450:19978" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pb-[20px] pt-[19px] px-[20px] relative size-full">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19979" data-name="Heading 4">
                            <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[14px] w-full" data-node-id="450:19980" style={{ fontVariationSettings: "'opsz' 14" }}>
                              <ol start={1}>
                                <li className="ms-[21px]">
                                  <span className="leading-[25.5px]">Top filter bar</span>
                                </li>
                              </ol>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col gap-[4px] items-start pt-[7.2px] relative shrink-0 w-full" data-node-id="450:19981" data-name="Container">
                            <div className="content-stretch flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal items-start leading-[0] relative shrink-0 text-[#2d6a4f] text-[14px] w-full" data-node-id="450:19982" data-name="Container">
                              <div className="flex flex-col justify-center relative shrink-0 w-full" data-node-id="450:19983" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[20.4px]">+ Simple and easy to access</p>
                              </div>
                              <div className="flex flex-col justify-center relative shrink-0 w-full" data-node-id="450:19984" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[20.4px]">+ Supports quick, lightweight filtering</p>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19985" data-name="Container">
                              <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c0392b] text-[14px] w-full" data-node-id="450:19986" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[20.4px]">- Limited depth for more complex filtering</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-auto items-start min-h-px min-w-px overflow-clip relative rounded-[12px] md:h-full" data-node-id="450:19987" data-name="Background+Border">
                      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-node-id="450:19988" data-name="Background">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[4px] relative size-full">
                          <div className="aspect-[203/594] border border-[#e8dfd0] border-solid h-full relative rounded-[4px] shrink-0" data-node-id="450:19989" data-name="Filter Sidebar (1) 1">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgFilterSidebar11} />
                          </div>
                        </div>
                      </div>
                      <div className="bg-white border border-[#ddd8d0] border-solid flex-[1_0_0] min-h-px min-w-px relative rounded-[18px] w-full" data-node-id="450:19990" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pb-[20.01px] pt-[19px] px-[20px] relative size-full">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19991" data-name="Heading 4">
                            <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[14px] w-full" data-node-id="450:19992" style={{ fontVariationSettings: "'opsz' 14" }}>
                              <ol start={2}>
                                <li className="ms-[21px]">
                                  <span className="leading-[25.5px]">Side filter bar</span>
                                </li>
                              </ol>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col gap-[4px] items-start pt-[7.1px] relative shrink-0 w-full" data-node-id="450:19993" data-name="Container">
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19994" data-name="Container">
                              <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2d6a4f] text-[14px] w-full" data-node-id="450:19995" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[20.4px]">+ Allows filtering while maintaining map visibility</p>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal items-start leading-[0] relative shrink-0 text-[#c0392b] text-[14px] w-full" data-node-id="450:19996" data-name="Container">
                              <div className="flex flex-col justify-center relative shrink-0 w-full" data-node-id="450:19997" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[20.4px]">− Could end up having a ton of side bars</p>
                              </div>
                              <div className="flex flex-col justify-center relative shrink-0 w-full" data-node-id="450:19998" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[20.4px]">− Could potentially be very long</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-auto items-start min-h-px min-w-px overflow-clip relative rounded-[12px] md:h-full" data-node-id="450:19999" data-name="Background+Border">
                      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-node-id="450:20000" data-name="Background">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[4px] relative size-full">
                          <div className="aspect-[528/817] border border-[#e8dfd0] border-solid h-full relative rounded-[4px] shrink-0" data-node-id="450:20001" data-name="Filter Modal Popup (2) 1">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgFilterModalPopup21} />
                          </div>
                        </div>
                      </div>
                      <div className="bg-white border-2 border-[#2d6a4f] border-solid flex-[1_0_0] min-h-px min-w-px relative rounded-[18px] w-full" data-node-id="450:20002" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pb-[20px] pt-[19px] px-[20px] relative size-full">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20003" data-name="Heading 4">
                            <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[14px] w-full" data-node-id="450:20004" style={{ fontVariationSettings: "'opsz' 14" }}>
                              <ol start={3}>
                                <li className="ms-[21px]">
                                  <span className="leading-[25.5px]">Filter Modal</span>
                                </li>
                              </ol>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col gap-[4px] items-start pt-[7.2px] relative shrink-0 w-full" data-node-id="450:20005" data-name="Container">
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20006" data-name="Container">
                              <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2d6a4f] text-[14px] w-full" data-node-id="450:20007" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[20.4px]">+ Provides users control to select organizations and communities they resonate with</p>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20008" data-name="Container">
                              <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c0392b] text-[14px] w-full" data-node-id="450:20009" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[20.4px]">− Difficulty to go back and forth to edit filters</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CaseStudyStagger>
                  <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-node-id="450:20010" data-name="Container">
                    <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7060] text-[16px] w-full" data-node-id="450:20011" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[26.25px]">I selected a combination of methods 1 and 3 to provide users maximum control over the communities and organizations they can filter by, but also an easy way to go back and edit and view the applied filters on the map.</p>
                    </div>
                  </div>
                </div>
              </div>
            </CaseStudySection>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:20012" data-name="Separator" />
            <CaseStudySection className="content-stretch flex flex-col gap-[32px] items-start py-5 sm:py-6 lg:py-8 relative shrink-0 w-full" data-node-id="450:20013" data-name="Section - LATE STAGE DESIGN">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20014">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:20015">
                  <div className="content-stretch flex flex-col items-start w-full max-w-[680px] min-w-0 relative shrink-0" data-node-id="450:20016" data-name="Container">
                    <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:20017" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[25.5px]">Late Stage Design Decisions</p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="450:20018" data-name="Container">
                    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-node-id="450:20019" data-name="Heading 1">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                        <p className="flex-[1_0_0] font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-h-px min-w-px relative text-[#845482] text-[32px]" data-node-id="450:20020">
                          Refining Visual, Interaction, and Content Design
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex w-full max-w-[864px] min-w-0 flex-col gap-[32px] items-start pt-[32px] relative shrink-0" data-node-id="450:20021" data-name="DESIGN DECISIONS">
                <CaseStudyStagger
                  className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full lg:flex-row"
                  data-node-id="450:20022"
                  data-name="Decision 1: Filter Bar"
                  itemClassName={(i) =>
                    i === 0
                      ? 'min-h-0 min-w-0 w-full shrink-0 lg:w-[494px] lg:max-w-full'
                      : 'min-h-0 min-w-0 w-full lg:flex-1 lg:basis-0'
                  }
                  staggerMs={65}
                >
                  <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full lg:w-[494px]" data-node-id="450:20023" data-name="Background+Border">
                    <div className="bg-white border border-[#ddd] border-solid relative rounded-[10px] shrink-0 w-full" data-node-id="450:20024" data-name="Tags option">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start p-[17px] relative size-full">
                        <div className="relative shrink-0 w-full" data-node-id="450:20025" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                            <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[0.8px] uppercase w-full" data-node-id="450:20026" style={{ fontVariationSettings: "'opsz' 14" }}>
                              <p className="leading-[17px]">Option A — Tags</p>
                            </div>
                          </div>
                        </div>
                        <div className="aspect-[505/25] relative shrink-0 w-full" data-node-id="450:20027" data-name="Filter Bar (1) (2) 1">
                          <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
                            <img alt="" className="absolute h-[100.17%] left-[-38.85%] max-w-none top-[1.17%] w-[138.85%]" src={imgFilterBar121} />
                          </div>
                        </div>
                        <div className="relative shrink-0 w-full" data-node-id="450:20028" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                            <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c0392b] text-[14px] w-full" data-node-id="450:20029" style={{ fontVariationSettings: "'opsz' 14" }}>
                              <p className="leading-[18.7px]">× Cluttered when many filters active</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border-2 border-[#2d6a4f] border-solid relative rounded-[10px] shrink-0 w-full" data-node-id="450:20030" data-name="Indicator option">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start p-[18px] relative size-full">
                        <div className="relative shrink-0 w-full" data-node-id="450:20031" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                            <div className="flex flex-col font-['DM_Sans:SemiBold','Noto_Sans:Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2d6a4f] text-[14px] tracking-[0.8px] uppercase w-full" data-node-id="450:20032" style={{ fontVariationSettings: "'opsz' 14" }}>
                              <p className="leading-[17px]">Option B — Number Indicator ✓</p>
                            </div>
                          </div>
                        </div>
                        <div className="aspect-[255/12] relative shrink-0 w-full" data-node-id="450:20033" data-name="Property 1=Variant2 (1) 1">
                          <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
                            <img alt="" className="absolute h-[105.85%] left-[-31.76%] max-w-none top-[-2.38%] w-[131.76%]" src={imgProperty1Variant211} />
                          </div>
                        </div>
                        <div className="relative shrink-0 w-full" data-node-id="450:20034" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                            <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2d6a4f] text-[14px] w-full" data-node-id="450:20035" style={{ fontVariationSettings: "'opsz' 14" }}>
                              <p className="leading-[18.7px]">✓ Confirms filters active · keeps map uncluttered</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px py-[16px] relative" data-node-id="450:20036" data-name="Container">
                    <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[28px] relative shrink-0 text-[#b5923c] text-[20px] w-full" data-node-id="450:20037">
                      How should applied filters be indicated?
                    </p>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20038" data-name="Container">
                      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[15px] w-full" data-node-id="450:20039" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[26.25px]">The filter number indicator keeps the map as the primary focus, confirming filters are active without cluttering the interface when multiple selections are made.</p>
                      </div>
                    </div>
                  </div>
                </CaseStudyStagger>
                <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:20040" data-name="Separator" />
                <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="450:20041" data-name="Decision 1: Filter Bar">
                  <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="450:20042" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20043">
                      <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[28px] relative shrink-0 text-[#b5923c] text-[20px] w-full" data-node-id="450:20044">{`What's the best way to communicate district filter options?`}</p>
                    </div>
                    <div className="bg-[#ede7f8] border-[#6b46a0] border-l-3 border-solid content-stretch flex flex-col items-start pb-[18px] pl-[27px] pr-[24px] pt-[23.05px] relative rounded-br-[16px] rounded-tr-[16px] shrink-0 w-full" data-node-id="450:20045" data-name="Background+VerticalBorder">
                      <div className="relative shrink-0 w-full" data-node-id="450:20046" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                          <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3d1f6e] text-[14px] w-full" data-node-id="450:20047" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[23.1px]">Congressional and City Council districts function like zip codes in NYC; familiar to the people who need them, but not relevant to most donors.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CaseStudyStagger
                      className="content-stretch flex flex-row gap-[16px] flex-nowrap items-stretch overflow-clip relative shrink-0 w-full"
                      data-node-id="450:20048"
                      data-name="Background+Border"
                      itemClassName={CASE_STUDY_CARD_STAGGER_ITEM_XL}
                      staggerMs={55}
                    >
                      <div className="bg-white border border-[#ddd] border-solid flex-[1_0_0] min-h-px min-w-px relative rounded-[10px] self-stretch" data-node-id="450:20049" data-name="Tags option">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between pb-[33px] pt-[17px] px-[17px] relative size-full">
                          <div className="relative shrink-0 w-full" data-node-id="450:20050">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
                              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20051" data-name="Container">
                                <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[0.8px] uppercase w-full" data-node-id="450:20052" style={{ fontVariationSettings: "'opsz' 14" }}>
                                  <p className="leading-[17px]">{`Option A — Dynamic tags that update based on the selected borough `}</p>
                                </div>
                              </div>
                              <div className="aspect-[576/180] relative shrink-0 w-full" data-node-id="450:20053" data-name="Frame 239 (2) (1) 1">
                                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame239211} />
                              </div>
                            </div>
                          </div>
                          <div className="relative shrink-0 w-full" data-node-id="450:20054" data-name="Container">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                              <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c0392b] text-[14px] w-full" data-node-id="450:20055" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[18.7px]">× Could get cluttered if multiple boroughs are selected</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white border border-[#ddd] border-solid flex-[1_0_0] min-h-px min-w-px relative rounded-[10px] self-stretch" data-node-id="450:20056" data-name="Tags option">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between pb-[49px] pt-[13px] px-[17px] relative size-full">
                          <div className="relative shrink-0 w-full" data-node-id="450:20057">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
                              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20058" data-name="Container">
                                <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[0.8px] uppercase w-full" data-node-id="450:20059" style={{ fontVariationSettings: "'opsz' 14" }}>
                                  <p className="leading-[17px]">Option B — Text Field</p>
                                </div>
                              </div>
                              <div className="aspect-[81/25] relative shrink-0 w-full" data-node-id="450:20060" data-name="Frame 54 (1) 1">
                                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                  <img alt="" className="absolute h-[100.63%] left-[0.52%] max-w-none top-[-1.54%] w-[194.44%]" src={imgFrame5411} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="relative shrink-0 w-full" data-node-id="450:20061" data-name="Container">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                              <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c0392b] text-[14px] w-full" data-node-id="450:20062" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[18.7px]">{`× Doesn't support multi selection`}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white border border-[#ddd] border-solid flex-[1_0_0] min-h-px min-w-px relative rounded-[10px] self-stretch" data-node-id="450:20063" data-name="Tags option">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between pb-[49px] pt-[13px] px-[17px] relative size-full">
                          <div className="relative shrink-0 w-full" data-node-id="450:20064">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
                              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20065" data-name="Container">
                                <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[0.8px] uppercase w-full" data-node-id="450:20066" style={{ fontVariationSettings: "'opsz' 14" }}>
                                  <p className="leading-[17px]">Option C — DropDown</p>
                                </div>
                              </div>
                              <div className="aspect-[288/180] relative shrink-0 w-full" data-node-id="450:20067" data-name="Property 1=Variant3 (1) 1">
                                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProperty1Variant311} />
                              </div>
                            </div>
                          </div>
                          <div className="relative shrink-0 w-full" data-node-id="450:20068" data-name="Container">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                              <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c0392b] text-[14px] w-full" data-node-id="450:20069" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[18.7px]">× Requires long scrolling</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white border-2 border-[#2d6a4f] border-solid flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]" data-node-id="450:20070" data-name="Indicator option">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start p-[18px] relative size-full">
                          <div className="relative shrink-0 w-full" data-node-id="450:20071" data-name="Container">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                              <div className="flex flex-col font-['DM_Sans:SemiBold','Noto_Sans:Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2d6a4f] text-[14px] tracking-[0.8px] uppercase w-full" data-node-id="450:20072" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[17px]">Option d — Dropdown Scroll ✓</p>
                              </div>
                            </div>
                          </div>
                          <div className="aspect-[288/190] relative shrink-0 w-full" data-node-id="450:20073" data-name="Property 1=Default (1) (1) 1">
                            <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProperty1Default111} />
                          </div>
                          <div className="relative shrink-0 w-full" data-node-id="450:20074" data-name="Container">
                            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                              <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2d6a4f] text-[14px] w-full" data-node-id="450:20075" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[18.7px]">✓ Compact field that supports mulit selection and quick target selection</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CaseStudyStagger>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20076" data-name="Container">
                    <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[15px] w-full" data-node-id="450:20077" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[26.25px]">{`The dropdown search field was the clearest fit: compact on the modal, supports multiple selections, constrains input to valid options, and doesn't require scrolling through irrelevant choices to find a specific district.`}</p>
                    </div>
                  </div>
                </div>
                <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:20078" data-name="Separator" />
                <CaseStudyStagger
                  className="content-stretch flex min-h-0 flex-col gap-[24px] items-start relative shrink-0 w-full min-w-0 md:flex-row"
                  data-node-id="450:20079"
                  data-name="Decision 1: Filter Bar"
                  itemClassName={(i) =>
                    i === 0
                      ? 'min-h-0 min-w-0 w-full flex-1 basis-0 self-stretch lg:min-w-0 lg:pr-2'
                      : 'min-h-0 w-full shrink-0 self-stretch lg:w-[470px] lg:min-w-[470px] lg:max-w-[470px] lg:flex-none'
                  }
                  staggerMs={65}
                >
                  <div className="content-stretch flex flex-col gap-[24px] items-start min-h-0 min-w-0 py-[16px] relative w-full lg:flex-1" data-node-id="450:20080" data-name="Container">
                    <p className="min-w-0 font-['Libre_Baskerville:Italic',sans-serif] italic leading-[28px] text-[#b5923c] text-[20px] w-full" data-node-id="450:20081">
                      Whats the best way to communicate poverty line filter options?
                    </p>
                    <div className="content-stretch flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal gap-[12px] items-start leading-[0] relative shrink-0 text-[#6b6b6b] text-[15px] w-full" data-node-id="450:20082" data-name="Container">
                      <div className="flex flex-col justify-center relative shrink-0 w-full" data-node-id="450:20083" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[26.25px]">I decided to add a poverty metric filter to support donors motivation to donate to recipients that need it most, and to support transparency and impact communication</p>
                      </div>
                      <div className="flex flex-col justify-center relative shrink-0 w-full" data-node-id="450:20084" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[26.25px]">I decided to implement the set value slider because it is interactive, enjoyable to use, and visually appealing.</p>
                      </div>
                      <div className="flex flex-col justify-center relative shrink-0 w-full" data-node-id="450:20085" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[26.25px]">It is also intuitive with the field value being a range, fits compactly on an already long modal, and is easy to implement based on the format of our data.</p>
                      </div>
                    </div>
                  </div>
                  <CaseStudyStagger
                    className="content-stretch flex w-full min-w-0 flex-col gap-[16px] items-start justify-center overflow-clip relative self-stretch shrink-0 lg:w-[470px] lg:max-w-[470px]"
                    data-node-id="450:20086"
                    data-name="Background+Border"
                    itemClassName={CASE_STUDY_VERTICAL_STAGGER_ITEM}
                    staggerMs={55}
                  >
                    <div className="bg-white border border-[#ddd] border-solid relative rounded-[10px] shrink-0 w-full" data-node-id="450:20087" data-name="Tags option">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start p-[17px] relative size-full">
                        <div className="relative shrink-0 w-full" data-node-id="450:20088" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                            <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[0.8px] uppercase w-full" data-node-id="450:20089" style={{ fontVariationSettings: "'opsz' 14" }}>
                              <p className="leading-[17px]">Option B — Option Buttons</p>
                            </div>
                          </div>
                        </div>
                        <div className="h-[58px] relative shrink-0 w-[283px]" data-node-id="450:20090" data-name="Frame 50 (2) (1) 1">
                          <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
                            <img alt="" className="absolute h-[137.93%] left-[-0.06%] max-w-none top-[-38.38%] w-[100.13%]" src={imgFrame50211} />
                          </div>
                        </div>
                        <div className="relative shrink-0 w-full" data-node-id="450:20091" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                            <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c0392b] text-[14px] w-full" data-node-id="450:20092" style={{ fontVariationSettings: "'opsz' 14" }}>
                              <p className="leading-[18.7px]">× Ranges are not intuitive and clear</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border border-[#ddd] border-solid relative rounded-[10px] shrink-0 w-full" data-node-id="450:20093" data-name="Tags option">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start p-[17px] relative size-full">
                        <div className="relative shrink-0 w-full" data-node-id="450:20094" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                            <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[0.8px] uppercase w-full" data-node-id="450:20095" style={{ fontVariationSettings: "'opsz' 14" }}>
                              <p className="leading-[17px]">Option A — Slider</p>
                            </div>
                          </div>
                        </div>
                        <div className="aspect-[471/26] relative shrink-0 w-full" data-node-id="450:20096" data-name="Frame 427319671 (1) 1">
                          <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
                            <img alt="" className="absolute h-[223.42%] left-0 max-w-none top-[-124.08%] w-full" src={imgFrame42731967111} />
                          </div>
                        </div>
                        <div className="relative shrink-0 w-full" data-node-id="450:20097" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                            <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c0392b] text-[14px] w-full" data-node-id="450:20098" style={{ fontVariationSettings: "'opsz' 14" }}>
                              <p className="leading-[18.7px]">× Unnecessary level of precision and difficult to implement with our data format</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border-2 border-[#2d6a4f] border-solid relative rounded-[10px] shrink-0 w-full" data-node-id="450:20099" data-name="Indicator option">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start p-[18px] relative size-full">
                        <div className="relative shrink-0 w-full" data-node-id="450:20100" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                            <div className="flex flex-col font-['DM_Sans:SemiBold','Noto_Sans:Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2d6a4f] text-[14px] tracking-[0.8px] uppercase w-full" data-node-id="450:20101" style={{ fontVariationSettings: "'opsz' 14" }}>
                              <p className="leading-[17px]">Option B — Set Value Slider ✓</p>
                            </div>
                          </div>
                        </div>
                        <div className="aspect-[576/45] relative shrink-0 w-full" data-node-id="450:20102" data-name="Property 1=Variant4 (1) (1) 1">
                          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProperty1Variant4111} />
                        </div>
                        <div className="relative shrink-0 w-full" data-node-id="450:20103" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                            <div className="flex flex-col font-['DM_Sans:Regular','Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2d6a4f] text-[14px] w-full" data-node-id="450:20104" style={{ fontVariationSettings: "'opsz' 14" }}>
                              <p className="leading-[18.7px]">✓ Compact, Interactive, easy to implement</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CaseStudyStagger>
                </CaseStudyStagger>
              </div>
            </CaseStudySection>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:20105" data-name="Separator" />
            <CaseStudySection className="content-stretch flex flex-col gap-[32px] items-start py-5 sm:py-6 lg:py-8 relative shrink-0 w-full" data-node-id="450:20106">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20107">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20108">
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:20109">
                    <div className="content-stretch flex flex-col items-start w-full max-w-[680px] min-w-0 relative shrink-0" data-node-id="450:20110" data-name="Container">
                      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:20111" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[25.5px]">Hi-Fidelity</p>
                      </div>
                    </div>
                    <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-w-full relative shrink-0 text-[#845482] text-[32px] w-[min-content]" data-node-id="450:20112">
                      Outcome: How this solution addresses our problem space
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-node-id="450:20113">
                <CaseStudyStagger
                  className="content-stretch flex flex-row gap-[16px] items-stretch relative shrink-0 w-full"
                  data-node-id="450:20114"
                  itemClassName={CASE_STUDY_CARD_STAGGER_ITEM_XL}
                  staggerMs={65}
                >
                  <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px p-[24px] relative rounded-[16px]" data-node-id="450:20115">
                    <div className="bg-[#ede7f8] content-stretch flex items-center justify-center pb-[5.84px] pt-[4.16px] relative rounded-[10px] shrink-0 size-[40px]" data-node-id="450:20116" data-name="Background">
                      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[24px] whitespace-nowrap" data-node-id="450:20117" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[40.8px]">💰</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20118" data-name="Heading 5">
                      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#432060] text-[14px] w-full" data-node-id="450:20119" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[25.5px]">Builds trust through financial transparency</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="450:20120">
                      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:20121" data-name="Container">
                        <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:20122" data-name="Margin">
                          <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:20123" data-name="Background" />
                        </div>
                        <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#555] text-[14px]" data-node-id="450:20124" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[19.5px]">Provides transparency about where resources are allocated</p>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:20125" data-name="Container">
                        <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:20126" data-name="Margin">
                          <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:20127" data-name="Background" />
                        </div>
                        <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#555] text-[14px]" data-node-id="450:20128" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[19.5px]">Provides control to select specific regions or organizations to receive funding</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px p-[24px] relative rounded-[16px] self-stretch" data-node-id="450:20129">
                    <div className="bg-[#ede7f8] content-stretch flex items-center justify-center pb-[5.84px] pt-[4.16px] relative rounded-[10px] shrink-0 size-[40px]" data-node-id="450:20130" data-name="Background">
                      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[24px] whitespace-nowrap" data-node-id="450:20131" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[40.8px]">📈</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:20132">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20133" data-name="Heading 5">
                        <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#432060] text-[14px] w-full" data-node-id="450:20134" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[25.5px]">Makes impact and scale, visible and understandable</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20135">
                        <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:20136" data-name="Container">
                          <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:20137" data-name="Margin">
                            <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:20138" data-name="Background" />
                          </div>
                          <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#555] text-[14px]" data-node-id="450:20139" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[19.5px]">Provides visibility of where, who, and how much rethink impacts NYC</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px p-[25px] relative rounded-[16px] self-stretch" data-node-id="450:20140" data-name="Background+Border">
                    <div className="bg-[#ede7f8] relative rounded-[10px] shrink-0 size-[40px]" data-node-id="450:20141" data-name="Background">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pb-[5.84px] pt-[4.16px] relative size-full">
                        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[24px] whitespace-nowrap" data-node-id="450:20142" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[40.8px]">🤝</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-full" data-node-id="450:20143" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20144" data-name="Heading 4">
                          <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#432060] text-[14px] w-full" data-node-id="450:20145" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[23.1px]">Fostering connection with donation recipients</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-full" data-node-id="450:20146">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:20147" data-name="Container">
                          <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:20148" data-name="Margin">
                            <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:20149" data-name="Background" />
                          </div>
                          <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#555] text-[14px]" data-node-id="450:20150" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[19.5px]">Supports robust filtering by region and economic status of donation recipients</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CaseStudyStagger>
              </div>
              <div className="aspect-[1280/1378] relative shrink-0 w-full" data-node-id="450:20151" data-name="Open Filter Modal (4) 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgOpenFilterModal41} />
              </div>
            </CaseStudySection>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:20152" data-name="Separator" />
            <CaseStudySection
              id="case-study-prototype"
              className="content-stretch flex scroll-mt-8 flex-col gap-[32px] items-start py-5 sm:py-6 lg:py-8 relative shrink-0 w-full"
              data-node-id="450:20153"
            >
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20154">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20155">
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:20156">
                    <div className="content-stretch flex flex-col items-start w-full max-w-[680px] min-w-0 relative shrink-0" data-node-id="450:20157" data-name="Container">
                      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:20158" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[25.5px]">Prototype</p>
                      </div>
                    </div>
                    <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-w-full relative shrink-0 text-[#845482] text-[32px] w-[min-content]" data-node-id="450:20159">
                      Putting it all together...
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="relative flex min-h-[320px] w-full shrink-0 items-center justify-center overflow-hidden rounded-[24px] bg-[#c9ac75] px-3 py-8 sm:min-h-[417px] sm:px-6"
                data-node-id="450:20160"
                data-name="Container"
              >
                <div className="mx-auto flex w-full max-w-[min(100%,648px)] justify-center sm:max-w-none">
                  <CmsxLaptopVideoFrame
                    variant="dataScienceHero"
                    posterSrc={imgFilterBar121}
                    videoSrc="/videos/filter-bar-flow.mp4"
                    className="pointer-events-none w-full shrink-0"
                  />
                </div>
              </div>
            </CaseStudySection>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:20164" data-name="Separator" />
            <CaseStudySection
              className="content-stretch flex flex-col gap-[32px] items-start max-w-[1100px] py-5 sm:py-6 lg:py-8 relative shrink-0 w-full"
              data-node-id="450:20165"
              data-name="Section - REFLECTIONS"
            >
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:20166">
                <div className="content-stretch flex flex-col items-start w-full max-w-[680px] min-w-0 relative shrink-0" data-node-id="450:20167" data-name="Container">
                  <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:20168" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[25.5px]">Reflections</p>
                  </div>
                </div>
                <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="450:20169" data-name="Container">
                  <div className="flex-[1_0_0] min-h-px min-w-px relative" data-node-id="450:20170" data-name="Heading 1">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                      <p className="flex-[1_0_0] font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-h-px min-w-px relative text-[#845482] text-[32px]" data-node-id="450:20171">
                        What I took from this
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <CaseStudyStagger
                className="grid w-full grid-cols-2 gap-4"
                data-node-id="450:20172"
                data-name="Container"
                itemClassName="min-h-0 min-w-0 [&>*]:h-full"
                staggerMs={55}
              >
                    <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-full min-h-0 items-start min-h-px min-w-px p-[24px] relative rounded-[16px]" data-node-id="450:20174" data-name="Background+Border">
                      <div className="bg-[#ede7f8] content-stretch flex items-center justify-center pb-[5.84px] pt-[4.16px] relative rounded-[10px] shrink-0 size-[40px]" data-node-id="450:20175" data-name="Background">
                        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" data-node-id="450:20176" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[37.4px]">🔒</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20177" data-name="Heading 4">
                        <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] w-full" data-node-id="450:20178" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[22.1px]">Constraints shape better design</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20179" data-name="Container">
                        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] w-full" data-node-id="450:20180" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[18px]">When we couldn’t support the heatmap with exhisting data, it forced us to validate feasibility earlier and rethink how we approached ideation.</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-full min-h-0 items-start min-h-px min-w-px p-[24px] relative rounded-[16px]" data-node-id="450:20181" data-name="Background+Border">
                      <div className="bg-[#ede7f8] content-stretch flex items-center justify-center pb-[5.84px] pt-[4.16px] relative rounded-[10px] shrink-0 size-[40px]" data-node-id="450:20182" data-name="Background">
                        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" data-node-id="450:20183" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[37.4px]">🤝</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20184" data-name="Heading 4">
                        <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] w-full" data-node-id="450:20185" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[22.1px]">Designing for trust, not just usability</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20186" data-name="Container">
                        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] w-full" data-node-id="450:20187" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[18px]">This project shifted my perspective on the relationship between usability to trust. Every decision, from filters to metrics, needed to make users feel confident and informed.</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-full min-h-0 items-start min-h-px min-w-px p-[24px] relative rounded-[16px]" data-node-id="450:20189" data-name="Background+Border">
                      <div className="bg-[#ede7f8] content-stretch flex items-center justify-center pb-[5.84px] pt-[4.16px] relative rounded-[10px] shrink-0 size-[40px]" data-node-id="450:20190" data-name="Background">
                        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" data-node-id="450:20191" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[37.4px]">🧩</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20192" data-name="Heading 4">
                        <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] w-full" data-node-id="450:20193" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[22.1px]">Rigor in small decisions compounds</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20194" data-name="Container">
                        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] w-full" data-node-id="450:20195" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[18px]">{`The filter bar decision felt minor in isolation. But across 20+ design decisions, that same logic, map needs to stay primary and uncluttered, kept surfacing. `}</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-full min-h-0 items-start min-h-px min-w-px p-[24px] relative rounded-[16px]" data-node-id="450:20196" data-name="Background+Border">
                      <div className="bg-[#ede7f8] content-stretch flex items-center justify-center pb-[5.84px] pt-[4.16px] relative rounded-[10px] shrink-0 size-[40px]" data-node-id="450:20197" data-name="Background">
                        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" data-node-id="450:20198" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[37.4px]">💻</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20199" data-name="Heading 4">
                        <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] w-full" data-node-id="450:20200" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[22.1px]">Cross-functional collaboration is a skill</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20201" data-name="Container">
                        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] w-full" data-node-id="450:20202" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[18px]">Working closely with developers and TLs meant translating design decisions into technical constraints, and learning to ask feasibility questions early led to stronger outcomes.</p>
                        </div>
                      </div>
                    </div>
              </CaseStudyStagger>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20203" data-name="Container">
                <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[16px] w-full" data-node-id="450:20204" style={{ fontVariationSettings: "'opsz' 14" }}>
                  <p className="leading-[26.25px]">I learned how to translate complex, real-world systems into experiences that are both informative and emotionally resonant.</p>
                </div>
              </div>
              <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:20205" data-name="Separator" />
            </CaseStudySection>
            <div className="content-stretch flex flex-col items-center pt-[40px] relative shrink-0 w-full" data-node-id="450:20206">
              <a
                href={docUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#432060] content-stretch flex items-center justify-center px-[40px] py-[10px] relative rounded-[16777200px] shrink-0 no-underline"
                data-node-id="450:20207"
                data-name="Home"
              >
                <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" data-node-id="450:20208" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Read Full Case Study
                </p>
              </a>
            </div>
            <div className="content-stretch flex gap-[12px] items-center justify-end pt-[96px] pb-16 relative shrink-0 w-full" data-node-id="450:20209" data-name="Container">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="450:20210" data-name="Container">
                <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:20211" style={{ fontVariationSettings: "'opsz' 14" }}>
                  <p className="leading-[22.1px]">Next Project :</p>
                </div>
              </div>
              <Link
                to={nextProject.to}
                className="content-stretch flex flex-col items-start relative shrink-0 no-underline"
                data-node-id="450:20212"
                data-name="Link"
              >
                <div className="capitalize flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a2472] text-[14px] tracking-[0.52px] whitespace-nowrap" data-node-id="450:20213" style={{ fontVariationSettings: "'opsz' 14" }}>
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