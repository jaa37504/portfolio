import { Children, useEffect, useRef, useState, type HTMLAttributes, type ReactNode } from 'react';

/**
 * Staggered soft entrance (opacity + translateY) when the row scrolls into view.
 * Respects prefers-reduced-motion via Tailwind `motion-reduce:` on children.
 */
export function SoftAppearStagger({
  children,
  className = '',
  staggerMs = 90,
  itemClassName = '',
  ...rest
}: {
  children: ReactNode;
  className?: string;
  staggerMs?: number;
  /** Applied to each wrapper around a child (or pass a function for per-index layout). */
  itemClassName?: string | ((index: number) => string);
} & HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setOn(true);
    }, { threshold: 0.15, rootMargin: '0px 0px -32px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const itemMotion =
    'motion-safe:transition-all motion-safe:duration-[700ms] motion-safe:ease-[cubic-bezier(0.33,1,0.68,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100';

  const itemWrap = (i: number) =>
    typeof itemClassName === 'function' ? itemClassName(i) : itemClassName;

  return (
    <div ref={ref} className={className} {...rest}>
      {Children.map(children, (child, i) => (
        <div
          key={i}
          className={`${itemMotion} ${itemWrap(i)} ${on ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}
          style={{ transitionDelay: on ? `${i * staggerMs}ms` : '0ms' }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

/** Single block fade/slide when scrolled into view (e.g. portfolio bento). */
export function SoftAppearOnce({
  children,
  className = '',
  ...rest
}: { children: ReactNode; className?: string } & HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setOn(true);
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`motion-safe:transition-all motion-safe:duration-[800ms] motion-safe:ease-[cubic-bezier(0.33,1,0.68,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100 ${on ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
