import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { isHomeNavActive, isWorkNavActive, mainNavInlineClass } from '../mainNav';
import { ActPhoneVideoFrame } from '../components/ActPhoneVideoFrame';
import { CompactLaptopVideoFrame } from '../components/CompactLaptopVideoFrame';
import {
  CASE_STUDY_VERTICAL_STAGGER_ITEM,
  SoftAppearOnce,
  SoftAppearStagger,
} from '../components/SoftAppear';
import { CmsxLaptopVideoFrame, type CmsxLaptopVariant } from '../components/CmsxLaptopVideoFrame';
import { HOME_PROJECTS, WORK_FILTER_CHIPS, type HomeProject, type WorkFilterId } from '../data/homePortfolio';

const imgHero = 'https://www.figma.com/api/mcp/asset/ab639713-069b-486f-b958-e44a950dd3b1';
const imgC1Logo1 = 'https://www.figma.com/api/mcp/asset/458b6e1f-5830-4f07-aee5-1b738be400e7';
const imgKenvueLogoBlackRgbSvg1 =
  'https://www.figma.com/api/mcp/asset/a3ec4aaa-3f4b-41ab-a2e2-2e2aeb39237f';
const imgAmericanNationalLogo = '/AN-Awareness-Logo-Stacked-2-Color-CMYK-01.webp';
const RESUME_URL =
  'https://docs.google.com/document/d/1SLLJ9tK3dty8gCpP_CIbc9i40GogWsIow8KUDYBeG1k/edit?usp=sharing';

function projectById(id: string): HomeProject {
  const p = HOME_PROJECTS.find((x) => x.id === id);
  if (!p) throw new Error(`Unknown project ${id}`);
  return p;
}

function RemoteLogo({
  src,
  alt,
  fallbackLabel,
  imgClassName,
  fallbackClassName,
}: {
  src: string;
  alt: string;
  fallbackLabel: string;
  imgClassName: string;
  fallbackClassName: string;
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div aria-label={alt} className={fallbackClassName} role="img">
        {fallbackLabel}
      </div>
    );
  }

  return <img alt={alt} className={imgClassName} onError={() => setHasError(true)} src={src} />;
}

/** Figma Development filter (450:18303) — phone still; laptop arm uses video (522:21734). */
const imgDevPhone = 'https://www.figma.com/api/mcp/asset/b51cc678-ad6d-4bc4-a91b-c231b2760d03';

/** Figma 450:17047 — INFO 2300 L-shape card (home “All” bento): phone + web mockups */
const imgInfoLShapePhone = 'https://www.figma.com/api/mcp/asset/6f8dbd88-5626-4cd0-9b2a-6e95d9d1afdb';
const imgInfoLShapeWeb = 'https://www.figma.com/api/mcp/asset/3e563ce1-9f35-4ebb-8243-c7b97bea7e8f';

/**
 * Tailwind v4 implements `translate-y-*` with the CSS `translate` property (not `transform`),
 * so `transition-transform` does not interpolate — the panel jumps. Transition `translate`.
 */
const portfolioFooterSlideMotion =
  '[backface-visibility:hidden] transition-[translate,border-color] duration-550 ease-in-out motion-reduce:duration-150';

/**
 * Grid tiles + Development unified card: same border, soft diffused shadow, hover, focus ring.
 * Wide blur + low opacity (vs. sharp shadow-sm / shadow-lg).
 */
const portfolioTileChrome =
  'border border-solid border-[#e8dfd0] bg-[#ffffff] shadow-[0_1px_2px_rgba(44,37,32,0.04),0_4px_22px_rgba(67,32,96,0.045)] outline-none transition-[border-color,box-shadow] duration-300 ease-out hover:z-10 hover:border-[#cfc3b0] hover:shadow-[0_2px_6px_rgba(44,37,32,0.05),0_10px_36px_rgba(67,32,96,0.07)] focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-[#845482] focus-visible:ring-offset-2';

