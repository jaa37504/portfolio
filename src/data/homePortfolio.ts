/** Filters match the “My Work” chip row on the home page. */
export type WorkFilterId = 'all' | 'product-design' | 'data-science' | 'development';

export const WORK_FILTER_CHIPS: { id: WorkFilterId; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'product-design', label: 'Product Design' },
  { id: 'data-science', label: 'Data Science' },
  { id: 'development', label: 'Development' },
];

/** Active filter chip — project-aligned accent wash (home bento pass). */
export const FILTER_CHIP_ACTIVE_CLASS: Record<WorkFilterId, string> = {
  all: 'bg-[#845482] shadow-[0_2px_14px_rgba(132,84,130,0.28)]',
  'product-design': 'bg-[#816451] shadow-[0_2px_14px_rgba(129,100,81,0.26)]',
  'data-science': 'bg-[#3a7992] shadow-[0_2px_14px_rgba(58,121,146,0.26)]',
  development: 'bg-[#432060] shadow-[0_2px_14px_rgba(67,32,96,0.22)]',
};

export type HomeProject = {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  to: string;
  /** Which filter chips include this project (excluding "all"). */
  categories: Exclude<WorkFilterId, 'all'>[];
  image: string;
  imageClassName: string;
  /** CMSX: wide laptop; ReThink Food: compact centered laptop; ACT: centered phone (`image` is poster / fallback). */
  homeHeroMedia?: 'laptop-video' | 'compact-laptop-video' | 'phone-video';
  /** Hero MP4 for laptop/phone video tiles (see frame components in `src/components/`). */
  homeHeroVideoSrc?: string;
  /**
   * Poster shown inside the device frame before/during video load. Defaults to `image`.
   * Set to `false` when `image` is a full-tile mockup (would look like a device inside the drawn frame).
   */
  homeHeroVideoPosterSrc?: string | false;
  /** INFO 2300 home L-shape: right-arm web laptop video (`public/...`). */
  lShapeWebVideoSrc?: string;
  lShapeWebVideoPosterSrc?: string | false;
  /** Development-filter bento only — right-arm laptop video (Figma 522:21734). Defaults to `lShapeWebVideoSrc`. */
  developmentFilterVideoSrc?: string;
  pillBg: string;
  pillText: string;
  arrowSmallBg: string;
  arrowSmallText: string;
  footerAccent: string;
};

