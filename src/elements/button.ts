export default class Button {
  //@tsIgnore
  private readonly theme: (arg0: string) => string;

  constructor(theme: () => string) {
    this.theme = theme;
  }

  private btnIconSize: string = '@apply h-6 text-sm';

  private btnEffects(color: number) {
    return `@apply outline outline-4 outline-primary-${color}`;
  }

  private baseButton = {
    '@apply flex items-center justify-center text-white bg-primary-500 transition-all gap-2':
      {},
    '& .icon': {
      [this.btnIconSize]: {},
    },

    '& svg': {
      [this.btnIconSize]: {},
    },

    '& img': {
      [this.btnIconSize]: {},
    },

    // Default states
    '&:focus': {
      [this.btnEffects(300)]: {},
    },
    '&:focus-visible': {
      [this.btnEffects(300)]: {},
    },
    '&:disabled': {
      color: 'rgba(255, 255, 255, 0.4)',
    },
    '&:active': {
      [this.btnEffects(700)]: {},
    },
  };

  private defaultButton = {
    ...this.baseButton,
    '@apply px-4 py-3 text-label font-medium tracking-tight leading-6 rounded-md':
      {},
    '&:hover': {
      '@apply bg-primary-600': {},
    },
    '&:disabled': {
      '@apply bg-primary-100': {},
    },
    '&:active': {
      '@apply bg-primary-600': {},
    },
  };

  private outlineButton = () => {
    return {
      '@apply bg-transparent border-2 border-primary-500 text-primary-500': {},
      padding: '0.65rem ' + `${this.theme('spacing.4')}`,
      '&:hover': {
        '@apply bg-primary-50': {},
      },
      '&:disabled': {
        '@apply text-primary-100 border-primary-100': {},
      },
    };
  };

  private minBtn = {
    '@apply bg-transparent border-none text-primary-500': {},
    '&:hover': {
      '@apply bg-primary-50': {},
    },
    '&:active': {
      '@apply bg-primary-50': {},
    },
    '&:disabled': {
      '@apply text-primary-200': {},
    },
  };

  private textBtn = {
    '@apply bg-transparent border-none outline-none text-primary-500': {},
    '&:hover': {
      '@apply text-primary-600': {},
    },
    '&:active': {
      '@apply text-primary-700': {},
    },
    '&:disabled': {
      '@apply text-primary-100': {},
    },
  };

  private smBtn = {
    '@apply px-3 py-2 text-label-sm tracking-tight leading-6': {},
  };

  private mdBtn = {
    '@apply px-5 py-2.5 text-label-sm tracking-tight leading-6': {},
  };

  private lgbBtn = {
    '@apply px-6 py-4 text-label-xl tracking-tight leading-7': {},
  };

  /**
   * Build the button styles.
   */
  public build() {
    return {
      '.btn': {
        ...this.defaultButton,
        '&-outline': {
          ...this.outlineButton(),
        },

        '&-min': {
          ...this.minBtn,
        },

        '&-text': {
          ...this.textBtn,
        },
        '&-sm': {
          ...this.smBtn,
        },

        '&-md': {
          ...this.mdBtn,
        },

        '&-lg': {
          ...this.lgbBtn,
        },
      },
    };
  }
}