function PortfolioCardLink({
  project,
  className,
  imageClassName,
  imageSrc,
  roundedClassName = 'rounded-[24px]',
  arrowClassName = 'bottom-6 right-6',
  /** When set, positions the expanded footer arrow to match the tile arrow (e.g. `left-[397px] bottom-[25px]`). */
  footerArrowClassName,
  pillOuterClassName,
  arrowCircleOuterClassName,
  paddedAspectImage,
  heroCmsxClassName,
  heroCompactClassName,
  heroPhoneClassName,
  cmsxVariant = 'default',
  compactSizePreset = 'default',
}: {
  project: HomeProject;
  className: string;
  imageClassName?: string;
  imageSrc?: string;
  roundedClassName?: string;
  arrowClassName?: string;
  footerArrowClassName?: string;
  /** When set, replaces default pill wrapper classes (Figma variant tones). */
  pillOuterClassName?: string;
  /** When set, replaces default arrow circle background classes. */
  arrowCircleOuterClassName?: string;
  /** Figma 450:17057 / 450:17448 — padded frame, aspect 1518:832, centered object-cover. */
  paddedAspectImage?: boolean;
  /** Override absolute placement for `CmsxLaptopVideoFrame` (default: centered in tile). */
  heroCmsxClassName?: string;
  /** Override absolute placement for `CompactLaptopVideoFrame` (default: `top-[74px]` centered). */
  heroCompactClassName?: string;
  /** Passed to `ActPhoneVideoFrame` root. */
  heroPhoneClassName?: string;
  cmsxVariant?: CmsxLaptopVariant;
  compactSizePreset?: 'default' | 'dataScienceTile';
}) {
  const pillWrap =
    pillOuterClassName ??
    `absolute left-[23px] top-[23px] z-[3] flex h-[24px] items-start rounded-full px-3 py-1 ${project.pillBg}`;
  const arrowCircle =
    arrowCircleOuterClassName ??
    `absolute z-[3] flex size-[40px] shrink-0 items-center justify-center rounded-full ${project.arrowSmallBg}`;
  const arrowFaceClasses =
    arrowCircleOuterClassName?.replace(/^\s*absolute\s+/, '') ??
    `flex size-[40px] shrink-0 items-center justify-center rounded-full ${project.arrowSmallBg}`;

  const videoPosterSrc =
    project.homeHeroVideoPosterSrc === false
      ? undefined
      : (project.homeHeroVideoPosterSrc ?? imageSrc ?? project.image);

  /** Figma filtered bentos: laptop centered in tile (522:21532 / 522:21623 / 522:21718). */
  const defaultHeroCmsx =
    'pointer-events-none absolute left-1/2 top-1/2 max-w-[min(100%,calc(100%-32px))] -translate-x-1/2 -translate-y-1/2';
  /** Product Design 304px tiles: compact laptop anchored below header (522:21612). */
  const defaultHeroCompact =
    'pointer-events-none absolute left-1/2 top-[74px] -translate-x-1/2';

  return (
    <Link
      to={project.to}
      className={`group absolute block overflow-hidden ${portfolioTileChrome} ${roundedClassName} ${className}`}
    >
      <div aria-hidden className={`pointer-events-none absolute inset-0 bg-[#ffffff] ${roundedClassName}`} />
      {project.homeHeroMedia === 'laptop-video' ? (
        /* Figma 516:21318 — laptop is absolutely placed (not flex-centered) so it never collapses */
        <div className={`pointer-events-none absolute inset-0 z-0 overflow-clip ${roundedClassName}`}>
          <CmsxLaptopVideoFrame
            posterSrc={videoPosterSrc}
            videoSrc={project.homeHeroVideoSrc}
            variant={cmsxVariant}
            className={heroCmsxClassName ?? defaultHeroCmsx}
          />
        </div>
      ) : project.homeHeroMedia === 'compact-laptop-video' ? (
        /* Figma 516:21311 — smaller laptop, centered, filter-bar video in screen */
        <div className={`pointer-events-none absolute inset-0 z-0 overflow-clip ${roundedClassName}`}>
          <CompactLaptopVideoFrame
            posterSrc={videoPosterSrc}
            videoSrc={project.homeHeroVideoSrc ?? '/videos/filter-bar-flow.mp4'}
            sizePreset={compactSizePreset}
            className={heroCompactClassName ?? defaultHeroCompact}
          />
        </div>
      ) : project.homeHeroMedia === 'phone-video' ? (
        /* Figma 516:21299 — phone mockup centered, prototype video in rounded screen */
        <div className={`pointer-events-none absolute inset-0 z-0 overflow-clip ${roundedClassName}`}>
          <ActPhoneVideoFrame
            posterSrc={videoPosterSrc}
            videoSrc={project.homeHeroVideoSrc}
            className={heroPhoneClassName ?? 'pointer-events-none'}
          />
        </div>
      ) : paddedAspectImage ? (
        <div className={`absolute inset-0 overflow-hidden ${roundedClassName}`}>
          <div className="flex h-full min-h-0 w-full flex-col items-center justify-center p-6">
            <div className="relative aspect-[1518/832] w-full min-w-0 shrink-0 overflow-hidden rounded-[1px]">
              <img
                alt=""
                src={imageSrc ?? project.image}
                className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[1px] object-cover object-center"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className={`absolute inset-0 overflow-hidden ${roundedClassName}`}>
          <img alt="" src={imageSrc ?? project.image} className={imageClassName ?? project.imageClassName} />
        </div>
      )}
      <div className={pillWrap}>
        <p
          className={`font-['DM_Sans:Medium',sans-serif] text-[12px] font-medium leading-[16px] ${project.pillText}`}
          style={{ fontVariationSettings: "'opsz' 14" }}
        >
          {project.tag}
        </p>
      </div>
      <div
        className={`${arrowCircle} ${arrowClassName} transition-opacity duration-550 ease-in-out motion-reduce:transition-none group-hover:opacity-0 group-focus-within:opacity-0`}
      >
        <span
          className={`inline-flex size-[40px] items-center justify-center font-['DM_Sans:9pt_Regular',sans-serif] text-[12px] font-normal leading-none ${project.arrowSmallText}`}
          style={{ fontVariationSettings: "'opsz' 9" }}
        >
          →
        </span>
      </div>
      <div
        className={`absolute bottom-0 left-0 right-0 z-[1] translate-y-full border-t border-solid border-[#e8dfd0] bg-[#ffffff] ${portfolioFooterSlideMotion} group-hover:translate-y-0 group-hover:border-[#cfc3b0] group-focus-within:translate-y-0 group-focus-within:border-[#cfc3b0]`}
      >
        <div className="px-6 pt-6 pb-6">
          <div
            className={`flex min-w-0 flex-col gap-3 pb-2 ${footerArrowClassName ? 'max-w-[min(100%,calc(100%-3.5rem))]' : 'pr-14'}`}
          >
            <p
              className={`font-['DM_Sans:SemiBold',sans-serif] text-[18px] font-semibold leading-[28px] ${project.footerAccent}`}
              style={{ fontVariationSettings: "'opsz' 14" }}
            >
              {project.title}
            </p>
            <p
              className="font-['DM_Sans:9pt_Regular',sans-serif] text-[14px] font-normal leading-[20px] text-[#6b6b6b]"
              style={{ fontVariationSettings: "'opsz' 9" }}
            >
              {project.subtitle}
            </p>
          </div>
        </div>
        <div
          className={`absolute ${footerArrowClassName ?? 'bottom-6 right-6'} ${arrowFaceClasses} transition-opacity duration-550 ease-in-out motion-reduce:transition-none opacity-0 group-hover:opacity-100 group-focus-within:opacity-100`}
        >
          <span
            className={`inline-flex size-[40px] items-center justify-center font-['DM_Sans:9pt_Regular',sans-serif] text-[12px] font-normal leading-none ${project.arrowSmallText}`}
            style={{ fontVariationSettings: "'opsz' 9" }}
          >
            →
          </span>
        </div>
      </div>
    </Link>
  );
}

