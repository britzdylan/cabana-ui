const menu = (theme: (arg0: string) => string | number) => {
  const menu = {
    listStyle: 'none',
    display: 'flex',
    gap: theme('spacing.2'),
    alignItems: 'center',
    justifyContent: 'flex-start',
    '&-vertical': {
      flexDirection: 'column',
    },
  };

  const listItem = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme('spacing.2'),
    padding: `${theme('spacing[1.5]')} ${theme('spacing.3')}`,
    cursor: 'pointer',
    position: 'relative',
    fontSize: theme('fontSize.label'),
    color: theme('colors.gray.600'),
    borderRadius: theme('spacing.1'),
  };

  const setColorShade = (color: number) => {
    return {
      color: theme(`colors.gray.${color}`),
    };
  };

  const icon = {
    width: theme('spacing.4'),
    height: theme('spacing.4'),
  };

  const containedItem = {
    color: '#fff',
    fontWeight: theme('fontWeight.semibold'),
    background: '#000',
  };

  return {
    'ul.menu': {
      ...menu,
      '& li': {
        ...listItem,
        '&:focus': {
          ...setColorShade(800),
        },
        '&focus-visible': {
          ...setColorShade(800),
        },
        '&:disabled': {
          ...setColorShade(200),
          PointerEvents: 'none',
        },
        '& .icon': {
          ...icon,
        },
        '& svg': {
          ...icon,
        },
        '& a': {
          ...listItem,
          padding: 0,
          textDecoration: 'none',
          '& .icon': {
            ...icon,
          },
          '& svg': {
            ...icon,
          },
          '&:disabled': {
            ...setColorShade(200),
            PointerEvents: 'none',
          },
        },
      },

      '& li.active': {
        color: theme('colors.gray.900'),
        fontWeight: theme('fontWeight.semibold'),
      },

      '&-contained': {
        '& li.active': {
          ...containedItem,
          '& a': {
            ...containedItem,
          },
        },
        '&-rounded': {
          '& li': {
            borderRadius: '9999px',
            padding: `${theme('spacing[1.5]')} ${theme('spacing.3')}`,
          },
          '& li.active': {
            ...containedItem,
            '& a': {
              ...containedItem,
            },
          },
        },
      },
    },
  };
};

export default menu;
