export const SITE = {
  title: 'Cabana Design System',
  description:
    "Build beautiful, consistent UIs right away. Plenty of essential Components you need, none of the 'fluff' that you don't.",
  defaultLanguage: 'en_US',
  twitter: '@britzdm',
  github: 'britzdylan/cabana-ui',
  // linkedin: 'linkedinUsername',
};

export const OPEN_GRAPH = {
  image: {
    src: '',
    alt: '',
  },
  twitter: '',
};

export const SIDEBAR = [
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
