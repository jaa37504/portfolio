/** Figma 516:21354 footer; 516:21356 — DM Sans body 16px (upper block). LinkedIn asset 538:22006. */
const imgLinkedIn =
  'https://www.figma.com/api/mcp/asset/59b3a57f-c71f-4233-ac33-83a6dd74d4dc';

const LINKEDIN_URL = 'https://www.linkedin.com/in/jessica-andrews-a34842228/';

type SiteFooterProps = {
  /** Align footer background with case-study article cream (`#fdfcfb`) instead of default shell. */
  tone?: 'default' | 'paper';
};

export function SiteFooter({ tone = 'default' }: SiteFooterProps) {
  const footerBg = tone === 'paper' ? 'bg-[#fdfcfb]' : 'bg-[#f5f2eb]';
  return (
    <footer
      className={`w-full shrink-0 border-t border-solid border-[#e8dfd0] ${footerBg} pt-0.5 px-4`}
      data-node-id="516:21354"
      data-name="Footer"
    >
      <div className="mx-auto flex w-full max-w-[1056px] flex-col items-start gap-12 px-12 pt-16 pb-8">
        <div className="flex w-full flex-col items-start justify-between gap-12 sm:flex-row sm:gap-8">
          <div className="flex max-w-[460px] flex-col gap-6">
            <div className="flex h-12 items-center gap-3">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#432060]">
                <span className="font-['Georgia',serif] text-[24px] leading-8 text-[#fdfcfb] not-italic">J</span>
              </div>
              <p className="font-['Libre_Baskerville',serif] text-[30px] italic leading-9 text-[#432060]">Jess</p>
            </div>
            <p
              className="font-['DM_Sans',sans-serif] text-[16px] font-normal leading-6 text-[#6b6b6b]"
              style={{ fontVariationSettings: "'opsz' 14" }}
              data-node-id="516:21356"
            >
              Designing thoughtful, scalable products that simplify complex systems and create intuitive,
              human-centered experiences
            </p>
          </div>
          <div className="flex w-full max-w-[196px] flex-col items-start gap-4">
            <p className="font-['Libre_Baskerville',serif] text-[16px] leading-7 text-[#2d2d2d] not-italic">
              Get In Touch
            </p>
            <p
              className="font-['DM_Sans',sans-serif] text-[16px] font-normal leading-6 text-[#6b6b6b]"
              style={{ fontVariationSettings: "'opsz' 14" }}
            >
              jessachsah@gmail.com
            </p>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-10 shrink-0 items-center justify-center rounded-[12px] border border-solid border-[#fdfcfb] bg-[#6b6b6b] px-[11px] py-px transition-opacity hover:opacity-90"
              aria-label="LinkedIn profile"
            >
              <span className="relative size-5 shrink-0">
                <img alt="" className="pointer-events-none absolute inset-0 block size-full max-w-none" src={imgLinkedIn} />
              </span>
            </a>
          </div>
        </div>
        <div className="flex w-full flex-col gap-2 border-t border-solid border-[#e8dfd0] pt-0.5 sm:flex-row sm:items-center sm:justify-between">
          <p
            className="font-['DM_Sans',sans-serif] text-[14px] font-normal leading-5 text-[#6b6b6b]"
            style={{ fontVariationSettings: "'opsz' 9" }}
          >
            Designed with Figma Make. Built with Cursor. Deployed with Vercel.
          </p>
        </div>
      </div>
    </footer>
  );
}
