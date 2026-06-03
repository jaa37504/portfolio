import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { CmsxLaptopVideoFrame, type CmsxLaptopVariant } from '../components/CmsxLaptopVideoFrame';
import {
  CASE_STUDY_CARD_STAGGER_ITEM,
  CASE_STUDY_VERTICAL_STAGGER_ITEM,
  CaseStudySection,
  CaseStudyStagger,
  SoftAppearOnce,
  SoftAppearStagger,
} from '../components/SoftAppear';
import {
  caseStudySectionPaddingYClass,
  caseStudyTextColumnClass,
} from '../caseStudyLayout';
import { scrollToCaseStudyPhase2Prototype } from '../caseStudyScroll';

const imgPhase2Hero = '/images/CMSXPhase2Hero.png';
const imgPhase2Iteration1 = '/images/CMSXPhase2Iteration1.png';
const videoPhase2Iteration1 = '/videos/cmsx-phase2-iteration1.mp4';
const videoPhase2FinalPrototype = '/videos/cmsx-phase2-final-prototype.mp4';
const imgPhase2Finding1 = '/images/CMSXPhase2Finding1.png';
const imgPhase2Finding2 = '/images/CMSXPhase2Finding2.png';
const imgPhase2Finding3Tooltip = '/images/CMSXPhase2Finding3Tooltip.png';
const imgPhase2Finding3Table = '/images/CMSXPhase2Finding3Table.png';
const imgPhase2Finding5 = '/images/CMSXPhase2Finding5.png';
const imgPhase2FinalPrototype = '/images/CMSXPhase2FinalPrototype.png';

const CMSX_PHASE2_GITHUB_URL = 'https://github.com/jaa37504/CMSX-new-IA';

const PROCESS_STEPS = [
  { label: 'Design Intent', tone: 'mauve' as const },
  { label: 'AI Prototype', tone: 'purple' as const },
  { label: 'Heuristic Evaluation', tone: 'mauve' as const },
  { label: 'Iteration', tone: 'purple' as const },
  { label: 'User Testing', tone: 'mauve' as const },
  { label: 'Repeat', tone: 'purple' as const },
];

const ITERATION_DECISIONS = [
  'When no groups exist, direct users to the Group subtab first',
  'Assumes users arrive knowing what groups they want, and optimizes for bulk assignment',
  'Random group auto assignment functionality embedded directly',
];

const USER_TESTING_FINDINGS = [
  {
    title: 'Power users hesitated at the subtab separation',
    change: '→ Automatic routing + clearer subtab labels',
    image: imgPhase2Finding1,
    imageClassName: 'aspect-[2846/1530] w-full',
  },
  {
    title: 'Groups often persist across assignments',
    change: '→ Import-from-assignment + smarter defaults',
    image: imgPhase2Finding2,
    imageClassName: 'aspect-[2846/1526] w-full',
  },
  {
    title: 'Some grouping decisions need grade context',
    change: '→ Hover tooltip + expanded table view for power users',
    dualImage: true,
  },
  {
    title: 'Group-level batch actions were missing',
    change: '→ Merge, break up, and multi-select at the group level',
    image: imgPhase2Hero,
    imageClassName: 'aspect-[2846/1532] w-full',
  },
  {
    title: 'Groups of one must be supported',
    change: '→ Group Individually button + updated break up behavior',
    image: imgPhase2Finding5,
    imageClassName: 'aspect-[2850/970] w-full',
  },
];

const PHASE2_REFLECTIONS = [
  {
    emoji: '💾',
    title: 'Start with something testable',
    body: 'Edge cases and constraints surfaced during the design process, not at engineering handoff.',
  },
  {
    emoji: '🔎',
    title: "The designer's role is shifting, not shrinking",
    body: 'The AI generates, but the designer judges and directs. Heuristic evaluation and good design intuition are incredibly important.',
  },
  {
    emoji: '⛔',
    title: 'Prototyping speeds up design evaluation',
    body: 'Building removes some of the guess work and assumptions and allows for testing of ideas in real time.',
  },
];

type Props = {
  docUrl: string;
  nextProject: { to: string; label: string };
};

