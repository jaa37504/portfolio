import { Link } from 'react-router-dom';

const links: { to: string; label: string; node: string }[] = [
  {
    to: '/home',
    label: 'Home — interactive (filters, hover detail, links to case studies)',
    node: '450:16955 (+17137/17301/18096/18255 merged)',
  },
  { to: '/home?filter=product-design', label: 'Home — Product Design filter (deep link)', node: 'query' },
  { to: '/home?filter=data-science', label: 'Home — Data Science filter (deep link)', node: 'query' },
  { to: '/home?filter=development', label: 'Home — Development filter (deep link)', node: 'query' },
  {
    to: '/work',
    label: 'My Work — project list (hover for expanded card / former alternate layout)',
    node: '450:17537 (+17726 hover)',
  },
  { to: '/case-studies/cmsx', label: 'Case study — CMSX', node: '450:18841' },
  { to: '/case-studies/rethink-food', label: 'Case study — ReThink Food', node: '450:19815' },
  { to: '/case-studies/capital-one', label: 'Case study — Capital One', node: '450:18405' },
  { to: '/case-studies/act', label: 'Case study — ACT Hack4Impact', node: '450:20659' },
  { to: '/case-studies/kenvue', label: 'Case study — Kenvue', node: '450:20272' },
  { to: '/case-studies/info-2300', label: 'Case study — INFO 2300', node: '450:19366' },
  { to: '/design/21153', label: 'Spacer node (empty in Figma)', node: '450:21153' },
  { to: '/design/21154', label: 'Spacer node (empty in Figma)', node: '450:21154' },
];

export default function DesignIndex() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 font-['DM_Sans',sans-serif] text-[#2d2d2d]">
      <h1 className="mb-2 font-['Libre_Baskerville',serif] text-3xl italic text-[#432060]">
        Website — Figma implementations
      </h1>
      <p className="mb-10 text-sm text-[#6b6b6b]">
        All fifteen exported frames from file{' '}
        <code className="rounded bg-white/80 px-1">cae7H9IxiUGAV3Fj88ZJbo</code>. Assets load from
        Figma MCP URLs (refresh exports if links expire).
      </p>
      <ul className="flex flex-col gap-3">
        {links.map(({ to, label, node }) => (
          <li key={to}>
            <Link
              className="flex flex-wrap items-baseline justify-between gap-2 rounded-lg border border-[#e8dfd0] bg-[#fdfcfb] px-4 py-3 text-[#432060] transition hover:border-[#845482]"
              to={to}
            >
              <span className="font-medium">{label}</span>
              <span className="text-xs text-[#6b6b6b]">node {node}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
