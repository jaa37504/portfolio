import { useEffect, type ReactNode } from 'react';
import { SiteFooter } from './components/SiteFooter';

type DesignFrameProps = {
  children: ReactNode;
  /**
   * Omit the default padding above the footer so the page shell meets the footer border.
   * Use for case studies so the content column is not separated from the footer by a band of page bg.
   */
  flushFooter?: boolean;
  /**
   * Case studies: match article background (`#fdfcfb`) for the full-bleed shell so gutters
   * and nav/footer match the content column (Home/Work keep the default `#f5f2eb` shell).
   */
  paperShell?: boolean;
};

export function DesignFrame({ children, flushFooter, paperShell }: DesignFrameProps) {
  const shellBg = paperShell ? 'bg-[#fdfcfb]' : 'bg-[#f5f2eb]';

  useEffect(() => {
    if (!paperShell) return;
    const body = document.body;
    const prev = body.style.backgroundColor;
    body.style.backgroundColor = '#fdfcfb';
    return () => {
      body.style.backgroundColor = prev;
    };
  }, [paperShell]);

  return (
    <main className={`flex w-full min-w-0 flex-col items-center overflow-x-visible ${shellBg}`}>
      {/*
        overflow-x-visible so full-bleed nav (w-screen + negative margin) isn’t clipped — otherwise
        border-b/bg only span the column width. Page-level overflow is handled on html/body.
      */}
      <div
        className={`flex w-full min-w-0 max-w-[1100px] flex-col overflow-x-visible ${flushFooter ? 'pb-0' : 'pb-10 sm:pb-12'}`}
      >
        {children}
      </div>
      <SiteFooter tone={paperShell ? 'paper' : 'default'} />
    </main>
  );
}
