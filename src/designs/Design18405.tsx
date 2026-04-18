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
} from '../caseStudyLayout';
import { CapitalOneProcessTimeline } from '../components/CapitalOneProcessTimeline';
import {
  CASE_STUDY_CARD_STAGGER_ITEM_XL,
  CASE_STUDY_VERTICAL_STAGGER_ITEM,
  CaseStudySection,
  CaseStudyStagger,
  SoftAppearOnce,
} from '../components/SoftAppear';

const imgContainer = "https://www.figma.com/api/mcp/asset/9f2c133f-50d5-4ff5-b75c-5e182e50a34c";
const imgImage24 = "https://www.figma.com/api/mcp/asset/19dfef76-c47b-44ff-9772-9b35e9d8ed0a";
const imgImage18 = "https://www.figma.com/api/mcp/asset/9983536a-e72a-472d-96f4-938d6c66a73c";
/** Figma 450:18641 — Benchmark “version decisions” card: main panel + badge */
const imgBenchmarkVersionDecisionsMain =
  "https://www.figma.com/api/mcp/asset/b75c66a9-22bc-46b0-83f6-3f0b24e84199";
const imgBenchmarkVersionDecisionsBadge =
  "https://www.figma.com/api/mcp/asset/71870925-0d54-4eba-af1a-5d69e536ee05";

/** Figma 450:18627 / 450:18641 — benchmark split rows: 266px text + flex image, 200px height */
const benchmarkSplitRowClass =
  "border border-[#ddd8d0] border-solid content-stretch flex h-[200px] items-start relative shrink-0 w-full overflow-hidden rounded-[18px]";
const benchmarkSplitTextPanelClass =
  "bg-white border-[#ddd8d0] border-r border-solid content-stretch flex flex-col gap-[8px] h-full items-start p-[24px] relative shrink-0 w-[266px] rounded-bl-[18px] rounded-tl-[18px]";
const benchmarkSplitImageClass =
  "flex-[1_0_0] h-full min-h-px min-w-px relative rounded-br-[18px] rounded-tr-[18px]";
