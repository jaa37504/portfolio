/**
 * My Work page (`/work`) — compact cards + expanded “alternate” layout on hover.
 * Copy aligns with Design17537 / Design17726.
 */

export type WorkPageTag = {
  label: string;
  pillClass: string; // full pill wrapper: bg + rounded etc.
  textClass: string;
};

export type WorkPageProject = {
  id: string;
  to: string;
  title: string;
  role: string;
  summary: string;
  descriptionExpanded: string;
  tools: string;
  skills: string;
  timeline: string;
  imageSrc: string;
  /** Backdrop behind the thumbnail in compact + expanded left column */
  imageBgClass: string;
  compactImageMode: 'fill' | 'act-crop' | 'centered-info' | 'centered-kenvue';
  /** Optional img class for compact (e.g. ACT positioning) */
  compactImgClassName?: string;
  expandedImgClassName?: string;
  tags: WorkPageTag[];
  /** Figma 450:17726 — expanded hover panel: hero video in left column (matches home assets). */
  expandedVideo?: {
    kind: 'cmsx' | 'compact' | 'phone';
    src: string;
    posterSrc?: string | false;
  };
};

const pill = (label: string, bg: string, text: string): WorkPageTag => ({
  label,
  pillClass: `${bg} h-[24px] relative rounded-[16777200px] shrink-0`,
  textClass: text,
});

