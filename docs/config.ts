export const SITE = {
  title: 'Cabana - Design System for Tailwind CSS',
  description:
    "Crafting exceptional designs while adhering to strict deadlines can be a challenging task. At times, it feels like an uphill battle to strike a balance between creativity and efficiency. That's why we're thrilled to introduce Cabana, an innovative Design System specifically designed for Tailwind. With Cabana, you can seamlessly accelerate your project's workflow, empowering you to deliver outstanding designs without compromising on timeliness.",
  defaultLanguage: 'en_US',
  twitter: '@britzdm',
  github: 'britzdylan/cabana-ui',
  // linkedin: 'linkedinUsername',
  version: '0.1.35 Beta',
  docsVersion: '0.0.1',
  author: 'Dylan Britz',
  nav: [
    {
      title: 'Docs',
      link: '/getting-started/install',
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
  children?: Array<sidebar>;
  pro?: boolean;
}

const base = '/';
const gs = `${base}getting-started`;
const corePath = `${base}core`;
const componentsPath = `${base}components`;

export const SIDEBAR: Array<sidebar> = [
  { name: 'Install', link: `${gs}/install` },
  { name: 'How to use', link: `${gs}/use` },

  { name: 'Colors', link: `${corePath}/colors` },
  { name: 'Typography', link: `${corePath}/typography` },
  { name: 'Shadows', link: `${corePath}/shadows` },
  { name: 'Blur', link: `${corePath}/blur` },

  {
    name: 'Actions',
    header: true,
    children: [{ name: 'Buttons', link: `${componentsPath}/actions/buttons` }],
  },
  {
    name: 'Navigation',
    header: true,
    children: [
      { name: 'Link', link: `${componentsPath}/navigation/link` },
      { name: 'Menu', link: `${componentsPath}/navigation/menu` },
      { name: 'Pill', link: `${componentsPath}/navigation/pill` },
      { name: 'Breadcrumb', link: `${componentsPath}/navigation/breadcrumbs` },
      { name: 'Pagination', link: `${componentsPath}/navigation/pagination` },
      // { name: 'Tabs', link: `${componentsPath}/navigation/tabs` },
    ],
  },
  {
    name: 'Content',
    header: true,
    children: [
      { name: 'Accordion', link: `${componentsPath}/content/accordion` },
      { name: 'Lists', link: `${componentsPath}/content/lists` },
      // { name: 'Content Blocks', link: `${componentsPath}/content/blocks` },
      // { name: 'Lists', link: `${componentsPath}/content/lists` },
      // { name: 'Lists', link: `${componentsPath}/content/lists` },
      // { name: 'Lists', link: `${componentsPath}/content/lists` },
      // { name: 'Lists', link: `${componentsPath}/content/lists` },
      // { name: 'Lists', link: `${componentsPath}/content/lists` },
      // { name: 'Lists', link: `${componentsPath}/content/lists` },
      // { name: 'Lists', link: `${componentsPath}/content/lists` },
    ],
  },
  {
    name: 'Forms',
    header: true,
    children: [
      { name: 'Input', link: `${componentsPath}/forms/input` },
      { name: 'Select', link: `${componentsPath}/forms/select` },
      { name: 'Text Area', link: `${componentsPath}/forms/textarea` },
      { name: 'Checkbox', link: `${componentsPath}/forms/checkbox` },
      { name: 'Radio', link: `${componentsPath}/forms/radio` },
      { name: 'Toggle', link: `${componentsPath}/forms/toggle` },
      { name: 'Range', link: `${componentsPath}/forms/range` },
    ],
  },
  {
    name: 'Overlays',
    header: true,
    children: [
      {
        name: 'Toast',
        link: `${componentsPath}/overlays/toast`,
      },
    ],
  },
  {
    name: 'Design Patterns',
    header: true,
    children: [
      {
        name: 'Avatar',
        link: `${componentsPath}/patterns/avatar`,
      },
      {
        name: 'Chip',
        link: `${componentsPath}/patterns/chip`,
      },
      {
        name: 'Dot',
        link: `${componentsPath}/patterns/dot`,
      },
      {
        name: 'Progress Bar',
        link: `${componentsPath}/patterns/progress`,
      },
      {
        name: 'Rating',
        link: `${componentsPath}/patterns/rating`,
      },

      {
        name: 'Tooltip',
        link: `${componentsPath}/patterns/tooltip`,
      },
    ],
  },

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
