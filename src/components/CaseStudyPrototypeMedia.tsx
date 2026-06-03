import type { ReactNode } from 'react';
import { SoftAppearOnce } from './SoftAppear';

type Props = {
  children: ReactNode;
  className?: string;
  'data-node-id'?: string;
};

/** Prototype / live-site device frame — scale + fade on scroll. */
export function CaseStudyPrototypeMedia({ children, className = '', 'data-node-id': dataNodeId }: Props) {
  return (
    <SoftAppearOnce
      reveal="media"
      intersectionThreshold={0.12}
      className={className}
      data-node-id={dataNodeId}
    >
      {children}
    </SoftAppearOnce>
  );
}
