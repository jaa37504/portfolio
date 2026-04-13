import {
  Children,
  useEffect,
  useRef,
  useState,
  type ComponentProps,
  type HTMLAttributes,
  type ReactNode,
} from 'react';

/**
 * Applied to each `CaseStudyStagger` item wrapper so flex rows keep equal-width / equal-height cards.
 * (The motion wrapper must participate in flex the same way the card root would.)
 */
export const CASE_STUDY_CARD_STAGGER_ITEM =
  'case-study-card-item min-h-0 min-w-0 flex-[1_0_0] basis-0 self-stretch w-full md:[&>*]:h-full [&>*]:min-h-0';

/** Same as card stagger item, but only becomes equal-width/equal-height at xl. */
export const CASE_STUDY_CARD_STAGGER_ITEM_XL =
  'case-study-card-item min-h-0 min-w-0 flex-[1_0_0] basis-0 self-stretch w-full [&>*]:h-full [&>*]:min-h-0';

/** Parent row uses `items-center` (e.g. persona + screenshot) — do not force `h-full` on children. */
export const CASE_STUDY_CARD_STAGGER_ITEM_CENTER =
  'min-h-0 min-w-0 flex-[1_0_0] basis-0 w-full [&>*]:min-h-0';

/** Full-width items in a vertical `CaseStudyStagger` column (e.g. Key Insights, Outcomes). */
export const CASE_STUDY_VERTICAL_STAGGER_ITEM = 'w-full min-w-0 shrink-0';

/**
 * Staggered soft entrance (opacity + translateY) when the row scrolls into view.
 * Respects prefers-reduced-motion via Tailwind `motion-reduce:` on children.
 */
export function SoftAppearStagger({
  children,
  className = '',
  staggerMs = 90,
  initialDelayMs = 0,
  itemClassName = '',
  variant = 'default',
  ...rest
}: {
  children: ReactNode;
  className?: string;
  staggerMs?: number;
  /** Base delay before first item starts (helps sequence sections). */
  initialDelayMs?: number;
  /** Applied to each wrapper around a child (or pass a function for per-index layout). */
  itemClassName?: string | ((index: number) => string);
  /** `subtle`: smaller motion, slightly faster — better for dense card grids. */
  variant?: 'default' | 'subtle';
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

  const durationClass =
    variant === 'subtle'
      ? 'motion-safe:duration-[980ms]'
      : 'motion-safe:duration-[1120ms]';
  const hiddenY = variant === 'subtle' ? 'translate-y-[3px]' : 'translate-y-[6px]';

  const itemMotion = `${durationClass} motion-safe:transition-all motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100`;

  const itemWrap = (i: number) =>
    typeof itemClassName === 'function' ? itemClassName(i) : itemClassName;

  return (
    <div ref={ref} className={className} {...rest}>
      {Children.map(children, (child, i) => (
        <div
          key={i}
          className={`${itemMotion} ${itemWrap(i)} ${on ? 'translate-y-0 opacity-100' : `${hiddenY} opacity-0`}`}
          style={{ transitionDelay: on ? `${initialDelayMs + i * staggerMs}ms` : '0ms' }}
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
  /** Tweak when the observer fires (per-card scroll lists often use a slightly inset bottom). */
  intersectionRootMargin = '0px 0px -24px 0px',
  intersectionThreshold = 0.08,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  intersectionRootMargin?: string;
  intersectionThreshold?: number | number[];
} & HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setOn(true);
    }, { threshold: intersectionThreshold, rootMargin: intersectionRootMargin });
    io.observe(el);
    return () => io.disconnect();
  }, [intersectionRootMargin, intersectionThreshold]);

  return (
    <div
      ref={ref}
      className={`motion-safe:transition-all motion-safe:duration-[980ms] motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100 ${on ? 'translate-y-0 opacity-100' : 'translate-y-[10px] opacity-0'} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}

type CaseStudySectionProps = ComponentProps<typeof SoftAppearOnce> & {
  /** When false, no section-level fade — use with `SoftAppearOnce` / `CaseStudyStagger` inside for split timing. */
  animated?: boolean;
};

/**
 * Case study pages: soft section reveal (same motion as home “Where I’ve Been” / `SoftAppearOnce`).
 * Use for major blocks separated by horizontal rules — not every paragraph.
 */
export function CaseStudySection({
  children,
  className = '',
  animated = true,
  ...rest
}: CaseStudySectionProps) {
  if (!animated) {
    return (
      <div className={className} {...rest}>
        {children}
      </div>
    );
  }
  return (
    <SoftAppearStagger
      className={className}
      itemClassName="w-full min-w-0"
      staggerMs={95}
      variant="subtle"
      {...rest}
    >
      {children}
    </SoftAppearStagger>
  );
}

type CaseStudyStaggerProps = ComponentProps<typeof SoftAppearStagger>;

/**
 * Side-by-side cards or columns; subtle motion and ~65ms stagger by default.
 */
export function CaseStudyStagger({
  staggerMs = 65,
  variant = 'subtle',
  ...rest
}: CaseStudyStaggerProps) {
  return <SoftAppearStagger staggerMs={staggerMs} variant={variant} {...rest} />;
}