export const WORK_PAGE_PROJECTS: WorkPageProject[] = [
  {
    id: 'capital-one',
    to: '/case-studies/capital-one',
    title: 'Capital One',
    role: 'UX Design Intern',
    summary:
      'Conducted research and designed solutions for a B2B enterprise platform that supported version management and installation capabilities across C1 Software products',
    descriptionExpanded:
      'Conducted research and designed solutions for a B2B enterprise platform that supported version management and installation capabilities across C1 Software products',
    tools: 'Figma',
    skills: 'Enterprise UX, B2B research, workflow design',
    timeline: '10 Weeks',
    imageSrc:
      'https://www.figma.com/api/mcp/asset/f84181c4-f1c6-4f65-8c99-c94e8ec11f2b',
    imageBgClass: 'bg-[#7a9fb0]',
    compactImageMode: 'fill',
    tags: [
      pill('Enterprise', 'bg-[#e5dcd7]', 'text-[#816451]'),
      pill('Web', 'bg-[#efede8]', 'text-[#999181]'),
    ],
  },
  {
    id: 'cmsx',
    to: '/case-studies/cmsx',
    title: 'CMSX',
    role: 'Product Designer',
    summary:
      'Led the redesign of data-heavy, high-frequency workflows for a course management platform used by 1,000+ faculty and TAs, streamlining grading and administrative tasks while improving clarity, consistency, and usability across the system.',
    descriptionExpanded:
      'Led the redesign of data-heavy, high-frequency workflows for a course management platform used by 1,000+ faculty and TAs, streamlining grading and administrative tasks while improving clarity, consistency, and usability across the system.',
    tools: 'Figma',
    skills: 'Information architecture, internal tools, research',
    timeline: '4 Months',
    imageSrc:
      'https://www.figma.com/api/mcp/asset/91f9ba78-c5b8-4379-950c-d22eb3e1f397',
    imageBgClass: 'bg-[#e3dfd6]',
    compactImageMode: 'fill',
    tags: [
      pill('Internal Tool', 'bg-[#e6deda]', 'text-[#816451]'),
      pill('Web', 'bg-[#efede8]', 'text-[#999181]'),
    ],
    expandedVideo: {
      kind: 'cmsx',
      src: '/videos/cmsx-laptop.mp4',
      posterSrc: false,
    },
  },
  {
    id: 'rethink-food',
    to: '/case-studies/rethink-food',
    title: 'ReThink Food · H4I',
    role: 'Product Designer · Product Manager',
    summary:
      'Designed a 0→1 interactive data visualization experience that transformed complex operational data into a clear, intuitive map, enabling users to understand impact across NYC and make more informed donation decisions.',
    descriptionExpanded:
      'Designed a 0→1 interactive data visualization experience that transformed complex operational data into a clear, intuitive map, enabling users to understand impact across NYC and make more informed donation decisions.',
    tools: 'Figma',
    skills: 'Data visualization, prototyping, nonprofit',
    timeline: '8 Weeks',
    imageSrc:
      'https://www.figma.com/api/mcp/asset/6d2fc213-c8f6-4ff5-b1f9-b11260402bf4',
    imageBgClass: 'bg-[#c9ac75]',
    compactImageMode: 'fill',
    tags: [
      pill('Data Visualization', 'bg-[#fbedca]', 'text-[#b5923c]'),
      pill('Web', 'bg-[#efede8]', 'text-[#999181]'),
    ],
    expandedVideo: {
      kind: 'compact',
      src: '/videos/filter-bar-flow.mp4',
      posterSrc: false,
    },
  },
  {
    id: 'act',
    to: '/case-studies/act',
    title: 'ACT · H4I',
    role: 'Product Designer',
    summary:
      'Designed an accessible, cost-effective, and engaging educational mobile app. This digital safety flashcard deck will be used to promote internet safety conversations and best practices.',
    descriptionExpanded:
      'Designed an accessible, cost-effective, and engaging educational mobile app. This digital safety flashcard deck will be used to promote internet safety conversations and best practices.',
    tools: 'Figma',
    skills: 'Mobile UX, social impact, accessibility',
    timeline: '10 Weeks',
    imageSrc:
      'https://www.figma.com/api/mcp/asset/779ecf70-5858-448d-bd19-edb19e4d2e3b',
    imageBgClass: 'bg-[#7a9fb0]',
    compactImageMode: 'act-crop',
    compactImgClassName:
      'absolute h-[128.83%] left-[-18.63%] max-w-none top-[-14.28%] w-[142.55%]',
    expandedImgClassName:
      'absolute h-full left-[-15.14%] max-w-none top-[-0.1%] w-[138.77%]',
    tags: [
      pill('Social Good', 'bg-[#d3e3e9]', 'text-[#3a7992]'),
      pill('Mobile', 'bg-[#efede8]', 'text-[#999181]'),
    ],
    expandedVideo: {
      kind: 'phone',
      src: '/videos/act-prototype.mp4',
      posterSrc: false,
    },
  },
  {
    id: 'info-2300',
    to: '/case-studies/info-2300',
    title: 'INFO 2300',
    role: 'Full-Stack Developer',
    summary:
      'Built a full-stack web platform for discovering and managing web comics, featuring tagged content exploration and secure, role-based admin workflows backed by a custom relational data model.',
    descriptionExpanded:
      'Built a full-stack web platform for discovering and managing web comics, featuring tagged content exploration and secure, role-based admin workflows backed by a custom relational data model.',
    tools: 'HTML, CSS, PHP, SQL',
    skills: 'Full-stack development, data modeling, CMS design',
    timeline: '12 Weeks',
    imageSrc:
      'https://www.figma.com/api/mcp/asset/1b5dfe7c-5cc5-49ba-a9d0-172ccc96feaf',
    imageBgClass: 'bg-[#e3dfd6]',
    compactImageMode: 'centered-info',
    tags: [
      pill('Consumer', 'bg-[#d3e3e9]', 'text-[#3a7992]'),
      pill('Mobile', 'bg-[#efede8]', 'text-[#999181]'),
      pill('Web', 'bg-[#efede8]', 'text-[#999181]'),
    ],
    expandedVideo: {
      kind: 'compact',
      src: '/videos/info-2300-web.mp4',
      posterSrc: false,
    },
  },
  {
    id: 'kenvue',
    to: '/case-studies/kenvue',
    title: 'Kenvue',
    role: 'Quantitative UXR Intern',
    summary:
      'Engineered and analyzed survey experience data to identify IT end user pain points and insights. Developed mixed-method reports to translate findings into actionable solutions and drive improvements in internal processes.',
    descriptionExpanded:
      'Engineered and analyzed survey experience data to identify IT end user pain points and insights. Developed mixed-method reports to translate findings into actionable solutions and drive improvements in internal processes.',
    tools: 'SQL, Snowflake, Tableau, PowerBI',
    skills: 'Survey design, mixed methods, IT service research',
    timeline: '10 Weeks',
    imageSrc:
      'https://www.figma.com/api/mcp/asset/ad1f9573-39a0-4e31-ad8a-29225ad8f1ec',
    imageBgClass: 'bg-[#c9ac75]',
    compactImageMode: 'centered-kenvue',
    tags: [pill('Internal Tool', 'bg-[#e6deda]', 'text-[#816451]')],
  },
];
