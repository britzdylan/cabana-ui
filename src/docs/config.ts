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
      link: '/',
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

export const SIDEBAR: Array<sidebar> = [
  { name: 'Getting Started', header: true },
  { name: 'Introduction', link: '/introduction' },
  { name: 'Utilities', header: true },
  { name: 'Colors', link: '/core/colors' },
  { name: 'Typography', link: '/core/typography' },
  { name: 'Shadows', link: '/core/shadows' },
  { name: 'Blur', link: '/core/blur' },

  { name: 'Components', header: true },
  { name: 'Buttons', link: '/components/buttons' },
  { name: 'Navigation', link: '/components/navigation' },
  { name: 'Content', link: '/components/content' },
  { name: 'Forms', link: '/components/forms' },
  { name: 'Design Patterns', link: '/components/design-patterns' },
  { name: 'Overlays', link: '/components/design-patterns' },

  { name: 'Design Blocks', header: true, pro: true },
  { name: 'Introduction', link: '/patterns/introduction' },
];
