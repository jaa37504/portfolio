import type { ReactNode } from 'react';
import { caseStudySectionIntroColumnClass } from '../caseStudyLayout';
import {
  caseStudyEyebrowClass,
  caseStudyHeadlineClass,
  caseStudySectionIntroGapClass,
  caseStudySubheadClass,
} from '../caseStudyTypography';

const FONT_VARIATION = { fontVariationSettings: "'opsz' 14" } as const;

type SectionIntroProps = {
  label: string;
  title: ReactNode;
  className?: string;
  /** Brown subhead tone for CMSX-style in-section titles */
  variant?: 'chapter' | 'subhead';
  'data-node-id'?: string;
};

/** Eyebrow + display title — standard section opener. */
export function CaseStudySectionIntro({
  label,
  title,
  className = '',
  variant = 'chapter',
  'data-node-id': dataNodeId,
}: SectionIntroProps) {
  const titleClass = variant === 'subhead' ? caseStudySubheadClass : caseStudyHeadlineClass;
  return (
    <div
      className={`${caseStudySectionIntroGapClass} ${caseStudySectionIntroColumnClass} ${className}`.trim()}
      data-node-id={dataNodeId}
    >
      <p className={caseStudyEyebrowClass} style={FONT_VARIATION}>
        {label}
      </p>
      <p className={`${titleClass} block min-w-0 w-full shrink-0`}>{title}</p>
    </div>
  );
}
