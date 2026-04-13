import { Link, useNavigate } from 'react-router-dom';
import { ActPhoneVideoFrame } from './ActPhoneVideoFrame';
import { CompactLaptopVideoFrame } from './CompactLaptopVideoFrame';
import type { WorkPageProject } from '../data/workPagePortfolio';

/** One motion curve + duration for height, opacity, and shadow so every card hovers in sync. */
const workCardOpacity =
  'transition-opacity duration-[450ms] ease-[cubic-bezier(0.33,1,0.68,1)] motion-reduce:transition-none';
const workCardHeight =
  'transition-[height] duration-[450ms] ease-[cubic-bezier(0.33,1,0.68,1)] motion-reduce:transition-none motion-reduce:will-change-auto';
const workCardShadow =
  'transition-[box-shadow] duration-[450ms] ease-[cubic-bezier(0.33,1,0.68,1)] motion-reduce:transition-none';

function TagRow({ tags }: { tags: WorkPageProject['tags'] }) {
  return (
    <div className="content-stretch flex flex-wrap gap-[8px] items-start relative shrink-0">
      {tags.map((t) => (
        <div key={t.label} className={t.pillClass}>
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[16px] py-[4px] relative size-full">
            <p
              className={`font-['DM_Sans:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[12px] whitespace-nowrap ${t.textClass}`}
              style={{ fontVariationSettings: "'opsz' 14" }}
            >
              {t.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function FeatureRows({ tools, skills, timeline }: { tools: string; skills: string; timeline: string }) {
  const row = (label: string, value: string) => (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 w-[100px] pt-[0.5px]">
        <p
          className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] text-[#2d2d2d] text-[14px] whitespace-nowrap"
          style={{ fontVariationSettings: "'opsz' 14" }}
        >
          {label}
        </p>
      </div>
      <div className="min-w-0 flex-1">
        <p
          className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] text-[#6b6b6b] text-[14px]"
          style={{ fontVariationSettings: "'opsz' 9" }}
        >
          {value}
        </p>
      </div>
    </div>
  );
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      {row('Tools:', tools)}
      {row('Skills:', skills)}
      {row('Timeline:', timeline)}
    </div>
  );
}

function CompactImage({ project }: { project: WorkPageProject }) {
  const { imageSrc, imageBgClass, compactImageMode, compactImgClassName } = project;

  if (compactImageMode === 'centered-info') {
    return (
      <div
        className={`relative mx-0 h-[222px] w-[240px] shrink-0 rounded-[24px] bg-[#e3dfd6]`}
      >
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[196px] left-1/2 rounded-[24px] top-1/2 w-[212px]">
          <img
            alt=""
            className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[24px] size-full"
            src={imageSrc}
          />
        </div>
      </div>
    );
  }

  if (compactImageMode === 'centered-kenvue') {
    return (
      <div
        className={`relative mx-0 h-[222px] w-[240px] shrink-0 rounded-[24px] bg-[#c9ac75]`}
      >
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[182px] left-[calc(50%+0.5px)] rounded-[24px] top-1/2 w-[197px]">
          <img
            alt=""
            className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[24px] size-full"
            src={imageSrc}
          />
        </div>
      </div>
    );
  }

  if (compactImageMode === 'act-crop') {
    return (
      <div className="relative mx-0 h-[222px] w-[240px] shrink-0 rounded-[24px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
          <div className={`absolute ${imageBgClass} inset-0 rounded-[24px]`} />
          <div className="absolute inset-0 overflow-hidden rounded-[24px]">
            <img alt="" className={`absolute max-w-none ${compactImgClassName ?? ''}`} src={imageSrc} />
          </div>
        </div>
      </div>
    );
  }

  /* Figma 450:17545 — thumb fills card row; must be explicit px height: `sm:h-full` breaks when the
   * flex row uses `items-center` (no definite % basis), collapsing the absolutely positioned img. */
  /* Same thumb height on every card so compact state + hover motion read consistently. */
  const fillHeight = 'h-[222px]';

  return (
    <div
      className={`relative mx-0 w-[240px] shrink-0 rounded-[24px] ${fillHeight}`}
    >
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
        <div className={`absolute ${imageBgClass} inset-0 rounded-[24px]`} />
        <img alt="" className="absolute max-w-none object-contain rounded-[24px] size-full" src={imageSrc} />
      </div>
    </div>
  );
}

function ExpandedImage({ project }: { project: WorkPageProject }) {
  const { imageSrc, imageBgClass, compactImageMode, expandedImgClassName, compactImgClassName } =
    project;

  const ev = project.expandedVideo;
  if (ev) {
    const poster = ev.posterSrc === false ? undefined : (ev.posterSrc ?? imageSrc);
    /* Match static expanded tiles: fill 489px column on lg; same min heights as image variants. */
    const shell = `relative flex w-full flex-col items-center justify-center overflow-clip rounded-[24px] min-h-[260px] sm:min-h-[417px] lg:h-full lg:min-h-[489px] ${imageBgClass}`;
    if (ev.kind === 'cmsx') {
      return (
        <div className={shell}>
          {/* Figma 450:17781 / 522:21927 — compact laptop 232×148 (fits 350px column); not the 416px Cmsx tile */}
          <CompactLaptopVideoFrame posterSrc={poster} videoSrc={ev.src} className="pointer-events-none relative" />
        </div>
      );
    }
    if (ev.kind === 'compact') {
      return (
        <div className={shell}>
          <CompactLaptopVideoFrame posterSrc={poster} videoSrc={ev.src} className="pointer-events-none relative" />
        </div>
      );
    }
    return (
      <div className={shell}>
        {/* `relative` must not be passed — it overrides `absolute` on the frame and breaks centering */}
        <ActPhoneVideoFrame
          posterSrc={poster}
          videoSrc={ev.src}
          variant="workExpanded"
          className="pointer-events-none"
        />
      </div>
    );
  }

  /** Figma 450:17925 — INFO 2300 expanded visual (lg height matches video column + other tiles). */
  if (compactImageMode === 'centered-info') {
    return (
      <div className="relative h-[417px] w-full shrink-0 rounded-[24px] bg-[#e3dfd6] lg:h-[489px]">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] top-1/2 h-[347px] w-[293px] overflow-clip rounded-[24px]">
          <img
            alt=""
            className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[24px] object-contain"
            src={imageSrc}
          />
        </div>
      </div>
    );
  }

  /** Figma 450:17975 — Kenvue expanded visual */
  if (compactImageMode === 'centered-kenvue') {
    return (
      <div className="relative h-[417px] w-full shrink-0 rounded-[24px] bg-[#c9ac75] lg:h-[489px]">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-[calc(50%+0.5px)] h-[338px] w-[284px] overflow-clip rounded-[24px]">
          <img
            alt=""
            className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[24px] object-contain"
            src={imageSrc}
          />
        </div>
      </div>
    );
  }

  if (compactImageMode === 'act-crop') {
    return (
      <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative rounded-[24px] w-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
          <div className={`absolute ${imageBgClass} inset-0 rounded-[24px]`} />
          <div className="absolute inset-0 overflow-hidden rounded-[24px]">
            <img
              alt=""
              className={`absolute max-w-none ${expandedImgClassName ?? compactImgClassName ?? ''}`}
              src={imageSrc}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative rounded-[24px] w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px]">
        <div className={`absolute ${imageBgClass} inset-0 rounded-[24px]`} />
        <img alt="" className="absolute max-w-none object-contain rounded-[24px] size-full" src={imageSrc} />
      </div>
    </div>
  );
}

export function WorkProjectCard({ project }: { project: WorkPageProject }) {
  const { title, role, summary, to, descriptionExpanded, tools, skills, timeline } = project;
  const navigate = useNavigate();

  return (
    <article
      className="group relative z-0 w-full min-w-0 cursor-pointer overflow-visible hover:z-30 focus-within:z-30"
      role="link"
      tabIndex={0}
      aria-label={`Open ${title} project page`}
      onClick={() => navigate(to)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          navigate(to);
        }
      }}
    >
      <div
        className={`relative h-[280px] w-full will-change-[height] ${workCardHeight} group-hover:h-[585px] group-focus-within:h-[585px]`}
      >
        {/* Compact (default) */}
        <div
          className={`opacity-100 ${workCardOpacity} group-hover:pointer-events-none group-hover:opacity-0 group-focus-within:pointer-events-none group-focus-within:opacity-0`}
        >
          <div
            className={`relative flex h-[280px] w-full shrink-0 flex-row items-center justify-start gap-5 rounded-[24px] border border-solid border-[#e8dfd0] bg-[#fdfcfb] p-[24px] shadow-[0_1px_3px_rgba(44,37,32,0.05),0_6px_20px_rgba(67,32,96,0.04)] md:gap-6 lg:gap-8 ${workCardShadow} group-hover:shadow-none group-focus-within:shadow-none`}
          >
            <div className="shrink-0 self-center">
              <CompactImage project={project} />
            </div>
            <div className="relative flex h-full min-h-0 w-full min-w-0 flex-1 flex-col items-start justify-between overflow-clip pb-[8px] pt-[16px] pr-4 md:pr-8 lg:pr-12 xl:pr-[96px]">
              <div className="relative flex min-h-px min-w-px w-full flex-[1_0_0] flex-col items-start justify-between">
                <div className="relative flex w-full shrink-0 flex-col items-start gap-3 sm:gap-[12px]">
                  <div className="relative min-h-[36px] w-full shrink-0 sm:h-[36px]">
                    <p className="relative left-0 font-['Libre_Baskerville:Italic',sans-serif] text-[30px] leading-[36px] text-[#845482] italic sm:absolute sm:top-[-0.5px] sm:whitespace-nowrap">
                      {title}
                    </p>
                  </div>
                  <div className="relative min-h-[20px] w-full shrink-0 sm:h-[20px]">
                    <p
                      className="relative left-0 font-['DM_Sans:SemiBold',sans-serif] text-[14px] font-semibold leading-[20px] text-[#432060] sm:absolute sm:top-[-0.5px] sm:whitespace-nowrap"
                      style={{ fontVariationSettings: "'opsz' 14" }}
                    >
                      {role}
                    </p>
                  </div>
                  <div className="relative flex w-full shrink-0 items-center justify-center">
                    <p
                      className="relative min-h-px min-w-px flex-[1_0_0] font-['DM_Sans:9pt_Regular',sans-serif] text-[14px] font-normal leading-[20px] text-[rgba(45,45,45,0.8)]"
                      style={{ fontVariationSettings: "'opsz' 9" }}
                    >
                      {summary}
                    </p>
                  </div>
                </div>
                <div className="mt-2">
                  <TagRow tags={project.tags} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expanded */}
        <div
          className={`pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-[24px] opacity-0 ${workCardOpacity} group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100`}
        >
          <div className="relative flex min-h-[585px] w-full flex-row items-center gap-6 rounded-[24px] border-2 border-solid border-[#e8dfd0] bg-[#fdfcfb] p-6 md:gap-8 md:p-8 lg:h-[585px] lg:min-h-[585px] lg:gap-[48px] lg:p-[48px]">
            <div className="flex h-[489px] w-[350px] shrink-0 flex-col">
              <ExpandedImage project={project} />
            </div>
            <div className="relative flex min-h-0 w-full min-w-0 flex-1 flex-col items-start justify-between lg:min-h-[489px] lg:pt-6">
              <div className="relative flex w-full shrink-0 flex-col items-start gap-6">
                <div className="relative flex w-full shrink-0 flex-col items-start gap-3">
                  <div className="relative flex h-auto min-h-[40px] w-full shrink-0 items-start justify-between lg:h-[40px]">
                    <p className="relative left-0 font-['Libre_Baskerville:Italic',sans-serif] text-[28px] leading-[36px] text-[#845482] italic sm:text-[32px] sm:leading-[40px] lg:absolute lg:top-[-0.5px] lg:whitespace-nowrap">
                      {title}
                    </p>
                  </div>
                  <p
                    className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] text-[#432060] text-[14px]"
                    style={{ fontVariationSettings: "'opsz' 14" }}
                  >
                    {role}
                  </p>
                </div>
                <TagRow tags={project.tags} />
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                  <div className="relative h-[28px] w-full shrink-0">
                    <p className="absolute left-0 top-[-0.5px] font-['Libre_Baskerville:Regular',sans-serif] not-italic leading-[28px] text-[#2d2d2d] text-[16px] whitespace-nowrap">
                      Description:
                    </p>
                  </div>
                  <p
                    className="w-full font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[22.75px] text-[#6b6b6b] text-[14px]"
                    style={{ fontVariationSettings: "'opsz' 9" }}
                  >
                    {descriptionExpanded}
                  </p>
                </div>
                <div className="content-stretch flex min-h-[144px] flex-col gap-[12px] items-start relative shrink-0 w-full">
                  <div className="relative h-[28px] w-full shrink-0">
                    <p className="absolute left-0 top-[-0.5px] font-['Libre_Baskerville:Regular',sans-serif] not-italic leading-[28px] text-[#2d2d2d] text-[16px] whitespace-nowrap">
                      Features:
                    </p>
                  </div>
                  <div className="content-stretch flex min-h-[104px] flex-col gap-[8px] items-start relative w-full">
                    <FeatureRows tools={tools} skills={skills} timeline={timeline} />
                  </div>
                </div>
              </div>
              <div className="relative mt-2 flex w-full shrink-0 items-start justify-start pt-2 lg:mt-0 lg:h-14 lg:pt-0">
                <Link
                  to={to}
                  aria-label={`Learn more — ${title}`}
                  onClick={(e) => e.stopPropagation()}
                  className="relative z-20 inline-flex w-full max-w-full items-center justify-center rounded-[16777200px] bg-[#845482] px-[40px] py-[10px] no-underline transition-colors sm:w-auto hover:bg-[#6d4070]"
                >
                  <span
                    className="text-center font-['DM_Sans:Medium',sans-serif] text-[16px] font-medium leading-[24px] whitespace-nowrap text-[#fdfcfb]"
                    style={{ fontVariationSettings: "'opsz' 14" }}
                  >
                    Learn More
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
