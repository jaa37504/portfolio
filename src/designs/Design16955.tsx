import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { isHomeNavActive, isWorkNavActive, mainNavInlineClass } from '../mainNav';
import { ActPhoneVideoFrame } from '../components/ActPhoneVideoFrame';
import { CompactLaptopVideoFrame } from '../components/CompactLaptopVideoFrame';
import { SoftAppearOnce, SoftAppearStagger } from '../components/SoftAppear';
import { CmsxLaptopVideoFrame, type CmsxLaptopVariant } from '../components/CmsxLaptopVideoFrame';
import { HOME_PROJECTS, WORK_FILTER_CHIPS, type HomeProject, type WorkFilterId } from '../data/homePortfolio';

const imgHero = 'https://www.figma.com/api/mcp/asset/ab639713-069b-486f-b958-e44a950dd3b1';
const imgC1Logo1 = 'https://www.figma.com/api/mcp/asset/458b6e1f-5830-4f07-aee5-1b738be400e7';
const imgKenvueLogoBlackRgbSvg1 =
  'https://www.figma.com/api/mcp/asset/a3ec4aaa-3f4b-41ab-a2e2-2e2aeb39237f';
const imgGroup2226 = 'https://www.figma.com/api/mcp/asset/cb6a8960-82f5-4271-8db2-7e547cbed0ef';
const RESUME_URL =
  'https://docs.google.com/document/d/1SLLJ9tK3dty8gCpP_CIbc9i40GogWsIow8KUDYBeG1k/edit?usp=sharing';

function projectById(id: string): HomeProject {
  const p = HOME_PROJECTS.find((x) => x.id === id);
  if (!p) throw new Error(`Unknown project ${id}`);
  return p;
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
          <div className="absolute inset-0 flex min-h-0 min-w-0 bg-[#ffffff]">
            <div
              className="relative z-[2] flex h-full w-[304px] shrink-0 items-center justify-center overflow-clip bg-[#ffffff] pb-8 pt-[54px]"
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

  return (
    <div className="relative mx-auto h-[608px] w-full max-w-[960px] shrink-0">
      <PortfolioCardLink
        project={act}
        className="left-0 top-0 h-[608px] w-[304px]"
        arrowClassName="left-[242px] top-[547px]"
        footerArrowClassName="left-[242px] bottom-[21px]"
      />
      <PortfolioCardLink
        project={capitalOne}
        className="left-[328px] top-0 size-[304px]"
        arrowClassName="left-[245px] top-[245px]"
        footerArrowClassName="left-[245px] bottom-[19px]"
      />
      <PortfolioCardLink
        project={rethink}
        className="left-[656px] top-0 size-[304px]"
        arrowClassName="left-[245px] top-[245px]"
        footerArrowClassName="left-[245px] bottom-[19px]"
      />
      <PortfolioCardLink
        project={cmsx}
        className="left-[328px] top-[328px] h-[280px] w-[614px]"
        arrowClassName="right-6 top-[223px]"
        footerArrowClassName="right-6 bottom-[17px]"
        cmsxVariant="productBentoWide"
      />
    </div>
  );
}

/** Figma node 450:18144 — Data Science filter */
function BentoDataScience() {
  const kenvueData = projectById('kenvue-data');
  const rethink = projectById('rethink-food');
  const cmsx = projectById('cmsx');

  return (
    <div className="relative mx-auto h-[836px] w-full max-w-[960px] shrink-0">
      <PortfolioCardLink
        project={kenvueData}
        className="left-0 top-0 h-[318px] w-[469px]"
        paddedAspectImage
        arrowClassName="left-[397px] top-[253px]"
        footerArrowClassName="left-[397px] bottom-[25px]"
      />
      <PortfolioCardLink
        project={rethink}
        className="left-[491px] top-0 h-[318px] w-[469px]"
        pillOuterClassName="absolute left-[23px] top-[23px] flex h-[24px] items-start rounded-full bg-[#ffefca] px-3 py-1"
        arrowCircleOuterClassName="absolute flex size-[40px] shrink-0 items-center justify-center rounded-full bg-[#ffefca]"
        arrowClassName="left-[401px] top-[249px]"
        footerArrowClassName="left-[401px] bottom-[29px]"
        heroCompactClassName="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        compactSizePreset="dataScienceTile"
      />
      <PortfolioCardLink
        project={cmsx}
        className="left-0 top-[343px] h-[493px] w-full max-w-[960px]"
        arrowClassName="right-6 top-[429px]"
        cmsxVariant="dataScienceHero"
      />
    </div>
  );
}

