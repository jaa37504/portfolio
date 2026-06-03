import type { ReactNode } from 'react';
import type { WorkFilterId } from '../data/homePortfolio';

/** Desktop bento min-heights — prevents layout jump when filter changes. */
const BENTO_MIN_HEIGHT_CLASS: Record<WorkFilterId, string> = {
  all: 'lg:min-h-[1137px]',
  'product-design': 'lg:min-h-[608px]',
  'data-science': 'lg:min-h-[836px]',
  development: 'min-h-[505px]',
};

type Props = {
  filter: WorkFilterId;
  children: (activeFilter: WorkFilterId) => ReactNode;
};

/** Fades the home bento grid when filter chips change (high-impact home pass). */
export function HomeBentoCrossfade({ filter, children }: Props) {
  return (
    <div className={`relative w-full shrink-0 ${BENTO_MIN_HEIGHT_CLASS[filter]}`}>
      <div key={filter} className="home-bento-enter">
        {children(filter)}
      </div>
    </div>
  );
}
