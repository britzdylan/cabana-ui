const defaultColor = 'primary';
import createVariants from '../../lib/colorVariants';
import directives from '../../lib/directives';
const { iconSize } = directives;

const baseLink = (theme: (arg0: string) => string | number) => {
  return {
    color: theme(`colors.${defaultColor}.500`),
    textDecoration: 'none',
    display: 'inline flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme('spacing.1'),
    cursor: 'pointer',
    position: 'relative',
    fontSize: theme(`fontSize.body`),
    fontWeight: theme(`fontWeight.medium`),
    '&:hover': {
      color: theme(`colors.${defaultColor}.600`),
    },
    '&:focus': {
      color: theme(`colors.${defaultColor}.600`),
    },
    '&focus-visible': {
      color: theme(`colors.${defaultColor}.600`),
    },
    '&:disabled': {
      color: theme(`colors.${defaultColor}.200`),
      PointerEvents: 'none',
    },
    '&:active': {
      color: theme(`colors.${defaultColor}.800`),
    },
    '& .icon': {
      ...iconSize(theme, 5),
    },

    '& svg': {
      ...iconSize(theme, 5),
    },
  };
};

const link = (theme: (arg0: string) => string | number) => {
  const fancyLink = {
    content: '""',
    display: 'block',
    width: '100%',
    height: '2px',
    background: theme(`colors.${defaultColor}.500`),
    transition: 'transform 250ms ease-in-out',
    position: 'absolute',
    bottom: '0',
  };

  const linkColors = (color: string) => {
    return {
      color: theme(`colors.${color}.500`),
      '&:hover': {
        color: theme(`colors.${color}.600`),
      },
      '&:focus': {
        color: theme(`colors.${color}.600`),
      },
      '&focus-visible': {
        color: theme(`colors.${color}.600`),
      },
      '&:disabled': {
        color: theme(`colors.${color}.200`),
        PointerEvents: 'none',
      },
      '&:active': {
        color: theme(`colors.${color}.800`),
      },
    };
  };

  return {
    '.link': {
      ...baseLink(theme),
      '&-active': {
        color: theme(`colors.${defaultColor}.800`),
      },
      //create me an underline for the link using after
      '&-underline': {
        '&-active': {
          color: theme(`colors.${defaultColor}.800`),
        },
      },
      '&-underline::after': {
        ...fancyLink,
      },
      '&-hover::after': {
        ...fancyLink,
        transform: 'scaleX(0)',
      },
      '&-hover:hover::after': {
        transform: 'scaleX(1)',
      },
      '&-hover:active::after': {
        transform: 'scaleX(1)',
      },
      '&-hover': {
        '&-active::after': {
          transform: 'scaleX(1)',
        },
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
      ...Object.fromEntries(createVariants(linkColors)),
    },
  };
};

export { link };