/** Figma node 450:18303 — Development filter */
function BentoDevelopment() {
  const info = projectById('info-2300');

  return (
    <div className="relative mx-auto h-[505px] w-full max-w-[960px] shrink-0">
      <DevelopmentUnifiedCard project={info} />
    </div>
  );
}

function BentoAll() {
  const act = projectById('act');
  const capitalOne = projectById('capital-one');
  const rethink = projectById('rethink-food');
  const cmsx = projectById('cmsx');
  const info = projectById('info-2300');
  const kenvueData = projectById('kenvue-data');

  return (
    <div className="relative h-[1137px] w-full shrink-0">
      <PortfolioCardLink
        project={act}
        className="left-0 top-0 h-[608px] w-[304px]"
        arrowClassName="left-[242px] top-[547px]"
      />
      <PortfolioCardLink
        project={capitalOne}
        className="left-[328px] top-0 size-[304px]"
        arrowClassName="left-[245px] top-[245px]"
      />
      <PortfolioCardLink
        project={rethink}
        className="left-[656px] top-0 size-[304px]"
        arrowClassName="left-[245px] top-[245px]"
      />
      <PortfolioCardLink
        project={cmsx}
        className="left-[328px] top-[328px] h-[472px] w-[632px]"
        arrowClassName="right-6 bottom-6"
        cmsxVariant="productBentoWide"
      />

      <div className="absolute left-0 top-[632px] h-[505px] w-[632px]">
        <PortfolioLShapeInfoAllCard project={info} />
      </div>

      <PortfolioCardLink
        project={kenvueData}
        className="left-[656px] top-[833px] size-[304px]"
        paddedAspectImage
        roundedClassName="rounded-[24px]"
        arrowClassName="left-[245px] top-[245px]"
      />
    </div>
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
      className="content-stretch relative flex flex-col items-start justify-center"
      data-node-id="450:16955"
      data-name="Personal Website Design Portfolio"
    >
      <div
        className="bg-[#f5f2eb] content-stretch relative flex w-[1056px] shrink-0 flex-col items-start"
        data-node-id="450:16956"
        data-name="RootLayout"
      >
        <div className="relative shrink-0 bg-[#f5f2eb]" data-node-id="450:16957" data-name="Home">
          <div className="relative flex flex-col gap-[96px] border-0 border-transparent bg-clip-padding pb-[96px] pl-[48px] pr-[48px] pt-[128px]">
            <div
              className="relative w-[960px] shrink-0 overflow-clip rounded-[24px] bg-[#e3dfd6] p-[48px] shadow-[0_1px_3px_rgba(44,37,32,0.05),0_6px_28px_rgba(44,37,32,0.06)]"
              data-node-id="450:16958"
              data-name="Section"
            >
              <div
                className="relative flex w-full shrink-0 items-center gap-[32px]"
                data-node-id="450:16959"
                data-name="Container"
              >
                <div
                  className="relative flex min-h-px min-w-px flex-[1_0_0] flex-col items-start gap-[60px]"
                  data-node-id="450:16960"
                  data-name="Container"
                >
                  <div
                    className="relative flex w-full shrink-0 flex-col items-start gap-[24px]"
                    data-node-id="450:16961"
                  >
                    <div
                      className="relative flex w-full shrink-0 items-center justify-center"
                      data-node-id="450:16962"
                      data-name="Home"
                    >
                      <p
                        className="font-['Libre_Baskerville:Italic',sans-serif] relative min-h-px min-w-px flex-[1_0_0] text-[72px] italic leading-[72px] text-[#432060]"
                        data-node-id="450:16963"
                      >
                        Jessica Andrews
                      </p>
                    </div>
                    <div className="relative h-[87.75px] w-full shrink-0" data-node-id="450:16964" data-name="Home">
                      <p
                        className="font-['DM_Sans:9pt_Regular',sans-serif] absolute left-0 top-[-0.5px] w-[396px] text-[18px] font-normal leading-[29.25px] text-[#2d2d2d]"
                        data-node-id="450:16965"
                        style={{ fontVariationSettings: "'opsz' 9" }}
                      >
                        Designing thoughtful, scalable products that simplify complex systems and create intuitive,
                        human-centered experiences
                      </p>
                    </div>
                  </div>
                  <a
                    href={RESUME_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative shrink-0 rounded-[16777200px] bg-[#432060] px-[40px] py-[10px]"
                    data-node-id="450:16966"
                    data-name="Home"
                  >
                    <p
                      className="font-['DM_Sans:Medium',sans-serif] relative shrink-0 text-center text-[16px] font-medium leading-[24px] text-[#fdfcfb] whitespace-nowrap"
                      data-node-id="450:16967"
                      style={{ fontVariationSettings: "'opsz' 14" }}
                    >
                      Resume
                    </p>
                  </a>
                </div>
                <div
                  className="relative h-[408px] min-h-px min-w-px flex-[1_0_0] rounded-[16px]"
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
            </div>
            <div
              className="relative flex w-[960px] shrink-0 flex-col gap-[48px] overflow-clip py-[24px]"
              data-node-id="450:16969"
              data-name="Section"
            >
              <div
                className="relative flex h-[40px] w-full shrink-0 items-center justify-center"
                data-node-id="450:16970"
                data-name="Container"
              >
                <div className="relative h-[40px] w-[285.844px] shrink-0" data-node-id="450:16971" data-name="Heading 2">
                  <div className="relative size-full border-0 border-transparent bg-clip-padding">
                    <p
                      className="font-['Libre_Baskerville:Italic',sans-serif] absolute left-0 top-[-0.5px] whitespace-nowrap text-[36px] italic leading-[40px] text-[#845482]"
                      data-node-id="450:16972"
                    >
                      Where I’ve Been
                    </p>
                  </div>
                </div>
              </div>
              <SoftAppearStagger
                className="relative flex min-h-[100px] w-full shrink-0 flex-col items-center justify-center gap-8 rounded-[100px] px-6 py-4 sm:flex-row sm:gap-[128px] sm:px-[54px] sm:py-0"
                itemClassName={(i) =>
                  i < 2
                    ? 'flex min-h-px min-w-0 flex-[1_0_0] justify-center'
                    : 'flex w-full max-w-[234px] shrink-0 justify-center sm:w-[234px]'
                }
                data-node-id="450:16973"
              >
                <div className="relative aspect-[3840/2160] w-full max-w-[320px] min-w-0 sm:max-w-none" data-node-id="450:16974">
                  <img
                    alt=""
                    className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
                    src={imgC1Logo1}
                  />
                </div>
                <div className="relative aspect-[174/118] w-full max-w-[240px] min-w-0 sm:max-w-none" data-node-id="450:16975">
                  <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <img
                      alt=""
                      className="absolute top-[0.16%] left-[-22.41%] h-[99.68%] max-w-none w-[144.86%]"
                      src={imgKenvueLogoBlackRgbSvg1}
                    />
                  </div>
                </div>
                <div className="relative w-full max-w-[234px] shrink-0 flex-col items-start overflow-clip" data-node-id="450:16976">
                  <div className="relative mx-auto h-[40.304px] w-[min(233.997px,100%)] shrink-0" data-node-id="450:16977">
                    <img alt="" className="absolute inset-0 block size-full max-w-none" src={imgGroup2226} />
                  </div>
                </div>
              </SoftAppearStagger>
              <div className="h-px w-full shrink-0 border-t border-solid border-[#ddd8d0]" data-node-id="450:17003" />
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-[#f5f2eb] content-stretch relative flex w-[1056px] shrink-0 flex-col items-start gap-[48px] px-[48px] pb-[128px]"
        data-node-id="450:17004"
        data-name="Portfolio"
      >
        <div className="relative flex w-full shrink-0 flex-col items-start gap-[96px]" data-node-id="450:17005">
          <div className="relative h-[60px] w-[960px] shrink-0" data-node-id="450:17006">
            <p
              className="font-['Libre_Baskerville:Italic',sans-serif] absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap text-center text-[60px] italic leading-[60px] text-[#432060]"
              data-node-id="450:17007"
            >
              My Work
            </p>
          </div>
          <div className="relative flex w-full shrink-0 items-start justify-center gap-[24px]" data-node-id="450:17008">
            <div
              className="relative flex h-[36px] shrink-0 flex-wrap items-start justify-center gap-[12px]"
              data-node-id="450:17009"
              role="tablist"
              aria-label="Filter projects"
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
                      className={`font-['DM_Sans:Medium',sans-serif] text-[14px] font-medium leading-[20px] whitespace-nowrap ${
                        active ? 'text-[#ffffff]' : 'text-[#2d2d2d]'
                      }`}
                      style={{ fontVariationSettings: "'opsz' 14" }}
                    >
                      {label}
                    </span>
                  </button>
                );
              })}
            </div>
            <div className="absolute right-0 top-1/2 flex h-[40px] -translate-y-1/2 items-center justify-end">
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
        className="absolute top-0 left-1/2 z-10 flex h-[81px] w-full max-w-[1056px] -translate-x-1/2 flex-col items-start border-b border-solid border-[#e8dfd0] bg-[#f5f2eb] px-[64px] pb-px"
        data-node-id="450:17064"
        data-name="Navigation"
      >
        <div className="relative flex h-[80px] w-full shrink-0 items-center justify-between">
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
