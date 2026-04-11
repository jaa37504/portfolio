import { Link } from 'react-router-dom';
import { CaseStudyMainNav } from '../components/CaseStudyMainNav';
import { CmsxLaptopVideoFrame } from '../components/CmsxLaptopVideoFrame';
import { CASE_STUDY_DOC_URL, nextCaseStudyAfter } from '../data/caseStudyNav';
import { scrollToCaseStudyPrototype } from '../caseStudyScroll';
import { caseStudyArticlePaddingXClass, caseStudyColumnClass } from '../caseStudyLayout';

const imgImage25 = "https://www.figma.com/api/mcp/asset/d5c62bd6-471e-4931-afbc-8e110ab99bfb";
const imgImage26 = "https://www.figma.com/api/mcp/asset/1f010219-661d-45fe-96ce-d749842e2e24";
const imgImage11 = "https://www.figma.com/api/mcp/asset/0623aed1-01ad-457b-832d-57211f60d92b";
const imgImage27 = "https://www.figma.com/api/mcp/asset/f4e430bb-90bc-4507-9eee-6ba5714ac580";
const imgImage28 = "https://www.figma.com/api/mcp/asset/0a19d7a2-7153-4530-a559-1c95f388e213";
const imgImage29 = "https://www.figma.com/api/mcp/asset/abde72c3-16cc-4fca-84cc-b649d420db40";
const imgDone811 = "https://www.figma.com/api/mcp/asset/c418b91a-ec9f-4040-840a-75cfe6454b28";
const imgDone612 = "https://www.figma.com/api/mcp/asset/5d9b80e0-b601-4adb-94a4-e2fbae154105";
const imgMacBookPro162131 = "https://www.figma.com/api/mcp/asset/c73efa62-d84e-47d6-a61f-0036677fcc96";
const imgMacBookPro162531 = "https://www.figma.com/api/mcp/asset/9ceadfcd-8df9-438b-852a-02232285dc3f";
const imgMacBookPro162611 = "https://www.figma.com/api/mcp/asset/dac139f8-5991-4c65-ac68-dd02734b9b87";
export default function PersonalWebsiteDesignPortfolio() {
  const docUrl = CASE_STUDY_DOC_URL['cmsx'];
  const nextProject = nextCaseStudyAfter('cmsx');

  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-node-id="450:18841" data-name="Personal Website Design Portfolio">
      <CaseStudyMainNav />
      <div
        className={`relative flex shrink-0 flex-col items-start gap-20 bg-[#fdfcfb] sm:gap-[80px] ${caseStudyColumnClass}`}
        data-node-id="450:18857"
        data-name="RootLayout"
      >
        <div className="relative w-full min-w-0 shrink-0 bg-[#fdfcfb]" data-node-id="450:18858" data-name="ProjectDetail">
          <div
            className={`relative flex size-full flex-col items-start gap-8 border-0 border-transparent bg-clip-padding ${caseStudyArticlePaddingXClass}`}
          >
            <div className="content-stretch flex flex-col gap-[48px] items-start pt-[48px] relative shrink-0 w-full" data-node-id="450:18859">
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="450:18860" data-name="Section - HERO">
                <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-node-id="450:18861">
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-node-id="450:18862" data-name="Container">
                    <Link
                      to="/work"
                      className="content-stretch flex flex-col items-start relative shrink-0 no-underline"
                      data-node-id="450:18863"
                      data-name="Link"
                    >
                      <div className="capitalize flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a2472] text-[0px] tracking-[0.52px] whitespace-nowrap" data-node-id="450:18864" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="text-[14px]">
                          <span className="leading-[22.1px]">← A</span>
                          <span className="leading-[22.1px] lowercase">LL</span>
                          <span className="leading-[22.1px]">{` projects`}</span>
                        </p>
                      </div>
                    </Link>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="450:18865" data-name="Container">
                      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[13px] whitespace-nowrap" data-node-id="450:18866" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[22.1px]">/</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="450:18867" data-name="Container">
                      <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:18868" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[22.1px]">CMSX</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="450:18869" data-name="Heading 2">
                    <p className="flex-[1_0_0] font-['Libre_Baskerville:Italic',sans-serif] italic leading-[60px] min-h-px min-w-px relative text-[#432060] text-[60px]" data-node-id="450:18870">
                      Cornell Course Management System (CMSX)
                    </p>
                  </div>
                </div>
                <div className="border-[#ddd8d0] border-b border-solid content-stretch flex items-center justify-between pb-[30px] pt-[29px] relative shrink-0 w-full" data-node-id="450:18871" data-name="Border">
                  <div className="h-[46px] relative shrink-0" data-node-id="450:18872" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative size-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:18873" data-name="Label">
                        <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[12px] tracking-[0.88px] uppercase whitespace-nowrap" data-node-id="450:18874" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[18.7px]">Role</p>
                        </div>
                      </div>
                      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] whitespace-nowrap" data-node-id="450:18875" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[23.8px]">Product Designer</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-[46px] relative shrink-0" data-node-id="450:18876" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative size-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="450:18877" data-name="Label">
                        <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[12px] tracking-[0.88px] uppercase whitespace-nowrap" data-node-id="450:18878" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[18.7px]">Company</p>
                        </div>
                      </div>
                      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] whitespace-nowrap" data-node-id="450:18879" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[23.8px]">CMSX</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-[46px] relative shrink-0" data-node-id="450:18880" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative size-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:18881" data-name="Label">
                        <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[12px] tracking-[0.88px] uppercase whitespace-nowrap" data-node-id="450:18882" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[18.7px]">Timeline</p>
                        </div>
                      </div>
                      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] whitespace-nowrap" data-node-id="450:18883" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[23.8px]">12 Months · 2025</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-[380px]" data-node-id="450:18884" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
                      <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium h-[19px] justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[12px] tracking-[0.88px] uppercase w-full" data-node-id="450:18885" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[18.7px]">Type</p>
                      </div>
                      <div className="content-stretch flex gap-[8px] h-[24px] items-start relative shrink-0 w-full" data-node-id="450:18886" data-name="ProjectDetail">
                        <div className="bg-[#e6deda] h-[24px] relative rounded-[16777200px] shrink-0" data-node-id="450:18887" data-name="Text">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[16px] py-[4px] relative size-full">
                            <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#816451] text-[12px] whitespace-nowrap" data-node-id="450:18888" style={{ fontVariationSettings: "'opsz' 14" }}>
                              Internal Tool
                            </p>
                          </div>
                        </div>
                        <div className="bg-[#f5e9c9] h-[24px] relative rounded-[16777200px] shrink-0" data-node-id="450:18889" data-name="Text">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[16px] py-[4px] relative size-full">
                            <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#b5923c] text-[12px] whitespace-nowrap" data-node-id="450:18890" style={{ fontVariationSettings: "'opsz' 14" }}>
                              Data Management
                            </p>
                          </div>
                        </div>
                        <div className="bg-[#e5e4e1] h-[24px] relative rounded-[16777200px] shrink-0" data-node-id="450:18891" data-name="Text">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[16px] py-[4px] relative size-full">
                            <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#999181] text-[12px] whitespace-nowrap" data-node-id="450:18892" style={{ fontVariationSettings: "'opsz' 14" }}>
                              Web
                            </p>
                          </div>
                        </div>
                        <div className="bg-[#e5e4e1] h-[24px] relative rounded-[16777200px] shrink-0" data-node-id="450:18893" data-name="Text">
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[16px] py-[4px] relative size-full">
                            <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#999181] text-[12px] whitespace-nowrap" data-node-id="450:18894" style={{ fontVariationSettings: "'opsz' 14" }}>
                              0 → 1
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Hero: static mockup only — prototype video lives in #case-study-prototype (450:19241). */}
              <div
                className="relative h-[min(417px,70vw)] w-full min-h-[240px] shrink-0 overflow-hidden rounded-[24px] bg-[#e3dfd6] sm:h-[417px]"
                data-node-id="450:18895"
                data-name="Container"
              >
                <img
                  alt=""
                  className="pointer-events-none absolute inset-0 size-full max-w-none object-contain p-4 sm:p-6"
                  src={imgMacBookPro162131}
                />
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start py-[24px] relative shrink-0 w-full" data-node-id="450:18899" data-name="Section - OVERVIEW">
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="450:18900">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:18901">
                  <div className="content-stretch flex flex-col items-start max-w-[680px] relative shrink-0 w-[680px]" data-node-id="450:18902" data-name="Container">
                    <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:18903" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[25.5px]">Overview</p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="450:18904" data-name="Container">
                    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-node-id="450:18905" data-name="Heading 1">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                        <p className="flex-[1_0_0] font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-h-px min-w-px relative text-[#845482] text-[32px]" data-node-id="450:18906">
                          Redesigning high-stakes grading workflows for course staff
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start pt-[3.01px] relative shrink-0 w-full" data-node-id="450:18907" data-name="Container">
                  <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[16px] w-full whitespace-pre-wrap" data-node-id="450:18908" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[25.5px] mb-0">{`CMSX's Groups & Grading page supports critical grading workflows for 1,000+ faculty and TA’S, but its complexity made bulk actions error-prone, confusing, and slow. `}</p>
                    <p className="leading-[25.5px] mb-0">&nbsp;</p>
                    <p className="leading-[25.5px]">I strategically redesigned it to reduce cognitive load and error while preserving information density for power users, and requiring minimal backend changes.</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0" data-node-id="450:18909">
                <button
                  type="button"
                  onClick={scrollToCaseStudyPrototype}
                  className="cursor-pointer border-0 bg-[#845482] content-stretch flex items-end px-[40px] py-[10px] relative rounded-[16777200px] shrink-0"
                  data-node-id="450:18910"
                  data-name="Button"
                >
                  <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" data-node-id="450:18911" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Jump to Solution
                  </p>
                </button>
              </div>
            </div>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:18912" data-name="Separator" />
            <div className="content-stretch flex flex-col gap-[48px] items-start py-[24px] relative shrink-0 w-full" data-node-id="450:18913" data-name="Section - MY SCOPE">
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:18914">
                <div className="content-stretch flex flex-col items-start max-w-[680px] relative shrink-0 w-[680px]" data-node-id="450:18915" data-name="Container">
                  <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:18916" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[25.5px]">Projected Impact</p>
                  </div>
                </div>
                <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-w-full relative shrink-0 text-[#845482] text-[32px] w-[min-content]" data-node-id="450:18917">
                  Why this matters
                </p>
              </div>
              <div className="content-stretch flex gap-[16px] h-[259px] items-start relative shrink-0 w-full" data-node-id="450:18918">
                <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[41px] pt-[49px] px-[41px] relative rounded-[18px] self-stretch" data-node-id="450:18919" data-name="Background+Border">
                  <div className="relative rounded-[18px] shrink-0 w-full" data-node-id="450:18920" data-name="Background+Border">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold gap-[12px] items-start pb-[24px] relative size-full">
                      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:18921" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[21px]">01</p>
                      </div>
                      <p className="leading-[28px] min-w-full relative shrink-0 text-[#816451] text-[18px] w-[min-content] whitespace-pre-wrap" data-node-id="450:18922" style={{ fontVariationSettings: "'opsz' 14" }}>{`Instructors manage hundreds of students under tight timelines  `}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[41px] pt-[49px] px-[41px] relative rounded-[18px] self-stretch" data-node-id="450:18923" data-name="Background+Border">
                  <div className="relative rounded-[18px] shrink-0 w-full" data-node-id="450:18924" data-name="Background+Border">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold gap-[12px] items-start relative size-full">
                      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:18925" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[21px]">02</p>
                      </div>
                      <p className="leading-[28px] min-w-full relative shrink-0 text-[#816451] text-[18px] w-[min-content] whitespace-pre-wrap" data-node-id="450:18926" style={{ fontVariationSettings: "'opsz' 14" }}>{`Errors in bulk actions directly impact student outcomes  `}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[41px] pt-[49px] px-[41px] relative rounded-[18px] self-stretch" data-node-id="450:18927" data-name="Background+Border">
                  <div className="relative rounded-[18px] shrink-0 w-full" data-node-id="450:18928" data-name="Background+Border">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold gap-[12px] items-start pb-[24px] relative size-full">
                      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:18929" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[21px]">03</p>
                      </div>
                      <p className="leading-[28px] min-w-full relative shrink-0 text-[#816451] text-[18px] w-[min-content]" data-node-id="450:18930" style={{ fontVariationSettings: "'opsz' 14" }}>
                        Users rely on workarounds like CSV uploads instead of the system
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:18931" data-name="Separator" />
            <div className="content-stretch flex flex-col gap-[16px] items-start py-[24px] relative shrink-0 w-full" data-node-id="450:18932" data-name="Section - MY SCOPE">
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="450:18933">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:18934">
                  <div className="content-stretch flex flex-col items-start max-w-[680px] relative shrink-0 w-[680px]" data-node-id="450:18935" data-name="Container">
                    <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:18936" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[25.5px]">Current State - Product Audit</p>
                    </div>
                  </div>
                  <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-w-full relative shrink-0 text-[#845482] text-[32px] w-[min-content]" data-node-id="450:18937">
                    The original interface crammed every possible action into one view.
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start pt-[3.01px] relative shrink-0 w-full" data-node-id="450:18938" data-name="Container">
                  <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[16px] w-full" data-node-id="450:18939" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[25.5px]">This is a central page for managing student grouping, grading, extensions, and grader assignments.</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[16px] items-start py-[12px] relative rounded-[18px] shrink-0 w-full" data-node-id="450:18940">
                <div className="border border-solid border-white h-[285px] relative shrink-0 w-[552px]" data-node-id="450:18941" data-name="image 25">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-full left-[-0.02%] max-w-none top-0 w-[100.04%]" src={imgImage25} />
                  </div>
                </div>
                <div className="absolute h-[165px] left-[71px] top-[65.18px] w-[447px]" data-node-id="450:18942">
                  <div className="absolute border border-[#de84c1] border-solid h-[10px] left-[174px] rounded-[8px] top-[12px] w-[57px]" data-node-id="450:18943" />
                  <div className="absolute border border-[#656ee3] border-solid h-[76px] left-[168px] rounded-[8px] top-[5px] w-[165px]" data-node-id="450:18944" />
                  <div className="absolute border border-[#35a3bf] border-solid h-[86px] left-[65px] rounded-[8px] top-0 w-[272px]" data-node-id="450:18945" />
                  <div className="absolute border border-[#de84c1] border-solid h-[10px] left-[284px] rounded-[8px] top-[12px] w-[42px]" data-node-id="450:18946" />
                  <div className="absolute border border-[#de84c1] border-solid h-[10px] left-0 rounded-[8px] top-[155px] w-[139px]" data-node-id="450:18947" />
                  <div className="absolute border border-[#de84c1] border-solid h-[34px] left-[431px] rounded-[8px] top-[119px] w-[16px]" data-node-id="450:18948" />
                </div>
                <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px p-[24px] relative rounded-[18px]" data-node-id="450:18949">
                  <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[23.1px] relative shrink-0 text-[#1e1a2e] text-[14px] w-full" data-node-id="450:18950" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Key Observations
                  </p>
                  <div className="content-stretch flex flex-col gap-[8px] items-start pt-[8px] relative shrink-0 w-full" data-node-id="450:18951" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative rounded-[18px] shrink-0 w-full" data-node-id="450:18952" data-name="Background+Border">
                      <ul className="block font-['DM_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#c25fa3] text-[14px] w-full" data-node-id="450:18953" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <li className="list-disc ms-[21px] whitespace-pre-wrap">
                          <span className="leading-[25.5px]">{`There are  numerous entry points to perform the same tasks`}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative rounded-[18px] shrink-0 w-full" data-node-id="450:18954" data-name="Background+Border">
                      <ul className="block font-['DM_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#656ee3] text-[14px] w-full" data-node-id="450:18955" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <li className="list-disc ms-[21px]">
                          <span className="leading-[25.5px]">Feature density obscures task hierarchy - important actions are hard to identify at a glance</span>
                        </li>
                      </ul>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative rounded-[18px] shrink-0 w-full" data-node-id="450:18956" data-name="Background+Border">
                      <ul className="block font-['DM_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#35a3bf] text-[14px] w-full" data-node-id="450:18957" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <li className="list-disc ms-[21px]">
                          <span className="leading-[25.5px]">{`Unfamiliar UX patterns that don't align with mental models for batch actions`}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:18958" data-name="Separator" />
            <div className="content-stretch flex flex-col gap-[24px] items-start py-[24px] relative shrink-0 w-full" data-node-id="450:18959" data-name="Section - THE DUAL USER PROBLEM">
              <div className="content-stretch flex flex-col gap-[32px] items-start pb-[24px] relative shrink-0 w-full" data-node-id="450:18960">
                <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="450:18961">
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:18962">
                    <div className="content-stretch flex flex-col items-start max-w-[680px] relative shrink-0 w-[680px]" data-node-id="450:18963" data-name="Container">
                      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:18964" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[25.5px]">Understanding the User</p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="450:18965" data-name="Container">
                      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-node-id="450:18966" data-name="Heading 1">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                          <p className="flex-[1_0_0] font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-h-px min-w-px relative text-[#845482] text-[32px]" data-node-id="450:18967">
                            One page, two completely different users
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-node-id="450:18968" data-name="Container">
                    <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7060] text-[16px] w-full" data-node-id="450:18969" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[26.25px]">{`After discussing with 1 professor and a few TA’S I discovered that the hardest constraint wasn't technical. It was designing for two users with opposite interface preferences on the same page at the same time, without making either feel like the platform wasn't built for them. `}</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[16px] h-[362.8px] items-start relative shrink-0 w-full" data-node-id="450:18970">
                  <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px pb-[41px] pt-[49px] px-[41px] relative rounded-[18px] self-stretch" data-node-id="450:18971" data-name="Background+Border">
                    <div className="relative shrink-0 size-[75px]" data-node-id="450:18972" data-name="image 26">
                      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage26} />
                    </div>
                    <div className="relative shrink-0 w-full" data-node-id="450:18973" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.8px] relative size-full">
                        <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.4px] uppercase w-full" data-node-id="450:18974" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[23.8px]">Professor · Power User</p>
                        </div>
                      </div>
                    </div>
                    <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[28px] min-w-full relative shrink-0 text-[#816451] text-[18px] w-[min-content]" data-node-id="450:18975" style={{ fontVariationSettings: "'opsz' 14" }}>{`“Give me everything, I'll find what I need”`}</p>
                    <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:18976" data-name="Separator" />
                    <div className="relative shrink-0 w-full" data-node-id="450:18977">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
                        <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:18978" data-name="Container">
                          <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:18979" data-name="Margin">
                            <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:18980" data-name="Background" />
                          </div>
                          <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#1e1a2e] text-[14px]" data-node-id="450:18981" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[19.5px] whitespace-pre-wrap">{`Value control and information density  `}</p>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:18982" data-name="Container">
                          <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:18983" data-name="Margin">
                            <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:18984" data-name="Background" />
                          </div>
                          <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#1e1a2e] text-[14px]" data-node-id="450:18985" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[19.5px]">{`Comfortable with complexity `}</p>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:18986" data-name="Container">
                          <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:18987" data-name="Margin">
                            <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:18988" data-name="Background" />
                          </div>
                          <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#1e1a2e] text-[14px]" data-node-id="450:18989" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[19.5px]">Prefer consistency and familiarity</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px pb-[41px] pt-[49px] px-[41px] relative rounded-[18px] self-stretch" data-node-id="450:18990" data-name="Background+Border">
                    <div className="relative shrink-0 size-[75px]" data-node-id="450:18991" data-name="image (1) 1">
                      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage11} />
                    </div>
                    <div className="relative shrink-0 w-full" data-node-id="450:18992" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.8px] relative size-full">
                        <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.4px] uppercase w-full" data-node-id="450:18993" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[23.8px]">Teaching Assistant · Task-Focused User</p>
                        </div>
                      </div>
                    </div>
                    <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[28px] min-w-full relative shrink-0 text-[#816451] text-[18px] w-[min-content]" data-node-id="450:18994" style={{ fontVariationSettings: "'opsz' 14" }}>
                      “Just show me what I need to do right now”
                    </p>
                    <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:18995" data-name="Separator" />
                    <div className="relative shrink-0 w-full" data-node-id="450:18996">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
                        <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:18997" data-name="Container">
                          <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:18998" data-name="Margin">
                            <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:18999" data-name="Background" />
                          </div>
                          <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#1e1a2e] text-[14px]" data-node-id="450:19000" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[19.5px] whitespace-pre-wrap">{`Prioritize speed and clarity  `}</p>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:19001" data-name="Container">
                          <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:19002" data-name="Margin">
                            <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:19003" data-name="Background" />
                          </div>
                          <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#1e1a2e] text-[14px]" data-node-id="450:19004" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[19.5px]">Struggle with unnecessary complexity</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:19005" data-name="Separator" />
              <div className="content-stretch flex flex-col gap-[48px] items-start pt-[24px] relative shrink-0 w-full" data-node-id="450:19006">
                <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] relative shrink-0 text-[#816451] text-[24px] w-full" data-node-id="450:19007">
                  Key Pain Points
                </p>
                <div className="content-stretch flex font-['DM_Sans:SemiBold',sans-serif] font-semibold gap-[24px] h-[117px] items-start relative shrink-0 w-full" data-node-id="450:19008" data-name="Container">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative rounded-[18px] self-stretch" data-node-id="450:19009" data-name="Background+Border">
                    <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:19010" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[21px]">01</p>
                    </div>
                    <p className="leading-[28px] min-w-full relative shrink-0 text-[#432060] text-[16px] w-[min-content]" data-node-id="450:19011" style={{ fontVariationSettings: "'opsz' 14" }}>
                      Selection system is unclear, making bulk actions feel risky
                    </p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative rounded-[18px] self-stretch" data-node-id="450:19012" data-name="Background+Border">
                    <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:19013" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[21px]">02</p>
                    </div>
                    <p className="leading-[28px] min-w-full relative shrink-0 text-[#432060] text-[16px] w-[min-content] whitespace-pre-wrap" data-node-id="450:19014" style={{ fontVariationSettings: "'opsz' 14" }}>{`Multiple entry points create decision fatigue  `}</p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative rounded-[18px] self-stretch" data-node-id="450:19015" data-name="Background+Border">
                    <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:19016" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[21px]">03</p>
                    </div>
                    <p className="leading-[28px] min-w-full relative shrink-0 text-[#432060] text-[16px] w-[min-content]" data-node-id="450:19017" style={{ fontVariationSettings: "'opsz' 14" }}>
                      Dense tables hide important information needed for quick decisions
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:19018" data-name="Separator" />
            <div className="content-stretch flex flex-col gap-[32px] items-start py-[24px] relative shrink-0 w-full" data-node-id="450:19019" data-name="Section - OPPORTUNITY AREAS">
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="450:19020">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:19021">
                  <div className="content-stretch flex flex-col items-start max-w-[680px] relative shrink-0 w-[680px]" data-node-id="450:19022" data-name="Container">
                    <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:19023" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[25.5px]">Insights → Direction</p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="450:19024" data-name="Container">
                    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-node-id="450:19025" data-name="Heading 1">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                        <p className="flex-[1_0_0] font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-h-px min-w-px relative text-[#845482] text-[32px]" data-node-id="450:19026">
                          How might we simplify complex workflows without removing the flexibility power users depend on?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-node-id="450:19027" data-name="Container">
                  <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7060] text-[16px] w-full" data-node-id="450:19028" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[26.25px]">After the IA audit, user research, and competitive analysis of Gradescope and Canvas, the problems crystallized into three opportunity areas.</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[16px] h-[211px] items-start pt-[12px] relative shrink-0 w-full" data-node-id="450:19029" data-name="Container">
                <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px p-[25px] relative rounded-[16px] self-stretch" data-node-id="450:19030" data-name="Background+Border">
                  <div className="relative shrink-0 w-full" data-node-id="450:19031" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19032" data-name="Heading 4">
                        <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1e1a2e] text-[14px] w-full" data-node-id="450:19033" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[23.1px]">{`Clarify selection & bulk actions`}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[#6b6b6b] border-l-2 border-solid relative shrink-0 w-full" data-node-id="450:19034" data-name="VerticalBorder">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[14px] relative size-full">
                      <div className="flex flex-col font-['DM_Sans:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] w-full" data-node-id="450:19035" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[19.5px]">{`"How might we make selection and bulk actions easier to understand, and less prone to error?"`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px p-[25px] relative rounded-[16px] self-stretch" data-node-id="450:19036" data-name="Background+Border">
                  <div className="relative shrink-0 w-full" data-node-id="450:19037" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19038" data-name="Heading 4">
                        <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1e1a2e] text-[14px] w-full" data-node-id="450:19039" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[23.1px]">Surface system state without sacrificing density</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[#6b6b6b] border-l-2 border-solid relative shrink-0 w-full" data-node-id="450:19040" data-name="VerticalBorder">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[14px] relative size-full">
                      <div className="flex flex-col font-['DM_Sans:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] w-full" data-node-id="450:19041" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[19.5px]">{`"How might we surface key system state at a glance without reducing the density power users depend on?"`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px px-[29px] py-[25px] relative rounded-[16px] self-stretch" data-node-id="450:19042" data-name="Background+Border">
                  <div className="relative shrink-0 w-full" data-node-id="450:19043" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19044" data-name="Heading 4">
                        <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1e1a2e] text-[14px] w-full" data-node-id="450:19045" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[23.1px]">Balance familiarity with real improvement</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-[#6b6b6b] border-l-2 border-solid relative shrink-0 w-full" data-node-id="450:19046" data-name="VerticalBorder">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[14px] relative size-full">
                      <div className="flex flex-col font-['DM_Sans:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] w-full" data-node-id="450:19047" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[19.5px]">{`"How might we improve usability while preserving the familiar workflows experienced users depend on?"`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:19048" data-name="Separator" />
            <div className="content-stretch flex flex-col gap-[24px] items-start py-[24px] relative shrink-0 w-full" data-node-id="450:19049" data-name="Section - PROCESS">
              <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-node-id="450:19050">
                <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="450:19051">
                  <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="450:19052" data-name="Container">
                    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-node-id="450:19053">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[14px] items-start relative size-full">
                        <div className="content-stretch flex flex-col items-start max-w-[680px] relative shrink-0 w-[680px]" data-node-id="450:19054" data-name="Container">
                          <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:19055" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[25.5px]">Design process</p>
                          </div>
                        </div>
                        <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="450:19056" data-name="Heading 1">
                          <p className="flex-[1_0_0] font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-h-px min-w-px relative text-[#845482] text-[32px]" data-node-id="450:19057">
                            Lo-Fi Ideation
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-node-id="450:19058" data-name="Container">
                    <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7060] text-[16px] w-full" data-node-id="450:19059" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[26.25px]">In lo-fi, I explored multiple structural approaches to selection, filtering, and batch actions to balance clarity, efficiency, and familiarity for both power users and task-focused users.</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[16px] h-[465px] items-start py-[12px] relative shrink-0 w-[864px]" data-node-id="450:19060" data-name="Container">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px overflow-clip relative rounded-[18px] self-stretch" data-node-id="450:19061" data-name="Border">
                    <div className="h-[275px] relative shrink-0 w-full" data-node-id="450:19062" data-name="Background">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[12px] relative size-full">
                        <div className="aspect-[255/245] flex-[1_0_0] min-h-px min-w-px relative rounded-[18px]" data-node-id="450:19063" data-name="image 27">
                          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[18px]">
                            <img alt="" className="absolute h-[99.66%] left-[-111.76%] max-w-none top-[0.16%] w-[211.76%]" src={imgImage27} />
                          </div>
                        </div>
                        <div className="absolute border-2 border-[#4dbaec] border-solid h-[44px] left-[80px] rounded-[4px] top-[93.38px] w-[164px]" data-node-id="450:19064" />
                      </div>
                    </div>
                    <div className="bg-white border border-[#ddd8d0] border-solid relative rounded-[18px] shrink-0 w-full" data-node-id="450:19065" data-name="Background">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pb-[20px] pt-[16px] px-[20px] relative size-full">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19066" data-name="Heading 5">
                          <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] w-full" data-node-id="450:19067" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[25.5px]">V1 · Persistent Batch Actions + Metric Overview</p>
                          </div>
                        </div>
                        <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#555] text-[0px] w-full whitespace-pre-wrap" data-node-id="450:19068" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[19.5px] mb-0 text-[#2d6a4f] text-[14px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                            + Keeps actions visible and easy to access
                          </p>
                          <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[19.5px] text-[#8b2020] text-[14px]" style={{ fontVariationSettings: "'opsz' 14" }}>{`-  Adds visual clutter`}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px overflow-clip relative rounded-[18px] self-stretch" data-node-id="450:19069" data-name="Border">
                    <div className="h-[275px] relative shrink-0 w-full" data-node-id="450:19070" data-name="Background">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start p-[12px] relative size-full">
                        <div className="aspect-[252/257] flex-[1_0_0] min-h-px min-w-px relative rounded-[18px]" data-node-id="450:19071" data-name="image 28">
                          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[18px]">
                            <img alt="" className="absolute h-[100.03%] left-[-114.29%] max-w-none top-[0.06%] w-[214.29%]" src={imgImage28} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border border-[#ddd8d0] border-solid relative rounded-[18px] shrink-0 w-full" data-node-id="450:19072" data-name="Background">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pb-[20px] pt-[16px] px-[20px] relative size-full">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19073" data-name="Heading 5">
                          <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] w-full" data-node-id="450:19074" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[25.5px]">V2 · Persistent Batch Actions + Metric-Driven Selection</p>
                          </div>
                        </div>
                        <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#367f5f] text-[0px] w-full" data-node-id="450:19075" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[19.5px] mb-0 text-[14px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                            + Uses system metrics as entry points to batch actions
                          </p>
                          <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[19.5px] text-[#8b2020] text-[14px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                            - Takes up a lot of space
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute border-2 border-[#4dbaec] border-solid h-[68px] left-[78px] rounded-[4px] top-[45.38px] w-[173px]" data-node-id="450:19076" />
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px overflow-clip relative rounded-[18px] self-stretch" data-node-id="450:19077" data-name="Border">
                    <div className="h-[275px] relative shrink-0 w-full" data-node-id="450:19078" data-name="Background">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[12px] relative size-full">
                        <div className="aspect-[250/159] flex-[1_0_0] min-h-px min-w-px relative rounded-[18px]" data-node-id="450:19079" data-name="image 29">
                          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[18px]">
                            <img alt="" className="absolute h-full left-[-116%] max-w-none top-[0.12%] w-[216%]" src={imgImage29} />
                          </div>
                        </div>
                        <div className="absolute border-2 border-[#4dbaec] border-solid h-[85px] left-[57px] rounded-[4px] top-[80.38px] w-[59px]" data-node-id="450:19080" />
                        <div className="absolute border-2 border-[#4dbaec] border-solid h-[17px] left-[118px] rounded-[4px] top-[123.38px] w-[134px]" data-node-id="450:19081" />
                      </div>
                    </div>
                    <div className="bg-white border-2 border-[#2d6a4f] border-solid relative rounded-[18px] shrink-0 w-full" data-node-id="450:19082" data-name="Background">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pb-[20px] pt-[16px] px-[20px] relative size-full">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19083" data-name="Heading 5">
                          <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] w-full" data-node-id="450:19084" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[25.5px]">V3 · Persistent Batch Actions + Sidebar Filters + Selection Pills</p>
                          </div>
                        </div>
                        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#367f5f] text-[14px] w-full" data-node-id="450:19085" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[19.5px] mb-0">+ Structures filtering and selection clearly</p>
                          <p className="leading-[19.5px]">+ Balances flexibility and clarity</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:19086" data-name="Separator" />
              <div className="content-stretch flex flex-col gap-[48px] items-start pt-[24px] relative shrink-0 w-full" data-node-id="450:19087">
                <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] relative shrink-0 text-[#816451] text-[24px] w-full" data-node-id="450:19088">
                  Key Design Decisions
                </p>
                <div className="content-stretch flex font-['DM_Sans:SemiBold',sans-serif] font-semibold gap-[24px] h-[89px] items-start relative shrink-0 w-full" data-node-id="450:19089" data-name="Container">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative rounded-[18px] self-stretch" data-node-id="450:19090" data-name="Background+Border">
                    <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:19091" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[21px]">01</p>
                    </div>
                    <p className="leading-[28px] min-w-full relative shrink-0 text-[#432060] text-[16px] w-[min-content]" data-node-id="450:19092" style={{ fontVariationSettings: "'opsz' 14" }}>
                      Unified selection logic to reduce confusion across workflows
                    </p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative rounded-[18px] self-stretch" data-node-id="450:19093" data-name="Background+Border">
                    <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:19094" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[21px]">02</p>
                    </div>
                    <p className="leading-[28px] min-w-full relative shrink-0 text-[#432060] text-[16px] w-[min-content]" data-node-id="450:19095" style={{ fontVariationSettings: "'opsz' 14" }}>
                      Prioritized filter-based selection to minimize manual effort
                    </p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative rounded-[18px] self-stretch" data-node-id="450:19096" data-name="Background+Border">
                    <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:19097" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[21px]">03</p>
                    </div>
                    <p className="leading-[28px] min-w-full relative shrink-0 text-[#432060] text-[16px] w-[min-content]" data-node-id="450:19098" style={{ fontVariationSettings: "'opsz' 14" }}>
                      Avoided disruptive UI elements based on user feedback
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:19099" data-name="Separator" />
            <div className="content-stretch flex flex-col gap-[14px] items-start py-[24px] relative shrink-0 w-full" data-node-id="450:19100" data-name="Section - PROCESS">
              <div className="content-stretch flex flex-col gap-[24px] items-start pb-[24px] relative shrink-0 w-full" data-node-id="450:19101">
                <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="450:19102">
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:19103">
                    <div className="content-stretch flex flex-col items-start max-w-[680px] relative shrink-0 w-[680px]" data-node-id="450:19104" data-name="Container">
                      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:19105" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[25.5px]">Design process</p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="450:19106" data-name="Container">
                      <div className="flex-[1_0_0] min-h-px min-w-px relative" data-node-id="450:19107" data-name="Heading 1">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                          <p className="flex-[1_0_0] font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-h-px min-w-px relative text-[#845482] text-[32px]" data-node-id="450:19108">
                            Medium Fidelity Iteration
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-node-id="450:19109" data-name="Container">
                    <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7060] text-[16px] w-full" data-node-id="450:19110" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[26.25px]">In mid-fidelity, I validated and refined the chosen interaction model by iterating on the end-to-end filtering, selection, and batch-action flow, and discussing feasibility and use cases with developers.</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19111">
                  <div className="content-stretch flex gap-[12px] items-center p-[12px] relative rounded-[4px] shrink-0 w-full" data-node-id="450:19112">
                    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-node-id="450:19113" data-name="Done (8) (1) 1">
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <img alt="" className="absolute h-full left-[-14.91%] max-w-none top-0 w-[114.97%]" src={imgDone811} />
                        </div>
                      </div>
                    </div>
                    <div className="aspect-[3135/2058] flex-[1_0_0] min-h-px min-w-px relative" data-node-id="450:19114" data-name="Done (6) (1) 2">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDone612} />
                    </div>
                    <div className="absolute border-2 border-[#4dbaec] border-solid h-[140px] left-[39px] rounded-[4px] top-[71.38px] w-[68px]" data-node-id="450:19115" />
                    <div className="absolute border-2 border-[#4dbaec] border-solid h-[15px] left-[151px] rounded-[4px] top-[121.38px] w-[17px]" data-node-id="450:19116" />
                    <div className="absolute border-2 border-[#4dbaec] border-solid h-[26px] left-[522px] rounded-[4px] top-[246.38px] w-[55px]" data-node-id="450:19117" />
                  </div>
                </div>
              </div>
              <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:19118" data-name="Separator" />
              <div className="content-stretch flex flex-col gap-[48px] items-start pt-[40px] relative shrink-0 w-full" data-node-id="450:19119">
                <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] relative shrink-0 text-[#816451] text-[24px] w-full" data-node-id="450:19120">
                  Key Design Decisions
                </p>
                <div className="content-stretch flex font-['DM_Sans:SemiBold',sans-serif] font-semibold gap-[24px] h-[117px] items-start relative shrink-0 w-full" data-node-id="450:19121" data-name="Container">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative rounded-[18px] self-stretch" data-node-id="450:19122" data-name="Background+Border">
                    <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:19123" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[21px]">01</p>
                    </div>
                    <p className="leading-[28px] min-w-full relative shrink-0 text-[#432060] text-[16px] w-[min-content]" data-node-id="450:19124" style={{ fontVariationSettings: "'opsz' 14" }}>
                      Disabled state group actions to improve intuition of use
                    </p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative rounded-[18px] self-stretch" data-node-id="450:19125" data-name="Background+Border">
                    <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:19126" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[21px]">02</p>
                    </div>
                    <p className="leading-[28px] min-w-full relative shrink-0 text-[#432060] text-[16px] w-[min-content]" data-node-id="450:19127" style={{ fontVariationSettings: "'opsz' 14" }}>
                      Additional embedded table filters to support power users familiar flows
                    </p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative rounded-[18px] self-stretch" data-node-id="450:19128" data-name="Background+Border">
                    <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:19129" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[21px]">03</p>
                    </div>
                    <p className="leading-[28px] min-w-full relative shrink-0 text-[#432060] text-[16px] w-[min-content]" data-node-id="450:19130" style={{ fontVariationSettings: "'opsz' 14" }}>
                      Extra confirmation step to prevent error in critical tasks
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:19131" data-name="Separator" />
            <div className="content-stretch flex flex-col gap-[32px] items-start py-[24px] relative shrink-0 w-full" data-node-id="450:19132">
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="450:19133">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:19134">
                  <div className="content-stretch flex flex-col items-start max-w-[680px] relative shrink-0 w-[680px]" data-node-id="450:19135" data-name="Container">
                    <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:19136" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[25.5px]">Design process</p>
                    </div>
                  </div>
                  <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-w-full relative shrink-0 text-[#845482] text-[32px] w-[min-content]" data-node-id="450:19137">
                    High Fidelity
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-node-id="450:19138" data-name="Container">
                  <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7060] text-[16px] w-full" data-node-id="450:19139" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[26.25px]">{`In high-fidelity, I finalized the visual hierarchy and interaction details to ensure clarity, safety, and consistency across the core filtering and batch-action workflow, and aligned design with MUI design system. `}</p>
                  </div>
                </div>
              </div>
              <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] relative shrink-0 text-[#816451] text-[24px] w-full" data-node-id="450:19140">
                Putting it all together: How does this solution address our problem space?
              </p>
              <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:19141">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[200px]" data-node-id="450:19142">
                  <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-col gap-[4px] items-start p-[16px] relative rounded-[16px] shrink-0 w-full" data-node-id="450:19143">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19144" data-name="Heading 5">
                      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#432060] text-[14px] w-full" data-node-id="450:19145" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[25.5px]">{`Clarify selection & bulk actions`}</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19146">
                      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:19147" data-name="Container">
                        <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:19148" data-name="Margin">
                          <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:19149" data-name="Background" />
                        </div>
                        <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#555] text-[14px]" data-node-id="450:19150" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[19.5px]">Batch actions always visible and never hidden behind selection state</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-col gap-[4px] items-start p-[16px] relative rounded-[16px] shrink-0 w-full" data-node-id="450:19151">
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="450:19152">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19153" data-name="Heading 5">
                        <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#432060] text-[14px] w-full" data-node-id="450:19154" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[25.5px]">Surface system state without sacrificing density</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19155">
                        <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:19156" data-name="Container">
                          <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:19157" data-name="Margin">
                            <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:19158" data-name="Background" />
                          </div>
                          <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#555] text-[14px]" data-node-id="450:19159" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[19.5px]">Greyed-out states make system feedback clear</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19160">
                      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:19161" data-name="Container">
                        <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:19162" data-name="Margin">
                          <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:19163" data-name="Background" />
                        </div>
                        <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#555] text-[14px]" data-node-id="450:19164" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[19.5px]">Lightweight metric summary card surfaces the numbers that matter most, always visible</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-h-px min-w-px relative self-stretch" data-node-id="450:19165">
                  <div className="aspect-[1728/1247] relative shrink-0 w-full" data-node-id="450:19166" data-name="MacBook Pro 16_ - 21 (3) 1">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMacBookPro162131} />
                  </div>
                  <div className="absolute border border-[#35a3bf] border-solid h-[299px] left-[45px] rounded-[12px] top-[83.41px] w-[126px]" data-node-id="450:19167" />
                  <div className="absolute border border-[#35a3bf] border-solid h-[40px] left-[446px] rounded-[12px] top-[15.41px] w-[189px]" data-node-id="450:19168" />
                </div>
              </div>
              <div className="content-stretch flex gap-[16px] h-[467.63px] items-start relative shrink-0 w-full" data-node-id="450:19169">
                <div className="aspect-[1728/1247] h-full relative shrink-0" data-node-id="450:19170" data-name="MacBook Pro 16_ - 25 (3) 1">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMacBookPro162531} />
                </div>
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[200px]" data-node-id="450:19171">
                  <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-col gap-[4px] items-start p-[16px] relative rounded-[16px] shrink-0 w-[200px]" data-node-id="450:19172">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19173" data-name="Heading 5">
                      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#432060] text-[14px] w-full" data-node-id="450:19174" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[25.5px]">{`Clarify selection & bulk actions`}</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19175">
                      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:19176" data-name="Container">
                        <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:19177" data-name="Margin">
                          <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:19178" data-name="Background" />
                        </div>
                        <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#555] text-[14px]" data-node-id="450:19179" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[19.5px]">Familiar mental model reduces learning curve for new TAs</p>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19180">
                      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:19181" data-name="Container">
                        <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:19182" data-name="Margin">
                          <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:19183" data-name="Background" />
                        </div>
                        <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#555] text-[14px]" data-node-id="450:19184" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[19.5px]">Consolidated entry points cut unnecessary steps from every workflow</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-col items-start p-[16px] relative rounded-[16px] shrink-0 w-[200px]" data-node-id="450:19185">
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-node-id="450:19186">
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19187" data-name="Heading 5">
                        <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#432060] text-[14px] w-full" data-node-id="450:19188" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[25.5px]">Surface system state without sacrificing density</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19189">
                        <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:19190" data-name="Container">
                          <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:19191" data-name="Margin">
                            <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:19192" data-name="Background" />
                          </div>
                          <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#555] text-[14px]" data-node-id="450:19193" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[19.5px]">Number indicators surface metric details and provide quick filter entry points</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute border border-[#35a3bf] border-solid h-[58px] left-[56px] rounded-[12px] top-[105.78px] w-[83px]" data-node-id="450:19194" />
                <div className="absolute border border-[#35a3bf] border-solid h-[27px] left-[174px] rounded-[12px] top-[148.78px] w-[272px]" data-node-id="450:19195" />
              </div>
              <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:19196">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[200px]" data-node-id="450:19197">
                  <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-col gap-[4px] items-start p-[16px] relative rounded-[16px] shrink-0 w-[200px]" data-node-id="450:19198">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19199" data-name="Heading 5">
                      <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#432060] text-[14px] w-full" data-node-id="450:19200" style={{ fontVariationSettings: "'opsz' 14" }}>
                        <p className="leading-[25.5px]">{`Clarify selection & bulk actions`}</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19201">
                      <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:19202" data-name="Container">
                        <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:19203" data-name="Margin">
                          <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:19204" data-name="Background" />
                        </div>
                        <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#555] text-[14px]" data-node-id="450:19205" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[19.5px]">Confirmation step prevents irreversible mistakes</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-col gap-[4px] items-start p-[17px] relative rounded-[16px] shrink-0 w-[200px]" data-node-id="450:19206" data-name="Background+Border">
                    <div className="relative shrink-0 w-full" data-node-id="450:19207" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19208" data-name="Heading 4">
                          <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#432060] text-[14px] w-full" data-node-id="450:19209" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[23.1px]">Balance familiarity with real improvement</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-full" data-node-id="450:19210">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:19211" data-name="Container">
                          <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:19212" data-name="Margin">
                            <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:19213" data-name="Background" />
                          </div>
                          <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#555] text-[14px]" data-node-id="450:19214" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[19.5px]">Both sidebar filters + embedded table filters</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-full" data-node-id="450:19215">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:19216" data-name="Container">
                          <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:19217" data-name="Margin">
                            <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:19218" data-name="Background" />
                          </div>
                          <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#555] text-[14px]" data-node-id="450:19219" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[19.5px]">Dense data views preserved so power users lose nothing</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative shrink-0 w-full" data-node-id="450:19220">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                        <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-node-id="450:19221" data-name="Container">
                          <div className="content-stretch flex flex-col h-[11px] items-start pt-[6px] relative shrink-0 w-[6px]" data-node-id="450:19222" data-name="Margin">
                            <div className="bg-[#6b46a0] rounded-[3px] shrink-0 size-[6px]" data-node-id="450:19223" data-name="Background" />
                          </div>
                          <div className="flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px relative text-[#555] text-[14px]" data-node-id="450:19224" style={{ fontVariationSettings: "'opsz' 14" }}>
                            <p className="leading-[19.5px]">Still support popular workflows such as CSV uploads</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute border-2 border-[#35a3bf] border-solid h-[58px] left-[267px] rounded-[18px] top-[105.78px] w-[83px]" data-node-id="450:19225" />
                <div className="absolute border-2 border-[#35a3bf] border-solid h-[27px] left-[394px] rounded-[18px] top-[148.78px] w-[272px]" data-node-id="450:19226" />
                <div className="aspect-[1728/1247] flex-[1_0_0] min-h-px min-w-px relative" data-node-id="450:19227" data-name="MacBook Pro 16_ - 26 (1) 1">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMacBookPro162611} />
                </div>
                <div className="absolute border border-[#35a3bf] border-solid h-[58px] left-[267px] rounded-[12px] top-[104.16px] w-[116px]" data-node-id="450:19228" />
                <div className="absolute border border-[#35a3bf] border-solid h-[19px] left-[442px] rounded-[18px] top-[175.16px] w-[359px]" data-node-id="450:19229" />
                <div className="absolute border border-[#35a3bf] border-solid h-[67px] left-[389px] rounded-[12px] top-[59.16px] w-[455px]" data-node-id="450:19230" />
                <div className="absolute border border-[#35a3bf] border-solid h-[269px] left-[402px] rounded-[18px] top-[198.16px] w-[442px]" data-node-id="450:19231" />
              </div>
            </div>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:19232" data-name="Separator" />
            <div
              id="case-study-prototype"
              className="content-stretch flex scroll-mt-8 flex-col gap-[32px] items-start py-[24px] relative shrink-0 w-full"
              data-node-id="450:19233"
            >
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-node-id="450:19234">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:19235">
                  <div className="content-stretch flex flex-col items-start max-w-[680px] relative shrink-0 w-[680px]" data-node-id="450:19236" data-name="Container">
                    <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:19237" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[25.5px]">Design process</p>
                    </div>
                  </div>
                  <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-w-full relative shrink-0 text-[#845482] text-[32px] w-[min-content]" data-node-id="450:19238">
                    Prototype
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-node-id="450:19239" data-name="Container">
                  <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#7a7060] text-[16px] w-full" data-node-id="450:19240" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[26.25px]">{`In high-fidelity, I finalized the visual hierarchy and interaction details to ensure clarity, safety, and consistency across the core filtering and batch-action workflow, and aligned design with MUI design system. `}</p>
                  </div>
                </div>
              </div>
              <div
                className="relative flex min-h-[280px] w-full shrink-0 items-center justify-center overflow-hidden rounded-[24px] bg-[#e3dfd6] px-3 py-8 sm:min-h-[417px] sm:px-8"
                data-node-id="450:19241"
                data-name="Container"
              >
                <div className="mx-auto flex w-full max-w-[920px] justify-center">
                  <CmsxLaptopVideoFrame
                    videoSrc="/videos/cmsx-laptop.mp4"
                    className="pointer-events-none w-full max-w-[880px]"
                  />
                </div>
              </div>
            </div>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:19245" data-name="Separator" />
            <div className="content-stretch flex flex-col gap-[48px] items-start py-[24px] relative shrink-0 w-full" data-node-id="450:19246">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19247" data-name="Section - RECOMMENDATION">
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:19248">
                  <div className="content-stretch flex flex-col items-start max-w-[680px] relative shrink-0 w-[680px]" data-node-id="450:19249" data-name="Container">
                    <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:19250" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[25.5px]">My Impact</p>
                    </div>
                  </div>
                  <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-w-full relative shrink-0 text-[#845482] text-[32px] w-[min-content]" data-node-id="450:19251">
                    Outcomes
                  </p>
                </div>
              </div>
              <div className="content-stretch flex font-['DM_Sans:SemiBold',sans-serif] font-semibold gap-[32px] h-[132px] items-start relative shrink-0 w-full" data-node-id="450:19252" data-name="Container">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px pb-[24px] relative rounded-[18px] self-stretch" data-node-id="450:19253" data-name="Background+Border">
                  <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:19254" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[40px]">01</p>
                  </div>
                  <p className="leading-[28px] min-w-full relative shrink-0 text-[#432060] text-[16px] w-[min-content]" data-node-id="450:19255" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Handed off high-fidelity prototype that was feasible for engineers to implement with MUI components
                  </p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px pb-[24px] relative rounded-[18px] self-stretch" data-node-id="450:19256" data-name="Background+Border">
                  <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:19257" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[40px]">03</p>
                  </div>
                  <p className="leading-[28px] min-w-full relative shrink-0 text-[#432060] text-[16px] w-[min-content]" data-node-id="450:19258" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Produced design that improved experience for both power users like professors and TA’s
                  </p>
                </div>
              </div>
            </div>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-full" data-node-id="450:19259" data-name="Separator" />
            <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[1100px] py-[24px] relative shrink-0 w-full" data-node-id="450:19260" data-name="Section - REFLECTIONS">
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="450:19261">
                <div className="content-stretch flex flex-col items-start max-w-[680px] relative shrink-0 w-[680px]" data-node-id="450:19262" data-name="Container">
                  <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap" data-node-id="450:19263" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <p className="leading-[25.5px]">Reflections</p>
                  </div>
                </div>
                <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-node-id="450:19264" data-name="Container">
                  <div className="flex-[1_0_0] min-h-px min-w-px relative" data-node-id="450:19265" data-name="Heading 1">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
                      <p className="flex-[1_0_0] font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-h-px min-w-px relative text-[#845482] text-[32px]" data-node-id="450:19266">
                        What I took from this
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="450:19267" data-name="Container">
                <div className="content-stretch flex gap-[12px] h-[181px] items-center relative shrink-0 w-full" data-node-id="450:19268">
                  <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                    <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-full items-start min-h-px min-w-px p-[24px] relative rounded-[10px]" data-node-id="450:19269" data-name="Background+Border">
                      <div className="bg-[#ede7f8] content-stretch flex items-center justify-center pb-[5.84px] pt-[4.16px] relative rounded-[10px] shrink-0 size-[40px]" data-node-id="450:19270" data-name="Background">
                        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" data-node-id="450:19271" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[37.4px]">💾</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19272" data-name="Heading 4">
                        <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] w-full" data-node-id="450:19273" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[22.1px]">Defining what to preserve is design work</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19274" data-name="Container">
                        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] w-full" data-node-id="450:19275" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[18px]">Good redesign isn’t just about change, deciding what stays the same requires just as much clarity and intent.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                    <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-full items-start min-h-px min-w-px p-[24px] relative rounded-[10px]" data-node-id="450:19276" data-name="Background+Border">
                      <div className="bg-[#ede7f8] content-stretch flex items-center justify-center pb-[5.84px] pt-[4.16px] relative rounded-[10px] shrink-0 size-[40px]" data-node-id="450:19277" data-name="Background">
                        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" data-node-id="450:19278" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[37.4px]">🔎</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19279" data-name="Heading 4">
                        <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] w-full" data-node-id="450:19280" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[22.1px]">Informal research still has to be rigorous</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19281" data-name="Container">
                        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] w-full" data-node-id="450:19282" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[18px]">Small samples can still produce strong insights if you ask the right questions and pay attention to how people think differently.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[12px] h-[203px] items-center relative shrink-0 w-full" data-node-id="450:19283">
                  <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                    <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-full items-start min-h-px min-w-px p-[24px] relative rounded-[10px]" data-node-id="450:19284" data-name="Background+Border">
                      <div className="bg-[#ede7f8] content-stretch flex items-center justify-center pb-[5.84px] pt-[4.16px] relative rounded-[10px] shrink-0 size-[40px]" data-node-id="450:19285" data-name="Background">
                        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" data-node-id="450:19286" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[37.4px]">{`⛔ `}</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19287" data-name="Heading 4">
                        <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] w-full" data-node-id="450:19288" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[22.1px] mb-0">Coupling selection, action, and feedback</p>
                          <p className="leading-[22.1px]">reduces error</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19289" data-name="Container">
                        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] w-full" data-node-id="450:19290" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[18px]">When these elements are disconnected, workflows break down, bringing them together made the system more reliable and intuitive.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                    <div className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-full items-start min-h-px min-w-px p-[24px] relative rounded-[10px]" data-node-id="450:19291" data-name="Background+Border">
                      <div className="bg-[#ede7f8] content-stretch flex items-center justify-center pb-[5.84px] pt-[4.16px] relative rounded-[10px] shrink-0 size-[40px]" data-node-id="450:19292" data-name="Background">
                        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[22px] text-black whitespace-nowrap" data-node-id="450:19293" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[37.4px]">🎨</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19294" data-name="Heading 4">
                        <div className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] w-full" data-node-id="450:19295" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[22.1px]">Visual hierarchy can do heavy lifting</p>
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="450:19296" data-name="Container">
                        <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] w-full" data-node-id="450:19297" style={{ fontVariationSettings: "'opsz' 14" }}>
                          <p className="leading-[18px]">You don’t always need to remove complexity, strong hierarchy can make the right actions feel obvious.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[15px] w-full" data-node-id="450:19298" style={{ fontVariationSettings: "'opsz' 14" }}>
                <p className="leading-[25.5px]">
                  I learned that simplifying complex systems isn’t about removing functionality—it’s about structuring it so users can act with confidence.
                  <br aria-hidden="true" />
                  Balancing flexibility and clarity required designing for multiple mental models at once, while respecting existing user habits.
                </p>
              </div>
            </div>
            <div className="border-[#ddd8d0] border-solid border-t h-px shrink-0 w-[900px]" data-node-id="450:19299" data-name="Separator" />
            <div className="content-stretch flex flex-col items-center pt-[40px] relative shrink-0 w-full" data-node-id="450:19300">
              <a
                href={docUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#432060] content-stretch flex items-center justify-center px-[40px] py-[10px] relative rounded-[16777200px] shrink-0 no-underline"
                data-node-id="450:19301"
                data-name="Home"
              >
                <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" data-node-id="450:19302" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Read Full Case Study
                </p>
              </a>
            </div>
            <div className="content-stretch flex gap-[12px] items-center justify-end pt-[96px] pb-16 relative shrink-0 w-full" data-node-id="450:19303" data-name="Container">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="450:19304" data-name="Container">
                <div className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap" data-node-id="450:19305" style={{ fontVariationSettings: "'opsz' 14" }}>
                  <p className="leading-[22.1px]">Next Project :</p>
                </div>
              </div>
              <Link
                to={nextProject.to}
                className="content-stretch flex flex-col items-start relative shrink-0 no-underline"
                data-node-id="450:19306"
                data-name="Link"
              >
                <div className="capitalize flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a2472] text-[14px] tracking-[0.52px] whitespace-nowrap" data-node-id="450:19307" style={{ fontVariationSettings: "'opsz' 14" }}>
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