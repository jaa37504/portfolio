import type { ReactNode } from 'react';
import { SiteFooter } from './components/SiteFooter';

type DesignFrameProps = {
  children: ReactNode;
  /**
   * Omit the default padding above the footer so the page shell meets the footer border.
   * Use for case studies so the content column is not separated from the footer by a band of page bg.
   */
  flushFooter?: boolean;
};

export function DesignFrame({ children, flushFooter }: DesignFrameProps) {
  return (
    <main className="flex w-full flex-col items-center bg-[#f5f2eb]">
      <div
        className={`flex w-full max-w-[1100px] flex-col overflow-x-auto ${flushFooter ? 'pb-0' : 'pb-10 sm:pb-12'}`}
      >
        {children}
      </div>
      <SiteFooter />
    </main>
  );
}
