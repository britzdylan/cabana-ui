import createVariants from '../../lib/colorVariants';
import directives from '../../lib/directives';
const { iconSize } = directives;
const defaultColor = 'gray';

const tabs = (theme: (arg0: string) => string | number) => {
  // mobile tabs (for small screens) with and without icons
  // navigation tabs (for large screens) with and without icons
  // active states: border-bottom, background-color, text-color

  const defualtColors = (color: string) => {
    return {
      color: theme(`colors.${color}.500`),
      '&:hover': {
        color: theme(`colors.${color}.400`),
      },
      '&.active': {
        color: theme(`colors.${color}.700`),
      },
    };
  };

  const borderedColors = (color: string) => {
    return {
      color: theme(`colors.${color}.500`),
      '&:hover': {
        color: theme(`colors.${color}.400`),
        borderBottom: `2px solid ${theme(`colors.${color}.400`)}`,
      },
      '&.active': {
        color: theme(`colors.${color}.700`),
        borderBottom: `2px solid ${theme(`colors.${color}.500`)}`,
      },
    };
  };

  const backgroundColors = (color: string) => {
    return {
      color: theme(`colors.${color}.500`),
      '&:hover': {
        color: theme(`colors.${color}.400`),
        backgroundColor: `${theme(`colors.${color}.50`)}`,
      },
      '&.active': {
        color: theme(`colors.${color}.700`),
        backgroundColor: `${theme(`colors.${color}.100`)}`,
      },
    };
  };

  const variationColors = (color: string) => {
    return {
      '&-mobile': {
        '& button': {
          ...defualtColors(color),
        },
      },
      '&-navigation': {
        '& button': {
          ...defualtColors(color),
        },
      },
      '&-bordered': {
        '& button': {
          ...borderedColors(color),
        },
      },
      '&-background': {
        '& button': {
          ...backgroundColors(color),
        },
      },
    };
  };

  const button = {
    display: 'flex',
    alignItems: 'center',
    gap: theme('spacing.1'),
    flexDirection: 'column',
    fontSize: theme('fontSize.label-sm'),
    fontWeight: theme('fontWeight.medium'),
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    borderTopLeftRadius: theme('spacing.2'),
    borderTopRightRadius: theme('spacing.2'),
    '& .icon': {
      ...iconSize(theme, 4),
    },
    '& svg': {
      ...iconSize(theme, 4),
    },
  };
  return {
    '.tabs': {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      '&-mobile': {
        '& button': {
          ...button,
          padding: `${theme('spacing.4')} ${theme('spacing.8')}`,
          '& .icon': {
            ...iconSize(theme, 5),
          },
          '& svg': {
            ...iconSize(theme, 5),
          },
          ...defualtColors(defaultColor),
        },
      },
      '&-navigation': {
        '& button': {
          ...button,
          padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
          ...defualtColors(defaultColor),
        },
        '&-large': {
          '& button': {
            fontSize: theme('fontSize.label'),
            '& .icon': {
              ...iconSize(theme, 5),
            },
            '& svg': {
              ...iconSize(theme, 5),
            },
          },
        },
      },
      '&-bordered': {
        '& button': {
          ...borderedColors(defaultColor),
        },
      },
      '&-background': {
        '& button': {
          ...backgroundColors(defaultColor),
        },
      },
      ...Object.fromEntries(createVariants(variationColors)),
    },
  };
};

export default tabs;
