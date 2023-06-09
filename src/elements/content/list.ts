import createVariants from '../../lib/colorVariants';
import directives from '../../lib/directives';
const { iconSize } = directives;
const defaultColor = 'gray';

const list = (theme: (arg0: string) => string | number) => {
  const colors = (color: string) => {
    return { color: theme(`colors.${color}.600`) };
  };

  const listItem = {
    fontSize: theme('fontSize.label'),
    color: 'inherit',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme('spacing.2'),
    '&.featured': {
      fontWeight: theme('fontWeight.semibold'),
    },
  };

  const listStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    color: theme(`colors.${defaultColor}.600`),
    '& li': {
      ...listItem,
      '& .icon': {
        ...iconSize(theme, 4),
      },
      '& svg': {
        ...iconSize(theme, 4),
      },
    },

    '&-large': {
      '& li': {
        ...listItem,
        fontSize: theme('fontSize.label-xl'),
        '& .icon': {
          ...iconSize(theme, 6),
        },
        '& svg': {
          ...iconSize(theme, 6),
        },
      },
    },
  };
  return {
    '.list': {
      ...listStyle,
      ...Object.fromEntries(createVariants(colors)),
    },
  };
};

export default list;
