import { Link } from 'react-router-dom';
import { ActPhoneVideoFrame } from '../components/ActPhoneVideoFrame';
import { CaseStudyMainNav } from '../components/CaseStudyMainNav';
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
  CaseStudySection,
  CaseStudyStagger,
  SoftAppearOnce,
} from '../components/SoftAppear';

/** ACT Brainstorming rows: equal-width columns + equal height; inner column fills stagger cell (`h-full`). */
const actBrainstormStaggerCol =
  'flex min-h-0 min-w-0 flex-1 basis-0 flex-col self-stretch w-full [&>*]:h-full [&>*]:min-h-0 [&>*]:flex [&>*]:flex-col';

const imgImage631 = "https://www.figma.com/api/mcp/asset/b5c8f95c-89cd-43e4-a0a7-3a28caa95fcf";
/** Figma 450:20713 — case study hero (dual phone mockup), replaces mistaken static asset */
const imgHeroBannerAct20713 = "https://www.figma.com/api/mcp/asset/e3cdfef2-d335-4281-bab0-c0d57cade2f1";
const imgImage641 = "https://www.figma.com/api/mcp/asset/a4dcdf76-5318-404a-bb46-e8bd7ccb1573";
const imgQuestionCardTap111 = "https://www.figma.com/api/mcp/asset/0b87a0c5-3a70-4639-9bb2-34b999c051b1";
const imgExplanationModal111 = "https://www.figma.com/api/mcp/asset/1e8f9198-a29d-4fc7-a41b-c755e0eb3866";
const imgQuestionCardTap311 = "https://www.figma.com/api/mcp/asset/396b0c5d-8c3b-43d8-a76e-76b8dca83eff";
const imgQuestionCardTap211 = "https://www.figma.com/api/mcp/asset/d42fa79a-d0aa-4873-a44f-0c6f6fe94a6e";
const imgQuestionCardTap511 = "https://www.figma.com/api/mcp/asset/70a3d64c-aabd-472c-bac0-a86e499018cb";
const imgQuestionCardTap411 = "https://www.figma.com/api/mcp/asset/3c0fbfb7-3fe5-445a-9ff3-1043415cffbb";
const imgDeckPreviewShowCards11 = "https://www.figma.com/api/mcp/asset/888f1bd1-f652-4a8b-94e5-b250a59962f1";
const imgDeckPreviewDescribeCards61 = "https://www.figma.com/api/mcp/asset/87126ae1-728f-40dd-ace2-f1ed8b08ba74";
const imgDeckPreviewDescribeCards111 = "https://www.figma.com/api/mcp/asset/860cd9d3-9c3a-4374-8932-327d070271e0";
const imgDeckPreviewDescriptionShowCards21 = "https://www.figma.com/api/mcp/asset/4604aceb-708c-4b6b-860d-921f9856cd02";
const imgSituationalQuestion211 = "https://www.figma.com/api/mcp/asset/7b9b3649-7d13-4d75-b753-9ed121deccb8";
const imgSituationalQuestion111 = "https://www.figma.com/api/mcp/asset/d8de37ee-2f70-4d35-8fac-2fc2c8feec0a";
const imgSituationalQuestion511 = "https://www.figma.com/api/mcp/asset/0e58a498-b5c3-43db-92ab-60bbb43c9c4f";
const imgDeckPreviewDescribeCards1 = "https://www.figma.com/api/mcp/asset/f43333dd-dad5-4cc5-bf76-b834aa05aae1";
const imgCardFront71 = "https://www.figma.com/api/mcp/asset/1662ca8f-f7fd-4f2c-93cf-1f1c723fe0ac";
const imgParentTip1 = "https://www.figma.com/api/mcp/asset/f3f4e3c8-dcf1-4205-8962-5b32bc1fbe93";
const imgExplanation1 = "https://www.figma.com/api/mcp/asset/73394954-f7aa-408d-a031-d91b06464af0";
const imgTransitionToSituationQuestions1 = "https://www.figma.com/api/mcp/asset/54e3bc9d-92a5-4197-87f5-34a0475e72c5";
export default function PersonalWebsiteDesignPortfolio() {
  const docUrl = CASE_STUDY_DOC_URL['act'];
  const nextProject = nextCaseStudyAfter('act');

  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-node-id="450:20659" data-name="Personal Website Design Portfolio">
      <CaseStudyMainNav />
      <div
        className={`relative flex shrink-0 flex-col items-start bg-[#fdfcfb] ${caseStudyColumnClass}`}
        data-node-id="450:20675"
        data-name="RootLayout"
      >
        <div className="relative w-full min-w-0 shrink-0 bg-[#fdfcfb]" data-node-id="450:20676" data-name="ProjectDetail">
          <div
            className={`relative flex size-full flex-col items-start gap-8 border-0 border-transparent bg-clip-padding ${caseStudyArticlePaddingXClass}`}
          >
            <SoftAppearOnce
              className={`content-stretch flex flex-col items-start relative shrink-0 w-full ${caseStudyHeroStackGapClass} ${caseStudyHeroTopPaddingClass}`}
              data-node-id="450:20677"
            >
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="450:20678" data-name="Section - HERO">
                <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-node-id="450:20679">
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="450:20680" data-name="Container">
                    <Link
                      to="/work"
                      className="content-stretch flex flex-col items-start relative shrink-0 no-underline"
                      data-node-id="450:20681"
                      data-name="Link"
                    >
                      <div className="capitalize flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a2472] text-[0px] tracking-[0.52px] whitespace-nowrap" data-node-id="450:20682" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="text-[14px]">
                          <span className="leading-[22.1px]">← A</span>
                          <span className="leading-[22.1px] lowercase">LL</span>
                          <span className="leading-[22.1px]">{` projects`}</span>
                        </p>
                      </div>
                    </Link>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="450:20683" data-name="Container">
                      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[13px] whitespace-nowrap" data-node-id="450:20684" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[22.1px]">/</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="450:20685" data-name="Container">
                      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:20686" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[22.1px]">ACT</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="450:20687" data-name="Heading 2">
                    <p className="flex-[1_0_0] font-['Libre_Baskerville:Italic',sans-serif] italic leading-[1.12] min-h-px min-w-px relative text-[#432060] text-[clamp(2rem,7vw,3.75rem)] whitespace-normal break-words" data-node-id="450:20688">
                      Alaska Children’s Trust (ACT) · Hack4Impact
                    </p>
                  </div>
                </div>
                <div className="border-[#ddd8d0] border-b border-solid content-stretch flex flex-col gap-5 items-start pb-[30px] pt-[29px] relative shrink-0 w-full xl:flex-row xl:items-center xl:justify-between" data-node-id="450:20689" data-name="Border">
                  <div className="relative shrink-0 w-full lg:w-auto" data-node-id="450:20690" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative size-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20691" data-name="Label">
                        <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[12px] tracking-[0.88px] uppercase whitespace-nowrap" data-node-id="450:20692" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[18.7px]">Role</p>
                        </div>
                      </div>
                      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] whitespace-normal" data-node-id="450:20693" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[23.8px]">Product Designer</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full lg:w-auto" data-node-id="450:20694" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative size-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="450:20695" data-name="Label">
                        <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[12px] tracking-[0.88px] uppercase whitespace-nowrap" data-node-id="450:20696" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[18.7px]">TEAM</p>
                        </div>
                      </div>
                      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[14px] whitespace-normal" data-node-id="450:20697" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[23.8px]">1 PM · 1 TL · 3 Designers</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full lg:w-auto" data-node-id="450:20698" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative size-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20699" data-name="Label">
                        <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[12px] tracking-[0.88px] uppercase whitespace-nowrap" data-node-id="450:20700" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[18.7px]">Timeline</p>
                        </div>
                      </div>
                      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[14px] whitespace-normal" data-node-id="450:20701" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[23.8px]">Spring 2025</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full lg:w-[391px]" data-node-id="450:20702" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
                      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[19px] justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[12px] tracking-[0.88px] uppercase w-full" data-node-id="450:20703" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[18.7px]">Type</p>
                      </div>
                      <div className="content-stretch flex flex-wrap gap-[8px] h-auto items-start relative shrink-0 w-full" data-node-id="450:20704" data-name="ProjectDetail">
                        <div className="bg-[#d3e3e9] h-[24px] relative rounded-[16777200px] shrink-0" data-node-id="450:20705" data-name="Text">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[16px] py-[4px] relative size-full">
                            <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#3a7992] text-[12px] whitespace-nowrap" data-node-id="450:20706" style={{ fontVariationSettings: "'opsz' 14" }}>
                              Social Good
                            </p>
                          </div>
                        </div>
                        <div className="bg-[#d3e3e9] h-[24px] relative rounded-[16777200px] shrink-0" data-node-id="450:20707" data-name="Text">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[16px] py-[4px] relative size-full">
                            <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#3a7992] text-[12px] whitespace-nowrap" data-node-id="450:20708" style={{ fontVariationSettings: "'opsz' 14" }}>
                              Interaction Design
                            </p>
                          </div>
                        </div>
                        <div className="bg-[#e5e4e1] h-[24px] relative rounded-[16777200px] shrink-0" data-node-id="450:20709" data-name="Text">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[16px] py-[4px] relative size-full">
                            <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#999181] text-[12px] whitespace-nowrap" data-node-id="450:20710" style={{ fontVariationSettings: "'opsz' 14" }}>
                              Mobile
                            </p>
                          </div>
                        </div>
                        <div className="bg-[#e5e4e1] h-[24px] relative rounded-[16777200px] shrink-0" data-node-id="450:20711" data-name="Text">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[16px] py-[4px] relative size-full">
                            <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#999181] text-[12px] whitespace-nowrap" data-node-id="450:20712" style={{ fontVariationSettings: "'opsz' 14" }}>
                              0 → 1
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Hero: static phone mockup — prototype video in #case-study-prototype (450:21041). */}
              <div
                className="relative h-[min(417px,70vw)] w-full min-h-[240px] shrink-0 overflow-hidden rounded-[24px] bg-[#7a9fb0] sm:h-[417px]"
                data-node-id="450:20713"
                data-name="Container"
              >
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[24px]">
                  <div className="absolute inset-0 rounded-[24px] bg-[#7a9fb0]" />
                  <div className="absolute inset-0 overflow-hidden rounded-[24px]">
                    <img
                      alt=""
                      className="pointer-events-none absolute h-[126.98%] max-w-none left-[13.38%] top-[-13.47%] w-[73.31%]"
                      src={imgHeroBannerAct20713}
                    />
                  </div>
                </div>
              </div>
            </SoftAppearOnce>
            <CaseStudySection
              className="content-stretch flex flex-col gap-[16px] items-start py-5 sm:py-6 lg:py-8 relative shrink-0 w-full"
              data-node-id="450:20717"
              data-name="Section - OVERVIEW"
            >
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:20718">
                <div className="content-stretch flex flex-col items-start w-full max-w-[680px] min-w-0 relative shrink-0" data-node-id="450:20719" data-name="Container">
                  <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:20720" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[25.5px]">Overview</p>
                  </div>
                </div>
                <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="450:20721" data-name="Container">
                  <div className="flex-[1_0_0] min-h-px min-w-px relative" data-node-id="450:20722" data-name="Heading 1">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                      <p className="flex-[1_0_0] font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-h-px min-w-px relative text-[#845482] text-[32px]" data-node-id="450:20723">
                        Helping parents and children navigate internet safety through a guided, interactive experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[3.01px] relative shrink-0 w-full" data-node-id="450:20724" data-name="Container">
                <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[16px] w-full" data-node-id="450:20725" style={{ fontVariationSettings: "'opsz' 14" }}>
                  <p className="leading-[25.5px]">{`Alaska Children's Trust (ACT) is a statewide nonprofit dedicated to preventing child abuse and neglect. One of their most used resource, the ACT Safety Deck, provided parents with guidance on keeping children safe online. But it only existed as a PDF, making it costly to print, slow to distribute, and nearly impossible to use interactively.`}</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[3.01px] relative shrink-0 w-full" data-node-id="450:20726" data-name="Container">
                <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[16px] w-full" data-node-id="450:20727" style={{ fontVariationSettings: "'opsz' 14" }}>
                  <p className="leading-[25.5px]">Working with Hack4Impact Cornell, I partnered with ACT to design an iOS mobile app that digitized the Safety Deck: making it accessible offline, interactive, and structured specifically to make support challenging conversations.</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[3.01px] relative shrink-0 w-full" data-node-id="450:20728" data-name="Container">
                <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[16px] w-full" data-node-id="450:20729" style={{ fontVariationSettings: "'opsz' 14" }}>
                  <p className="leading-[25.5px]">I was the primary designer assigned to the Deck feature, the flashcard experience that sits at the heart of the app.</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[40px] relative shrink-0" data-node-id="450:20730">
                <button
                  type="button"
                  onClick={scrollToCaseStudyPrototype}
                  className="cursor-pointer border-0 bg-[#845482] content-stretch flex items-end px-[40px] py-[10px] relative rounded-[16777200px] shrink-0"
                  data-node-id="450:20731"
                  data-name="Button"
                >
                  <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" data-node-id="450:20732" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Jump to Solution
                  </p>
                </button>
              </div>
            </CaseStudySection>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:20733" data-name="Separator" />
            <CaseStudySection
              className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full"
              data-node-id="450:20734"
              data-name="Section - THE DUAL USER PROBLEM"
            >
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:20735">
                <div className="content-stretch flex flex-col items-start w-full max-w-[680px] min-w-0 relative shrink-0" data-node-id="450:20736" data-name="Container">
                  <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:20737" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[25.5px]">The Problem</p>
                  </div>
                </div>
                <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="450:20738" data-name="Container">
                  <div className="flex-[1_0_0] min-h-px min-w-px relative" data-node-id="450:20739" data-name="Heading 1">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                      <p className="flex-[1_0_0] font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-h-px min-w-px relative text-[#845482] text-[32px]" data-node-id="450:20740">{`A resource that couldn't reach the people who needed it`}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-node-id="450:20741">
                <CaseStudyStagger
                  className="content-stretch flex min-h-[89px] font-['DM_Sans:SemiBold',sans-serif] font-semibold flex-row gap-[24px] items-stretch relative shrink-0 w-full"
                  data-node-id="450:20742"
                  itemClassName={CASE_STUDY_CARD_STAGGER_ITEM_XL}
                >
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative rounded-[16px] self-stretch" data-node-id="450:20743" data-name="Background+Border">
                    <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:20744" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[21px]">01</p>
                    </div>
                    <p className="leading-[28px] min-w-0 w-full relative shrink-0 text-[#432060] text-[16px] whitespace-normal break-words" data-node-id="450:20745" style={{ fontVariationSettings: "'opsz' 14" }}>
                      The Safety Deck exists as physical cards but isn’t widely used
                    </p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative rounded-[16px] self-stretch" data-node-id="450:20746" data-name="Background+Border">
                    <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:20747" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[21px]">02</p>
                    </div>
                    <p className="leading-[28px] min-w-0 w-full relative shrink-0 text-[#432060] text-[16px] whitespace-normal break-words" data-node-id="450:20748" style={{ fontVariationSettings: "'opsz' 14" }}>{`Distribution is costly and limited `}</p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative rounded-[16px] self-stretch" data-node-id="450:20749" data-name="Background+Border">
                    <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:20750" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[21px]">03</p>
                    </div>
                    <p className="leading-[28px] min-w-0 w-full relative shrink-0 text-[#432060] text-[16px] whitespace-normal break-words" data-node-id="450:20751" style={{ fontVariationSettings: "'opsz' 14" }}>
                      The PDF format doesn’t easily support parent child conversations
                    </p>
                  </div>
                </CaseStudyStagger>
              </div>
            </CaseStudySection>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:20752" data-name="Separator" />
            <CaseStudySection
              className={`content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full ${caseStudySectionPaddingYClass}`}
              data-node-id="450:20753"
              data-name="Section - CONSTRAINTS"
            >
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="450:20754">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:20755">
                  <div className="content-stretch flex flex-col items-start w-full max-w-[680px] min-w-0 relative shrink-0" data-node-id="450:20756" data-name="Container">
                    <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:20757" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[25.5px]">User Research</p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="450:20758" data-name="Container">
                    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-node-id="450:20759" data-name="Heading 1">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                        <p className="flex-[1_0_0] font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-h-px min-w-px relative text-[#845482] text-[32px]" data-node-id="450:20760">
                          What we learned about how families actually use this
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-node-id="450:20761" data-name="Container">
                  <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7060] text-[16px] w-full" data-node-id="450:20762" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[26.25px] whitespace-pre-wrap">{`I interviewed 3 students and a parent-child pair who had previously used the physical product. The research surfaced insights that fundamentally shaped our design direction;  particularly around Alaska's unique connectivity context and how parents actually want to use the deck.`}</p>
                  </div>
                </div>
              </div>
              <div className="aspect-[1602/794] relative shrink-0 w-full" data-node-id="450:20763" data-name="image (63) 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage631} />
              </div>
              {/* Figma 450:20764 — 2×2 grid; full article width (no 864px cap) so cards use the column on large screens. */}
              <CaseStudyStagger
                className="grid w-full min-w-0 grid-cols-2 gap-4 pt-[14px]"
                data-node-id="450:20764"
                data-name="Container"
                itemClassName="min-h-0 min-w-0 [&>*]:h-full"
                staggerMs={55}
              >
                <div className="flex min-h-0 min-w-0 flex-col gap-[12px] rounded-[16px] border border-solid border-[#ddd8d0] bg-white p-[24px] h-full" data-node-id="450:20766" data-name="Background+Border">
                  <div className="bg-[#ede7f8] content-stretch flex items-center justify-center pb-[5.84px] pt-[4.16px] relative rounded-[10px] shrink-0 size-[40px]" data-node-id="450:20767" data-name="Background">
                    <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" data-node-id="450:20768" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[37.4px]">🌐</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20769" data-name="Heading 4">
                    <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] w-full" data-node-id="450:20770" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[25.5px]">Internet access in Alaska is sparse</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20771" data-name="Container">
                    <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7060] text-[14px] w-full" data-node-id="450:20772" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[20.8px]">Internet access is unreliable across much of the state. Offline functionality was a core requirement for the product to be usable.</p>
                    </div>
                  </div>
                </div>
                <div className="flex min-h-0 min-w-0 flex-col gap-[12px] rounded-[16px] border border-solid border-[#ddd8d0] bg-white p-[24px] h-full" data-node-id="450:20773" data-name="Background+Border">
                  <div className="bg-[#ede7f8] content-stretch flex items-center justify-center pb-[5.84px] pt-[4.16px] relative rounded-[10px] shrink-0 size-[40px]" data-node-id="450:20774" data-name="Background">
                    <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" data-node-id="450:20775" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[37.4px]">🗣️</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20776" data-name="Heading 4">
                    <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] w-full" data-node-id="450:20777" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[25.5px]">Parents want a conversation starter, not a curriculum</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pb-[0.885px] relative shrink-0 w-full" data-node-id="450:20778" data-name="Container">
                    <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7060] text-[14px] w-full" data-node-id="450:20779" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[20.8px]">{`Most parents needed the deck as a way to open dialogue with their child around awkward topics, not deliver comprehensive education. `}</p>
                    </div>
                  </div>
                </div>
                <div className="flex min-h-0 min-w-0 flex-col gap-[12px] rounded-[16px] border border-solid border-[#ddd8d0] bg-white p-[24px] h-full" data-node-id="450:20781" data-name="Background+Border">
                  <div className="bg-[#ede7f8] content-stretch flex items-center justify-center pb-[5.84px] pt-[4.16px] relative rounded-[10px] shrink-0 size-[40px]" data-node-id="450:20782" data-name="Background">
                    <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[24px] text-black whitespace-nowrap" data-node-id="450:20783" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[40.8px]">⚠️</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20784" data-name="Heading 4">
                    <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] whitespace-normal break-words w-full" data-node-id="450:20785" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[25.5px]">Content safety is a core parental concern</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pb-[0.885px] relative shrink-0 w-full" data-node-id="450:20786" data-name="Container">
                    <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7060] text-[14px] w-full" data-node-id="450:20787" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[20.8px]">Parents wanted to know what their children are learning about before their kids learn it. Giving parents control and transparency over content was essential to trust in the product.</p>
                    </div>
                  </div>
                </div>
                <div className="flex min-h-0 min-w-0 flex-col gap-[12px] rounded-[16px] border border-solid border-[#ddd8d0] bg-white p-[24px] h-full" data-node-id="450:20788" data-name="Background+Border">
                  <div className="bg-[#ede7f8] content-stretch flex items-center justify-center pb-[5.84px] pt-[4.16px] relative rounded-[10px] shrink-0 size-[40px]" data-node-id="450:20789" data-name="Background">
                    <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[24px] text-black whitespace-nowrap" data-node-id="450:20790" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[40.8px]">🩹</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20791" data-name="Heading 4">
                    <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] whitespace-normal break-words w-full" data-node-id="450:20792" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[25.5px]">Topics are often sensitive and uncomfortable</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pb-[0.885px] relative shrink-0 w-full" data-node-id="450:20793" data-name="Container">
                    <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7060] text-[14px] w-full" data-node-id="450:20794" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[20.8px]">Internet usage is deeply personal and difficult to talk about. Design needed to support creation of low-pressure and safe spaces for children</p>
                    </div>
                  </div>
                </div>
              </CaseStudyStagger>
              <div className="bg-[#ede7f8] border-[#6b46a0] border-l-3 border-solid content-stretch flex flex-col items-start pb-[18px] pl-[27px] pr-[24px] pt-[23.05px] relative rounded-br-[16px] rounded-tr-[16px] shrink-0 w-full" data-node-id="450:20795" data-name="Background+VerticalBorder">
                <div className="relative shrink-0 w-full" data-node-id="450:20796" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3d1f6e] text-[14px] w-full" data-node-id="450:20797" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[23.1px]">{`The goal wasn't to educate children. It was to give parents the words to start a conversation they didn't know how to begin.`}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CaseStudySection>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:20798" data-name="Separator" />
            <CaseStudySection className="content-stretch flex flex-col gap-[32px] items-start py-5 sm:py-6 lg:py-8 relative shrink-0 w-full" data-node-id="450:20799" data-name="Section - THE DUAL USER PROBLEM">
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:20800">
                <div className="content-stretch flex flex-col items-start w-full max-w-[680px] min-w-0 relative shrink-0" data-node-id="450:20801" data-name="Container">
                  <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:20802" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[25.5px]">Competitive Research</p>
                  </div>
                </div>
                <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="450:20803" data-name="Container">
                  <div className="flex-[1_0_0] min-h-px min-w-px relative" data-node-id="450:20804" data-name="Heading 1">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                      <p className="flex-[1_0_0] font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-h-px min-w-px relative text-[#845482] text-[32px]" data-node-id="450:20805">
                        How do other apps encourage meaningful conversations?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <CaseStudyStagger
                className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full lg:flex-row"
                data-node-id="450:20806"
                data-name="Decision 1: Filter Bar"
                itemClassName={(i) =>
                  i === 0
                    ? 'min-h-0 min-w-0 w-full shrink-0 lg:w-[314px]'
                    : 'min-h-0 min-w-0 w-full py-[16px] lg:flex-1 lg:basis-0'
                }
                staggerMs={65}
              >
                <div className="content-stretch flex flex-col h-[217px] items-start overflow-clip relative shrink-0 w-full lg:w-[314px]" data-node-id="450:20807" data-name="Background+Border">
                  <div className="aspect-[984/645] relative shrink-0 w-full" data-node-id="450:20808" data-name="image (64) 1">
                    <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage641} />
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px py-[16px] relative self-stretch" data-node-id="450:20809">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20810" data-name="Container">
                    <div className="content-stretch flex flex-col gap-[4px] items-start pt-[12px] relative shrink-0 w-full" data-node-id="450:20811">
                      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:20812" data-name="Container">
                        <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:20813" data-name="Margin">
                          <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:20814" data-name="Background" />
                        </div>
                        <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#1e1a2e] text-[16px]" data-node-id="450:20815" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[19.5px]">Simple minimal design</p>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:20816" data-name="Container">
                        <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:20817" data-name="Margin">
                          <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:20818" data-name="Background" />
                        </div>
                        <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#1e1a2e] text-[16px]" data-node-id="450:20819" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[19.5px]">Display style features rather than overly interactive/gamified features</p>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:20820" data-name="Container">
                        <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:20821" data-name="Margin">
                          <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:20822" data-name="Background" />
                        </div>
                        <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#1e1a2e] text-[16px]" data-node-id="450:20823" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[19.5px]">Scenario/Situation questions that allow for objective judgment and can feel less personal or targeted</p>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:20824" data-name="Container">
                        <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:20825" data-name="Margin">
                          <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:20826" data-name="Background" />
                        </div>
                        <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#1e1a2e] text-[16px]" data-node-id="450:20827" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[19.5px]">Learning Assessments that quantify and provide validation about learning progress.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CaseStudyStagger>
            </CaseStudySection>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:20828" data-name="Separator" />
            <CaseStudySection className="content-stretch flex flex-col gap-[14px] items-end justify-center relative shrink-0 w-full" data-node-id="450:20829" data-name="Section - THE DUAL USER PROBLEM">
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:20830">
                <div className="content-stretch flex flex-col items-start w-full max-w-[680px] min-w-0 relative shrink-0" data-node-id="450:20831" data-name="Container">
                  <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:20832" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[25.5px]">Brainstorming and Iterating</p>
                  </div>
                </div>
                <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="450:20833" data-name="Container">
                  <div className="flex-[1_0_0] min-h-px min-w-px relative" data-node-id="450:20834" data-name="Heading 1">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                      <p className="flex-[1_0_0] font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-h-px min-w-px relative text-[#845482] text-[32px]" data-node-id="450:20835">
                        Exploring product directions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[24px] items-start py-5 sm:py-6 lg:py-8 relative shrink-0 w-full" data-node-id="450:20836">
                <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-node-id="450:20837">
                  <div className="content-stretch flex items-end relative shrink-0 w-full" data-node-id="450:20838">
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative" data-node-id="450:20839">
                      <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[28px] relative shrink-0 text-[#3a7992] text-[20px] w-full" data-node-id="450:20840">
                        How can we balance flexibility to skip cards while encouraging users to engage with all content through card interaction?
                      </p>
                      <div className="bg-[#ede7f8] border-[#6b46a0] border-l-3 border-solid content-stretch flex flex-col items-start pb-[18px] pl-[27px] pr-[24px] pt-[23.05px] relative rounded-br-[16px] rounded-tr-[16px] shrink-0 w-full" data-node-id="450:20841" data-name="Background+VerticalBorder">
                        <div className="relative shrink-0 w-full" data-node-id="450:20842" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                            <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3d1f6e] text-[14px] w-full" data-node-id="450:20843" style={{ fontVariationSettings: "'opsz' 14" }}>
                              <p className="leading-[23.1px]">The card interaction design presented an interesting challenge because the front and back of the card were not 1 to 1. The “back” of each card is dense with a lot of information, and sometimes multiple sections like parent tips and explanations.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CaseStudyStagger
                    className="content-stretch flex w-full min-w-0 flex-row gap-4 items-stretch"
                    data-node-id="450:20844"
                    data-name="Container"
                    itemClassName={actBrainstormStaggerCol}
                    staggerMs={75}
                    variant="subtle"
                  >
                    <div className="content-stretch flex min-h-0 min-w-0 flex-1 flex-col gap-4 overflow-clip rounded-[12px] self-stretch" data-node-id="450:20845" data-name="Background+Border">
                      <div className="h-[275px] relative shrink-0 w-full" data-node-id="450:20846" data-name="Background">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center justify-center p-[4px] relative size-full">
                          <div className="aspect-[393/852] border border-[#e8dfd0] border-solid h-full relative shrink-0" data-node-id="450:20847" data-name="Question Card- Tap (1) (1) 1">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgQuestionCardTap111} />
                          </div>
                          <div className="aspect-[393/852] h-full relative shrink-0" data-node-id="450:20848" data-name="Explanation - Modal (1) (1) 1">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgExplanationModal111} />
                          </div>
                        </div>
                      </div>
                      <div className="flex min-h-0 flex-1 flex-col rounded-[16px] border border-solid border-[#ddd8d0] bg-white w-full" data-node-id="450:20849" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid flex min-h-0 flex-1 flex-col gap-[4px] items-start pb-[20px] pt-[19px] px-[20px] relative">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20850" data-name="Heading 4">
                            <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[14px] w-full" data-node-id="450:20851" style={{ fontVariationSettings: "'opsz' 14" }}>
                              <ol start={1}>
                                <li className="ms-[21px]">
                                  <span className="leading-[25.5px]">Modal</span>
                                </li>
                              </ol>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col items-start pt-[7.2px] relative shrink-0 w-full" data-node-id="450:20852" data-name="Container">
                            <div className="content-stretch flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal items-start leading-[0] relative shrink-0 text-[#c0392b] text-[14px] w-full" data-node-id="450:20853" data-name="Container">
                              <div className="flex flex-col justify-center relative shrink-0 w-full" data-node-id="450:20854" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[20.4px]">- Requires repeated open/close interactions</p>
                              </div>
                              <div className="flex flex-col justify-center relative shrink-0 w-full" data-node-id="450:20855" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[20.4px]">- Increases risk of accidental skipping</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex min-h-0 min-w-0 flex-1 flex-col gap-4 overflow-clip rounded-[12px] self-stretch" data-node-id="450:20856" data-name="Background+Border">
                      <div className="h-[275px] relative shrink-0 w-full" data-node-id="450:20857" data-name="Background">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center justify-center p-[4px] relative size-full">
                          <div className="aspect-[393/852] h-full relative shrink-0" data-node-id="450:20858" data-name="Question Card- Tap (3) (1) 1">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgQuestionCardTap311} />
                          </div>
                          <div className="aspect-[393/852] h-full relative shrink-0" data-node-id="450:20859" data-name="Question Card- Tap (2) (1) 1">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgQuestionCardTap211} />
                          </div>
                        </div>
                      </div>
                      <div className="flex min-h-0 flex-1 flex-col rounded-[16px] border border-solid border-[#ddd8d0] bg-white w-full" data-node-id="450:20860" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid flex min-h-0 flex-1 flex-col gap-[4px] items-start pb-[20.01px] pt-[19px] px-[20px] relative">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20861" data-name="Heading 4">
                            <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[14px] w-full" data-node-id="450:20862" style={{ fontVariationSettings: "'opsz' 14" }}>
                              <ol start={2}>
                                <li className="ms-[21px]">
                                  <span className="leading-[25.5px]">Next and Back Buttons</span>
                                </li>
                              </ol>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col gap-[4px] items-start pt-[7.1px] relative shrink-0 w-full" data-node-id="450:20863" data-name="Container">
                            <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2d6a4f] text-[14px] w-full" data-node-id="450:20864" style={{ fontVariationSettings: "'opsz' 14" }}>
                              <p className="leading-[20.4px]">+ Prevents premature skipping</p>
                            </div>
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20865" data-name="Container">
                              <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c0392b] text-[14px] w-full" data-node-id="450:20866" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[20.4px]">− Navigation between card states is unclear</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex min-h-0 min-w-0 flex-1 flex-col gap-4 overflow-clip self-stretch rounded-[12px]" data-node-id="450:20867" data-name="Background+Border">
                      <div className="h-[275px] relative shrink-0 w-full" data-node-id="450:20868" data-name="Background">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center justify-center p-[4px] relative size-full">
                          <div className="aspect-[393/852] border border-[#e8dfd0] border-solid h-full relative shrink-0" data-node-id="450:20869" data-name="Question Card- Tap (5) (1) 1">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgQuestionCardTap511} />
                          </div>
                          <div className="aspect-[393/852] border border-[#e8dfd0] border-solid h-full relative shrink-0" data-node-id="450:20870" data-name="Question Card- Tap (4) (1) 1">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgQuestionCardTap411} />
                          </div>
                        </div>
                      </div>
                      <div className="flex min-h-0 flex-1 flex-col rounded-[16px] border border-solid border-[#2d6a4f] bg-white w-full" data-node-id="450:20871" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid flex min-h-0 flex-1 flex-col gap-[4px] items-start pb-[20px] pt-[19px] px-[20px] relative">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20872" data-name="Heading 4">
                            <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[14px] w-full" data-node-id="450:20873" style={{ fontVariationSettings: "'opsz' 14" }}>
                              <ol start={3}>
                                <li className="ms-[21px]">
                                  <span className="leading-[25.5px]">Scroll/Slide</span>
                                </li>
                              </ol>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col gap-[4px] items-start pt-[7.2px] relative shrink-0 w-full" data-node-id="450:20874" data-name="Container">
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20875" data-name="Container">
                              <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2d6a4f] text-[14px] w-full" data-node-id="450:20876" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[20.4px]">+ Familiar and intuitive interaction</p>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20877" data-name="Container">
                              <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2d6a4f] text-[14px] w-full" data-node-id="450:20878" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[20.4px]">+ Prevents premature skipping</p>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20879" data-name="Container">
                              <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2d6a4f] text-[14px] w-full" data-node-id="450:20880" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[20.4px]">+ Adapts well to varied card structures</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CaseStudyStagger>
                </div>
                <div className="content-stretch flex flex-col items-start pt-[3.01px] relative shrink-0 w-full" data-node-id="450:20881" data-name="Container">
                  <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[16px] w-full" data-node-id="450:20882" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[25.5px]">{`I choose the scroll/slide interaction because it provides users the control and flexibility to skip cards while encouraging completion, and intuitively breaks down the dense information tied to each “card”. `}</p>
                  </div>
                </div>
              </div>
              <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:20883" data-name="Separator" />
              <div className="content-stretch flex flex-col gap-[32px] items-start py-5 sm:py-6 lg:py-8 relative shrink-0 w-full" data-node-id="450:20884">
                <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[28px] relative shrink-0 text-[#3a7992] text-[20px] w-full" data-node-id="450:20885">
                  How can we provide control and transparency to parents about content in the card decks without overwhelming them with information?
                </p>
                <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="450:20886">
                  <CaseStudyStagger
                    className="content-stretch flex w-full min-w-0 flex-row gap-4 items-stretch"
                    data-node-id="450:20887"
                    data-name="Container"
                    itemClassName={actBrainstormStaggerCol}
                    staggerMs={75}
                    variant="subtle"
                  >
                    <div className="content-stretch flex min-h-0 min-w-0 flex-1 flex-col gap-4 overflow-clip rounded-[12px] self-stretch" data-node-id="450:20888" data-name="Background+Border">
                      <div className="h-[275px] relative w-full shrink-0 overflow-clip rounded-[12px]" data-node-id="450:20889" data-name="Background">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[4px] relative size-full">
                          <div className="aspect-[393/852] border border-[#e8dfd0] border-solid h-full relative shrink-0" data-node-id="450:20890" data-name="Deck Preview - Show cards (1) 1">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDeckPreviewShowCards11} />
                          </div>
                        </div>
                      </div>
                      <div
                        className="flex min-h-0 flex-1 flex-col rounded-[16px] border border-solid border-[#ddd8d0] bg-white w-full"
                        data-node-id="450:20891"
                        data-name="Container"
                      >
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid flex min-h-0 flex-1 flex-col gap-[4.8px] items-start pb-[20px] pt-[19px] px-[20px] relative">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20892" data-name="Heading 4">
                            <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[14px] w-full" data-node-id="450:20893" style={{ fontVariationSettings: "'opsz' 14" }}>
                              <ol start={1}>
                                <li className="ms-[21px]">
                                  <span className="leading-[25.5px]">Deck Preview</span>
                                </li>
                              </ol>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col gap-[4px] items-start pt-[7.2px] relative shrink-0 w-full" data-node-id="450:20894" data-name="Container">
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20895" data-name="Container">
                              <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2d6a4f] text-[14px] w-full" data-node-id="450:20896" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[20.4px]">+ Maximizes visibility into deck content</p>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal items-start leading-[0] relative shrink-0 text-[#c0392b] text-[14px] w-full" data-node-id="450:20897" data-name="Container">
                              <div className="flex flex-col justify-center relative shrink-0 w-full" data-node-id="450:20898" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[20.4px]">- Can be mistaken for actual content</p>
                              </div>
                              <div className="flex flex-col justify-center relative shrink-0 w-full" data-node-id="450:20899" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[20.4px]">- Potentially redundant</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex min-h-0 min-w-0 flex-1 flex-col gap-4 overflow-clip rounded-[12px] self-stretch" data-node-id="450:20900" data-name="Background+Border">
                      <div className="h-[275px] relative w-full shrink-0 overflow-clip rounded-[12px]" data-node-id="450:20901" data-name="Background">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[4px] relative size-full">
                          <div className="aspect-[393/852] h-full relative shrink-0" data-node-id="450:20902" data-name="Deck Preview - Describe cards (6) 1">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDeckPreviewDescribeCards61} />
                          </div>
                        </div>
                      </div>
                      <div
                        className="flex min-h-0 flex-1 flex-col rounded-[16px] border border-solid border-[#2d6a4f] bg-white w-full"
                        data-node-id="450:20903"
                        data-name="Container"
                      >
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid flex min-h-0 flex-1 flex-col gap-[4.9px] items-start pb-[20.01px] pt-[19px] px-[20px] relative">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20904" data-name="Heading 4">
                            <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[14px] w-full" data-node-id="450:20905" style={{ fontVariationSettings: "'opsz' 14" }}>
                              <ol start={2}>
                                <li className="ms-[21px]">
                                  <span className="leading-[25.5px]">Deck Description</span>
                                </li>
                              </ol>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col gap-[4px] items-start pt-[7.1px] relative shrink-0 w-full" data-node-id="450:20906" data-name="Container">
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20907" data-name="Container">
                              <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2d6a4f] text-[14px] w-full" data-node-id="450:20908" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[20.4px]">+ Simple and intuitive</p>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20909" data-name="Container">
                              <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c0392b] text-[14px] w-full" data-node-id="450:20910" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[20.4px]">− Limited visibility into actual content</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex min-h-0 min-w-0 flex-1 flex-col gap-4 overflow-clip rounded-[12px] self-stretch" data-node-id="450:20911" data-name="Background+Border">
                      <div className="h-[275px] relative w-full shrink-0 overflow-clip rounded-[12px]" data-node-id="450:20912" data-name="Background">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center justify-center p-[4px] relative size-full">
                          <div className="aspect-[393/852] border border-[#e8dfd0] border-solid h-full relative shrink-0" data-node-id="450:20913" data-name="Deck Preview - Describe cards (1) (1) 1">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDeckPreviewDescribeCards111} />
                          </div>
                          <div className="aspect-[393/852] border border-[#e8dfd0] border-solid h-full relative shrink-0" data-node-id="450:20914" data-name="Deck Preview - Description + Show cards (2) 1">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDeckPreviewDescriptionShowCards21} />
                          </div>
                        </div>
                      </div>
                      <div
                        className="flex min-h-0 flex-1 flex-col rounded-[16px] border border-solid border-[#ddd8d0] bg-white w-full"
                        data-node-id="450:20915"
                        data-name="Container"
                      >
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid flex min-h-0 flex-1 flex-col gap-[4.8px] items-start pb-[20px] pt-[19px] px-[20px] relative">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20916" data-name="Heading 4">
                            <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[14px] w-full" data-node-id="450:20917" style={{ fontVariationSettings: "'opsz' 14" }}>
                              <ol start={3}>
                                <li className="ms-[21px]">
                                  <span className="leading-[25.5px]">Toggle Show Card Preview</span>
                                </li>
                              </ol>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col gap-[4px] items-start pt-[7.2px] relative shrink-0 w-full" data-node-id="450:20918" data-name="Container">
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20919" data-name="Container">
                              <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2d6a4f] text-[14px] w-full" data-node-id="450:20920" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[20.4px]">+ Balances visibility with control and flexibility</p>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20921" data-name="Container">
                              <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c0392b] text-[14px] w-full" data-node-id="450:20922" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[20.4px]">− Low impact high effort feature</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CaseStudyStagger>
                  <div className="content-stretch flex flex-col items-start pt-[3.01px] relative shrink-0 w-full" data-node-id="450:20923" data-name="Container">
                    <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[16px] w-full" data-node-id="450:20924" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[25.5px]">I choose the deck description because it provides enough content details to provide transparency to parents without being overwhelming or technically challenging to implement. For additionally content visibility I could also add specific content triggers/warning information.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:20925" data-name="Separator" />
              <div className="content-stretch flex flex-col gap-[24px] items-start py-5 sm:py-6 lg:py-8 relative shrink-0 w-full" data-node-id="450:20926">
                <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-node-id="450:20927">
                  <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[28px] relative shrink-0 text-[#3a7992] text-[20px] w-full" data-node-id="450:20928">{`How can we provide parents validation about their child's learning without pressuring the child? `}</p>
                  <CaseStudyStagger
                    className="content-stretch flex w-full min-w-0 flex-row gap-6 items-stretch"
                    data-node-id="450:20929"
                    data-name="Container"
                    itemClassName={actBrainstormStaggerCol}
                    staggerMs={75}
                    variant="subtle"
                  >
                    <div className="content-stretch flex min-h-0 min-w-0 flex-1 flex-col gap-4 overflow-clip rounded-[12px] self-stretch" data-node-id="450:20930" data-name="Background+Border">
                      <div className="h-[275px] relative shrink-0 w-full" data-node-id="450:20931" data-name="Background">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center justify-center p-[4px] relative size-full">
                          <div className="aspect-[393/852] border border-[#e8dfd0] border-solid h-full relative shrink-0" data-node-id="450:20932" data-name="Situational Question (2) (1) 1">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSituationalQuestion211} />
                          </div>
                          <div className="aspect-[393/852] border border-[#e8dfd0] border-solid h-full relative shrink-0" data-node-id="450:20933" data-name="Situational Question (1) (1) 1">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSituationalQuestion111} />
                          </div>
                        </div>
                      </div>
                      <div className="flex min-h-0 flex-1 flex-col rounded-[16px] border border-solid border-[#ddd8d0] bg-white w-full" data-node-id="450:20934" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid flex min-h-0 flex-1 flex-col gap-[4px] items-start p-[20px] relative">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20935" data-name="Heading 4">
                            <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[14px] w-full" data-node-id="450:20936" style={{ fontVariationSettings: "'opsz' 14" }}>
                              <ol start={1}>
                                <li className="ms-[21px]">
                                  <span className="leading-[25.5px]">Quiz Style Question with Learning Summary</span>
                                </li>
                              </ol>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col gap-[4px] items-start pt-[7.2px] relative shrink-0 w-full" data-node-id="450:20937" data-name="Container">
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20938" data-name="Container">
                              <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2d6a4f] text-[14px] w-full" data-node-id="450:20939" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[20.4px]">+ Gives parents a clear view of progress</p>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20940" data-name="Container">
                              <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2d6a4f] text-[14px] w-full" data-node-id="450:20941" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[20.4px]">+ Provides measurable feedback</p>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal items-start leading-[0] relative shrink-0 text-[#c0392b] text-[14px] w-full" data-node-id="450:20942" data-name="Container">
                              <div className="flex flex-col justify-center relative shrink-0 w-full" data-node-id="450:20943" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[20.4px]">- Adds pressure to the child’s experience</p>
                              </div>
                              <div className="flex flex-col justify-center relative shrink-0 w-full" data-node-id="450:20944" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[20.4px]">- Frames learning as right vs. wrong</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex min-h-0 min-w-0 flex-1 flex-col gap-4 overflow-clip rounded-[12px] self-stretch" data-node-id="450:20945" data-name="Background+Border">
                      <div className="h-[275px] relative shrink-0 w-full" data-node-id="450:20946" data-name="Background">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[4px] relative size-full">
                          <div className="aspect-[393/852] border border-[#e8dfd0] border-solid h-full relative shrink-0" data-node-id="450:20947" data-name="Situational Question (5) (1) 1">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSituationalQuestion511} />
                          </div>
                        </div>
                      </div>
                      <div className="flex min-h-0 flex-1 flex-col rounded-[16px] border border-solid border-[#2d6a4f] bg-white w-full" data-node-id="450:20948" data-name="Container">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid flex min-h-0 flex-1 flex-col gap-[4px] items-start pb-[20.01px] pt-[19px] px-[20px] relative">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20949" data-name="Heading 4">
                            <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[14px] w-full" data-node-id="450:20950" style={{ fontVariationSettings: "'opsz' 14" }}>
                              <ol start={2}>
                                <li className="ms-[21px]">
                                  <span className="leading-[25.5px]">Discussion Style Question</span>
                                </li>
                              </ol>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col gap-[4px] items-start pt-[7.1px] relative shrink-0 w-full" data-node-id="450:20951" data-name="Container">
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20952" data-name="Container">
                              <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2d6a4f] text-[14px] w-full" data-node-id="450:20953" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[20.4px]">+ Encourages open, low-pressure conversation</p>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20954" data-name="Container">
                              <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2d6a4f] text-[14px] w-full" data-node-id="450:20955" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[20.4px] whitespace-pre-wrap">{`+ Supports a  nuanced understanding of the child learning`}</p>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20956" data-name="Container">
                              <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c0392b] text-[14px] w-full" data-node-id="450:20957" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[20.4px]">− Provides less structured or measurable feedback</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CaseStudyStagger>
                </div>
                <div className="content-stretch flex flex-col items-start pt-[3.01px] relative shrink-0 w-full" data-node-id="450:20958" data-name="Container">
                  <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[16px] w-full" data-node-id="450:20959" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[25.5px]">I choose the discussion style question because it provides allows parents and children to track and understand their learning free of pressure.</p>
                  </div>
                </div>
              </div>
              <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:20960" data-name="Separator" />
            </CaseStudySection>
            <CaseStudySection
              className="content-stretch flex flex-col gap-[32px] items-start py-5 sm:py-6 lg:py-8 relative shrink-0 w-full"
              data-node-id="450:20961"
              data-name="Section - HI-FIDELITY OUTCOME"
            >
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20962">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20963">
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:20964">
                    <div className="content-stretch flex flex-col items-start w-full max-w-[680px] min-w-0 relative shrink-0" data-node-id="450:20965" data-name="Container">
                      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:20966" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[25.5px]">Hi-Fidelity</p>
                      </div>
                    </div>
                    <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-w-full relative shrink-0 text-[#845482] text-[32px] w-[min-content]" data-node-id="450:20967">
                      Outcome: how this solution addresses our problem space
                    </p>
                  </div>
                </div>
              </div>
              <CaseStudyStagger
                className="content-stretch flex flex-row flex-wrap gap-3 items-stretch relative shrink-0 w-full"
                data-node-id="450:20968"
                itemClassName="min-h-0 min-w-0 flex-[1_1_45%] basis-[45%] sm:flex-1 sm:basis-0 [&>*]:min-h-0"
                staggerMs={45}
              >
                <div className="aspect-[393/852] flex-[1_0_0] min-h-px min-w-px relative" data-node-id="450:20969" data-name="Deck Preview - Describe cards 1">
                  <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                    <div className="absolute bg-white inset-0" />
                    <img alt="" className="absolute max-w-none object-cover size-full" src={imgDeckPreviewDescribeCards1} />
                  </div>
                </div>
                <div className="aspect-[393/852] flex-[1_0_0] min-h-px min-w-px relative" data-node-id="450:20970" data-name="Card Front 7 1">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCardFront71} />
                </div>
                <div className="aspect-[393/852] flex-[1_0_0] min-h-px min-w-px relative" data-node-id="450:20971" data-name="Parent Tip 1">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgParentTip1} />
                </div>
                <div className="aspect-[393/852] flex-[1_0_0] min-h-px min-w-px relative" data-node-id="450:20972" data-name="Explanation 1">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgExplanation1} />
                </div>
                <div className="aspect-[393/852] flex-[1_0_0] min-h-px min-w-px relative" data-node-id="450:20973" data-name="Transition to Situation Questions 1">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTransitionToSituationQuestions1} />
                </div>
              </CaseStudyStagger>
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="450:20974">
                <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[16px] w-full" data-node-id="450:20975" style={{ fontVariationSettings: "'opsz' 14" }}>
                  <p className="leading-[25.5px]">Revisiting our user research insights...</p>
                </div>
                <CaseStudyStagger
                  className="grid w-full grid-cols-2 gap-4"
                  data-node-id="450:20976"
                  itemClassName="min-h-0 min-w-0 [&>*]:h-full"
                  staggerMs={55}
                >
                      <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex min-h-0 flex-col gap-[12px] h-full items-start p-[24px] relative rounded-[16px]" data-node-id="450:20978">
                        <div className="bg-[#ede7f8] content-stretch flex items-center justify-center pb-[5.84px] pt-[4.16px] relative rounded-[10px] shrink-0 size-[40px]" data-node-id="450:20979" data-name="Background">
                          <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" data-node-id="450:20980" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[37.4px]">🗣️</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="450:20981">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20982" data-name="Heading 5">
                            <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#432060] text-[14px] w-full" data-node-id="450:20983" style={{ fontVariationSettings: "'opsz' 14" }}>
                              <p className="leading-[25.5px]">Families need a conversation starter, not an educational tool</p>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="450:20984">
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20985">
                              <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:20986" data-name="Container">
                                <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:20987" data-name="Margin">
                                  <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:20988" data-name="Background" />
                                </div>
                                <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#555] text-[14px]" data-node-id="450:20989" style={{ fontVariationSettings: "'opsz' 14" }}>
                                  <p className="leading-[19.5px]">Designed for minimal input and guided prompts</p>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20990">
                              <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:20991" data-name="Container">
                                <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:20992" data-name="Margin">
                                  <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:20993" data-name="Background" />
                                </div>
                                <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#555] text-[14px]" data-node-id="450:20994" style={{ fontVariationSettings: "'opsz' 14" }}>
                                  <p className="leading-[19.5px]">Encourages conversations beyond the app</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex min-h-0 flex-col gap-[12px] h-full items-start p-[24px] relative rounded-[16px]" data-node-id="450:20995" data-name="Background+Border">
                        <div className="bg-[#ede7f8] relative rounded-[10px] shrink-0 size-[40px]" data-node-id="450:20996" data-name="Background">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pb-[5.84px] pt-[4.16px] relative size-full">
                            <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[24px] text-black whitespace-nowrap" data-node-id="450:20997" style={{ fontVariationSettings: "'opsz' 14" }}>
                              <p className="leading-[40.8px]">⚠️</p>
                            </div>
                          </div>
                        </div>
                        <div className="relative shrink-0 w-full" data-node-id="450:20998" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20999" data-name="Heading 4">
                              <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#432060] text-[14px] w-full" data-node-id="450:21000" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[23.1px]">Content safety and exposure is a concern to parents</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative shrink-0 w-full" data-node-id="450:21001">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:21002">
                              <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:21003" data-name="Container">
                                <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:21004" data-name="Margin">
                                  <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:21005" data-name="Background" />
                                </div>
                                <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#555] text-[14px]" data-node-id="450:21006" style={{ fontVariationSettings: "'opsz' 14" }}>
                                  <p className="leading-[19.5px]">Added preview screens with content warnings</p>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:21007" data-name="Container">
                              <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:21008" data-name="Margin">
                                <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:21009" data-name="Background" />
                              </div>
                              <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#555] text-[14px]" data-node-id="450:21010" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[19.5px]">Balanced engagement with flexible skip functionality</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex min-h-0 flex-col gap-[12px] h-full items-start p-[24px] relative rounded-[16px]" data-node-id="450:21012" data-name="Background+Border">
                        <div className="bg-[#ede7f8] relative rounded-[10px] shrink-0 size-[40px]" data-node-id="450:21013" data-name="Background">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pb-[5.84px] pt-[4.16px] relative size-full">
                            <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[24px] text-black whitespace-nowrap" data-node-id="450:21014" style={{ fontVariationSettings: "'opsz' 14" }}>
                              <p className="leading-[40.8px]">🩹</p>
                            </div>
                          </div>
                        </div>
                        <div className="relative shrink-0 w-full" data-node-id="450:21015" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:21016" data-name="Heading 4">
                              <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#432060] text-[14px] w-full" data-node-id="450:21017" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[23.1px]">Topics are often sensitive and uncomfortable</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative shrink-0 w-full" data-node-id="450:21018">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                            <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:21019" data-name="Container">
                              <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:21020" data-name="Margin">
                                <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:21021" data-name="Background" />
                              </div>
                              <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#555] text-[14px]" data-node-id="450:21022" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[19.5px]">Prioritized discussion-based prompts over quiz-style interactions</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex min-h-0 flex-col gap-[16px] h-full items-start p-[24px] relative rounded-[16px]" data-node-id="450:21023">
                        <div className="bg-[#ede7f8] content-stretch flex items-center justify-center pb-[5.84px] pt-[4.16px] relative rounded-[10px] shrink-0 size-[40px]" data-node-id="450:21024" data-name="Background">
                          <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" data-node-id="450:21025" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[37.4px]">🌐</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:21026" data-name="Heading 5">
                          <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#432060] text-[14px] w-full" data-node-id="450:21027" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[25.5px]">Internet access in Alaska is sparse</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:21028">
                          <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:21029" data-name="Container">
                            <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:21030" data-name="Margin">
                              <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:21031" data-name="Background" />
                            </div>
                            <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#555] text-[14px]" data-node-id="450:21032" style={{ fontVariationSettings: "'opsz' 14" }}>
                              <p className="leading-[19.5px]">Designed the experience to work offline as a mobile app</p>
                            </div>
                          </div>
                        </div>
                      </div>
                </CaseStudyStagger>
              </div>
            </CaseStudySection>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:21033" data-name="Separator" />
            <CaseStudySection
              id="case-study-prototype"
              className="content-stretch flex scroll-mt-8 flex-col gap-[32px] items-start py-5 sm:py-6 lg:py-8 relative shrink-0 w-full"
              data-node-id="450:21034"
            >
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:21035">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:21036">
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:21037">
                    <div className="content-stretch flex flex-col items-start w-full max-w-[680px] min-w-0 relative shrink-0" data-node-id="450:21038" data-name="Container">
                      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:21039" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[25.5px]">Prototype</p>
                      </div>
                    </div>
                    <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-w-full relative shrink-0 text-[#845482] text-[32px] w-[min-content]" data-node-id="450:21040">
                      Putting it all together...
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="relative flex min-h-[260px] w-full shrink-0 items-center justify-center overflow-hidden rounded-[24px] bg-[#7a9fb0] px-3 py-8 sm:min-h-[380px] sm:px-8 sm:py-10"
                data-node-id="450:21041"
                data-name="Container"
              >
                <ActPhoneVideoFrame
                  videoSrc="/videos/act-prototype.mp4"
                  variant="caseStudyPrototype"
                  className="pointer-events-none"
                />
              </div>
            </CaseStudySection>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:21045" data-name="Separator" />
            <CaseStudySection
              className="content-stretch flex flex-col gap-[24px] items-start max-w-[1100px] py-5 sm:py-6 lg:py-8 relative shrink-0 w-full"
              data-node-id="450:21046"
              data-name="Section - REFLECTIONS"
            >
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="450:21047">
                <div className="content-stretch flex flex-col items-start w-full max-w-[680px] min-w-0 relative shrink-0" data-node-id="450:21048" data-name="Container">
                  <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:21049" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[25.5px]">Reflections</p>
                  </div>
                </div>
                <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="450:21050" data-name="Container">
                  <div className="flex-[1_0_0] min-h-px min-w-px relative" data-node-id="450:21051" data-name="Heading 1">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                      <p className="flex-[1_0_0] font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-h-px min-w-px relative text-[#845482] text-[32px]" data-node-id="450:21052">
                        What I took from this
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[14px] relative shrink-0 w-full" data-node-id="450:21053-wrap">
                <CaseStudyStagger
                  className="grid w-full grid-cols-2 gap-4"
                  data-node-id="450:21053"
                  data-name="Container"
                  itemClassName="min-h-0 min-w-0 [&>*]:h-full"
                >
                  <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[12px] h-full items-start min-h-px min-w-px p-[24px] relative rounded-[16px]" data-node-id="450:21055" data-name="Background+Border">
                    <div className="bg-[#ede7f8] content-stretch flex items-center justify-center pb-[5.84px] pt-[4.16px] relative rounded-[10px] shrink-0 size-[40px]" data-node-id="450:21056" data-name="Background">
                      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[22px] whitespace-nowrap" data-node-id="450:21057" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[37.4px]">🫂</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:21058" data-name="Heading 4">
                      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] w-full" data-node-id="450:21059" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="mb-0 leading-[25.5px]">Designing for emotional safety is a design</p>
                        <p className="leading-[25.5px]">constraint</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:21060" data-name="Container">
                      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7060] text-[14px] w-full" data-node-id="450:21061" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[20.8px]">User wellbeing can conflict with “better” data.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[12px] h-full items-start min-h-px min-w-px p-[24px] relative rounded-[16px]" data-node-id="450:21062" data-name="Background+Border">
                    <div className="bg-[#ede7f8] content-stretch flex items-center justify-center pb-[5.84px] pt-[4.16px] relative rounded-[10px] shrink-0 size-[40px]" data-node-id="450:21063" data-name="Background">
                      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[22px] whitespace-nowrap" data-node-id="450:21064" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[37.4px]">🌐</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:21065" data-name="Heading 4">
                      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] w-full" data-node-id="450:21066" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[25.5px]">Context shapes everything</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:21067" data-name="Container">
                      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7060] text-[14px] w-full" data-node-id="450:21068" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[20.8px]">Offline requirements shaped core design decisions</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[12px] h-full items-start min-h-px min-w-px p-[24px] relative rounded-[16px]" data-node-id="450:21069" data-name="Background+Border">
                    <div className="bg-[#ede7f8] content-stretch flex items-center justify-center pb-[5.84px] pt-[4.16px] relative rounded-[10px] shrink-0 size-[40px]" data-node-id="450:21070" data-name="Background">
                      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[22px] whitespace-nowrap" data-node-id="450:21071" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[37.4px]">🎮</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:21072" data-name="Heading 4">
                      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] w-full" data-node-id="450:21073" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="mb-0 leading-[25.5px]">Gamification only works when it serves the core</p>
                        <p className="leading-[25.5px]">loop</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:21074" data-name="Container">
                      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7060] text-[14px] w-full" data-node-id="450:21075" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[20.8px]">Gamification should reinforce target behavior, not distract from it.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[12px] h-full items-start min-h-px min-w-px p-[24px] relative rounded-[16px]" data-node-id="450:21076" data-name="Background+Border">
                    <div className="bg-[#ede7f8] content-stretch flex items-center justify-center pb-[5.84px] pt-[4.16px] relative rounded-[10px] shrink-0 size-[40px]" data-node-id="450:21077" data-name="Background">
                      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[22px] whitespace-nowrap" data-node-id="450:21078" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[37.4px]">🗣️</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:21079" data-name="Heading 4">
                      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] w-full" data-node-id="450:21080" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[25.5px]">Client feedback is a design input, not just a sign-off</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:21081" data-name="Container">
                      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7060] text-[14px] w-full" data-node-id="450:21082" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[20.8px]">External input should shape decisions, not just validate them.</p>
                      </div>
                    </div>
                  </div>
                </CaseStudyStagger>
              </div>
              <div className="content-stretch flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal gap-[12px] items-start leading-[0] relative shrink-0 text-[#6b6b6b] text-[16px] w-full" data-node-id="450:21083" data-name="Container">
                <div className="flex flex-col justify-center relative shrink-0 w-full" data-node-id="450:21084" style={{ fontVariationSettings: "'opsz' 14" }}>
                  <p className="leading-[26.25px]">I learned that designing for sensitive topics isn’t just about delivering information, it’s about creating safe, supportive experiences.</p>
                </div>
                <div className="flex flex-col justify-center relative shrink-0 w-full" data-node-id="450:21085" style={{ fontVariationSettings: "'opsz' 14" }}>
                  <p className="leading-[26.25px]">Small interaction decisions can significantly impact how users feel, engage, and communicate.</p>
                </div>
              </div>
            </CaseStudySection>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:21086" data-name="Separator" />
            <div className="content-stretch flex flex-col items-center pt-[40px] relative shrink-0 w-full" data-node-id="450:21087">
              <a
                href={docUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#432060] content-stretch flex items-center justify-center px-[40px] py-[10px] relative rounded-[16777200px] shrink-0 no-underline"
                data-node-id="450:21088"
                data-name="Home"
              >
                <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" data-node-id="450:21089" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Read Full Case Study
                </p>
              </a>
            </div>
            <div className="content-stretch flex gap-[12px] items-center justify-end pt-[96px] pb-16 relative shrink-0 w-full" data-node-id="450:21090" data-name="Container">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="450:21091" data-name="Container">
                <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:21092" style={{ fontVariationSettings: "'opsz' 14" }}>
                  <p className="leading-[22.1px]">Next Project :</p>
                </div>
              </div>
              <Link
                to={nextProject.to}
                className="content-stretch flex flex-col items-start relative shrink-0 no-underline"
                data-node-id="450:21093"
                data-name="Link"
              >
                <div className="capitalize flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a2472] text-[14px] tracking-[0.52px] whitespace-nowrap" data-node-id="450:21094" style={{ fontVariationSettings: "'opsz' 14" }}>
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