/** Figma 450:17047 (default) / 450:17429 (hover) — one INFO 2300 project across the full L-shaped bento cell. */
function PortfolioLShapeInfoAllCard({ project }: { project: HomeProject }) {
  const lShapeWebPosterSrc =
    project.lShapeWebVideoPosterSrc === false
      ? undefined
      : (project.lShapeWebVideoPosterSrc ?? imgInfoLShapeWeb);

  /**
   * Right arm sits flush at x=304 (no 1px overlap) so the bottom stroke is continuous and not doubled.
   * One `filter: drop-shadow` on a wrapper around both solid masks — shadow follows the L silhouette uniformly
   * (two separate box-shadows stack unevenly at the seam).
   */
  const lShapeSilhouetteDropShadow =
    '[filter:drop-shadow(0_2px_10px_rgba(44,37,32,0.05))] transition-[filter] duration-300 ease-out group-hover:[filter:drop-shadow(0_8px_28px_rgba(67,32,96,0.08))]';
  /** 1px stroke; left arm has no border-r (avoids a seam next to the web tile — same fill meets flush). Notch edge above the tile uses a short hairline. */
  const lShapeStroke =
    'border-[#e8dfd0] transition-[border-color] duration-300 group-hover:border-[#cfc3b0]';

  return (
    <div className="group relative z-0 h-full w-full transition-[z-index] duration-300 hover:z-10 focus-within:z-10">
      {/* Solid L silhouette + single drop-shadow (uniform depth vs separate per-arm box-shadows). */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 z-0 ${lShapeSilhouetteDropShadow}`}
      >
        <div className="absolute top-0 left-0 h-[505px] w-[304px] rounded-br-none rounded-bl-[24px] rounded-tl-[24px] rounded-tr-[24px] bg-[#ffffff]" />
        <div className="absolute top-[201px] left-[304px] w-[328px] rounded-bl-none rounded-br-[24px] rounded-tl-none rounded-tr-[24px] bg-[#ffffff]" />
      </div>

      <div className="absolute inset-0 z-[1] overflow-hidden rounded-bl-[24px] rounded-br-[24px]">
        <Link
          to={project.to}
          className="absolute inset-0 z-10 block rounded-bl-[24px] rounded-br-[24px] outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#845482] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f2eb]"
        >
          <div
            className={`absolute top-0 left-0 z-[2] flex h-[505px] w-[304px] items-center justify-center overflow-clip rounded-br-none border-t-[1px] border-l-[1px] border-b-[1px] border-r-0 border-solid bg-[#ffffff] pb-8 pt-[54px] rounded-bl-[24px] rounded-tl-[24px] rounded-tr-[24px] ${lShapeStroke}`}
            data-node-id="450:17048"
          >
            {/* Outer edge in the notch only (above the web tile). No full-height border-r so the web arm meets flush. */}
            <div
              aria-hidden
              className="pointer-events-none absolute top-0 right-0 z-[2] h-[201px] w-px bg-[#e8dfd0] transition-colors group-hover:bg-[#cfc3b0]"
            />
        <div className="relative aspect-[698/1390] h-full max-h-full shrink-0 rounded-[32px]">
          <img
            alt=""
            src={imgInfoLShapePhone}
            className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[32px] object-cover"
          />
        </div>
        <div
          className={`absolute left-[23px] top-[23px] flex h-[24px] items-start rounded-full px-3 py-1 ${project.pillBg}`}
        >
          <p
            className={`font-['DM_Sans:Medium',sans-serif] text-[12px] font-medium leading-[16px] ${project.pillText}`}
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            {project.tag}
          </p>
        </div>
          </div>

          <div
            className={`absolute top-[201px] left-[304px] z-[2] w-[328px] rounded-bl-none rounded-br-[24px] rounded-tl-none rounded-tr-[24px] border-b-[1px] border-r-[1px] border-t-[1px] border-solid bg-[#ffffff] pr-6 ${lShapeStroke}`}
            data-node-id="450:17052"
          >
            <div
              className="relative flex h-[304px] w-full items-center justify-center overflow-hidden rounded-br-[24px] rounded-tl-none rounded-tr-[24px]"
              data-node-id="516:21330"
            >
              {/* Figma 516:21324 / 522:21751 — web (right) arm: compact laptop + prototype video */}
              <CompactLaptopVideoFrame
                posterSrc={lShapeWebPosterSrc}
                videoSrc={project.lShapeWebVideoSrc ?? '/videos/info-2300-web.mp4'}
                baseVariant="info-l-shape"
                className="pointer-events-none"
              />
            </div>
            <div
              className={`absolute bottom-[20px] left-[265px] flex size-[40px] shrink-0 items-center justify-center rounded-full transition-opacity duration-550 ease-in-out motion-reduce:transition-none group-hover:opacity-0 group-focus-within:opacity-0 ${project.arrowSmallBg}`}
            >
              <span
                className={`inline-flex size-[40px] items-center justify-center font-['DM_Sans:9pt_Regular',sans-serif] text-[12px] font-normal leading-none ${project.arrowSmallText}`}
                style={{ fontVariationSettings: "'opsz' 9" }}
              >
                →
              </span>
            </div>
          </div>

          <div
            className={`absolute right-0 bottom-0 left-0 z-[20] translate-y-full rounded-bl-[24px] rounded-br-[24px] border-t border-solid border-[#e8dfd0] bg-[#ffffff] pt-6 pr-6 pb-[20px] pl-0 ${portfolioFooterSlideMotion} group-hover:translate-y-0 group-hover:border-[#cfc3b0] group-focus-within:translate-y-0 group-focus-within:border-[#cfc3b0]`}
          >
            <div className="relative">
              <div className="flex max-w-[min(520px,calc(100%-7rem))] min-w-0 flex-col gap-3 pb-2 pl-6">
                <p
                  className={`font-['DM_Sans:SemiBold',sans-serif] text-[18px] font-semibold leading-[28px] ${project.footerAccent}`}
                  style={{ fontVariationSettings: "'opsz' 14" }}
                >
                  {project.title}
                </p>
                <p
                  className="font-['DM_Sans:9pt_Regular',sans-serif] text-[14px] font-normal leading-[20px] text-[#6b6b6b]"
                  style={{ fontVariationSettings: "'opsz' 9" }}
                >
                  {project.subtitle}
                </p>
              </div>
              <div
                className={`absolute bottom-0 left-[569px] flex size-[40px] shrink-0 items-center justify-center rounded-full opacity-0 transition-opacity duration-550 ease-in-out motion-reduce:transition-none group-hover:opacity-100 group-focus-within:opacity-100 ${project.arrowSmallBg}`}
              >
                <span
                  className={`inline-flex size-[40px] items-center justify-center font-['DM_Sans:9pt_Regular',sans-serif] text-[12px] font-normal leading-none ${project.arrowSmallText}`}
                  style={{ fontVariationSettings: "'opsz' 9" }}
                >
                  →
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

/** Development filter — same content as INFO 2300 on “All” (L card), one rectangle: no seam, one pill, one footer strip. */
function DevelopmentUnifiedCard({ project }: { project: HomeProject }) {
  const lShapeWebPosterSrc =
    project.lShapeWebVideoPosterSrc === false
      ? undefined
      : (project.lShapeWebVideoPosterSrc ?? imgInfoLShapeWeb);

  return (
    <div className="group relative z-0 h-full w-full transition-[z-index] duration-300 hover:z-10 focus-within:z-10">
      <div className="absolute inset-0 overflow-hidden rounded-[24px]">
        <Link
          to={project.to}
          className={`absolute inset-0 z-10 block overflow-hidden rounded-[24px] ${portfolioTileChrome}`}
        >
          <div className="absolute inset-0 flex min-h-0 min-w-0 flex-col bg-[#ffffff] sm:flex-row">
            <div
              className="relative z-[2] flex h-[min(240px,40vh)] w-full shrink-0 items-center justify-center overflow-clip bg-[#ffffff] pt-8 pb-4 sm:h-full sm:w-[304px] sm:pb-8 sm:pt-[54px]"
              data-node-id="450:18303-phone"
            >
              <div className="relative aspect-[698/1390] h-full max-h-full shrink-0 rounded-[32px]">
                <img
                  alt=""
                  src={imgDevPhone}
                  className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[32px] object-cover object-center"
                />
              </div>
              <div
                className={`absolute left-[23px] top-[23px] flex h-[24px] items-start rounded-full px-3 py-1 ${project.pillBg}`}
              >
                <p
                  className={`font-['DM_Sans:Medium',sans-serif] text-[12px] font-medium leading-[16px] ${project.pillText}`}
                  style={{ fontVariationSettings: "'opsz' 14" }}
                >
                  {project.tag}
                </p>
              </div>
            </div>

            <div
              className="relative z-[2] flex h-full min-h-0 min-w-0 flex-1 flex-col items-center justify-center overflow-hidden bg-[#ffffff] px-2 pr-4 sm:pr-6"
              data-node-id="450:18303-laptop"
            >
              {/* Figma 522:21734 — laptop frame + embedded video (replaces static mock). */}
              <div className="relative flex min-h-[200px] w-full flex-1 items-center justify-center py-2">
                <CompactLaptopVideoFrame
                  posterSrc={lShapeWebPosterSrc}
                  videoSrc={
                    project.developmentFilterVideoSrc ?? project.lShapeWebVideoSrc ?? '/videos/info-2300-web.mp4'
                  }
                  baseVariant="info-l-shape"
                  sizePreset="developmentUnified"
                  className="pointer-events-none"
                />
              </div>
              <div
                className={`absolute right-[23px] bottom-[33px] flex size-[40px] shrink-0 items-center justify-center rounded-full transition-opacity duration-550 ease-in-out motion-reduce:transition-none group-hover:opacity-0 group-focus-within:opacity-0 ${project.arrowSmallBg}`}
              >
                <span
                  className={`inline-flex size-[40px] items-center justify-center font-['DM_Sans:9pt_Regular',sans-serif] text-[12px] font-normal leading-none ${project.arrowSmallText}`}
                  style={{ fontVariationSettings: "'opsz' 9" }}
                >
                  →
                </span>
              </div>
            </div>
          </div>

          <div
            className={`absolute right-0 bottom-0 left-0 z-[20] translate-y-full rounded-bl-[24px] rounded-br-[24px] border-t border-solid border-[#e8dfd0] bg-[#ffffff] pl-6 pt-6 pr-[23px] pb-[33px] ${portfolioFooterSlideMotion} group-hover:translate-y-0 group-hover:border-[#cfc3b0] group-focus-within:translate-y-0 group-focus-within:border-[#cfc3b0]`}
          >
            <div className="relative">
              <div className="flex min-w-0 flex-col gap-3 pb-2 pr-14">
                <p
                  className={`font-['DM_Sans:SemiBold',sans-serif] text-[18px] font-semibold leading-[28px] ${project.footerAccent}`}
                  style={{ fontVariationSettings: "'opsz' 14" }}
                >
                  {project.title}
                </p>
                <p
                  className="font-['DM_Sans:9pt_Regular',sans-serif] text-[14px] font-normal leading-[20px] text-[#6b6b6b]"
                  style={{ fontVariationSettings: "'opsz' 9" }}
                >
                  {project.subtitle}
                </p>
              </div>
              <div
                className={`absolute right-0 bottom-0 flex size-[40px] shrink-0 items-center justify-center rounded-full opacity-0 transition-opacity duration-550 ease-in-out motion-reduce:transition-none group-hover:opacity-100 group-focus-within:opacity-100 ${project.arrowSmallBg}`}
              >
                <span
                  className={`inline-flex size-[40px] items-center justify-center font-['DM_Sans:9pt_Regular',sans-serif] text-[12px] font-normal leading-none ${project.arrowSmallText}`}
                  style={{ fontVariationSettings: "'opsz' 9" }}
                >
                  →
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

/** Figma node 450:17185 — Product Design filter */
function BentoProductDesign() {
  const act = projectById('act');
  const capitalOne = projectById('capital-one');
  const rethink = projectById('rethink-food');
  const cmsx = projectById('cmsx');

  const productDesktopSlots = [
    'absolute left-0 top-0 h-[608px] w-[304px]',
    'absolute left-[328px] top-0 size-[304px]',
    'absolute left-[656px] top-0 size-[304px]',
    'absolute left-[328px] top-[328px] h-[280px] w-[614px]',
  ] as const;

  return (
    <>
      <SoftAppearStagger
        className="mx-auto flex w-full max-w-[960px] flex-col gap-4 lg:hidden"
        itemClassName={CASE_STUDY_VERTICAL_STAGGER_ITEM}
        staggerMs={85}
        variant="subtle"
      >
        <PortfolioCardLink
          project={act}
          className="!relative left-0 top-0 h-[min(608px,85vh)] w-full"
          arrowClassName="bottom-6 right-6"
          footerArrowClassName="bottom-6 right-6"
        />
        <PortfolioCardLink
          project={capitalOne}
          className="!relative left-0 top-0 aspect-square w-full"
          arrowClassName="bottom-6 right-6"
          footerArrowClassName="bottom-6 right-6"
        />
        <PortfolioCardLink
          project={rethink}
          className="!relative left-0 top-0 aspect-square w-full"
          arrowClassName="bottom-6 right-6"
          footerArrowClassName="bottom-6 right-6"
        />
        <PortfolioCardLink
          project={cmsx}
          className="!relative left-0 top-0 h-[280px] w-full"
          arrowClassName="right-6 top-6"
          footerArrowClassName="right-6 bottom-6"
          cmsxVariant="productBentoWide"
        />
      </SoftAppearStagger>
      <SoftAppearStagger
        className="relative mx-auto hidden h-[608px] w-full max-w-[960px] shrink-0 lg:block"
        itemClassName={(i) => productDesktopSlots[i] ?? ''}
        staggerMs={75}
        variant="subtle"
      >
        <PortfolioCardLink
          project={act}
          className="!relative left-0 top-0 h-full w-full"
          arrowClassName="left-[242px] top-[547px]"
          footerArrowClassName="left-[242px] bottom-[21px]"
        />
        <PortfolioCardLink
          project={capitalOne}
          className="!relative left-0 top-0 h-full w-full"
          arrowClassName="left-[245px] top-[245px]"
          footerArrowClassName="left-[245px] bottom-[19px]"
        />
        <PortfolioCardLink
          project={rethink}
          className="!relative left-0 top-0 h-full w-full"
          arrowClassName="left-[245px] top-[245px]"
          footerArrowClassName="left-[245px] bottom-[19px]"
        />
        <PortfolioCardLink
          project={cmsx}
          className="!relative left-0 top-0 h-full w-full"
          arrowClassName="right-6 top-[223px]"
          footerArrowClassName="right-6 bottom-[17px]"
          cmsxVariant="productBentoWide"
        />
      </SoftAppearStagger>
    </>
  );
}

/** Figma node 450:18144 — Data Science filter */
function BentoDataScience() {
  const kenvueData = projectById('kenvue-data');
  const rethink = projectById('rethink-food');
  const cmsx = projectById('cmsx');

  const dataScienceDesktopSlots = [
    'absolute left-0 top-0 h-[318px] w-[469px]',
    'absolute left-[491px] top-0 h-[318px] w-[469px]',
    'absolute left-0 top-[343px] h-[493px] w-full max-w-[960px]',
  ] as const;

  return (
    <>
      <SoftAppearStagger
        className="mx-auto flex w-full max-w-[960px] flex-col gap-4 lg:hidden"
        itemClassName={CASE_STUDY_VERTICAL_STAGGER_ITEM}
        staggerMs={85}
        variant="subtle"
      >
        <PortfolioCardLink
          project={kenvueData}
          className="!relative left-0 top-0 h-[318px] w-full"
          paddedAspectImage
          arrowClassName="bottom-6 right-6"
          footerArrowClassName="bottom-6 right-6"
        />
        <PortfolioCardLink
          project={rethink}
          className="!relative left-0 top-0 h-[318px] w-full"
          pillOuterClassName="absolute left-[23px] top-[23px] flex h-[24px] items-start rounded-full bg-[#ffefca] px-3 py-1"
          arrowCircleOuterClassName="absolute flex size-[40px] shrink-0 items-center justify-center rounded-full bg-[#ffefca]"
          arrowClassName="bottom-6 right-6"
          footerArrowClassName="bottom-6 right-6"
          heroCompactClassName="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          compactSizePreset="dataScienceTile"
        />
        <PortfolioCardLink
          project={cmsx}
          className="!relative left-0 top-0 h-[min(493px,80vh)] w-full"
          arrowClassName="right-6 bottom-24"
          cmsxVariant="dataScienceHero"
        />
      </SoftAppearStagger>
      <SoftAppearStagger
        className="relative mx-auto hidden h-[836px] w-full max-w-[960px] shrink-0 lg:block"
        itemClassName={(i) => dataScienceDesktopSlots[i] ?? ''}
        staggerMs={75}
        variant="subtle"
      >
        <PortfolioCardLink
          project={kenvueData}
          className="!relative left-0 top-0 h-full w-full"
          paddedAspectImage
          arrowClassName="left-[397px] top-[253px]"
          footerArrowClassName="left-[397px] bottom-[25px]"
        />
        <PortfolioCardLink
          project={rethink}
          className="!relative left-0 top-0 h-full w-full"
          pillOuterClassName="absolute left-[23px] top-[23px] flex h-[24px] items-start rounded-full bg-[#ffefca] px-3 py-1"
          arrowCircleOuterClassName="absolute flex size-[40px] shrink-0 items-center justify-center rounded-full bg-[#ffefca]"
          arrowClassName="left-[401px] top-[249px]"
          footerArrowClassName="left-[401px] bottom-[29px]"
          heroCompactClassName="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          compactSizePreset="dataScienceTile"
        />
        <PortfolioCardLink
          project={cmsx}
          className="!relative left-0 top-0 h-full w-full"
          arrowClassName="right-6 top-[429px]"
          cmsxVariant="dataScienceHero"
        />
      </SoftAppearStagger>
    </>
  );
}

/** Figma node 450:18303 — Development filter */
function BentoDevelopment() {
  const info = projectById('info-2300');

  return (
    <SoftAppearOnce className="relative mx-auto h-[505px] w-full max-w-[960px] shrink-0">
      <DevelopmentUnifiedCard project={info} />
    </SoftAppearOnce>
  );
}

function BentoAll() {
  const act = projectById('act');
  const capitalOne = projectById('capital-one');
  const rethink = projectById('rethink-food');
  const cmsx = projectById('cmsx');
  const info = projectById('info-2300');
  const kenvueData = projectById('kenvue-data');

  const allDesktopSlots = [
    'absolute left-0 top-0 h-[608px] w-[304px]',
    'absolute left-[328px] top-0 size-[304px]',
    'absolute left-[656px] top-0 size-[304px]',
    'absolute left-[328px] top-[328px] h-[472px] w-[632px]',
    'absolute left-0 top-[632px] h-[505px] w-[632px]',
    'absolute left-[656px] top-[833px] size-[304px]',
  ] as const;

  return (
    <>
      <SoftAppearStagger
        className="flex w-full flex-col gap-4 lg:hidden"
        itemClassName={CASE_STUDY_VERTICAL_STAGGER_ITEM}
        staggerMs={85}
        variant="subtle"
      >
        <PortfolioCardLink
          project={act}
          className="!relative left-0 top-0 h-[min(608px,85vh)] w-full"
          arrowClassName="bottom-6 right-6"
        />
        <PortfolioCardLink
          project={capitalOne}
          className="!relative left-0 top-0 aspect-square w-full"
          arrowClassName="bottom-6 right-6"
        />
        <PortfolioCardLink
          project={rethink}
          className="!relative left-0 top-0 aspect-square w-full"
          arrowClassName="bottom-6 right-6"
        />
        <PortfolioCardLink
          project={cmsx}
          className="!relative left-0 top-0 h-[min(472px,70vh)] w-full"
          arrowClassName="right-6 bottom-6"
          cmsxVariant="productBentoWide"
        />
        <div className="h-[505px] w-full min-w-0 max-w-full shrink-0">
          <DevelopmentUnifiedCard project={info} />
        </div>
        <PortfolioCardLink
          project={kenvueData}
          className="!relative left-0 top-0 aspect-square w-full"
          paddedAspectImage
          roundedClassName="rounded-[24px]"
          arrowClassName="bottom-6 right-6"
        />
      </SoftAppearStagger>

      <SoftAppearStagger
        className="relative hidden h-[1137px] w-full shrink-0 lg:block"
        itemClassName={(i) => allDesktopSlots[i] ?? ''}
        staggerMs={70}
        variant="subtle"
      >
        <PortfolioCardLink
          project={act}
          className="!relative left-0 top-0 h-full w-full"
          arrowClassName="left-[242px] top-[547px]"
        />
        <PortfolioCardLink
          project={capitalOne}
          className="!relative left-0 top-0 h-full w-full"
          arrowClassName="left-[245px] top-[245px]"
        />
        <PortfolioCardLink
          project={rethink}
          className="!relative left-0 top-0 h-full w-full"
          arrowClassName="left-[245px] top-[245px]"
        />
        <PortfolioCardLink
          project={cmsx}
          className="!relative left-0 top-0 h-full w-full"
          arrowClassName="right-6 bottom-6"
          cmsxVariant="productBentoWide"
        />

        <div className="h-full w-full min-h-0 min-w-0">
          <PortfolioLShapeInfoAllCard project={info} />
        </div>

        <PortfolioCardLink
          project={kenvueData}
          className="!relative left-0 top-0 h-full w-full"
          paddedAspectImage
          roundedClassName="rounded-[24px]"
          arrowClassName="left-[245px] top-[245px]"
        />
      </SoftAppearStagger>
    </>
  );
}

export default function PersonalWebsiteDesignPortfolio() {
  const { pathname } = useLocation();
  const homeNav = isHomeNavActive(pathname);
  const workNav = isWorkNavActive(pathname);
  const [searchParams, setSearchParams] = useSearchParams();
  const initial = searchParams.get('filter') as WorkFilterId | null;
  const validInitial =
    initial && WORK_FILTER_CHIPS.some((c) => c.id === initial) ? initial : 'all';

  const [filter, setFilter] = useState<WorkFilterId>(validInitial);

  useEffect(() => {
    const q = searchParams.get('filter') as WorkFilterId | null;
    if (q && WORK_FILTER_CHIPS.some((c) => c.id === q)) {
      setFilter(q);
    }
  }, [searchParams]);

  const setFilterAndUrl = (next: WorkFilterId) => {
    setFilter(next);
    if (next === 'all') {
      setSearchParams({}, { replace: true });
    } else {
      setSearchParams({ filter: next }, { replace: true });
    }
  };

  return (
    <div
      className="content-stretch relative flex w-full min-w-0 flex-col items-center justify-center"
      data-node-id="450:16955"
      data-name="Personal Website Design Portfolio"
    >
      <div
        className="bg-[#f5f2eb] content-stretch relative flex w-full max-w-[1056px] shrink-0 flex-col items-start"
        data-node-id="450:16956"
        data-name="RootLayout"
      >
        <div className="relative w-full min-w-0 shrink-0 bg-[#f5f2eb]" data-node-id="450:16957" data-name="Home">
          <div className="relative flex flex-col gap-12 border-0 border-transparent bg-clip-padding pb-12 pt-[128px] sm:gap-[96px] sm:pb-[96px] px-4 sm:px-8 md:px-12 lg:px-[48px]">
            <SoftAppearOnce
              className="relative w-full max-w-[960px] shrink-0 overflow-clip rounded-[24px] bg-[#e3dfd6] p-6 shadow-[0_1px_3px_rgba(44,37,32,0.05),0_6px_28px_rgba(44,37,32,0.06)] sm:p-8 md:p-12"
              data-node-id="450:16958"
              data-name="Section"
            >
              <div
                className="relative flex w-full min-w-0 shrink-0 flex-col items-stretch gap-6 md:flex-row md:gap-8 lg:items-center lg:gap-[32px]"
                data-node-id="450:16959"
                data-name="Container"
              >
                <div
                  className="relative flex min-h-px w-full min-w-0 flex-col items-start gap-8 md:flex-[1_1_0] sm:gap-[60px]"
                  data-node-id="450:16960"
                  data-name="Container"
                >
                  <div
                    className="relative flex w-full min-w-0 shrink-0 flex-col items-start gap-[24px]"
                    data-node-id="450:16961"
                  >
                    <div
                      className="relative flex w-full min-w-0 shrink-0 items-center justify-center"
                      data-node-id="450:16962"
                      data-name="Home"
                    >
                      <p
                        className="font-['Libre_Baskerville:Italic',sans-serif] relative min-h-px min-w-0 w-full text-center text-[clamp(2rem,7.5vw,4.25rem)] italic leading-[1.08] text-[#432060] md:text-left"
                        data-node-id="450:16963"
                      >
                        Jessica Andrews
                      </p>
                    </div>
                    <div className="relative min-h-0 w-full min-w-0 shrink-0" data-node-id="450:16964" data-name="Home">
                      <p
                        className="font-['DM_Sans:9pt_Regular',sans-serif] relative left-0 top-[-0.5px] w-full max-w-[36rem] text-[17px] font-normal leading-[1.6] text-[#2d2d2d] md:text-[18px] md:leading-[29.25px]"
                        data-node-id="450:16965"
                        style={{ fontVariationSettings: "'opsz' 9" }}
                      >
                        Building thoughtful, scalable products that simplify complex systems and create intuitive,
                        human-centered experiences
                      </p>
                    </div>
                  </div>
                  <a
                    href={RESUME_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative shrink-0 self-center rounded-[16777200px] bg-[#432060] px-[40px] py-[10px] md:self-start"
                    data-node-id="450:16966"
                    data-name="Home"
                  >
                    <p
                      className="font-['DM_Sans:Medium',sans-serif] relative shrink-0 text-center text-[16px] font-medium leading-[24px] text-[#fdfcfb] sm:whitespace-nowrap"
                      data-node-id="450:16967"
                      style={{ fontVariationSettings: "'opsz' 14" }}
                    >
                      Resume
                    </p>
                  </a>
                </div>
                <div
                  className="relative aspect-[16/10] min-h-[220px] w-full min-w-0 max-h-[340px] overflow-hidden rounded-[16px] md:max-h-[420px] md:flex-[1_1_0] md:aspect-[4/3] md:min-h-[280px] lg:h-[408px] lg:max-h-[408px] lg:aspect-auto"
                  data-node-id="450:16968"
                  data-name="Container"
                >
                  <img
                    alt=""
                    className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[16px] object-cover"
                    src={imgHero}
                  />
                </div>
              </div>
            </SoftAppearOnce>
            <div
              className="relative flex w-full max-w-[960px] shrink-0 flex-col gap-[48px] overflow-clip py-5 sm:py-6 lg:py-8"
              data-node-id="450:16969"
              data-name="Section"
            >
              <div
                className="relative flex min-h-[40px] w-full shrink-0 items-center justify-center px-1"
                data-node-id="450:16970"
                data-name="Container"
              >
                <div className="relative min-h-[40px] w-full max-w-[286px] shrink-0 text-center sm:max-w-none" data-node-id="450:16971" data-name="Heading 2">
                  <div className="relative w-full border-0 border-transparent bg-clip-padding">
                    <p
                      className="font-['Libre_Baskerville:Italic',sans-serif] relative left-0 top-[-0.5px] text-[clamp(1.5rem,5vw,2.25rem)] italic leading-tight text-[#845482] sm:whitespace-nowrap"
                      data-node-id="450:16972"
                    >
                      Where I’ve Been
                    </p>
                  </div>
                </div>
              </div>
              <SoftAppearStagger
                className="relative flex min-h-[100px] w-full shrink-0 flex-col items-center justify-center gap-6 rounded-[100px] px-4 py-4 sm:flex-row sm:gap-8 sm:px-6 sm:py-0 md:gap-12 md:px-10 lg:gap-[128px] lg:px-[54px]"
                staggerMs={170}
                initialDelayMs={220}
                itemClassName="flex min-h-px w-full min-w-0 shrink-0 justify-center sm:flex-1 sm:shrink sm:basis-0"
                data-node-id="450:16973"
              >
                <div className="relative aspect-[3840/2160] w-full max-w-[180px] min-w-0 sm:max-w-[190px] md:max-w-[220px] lg:max-w-[320px]" data-node-id="450:16974">
                  <RemoteLogo
                    alt="Capital One logo"
                    fallbackClassName="absolute inset-0 flex items-center justify-center text-center font-['DM_Sans:SemiBold',sans-serif] text-[clamp(1rem,2.4vw,2rem)] font-semibold tracking-[0.06em] text-[#6b2133]"
                    fallbackLabel="Capital One"
                    imgClassName="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
                    src={imgC1Logo1}
                  />
                </div>
                <div className="relative aspect-[174/118] w-full max-w-[124px] min-w-0 sm:max-w-[132px] md:max-w-[160px] lg:max-w-[240px]" data-node-id="450:16975">
                  <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <RemoteLogo
                      alt="Kenvue logo"
                      fallbackClassName="absolute inset-0 flex items-center justify-center text-center font-['DM_Sans:SemiBold',sans-serif] text-[clamp(0.9rem,2vw,1.5rem)] font-semibold tracking-[0.08em] text-[#2d2d2d]"
                      fallbackLabel="KENVUE"
                      imgClassName="absolute top-[0.16%] left-[-22.41%] h-[99.68%] max-w-none w-[144.86%]"
                      src={imgKenvueLogoBlackRgbSvg1}
                    />
                  </div>
                </div>
                <div className="relative flex w-full min-w-0 flex-col items-center overflow-clip" data-node-id="450:16976">
                  <div className="relative mx-auto aspect-[234/40.304] w-full max-w-[335px] shrink-0 sm:max-w-[250px] md:max-w-[280px] lg:max-w-[315px]" data-node-id="450:16977">
                    <img
                      alt="American National logo"
                      className="absolute inset-0 block size-full max-w-none object-contain"
                      src={imgAmericanNationalLogo}
                    />
                  </div>
                </div>
              </SoftAppearStagger>
              <div className="h-px w-full shrink-0 border-t border-solid border-[#ddd8d0]" data-node-id="450:17003" />
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-[#f5f2eb] content-stretch relative flex w-full max-w-[1056px] shrink-0 flex-col items-start gap-[48px] px-4 pb-24 sm:px-8 md:px-12 lg:px-[48px] lg:pb-[128px]"
        data-node-id="450:17004"
        data-name="Portfolio"
      >
        <div className="relative flex w-full min-w-0 shrink-0 flex-col items-start gap-12 sm:gap-[96px]" data-node-id="450:17005">
          <SoftAppearOnce className="relative min-h-[60px] w-full max-w-[960px] shrink-0 px-2" data-node-id="450:17006">
            <p
              className="font-['Libre_Baskerville:Italic',sans-serif] relative left-1/2 top-0 w-full -translate-x-1/2 text-center text-[clamp(2rem,6vw,3.75rem)] italic leading-[1.15] text-[#432060] sm:whitespace-nowrap"
              data-node-id="450:17007"
            >
              My Work
            </p>
          </SoftAppearOnce>
          <div className="relative flex w-full min-w-0 shrink-0 flex-col items-stretch gap-4 sm:flex-row sm:items-start sm:justify-center sm:gap-[24px]" data-node-id="450:17008">
            <SoftAppearStagger
              className="relative flex min-h-[36px] shrink-0 flex-wrap items-center justify-center gap-[12px] sm:min-w-0 sm:flex-1"
              data-node-id="450:17009"
              role="tablist"
              aria-label="Filter projects"
              itemClassName="shrink-0"
              staggerMs={90}
              initialDelayMs={80}
              variant="subtle"
            >
              {WORK_FILTER_CHIPS.map(({ id, label }) => {
                const active = filter === id;
                return (
                  <button
                    key={id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setFilterAndUrl(id)}
                    className={`relative shrink-0 cursor-pointer rounded-full px-[15px] py-2 shadow-[0_1px_2px_rgba(44,37,32,0.05),0_2px_10px_rgba(44,37,32,0.05)] transition-[color,background-color,box-shadow] ${
                      active ? 'bg-[#845482]' : 'bg-[#ffffff]'
                    }`}
                  >
                    <span
                      className={`font-['DM_Sans:Medium',sans-serif] text-center text-[14px] font-medium leading-[20px] sm:whitespace-nowrap ${
                        active ? 'text-[#ffffff]' : 'text-[#2d2d2d]'
                      }`}
                      style={{ fontVariationSettings: "'opsz' 14" }}
                    >
                      {label}
                    </span>
                  </button>
                );
              })}
            </SoftAppearStagger>
            <div className="relative flex h-[40px] shrink-0 items-center justify-center sm:absolute sm:right-0 sm:top-1/2 sm:justify-end sm:-translate-y-1/2">
              <Link
                to="/work"
                className="font-['DM_Sans:Medium',sans-serif] text-[16px] font-medium leading-[24px] text-[#2c5f7f] underline decoration-solid"
                style={{ fontVariationSettings: "'opsz' 14" }}
              >
                See More →{' '}
              </Link>
            </div>
          </div>
        </div>

        <SoftAppearOnce className="relative w-full shrink-0 flex-col items-start" data-node-id="450:17020">
          {filter === 'all' ? (
            <BentoAll />
          ) : filter === 'product-design' ? (
            <BentoProductDesign />
          ) : filter === 'data-science' ? (
            <BentoDataScience />
          ) : (
            <BentoDevelopment />
          )}
        </SoftAppearOnce>
      </div>

      <div
        className="absolute top-0 left-1/2 z-10 flex h-[81px] w-screen max-w-none -translate-x-1/2 flex-col items-stretch border-b border-solid border-[#e8dfd0] bg-[#f5f2eb] pb-px"
        data-node-id="450:17064"
        data-name="Navigation"
      >
        <div className="relative mx-auto flex h-[80px] w-full max-w-[1056px] shrink-0 items-center justify-between px-4 sm:px-8 md:px-12 lg:px-[64px]">
          <Link to="/home" className="relative h-[40px] shrink-0">
            <div className="flex size-full items-center gap-3 border-0 border-transparent bg-clip-padding">
              <div className="relative size-[40px] shrink-0 rounded-full bg-[#432060]">
                <div className="flex size-full items-center justify-center px-[14.82px]">
                  <p
                    className="font-['Georgia:Italic',sans-serif] text-[20px] leading-[28px] text-[#fdfcfb] not-italic"
                    data-node-id="450:17069"
                  >
                    J
                  </p>
                </div>
              </div>
              <p
                className="font-['Georgia:Italic',sans-serif] text-[24px] leading-[32px] text-[#432060] italic"
                data-node-id="450:17071"
              >
                Jess
              </p>
            </div>
          </Link>
          <nav
            className="relative flex h-[40px] shrink-0 items-center justify-end gap-8"
            aria-label="Primary"
          >
            <Link
              to="/home"
              className={mainNavInlineClass(homeNav)}
              style={{ fontVariationSettings: "'opsz' 14" }}
            >
              Home
            </Link>
            <Link
              to="/work"
              className={mainNavInlineClass(workNav)}
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
