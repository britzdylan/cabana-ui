import type { Config } from 'tailwindcss';

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ebe9fb',
          100: '#d7d3f6',
          200: '#aea6ee',
          300: '#867ae5',
          400: '#5e4ddc',
          500: '#3b28cc',
          600: '#2f20a3',
          700: '#23187a',
          800: '#181052',
          900: '#0c0829',
        },
        secondary: {
          50: '#e9f0ff',
          100: '#d4e1ff',
          200: '#a8c2ff',
          300: '#7da4ff',
          400: '#5185ff',
          500: '#2667ff',
          600: '#0046ea',
          700: '#0035b0',
          800: '#002375',
          900: '#00123b',
        },
        tertiary: {
          50: '#e9f4fd',
          100: '#d3eafa',
          200: '#a8d5f5',
          300: '#7cbff1',
          400: '#51aaec',
          500: '#2595e7',
          600: '#1578c1',
          700: '#105a91',
          800: '#0B3C61',
          900: '#051e30',
        },
        brand: {
          airbnb: '#fd5c63',
          amazon: '#ff9900',
          android: '#a4c639',
          behance: '#1769ff',
          dribbble: '#ea4c89',
          dropbox: '#007ee5',
          facebook: '#3b5998',
          discord: '#7289da',
          feedly: '#2bb24c',
          github: '#4078c0',
          heroku: '#c9c3e6',
          instagram: '#e4405f',
          linkedin: '#0077b5',
          medium: '#00ab6c',
          messenger: '#0084ff',
          kickstarter: '#2bde73',
          lyft: '#ff00bf',
          meetup: '#ea2245',
          netflix: '#e50914',
          pinterest: '#bd081c',
          'product-hunt': '#da552f',
          paypal: '#003087',
          patreon: '#f96854',
          reddit: '#ff4500',
          slack: '#6ecadc',
          snapchat: '#fffc00',
          spotify: '#1ed760',
          stripe: '#503cff',
          shopify: '#96be4f',
          skype: '#00aff0',
          telegram: '#0088cc',
          tiktok: '#ff0050',
          twitch: '#6441a5',
          twitter: '#00b6f1',
          trello: '#117abd',
          uber: '#000000',
          vimeo: '#45bbff',
          whatsapp: '#25d366',
          youtube: '#ff0000',
        },
      },
      fontSize: {
        // display
        display: '3.75rem',
        'display-lg': '5rem',
        'display-xl': '7rem',
        // headline
        'headline-xl': '3rem',
        'headline-lg': '2.25rem',
        headline: '1.75rem',
        'headline-sm': '1.5rem',
        // title
        'title-lg': '2.5rem',
        title: '1rem',
        'title-sm': '0.75rem',
        // body
        'body-xl': '1.25rem',
        'body-lg': '1.125rem',
        body: '1rem',
        'body-sm': '0.875rem',
        'body-xs': '0.75rem',
        // label
        'label-xl': '1.125rem',
        label: '1rem',
        'label-sm': '0.875rem',
      },
      boxShadow: {
        'light-100':
          '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 1px 1px rgba(48, 49, 51, 0.1)',
        'light-200':
          '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 2px 4px rgba(48, 49, 51, 0.1)',
        'light-300':
          '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 4px 8px rgba(48, 49, 51, 0.1)',
        'light-400':
          '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 8px 16px rgba(48, 49, 51, 0.1)',
        'light-500':
          '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 16px 24px rgba(48, 49, 51, 0.09)',
        'light-600':
          '0px 0px 1px rgba(48, 49, 51, 0.05), 0px 24px 40px rgba(48, 49, 51, 0.08)',
        'primary-100':
          '0px 0px 1px rgba(59, 40, 204, 0.05), 0px 1px 1px rgba(59, 40, 204, 0.1)',
        'primary-200':
          '0px 0px 1px rgba(59, 40, 204, 0.05), 0px 2px 4px rgba(59, 40, 204, 0.1)',
        'primary-300':
          '0px 0px 1px rgba(59, 40, 204, 0.05), 0px 4px 8px rgba(59, 40, 204, 0.1)',
        'primary-400':
          '0px 0px 1px rgba(59, 40, 204, 0.05), 0px 8px 16px rgba(59, 40, 204, 0.1)',
        'primary-500':
          '0px 0px 1px rgba(59, 40, 204, 0.05), 0px 16px 24px rgba(59, 40, 204, 0.09)',
        'primary-600':
          '0px 0px 1px rgba(59, 40, 204, 0.05), 0px 24px 40px rgba(59, 40, 204, 0.08)',
        'secondary-100':
          '0px 0px 1px rgba(38, 103, 255, 0.05), 0px 1px 1px rgba(38, 103, 255, 0.1)',
        'secondary-200':
          '0px 0px 1px rgba(38, 103, 255, 0.05), 0px 2px 4px rgba(38, 103, 255, 0.1)',
        'secondary-300':
          '0px 0px 1px rgba(38, 103, 255, 0.05), 0px 4px 8px rgba(38, 103, 255, 0.1)',
        'secondary-400':
          '0px 0px 1px rgba(38, 103, 255, 0.05), 0px 8px 16px rgba(38, 103, 255, 0.1)',
        'secondary-500':
          '0px 0px 1px rgba(38, 103, 255, 0.05), 0px 16px 24px rgba(38, 103, 255, 0.09)',
        'secondary-600':
          '0px 0px 1px rgba(38, 103, 255, 0.05), 0px 24px 40px rgba(38, 103, 255, 0.08)',
        'dark-100': '0px 0px 1px rgba(0, 0, 0, 0.9), 0px 1px 1px #000000',
        'dark-200': '0px 0px 1px rgba(0, 0, 0, 0.9), 0px 2px 4px #000000',
        'dark-300': '0px 0px 1px rgba(0, 0, 0, 0.9), 0px 4px 8px #000000',
        'dark-400': '0px 0px 1px rgba(0, 0, 0, 0.9), 0px 8px 16px #000000',
        'dark-500':
          '0px 0px 1px rgba(0, 0, 0, 0.9), 0px 16px 24px rgba(0, 0, 0, 0.99)',
        'dark-600':
          '0px 0px 1px rgba(0, 0, 0, 0.9), 0px 24px 40px rgba(0, 0, 0, 0.98)',
      },
      blur: {
        8: '4px',
        16: '8px',
        24: '12px',
        32: '16px',
        40: '20px',
      },
    },
  },
} satisfies Config;
