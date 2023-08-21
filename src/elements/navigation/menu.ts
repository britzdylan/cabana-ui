import createVariants from '../../lib/colorVariants';
import directives from '../../lib/directives';
const { getRadius, iconSize } = directives;
const defaultColor = 'neutral';
const defaultRadius = '1';

const menu = (theme: (arg0: string) => string | number) => {
  const base = {
    listStyle: 'none',
    display: 'flex',
    gap: theme('spacing.2'),
    alignItems: 'center',
    justifyContent: 'flex-start',
  };

  const listItemColors = (color: string) => {
    return {
      color: theme(`colors.${color}.500`),
      '&:focus': {
        color: theme(`colors.${color}.900`),
      },
      '&focus-visible': {
        color: theme(`colors.${color}.900`),
      },
      '&.disabled': {
        color: theme(`colors.${color}.200`),
        PointerEvents: 'none',
        cursor: 'default',
        backgroundColor: 'transparent',
      },
      '&:hover': {
        color: theme(`colors.${color}.800`),
      },
      '&:active': {
        color: theme(`colors.${color}.800`),
      },
      '&:visited': {
        color: theme(`colors.${color}.700`),
      },
      '&.active': {
        color: theme(`colors.${color}.800`),
        fontWeight: theme('fontWeight.semibold'),
      },
    };
  };

  const listItemAltColors = (color: string) => {
    return {
      '& li': {
        ...listItemColors(color),
      },
    };
  };

  const listItem = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme('spacing.2'),
    padding: `${theme('spacing[2]')} ${theme('spacing.4')}`,
    cursor: 'pointer',
    position: 'relative',
    lineHeight: theme('spacing.4'),
    fontSize: theme('fontSize.label-sm'),
    ...getRadius(theme, defaultRadius),
    ...listItemColors(defaultColor),
  };

  const containedItem = {
    '&:hover': {
      color: theme(`colors.${defaultColor}.500`),
      backgroundColor: theme(`colors.${defaultColor}.100`),
    },
    '&.active': {
      color: '#fff',
      fontWeight: theme('fontWeight.semibold'),
      background: theme(`colors.${defaultColor}.800`),
      '& a': {
        background: 'transparent',
      },
      '&:hover': {
        background: theme(`colors.${defaultColor}.800`),
        color: '#fff',
      },
    },
    '&.disabled': {
      color: theme(`colors.${defaultColor}.200`),
      PointerEvents: 'none',
      cursor: 'default',
      backgroundColor: 'transparent',
    },
  };

  const containedItemColors = (color: string) => {
    return {
      '& li': {
        ...listItemColors(color),
        '&:hover': {
          backgroundColor: theme(`colors.${color}.100`),
          color: theme(`colors.${color}.500`),
        },
        '&.active': {
          background: theme(`colors.${color}.800`),
          '&:hover': {
            background: theme(`colors.${color}.800`),
            color: '#fff',
          },
        },
        '&.disabled': {
          color: theme(`colors.${color}.200`),
          PointerEvents: 'none',
          cursor: 'default',
          backgroundColor: 'transparent',
        },
      },
    };
  };

  const menu = {
    ...base,
    '& li': {
      ...listItem,
      '& .icon': {
        ...iconSize(theme, 4),
      },
      '& svg': {
        ...iconSize(theme, 4),
      },
      '& a': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme('spacing.2'),
        padding: 0,
        textDecoration: 'none',
        color: 'inherit',
        '& .icon': {
          ...iconSize(theme, 4),
        },
        '& svg': {
          ...iconSize(theme, 4),
        },
      },
    },
    ...Object.fromEntries(createVariants(listItemAltColors)),
    '&-contained': {
      '& li': {
        ...containedItem,
      },
      '&-rounded': {
        '& li': {
          ...containedItem,
          borderRadius: '9999px',
          padding: `${theme('spacing[2]')} ${theme('spacing.4')}`,
        },
      },
      ...Object.fromEntries(createVariants(containedItemColors)),
    },
    '&-vertical': {
      width: '100%',
      flexDirection: 'column',
      gap: theme('spacing.3'),
      alignItems: 'flex-start',
      '& li': {
        width: '100%',
        justifyContent: 'flex-start',
      },
    },
  };

  return {
    'ul.menu': {
      ...menu,
    },
    'ol.menu': {
      ...menu,
    },
  };
};

export default menu;
