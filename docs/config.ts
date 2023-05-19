export const SITE = {
  title: 'Cabana - Design System for Tailwind CSS',
  description:
    'Creating amazing designs is hard when you’ve got deadlines to meet. So we built Cabana, a Design System for Tailwind that enables you to start projects faster.',
  defaultLanguage: 'en_US',
  twitter: '@britzdm',
  github: 'britzdylan/cabana-ui',
  // linkedin: 'linkedinUsername',
  version: '0.0.3 Alpha',
  docsVersion: '0.0.1',
  author: 'Dylan Britz',
  nav: [
    {
      title: 'Docs',
      link: '/docs/install',
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
    src: '/og_image.jpg',
    alt: 'Cabana UI',
  },
  twitter: {
    card: 'summary_large_image',
    site: SITE.twitter,
    creator: SITE.twitter,
    image: {
      src: '/og_image.jpg',
      alt: 'Cabana UI',
    },
  },
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
  { name: 'Install', link: `${base}/install` },
  { name: 'How to use', link: `${base}/use` },
  // { name: 'Config', link: `${base}/config` },

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

export const PROJECTS = [
  // {
  //   Title: 'AdonisJs',
  //   link: '#',
  // },
  // {
  //   Title: 'Astro',
  //   link: '#',
  // },
  // {
  //   Title: 'Next.js',
  //   link: '#',
  // },
  // {
  //   Title: 'Nuxt.js',
  //   link: '#',
  // },
  // {
  //   Title: 'SvelteKit',
  //   link: '#',
  // },
  // {
  //   Title: 'Vue (Vite)',
  //   link: '#',
  // },
  // {
  //   Title: 'React (Vite)',
  //   link: '#',
  // },
  // {
  //   Title: 'Svelte',
  //   link: 'https://stackblitz.com/edit/cabanaui-vite-example?file=package.json',
  //   image: '/brands/vite.svg',
  // },
  {
    Title: 'Vite',
    link: 'https://stackblitz.com/edit/cabanaui-vite-example?file=package.json',
    image: '/brands/vite.svg',
  },
];