/** Phase II only — horizontal rule draws in on scroll. */
function Phase2Separator({ 'data-node-id': nodeId }: { 'data-node-id'?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setOn(true);
      },
      { threshold: 0.5, rootMargin: '0px 0px -8% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="h-px w-full shrink-0" data-node-id={nodeId}>
      <div
        className={`h-px w-full origin-left bg-[#ddd8d0] motion-reduce:scale-x-100 ${on ? 'motion-safe:scale-x-100' : 'motion-safe:scale-x-0'} motion-safe:transition-transform motion-safe:duration-[900ms] motion-safe:ease-out`}
        aria-hidden
      />
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className={`content-stretch flex flex-col items-start ${caseStudyTextColumnClass} relative shrink-0`}>
      <div
        className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.8px] uppercase whitespace-nowrap"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p className="leading-[25.5px]">{children}</p>
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] min-w-full relative shrink-0 text-[#845482] text-[32px] w-[min-content]">
      {children}
    </p>
  );
}

function SubsectionTitle({ children }: { children: ReactNode }) {
  return (
    <p className="font-['Libre_Baskerville:Italic',sans-serif] italic leading-[40px] relative shrink-0 text-[#816451] text-[24px] w-full">
      {children}
    </p>
  );
}

function NumberedFindingBadge({ n }: { n: number }) {
  return (
    <div className="bg-[#fbedca] content-stretch flex items-center justify-center pb-[6.9px] pt-[5.1px] relative rounded-[18px] shrink-0 size-[36px]">
      <div
        className="flex flex-col font-['DM_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b5923c] text-[14px] text-center whitespace-nowrap"
        style={{ fontVariationSettings: "'opsz' 14" }}
      >
        <p className="leading-[23.8px]">{n}</p>
      </div>
    </div>
  );
}

function LaptopShowcase({
  posterSrc,
  videoSrc,
  variant = 'caseStudyPhase2Hero',
}: {
  posterSrc: string;
  videoSrc?: string;
  variant?: CmsxLaptopVariant;
}) {
  return (
    <SoftAppearOnce
      className="relative flex min-h-[280px] w-full shrink-0 items-center justify-center overflow-hidden rounded-[24px] bg-[#e3dfd6] py-8 sm:min-h-[417px]"
      intersectionThreshold={0.12}
    >
      <CmsxLaptopVideoFrame
        variant={variant}
        posterSrc={posterSrc}
        videoSrc={videoSrc}
        posterOnly={!videoSrc}
        className="pointer-events-none mx-auto shrink-0"
      />
    </SoftAppearOnce>
  );
}

function InlinePrototypeVideo({ posterSrc, videoSrc }: { posterSrc: string; videoSrc: string }) {
  return (
    <SoftAppearOnce className="relative w-full shrink-0" intersectionThreshold={0.1}>
      <div className="relative w-full overflow-hidden rounded-[2px] border border-solid border-[#e8dfd0]">
        <video
          className="block aspect-[2878/1526] h-auto w-full object-cover"
          poster={posterSrc}
          src={videoSrc}
          muted
          playsInline
          loop
          autoPlay
          preload="auto"
        />
      </div>
    </SoftAppearOnce>
  );
}

