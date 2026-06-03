import type { ReactNode } from 'react';
import { CaseStudyStagger } from './SoftAppear';

const FONT_VARIATION = { fontVariationSettings: "'opsz' 14" } as const;

const ROW_CLASS =
  'grid w-full shrink-0 grid-cols-1 overflow-hidden rounded-[18px] border border-solid border-[#ddd8d0] bg-white md:grid-cols-3';

function cellDividerClass(index: number): string {
  if (index >= 2) return '';
  return 'border-b border-solid border-[#ddd8d0] md:border-b-0';
}

function tripletItemClassName(index: number): string {
  return `min-h-0 min-w-0 h-full w-full ${cellDividerClass(index)}`;
}

function TripletDividers() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-1/3 hidden w-px -translate-x-1/2 bg-[#ddd8d0] md:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-2/3 hidden w-px -translate-x-1/2 bg-[#ddd8d0] md:block"
      />
    </>
  );
}

function TripletCell({
  index,
  text,
  bodyTextClassName,
  withDivider,
}: {
  index: number;
  text: string;
  bodyTextClassName: string;
  withDivider?: boolean;
}) {
  const px = index === 1 ? 'px-[40px]' : 'px-[41px]';
  return (
    <div
      className={`flex h-full w-full flex-col gap-[12px] items-start pb-[41px] pt-[49px] font-['DM_Sans:SemiBold',sans-serif] font-semibold ${px} ${withDivider ? cellDividerClass(index) : ''}`}
    >
      <div
        className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] whitespace-nowrap"
        style={FONT_VARIATION}
      >
        <p className="leading-[21px]">{String(index + 1).padStart(2, '0')}</p>
      </div>
      <p
        className={`min-w-0 w-full relative shrink-0 leading-[28px] whitespace-normal break-words ${bodyTextClassName}`}
        style={FONT_VARIATION}
      >
        {text}
      </p>
    </div>
  );
}

function TripletShell({
  dataNodeId,
  children,
}: {
  dataNodeId?: string;
  children: ReactNode;
}) {
  return (
    <div className="relative w-full shrink-0" data-node-id={dataNodeId}>
      <TripletDividers />
      {children}
    </div>
  );
}

export type CaseStudyTripletCardsProps = {
  items: readonly [string, string, string];
  /** Body text classes (Figma 839:305 uses gold semibold 18px). */
  bodyTextClassName?: string;
  animated?: boolean;
  staggerMs?: number;
  className?: string;
  'data-node-id'?: string;
};

/** Figma 839:305 — three connected insight cards in one row (no gap between cells). */
export function CaseStudyTripletCards({
  items,
  bodyTextClassName = 'text-[#b5923c] text-[18px]',
  animated = true,
  staggerMs = 65,
  className = '',
  'data-node-id': dataNodeId,
}: CaseStudyTripletCardsProps) {
  const rowClass = `${ROW_CLASS} ${className}`.trim();

  if (!animated) {
    return (
      <TripletShell dataNodeId={dataNodeId}>
        <div className={rowClass}>
          {items.map((text, index) => (
            <TripletCell
              key={index}
              index={index}
              text={text}
              bodyTextClassName={bodyTextClassName}
              withDivider
            />
          ))}
        </div>
      </TripletShell>
    );
  }

  return (
    <TripletShell dataNodeId={dataNodeId}>
      <CaseStudyStagger
        className={rowClass}
        itemClassName={tripletItemClassName}
        staggerMs={staggerMs}
      >
        {items.map((text, index) => (
          <TripletCell
            key={index}
            index={index}
            text={text}
            bodyTextClassName={bodyTextClassName}
          />
        ))}
      </CaseStudyStagger>
    </TripletShell>
  );
}
