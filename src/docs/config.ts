export const SITE = {
  title: 'Cabana Design System',
  description:
    "Build beautiful, consistent UIs right away. Plenty of essential Components you need, none of the 'fluff' that you don't.",
  defaultLanguage: 'en_US',
  twitter: '@britzdm',
  github: 'britzdylan/cabana-ui',
  // linkedin: 'linkedinUsername',
  version: 0.1,
  docsVersion: '0.0.3 Alpha',
  nav: [
    {
      title: 'Docs',
      link: '/docs/introduction',
    },
    {
      title: 'Upgrade to Pro',
      link: '/pro',
    },
    {
      title: 'Blog',
      link: '/blog',
    },
  ],
};

export const OPEN_GRAPH = {
  image: {
    src: '',
    alt: '',
  },
  twitter: '',
};

export interface sidebar {
  name: string;
  link?: string;
  header?: boolean;
  pro?: boolean;
}

const base = '/docs';
const corePath = `${base}/core`;
const componentsPath = `${base}/components`;

export const SIDEBAR: Array<sidebar> = [
  { name: 'Getting Started', header: true },
  { name: 'Introduction', link: `${base}/introduction` },
  { name: 'Utilities', header: true },
  { name: 'Colors', link: `${corePath}/colors` },
  { name: 'Typography', link: `${corePath}/typography` },
  { name: 'Shadows', link: `${corePath}/shadows` },
  { name: 'Blur', link: `${corePath}/blur` },

  { name: 'Components', header: true },
  { name: 'Buttons', link: `${componentsPath}/buttons` },
  { name: 'Navigation', link: `${componentsPath}/navigation` },
  { name: 'Content', link: `${componentsPath}/content` },
  { name: 'Forms', link: `${componentsPath}/forms` },
  { name: 'Design Patterns', link: `${componentsPath}/design-patterns` },

  // { name: 'Design Blocks', header: true, pro: true },
  // { name: 'Introduction', link: '/patterns/introduction' },
];
