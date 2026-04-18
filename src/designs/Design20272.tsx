import { Link } from 'react-router-dom';
import { CaseStudyMainNav } from '../components/CaseStudyMainNav';
import { CASE_STUDY_DOC_URL, nextCaseStudyAfter } from '../data/caseStudyNav';
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

/** Figma 450:17975 — Kenvue case study hero (dashboard collage) */
const imgImage49 = "https://www.figma.com/api/mcp/asset/122c8c7e-cc0d-43f1-96c9-97ec1704963c";
const imgImage44 = "https://www.figma.com/api/mcp/asset/0a760c01-0432-4ce8-a26b-9bf16266e727";
const imgImage43 = "https://www.figma.com/api/mcp/asset/7e804162-c45c-4276-8fc4-5872b376fdb8";
const imgImage45 = "https://www.figma.com/api/mcp/asset/b23d8f31-a08f-4a88-97dd-bb00b1f1ce78";
const imgImage46 = "https://www.figma.com/api/mcp/asset/85671cff-8acc-44df-8395-b32e87e5b395";
const imgImage47 = "https://www.figma.com/api/mcp/asset/b6e42571-f4b4-475a-98db-1e09f3b8a5ec";
const imgImage48 = "https://www.figma.com/api/mcp/asset/769cba95-d2ef-4962-9131-c45e3518956a";
export default function Frame() {
  const docUrl = CASE_STUDY_DOC_URL['kenvue'];
  const nextProject = nextCaseStudyAfter('kenvue');

  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-node-id="450:20272">
      <CaseStudyMainNav />
      <div
        className={`relative flex shrink-0 flex-col items-start ${caseStudyColumnClass}`}
        data-node-id="450:20289"
        data-name="RootLayout"
      >
        <div className="relative w-full min-w-0 shrink-0 bg-[#fdfcfb]" data-node-id="450:20290" data-name="ProjectDetail">
          <div
            className={`relative flex size-full flex-col items-start gap-8 border-0 border-transparent bg-clip-padding ${caseStudyArticlePaddingXClass}`}
          >
            <SoftAppearOnce
              className={`content-stretch flex flex-col items-start relative shrink-0 w-full ${caseStudyHeroStackGapClass} ${caseStudyHeroTopPaddingClass}`}
              data-node-id="450:20291"
            >
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="450:20292" data-name="Section - HERO">
                <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-node-id="450:20293">
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="450:20294" data-name="Container">
                    <Link
                      to="/work"
                      className="content-stretch flex flex-col items-start relative shrink-0 no-underline"
                      data-node-id="450:20295"
                      data-name="Link"
                    >
                      <div className="capitalize flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a2472] text-[0px] tracking-[0.52px] whitespace-nowrap" data-node-id="450:20296" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="text-[14px]">
                          <span className="leading-[22.1px]">← A</span>
                          <span className="leading-[22.1px] lowercase">LL</span>
                          <span className="leading-[22.1px]">{` projects`}</span>
                        </p>
                      </div>
                    </Link>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="450:20297" data-name="Container">
                      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[13px] whitespace-nowrap" data-node-id="450:20298" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[22.1px]">/</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="450:20299" data-name="Container">
                      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:20300" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[22.1px]">ReThink Food</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="450:20301" data-name="Heading 2">
                    <p className="flex-[1_0_0] font-['Libre_Baskerville:Italic',sans-serif] italic leading-[1.12] min-h-px min-w-px relative text-[#432060] text-[clamp(2rem,7vw,3.75rem)] whitespace-normal break-words" data-node-id="450:20302">{`Kenvue (J&J)`}</p>
                  </div>
                </div>
                <div className="border-[#ddd8d0] border-b border-solid content-stretch flex flex-col gap-5 items-start pb-[30px] pt-[29px] relative shrink-0 w-full xl:flex-row xl:items-start xl:justify-between" data-node-id="450:20303" data-name="Border">
                  <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full lg:w-auto" data-node-id="450:20304" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20305" data-name="Container">
                      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[12px] tracking-[0.88px] uppercase whitespace-nowrap" data-node-id="450:20306" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[18.7px]">Role</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20307" data-name="Container">
                      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[14px] whitespace-normal" data-node-id="450:20308" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[23.8px]">Quantitative UXR Intern</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full lg:w-auto" data-node-id="450:20309" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20310" data-name="Container">
                      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[12px] tracking-[0.88px] uppercase whitespace-nowrap" data-node-id="450:20311" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[18.7px]">Company</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20312" data-name="Container">
                      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[14px] whitespace-normal" data-node-id="450:20313" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[23.8px]">{`Kenvue (Johnson & Johnson)`}</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-full lg:w-auto" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[12px] tracking-[0.88px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[18.7px]">Timeline</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[14px] whitespace-normal" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[23.8px]">June 2024 - August 2024</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full lg:w-auto xl:max-w-[300px]" data-node-id="450:20314" data-name="Container">
                    <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[19px] justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[12px] tracking-[0.88px] uppercase w-full" data-node-id="450:20315" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[18.7px]">Type</p>
                    </div>
                    <div className="content-stretch flex flex-wrap gap-[8px] h-auto items-start relative shrink-0 w-full" data-node-id="450:20316" data-name="ProjectDetail">
                      <div className="bg-[#d3e3e9] h-[24px] relative rounded-[16777200px] shrink-0" data-node-id="450:20317" data-name="Text">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[16px] py-[4px] relative size-full">
                          <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#3a7992] text-[12px] whitespace-nowrap" data-node-id="450:20318" style={{ fontVariationSettings: "'opsz' 14" }}>
                            User Research
                          </p>
                        </div>
                      </div>
                      <div className="bg-[#f5e9c9] h-[24px] relative rounded-[16777200px] shrink-0" data-node-id="450:20319" data-name="Text">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[16px] py-[4px] relative size-full">
                          <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#b5923c] text-[12px] whitespace-nowrap" data-node-id="450:20320" style={{ fontVariationSettings: "'opsz' 14" }}>
                            Data Analysis
                          </p>
                        </div>
                      </div>
                      <div className="bg-[#d3e3e9] h-[24px] relative rounded-[16777200px] shrink-0" data-node-id="450:20321" data-name="Text">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[16px] py-[4px] relative size-full">
                          <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#3a7992] text-[12px] whitespace-nowrap" data-node-id="450:20322" style={{ fontVariationSettings: "'opsz' 14" }}>
                            Mixed-Method Reporting
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#c9ac75] h-[417px] overflow-clip relative rounded-[24px] shrink-0 w-full" data-node-id="450:20323" data-name="Container">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 p-[10px] top-[calc(50%+0.33px)] w-[640px]" data-node-id="450:20327">
                  <div className="aspect-[1518/832] relative rounded-[12px] shrink-0 w-full" data-node-id="450:20328" data-name="image 49">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage49} />
                  </div>
                </div>
              </div>
            </SoftAppearOnce>
            <CaseStudySection
              className="content-stretch flex flex-col gap-[24px] items-start py-5 sm:py-6 lg:py-8 relative shrink-0 w-full"
              data-node-id="450:20329"
              data-name="Section - OVERVIEW"
            >
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:20330">
                <div className="content-stretch flex flex-col items-start w-full max-w-[680px] min-w-0 relative shrink-0" data-node-id="450:20331" data-name="Container">
                  <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:20332" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[25.5px]">Overview</p>
                  </div>
                </div>
                <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="450:20333" data-name="Container">
                  <div className="flex-[1_0_0] min-h-px min-w-px relative" data-node-id="450:20334" data-name="Heading 1">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                      <p className="flex-[1_0_0] font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-h-px min-w-px relative text-[#845482] text-[32px]" data-node-id="450:20335">
                        Identifying the root causes of negative IT service experiences through data
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[3.01px] relative shrink-0 w-full" data-node-id="450:20336" data-name="Container">
                <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative w-full max-w-[864px] min-w-0 shrink-0 text-[#6b6b6b] text-[16px]" data-node-id="450:20337" style={{ fontVariationSettings: "'opsz' 14" }}>
                  <p className="leading-[25.5px]">My task as a Quantitative UXR intern was to analyze DSAT (dissatisfaction) survey data across thousands of internal IT service interactions to identifying root causes of dissatisfaction in enterprise IT systems.</p>
                </div>
              </div>
              <div className="bg-[#ede7f8] border-[#6b46a0] border-l-3 border-solid content-stretch flex flex-col items-start pb-[18px] pl-[27px] pr-[24px] pt-[23.05px] relative rounded-br-[16px] rounded-tr-[16px] shrink-0 w-full" data-node-id="450:20338" data-name="Background+VerticalBorder">
                <div className="relative shrink-0 w-full" data-node-id="450:20339" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3d1f6e] text-[14px] w-full" data-node-id="450:20340" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[23.1px]">{`A DSAT ticket is defined as a ticket with a user satisfaction score <2, collected through surveys sent after an IT ticket is closed.`}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CaseStudySection>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:20341" data-name="Separator" />
            <CaseStudySection
              className="content-stretch flex flex-col gap-[32px] items-start py-5 sm:py-6 lg:py-8 relative shrink-0 w-full"
              data-node-id="450:20342"
              data-name="Section - MY SCOPE"
            >
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:20343">
                <div className="content-stretch flex flex-col items-start w-full max-w-[680px] min-w-0 relative shrink-0" data-node-id="450:20344" data-name="Container">
                  <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:20345" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[25.5px]">Projected Impact</p>
                  </div>
                </div>
                <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-w-full relative shrink-0 text-[#845482] text-[32px] w-[min-content]" data-node-id="450:20346">
                  Why this matters
                </p>
              </div>
              {/* Figma 450:20347 — equal-height row; no fixed h-[287px] or stagger wrappers */}
              <CaseStudyStagger
                className="content-stretch relative flex w-full min-h-0 shrink-0 flex-row gap-[16px] items-stretch"
                data-node-id="450:20347"
                itemClassName={CASE_STUDY_CARD_STAGGER_ITEM_XL}
                staggerMs={65}
              >
                <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex min-h-0 min-w-0 flex-[1_0_0] flex-col items-start pb-[41px] pt-[49px] px-[41px] relative rounded-[18px] md:self-stretch" data-node-id="450:20348" data-name="Background+Border">
                  <div className="relative w-full shrink-0 rounded-[18px]" data-node-id="450:20349" data-name="Background+Border">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] font-['DM_Sans:SemiBold',sans-serif] font-semibold items-start pb-5 sm:pb-6 relative size-full">
                      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:20350" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[21px]">01</p>
                      </div>
                      <p className="w-full min-w-full leading-[28px] text-[#b5923c] text-[18px]" data-node-id="450:20351" style={{ fontVariationSettings: "'opsz' 14" }}>
                        Backlogged and open tickets block users from completing work
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex min-h-0 min-w-0 flex-[1_0_0] flex-col items-start pb-[41px] pt-[49px] px-[41px] relative rounded-[18px] md:self-stretch" data-node-id="450:20352" data-name="Background+Border">
                  <div className="relative w-full shrink-0 rounded-[18px]" data-node-id="450:20353" data-name="Background+Border">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] font-['DM_Sans:SemiBold',sans-serif] font-semibold items-start relative size-full">
                      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:20354" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[21px]">02</p>
                      </div>
                      <p className="w-full min-w-full leading-[28px] text-[#b5923c] text-[18px]" data-node-id="450:20355" style={{ fontVariationSettings: "'opsz' 14" }}>
                        High ticket volume increases IT service costs through reopens and resubmissions
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex min-h-0 min-w-0 flex-[1_0_0] flex-col items-start pb-[41px] pt-[49px] px-[41px] relative rounded-[18px] md:self-stretch" data-node-id="450:20356" data-name="Background+Border">
                  <div className="relative w-full shrink-0 rounded-[18px]" data-node-id="450:20357" data-name="Background+Border">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] font-['DM_Sans:SemiBold',sans-serif] font-semibold items-start pb-5 sm:pb-6 relative leading-[0] size-full">
                      <div className="flex flex-col justify-center relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:20358" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[21px]">03</p>
                      </div>
                      <p className="w-full min-w-full leading-[28px] text-[#b5923c] text-[18px]" data-node-id="450:20359" style={{ fontVariationSettings: "'opsz' 14" }}>
                        Poor IT experiences frustrate employees and reduce satisfaction
                      </p>
                    </div>
                  </div>
                </div>
              </CaseStudyStagger>
            </CaseStudySection>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:20360" data-name="Separator" />
            <CaseStudySection className="content-stretch flex flex-col gap-[32px] items-start py-5 sm:py-6 lg:py-8 relative shrink-0 w-full" data-node-id="450:20361" data-name="Section - MY SCOPE">
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="450:20362">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:20363">
                  <div className="content-stretch flex flex-col items-start w-full max-w-[680px] min-w-0 relative shrink-0" data-node-id="450:20364" data-name="Container">
                    <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:20365" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[25.5px]">Analysis Approach</p>
                    </div>
                  </div>
                  <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-w-full relative shrink-0 text-[#845482] text-[32px] w-[min-content]" data-node-id="450:20366">
                    Breaking down the problem space
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-node-id="450:20367" data-name="Container">
                  <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7060] text-[16px] w-full" data-node-id="450:20368" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[26.25px]">An effective analysis starts with asking good questions. The first question I asked was:</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20369">
                <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[28px] relative shrink-0 text-[#b5923c] text-[20px] w-full" data-node-id="450:20370">
                  What will success look like?
                </p>
              </div>
              <CaseStudyStagger
                className="content-stretch flex min-h-0 flex-row gap-[24px] items-stretch relative shrink-0 w-full"
                data-node-id="450:20371"
                itemClassName={CASE_STUDY_CARD_STAGGER_ITEM_XL}
                staggerMs={65}
              >
                <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px pb-[41px] pt-[49px] px-[41px] relative rounded-[18px] self-stretch" data-node-id="450:20372" data-name="Background+Border">
                  <div className="relative shrink-0 w-full" data-node-id="450:20373" data-name="Heading 5">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#432060] text-[16px] w-full" data-node-id="450:20374" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[25.5px]">Business Perspective</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full" data-node-id="450:20375">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
                      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:20376" data-name="Container">
                        <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:20377" data-name="Margin">
                          <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:20378" data-name="Background" />
                        </div>
                        <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#555] text-[16px]" data-node-id="450:20379" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[19.5px]">Decreased ticket volume</p>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:20380" data-name="Container">
                        <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:20381" data-name="Margin">
                          <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:20382" data-name="Background" />
                        </div>
                        <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#555] text-[16px]" data-node-id="450:20383" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[19.5px]">Decreased resolution time</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px pb-[41px] pt-[49px] px-[41px] relative rounded-[18px] self-stretch" data-node-id="450:20384" data-name="Background+Border">
                  <div className="relative shrink-0 w-full" data-node-id="450:20385" data-name="Heading 5">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#432060] text-[16px] w-full" data-node-id="450:20386" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[25.5px]">User Perspective</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full" data-node-id="450:20387">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
                      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:20388" data-name="Container">
                        <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:20389" data-name="Margin">
                          <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:20390" data-name="Background" />
                        </div>
                        <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#555] text-[16px]" data-node-id="450:20391" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[19.5px]">More effective support</p>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:20392" data-name="Container">
                        <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:20393" data-name="Margin">
                          <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:20394" data-name="Background" />
                        </div>
                        <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#555] text-[16px]" data-node-id="450:20395" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[19.5px]">Timely support</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CaseStudyStagger>
            </CaseStudySection>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:20396" data-name="Separator" />
            <CaseStudySection className="content-stretch flex flex-col gap-[32px] items-start py-5 sm:py-6 lg:py-8 relative shrink-0 w-full" data-node-id="450:20397" data-name="Section - MY SCOPE">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20398">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:20399">
                  <div className="content-stretch flex flex-col items-start w-full max-w-[680px] min-w-0 relative shrink-0" data-node-id="450:20400" data-name="Container">
                    <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:20401" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[25.5px]">Choosing a problem space</p>
                    </div>
                  </div>
                  <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-w-full relative shrink-0 text-[#845482] text-[32px] w-[min-content]" data-node-id="450:20402">
                    Where IT service experiences fail, and why
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[24px] items-start pb-5 sm:pb-6 relative shrink-0 w-full" data-node-id="450:20403" data-name="Section - PROBLEM">
                <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="450:20404">
                  <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[28px] min-w-full relative shrink-0 text-[#b5923c] text-[20px] w-[min-content]" data-node-id="450:20405">
                    Is there a particular service experience that performs poorly?
                  </p>
                  <div className="flex min-h-0 flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative w-full max-w-[864px] min-w-0 shrink-0 text-[#6b6b6b] text-[16px]" data-node-id="450:20406" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[25.5px]">I first combed through the data with SQL queries and tableau visualizations to see if there was a particular IT service that could be improved.</p>
                  </div>
                  <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="450:20407" data-name="Decision 1: Filter Bar">
                    <CaseStudyStagger
                      className="content-stretch flex min-h-0 flex-row gap-[16px] items-stretch overflow-clip relative flex-[1_0_0]"
                      data-node-id="450:20408"
                      data-name="Background+Border"
                      itemClassName={CASE_STUDY_CARD_STAGGER_ITEM_XL}
                      staggerMs={65}
                    >
                      <div className="bg-white border border-[#ddd8d0] border-solid flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] self-stretch" data-node-id="450:20409">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start px-4 pb-5 pt-8 sm:px-6 sm:pb-6 sm:pt-10 relative size-full">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20410" data-name="Container">
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20411" data-name="Heading 5">
                              <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#432060] text-[16px] w-full" data-node-id="450:20412" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[25.5px]">The Global Service Desk (GSD) is the number 1 contributor to DSAT tickets</p>
                              </div>
                            </div>
                          </div>
                          <div className="aspect-[938/322] border-2 border-solid border-white relative rounded-[4px] shrink-0 w-full" data-node-id="450:20413" data-name="image 44">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgImage44} />
                          </div>
                        </div>
                      </div>
                      <div className="bg-white border border-[#ddd8d0] border-solid flex-[1_0_0] min-h-px min-w-px relative rounded-[16px]" data-node-id="450:20414">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-center px-4 pb-5 pt-8 sm:px-6 sm:pb-6 sm:pt-10 relative size-full">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20415" data-name="Container">
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20416" data-name="Heading 5">
                              <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#432060] text-[16px] w-full" data-node-id="450:20417" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[25.5px]">Password Reset is the most common reason people contact the GSD</p>
                              </div>
                            </div>
                          </div>
                          <div className="h-[217px] relative rounded-[8px] shrink-0 w-[162px]" data-node-id="450:20418" data-name="image 43">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage43} />
                          </div>
                        </div>
                      </div>
                    </CaseStudyStagger>
                  </div>
                  <div className="flex min-h-0 flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative w-full max-w-[864px] min-w-0 shrink-0 text-[#6b6b6b] text-[0px]" data-node-id="450:20419" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="text-[16px]">
                      <span className="leading-[25.5px]">{`Password reset is a highly technical issue that would be challenging to improve in the amount of time I had on the project so I pivoted to analysis of `}</span>
                      <span className="font-['DM_Sans:Italic',sans-serif] font-normal italic leading-[25.5px]" style={{ fontVariationSettings: "'opsz' 14" }}>{`reasons `}</span>
                      <span className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[25.5px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                        for DSAT tickets.
                      </span>
                    </p>
                  </div>
                </div>
                <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:20420" data-name="Separator" />
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20421" data-name="Decision 1: Filter Bar">
                  <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="450:20422">
                    <div className="content-stretch flex flex-col gap-[32px] items-start py-5 sm:py-6 lg:py-8 relative shrink-0 w-full" data-node-id="450:20423">
                      <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[28px] relative shrink-0 text-[#b5923c] text-[20px] w-full" data-node-id="450:20424">
                        Is there a particular reason that tickets are closed dissatisfactorily?
                      </p>
                      <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-col gap-[24px] items-start pb-[32px] pt-[40px] px-[32px] relative rounded-[16px] shrink-0 w-full" data-node-id="450:20425" data-name="Container">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20426" data-name="Heading 5">
                          <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#432060] text-[16px] w-full" data-node-id="450:20427" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[25.5px]">Tickets closed without resolution is the primary reason tickets are reported as dissatisfactory</p>
                          </div>
                        </div>
                        <CaseStudyStagger
                          className="content-stretch flex min-h-0 flex-row gap-[16px] items-stretch relative shrink-0 w-full"
                          data-node-id="450:20428"
                          itemClassName={CASE_STUDY_CARD_STAGGER_ITEM_XL}
                          staggerMs={65}
                        >
                          <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[311px] items-start min-h-px min-w-px px-4 pb-5 pt-8 sm:px-6 sm:pb-6 sm:pt-10 relative rounded-[16px]" data-node-id="450:20429" data-name="Background+Border">
                            <div className="flex flex-col font-['Libre_Baskerville:Italic',sans-serif] h-[40px] italic justify-center leading-[0] relative shrink-0 text-[#7a7060] text-[40px] w-full" data-node-id="450:20430">
                              <p className="leading-[40px]">54.5%</p>
                            </div>
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20431" data-name="Heading 4">
                              <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] w-full" data-node-id="450:20432" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[22.1px]">DSAT tickets are reported closed without resolution</p>
                              </div>
                            </div>
                            <div className="aspect-[772/324] relative shrink-0 w-full" data-node-id="450:20433" data-name="image 45">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage45} />
                            </div>
                          </div>
                          <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[311px] items-center min-h-px min-w-px px-4 pb-5 pt-8 sm:px-6 sm:pb-6 sm:pt-10 relative rounded-[16px]" data-node-id="450:20434" data-name="Background+Border">
                            <div className="flex flex-col font-['Libre_Baskerville:Italic',sans-serif] italic justify-center leading-[0] min-w-full relative shrink-0 text-[#816451] text-[40px] w-[min-content]" data-node-id="450:20435">
                              <p className="leading-[40px]">56%</p>
                            </div>
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20436" data-name="Heading 4">
                              <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] w-full" data-node-id="450:20437" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[22.1px]">tickets closed without resolution are reopened</p>
                              </div>
                            </div>
                            <div className="aspect-[358/330] flex-[1_0_0] min-h-px min-w-px relative" data-node-id="450:20438" data-name="image 46">
                              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage46} />
                            </div>
                          </div>
                        </CaseStudyStagger>
                      </div>
                      <div className="bg-[#ede7f8] border-[#6b46a0] border-l-3 border-solid content-stretch flex flex-col items-start pl-[27px] pr-[24px] py-5 sm:py-6 lg:py-8 relative rounded-br-[16px] rounded-tr-[16px] shrink-0 w-full" data-node-id="450:20439" data-name="Background+VerticalBorder">
                        <div className="relative shrink-0 w-full" data-node-id="450:20440" data-name="Container">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                            <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3d1f6e] text-[14px] w-full" data-node-id="450:20441" style={{ fontVariationSettings: "'opsz' 14" }}>
                              <p className="leading-[23.1px] mb-0 whitespace-pre-wrap">This analysis uncovered a problem space that addressed both business goals and user needs</p>
                              <ul className="list-disc">
                                <li className="mb-0 ms-[21px]">
                                  <span className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[23.1px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                                    Tickets closed without resolution are often reopened, directly contributing to high ticket volume
                                  </span>
                                </li>
                                <li className="ms-[21px] whitespace-pre-wrap">
                                  <span className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[23.1px]" style={{ fontVariationSettings: "'opsz' 14" }}>{`Many tickets marked “resolved” were actually not solved, leading to repeated frustration  for users`}</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:20442" data-name="Separator" />
                    <div className="content-stretch flex flex-col gap-[24px] items-center py-5 sm:py-6 lg:py-8 relative shrink-0 w-full" data-node-id="450:20443">
                      <p className="font-['Libre_Baskerville:Italic','Noto_Sans:Italic',sans-serif] italic leading-[28px] min-w-full relative shrink-0 text-[#b5923c] text-[20px] w-[min-content]" data-node-id="450:20444" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>{`Why are tickets closed without resolution? `}</p>
                      <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-col items-start pb-[32px] pt-[40px] px-[32px] relative rounded-[16px] shrink-0 w-[419px]" data-node-id="450:20445" data-name="Container">
                        <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-node-id="450:20446">
                          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:20447">
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20448" data-name="Container">
                              <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#432060] text-[16px] w-full" data-node-id="450:20449" style={{ fontVariationSettings: "'opsz' 14" }}>
                                <p className="leading-[26.25px]">KA articles are ineffective for self service</p>
                              </div>
                            </div>
                            <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-col gap-[8px] items-center justify-center p-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="450:20450" data-name="Background+Border">
                              <div className="flex flex-col font-['Libre_Baskerville:Italic',sans-serif] italic justify-center leading-[0] min-w-full relative shrink-0 text-[#816451] text-[40px] w-[min-content]" data-node-id="450:20451">
                                <p className="leading-[40px]">65%</p>
                              </div>
                              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20452" data-name="Heading 4">
                                <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] w-full" data-node-id="450:20453" style={{ fontVariationSettings: "'opsz' 14" }}>
                                  <p className="leading-[22.1px]">{`of tickets solved by providing KA's were reopened `}</p>
                                </div>
                              </div>
                              <div className="h-[189px] relative shrink-0 w-[200px]" data-node-id="450:20454" data-name="image 47">
                                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage47} />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[0px] w-full" data-node-id="450:20455" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[26.25px] mb-0 text-[#432060] text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                              Contract guidelines create incentives for service agents to close tickets prematurely.
                            </p>
                            <ul>
                              <ul>
                                <li className="list-disc ms-[calc(var(--list-marker-font-size,0)*1.5*2)]">
                                  <span className="leading-[26.25px] text-[15px]">Based on informal user interviews</span>
                                </li>
                              </ul>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#ede7f8] border-[#6b46a0] border-l-3 border-solid content-stretch flex flex-col items-start pl-[27px] pr-[24px] py-5 sm:py-6 lg:py-8 relative rounded-br-[16px] rounded-tr-[16px] shrink-0 w-full" data-node-id="450:20456" data-name="Background+VerticalBorder">
                  <div className="relative shrink-0 w-full" data-node-id="450:20457" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3d1f6e] text-[14px] w-full" data-node-id="450:20458" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[23.1px]">This analysis uncovered a high impact opportunity area for improvement of the IT end user experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CaseStudySection>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:20459" data-name="Separator" />
            <CaseStudySection className="content-stretch flex flex-col gap-[24px] items-start py-5 sm:py-6 lg:py-8 relative shrink-0 w-full" data-node-id="450:20460" data-name="Section - THE DUAL USER PROBLEM">
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:20461">
                <div className="content-stretch flex flex-col items-start w-full max-w-[680px] min-w-0 relative shrink-0" data-node-id="450:20462" data-name="Container">
                  <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:20463" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[25.5px]">PowerBI Dashboard</p>
                  </div>
                </div>
                <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="450:20464" data-name="Container">
                  <div className="flex-[1_0_0] min-h-px min-w-px relative" data-node-id="450:20465" data-name="Heading 1">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                      <p className="flex-[1_0_0] font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-h-px min-w-px relative text-[#845482] text-[32px]" data-node-id="450:20466">
                        Making the data legible to decision-makers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-node-id="450:20467" data-name="Container">
                <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7060] text-[16px] w-full" data-node-id="450:20468" style={{ fontVariationSettings: "'opsz' 14" }}>
                  <p className="leading-[26.25px]">{`I used PowerBI to build dashboards for IT EUX stakeholders and the Knowledge Article database owner. I defined each visual with the question it answered to make it clear to stakeholders who weren't analysts. `}</p>
                </div>
              </div>
              <div className="aspect-[1524/858] relative rounded-[12px] shrink-0 w-full" data-node-id="450:20469" data-name="image 48">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage48} />
              </div>
              <div className="bg-[#ede7f8] border-[#6b46a0] border-l-3 border-solid content-stretch flex flex-col items-start pl-[27px] pr-[24px] py-5 sm:py-6 lg:py-8 relative rounded-br-[16px] rounded-tr-[16px] shrink-0 w-full" data-node-id="450:20470" data-name="Background+VerticalBorder">
                <div className="relative shrink-0 w-full" data-node-id="450:20471" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                    <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3d1f6e] text-[14px] w-full" data-node-id="450:20472" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[23.1px] mb-0">Making insights usable for decision-makers</p>
                      <ul className="list-disc">
                        <li className="mb-0 ms-[21px]">
                          <span className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[23.1px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                            Translated raw data into actionable dashboards
                          </span>
                        </li>
                        <li className="mb-0 ms-[21px]">
                          <span className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[23.1px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                            Highlighted key metrics for quick understanding
                          </span>
                        </li>
                        <li className="ms-[21px]">
                          <span className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[23.1px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                            Enabled stakeholders to identify trends and prioritize issues
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CaseStudySection>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:20473" data-name="Separator" />
            <CaseStudySection className="content-stretch flex flex-col gap-[14px] items-start py-5 sm:py-6 lg:py-8 relative shrink-0 w-full" data-node-id="450:20474" data-name="Section - THE DUAL USER PROBLEM">
              <div className="content-stretch flex flex-col items-start w-full max-w-[680px] min-w-0 relative shrink-0" data-node-id="450:20475" data-name="Container">
                <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:20476" style={{ fontVariationSettings: "'opsz' 14" }}>
                  <p className="leading-[25.5px]">Recap</p>
                </div>
              </div>
              <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="450:20477" data-name="Container">
                <div className="flex-[1_0_0] min-h-px min-w-px relative" data-node-id="450:20478" data-name="Heading 1">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                    <p className="flex-[1_0_0] font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-h-px min-w-px relative text-[#845482] text-[32px]" data-node-id="450:20479">
                      How I worked through the data
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-node-id="450:20480" data-name="Container">
                <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7060] text-[16px] w-full" data-node-id="450:20481" style={{ fontVariationSettings: "'opsz' 14" }}>
                  <p className="leading-[26.25px]">The analysis was structured around a core question: where are the highest-leverage opportunities to reduce DSAT ticket volume? I worked through three layers — assignment groups, DSAT reasons, and knowledge article effectiveness.</p>
                </div>
              </div>
              <CaseStudyStagger
                className="content-stretch flex flex-col gap-[20px] items-start pt-5 sm:pt-6 lg:pt-8 relative shrink-0 w-full"
                data-node-id="450:20482"
                data-name="Container"
                itemClassName={CASE_STUDY_VERTICAL_STAGGER_ITEM}
                initialDelayMs={120}
                staggerMs={180}
              >
                <div className="bg-white border border-[#e2dbd3] border-solid content-stretch flex gap-[16px] items-start p-[24px] relative rounded-[14px] shrink-0 w-full" data-node-id="450:20483" data-name="Background+Border">
                  <div className="bg-[#fbedca] content-stretch flex items-center justify-center pb-[6.9px] pt-[5.1px] relative rounded-[18px] shrink-0 size-[36px]" data-node-id="450:20484" data-name="Background">
                    <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b5923c] text-[14px] text-center whitespace-nowrap" data-node-id="450:20485" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[23.8px]">1</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[3.4px] items-start min-h-px min-w-px relative" data-node-id="450:20486" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20487" data-name="Heading 4">
                      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[15px] whitespace-normal break-words w-full" data-node-id="450:20488" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[25.5px]">Queried DSAT ticket data by assignment group in Snowflake</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20489" data-name="Container">
                      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] w-full" data-node-id="450:20490" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[22.4px]">Wrote SQL queries to segment DSAT tickets by assignment group, identifying that the Global Service Desk, Web Collaboration L1, and Desk Side Services L2 accounted for the highest volume. Drilled into GSD specifically to find the most common contact reasons: password reset, Daisy-Prod, and MFA-PingID.</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[8.26px] items-start pb-[0.5px] pt-[2.61px] relative shrink-0 w-full" data-node-id="450:20491" data-name="Container">
                      <div className="bg-[#fbedca] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-node-id="450:20492" data-name="Background">
                        <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#b5923c] text-[11px] whitespace-nowrap" data-node-id="450:20493" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[18.7px]">SQL</p>
                        </div>
                      </div>
                      <div className="bg-[#fbedca] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-node-id="450:20494" data-name="Background">
                        <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#b5923c] text-[11px] whitespace-nowrap" data-node-id="450:20495" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[18.7px]">Snowflake</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[#e2dbd3] border-solid content-stretch flex gap-[16px] items-start p-[24px] relative rounded-[14px] shrink-0 w-full" data-node-id="450:20496" data-name="Background+Border">
                  <div className="bg-[#fbedca] content-stretch flex items-center justify-center pb-[6.9px] pt-[5.1px] relative rounded-[18px] shrink-0 size-[36px]" data-node-id="450:20497" data-name="Background">
                    <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b5923c] text-[14px] text-center whitespace-nowrap" data-node-id="450:20498" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[23.8px]">2</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[3.4px] items-start min-h-px min-w-px relative" data-node-id="450:20499" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20500" data-name="Heading 4">
                      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[15px] whitespace-normal break-words w-full" data-node-id="450:20501" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[25.5px]">Analyzed DSAT reasons and reopen patterns</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20502" data-name="Container">
                      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] w-full" data-node-id="450:20503" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[22.4px]">{`Cross-referenced DSAT survey responses with close codes and reopen flags. Found that "closed without resolution" accounted for 139 of 255 total DSAT reasons — more than 6x the next category. Identified that 56% of tickets marked as resolved were later reopened, suggesting a gap between agent-reported and user-experienced resolution.`}</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[8.26px] items-start pb-[0.5px] pt-[2.61px] relative shrink-0 w-full" data-node-id="450:20504" data-name="Container">
                      <div className="bg-[#fbedca] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-node-id="450:20505" data-name="Background">
                        <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#b5923c] text-[11px] whitespace-nowrap" data-node-id="450:20506" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[18.7px]">SQL</p>
                        </div>
                      </div>
                      <div className="bg-[#fbedca] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-node-id="450:20507" data-name="Background">
                        <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#b5923c] text-[11px] whitespace-nowrap" data-node-id="450:20508" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[18.7px]">PowerBI</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[#e2dbd3] border-solid content-stretch flex gap-[16px] items-start p-[24px] relative rounded-[14px] shrink-0 w-full" data-node-id="450:20509" data-name="Background+Border">
                  <div className="bg-[#fbedca] content-stretch flex items-center justify-center pb-[6.9px] pt-[5.1px] relative rounded-[18px] shrink-0 size-[36px]" data-node-id="450:20510" data-name="Background">
                    <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b5923c] text-[14px] text-center whitespace-nowrap" data-node-id="450:20511" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[23.8px]">3</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[3.4px] items-start min-h-px min-w-px relative" data-node-id="450:20512" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20513" data-name="Heading 4">
                      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[15px] whitespace-normal break-words w-full" data-node-id="450:20514" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[25.5px]">Built KA effectiveness analysis using two independent methods</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20515" data-name="Container">
                      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] w-full" data-node-id="450:20516" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[22.4px]">To measure whether Knowledge Article attachments were actually resolving tickets, I developed two calculation methods: using the KA Flag field, and using whether the KA Base field was null. Ran both methods separately to validate robustness — both converged on ~60% reopen rate for KA-resolved tickets, confirming that self-service articles were systematically failing users regardless of how you measured it.</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[8.26px] items-start pb-[0.5px] pt-[2.61px] relative shrink-0 w-full" data-node-id="450:20517" data-name="Container">
                      <div className="bg-[#fbedca] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-node-id="450:20518" data-name="Background">
                        <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#b5923c] text-[11px] whitespace-nowrap" data-node-id="450:20519" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[18.7px]">SQL</p>
                        </div>
                      </div>
                      <div className="bg-[#fbedca] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-node-id="450:20520" data-name="Background">
                        <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#b5923c] text-[11px] whitespace-nowrap" data-node-id="450:20521" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[18.7px]">Snowflake</p>
                        </div>
                      </div>
                      <div className="bg-[#fbedca] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-node-id="450:20522" data-name="Background">
                        <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#b5923c] text-[11px] whitespace-nowrap" data-node-id="450:20523" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[18.7px]">PowerBI</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[#e2dbd3] border-solid content-stretch flex gap-[16px] items-start p-[24px] relative rounded-[14px] shrink-0 w-full" data-node-id="450:20524" data-name="Background+Border">
                  <div className="bg-[#fbedca] content-stretch flex items-center justify-center pb-[6.9px] pt-[5.1px] relative rounded-[18px] shrink-0 size-[36px]" data-node-id="450:20525" data-name="Background">
                    <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b5923c] text-[14px] text-center whitespace-nowrap" data-node-id="450:20526" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[23.8px]">4</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[3.4px] items-start min-h-px min-w-px relative" data-node-id="450:20527" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20528" data-name="Heading 4">
                      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[15px] whitespace-nowrap" data-node-id="450:20529" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[25.5px]">Identified target areas by CI, assignment group, and service group</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20530" data-name="Container">
                      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] w-full" data-node-id="450:20531" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[22.4px]">Cross-tabulated reopened KA tickets across configuration items, assignment groups, and service groups across Q1 and Q2 data. Produced a prioritized list of high-reopen areas: Outlook, Daisy Prod, and Microsoft 365 as CIs; Global Service Desk and Web Collaboration L1 as assignment groups.</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[8.26px] items-start pb-[0.5px] pt-[2.61px] relative shrink-0 w-full" data-node-id="450:20532" data-name="Container">
                      <div className="bg-[#fbedca] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-node-id="450:20533" data-name="Background">
                        <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#b5923c] text-[11px] whitespace-nowrap" data-node-id="450:20534" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[18.7px]">PowerBI</p>
                        </div>
                      </div>
                      <div className="bg-[#fbedca] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-node-id="450:20535" data-name="Background">
                        <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#b5923c] text-[11px] whitespace-nowrap" data-node-id="450:20536" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[18.7px]">Tableau</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[#e2dbd3] border-solid content-stretch flex gap-[16px] items-start p-[24px] relative rounded-[14px] shrink-0 w-full" data-node-id="450:20537" data-name="Background+Border">
                  <div className="bg-[#fbedca] content-stretch flex items-center justify-center pb-[6.9px] pt-[5.1px] relative rounded-[18px] shrink-0 size-[36px]" data-node-id="450:20538" data-name="Background">
                    <div className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b5923c] text-[14px] text-center whitespace-nowrap" data-node-id="450:20539" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[23.8px]">5</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[3.4px] items-start min-h-px min-w-px relative" data-node-id="450:20540" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20541" data-name="Heading 4">
                      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[15px] whitespace-nowrap" data-node-id="450:20542" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[25.5px]">Built dashboards and presented findings to service owners</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20543" data-name="Container">
                      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] w-full" data-node-id="450:20544" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[22.4px] mb-0">Synthesized findings into PowerBI dashboards designed for non-technical service owners — making key metrics scannable and actionable.</p>
                        <p className="leading-[22.4px]">Presented to the Knowledge Article Service Owner and wider stakeholder group. Built an additional on-demand dashboard for a service owner who requested a custom DSAT breakdown for their own assignment group.</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[8.26px] items-start pb-[0.5px] pt-[2.61px] relative shrink-0 w-full" data-node-id="450:20545" data-name="Container">
                      <div className="bg-[#fbedca] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-node-id="450:20546" data-name="Background">
                        <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#b5923c] text-[11px] whitespace-nowrap" data-node-id="450:20547" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[18.7px]">PowerBI</p>
                        </div>
                      </div>
                      <div className="bg-[#fbedca] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-node-id="450:20548" data-name="Background">
                        <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#b5923c] text-[11px] whitespace-nowrap" data-node-id="450:20549" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[18.7px]">Tableau</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CaseStudyStagger>
            </CaseStudySection>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:20550" data-name="Separator" />
            <CaseStudySection
              className={`content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full ${caseStudySectionPaddingYClass}`}
              data-node-id="450:20551"
              data-name="Section - THE DUAL USER PROBLEM"
            >
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:20552">
                <div className="content-stretch flex flex-col items-start w-full max-w-[680px] min-w-0 relative shrink-0" data-node-id="450:20553" data-name="Container">
                  <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:20554" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[25.5px]">Outcomes</p>
                  </div>
                </div>
                <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="450:20555" data-name="Container">
                  <div className="flex-[1_0_0] min-h-px min-w-px relative" data-node-id="450:20556" data-name="Heading 1">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                      <p className="flex-[1_0_0] font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-h-px min-w-px relative text-[#845482] text-[32px]" data-node-id="450:20557">
                        Research that moved beyond the slide deck
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-node-id="450:20558" data-name="Container">
                <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7060] text-[16px] w-full" data-node-id="450:20559" style={{ fontVariationSettings: "'opsz' 14" }}>
                  <p className="leading-[26.25px]">{`The measure of research quality isn't the analysis itself, it's whether it changes what people do. These findings did.`}</p>
                </div>
              </div>
              <CaseStudyStagger
                className="grid w-full grid-cols-2 gap-4 pt-5 sm:pt-6 lg:pt-8"
                data-node-id="450:20560"
                data-name="Container"
                itemClassName="min-h-0 min-w-0 [&>*]:h-full"
                staggerMs={70}
              >
                <div className="bg-[#ede7f8] border-2 border-[#6b46a0] border-solid content-stretch flex flex-col gap-[12px] items-start p-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="450:20561" data-name="Background+Border">
                  <div className="bg-[#d4f0eb] content-stretch flex items-center justify-center pb-[4.8px] pt-[4.2px] relative rounded-[10px] shrink-0 size-[40px]" data-node-id="450:20562" data-name="Background">
                    <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[18px] text-center whitespace-nowrap" data-node-id="450:20563" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[30.6px]">📈</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="450:20564" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20565" data-name="Heading 4">
                      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[14px] w-full" data-node-id="450:20566" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[25.5px]">Projected ~15% improvement in service satisfaction by number of tickets</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20567" data-name="Container">
                      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] w-full" data-node-id="450:20568" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[22.4px]">By improving the KA database and articles to better support self service, this would decrease number of reopened DSAT tickets by about 15%.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[#e2dbd3] border-solid content-stretch flex flex-col gap-[12px] items-start p-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="450:20569" data-name="Background+Border">
                  <div className="bg-[#d4f0eb] content-stretch flex items-center justify-center pb-[4.79px] pt-[4.21px] relative rounded-[10px] shrink-0 size-[40px]" data-node-id="450:20570" data-name="Background">
                    <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[18px] text-center whitespace-nowrap" data-node-id="450:20571" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[30.6px]">🎯</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="450:20572" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20573" data-name="Heading 4">
                      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[14px] w-full" data-node-id="450:20574" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[25.5px]">KA Service Owner assigned follow-up investigation to his team</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20575" data-name="Container">
                      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] w-full" data-node-id="450:20576" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[22.4px]">Presented findings directly to the Knowledge Article Service Owner. He used the analysis to direct further investigation within his team, specifically around the high-reopen KAs.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[#e2dbd3] border-solid content-stretch flex flex-col gap-[12px] items-start p-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="450:20577" data-name="Background+Border">
                  <div className="bg-[#d4f0eb] content-stretch flex items-center justify-center pb-[4.79px] pt-[4.21px] relative rounded-[10px] shrink-0 size-[40px]" data-node-id="450:20578" data-name="Background">
                    <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[18px] text-center whitespace-nowrap" data-node-id="450:20579" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[30.6px]">📊</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="450:20580" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20581" data-name="Heading 4">
                      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[14px] w-full" data-node-id="450:20582" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[25.5px]">Global Service Desk dashboard picked up for further password reset analysis</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20583" data-name="Container">
                      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] w-full" data-node-id="450:20584" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[22.4px]">The GSD-specific dashboard I began building was adopted by the broader team to investigate password reset ticket patterns; one of the highest-frequency pain points identified in the analysis.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[#e2dbd3] border-solid content-stretch flex flex-col gap-[12px] items-start p-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="450:20585" data-name="Background+Border">
                  <div className="bg-[#d4f0eb] content-stretch flex items-center justify-center pb-[4.8px] pt-[4.2px] relative rounded-[10px] shrink-0 size-[40px]" data-node-id="450:20586" data-name="Background">
                    <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[18px] text-center whitespace-nowrap" data-node-id="450:20587" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[30.6px]">➕</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="450:20588" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20589" data-name="Heading 4">
                      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[14px] w-full" data-node-id="450:20590" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[25.5px]">Additional service owner requested a custom DSAT report</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:20591" data-name="Container">
                      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] w-full" data-node-id="450:20592" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[22.4px]">After the final presentation, a second service owner reached out to request a custom DSAT breakdown for their own assignment group, a signal that the analysis format was immediately useful and replicable across teams.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CaseStudyStagger>
            </CaseStudySection>
            <div className="content-stretch flex flex-col items-center pt-[40px] relative shrink-0 w-full" data-node-id="450:20593">
              <a
                href={docUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#432060] content-stretch flex items-center justify-center px-[40px] py-[10px] relative rounded-[16777200px] shrink-0 no-underline"
                data-node-id="450:20594"
                data-name="Home"
              >
                <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" data-node-id="450:20595" style={{ fontVariationSettings: "'opsz' 14" }}>
                  View Full Presentation
                </p>
              </a>
            </div>
            <div className="content-stretch flex gap-[12px] items-center justify-end pt-[96px] pb-16 relative shrink-0 w-full" data-node-id="450:20596" data-name="Container">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="450:20597" data-name="Container">
                <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:20598" style={{ fontVariationSettings: "'opsz' 14" }}>
                  <p className="leading-[22.1px]">Next Project :</p>
                </div>
              </div>
              <Link
                to={nextProject.to}
                className="content-stretch flex flex-col items-start relative shrink-0 no-underline"
                data-node-id="450:20599"
                data-name="Link"
              >
                <div className="capitalize flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a2472] text-[14px] tracking-[0.52px] whitespace-nowrap" data-node-id="450:20600" style={{ fontVariationSettings: "'opsz' 14" }}>
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