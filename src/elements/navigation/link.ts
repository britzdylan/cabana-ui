const baseLink = (theme: (arg0: string) => string | number) => {
  const iconSize = (size: number) => {
    return {
      height: theme(`spacing.${size}`),
    };
  };

  return {
    color: theme('colors.primary.500'),
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme('spacing.1'),
    cursor: 'pointer',
    position: 'relative',
    fontSize: theme(`fontSize.body`),
    fontWeight: theme(`fontWeight.medium`),
    '&:hover': {
      color: theme('colors.primary.600'),
    },
    '&:focus': {
      color: theme('colors.primary.600'),
    },
    '&focus-visible': {
      color: theme('colors.primary.600'),
    },
    '&:disabled': {
      color: theme('colors.primary.200'),
      PointerEvents: 'none',
    },
    '&:active': {
      color: theme('colors.primary.800'),
    },
    '& .icon': {
      ...iconSize(5),
    },

    '& svg': {
      ...iconSize(5),
    },

    '& img': {
      ...iconSize(5),
    },
  };
};

const link = (theme: (arg0: string) => string | number) => {
  const fancyLink = {
    content: '""',
    display: 'block',
    width: '100%',
    height: '2px',
    background: theme('colors.primary.500'),
    transition: 'transform 250ms ease-in-out',
    position: 'absolute',
    bottom: '0',
  };

  return {
    'a.link': {
      ...baseLink(theme),
      //create me an underline for the link using after
      '&-fancy::after': {
        ...fancyLink,
      },
      '&-fancy-hover::after': {
        ...fancyLink,
        transform: 'scaleX(0)',
      },
      '&-fancy-hover:hover::after': {
        transform: 'scaleX(1)',
      },
      '&-fancy-hover:active::after': {
        transform: 'scaleX(1)',
      },
      '&-sm': {
        fontSize: theme(`fontSize.body-sm`),
        fontWeight: theme(`fontWeight.medium`),
      },
      '&-xs': {
        fontSize: theme(`fontSize.body-xs`),
        fontWeight: theme(`fontWeight.medium`),
      },
      '&-lg': {
        fontSize: theme(`fontSize.body-lg`),
        fontWeight: theme(`fontWeight.medium`),
      },
      '&-xl': {
        fontSize: theme(`fontSize.body-xl`),
        fontWeight: theme(`fontWeight.medium`),
      },
    },
  };
};

export { link };