const imgImage23 = "https://www.figma.com/api/mcp/asset/a2a4d524-d426-436d-ab9b-38446473e2e7";
const imgImage20 = "https://www.figma.com/api/mcp/asset/672846a4-b111-4550-bb63-22d2edd4f72f";
const imgImage21 = "https://www.figma.com/api/mcp/asset/9270a6d6-e5a3-47f8-95aa-124ea3f72d7a";
const imgImage22 = "https://www.figma.com/api/mcp/asset/90966909-e7a1-48cb-b847-b02ab9536ffb";
export default function PersonalWebsiteDesignPortfolio() {
  const docUrl = CASE_STUDY_DOC_URL['capital-one'];
  const nextProject = nextCaseStudyAfter('capital-one');

  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-node-id="450:18405" data-name="Personal Website Design Portfolio">
      <CaseStudyMainNav />
      <div
        className={`relative flex shrink-0 flex-col items-start bg-[#fdfcfb] ${caseStudyColumnClass}`}
        data-node-id="450:18421"
        data-name="RootLayout"
      >
        <div className="relative w-full min-w-0 shrink-0 bg-[#fdfcfb]" data-node-id="450:18422" data-name="ProjectDetail">
          <div
            className={`relative flex size-full flex-col items-start gap-8 border-0 border-transparent bg-clip-padding ${caseStudyArticlePaddingXClass}`}
          >
            <SoftAppearOnce
              className={`content-stretch flex flex-col items-start relative shrink-0 w-full ${caseStudyHeroStackGapClass} ${caseStudyHeroTopPaddingClass}`}
              data-node-id="450:18423"
            >
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="450:18424" data-name="Section - HERO">
                <div className="content-stretch flex flex-col gap-[54px] items-start relative shrink-0 w-full" data-node-id="450:18425">
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="450:18426" data-name="Container">
                    <Link
                      to="/work"
                      className="content-stretch flex flex-col items-start relative shrink-0 no-underline"
                      data-node-id="450:18427"
                      data-name="Link"
                    >
                      <div className="capitalize flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a2472] text-[0px] tracking-[0.52px] whitespace-nowrap" data-node-id="450:18428" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="text-[14px]">
                          <span className="leading-[22.1px]">← A</span>
                          <span className="leading-[22.1px] lowercase">LL</span>
                          <span className="leading-[22.1px]">{` projects`}</span>
                        </p>
                      </div>
                    </Link>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="450:18429" data-name="Container">
                      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[13px] whitespace-nowrap" data-node-id="450:18430" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[22.1px]">/</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="450:18431" data-name="Container">
                      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:18432" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[22.1px]">Capital One</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="450:18433" data-name="Heading 2">
                    <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[1.12] relative text-[#432060] text-[clamp(2rem,7vw,3.75rem)] whitespace-normal break-words" data-node-id="450:18434">
                      Capital One Software
                    </p>
                  </div>
                </div>
                <div className="border-[#ddd8d0] border-b border-solid content-stretch flex flex-col gap-5 items-start pb-[30px] pt-[29px] relative shrink-0 w-full xl:flex-row xl:items-start xl:justify-between" data-node-id="450:18435" data-name="Border">
                  <div className="relative shrink-0 w-full lg:w-auto" data-node-id="450:18436" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative size-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:18437" data-name="Label">
                        <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[12px] tracking-[0.88px] uppercase whitespace-nowrap" data-node-id="450:18438" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[18.7px]">Role</p>
                        </div>
                      </div>
                      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] whitespace-normal" data-node-id="450:18439" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[23.8px]">UX Design Intern</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full lg:w-auto" data-node-id="450:18440" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative size-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:18441" data-name="Label">
                        <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[12px] tracking-[0.88px] uppercase whitespace-nowrap" data-node-id="450:18442" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[18.7px]">Company</p>
                        </div>
                      </div>
                      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] whitespace-normal" data-node-id="450:18443" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[23.8px]">Capital One Software</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full lg:w-auto" data-node-id="450:18444" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative size-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:18445" data-name="Label">
                        <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[12px] tracking-[0.88px] uppercase whitespace-nowrap" data-node-id="450:18446" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[18.7px]">Timeline</p>
                        </div>
                      </div>
                      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] whitespace-normal" data-node-id="450:18447" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[23.8px]">10 Weeks · Summer 2025</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full lg:w-auto xl:max-w-[360px]" data-node-id="450:18448" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
                      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[19px] justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[12px] tracking-[0.88px] uppercase w-full" data-node-id="450:18449" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[18.7px]">Type</p>
                      </div>
                      <div className="content-stretch flex flex-wrap gap-[8px] h-auto items-start relative shrink-0 w-full" data-node-id="450:18450" data-name="ProjectDetail">
                        <div className="bg-[#e5dcd7] h-[24px] relative rounded-[16777200px] shrink-0" data-node-id="450:18451" data-name="Text">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[16px] py-[4px] relative size-full">
                            <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#816451] text-[12px] whitespace-nowrap" data-node-id="450:18452" style={{ fontVariationSettings: "'opsz' 14" }}>
                              Enterprise Sytems
                            </p>
                          </div>
                        </div>
                        <div className="bg-[#e5dcd7] h-[24px] relative rounded-[16777200px] shrink-0" data-node-id="450:18453" data-name="Text">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[16px] py-[4px] relative size-full">
                            <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#816451] text-[12px] whitespace-nowrap" data-node-id="450:18454" style={{ fontVariationSettings: "'opsz' 14" }}>
                              B2B
                            </p>
                          </div>
                        </div>
                        <div className="bg-[#e5e4e1] h-[24px] relative rounded-[16777200px] shrink-0" data-node-id="450:18455" data-name="Text">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[16px] py-[4px] relative size-full">
                            <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#999181] text-[12px] whitespace-nowrap" data-node-id="450:18456" style={{ fontVariationSettings: "'opsz' 14" }}>
                              Web
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:18457">
                <div className="h-[417px] relative rounded-[24px] shrink-0 w-full" data-node-id="450:18458" data-name="Container">
                  <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
                    <div className="absolute bg-[#7a9fb0] inset-0 rounded-[24px]" />
                    <img alt="" className="absolute max-w-none object-contain rounded-[24px] size-full" src={imgContainer} />
                  </div>
                </div>
              </div>
            </SoftAppearOnce>
            <CaseStudySection
              className="content-stretch flex flex-col gap-[16px] items-start py-5 sm:py-6 lg:py-8 relative shrink-0 w-full"
              data-node-id="450:18459"
              data-name="Section - OVERVIEW"
            >
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:18460">
                <div className="content-stretch flex flex-col items-start w-full max-w-[680px] min-w-0 relative shrink-0" data-node-id="450:18461" data-name="Container">
                  <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:18462" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[25.5px]">Overview</p>
                  </div>
                </div>
                <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="450:18463" data-name="Container">
                  <div className="flex-[1_0_0] min-h-px min-w-px relative" data-node-id="450:18464" data-name="Heading 1">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                      <p className="flex-[1_0_0] font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-h-px min-w-px relative text-[#845482] text-[32px]" data-node-id="450:18465">
                        Turning complex Kubernetes based software upgrade workflows into scalable, self-service experiences
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-start pt-[16px] relative shrink-0 w-full" data-node-id="450:18466">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pt-[3.01px] relative" data-node-id="450:18467" data-name="Container">
                  <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[16px] w-full" data-node-id="450:18468" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[25.5px]">Capital One Software builds Kubernetes-based data management products used by large enterprise customers. As their product catalog grew, so did the complexity of installing, upgrading, and managing those products.</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pt-5 sm:pt-6 lg:pt-8 relative shrink-0" data-node-id="450:18469">
                <button
                  type="button"
                  onClick={scrollToCaseStudyPrototype}
                  className="cursor-pointer border-0 bg-[#845482] content-stretch flex items-end px-[40px] py-[10px] relative rounded-[16777200px] shrink-0"
                  data-node-id="450:18470"
                  data-name="Button"
                >
                  <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" data-node-id="450:18471" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Jump to Solution
                  </p>
                </button>
              </div>
            </CaseStudySection>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:18472" data-name="Separator" />
            <CaseStudySection
              className="content-stretch flex flex-col gap-[32px] items-start py-5 sm:py-6 lg:py-8 relative shrink-0 w-full"
              data-node-id="450:18473"
              data-name="Section - MY SCOPE"
            >
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:18474">
                <div className="content-stretch flex flex-col items-start w-full max-w-[680px] min-w-0 relative shrink-0" data-node-id="450:18475" data-name="Container">
                  <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:18476" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[25.5px]">Projected Impact</p>
                  </div>
                </div>
                <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-w-full relative shrink-0 text-[#845482] text-[32px] w-[min-content]" data-node-id="450:18477">
                  What success would look like
                </p>
              </div>
              <CaseStudyStagger
                className="content-stretch flex flex-row gap-[16px] items-stretch pt-5 sm:pt-6 lg:pt-8 relative shrink-0 w-full"
                data-node-id="450:18478"
                itemClassName={CASE_STUDY_CARD_STAGGER_ITEM_XL}
              >
                <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[41px] pt-[49px] px-[41px] relative rounded-[18px] self-stretch" data-node-id="450:18479" data-name="Background+Border">
                  <div className="relative rounded-[18px] shrink-0 w-full" data-node-id="450:18480" data-name="Background+Border">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold gap-[12px] items-start pb-[24px] relative size-full">
                      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:18481" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[21px]">01</p>
                      </div>
                      <p className="leading-[24px] sm:leading-[28px] min-w-full relative shrink-0 text-[#3a7992] text-[16px] sm:text-[18px] w-[min-content]" data-node-id="450:18482" style={{ fontVariationSettings: "'opsz' 14" }}>
                        Decreased reliance on “white glove” support and decreased operational cost
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[41px] pt-[49px] px-[41px] relative rounded-[18px] self-stretch" data-node-id="450:18483" data-name="Background+Border">
                  <div className="relative rounded-[18px] shrink-0 w-full" data-node-id="450:18484" data-name="Background+Border">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold gap-[12px] items-start relative size-full">
                      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:18485" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[21px]">02</p>
                      </div>
                      <p className="leading-[24px] sm:leading-[28px] min-w-full relative shrink-0 text-[#3a7992] text-[16px] sm:text-[18px] w-[min-content]" data-node-id="450:18486" style={{ fontVariationSettings: "'opsz' 14" }}>
                        Upgrade workflows scale across multiple products and environments encouraging product adoption
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[41px] pt-[49px] px-[41px] relative rounded-[18px] self-stretch" data-node-id="450:18487" data-name="Background+Border">
                  <div className="relative rounded-[18px] shrink-0 w-full" data-node-id="450:18488" data-name="Background+Border">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold gap-[12px] items-start pb-[24px] relative size-full">
                      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:18489" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[21px]">03</p>
                      </div>
                      <p className="leading-[24px] sm:leading-[28px] min-w-full relative shrink-0 text-[#3a7992] text-[16px] sm:text-[18px] w-[min-content]" data-node-id="450:18490" style={{ fontVariationSettings: "'opsz' 14" }}>
                        Version decisions are visible and understandable at a glance
                      </p>
                    </div>
                  </div>
                </div>
              </CaseStudyStagger>
            </CaseStudySection>
            <CaseStudySection className="content-stretch flex flex-col gap-[48px] items-start pt-5 sm:pt-6 lg:pt-8 relative shrink-0 w-full" data-node-id="450:18491" data-name="Section - TIMELINE">
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:18492">
                <div className="content-stretch flex flex-col items-start w-full max-w-[680px] min-w-0 relative shrink-0" data-node-id="450:18493" data-name="Container">
                  <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:18494" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[25.5px]">Process</p>
                  </div>
                </div>
                <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-w-full relative shrink-0 text-[#845482] text-[32px] w-[min-content]" data-node-id="450:18495">
                  10 weeks, end-to-end
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-node-id="450:18496">
                  <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-node-id="450:18497">
                  <CaseStudyStagger
                    className="content-stretch flex font-['DM_Sans:SemiBold',sans-serif] font-semibold gap-[24px] min-h-[117px] flex-row items-stretch relative shrink-0 w-full"
                    data-node-id="450:18498"
                    data-name="Container"
                    itemClassName={CASE_STUDY_CARD_STAGGER_ITEM_XL}
                    staggerMs={55}
                  >
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative rounded-[18px] self-stretch" data-node-id="450:18499" data-name="Background+Border">
                      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:18500" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[21px]">01</p>
                      </div>
                      <p className="leading-[24px] sm:leading-[28px] min-w-full relative shrink-0 text-[#432060] text-[14px] sm:text-[16px] w-[min-content]" data-node-id="450:18501" style={{ fontVariationSettings: "'opsz' 14" }}>
                        End-to-end version management workflows design
                      </p>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative rounded-[18px] self-stretch" data-node-id="450:18502" data-name="Background+Border">
                      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:18503" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[21px]">02</p>
                      </div>
                      <p className="leading-[24px] sm:leading-[28px] min-w-full relative shrink-0 text-[#432060] text-[14px] sm:text-[16px] w-[min-content]" data-node-id="450:18504" style={{ fontVariationSettings: "'opsz' 14" }}>
                        Enterprise platform benchmarking
                      </p>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative rounded-[18px] self-stretch" data-node-id="450:18505" data-name="Background+Border">
                      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:18506" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[21px]">03</p>
                      </div>
                      <p className="leading-[24px] sm:leading-[28px] min-w-full relative shrink-0 text-[#432060] text-[14px] sm:text-[16px] w-[min-content]" data-node-id="450:18507" style={{ fontVariationSettings: "'opsz' 14" }}>{`Explored 3 upgrade system architectures `}</p>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative rounded-[18px] self-stretch" data-node-id="450:18508" data-name="Background+Border">
                      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:18509" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[21px]">04</p>
                      </div>
                      <p className="leading-[24px] sm:leading-[28px] min-w-full relative shrink-0 text-[#432060] text-[14px] sm:text-[16px] w-[min-content]" data-node-id="450:18510" style={{ fontVariationSettings: "'opsz' 14" }}>
                        Collaborated with engineers and researchers
                      </p>
                    </div>
                  </CaseStudyStagger>
                </div>
                <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:18511" data-name="Separator" />
                <CapitalOneProcessTimeline />
              </div>
            </CaseStudySection>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:18543" data-name="Separator" />
            <CaseStudySection className="content-stretch flex flex-col gap-[32px] items-start py-5 sm:py-6 lg:py-8 relative shrink-0 w-full" data-node-id="450:18544" data-name="Section - USER">
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="450:18545">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:18546">
                  <div className="content-stretch flex flex-col items-start w-full max-w-[680px] min-w-0 relative shrink-0" data-node-id="450:18547" data-name="Container">
                    <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:18548" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[25.5px]">Understanding the User</p>
                    </div>
                  </div>
                  <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-w-full relative shrink-0 text-[#845482] text-[32px] w-[min-content]" data-node-id="450:18549">
                    Designing for the Technical Admin
                  </p>
                </div>
                <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="450:18550">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[0.75px] pt-[3.25px] relative" data-node-id="450:18551" data-name="Container">
                    <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[16px] w-full" data-node-id="450:18552" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[25.5px]">I compared notes with our UX Researcher and identified the primary user is a Technical Admin.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="450:18553">
                <CaseStudyStagger
                  className="content-stretch flex flex-row gap-[24px] items-start relative shrink-0 w-full"
                  data-node-id="450:18554"
                  itemClassName={CASE_STUDY_CARD_STAGGER_ITEM_XL}
                  staggerMs={65}
                >
                  <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px p-[24px] relative rounded-[16px]" data-node-id="450:18555">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:18556" data-name="Heading 5">
                      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#432060] text-[14px] w-full" data-node-id="450:18557" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[40px]">Roles</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="450:18558">
                      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:18559" data-name="Container">
                        <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:18560" data-name="Margin">
                          <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:18561" data-name="Background" />
                        </div>
                        <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#6b6b6b] text-[14px]" data-node-id="450:18562" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[19.5px]">DevOps Lead</p>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:18563" data-name="Container">
                        <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:18564" data-name="Margin">
                          <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:18565" data-name="Background" />
                        </div>
                        <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#6b6b6b] text-[14px]" data-node-id="450:18566" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[19.5px]">Data Admin</p>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:18567" data-name="Container">
                        <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:18568" data-name="Margin">
                          <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:18569" data-name="Background" />
                        </div>
                        <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#6b6b6b] text-[14px]" data-node-id="450:18570" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[19.5px]">{`Infrastructure Manager `}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px p-[24px] relative rounded-[16px]" data-node-id="450:18571">
                    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="450:18572">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:18573" data-name="Heading 5">
                        <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#432060] text-[14px] w-full" data-node-id="450:18574" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[40px]">Responsibilities</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="450:18575">
                        <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:18576" data-name="Container">
                          <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:18577" data-name="Margin">
                            <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:18578" data-name="Background" />
                          </div>
                          <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#6b6b6b] text-[14px]" data-node-id="450:18579" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[19.5px]">Setting up</p>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:18580" data-name="Container">
                          <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:18581" data-name="Margin">
                            <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:18582" data-name="Background" />
                          </div>
                          <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#6b6b6b] text-[14px]" data-node-id="450:18583" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[19.5px]">Installing and upgrading</p>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:18584" data-name="Container">
                          <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:18585" data-name="Margin">
                            <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:18586" data-name="Background" />
                          </div>
                          <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#6b6b6b] text-[14px]" data-node-id="450:18587" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[19.5px]">Maintenance of platform environments</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CaseStudyStagger>
                <div className="content-stretch flex h-auto items-center relative shrink-0 w-full" data-node-id="450:18588" data-name="Container">
                  <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                    <div className="bg-[#fdfcfb] content-stretch flex flex-[1_0_0] flex-col gap-[24px] h-full items-start min-h-px min-w-px py-5 sm:py-6 lg:py-8 relative rounded-[18px]" data-node-id="450:18589" data-name="Background+Border">
                      <div className="relative shrink-0 w-full" data-node-id="450:18590" data-name="Heading 4">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
                          <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold h-[40px] justify-center leading-[0] relative shrink-0 text-[#432060] text-[16px] text-center w-[372px]" data-node-id="450:18591" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[40px]">Current Experience</p>
                          </div>
                        </div>
                      </div>
                      <div className="aspect-[1600/354] relative rounded-[24px] shrink-0 w-full" data-node-id="450:18592" data-name="image 24">
                        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgImage24} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CaseStudySection>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:18593" data-name="Separator" />
            <CaseStudySection className="content-stretch flex flex-col gap-[48px] items-start py-5 sm:py-6 lg:py-8 relative shrink-0 w-full" data-node-id="450:18594" data-name="Section - PROBLEM">
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:18595">
                <div className="content-stretch flex flex-col items-start w-full max-w-[680px] min-w-0 relative shrink-0" data-node-id="450:18596" data-name="Container">
                  <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:18597" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[25.5px]">The Problem</p>
                  </div>
                </div>
                <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-w-full relative shrink-0 text-[#845482] text-[32px] w-[min-content]" data-node-id="450:18598">
                  Enterprise users lacked a clear, self-service way to install, upgrade, and manage multiple products across distributed environments.
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="450:18599">
                <div className="content-stretch flex flex-row gap-[16px] h-auto items-stretch relative shrink-0 w-full" data-node-id="450:18600">
                  <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[41px] pt-[49px] px-[41px] relative rounded-[18px] self-stretch" data-node-id="450:18601" data-name="Background+Border">
                    <div className="relative rounded-[18px] shrink-0 w-full" data-node-id="450:18602" data-name="Background+Border">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold gap-[12px] items-start relative size-full">
                        <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:18603" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[21px]">{` 01`}</p>
                        </div>
                        <p className="leading-[28px] min-w-0 w-full relative shrink-0 text-[#3a7992] text-[18px] whitespace-normal break-words" data-node-id="450:18604" style={{ fontVariationSettings: "'opsz' 14" }}>
                          Workflows were fragmented across systems
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[41px] pt-[49px] px-[41px] relative rounded-[18px] self-stretch" data-node-id="450:18605" data-name="Background+Border">
                    <div className="relative rounded-[18px] shrink-0 w-full" data-node-id="450:18606" data-name="Background+Border">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold gap-[12px] items-start relative size-full">
                        <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:18607" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[21px]">02</p>
                        </div>
                        <p className="leading-[28px] min-w-0 w-full relative shrink-0 text-[#3a7992] text-[18px] whitespace-normal break-words" data-node-id="450:18608" style={{ fontVariationSettings: "'opsz' 14" }}>
                          Users relied heavily on support teams
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[41px] pt-[49px] px-[41px] relative rounded-[18px] self-stretch" data-node-id="450:18609" data-name="Background+Border">
                    <div className="relative rounded-[18px] shrink-0 w-full" data-node-id="450:18610" data-name="Background+Border">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold gap-[12px] items-start relative size-full">
                        <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:18611" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[21px]">03</p>
                        </div>
                        <p className="leading-[28px] min-w-0 w-full relative shrink-0 text-[#3a7992] text-[18px] whitespace-normal break-words" data-node-id="450:18612" style={{ fontVariationSettings: "'opsz' 14" }}>
                          Upgrade decisions lacked clarity and visibility
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#ede8f5] border-[#4a2472] border-l-3 border-solid content-stretch flex items-start pb-[18px] pl-[27px] pr-[24px] pt-[20.895px] relative rounded-br-[10px] rounded-tr-[10px] shrink-0 w-full" data-node-id="450:18613" data-name="Background+VerticalBorder">
                  <div className="flex-[1_0_0] min-h-px min-w-px relative" data-node-id="450:18614" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start leading-[0] pb-[0.695px] relative size-full text-[#4a2472] text-[14px]">
                      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center min-w-full relative shrink-0 w-[min-content]" data-node-id="450:18615" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[23.8px]">The real problem wasn’t just installation—it was decision-making</p>
                      </div>
                      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal h-[72px] justify-center relative shrink-0 w-[813px]" data-node-id="450:18616" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <ul className="list-disc">
                          <li className="mb-0 ms-[21px]">
                            <span className="leading-[23.8px]">Users couldn’t easily evaluate upgrade options</span>
                          </li>
                          <li className="mb-0 ms-[21px]">
                            <span className="leading-[23.8px]">Version information wasn’t surfaced clearly</span>
                          </li>
                          <li className="ms-[21px]">
                            <span className="leading-[23.8px]">There was no structured way to choose how to upgrade</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CaseStudySection>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:18617" data-name="Separator" />
            <CaseStudySection className="content-stretch flex flex-col gap-[32px] items-start py-5 sm:py-6 lg:py-8 relative shrink-0 w-full" data-node-id="450:18618" data-name="Section - COMPETITIVE ANALYSIS">
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="450:18619">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:18620">
                  <div className="content-stretch flex flex-col items-start w-full max-w-[680px] min-w-0 relative shrink-0" data-node-id="450:18621" data-name="Container">
                    <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:18622" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[25.5px]">Benchmark Analysis</p>
                    </div>
                  </div>
                  <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-w-full relative shrink-0 text-[#845482] text-[32px] w-[min-content]" data-node-id="450:18623">
                    Learning from what exists
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start pt-[3px] relative shrink-0 w-full" data-node-id="450:18624" data-name="Container">
                  <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[16px] w-full" data-node-id="450:18625" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[25.5px]">I analyzed 5 Kubernetes-based enterprise platforms including Red Hat, Microsoft Purview, Cloudera, Dremio, and SAP across product trials, tutorial videos, and documentation sites. I focused on two core questions:</p>
                  </div>
                </div>
              </div>
              <CaseStudyStagger
                className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full"
                data-node-id="450:18626"
                itemClassName={CASE_STUDY_VERTICAL_STAGGER_ITEM}
                staggerMs={65}
                variant="subtle"
              >
                <div className={benchmarkSplitRowClass} data-node-id="450:18627" data-name="Container">
                  <div className={benchmarkSplitTextPanelClass} data-node-id="450:18628" data-name="Background+Border">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:18629" data-name="Heading 4">
                      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] w-full" data-node-id="450:18630" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[25.5px]">How do they surface available upgrades?</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="450:18631">
                      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:18632" data-name="Container">
                        <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:18633" data-name="Margin">
                          <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:18634" data-name="Background" />
                        </div>
                        <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#555] text-[14px]" data-node-id="450:18635" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[19.5px]">Notification banners</p>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:18636" data-name="Container">
                        <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:18637" data-name="Margin">
                          <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:18638" data-name="Background" />
                        </div>
                        <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#555] text-[14px]" data-node-id="450:18639" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[19.5px]">Upgrade icons and status markers</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={benchmarkSplitImageClass} data-node-id="450:18640" data-name="image 18">
                    <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-br-[18px] rounded-tr-[18px]">
                      <div className="absolute bg-white inset-0 rounded-br-[18px] rounded-tr-[18px]" />
                      <div className="absolute inset-0 overflow-hidden rounded-br-[18px] rounded-tr-[18px]">
                        <img alt="" className="absolute h-[140.32%] left-[-0.03%] max-w-none top-0 w-full" src={imgImage18} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={benchmarkSplitRowClass} data-node-id="450:18641" data-name="Container">
                  <div className={benchmarkSplitTextPanelClass} data-node-id="450:18642" data-name="Background+Border">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:18643" data-name="Heading 5">
                      <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] w-full" data-node-id="450:18644" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[25.5px]">How do they support version decisions?</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="450:18645">
                      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:18646" data-name="Container">
                        <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:18647" data-name="Margin">
                          <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:18648" data-name="Background" />
                        </div>
                        <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#555] text-[14px]" data-node-id="450:18649" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[19.5px]">Version documentation centers</p>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:18650" data-name="Container">
                        <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:18651" data-name="Margin">
                          <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:18652" data-name="Background" />
                        </div>
                        <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#555] text-[14px]" data-node-id="450:18653" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[19.5px]">Use case documentation</p>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:18654" data-name="Container">
                        <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:18655" data-name="Margin">
                          <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:18656" data-name="Background" />
                        </div>
                        <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#555] text-[14px]" data-node-id="450:18657" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[19.5px]">Upgrade activity log</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={benchmarkSplitImageClass} data-node-id="450:18658" data-name="image 18">
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-br-[18px] rounded-tr-[18px]">
                      <div className="absolute inset-0 rounded-br-[18px] rounded-tr-[18px] bg-white" />
                      <div className="absolute inset-0 overflow-hidden rounded-br-[18px] rounded-tr-[18px]">
                        <img
                          alt=""
                          className="absolute left-0 top-[-27.46%] h-[154.7%] w-[97.24%] max-w-none"
                          src={imgBenchmarkVersionDecisionsMain}
                        />
                      </div>
                    </div>
                    <div
                      className="pointer-events-none absolute right-[47px] top-[136.23px] h-[54px] w-[64px]"
                      data-node-id="450:18659"
                      data-name="image 19"
                    >
                      <img
                        alt=""
                        className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
                        src={imgBenchmarkVersionDecisionsBadge}
                      />
                    </div>
                  </div>
                </div>
              </CaseStudyStagger>
            </CaseStudySection>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:18660" data-name="Separator" />
            <CaseStudySection className="content-stretch flex flex-col gap-[48px] items-start py-5 sm:py-6 lg:py-8 relative shrink-0 w-full" data-node-id="450:18661" data-name="Section - DESIGN GOALS">
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:18662">
                <div className="content-stretch flex flex-col items-start w-full max-w-[680px] min-w-0 relative shrink-0" data-node-id="450:18663" data-name="Container">
                  <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:18664" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[25.5px]">Opportunity Areas</p>
                  </div>
                </div>
                <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-w-full relative shrink-0 text-[#845482] text-[32px] w-[min-content]" data-node-id="450:18665">
                  What I set out to do better
                </p>
              </div>
              <div className="content-stretch flex flex-row gap-[24px] h-auto items-start relative shrink-0 w-full" data-node-id="450:18666" data-name="Container">
                <div className="content-stretch flex flex-[1_0_0] flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold gap-[12px] items-start min-h-px min-w-px relative rounded-[18px] self-stretch" data-node-id="450:18667" data-name="Background+Border">
                  <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:18668" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[40px]">01</p>
                  </div>
                  <p className="leading-[28px] min-w-0 w-full relative shrink-0 text-[#432060] text-[16px] whitespace-normal break-words" data-node-id="450:18669" style={{ fontVariationSettings: "'opsz' 14" }}>{`Surface version  information outside of dense documentation hubs`}</p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold gap-[12px] items-start min-h-px min-w-px relative rounded-[18px] self-stretch" data-node-id="450:18670" data-name="Background+Border">
                  <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:18671" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[40px]">02</p>
                  </div>
                  <p className="leading-[28px] min-w-0 w-full relative shrink-0 text-[#432060] text-[16px] whitespace-normal break-words" data-node-id="450:18672" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Communicate update availability it a more persistent visible way
                  </p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold gap-[12px] items-start min-h-px min-w-px relative rounded-[18px] self-stretch" data-node-id="450:18673" data-name="Background+Border">
                  <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:18674" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[40px]">03</p>
                  </div>
                  <p className="leading-[28px] min-w-0 w-full relative shrink-0 text-[#432060] text-[16px] whitespace-normal break-words" data-node-id="450:18675" style={{ fontVariationSettings: "'opsz' 14" }}>{`Improve speed and efficiency of upgrade workflows  `}</p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold gap-[12px] items-start min-h-px min-w-px relative rounded-[18px] self-stretch" data-node-id="450:18676" data-name="Background+Border">
                  <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:18677" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[40px]">04</p>
                  </div>
                  <p className="leading-[28px] min-w-0 w-full relative shrink-0 text-[#432060] text-[16px] whitespace-normal break-words" data-node-id="450:18678" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Surface the right information at the right time
                  </p>
                </div>
              </div>
            </CaseStudySection>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:18679" data-name="Separator" />
            <CaseStudySection
              animated={false}
              className="content-stretch flex flex-col gap-[32px] items-start py-5 sm:py-6 lg:py-8 relative shrink-0 w-full"
              data-node-id="450:18680"
              data-name="Section - IDEATION"
            >
              <SoftAppearOnce className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:18682">
                  <div className="content-stretch flex flex-col items-start w-full max-w-[680px] min-w-0 relative shrink-0" data-node-id="450:18683" data-name="Container">
                    <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:18684" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[25.5px]">Design Exploration</p>
                    </div>
                  </div>
                  <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-w-full relative shrink-0 text-[#845482] text-[32px] w-[min-content]" data-node-id="450:18685">
                    Three approaches to the upgrade problem
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start pb-[0.75px] pt-[3.25px] relative shrink-0 w-full" data-node-id="450:18686" data-name="Container">
                  <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[16px] w-full" data-node-id="450:18687" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[25.5px]">I designed three lo-fi concepts exploring different levels of user control versus speed in the upgrade flow. Each made different tradeoffs.</p>
                  </div>
                </div>
              </SoftAppearOnce>
              <CaseStudyStagger
                className="content-stretch flex flex-col gap-[16px] items-start py-[26px] relative shrink-0 w-full"
                data-node-id="450:18688"
                data-name="Container"
                itemClassName={CASE_STUDY_VERTICAL_STAGGER_ITEM}
                initialDelayMs={120}
                staggerMs={170}
                variant="subtle"
              >
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full md:flex-row" data-node-id="450:18689">
                  <div className="bg-[#ede8f5] border-[#4a2472] border-l-3 border-solid content-stretch flex w-full min-h-0 min-w-0 items-start pb-[18px] pl-[27px] pr-[24px] pt-[20.895px] relative rounded-br-[10px] rounded-tr-[10px] md:flex-[1_0_0]" data-node-id="450:18690" data-name="Background+VerticalBorder">
                    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-node-id="450:18691" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.695px] relative size-full">
                        <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a2472] text-[0px] w-full whitespace-pre-wrap" data-node-id="450:18692" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[23.8px] mb-0 text-[14px]" style={{ fontVariationSettings: "'opsz' 14" }}>{`⚠️ Technical context: `}</p>
                          <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[23.8px] text-[14px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                            Upgrading products in this system is like needing to update each Google Doc individually when a new version of Google Drive drops — every data plane must be touched separately.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[231px] relative rounded-[24px] shrink-0 w-full max-w-[200px] self-center md:w-[200px] md:self-auto" data-node-id="450:18693" data-name="image 23">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgImage23} />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[24px] items-start py-[12px] relative shrink-0 w-full" data-node-id="450:18694" data-name="Container">
                  <div className="border border-[#ddd8d0] border-solid content-stretch flex h-[200px] items-start overflow-clip relative rounded-[18px] shrink-0 w-full" data-node-id="450:18695" data-name="Border">
                    <div className="bg-white border-[#ddd8d0] border-r border-solid relative rounded-bl-[18px] rounded-tl-[18px] self-stretch shrink-0 w-[250px]" data-node-id="450:18696" data-name="Background">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start p-[20px] relative size-full">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:18697" data-name="Heading 5">
                          <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] w-full" data-node-id="450:18698" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[25.5px]">V1 · Data Plane Level Upgrades</p>
                          </div>
                        </div>
                        <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#555] text-[0px] whitespace-nowrap" data-node-id="450:18699" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="font-['DM_Sans:Regular',sans-serif] font-normal text-[14px]">
                            <span className="leading-[19.5px] text-[#2d6a4f]" style={{ fontVariationSettings: "'opsz' 14" }}>
                              High
                            </span>
                            <span className="leading-[19.5px]" style={{ fontVariationSettings: "'opsz' 14" }}>{` control, `}</span>
                            <span className="leading-[19.5px] text-[#af3a38]" style={{ fontVariationSettings: "'opsz' 14" }}>
                              lower
                            </span>
                            <span className="leading-[19.5px]" style={{ fontVariationSettings: "'opsz' 14" }}>{` efficiency`}</span>
                          </p>
                        </div>
                        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#555] text-[14px] w-[min-content]" data-node-id="450:18700" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <ul className="list-disc">
                            <li className="mb-0 ms-[21px]">
                              <span className="leading-[19.5px]">Upgrade data planes individually</span>
                            </li>
                            <li className="mb-0 ms-[21px]">
                              <span className="leading-[19.5px]">Gives users precise control</span>
                            </li>
                            <li className="ms-[21px]">
                              <span className="leading-[19.5px]">Slower for large-scale operations</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-br-[18px] rounded-tr-[18px] self-stretch" data-node-id="450:18701" data-name="Background">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                        <div className="aspect-[1536/412] flex-[1_0_0] min-h-px min-w-px relative" data-node-id="450:18702" data-name="image 20">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage20} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border border-[#ddd8d0] border-solid content-stretch flex h-[200px] items-start overflow-clip relative rounded-[18px] shrink-0 w-full" data-node-id="450:18703" data-name="Border">
                    <div className="bg-white border-[#ddd8d0] border-r border-solid h-full relative rounded-bl-[18px] rounded-tl-[18px] shrink-0 w-[250px]" data-node-id="450:18704" data-name="Background">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start p-[20px] relative size-full">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:18705" data-name="Heading 5">
                          <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] whitespace-nowrap" data-node-id="450:18706" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[25.5px]">V2 · Global Level Upgrades</p>
                          </div>
                        </div>
                        <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#555] text-[0px] whitespace-nowrap" data-node-id="450:18707" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="font-['DM_Sans:Regular',sans-serif] font-normal text-[14px]">
                            <span className="leading-[19.5px] text-[#2d6a4f]" style={{ fontVariationSettings: "'opsz' 14" }}>
                              High
                            </span>
                            <span className="leading-[19.5px]" style={{ fontVariationSettings: "'opsz' 14" }}>{` efficiency, `}</span>
                            <span className="leading-[19.5px] text-[#af3a38]" style={{ fontVariationSettings: "'opsz' 14" }}>
                              lower
                            </span>
                            <span className="leading-[19.5px]" style={{ fontVariationSettings: "'opsz' 14" }}>{` control`}</span>
                          </p>
                        </div>
                        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#555] text-[14px] w-[min-content]" data-node-id="450:18708" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <ul className="list-disc">
                            <li className="mb-0 ms-[21px]">
                              <span className="leading-[19.5px]">Upgrade multiple systems at once</span>
                            </li>
                            <li className="mb-0 ms-[21px]">
                              <span className="leading-[19.5px]">Faster for large environments</span>
                            </li>
                            <li className="ms-[21px]">
                              <span className="leading-[19.5px]">Less flexibility for edge cases</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-br-[18px] rounded-tr-[18px]" data-node-id="450:18709" data-name="Background">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                        <div className="aspect-[1538/408] flex-[1_0_0] min-h-px min-w-px relative" data-node-id="450:18710" data-name="image 21">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage21} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border border-[#ddd8d0] border-solid content-stretch flex h-[200px] items-start overflow-clip relative rounded-[18px] shrink-0 w-full" data-node-id="450:18711" data-name="Border">
                    <div className="bg-white border-[#ddd8d0] border-r border-solid h-full relative rounded-bl-[18px] rounded-tl-[18px] shrink-0 w-[250px]" data-node-id="450:18712" data-name="Background">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start p-[20px] relative size-full">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:18713" data-name="Heading 5">
                          <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] w-full" data-node-id="450:18714" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[25.5px]">V3 · Hybrid TCB Level Upgrades</p>
                          </div>
                        </div>
                        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2d6a4f] text-[14px] whitespace-nowrap" data-node-id="450:18715" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[19.5px]">Balanced approach</p>
                        </div>
                        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[#555] text-[14px] w-[min-content]" data-node-id="450:18716" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <ul className="list-disc">
                            <li className="mb-0 ms-[21px]">
                              <span className="leading-[19.5px]">Combines control and scalability</span>
                            </li>
                            <li className="mb-0 ms-[21px]">
                              <span className="leading-[19.5px]">Supports batch upgrades</span>
                            </li>
                            <li className="ms-[21px]">
                              <span className="leading-[19.5px]">More complex to implement</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-br-[18px] rounded-tr-[18px]" data-node-id="450:18717" data-name="Background">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                        <div className="aspect-[1524/444] flex-[1_0_0] min-h-px min-w-px relative rounded-[18px]" data-node-id="450:18718" data-name="image 22">
                          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[18px] size-full" src={imgImage22} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CaseStudyStagger>
              <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:18719" data-name="Separator" />
              <div className="content-stretch flex flex-col items-start pt-5 sm:pt-6 lg:pt-8 relative shrink-0 w-full" data-node-id="450:18720">
                <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] relative shrink-0 text-[#3a7992] text-[24px] w-full" data-node-id="450:18721">
                  Key Design Decisions
                </p>
                <div className="content-stretch flex font-['DM_Sans:SemiBold',sans-serif] font-semibold gap-[24px] min-h-[156px] items-start pt-8 sm:pt-10 lg:pt-12 relative shrink-0 w-full" data-node-id="450:18722" data-name="Container">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative rounded-[18px] self-stretch" data-node-id="450:18723" data-name="Background+Border">
                    <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:18724" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[40px]">01</p>
                    </div>
                    <p className="leading-[28px] min-w-0 w-full relative shrink-0 text-[#432060] text-[16px] whitespace-normal break-words" data-node-id="450:18725" style={{ fontVariationSettings: "'opsz' 14" }}>{`Introduced upgrade visibility via banners + status indicators  `}</p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative rounded-[18px] self-stretch" data-node-id="450:18726" data-name="Background+Border">
                    <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:18727" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[40px]">02</p>
                    </div>
                    <p className="leading-[28px] min-w-0 w-full relative shrink-0 text-[#432060] text-[16px] whitespace-normal break-words" data-node-id="450:18728" style={{ fontVariationSettings: "'opsz' 14" }}>
                      Version selection required before upgrade flow to prevent drop-off
                    </p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative rounded-[18px] self-stretch" data-node-id="450:18729" data-name="Background+Border">
                    <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:18730" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[40px]">03</p>
                    </div>
                    <p className="leading-[28px] min-w-0 w-full relative shrink-0 text-[#432060] text-[16px] whitespace-normal break-words" data-node-id="450:18731" style={{ fontVariationSettings: "'opsz' 14" }}>
                      Explored batch upgrades at various entry points for efficiency
                    </p>
                  </div>
                </div>
              </div>
            </CaseStudySection>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:18732" data-name="Separator" />
            <CaseStudySection className="content-stretch flex flex-col gap-[32px] items-start py-5 sm:py-6 lg:py-8 relative shrink-0 w-full" data-node-id="450:18733" data-name="Section - FEEDBACK">
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="450:18734">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:18735">
                  <div className="content-stretch flex flex-col items-start w-full max-w-[680px] min-w-0 relative shrink-0" data-node-id="450:18736" data-name="Container">
                    <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:18737" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[25.5px]">{`Feedback & Iteration`}</p>
                    </div>
                  </div>
                  <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-w-full relative shrink-0 text-[#845482] text-[32px] w-[min-content]" data-node-id="450:18738">
                    Validated system tradeoffs with stakeholders across engineering and product
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start pb-[0.75px] pt-[3.25px] relative shrink-0 w-full" data-node-id="450:18739" data-name="Container">
                  <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[16px] w-full" data-node-id="450:18740" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[25.5px]">I presented concepts in a cross-functional design critique and incorporated feedback from engineers, PMs, and senior stakeholders to better align with user needs and expectations.</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-row gap-[24px] h-auto items-center py-px relative shrink-0 w-full" data-node-id="450:18741" data-name="Container">
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                  <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px pb-[41px] pt-[49px] px-[41px] relative rounded-[18px]" data-node-id="450:18742" data-name="Background+Border">
                    <div className="relative shrink-0 w-full" data-node-id="450:18743">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
                        <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-node-id="450:18744" data-name="Container">
                          <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.4px] uppercase w-full" data-node-id="450:18745" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[23.8px]">01</p>
                          </div>
                        </div>
                        <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#3a7992] text-[18px] w-full" data-node-id="450:18746" style={{ fontVariationSettings: "'opsz' 14" }}>
                          Users value control more than speed for version upgrade
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                  <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px pb-[41px] pt-[49px] px-[41px] relative rounded-[18px]" data-node-id="450:18747" data-name="Background+Border">
                    <div className="relative shrink-0 w-full" data-node-id="450:18748">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
                        <div className="content-stretch flex flex-col items-start pb-[0.8px] relative shrink-0 w-full" data-node-id="450:18749" data-name="Container">
                          <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.4px] uppercase w-full" data-node-id="450:18750" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[23.8px]">02</p>
                          </div>
                        </div>
                        <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#3a7992] text-[18px] w-full" data-node-id="450:18751" style={{ fontVariationSettings: "'opsz' 14" }}>
                          Users may not know the target version before upgrade + technically challenging to update UI
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CaseStudySection>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:18752" data-name="Separator" />
            <CaseStudySection
              className="content-stretch flex flex-col gap-[48px] items-start py-5 sm:py-6 lg:py-8 relative shrink-0 w-full"
              data-node-id="450:18753"
              data-name="Section - MY REVISED RECOMMENDATION"
            >
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="450:18754" data-name="Section - RECOMMENDATION">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:18755">
                  <div className="content-stretch flex flex-col items-start w-full max-w-[680px] min-w-0 relative shrink-0" data-node-id="450:18756" data-name="Container">
                    <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:18757" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[25.5px]">My Revised Recommendation</p>
                    </div>
                  </div>
                  <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-w-full relative shrink-0 text-[#845482] text-[32px] w-[min-content]" data-node-id="450:18758">
                    Balancing control, clarity, and speed
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start pb-[0.75px] pt-[3.25px] relative shrink-0 w-full" data-node-id="450:18759" data-name="Container">
                  <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[15px] w-full" data-node-id="450:18760" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[25.5px]">Based on the stakeholder feedback I recommended a data plane-level approach to prioritize control and clarity in high-risk enterprise environments, while enabling future expansion into batch upgrades at the TCB level.</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex font-['DM_Sans:SemiBold',sans-serif] font-semibold flex-row gap-[24px] h-auto items-start relative shrink-0 w-full" data-node-id="450:18761" data-name="Container">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px pb-[24px] relative rounded-[18px] self-stretch" data-node-id="450:18762" data-name="Background+Border">
                  <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:18763" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[40px]">01</p>
                  </div>
                  <p className="leading-[28px] min-w-0 w-full relative shrink-0 text-[#432060] text-[16px] whitespace-normal break-words" data-node-id="450:18764" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Data plane level upgrades for control
                  </p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px pb-[24px] relative rounded-[18px] self-stretch" data-node-id="450:18765" data-name="Background+Border">
                  <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:18766" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[40px]">02</p>
                  </div>
                  <p className="leading-[28px] min-w-0 w-full relative shrink-0 text-[#432060] text-[16px] whitespace-normal break-words" data-node-id="450:18767" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Potential TCB page as additional entry point
                  </p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px pb-[24px] relative rounded-[18px] self-stretch" data-node-id="450:18768" data-name="Background+Border">
                  <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:18769" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[40px]">03</p>
                  </div>
                  <p className="leading-[28px] min-w-0 w-full relative shrink-0 text-[#432060] text-[16px] whitespace-normal break-words" data-node-id="450:18770" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Version selection within the upgrade flow instead of before
                  </p>
                </div>
              </div>
            </CaseStudySection>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:18771" data-name="Separator" />
            <CaseStudySection
              id="case-study-prototype"
              className="content-stretch flex scroll-mt-8 flex-col gap-[32px] items-start py-5 sm:py-6 lg:py-8 relative shrink-0 w-full"
              data-node-id="642:22495"
              data-name="Section - PROTOTYPE"
            >
              {/*
                Figma 642:22495 — label + title + disclaimer + laptop embed (645:22580 header row).
              */}
              <div
                className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
                data-node-id="645:22580"
              >
                <div className="content-stretch flex flex-col items-start w-full max-w-[680px] min-w-0 relative shrink-0">
                  <div
                    className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap"
                    data-node-id="645:22578"
                    style={{ fontVariationSettings: "'opsz' 14" }}
                  >
                    <p className="leading-[25.5px]">Prototype</p>
                  </div>
                </div>
                <p
                  className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-w-full relative shrink-0 text-[#845482] text-[32px] w-[min-content]"
                  data-node-id="642:22496"
                >
                  What this could look like:
                </p>
              </div>
              <div
                className="flex w-full shrink-0 flex-col justify-center leading-[0] text-[#6b6b6b] text-[15px]"
                data-node-id="642:22497"
                style={{ fontVariationSettings: "'opsz' 14" }}
              >
                <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[25.5px]">
                  *This is a hypothetical flow and does not reflect reality or Capital One.
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="642:22498">
                {/*
                  Figma 450:18775 — slate field + centered laptop (`dataScienceHero`); screen = prototype video; 627:22126 logo cover on video.
                */}
                <div
                  className="relative flex min-h-[300px] w-full shrink-0 items-center justify-center overflow-clip rounded-[24px] bg-[#7a9fb0] px-3 py-8 sm:h-[417px] sm:px-6"
                  data-node-id="450:18775"
                  data-name="Container"
                >
                  <div className="mx-auto flex w-full max-w-[640px] justify-center">
                    <CmsxLaptopVideoFrame
                      variant="dataScienceHero"
                      posterSrc={imgContainer}
                      videoSrc="/videos/C1PrototypePublic.mov"
                      className="pointer-events-none w-full shrink-0"
                      screenOverlay={
                        <div
                          className="pointer-events-none absolute left-[4px] top-[4px] z-10 h-[17px] w-[74px] bg-[#fefefe]"
                          aria-hidden
                          data-node-id="627:22126"
                        />
                      }
                    />
                  </div>
                </div>
              </div>
            </CaseStudySection>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:18779" data-name="Separator" />
            <CaseStudySection className="content-stretch flex flex-col gap-[48px] items-start py-5 sm:py-6 lg:py-8 relative shrink-0 w-full" data-node-id="450:18780">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:18781" data-name="Section - RECOMMENDATION">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:18782">
                  <div className="content-stretch flex flex-col items-start w-full max-w-[680px] min-w-0 relative shrink-0" data-node-id="450:18783" data-name="Container">
                    <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:18784" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[25.5px]">My Impact</p>
                    </div>
                  </div>
                  <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-w-full relative shrink-0 text-[#845482] text-[32px] w-[min-content]" data-node-id="450:18785">
                    Outcomes
                  </p>
                </div>
              </div>
              <div className="content-stretch flex font-['DM_Sans:SemiBold',sans-serif] font-semibold flex-row gap-[32px] h-auto items-start relative shrink-0 w-full" data-node-id="450:18786" data-name="Container">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px pb-[24px] relative rounded-[18px] self-stretch" data-node-id="450:18787" data-name="Background+Border">
                  <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:18788" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[40px]">01</p>
                  </div>
                  <p className="leading-[28px] min-w-0 w-full relative shrink-0 text-[#432060] text-[16px] whitespace-normal break-words" data-node-id="450:18789" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Handed off high-fidelity prototype that met technical criteria and product vision
                  </p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px pb-[24px] relative rounded-[18px] self-stretch" data-node-id="450:18790" data-name="Background+Border">
                  <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:18791" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[40px]">03</p>
                  </div>
                  <p className="leading-[28px] min-w-0 w-full relative shrink-0 text-[#432060] text-[16px] whitespace-normal break-words" data-node-id="450:18792" style={{ fontVariationSettings: "'opsz' 14" }}>{`Overall improved  understanding of K8 platforms within the design sub team `}</p>
                </div>
              </div>
            </CaseStudySection>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:18793" data-name="Separator" />
            <CaseStudySection
              className="content-stretch flex flex-col gap-[16px] items-start py-5 sm:py-6 lg:py-8 relative shrink-0 w-full"
              data-node-id="450:18794"
              data-name="Section - REFLECTIONS"
            >
              <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-node-id="450:18795">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:18796">
                  <div className="content-stretch flex flex-col items-start w-full max-w-[680px] min-w-0 relative shrink-0" data-node-id="450:18797" data-name="Container">
                    <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:18798" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[25.5px]">Reflections</p>
                    </div>
                  </div>
                  <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-w-full relative shrink-0 text-[#845482] text-[32px] w-[min-content]" data-node-id="450:18799">
                    What I took away
                  </p>
                </div>
                <div className="content-stretch flex flex-col gap-4 items-start pb-[16px] relative shrink-0 w-full" data-node-id="450:18800" data-name="Container">
                  <div className="content-stretch flex flex-row gap-4 h-auto items-center relative shrink-0 w-full" data-node-id="450:18801">
                    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                      <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-full items-start min-h-px min-w-px p-[24px] relative rounded-[16px]" data-node-id="450:18802" data-name="Background+Border">
                        <div className="bg-[#ede7f8] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[40px]" data-node-id="450:18803" data-name="Container">
                          <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[22px] whitespace-nowrap" data-node-id="450:18804" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[37.4px]">📝</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:18805" data-name="Heading 4">
                          <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] w-full" data-node-id="450:18806" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[22.1px]">Clear documentation matters</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:18807" data-name="Container">
                          <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] w-full" data-node-id="450:18808" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[18px]">In a complex problem space, how well you document your thinking is just as important as the thinking itself.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                      <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-full items-start min-h-px min-w-px p-[24px] relative rounded-[16px]" data-node-id="450:18809" data-name="Background+Border">
                        <div className="bg-[#ede7f8] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[40px]" data-node-id="450:18810" data-name="Container">
                          <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[22px] whitespace-nowrap" data-node-id="450:18811" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[37.4px]">🧩</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:18812" data-name="Heading 4">
                          <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] w-full" data-node-id="450:18813" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[22.1px]">Navigating technical complexity</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:18814" data-name="Container">
                          <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] w-full" data-node-id="450:18815" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[18px] mb-0">Learning to hold deep technical constraints alongside user needs without letting either dominate was a</p>
                            <p className="leading-[18px]">real skill-builder.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-row gap-4 h-auto items-center relative shrink-0 w-full" data-node-id="450:18816">
                    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                      <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-full items-start min-h-px min-w-px p-[24px] relative rounded-[16px]" data-node-id="450:18817" data-name="Background+Border">
                        <div className="bg-[#ede7f8] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[40px]" data-node-id="450:18818" data-name="Container">
                          <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[22px] whitespace-nowrap" data-node-id="450:18819" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[37.4px]">⚖️</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:18820" data-name="Heading 4">
                          <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] w-full" data-node-id="450:18821" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[22.1px]">Short vs. long term tradeoffs</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:18822" data-name="Container">
                          <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] w-full" data-node-id="450:18823" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[18px]">{`I got much better at scoping work to what's achievable now while keeping the longer-term vision coherent.`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                      <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-full items-start min-h-px min-w-px p-[24px] relative rounded-[16px]" data-node-id="450:18824" data-name="Background+Border">
                        <div className="bg-[#ede7f8] content-stretch flex flex-col items-center justify-center relative rounded-[10px] shrink-0 size-[40px]" data-node-id="450:18825" data-name="Container">
                          <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[22px] whitespace-nowrap" data-node-id="450:18826" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[37.4px]">💬</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:18827" data-name="Heading 4">
                          <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] w-full" data-node-id="450:18828" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[22.1px]">Presenting concept flows</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:18829" data-name="Container">
                          <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] w-full" data-node-id="450:18830" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[18px] mb-0">Structured stakeholder presentations with clear pros/cons led to faster, better decisions than open-ended</p>
                            <p className="leading-[18px]">reviews.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[15px] w-full whitespace-pre-wrap" data-node-id="450:18831" style={{ fontVariationSettings: "'opsz' 14" }}>
                <p className="leading-[25.5px] mb-0">Designing for enterprise systems isn’t about simplifying complexity—it’s about structuring it so users can make confident decisions.</p>
                <p className="leading-[25.5px] mb-0">{` `}</p>
                <p className="leading-[25.5px]">This project taught me how to design for multiple mental models, high-risk decisions, and systems that need to scale beyond a single workflow.</p>
              </div>
            </CaseStudySection>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:18832" data-name="Separator" />
            <div className="content-stretch flex flex-col items-center pt-[40px] relative shrink-0 w-full" data-node-id="450:18833">
              <a
                href={docUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#432060] content-stretch flex items-center justify-center px-[40px] py-[10px] relative rounded-[16777200px] shrink-0 no-underline"
                data-node-id="450:18834"
                data-name="Home"
              >
                <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" data-node-id="450:18835" style={{ fontVariationSettings: "'opsz' 14" }}>
                  View Full Presentation
                </p>
              </a>
            </div>
            <div className="content-stretch flex gap-[12px] items-center justify-end pt-[60px] pb-16 relative shrink-0 w-full" data-node-id="450:18836" data-name="Container">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="450:18837" data-name="Container">
                <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:18838" style={{ fontVariationSettings: "'opsz' 14" }}>
                  <p className="leading-[22.1px]">Next Project :</p>
                </div>
              </div>
              <Link
                to={nextProject.to}
                className="content-stretch flex flex-col items-start relative shrink-0 no-underline"
                data-node-id="450:18839"
                data-name="Link"
              >
                <div className="capitalize flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a2472] text-[14px] tracking-[0.52px] whitespace-nowrap" data-node-id="450:18840" style={{ fontVariationSettings: "'opsz' 14" }}>
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