import { useEffect, useRef, useState } from 'react';

const STEPS: { lines: string[] }[] = [
  { lines: ['Understand', 'problem space'] },
  { lines: ['Benchmarking'] },
  { lines: ['Ideate (Lo-fi)'] },
  { lines: ['Ideate & refine', '(Mid-fi)'] },
  { lines: ['Validate &', 'iterate (Hi-fi)'] },
  { lines: ['Deliver designs'] },
];

/**
 * Figma 642:22235 — process stepper: connector line + six nodes (5th = half-filled via gradient).
 * Line scales in from the left; dots/labels fade/scale in with stagger (respects reduced motion).
 */
export function CapitalOneProcessTimeline() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setOn(true);
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const staggerMs = (i: number) => (on ? `${60 + i * 130}ms` : '0ms');

  return (
    <div
      ref={rootRef}
      className="content-stretch relative flex min-h-[122px] w-full shrink-0 flex-col items-stretch justify-start overflow-x-auto rounded-[24px] pb-2 pt-6"
      data-node-id="642:22235"
      data-name="Container"
    >
      {/*
        Track wrapper aligns the line with the dots row only (not `justify-center` on the root,
        which had shifted the row down while the line stayed top-anchored).
        13px + 2px line / 2 ≈ 14px = vertical center of 28px dots.
      */}
      <div className="relative w-full min-w-[min(100%,720px)] sm:min-w-0">
        <div className="pointer-events-none absolute top-[13px] right-0 left-0 z-0 h-[2px]" aria-hidden>
          <div
            className={`h-full origin-left bg-[#ddd8d0] motion-reduce:scale-x-100 ${on ? 'motion-safe:scale-x-100' : 'motion-safe:scale-x-0'} motion-safe:duration-[1100ms] motion-safe:ease-out motion-safe:transition-transform`}
          />
        </div>

        <div className="relative z-[1] flex w-full items-start justify-center">
          {STEPS.map((step, i) => (
            <div
              key={i}
              className="content-stretch flex min-h-px min-w-[100px] flex-[1_0_0] flex-col items-center gap-3 self-stretch px-1 sm:min-w-[120px] sm:px-2"
              data-name="Container"
            >
              <TimelineDot index={i} on={on} staggerMs={staggerMs(i)} />
              <div className="content-stretch flex max-w-[680px] flex-col items-center px-2">
                <div
                  className="flex flex-col justify-center text-center font-['DM_Sans:Regular',sans-serif] font-normal leading-[0] text-[#6b6b6b] text-[16px]"
                  style={{ fontVariationSettings: "'opsz' 14" }}
                >
                  {step.lines.map((line, li) => (
                    <p
                      key={line}
                      className={`leading-[21px] ${li < step.lines.length - 1 ? 'mb-0' : ''} motion-safe:transition-all motion-safe:duration-500 motion-safe:ease-[cubic-bezier(0.33,1,0.68,1)] ${on ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0'} motion-reduce:translate-y-0 motion-reduce:opacity-100`}
                      style={{ transitionDelay: staggerMs(i) }}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TimelineDot({ index, on, staggerMs }: { index: number; on: boolean; staggerMs: string }) {
  const base =
    'relative z-[1] size-[28px] shrink-0 rounded-full border-2 motion-safe:transition-all motion-safe:duration-500 motion-safe:ease-[cubic-bezier(0.33,1,0.68,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:scale-100';
  const enter = on
    ? 'translate-y-0 opacity-100 scale-100'
    : 'translate-y-1 opacity-0 scale-[0.88]';
  const style = { transitionDelay: staggerMs };

  if (index < 4) {
    return (
      <div
        className={`${base} border-[#4a2472] bg-[#4a2472] ${enter}`}
        style={style}
        aria-hidden
      />
    );
  }
  if (index === 4) {
    return (
      <div
        className={`${base} border-[#7c5aa6] bg-[linear-gradient(90deg,#4a2472_50%,#ede8f5_50%)] ${enter}`}
        style={style}
        aria-hidden
      />
    );
  }
  return (
    <div className={`${base} border-[#7c5aa6] bg-[#ede8f5] ${enter}`} style={style} aria-hidden />
  );
}
