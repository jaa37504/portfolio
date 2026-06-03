import { useEffect, useRef, useState } from 'react';
import { caseStudySeparatorClass } from '../caseStudyLayout';
import { motionSeparatorDrawMs } from '../motion';

type Props = {
  'data-node-id'?: string;
  className?: string;
  /** When false, render a static rule (e.g. nested layouts). */
  animated?: boolean;
};

/**
 * Full-width section rule — draws in left-to-right on scroll (case studies + Phase II).
 */
export function CaseStudySeparator({
  className = '',
  'data-node-id': dataNodeId,
  animated = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(!animated);

  useEffect(() => {
    if (!animated) return;
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
  }, [animated]);

  if (!animated) {
    return (
      <div
        className={`${caseStudySeparatorClass} ${className}`.trim()}
        data-name="Separator"
        data-node-id={dataNodeId}
      />
    );
  }

  return (
    <div
      ref={ref}
      className={`h-px w-full shrink-0 ${className}`.trim()}
      data-name="Separator"
      data-node-id={dataNodeId}
    >
      <div
        aria-hidden
        className={`h-px w-full origin-left bg-[#ddd8d0] motion-reduce:scale-x-100 ${
          on ? 'motion-safe:scale-x-100' : 'motion-safe:scale-x-0'
        } motion-safe:transition-transform motion-safe:ease-out`}
        style={{ transitionDuration: `${motionSeparatorDrawMs}ms` }}
      />
    </div>
  );
}
