import { useEffect, useRef, useState } from 'react';

export type CmsxLaptopVariant = 'default' | 'productBentoWide' | 'dataScienceHero';

type Props = {
  posterSrc?: string;
  videoSrc?: string;
  className?: string;
  /** Figma: default home tile; `productBentoWide` 522:21603; `dataScienceHero` 522:21708 */
  variant?: CmsxLaptopVariant;
};

const VARIANT_STYLES: Record<
  CmsxLaptopVariant,
  { lid: string; videoWrap: string; videoBox: string; base: string; nodeLid: string }
> = {
  default: {
    lid: 'h-[256px] w-[416px] max-w-[min(100vw-4rem,416px)]',
    videoWrap: 'absolute top-2 left-2',
    videoBox: 'h-[240px] w-[400px] max-w-[min(calc(100vw-8rem),400px)]',
    base: 'h-[10px] w-[500px] max-w-[min(100vw-2rem,500px)]',
    nodeLid: '522:21476',
  },
  productBentoWide: {
    lid: 'h-[196px] w-[312px] max-w-[min(100vw-4rem,312px)]',
    videoWrap: 'absolute top-2 left-2',
    videoBox: 'h-[180px] w-[300px] max-w-[min(calc(100vw-8rem),300px)]',
    base: 'h-[7px] w-[375px] max-w-[min(100vw-2rem,375px)]',
    nodeLid: '522:21603',
  },
  dataScienceHero: {
    lid: 'h-[316px] w-[516px] max-w-[min(100vw-4rem,516px)]',
    videoWrap: 'absolute top-2 left-2',
    videoBox: 'h-[300px] w-[500px] max-w-[min(calc(100vw-8rem),500px)]',
    base: 'h-[12px] w-[600px] max-w-[min(100vw-2rem,600px)]',
    nodeLid: '522:21708',
  },
};

/**
 * Figma 516:21318 / 522:21474 — laptop + video; variants match filtered bento laptop scales.
 */
export function CmsxLaptopVideoFrame({
  posterSrc,
  videoSrc = '/videos/cmsx-laptop.mp4',
  className = '',
  variant = 'default',
}: Props) {
  const [usePosterOnly, setUsePosterOnly] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const vs = VARIANT_STYLES[variant];

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

  return (
    <div
      className={`flex flex-col items-center justify-center ${className}`}
      data-node-id="522:21474"
      data-name="Embed video in laptop frame"
    >
      <div className="relative flex shrink-0 flex-col items-center" data-node-id="522:21475">
        <div
          className={`relative shrink-0 rounded-tl-[10px] rounded-tr-[10px] bg-black shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] ${vs.lid}`}
          data-node-id={vs.nodeLid}
        >
          <div className={`flex flex-col items-start overflow-clip rounded-[4px] bg-black ${vs.videoWrap}`}>
            <div className="relative flex shrink-0 flex-col items-start overflow-clip">
              <div className={`shrink-0 ${vs.videoBox}`}>
                {!usePosterOnly ? (
                  <video
                    ref={videoRef}
                    className="block size-full bg-black object-cover object-top"
                    poster={posterSrc || undefined}
                    src={videoSrc}
                    muted
                    playsInline
                    loop
                    autoPlay
                    preload="auto"
                    onError={(e) => {
                      if (e.currentTarget.error?.code === 4) setUsePosterOnly(true);
                    }}
                  />
                ) : posterSrc ? (
                  <img alt="" src={posterSrc} className="block size-full object-cover object-top" />
                ) : (
                  <div className="size-full bg-[#1a1a1a]" aria-hidden />
                )}
              </div>
            </div>
          </div>
          <div className="-translate-x-1/2 absolute top-0 left-[calc(50%+0.5px)] flex h-3 w-24 items-center justify-center rounded-bl-[16px] rounded-br-[16px] bg-black px-[46px]">
            <div className="size-1 shrink-0 rounded-full bg-[#1e2939]" aria-hidden />
          </div>
        </div>
        <div
          className={`flex shrink-0 flex-col items-center rounded-bl-[15px] rounded-br-[15px] bg-gradient-to-b from-[#d1d5dc] from-0% via-[#e5e7eb] via-50% to-[#99a1af] to-100% shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] ${vs.base}`}
        >
          <div className="h-px w-full shrink-0 bg-[rgba(153,161,175,0.5)]" aria-hidden />
        </div>
      </div>
    </div>
  );
}