function UserTestingFindingCard({
  finding,
  index,
}: {
  finding: (typeof USER_TESTING_FINDINGS)[number];
  index: number;
}) {
  return (
    <div
      className="bg-white border border-[#e2dbd3] border-solid content-stretch flex flex-col gap-4 items-start p-6 relative rounded-[14px] shrink-0 w-full sm:flex-row sm:gap-4 sm:pl-6 sm:pr-12"
      data-node-id={`818:${446 + index * 10}`}
    >
      <NumberedFindingBadge n={index + 1} />
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-4 items-start min-w-px relative w-full">
        <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full">
          <div
            className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[15px] w-full"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            <p className="leading-[25.5px]">{finding.title}</p>
          </div>
          <div
            className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] w-full"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            <p className="leading-[22.4px]">{finding.change}</p>
          </div>
        </div>
        {'dualImage' in finding && finding.dualImage ? (
          <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-start">
            <div className="relative aspect-[341/411] w-full shrink-0 overflow-hidden rounded-[2px] border border-solid border-[#e8dfd0] sm:max-w-[228px]">
              <img
                alt=""
                className="absolute left-0 top-[0.08%] h-[99.92%] max-w-none w-[224.05%]"
                src={imgPhase2Finding3Tooltip}
              />
            </div>
            <div className="relative aspect-[2850/1532] min-w-0 flex-1 overflow-hidden rounded-[2px] border border-solid border-[#e8dfd0]">
              <img alt="" className="absolute inset-0 size-full max-w-none object-cover" src={imgPhase2Finding3Table} />
            </div>
          </div>
        ) : finding.image ? (
          <div
            className={`relative overflow-hidden rounded-[2px] border border-solid border-[#e8dfd0] ${finding.imageClassName}`}
          >
            <img alt="" className="absolute inset-0 size-full max-w-none object-cover" src={finding.image} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function CmsxPhase2Section({ docUrl, nextProject }: Props) {
  return (
    <>
      <CaseStudySection
        animated={false}
        className={`content-stretch flex flex-col gap-8 items-start sm:gap-12 ${caseStudySectionPaddingYClass} relative shrink-0 w-full`}
        data-node-id="818:353"
      >
        <SoftAppearStagger
          className="content-stretch flex w-full min-w-0 flex-col gap-8 items-start sm:gap-12"
          data-node-id="818:354"
          staggerMs={140}
          initialDelayMs={40}
          itemClassName="w-full min-w-0 shrink-0"
        >
          <div className="content-stretch flex items-center relative shrink-0 w-full" data-node-id="818:363">
            <h2
              className="flex-[1_0_0] font-['Libre_Baskerville:Italic',sans-serif] italic leading-[1.12] min-h-px min-w-px relative text-[#432060] text-[clamp(2rem,7vw,3.75rem)] whitespace-normal break-words"
              data-node-id="818:364"
            >
              Cornell Course Management System (CMSX) Phase II
            </h2>
          </div>
          <LaptopShowcase posterSrc={imgPhase2Hero} />
        </SoftAppearStagger>
      </CaseStudySection>

      <Phase2Separator data-node-id="818:569" />

      <CaseStudySection
        className={`content-stretch flex flex-col gap-8 items-start ${caseStudySectionPaddingYClass} relative shrink-0 w-full`}
        data-node-id="818:376"
      >
        <div className="content-stretch flex flex-col gap-6 items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
            <SectionLabel>Overview</SectionLabel>
            <SectionTitle>Pushing further with AI-assisted iterative prototyping</SectionTitle>
          </div>
          <div
            className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[16px] w-full whitespace-pre-wrap"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            <p className="leading-[25.5px] mb-0">In Phase II we had more freedom and technical support to restructure the IA.</p>
            <p className="leading-[25.5px] mb-0">&nbsp;</p>
            <p className="leading-[25.5px]">
              Hypothesizing that users typically performed grouping and then grading, I explored a rapid iterative design process with Claude to separate grouping and grading into distinct sub tabs to ensure workflows reflected how instructors and TAs actually work.
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={scrollToCaseStudyPhase2Prototype}
          className="cursor-pointer border-0 bg-[#845482] content-stretch flex items-end px-[40px] py-[10px] relative rounded-[16777200px] shrink-0"
          data-node-id="818:387"
        >
          <p
            className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            Jump to Solution
          </p>
        </button>
      </CaseStudySection>

      <Phase2Separator data-node-id="818:389" />

      <CaseStudySection
        className={`content-stretch flex flex-col gap-8 items-start ${caseStudySectionPaddingYClass} relative shrink-0 w-full`}
        data-node-id="818:390"
      >
        <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
          <SectionLabel>Process</SectionLabel>
          <SectionTitle>Starting with something testable</SectionTitle>
        </div>
        <div
          className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[16px] w-full"
          style={{ fontVariationSettings: "'opsz' 14" }}
        >
          <p className="leading-[25.5px]">
            I began with a functional high-fidelity prototype directly from design intent and the updated information architecture using Claude, then iterating through evaluation and testing.
          </p>
        </div>
        <CaseStudyStagger
          className="flex w-full flex-wrap items-center gap-x-2 gap-y-3"
          data-node-id="818:400"
          staggerMs={70}
          initialDelayMs={80}
          itemClassName="shrink-0"
        >
          {PROCESS_STEPS.map((step, index) => (
            <div key={step.label} className="flex items-center gap-2">
              {index > 0 ? (
                <span
                  className="font-['DM_Sans:Regular',sans-serif] text-[#6b6560] text-[14px] leading-[22.4px]"
                  style={{ fontVariationSettings: "'opsz' 14" }}
                >
                  →
                </span>
              ) : null}
              <span
                className={`inline-flex items-center rounded-[10px] px-[17px] py-[11px] font-['DM_Sans:SemiBold',sans-serif] text-[11px] font-semibold uppercase tracking-[0.88px] leading-[17.6px] text-[#f5f3ee] ${
                  step.tone === 'mauve' ? 'bg-[#845482]' : 'bg-[#432060]'
                }`}
                style={{ fontVariationSettings: "'opsz' 14" }}
              >
                {step.label}
              </span>
            </div>
          ))}
        </CaseStudyStagger>
        <div
          className="bg-[#ede7f8] border-[#6b46a0] border-l-[3px] border-solid content-stretch flex flex-col items-start pl-[27px] pr-6 py-6 relative rounded-br-[16px] rounded-tr-[16px] shrink-0 w-full"
          data-node-id="818:418"
        >
          <p
            className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[23.1px] relative shrink-0 text-[#3d1f6e] text-[14px] w-full"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            My role in each cycle: define goals and constraints, evaluate output against UX principles and user research, identify failures, and direct the next iteration.
          </p>
        </div>
        <SubsectionTitle>Iteration 1: Separate Grouping Subtab</SubsectionTitle>
        <InlinePrototypeVideo posterSrc={imgPhase2Iteration1} videoSrc={videoPhase2Iteration1} />
        <CaseStudyStagger
          className="content-stretch relative flex h-auto w-full shrink-0 flex-col items-stretch gap-6 font-['DM_Sans:SemiBold',sans-serif] font-semibold sm:flex-row sm:gap-8"
          data-node-id="818:423"
          staggerMs={75}
          itemClassName={CASE_STUDY_CARD_STAGGER_ITEM}
        >
          {ITERATION_DECISIONS.map((text, index) => (
            <div key={text} className="content-stretch flex min-h-px min-w-0 flex-[1_1_0] flex-col items-start gap-3 self-stretch">
              <div
                className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap"
                style={{ fontVariationSettings: "'opsz' 14" }}
              >
                <p className="leading-[21px]">{String(index + 1).padStart(2, '0')}</p>
              </div>
              <p
                className="leading-[28px] min-w-0 w-full relative shrink-0 text-[#432060] text-[16px] whitespace-normal break-words"
                style={{ fontVariationSettings: "'opsz' 14" }}
              >
                {text}
              </p>
            </div>
          ))}
        </CaseStudyStagger>
      </CaseStudySection>

      <Phase2Separator data-node-id="818:433" />

      <CaseStudySection
        className={`content-stretch flex flex-col gap-8 items-start ${caseStudySectionPaddingYClass} relative shrink-0 w-full`}
        data-node-id="818:434"
      >
        <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
          <SectionLabel>User Testing</SectionLabel>
          <SectionTitle>Evaluating assumptions with real users</SectionTitle>
        </div>
        <div
          className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[16px] w-full"
          style={{ fontVariationSettings: "'opsz' 14" }}
        >
          <p className="leading-[25.5px]">I conducted user testing with 2 key users. 1 power user, and 1 new user.</p>
        </div>
        <SubsectionTitle>Key Findings and Changes</SubsectionTitle>
        <CaseStudyStagger
          className="content-stretch flex flex-col gap-5 items-start relative shrink-0 w-full"
          data-node-id="818:445"
          staggerMs={90}
          initialDelayMs={60}
          itemClassName={CASE_STUDY_VERTICAL_STAGGER_ITEM}
        >
          {USER_TESTING_FINDINGS.map((finding, index) => (
            <UserTestingFindingCard key={finding.title} finding={finding} index={index} />
          ))}
        </CaseStudyStagger>
      </CaseStudySection>

      <Phase2Separator data-node-id="818:495" />

      <CaseStudySection
        id="case-study-prototype-phase2"
        className={`content-stretch flex scroll-mt-8 flex-col gap-8 items-start ${caseStudySectionPaddingYClass} relative shrink-0 w-full`}
        data-node-id="818:496"
      >
        <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
          <SectionLabel>Hand off</SectionLabel>
          <SectionTitle>Final Prototype</SectionTitle>
        </div>
        <div
          className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[16px] w-full"
          style={{ fontVariationSettings: "'opsz' 14" }}
        >
          <p className="leading-[25.5px]">
            Explore the prototype on{' '}
            <a
              href={CMSX_PHASE2_GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6b6b6b] underline decoration-solid underline-offset-2"
            >
              GitHub
            </a>
          </p>
        </div>
        <LaptopShowcase posterSrc={imgPhase2FinalPrototype} videoSrc={videoPhase2FinalPrototype} />
      </CaseStudySection>

      <Phase2Separator data-node-id="818:517" />

      <CaseStudySection
        className={`content-stretch flex flex-col gap-8 items-start max-w-[1100px] ${caseStudySectionPaddingYClass} relative shrink-0 w-full`}
        data-node-id="818:518"
      >
        <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
          <SectionLabel>Reflections</SectionLabel>
          <SectionTitle>What I took from this</SectionTitle>
        </div>
        <CaseStudyStagger
          className="content-stretch flex flex-col gap-3 items-start relative shrink-0 w-full"
          data-node-id="818:526"
          staggerMs={85}
          initialDelayMs={50}
          itemClassName={CASE_STUDY_VERTICAL_STAGGER_ITEM}
        >
          {PHASE2_REFLECTIONS.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-[#ddd8d0] border-solid content-stretch flex flex-col gap-2 items-start p-6 relative rounded-[12px] shrink-0 w-full"
            >
              <div className="bg-[#ede7f8] content-stretch flex items-center justify-center pb-[5.84px] pt-[4.16px] relative rounded-[10px] shrink-0 size-[40px]">
                <p
                  className="font-['DM_Sans:Regular',sans-serif] text-[22px] leading-[37.4px]"
                  style={{ fontVariationSettings: "'opsz' 14" }}
                >
                  {item.emoji}
                </p>
              </div>
              <div
                className="flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2a2a2a] text-[14px] w-full"
                style={{ fontVariationSettings: "'opsz' 14" }}
              >
                <p className="leading-[22.1px]">{item.title}</p>
              </div>
              <div
                className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] w-full"
                style={{ fontVariationSettings: "'opsz' 14" }}
              >
                <p className="leading-[18px]">{item.body}</p>
              </div>
            </div>
          ))}
        </CaseStudyStagger>
      </CaseStudySection>

      <Phase2Separator data-node-id="818:549" />

      <SoftAppearOnce className="content-stretch flex flex-col items-center pt-10 relative shrink-0 w-full" data-node-id="818:550">
        <a
          href={docUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#432060] content-stretch flex items-center justify-center px-[40px] py-[10px] relative rounded-[16777200px] shrink-0 no-underline"
        >
          <p
            className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            Read Full Case Study
          </p>
        </a>
      </SoftAppearOnce>

      <SoftAppearOnce className="content-stretch flex flex-wrap gap-3 items-center justify-end pt-24 pb-16 relative shrink-0 w-full" data-node-id="818:553">
        <div
          className="flex flex-col font-['DM_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap"
          style={{ fontVariationSettings: "'opsz' 14" }}
        >
          <p className="leading-[22.1px]">Next Project :</p>
        </div>
        <Link to={nextProject.to} className="content-stretch flex flex-col items-start relative shrink-0 no-underline">
          <div
            className="capitalize flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a2472] text-[14px] tracking-[0.52px]"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            <p className="leading-[22.1px]">{nextProject.label}</p>
          </div>
        </Link>
      </SoftAppearOnce>
    </>
  );
}