export const HOME_PROJECTS: HomeProject[] = [
  {
    id: 'act',
    title: 'ACT · H4I',
    subtitle: 'Product Design · Mobile',
    tag: 'Social Good',
    to: '/case-studies/act',
    categories: ['product-design'],
    image: '/images/ACTBanner.png',
    imageClassName: 'absolute h-[82.85%] left-[8.17%] max-w-none top-[8.54%] w-[83.9%]',
    homeHeroMedia: 'phone-video',
    homeHeroVideoSrc: '/videos/act-prototype.mp4',
    pillBg: 'bg-[rgba(171,203,216,0.5)]',
    pillText: 'text-[#3a7993]',
    arrowSmallBg: 'bg-[rgba(171,203,216,0.5)]',
    arrowSmallText: 'text-[#3a7993]',
    footerAccent: 'text-[#3a7992]',
  },
  {
    id: 'capital-one',
    title: 'Capital One',
    subtitle: 'Product Design · Web',
    tag: 'Enterprise',
    to: '/case-studies/capital-one',
    categories: ['product-design'],
    image: '/images/capitaloneimage.png',
    imageClassName: 'absolute max-w-none object-contain rounded-[24px] size-full',
    pillBg: 'bg-[rgba(155,126,107,0.35)]',
    pillText: 'text-[#816451]',
    arrowSmallBg: 'bg-[rgba(155,126,107,0.35)]',
    arrowSmallText: 'text-[#816451]',
    footerAccent: 'text-[#816451]',
  },
  {
    id: 'rethink-food',
    title: 'ReThink Food · H4I',
    subtitle: 'Product Design · Web',
    tag: 'Data Visualization',
    to: '/case-studies/rethink-food',
    categories: ['product-design', 'data-science'],
    image: '/images/ReThinkBigger.png',
    imageClassName: 'absolute max-w-none object-contain rounded-[24px] size-full',
    homeHeroMedia: 'compact-laptop-video',
    homeHeroVideoSrc: '/videos/filter-bar-flow.mp4',
    homeHeroVideoPosterSrc: false,
    pillBg: 'bg-[rgba(250,222,155,0.5)]',
    pillText: 'text-[#b5923c]',
    arrowSmallBg: 'bg-[rgba(250,222,155,0.5)]',
    arrowSmallText: 'text-[#b5923c]',
    footerAccent: 'text-[#b5923c]',
  },
  {
    id: 'cmsx',
    title: 'CMSX',
    subtitle: 'Product Design · Internal platform',
    tag: 'Internal Tool',
    to: '/case-studies/cmsx',
    categories: ['product-design', 'data-science'],
    image: '/images/CMSXimage.png',
    imageClassName: 'absolute max-w-none object-contain rounded-[24px] size-full',
    homeHeroMedia: 'laptop-video',
    pillBg: 'bg-[#e3dfd6]',
    pillText: 'text-[#999181]',
    arrowSmallBg: 'bg-[rgba(225,222,216,0.75)]',
    arrowSmallText: 'text-[#999181]',
    footerAccent: 'text-[#999181]',
  },
  {
    id: 'info-2300',
    title: 'INFO 2300',
    subtitle: 'Development · Web · Mobile',
    tag: 'Full Stack',
    to: '/case-studies/info-2300',
    categories: ['development'],
    image: '/images/info2300mobile.png',
    imageClassName: 'absolute inset-0 max-w-none object-cover rounded-[32px] size-full',
    lShapeWebVideoSrc: '/videos/info-2300-web.mp4',
    developmentFilterVideoSrc: '/videos/info-2300-web.mp4',
    lShapeWebVideoPosterSrc: false,
    pillBg: 'bg-[rgba(155,126,107,0.35)]',
    pillText: 'text-[#816451]',
    arrowSmallBg: 'bg-[rgba(155,126,107,0.35)]',
    arrowSmallText: 'text-[#816451]',
    footerAccent: 'text-[#816451]',
  },
  {
    id: 'kenvue-mock',
    title: 'Kenvue',
    subtitle: 'Product Design · Web',
    tag: 'Enterprise',
    to: '/case-studies/kenvue',
    /** Only shown on the “All” bento, not in filter chips. */
    categories: [],
    image: '/images/kenvueimage.png',
    imageClassName: 'absolute inset-0 max-w-none object-contain rounded-br-[24px] rounded-tr-[24px] size-full',
    pillBg: 'bg-[rgba(155,126,107,0.35)]',
    pillText: 'text-[#816451]',
    arrowSmallBg: 'bg-[rgba(155,126,107,0.35)]',
    arrowSmallText: 'text-[#816451]',
    footerAccent: 'text-[#816451]',
  },
  {
    id: 'kenvue-data',
    title: 'Kenvue',
    subtitle: 'Data Science · Analysis',
    tag: 'Data Analysis',
    to: '/case-studies/kenvue',
    categories: ['data-science'],
    image: '/images/kenvueimage.png',
    /** Default; home layout uses paddedAspectImage (Figma 450:17057). */
    imageClassName: 'absolute inset-0 max-w-none object-cover object-center rounded-[1px] size-full',
    pillBg: 'bg-[#d3e3e9]',
    pillText: 'text-[#3a7992]',
    arrowSmallBg: 'bg-[#d3e3e9]',
    arrowSmallText: 'text-[#3a7992]',
    footerAccent: 'text-[#3a7992]',
  },
];

export function projectMatchesFilter(
  categories: Exclude<WorkFilterId, 'all'>[],
  filter: WorkFilterId,
): boolean {
  if (filter === 'all') return true;
  return categories.includes(filter);
}
