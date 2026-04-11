/** Figma 450:17064 — selected nav: semi-bold + #432060; unselected: regular + #2d2d2d */

export function isHomeNavActive(pathname: string): boolean {
  return pathname === '/home';
}

export function isWorkNavActive(pathname: string): boolean {
  return pathname === '/work' || pathname.startsWith('/case-studies/');
}

/** Nav links in Design16955 (no absolute positioning on label). */
export function mainNavInlineClass(active: boolean): string {
  return active
    ? "font-['DM_Sans:SemiBold',sans-serif] text-[14px] font-semibold leading-[20px] text-[#432060]"
    : "font-['DM_Sans:Regular',sans-serif] text-[14px] font-normal leading-[20px] text-[#2d2d2d]";
}

/** Nav labels inside legacy Figma header (absolute <p>). */
export function mainNavAbsoluteClass(active: boolean): string {
  return active
    ? "absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[20px] left-0 text-[#432060] text-[14px] top-[-0.5px] whitespace-nowrap"
    : "absolute font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#2d2d2d] text-[14px] top-[-0.5px] whitespace-nowrap";
}
