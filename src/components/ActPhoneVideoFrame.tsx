import { useEffect, useRef, useState } from 'react';

type Props = {
  posterSrc?: string;
  videoSrc?: string;
  /** Extra classes on the outer Figma wrapper (e.g. pointer-events). */
  className?: string;
  /**
   * Figma 522:21978 / 522:21979 — My Work expanded card (`450:17877`): 147×300, centered.
   * Figma 522:21890 — case study prototype (`450:21041`): 225px frame reads too tall vs 417px field;
   *   use `caseStudyPrototype` (~165px) so the full device fits with breathing room in the slate.
   * Default: 522:21490 — 225px wide, aspect 644:1312 (home tile).
   */
  variant?: 'default' | 'workExpanded' | 'caseStudyPrototype';
};

/**
 * Figma 516:21299 / 522:21490 — centered phone frame, aspect 644:1312, 225px wide, video in rounded screen.
 */
export function ActPhoneVideoFrame({
  posterSrc,
  videoSrc = '/videos/act-prototype.mp4',
  className = '',
  variant = 'default',
}: Props) {
  const [usePosterOnly, setUsePosterOnly] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (usePosterOnly) return;
    const el = videoRef.current;
    if (!el) return;
    const run = () => {
      void el.play().catch(() => {});
    };
    run();
    el.addEventListener('loadeddata', run);
    return () => el.removeEventListener('loadeddata', run);
  }, [usePosterOnly, videoSrc]);

  const expanded = variant === 'workExpanded';
  const caseStudy = variant === 'caseStudyPrototype';

  return (
    <div
      className={`-translate-x-1/2 -translate-y-1/2 !absolute flex content-stretch items-center ${className} ${
        expanded
          ? 'top-[calc(50%+0.5px)] left-[calc(50%+0.5px)] w-[147px] max-w-[min(147px,calc(100%-32px))]'
          : caseStudy
            ? 'top-[calc(50%+0.27px)] left-[calc(50%+0.5px)] w-[165px] max-w-[min(165px,calc(100%-32px))]'
            : 'top-[calc(50%+0.19px)] left-[calc(50%+0.5px)] w-[225px] max-w-[min(225px,calc(100%-32px))]'
      }`}
      data-node-id={expanded ? '522:21978' : caseStudy ? '522:21890' : '522:21490'}
      data-name="Embed video in phone frame"
    >
      <div
        className={
          expanded
            ? 'h-[300px] w-[147px] shrink-0 overflow-hidden rounded-[32px] bg-black shadow-[0_8px_28px_rgba(0,0,0,0.12)]'
            : 'aspect-[644/1312] min-h-0 min-w-0 flex-[1_0_0] overflow-hidden rounded-[32px] bg-black shadow-[0_8px_28px_rgba(0,0,0,0.12)]'
        }
        data-node-id={expanded ? '522:21979' : caseStudy ? '522:21891' : '522:21491'}
      >
        {!usePosterOnly ? (
          <video
            ref={videoRef}
            className="block size-full object-cover object-top"
            poster={posterSrc || undefined}
            src={videoSrc}
            muted
            playsInline
            loop
            autoPlay
            preload="auto"
            onError={() => setUsePosterOnly(true)}
          />
        ) : posterSrc ? (
          <img alt="" src={posterSrc} className="block size-full object-cover object-top" />
        ) : (
          <div className="size-full bg-[#1a1a1a]" aria-hidden />
        )}
      </div>
    </div>
  );
}
