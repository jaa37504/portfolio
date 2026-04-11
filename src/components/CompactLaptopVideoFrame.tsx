import { useEffect, useMemo, useRef, useState } from 'react';

type Props = {
  /** Screen-only still; omit when the tile `image` is a full mockup (avoids double frame). */
  posterSrc?: string;
  videoSrc: string;
  /** Figma 522:21510 — e.g. `absolute left-1/2 top-[74px] -translate-x-1/2 pointer-events-none` */
  className?: string;
  /** Figma 522:21758 — INFO 2300 L-shape web arm uses 300×6 base; default ReThink tile uses 275×5. */
  baseVariant?: 'default' | 'info-l-shape';
  /** Figma 522:21697 — Data Science filter card: slightly larger laptop than 304px product tile. */
  /** Figma 522:21734 — Development filter INFO 2300 card: 416×256 lid, 400×240 screen, 500×10 base. */
  sizePreset?: 'default' | 'dataScienceTile' | 'developmentUnified';
};

/** Vite `public/` URLs respect `base` in production (e.g. deployed under a subpath). */
function resolvePublicVideoUrl(src: string): string {
  if (/^https?:\/\//.test(src) || src.startsWith('data:')) return src;
  const path = src.startsWith('/') ? src : `/${src}`;
  const base = import.meta.env.BASE_URL;
  if (base === '/') return path;
  return `${base.replace(/\/$/, '')}${path}`;
}

/**
 * Figma 516:21311 / 522:21510 — compact laptop (232×148 lid, 220×132 screen, 275×5 base).
 * Single inset screen (no nested “frame in frame”); matches Cmsx layering (video → notch).
 */
export function CompactLaptopVideoFrame({
  posterSrc,
  videoSrc,
  className = '',
  baseVariant = 'default',
  sizePreset = 'default',
}: Props) {
  const [fallback, setFallback] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const resolvedSrc = useMemo(() => {
    const u = resolvePublicVideoUrl(videoSrc);
    // Large files + `#t=` can fail range requests in some browsers — skip fragment on INFO L web arm.
    if (baseVariant === 'info-l-shape' || sizePreset === 'dataScienceTile' || sizePreset === 'developmentUnified')
      return u;
    return u.includes('#') ? u : `${u}#t=0.001`;
  }, [videoSrc, baseVariant, sizePreset]);

  useEffect(() => {
    if (fallback) return;
    const el = videoRef.current;
    if (!el) return;
    el.load();
  }, [fallback, resolvedSrc]);

  useEffect(() => {
    if (fallback) return;
    const el = videoRef.current;
    if (!el) return;

    const tryPlay = () => {
      void el.play().catch(() => {});
    };

    tryPlay();
    el.addEventListener('loadeddata', tryPlay);
    el.addEventListener('canplay', tryPlay);
    el.addEventListener('playing', tryPlay);

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) tryPlay();
        }
      },
      { root: null, threshold: 0.05, rootMargin: '80px' },
    );
    io.observe(el);

    return () => {
      el.removeEventListener('loadeddata', tryPlay);
      el.removeEventListener('canplay', tryPlay);
      el.removeEventListener('playing', tryPlay);
      io.disconnect();
    };
  }, [fallback, resolvedSrc]);

  const screen = (
    <>
      {!fallback ? (
        <video
          ref={videoRef}
          className="absolute inset-0 block h-full w-full bg-black object-contain object-center"
          poster={posterSrc || undefined}
          src={resolvedSrc}
          muted
          playsInline
          loop
          autoPlay
          preload="auto"
          disablePictureInPicture
          onError={(e) => {
            const code = e.currentTarget.error?.code;
            // Avoid blanking the screen on transient/network hiccups; only swap on unsupported format.
            if (code === 4) setFallback(true);
          }}
        />
      ) : posterSrc ? (
        <img alt="" src={posterSrc} className="absolute inset-0 block h-full w-full object-contain object-center" />
      ) : (
        <div className="absolute inset-0 bg-[#1a1a1a]" aria-hidden />
      )}
    </>
  );

  const ds = sizePreset === 'dataScienceTile';
  const dev = sizePreset === 'developmentUnified';
  const lidClass = dev
    ? 'h-[256px] w-[416px] max-w-[min(416px,calc(100%-16px))]'
    : ds
      ? 'h-[166px] w-[260px] max-w-[min(260px,calc(100%-16px))]'
      : 'h-[148px] w-[232px] max-w-[min(232px,calc(100%-16px))]';
  const screenBoxClass = dev
    ? 'top-[8px] left-[8px] h-[240px] w-[400px]'
    : ds
      ? 'top-[8px] left-[5px] h-[150px] w-[250px]'
      : 'top-[8px] left-[6px] h-[132px] w-[220px]';
  const baseOuter = dev
    ? 'h-[10px] w-[500px] max-w-[min(500px,calc(100vw-2rem))]'
    : baseVariant === 'info-l-shape'
      ? 'h-[6px] w-[300px] max-w-[min(300px,calc(100vw-2rem))]'
      : ds
        ? 'h-[6px] w-[300px] max-w-[min(300px,calc(100vw-2rem))]'
        : 'h-[5px] w-[275px] max-w-[min(275px,calc(100vw-2rem))]';
  const embedNodeId = dev ? '522:21761' : baseVariant === 'info-l-shape' ? '522:21751' : ds ? '522:21695' : '522:21510';
  const chromeShadow =
    baseVariant === 'info-l-shape' && !dev
      ? 'shadow-none'
      : 'shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)]';

  return (
    <div
      className={`flex flex-col items-center justify-center ${className}`}
      data-node-id={embedNodeId}
      data-name="Embed video in laptop frame"
    >
      <div className="relative flex shrink-0 flex-col items-center" data-node-id="522:21511">
        {/* Lid — one bezel; screen is inset (no second “device” wrapper) */}
        <div
          className={`relative shrink-0 rounded-tl-[10px] rounded-tr-[10px] bg-black ${lidClass} ${chromeShadow}`}
          data-node-id="522:21512"
        >
          {/* Video viewport — default 220×132; Data Science tile 250×150 (522:21697) */}
          <div
            className={`absolute overflow-hidden rounded-[4px] bg-black ${screenBoxClass}`}
            data-node-id="522:21513"
          >
            {/* Figma 522:21514 — 220×132 viewport; object-contain preserves aspect ratio (no stretch) */}
            <div className="relative h-full w-full" data-node-id="522:21514">
              {screen}
            </div>
          </div>
          {/* Notch — after screen in DOM so it paints above (same as CmsxLaptopVideoFrame) */}
          <div
            className="-translate-x-1/2 absolute top-0 left-[calc(50%+0.5px)] z-[1] flex h-3 w-24 items-center justify-center rounded-bl-[16px] rounded-br-[16px] bg-black px-[46px]"
            data-node-id="522:21516"
          >
            <div className="size-1 shrink-0 rounded-full bg-[#1e2939]" aria-hidden data-node-id="522:21517" />
          </div>
        </div>
        <div
          className={`flex ${baseOuter} shrink-0 flex-col items-center rounded-bl-[15px] rounded-br-[15px] bg-gradient-to-b from-[#d1d5dc] from-0% via-[#e5e7eb] via-50% to-[#99a1af] to-100% ${chromeShadow}`}
          data-node-id={
            dev ? '522:21769' : baseVariant === 'info-l-shape' ? '522:21758' : ds ? '522:21703' : '522:21518'
          }
        >
          <div className="h-px w-full shrink-0 bg-[rgba(153,161,175,0.5)]" aria-hidden data-node-id="522:21519" />
        </div>
      </div>
    </div>
  );
}
